(function(){
  function footerRoots(){
    var out=[], all=document.querySelectorAll('div,footer');
    for(var i=0;i<all.length;i++){
      var t=all[i].textContent||'';
      if(t.indexOf('Product')>=0&&t.indexOf('Legal')>=0&&t.indexOf('Vivora, Inc')>=0&&t.length<3000) out.push(all[i]);
    }
    return out.filter(function(e){ return !out.some(function(o){ return o!==e && e.contains(o); }); });
  }
  function textNode(a,label){
    var els=a.querySelectorAll('*');
    for(var i=els.length-1;i>=0;i--){
      if((els[i].textContent||'').trim()===label && els[i].children.length===0) return els[i];
    }
    return a;
  }
  function hideRow(a,label){
    var top=a;
    while(top.parentElement && (top.parentElement.textContent||'').trim()===label) top=top.parentElement;
    top.style.display='none';
  }
  function navRoots(){
    return Array.prototype.slice.call(document.querySelectorAll('nav'));
  }
  function build(){
    footerRoots().forEach(function(root){
      if(!root||root.getAttribute('data-vv-foot')) return;
      root.setAttribute('data-vv-foot','1');
      var links=root.querySelectorAll('a');
      for(var i=0;i<links.length;i++){
        var a=links[i];
        var t=(a.textContent||'').trim();
        var href=a.getAttribute('href')||'';
        if(/instagram|github|twitter|x\.com|linkedin|tiktok|facebook/i.test(href)){ a.style.display='none'; continue; }
        if(t==='') continue;
        if(t==='Features'||t==='Company'||t==='Resources'||t==='Career'||t==='Changelog'||t==='404'){ hideRow(a,t); continue; }
        if(t==='Integrations'){ textNode(a,'Integrations').textContent='FAQ'; t='FAQ'; }
        if(t==='Contact Us'){ textNode(a,'Contact Us').textContent='Contact'; a.setAttribute('href','mailto:hello@vivora.app'); continue; }
        if(t==='Privacy'){ a.setAttribute('href','privacy.html'); a.removeAttribute('target'); continue; }
        if(t==='Terms'){ a.setAttribute('href','terms.html'); a.removeAttribute('target'); continue; }
      }
    });
    navRoots().forEach(function(root){
      if(!root||root.getAttribute('data-vv-nav')) return;
      root.setAttribute('data-vv-nav','1');
      var links=root.querySelectorAll('a');
      for(var i=0;i<links.length;i++){
        var a=links[i];
        var t=(a.textContent||'').trim();
        if(t==='Features'||t==='Company'||t==='Resources'){ hideRow(a,t); }
      }
    });
  }
  var n=0, iv=setInterval(function(){ build(); if(++n>120) clearInterval(iv); },250);
  if(document.readyState!=='loading') build();
  document.addEventListener('DOMContentLoaded',build);
})();
