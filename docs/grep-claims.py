import os,re,sys,unicodedata
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def norm(s): return ''.join(c for c in unicodedata.normalize('NFD',s.lower()) if unicodedata.category(c)!='Mn')
PATS={
 '#1':r'#1\b|operador numero 1|numero uno en mexico',
 '10 años':r'\+ ?10 anos|\b10 anos|mas de una decada|una decada',
 'millón órdenes':r'1,000,000|1\.000\.000|millon de ordenes|\+1 ?m\b|\+1m ',
 '97 %':r'97 ?%',
 'Distintivo H':r'distintivo h\b',
 'licencia sanitaria':r'licencia sanitaria',
 'nutriólogos':r'nutriolog',
 '3 minutos':r'menos de 3 min|<3 min|3 minutos',
 '200,000':r'200,000|200 mil',
 'NutriMood':r'nutrimood',
 'cero efectivo':r'cero efectivo|sin efectivo',
 'huella':r'huella',
 'biométrico':r'biometric',
 'próximamente':r'proximamente',
 'comisariato':r'comisariato',
 'congelado':r'congelad',
 'Northridge':r'northridge',
 'aman':r'que los alumnos (realmente )?aman|alumnos aman',
 'cero carga':r'cero carga',
}
targets=[os.path.join(ROOT,'src'),os.path.join(ROOT,'public/llms.txt')]
out=[]
for t in targets:
    files=[t] if os.path.isfile(t) else [os.path.join(d,f) for d,_,fs in os.walk(t) for f in fs]
    for f in sorted(files):
        if not f.endswith(('.ts','.tsx','.txt','.css','.md','.json','.mjs')): continue
        for i,line in enumerate(open(f,encoding='utf-8',errors='ignore'),1):
            n=norm(line)
            for k,p in PATS.items():
                if re.search(p,n):
                    out.append((os.path.relpath(f,ROOT),i,k,line.strip()[:200]))
mode=sys.argv[1] if len(sys.argv)>1 else 'full'
if mode=='count':
    from collections import Counter
    for k,v in Counter(o[2] for o in out).most_common(): print(f'{v:4} {k}')
    print('TOTAL',len(out))
else:
    for o in out: print(f'{o[0]}:{o[1]} [{o[2]}] {o[3]}')
