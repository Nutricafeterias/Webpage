/* Service worker de la demo ITJ: guarda todo en el equipo para que funcione sin internet y rápido.
   Estrategia: responde del caché al instante y, si hay internet, actualiza en segundo plano. */
const CACHE='nutri-demo-itj-v4';
const ARCHIVOS=['/demo/itj','/demo/itj/logo.png','/demo/itj/isotipo.png','/demo/itj/logo_itj.png','/demo/itj/logo_itj_solo.png',
  ...[400,500,600,700,800].map(w=>`/demo/itj/fonts/montserrat-${w}.woff2`)];
// Copia limpia (sin la marca de «redirigida», que Chrome no acepta al servir una navegación desde caché)
const limpia=async r=>new Response(await r.blob(),{status:r.status,statusText:r.statusText,headers:r.headers});
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(ARCHIVOS.map(a=>fetch(a,{cache:'reload'}).then(async r=>{if(r.ok)await c.put(a,await limpia(r))})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('nutri-demo-itj')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin||!u.pathname.startsWith('/demo/itj'))return; // la cámara (127.0.0.1) no pasa por aquí
  const clave=e.request.mode==='navigate'?'/demo/itj':u.pathname.replace(/\/$/,'');
  e.respondWith(caches.open(CACHE).then(async c=>{
    const guardado=await c.match(clave);
    const red=fetch(clave).then(async r=>{if(r.ok){const l=await limpia(r);await c.put(clave,l.clone());return l}return r}).catch(()=>null);
    if(guardado){e.waitUntil(red);return guardado}
    return (await red)||new Response('Sin conexión',{status:503});
  }));
});
