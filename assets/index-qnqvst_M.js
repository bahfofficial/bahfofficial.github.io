(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`seven-laws-phase-2`,t=`learning-os.v1`,n=`Teaching means causing learning. If they have not learned, you have not taught. That is the Law of the Learner. Mindset flip. The wrong move is coherent speaking and covering material. The right move is what happens in the student. When you teach, you are 100 percent responsible to cause it. Three maxims. Teachers are responsible to cause students to learn. Teachers should judge their success by the success of their students. Teachers exist to serve the students. Method move. You control subject, style, and speaker. If they are not learning, change one of those now. Stop the content. Recover the learner. Then check with a teach-back. Today's REP. Ten minutes. Teach two minutes of one idea. Demand proof. If they cannot show it, you have not taught. Start the timer.`,r=[`Where did you cover instead of cause, and what did you change to recover the learner?`,`What is this week's irreducible minimum, in the exact words the learner can still say?`,`What live proof exists that someone other than you learned it?`],i=[`Live rep beats consume. If claimed finished from watching, ask what was run live.`,`Skip-law watch: Learner, Retention, and Application get overused. Force Need, Expectation, and Revival on their weeks.`,`Refuse all-seven-this-weekend.`,`Methods over stories. Success = learner produced proof.`,`Two laws per week only.`],a=[{week:1,pair:`Learner + Retention`,lawIds:[`learner`,`retention`]},{week:2,pair:`Need + Application`,lawIds:[`need`,`application`]},{week:3,pair:`Expectation + Equipping`,lawIds:[`expectation`,`equipping`]},{week:4,pair:`Revival + capstone`,lawIds:[`revival`,`equipping`]}];function o(e,t,n,r,i){return{key:e,label:t,lawId:n,move:r,liveRep:i}}function s(){return{id:e,name:`Seven Laws of the Learner`,purpose:`Phase 2 live pack. Cause learning with weekly live reps, not binge watching. Two laws per week. Proof is the only pass.`,seeded:!0,osState:`Phase 2 live`,laws:[{id:`learner`,name:`Learner`,essence:`Cause learning; covering is not teaching`,methodCue:`Cause-to-learn; stop content and recover learner`,confidence:`solid`,audioScript:n,brief:[`Law of the Learner. Cause learning; covering is not teaching.`,`If they have not learned, you have not taught.`,`Teachers are responsible to cause students to learn.`,`Teachers should judge their success by the success of their students.`,`Teachers exist to serve the students. Control subject, style, and speaker.`,`Stop the content. Recover the learner. Then check with a teach-back.`],rep:{minutes:10,setup:`Setup 30s: one idea + proof line. Teach 2 min. Stop. Demand proof. If fail: cut content / change style / change speaker.`,proofPrompt:`[Name] can now ____, which they could not do before this rep.`,passRule:`PASS = proof produced.`,failRule:`FAIL = coverage without outcome.`}},{id:`expectation`,name:`Expectation`,essence:`Expect the best`,methodCue:`Blossom: notice, name act, name feel, name future, endear`,confidence:`solid-secondary`},{id:`application`,name:`Application`,essence:`Life change not content excitement`,methodCue:`Explain, distill, personalize, persuade, evaluate`,confidence:`solid-secondary`},{id:`retention`,name:`Retention`,essence:`Irreducible minimum, mind-easy, review`,methodCue:`Overview, organize, outline, IM, mind-easy, review`,confidence:`solid-secondary`},{id:`need`,name:`Need`,essence:`Bait felt need before content-hook`,methodCue:`Seize, stir curiosity, stimulate felt, surface real, satisfy`,confidence:`provisional`},{id:`equipping`,name:`Equipping`,essence:`Coach the skill; judge post-class`,methodCue:`Instruct, illustrate, involve, improve, inspire`,confidence:`provisional`},{id:`revival`,name:`Revival`,essence:`Restore slipped Christian; Nathan move`,methodCue:`Revelation, reprove, repent, recommit, restore`,confidence:`provisional`}],weeks:[{week:1,title:`Learner + Retention`,lawIds:[`learner`,`retention`],bingeGuard:`Two laws only. Do not pull in Need, Expectation, or Revival this week.`,days:[o(`mon`,`Mon`,`learner`,`Flip cover-to-cause.`,`Teach 2 min of one idea, demand teach-back, reteach the gap. Proof sentence required.`),o(`tue`,`Tue`,`learner`,`Recover the learner on first glaze; change style or cut content.`,`Stop at glaze. Change style or cut content. Demand proof on the same idea.`),o(`wed`,`Wed`,`learner`,`Grade only by student proof; reteach the gap, no new material.`,`No new material. Reteach the gap until proof appears.`),o(`thu`,`Thu`,`retention`,`Cut the caused topic to 3-5 IM facts; teach only IM; check recall.`,`Teach only the IM. Check recall. Misses stay in the IM; do not add facts.`),o(`fri`,`Fri`,`retention`,`One picture or acronym; learner reproduces from memory.`,`Show one mind-easy device. Learner reproduces it from memory.`),o(`sat`,`Sat`,`retention`,`Same-order review; misses get re-review, not new facts.`,`Review in the same order. Re-review misses. No new facts.`),o(`sun`,`Sun`,null,`Three AAR questions only. No new law.`,`AAR only. Do not start Week 2.`)],watch:[{id:`w1-learner-1`,title:`Learner Part 1`,videoId:`ZbJNnvIvyZE`,url:`https://www.youtube.com/watch?v=ZbJNnvIvyZE`,lawId:`learner`,doAfter:`Run today's REP. Teach 2 min, demand proof.`},{id:`w1-learner-2`,title:`Learner Part 2`,videoId:`qqMrUUVjuyg`,url:`https://www.youtube.com/watch?v=qqMrUUVjuyg`,lawId:`learner`,doAfter:`Pause-and-recover. On first glaze, stop content and recover the learner.`},{id:`w1-retention-1`,title:`Retention Part 1`,videoId:`y8VwYvbp9jg`,url:`https://www.youtube.com/watch?v=y8VwYvbp9jg`,lawId:`retention`,doAfter:`Cut to IM. Teach only 3-5 irreducible facts.`},{id:`w1-retention-2`,title:`Retention Part 2`,videoId:`FTDFYKqwmJM`,url:`https://www.youtube.com/watch?v=FTDFYKqwmJM`,lawId:`retention`,doAfter:`Build one mind-easy device. Learner reproduces it from memory.`}],aar:r},{week:2,title:`Need + Application`,lawIds:[`need`,`application`],bingeGuard:`Force Need this week. Do not skip it for Learner or Retention comfort.`,days:[o(`mon`,`Mon`,`need`,`Bait felt need before content-hook.`,`Seize the felt need. Do not start content until it is named.`),o(`tue`,`Tue`,`need`,`Stir curiosity; stimulate felt need.`,`Stir curiosity, then one idea only. Demand the learner name the need.`),o(`wed`,`Wed`,`need`,`Surface the real need; then satisfy.`,`Surface the real need in the learner's words, then satisfy with the IM only.`),o(`thu`,`Thu`,`application`,`Life change, not content excitement.`,`Explain then distill. One life-change target.`),o(`fri`,`Fri`,`application`,`Personalize and persuade.`,`Learner names the next 24-hour application in their own words.`),o(`sat`,`Sat`,`application`,`Evaluate by change, not recap.`,`Proof = a change the learner can point to, not a summary.`),o(`sun`,`Sun`,null,`Three AAR questions only. No new law.`,`AAR only.`)],watch:[],aar:r},{week:3,title:`Expectation + Equipping`,lawIds:[`expectation`,`equipping`],bingeGuard:`Force Expectation this week. Do not skip it for Learner or Retention comfort.`,days:[o(`mon`,`Mon`,`expectation`,`Expect the best. Blossom: notice.`,`Notice a real act. Name it. Demand the learner hear the expectation.`),o(`tue`,`Tue`,`expectation`,`Name act, name feel.`,`Name the act and the feel. Proof = the learner can repeat both.`),o(`wed`,`Wed`,`expectation`,`Name future, endear.`,`Name a future and endear. No new content pile-on.`),o(`thu`,`Thu`,`equipping`,`Coach the skill; judge post-class.`,`Instruct then illustrate one skill. Learner attempts it live.`),o(`fri`,`Fri`,`equipping`,`Involve and improve.`,`Involve the learner. Improve the attempt. Judge after they do it.`),o(`sat`,`Sat`,`equipping`,`Inspire after the attempt, not before the work.`,`One more live attempt. Proof = the skill shown, not the pep talk.`),o(`sun`,`Sun`,null,`Three AAR questions only. No new law.`,`AAR only.`)],watch:[],aar:r},{week:4,title:`Revival + capstone`,lawIds:[`revival`],bingeGuard:`Force Revival this week. Capstone is proof, not a seventh-law dump.`,days:[o(`mon`,`Mon`,`revival`,`Restore; Nathan move. Revelation.`,`Revelation first. Name what slipped. No all-seven recap.`),o(`tue`,`Tue`,`revival`,`Reprove and repent.`,`Reprove with the specific slip. Learner names the repent move.`),o(`wed`,`Wed`,`revival`,`Recommit and restore.`,`Recommit in a proof sentence. Restore by a live attempt.`),o(`thu`,`Thu`,`revival`,`Capstone live rep on this week's pair.`,`One live capstone rep. Methods over stories.`),o(`fri`,`Fri`,null,`Capstone: success = learner produced proof.`,`Run a live proof for someone other than you. No new law.`),o(`sat`,`Sat`,null,`Capstone review of proof, not coverage.`,`Re-run misses. Refuse all-seven-this-weekend.`),o(`sun`,`Sun`,null,`Three AAR questions only. Campaign close.`,`AAR only. Log proof, not watch completions.`)],watch:[],aar:r}]}}function c(e,t){return e.brief?e.brief:[`Law of ${e.name}.`,`Essence: ${e.essence}.`,`Method cue: ${e.methodCue}.`,`Confidence: ${e.confidence}.`,t?`This week's pair: ${t}. Two laws per week only.`:`Two laws per week only.`,`Methods over stories. Success = learner produced proof.`]}function ee(e){return e.audioScript?e.audioScript:[`This is the Law of ${e.name}.`,`Essence. ${e.essence}.`,`Method move. ${e.methodCue}.`,`Live rep beats consume. If they have not produced proof, you have not finished.`,`Methods over stories. Success equals learner produced proof.`,`Ten minutes. Run one live rep. Demand proof. Start the timer.`].join(` `)}function l(e,t,n){let r=[`mon`,`tue`,`wed`,`thu`,`fri`,`sat`,`sun`],i=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`];return{week:e,title:n||`Week ${e}`,lawIds:t.filter(Boolean),bingeGuard:`Two topics per week only. Live rep beats consume.`,days:r.map((e,n)=>({key:e,label:i[n],lawId:e===`sun`?null:t[n<3?0:1]||t[0]||null,move:e===`sun`?`Three AAR questions only. No new topic.`:``,liveRep:e===`sun`?`AAR only.`:``})),watch:[],aar:[`Where did you cover instead of cause, and what did you change to recover the learner?`,`What is this week's irreducible minimum, in the exact words the learner can still say?`,`What live proof exists that someone other than you learned it?`]}}function u(){return[{id:`note-phase-2`,type:`note`,date:`2026-09-14`,text:`Phase 2 started`}]}function d(e=`id`){return`${e}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}function te(){let t=s();return{version:1,activeId:e,curricula:{[e]:t},progress:{[e]:{osState:t.osState,week:1,selectedLawId:`learner`,redesign:``,aarDraft:[``,``,``],lastPanel:`os`}},logs:{[e]:u()}}}function ne(){let n=te(),r=localStorage.getItem(t);if(!r)return f(n),n;try{let t=JSON.parse(r),i={version:1,activeId:t.activeId||`seven-laws-phase-2`,curricula:{...t.curricula||{}},progress:{...t.progress||{}},logs:{...t.logs||{}}};return i.curricula[e]=n.curricula[e],i.progress[`seven-laws-phase-2`]||(i.progress[e]=n.progress[e]),i.logs[`seven-laws-phase-2`]||(i.logs[e]=n.logs[e]),i.curricula[i.activeId]||(i.activeId=e),i}catch{return f(n),n}}function f(e){localStorage.setItem(t,JSON.stringify(e))}function p(e){return e.curricula[e.activeId]}function m(e){if(!e.progress[e.activeId]){let t=p(e);e.progress[e.activeId]={osState:t.osState||`Live`,week:1,selectedLawId:t.laws[0]?.id||null,redesign:``,aarDraft:[``,``,``],lastPanel:`os`}}return e.progress[e.activeId]}function h(e){return e.logs[e.activeId]||(e.logs[e.activeId]=[]),e.logs[e.activeId]}function g(e){let t=p(e),n=m(e).week;return t.weeks.find(e=>e.week===n)||t.weeks[0]}function _(e,t){return p(e).laws.find(e=>e.id===t)||null}function re(e,t){e.curricula[t.id]=t,e.progress[t.id]={osState:t.osState||`Live`,week:1,selectedLawId:t.laws[0]?.id||null,redesign:``,aarDraft:[``,``,``],lastPanel:`os`},e.logs[t.id]=[],e.activeId=t.id,f(e)}function ie(e,t){e.curricula[t]&&(e.activeId=t,f(e))}function v(e,t){h(e).unshift({id:d(`log`),...t}),f(e)}function y(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function b(e=new Date){return[`sun`,`mon`,`tue`,`wed`,`thu`,`fri`,`sat`][e.getDay()]}var x={curricula:`Curricula`,os:`OS`,week:`WEEK`,rep:`REP`,audio:`AUDIO`,watch:`WATCH`,aar:`AAR`,log:`LOG`,brief:`BRIEF`,redesign:`REDESIGN`,wizard:`New Subject`},ae=[[`curricula`,`Curricula`],[`os`,`OS`],[`week`,`WEEK`],[`rep`,`REP`],[`audio`,`AUDIO`],[`watch`,`WATCH`],[`aar`,`AAR`],[`log`,`LOG`],[`wizard`,`New Subject`]],oe=[[`os`,`OS`],[`brief`,`BRIEF`],[`redesign`,`REDESIGN`],[`rep`,`DRILL/REP`],[`audio`,`AUDIO`],[`week`,`WEEK`],[`watch`,`WATCH`],[`aar`,`AAR`]],se=[[`os`,`OS`],[`week`,`WEEK`],[`rep`,`REP`],[`watch`,`WATCH`],[`log`,`LOG`]],S,C=`os`,w=`normal`,T=``,E=null,D={remaining:600,running:!1,handle:null},O=M(),k=null,A=null,j=``;function M(){return{step:1,name:``,purpose:``,topicCount:4,topics:Array.from({length:4},()=>({name:``,essence:``,methodCue:``,confidence:`provisional`})),weekCount:2,pairs:[[0,1],[2,3]],error:``}}function N(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function P(e){T=e;let t=document.querySelector(`[data-status-msg]`);t&&(t.textContent=e),A&&clearTimeout(A),e&&(A=setTimeout(()=>{T=``;let e=document.querySelector(`[data-status-msg]`);e&&(e.textContent=F())},4e3))}function F(){let e=p(S),t=m(S),n=h(S).filter(e=>e.type===`rep`);return `${e.name}  ·  ${t.osState}  ·  WEEK ${t.week}  ·  ${n.length} live reps logged`}function I(e){let t=b();return e.days.find(e=>e.key===t)||e.days[0]}function L(){let e=m(S),t=g(S),n=p(S);return _(S,e.selectedLawId)||_(S,t.lawIds[0])||n.laws[0]||null}function ce(e){return`https://www.youtube-nocookie.com/embed/${encodeURIComponent(e)}?rel=0`}function le(e){return`https://i.ytimg.com/vi/${encodeURIComponent(e)}/hqdefault.jpg`}function R(e){let t=Math.max(0,e),n=Math.floor(t/60),r=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`}function z(){D.handle&&=(clearInterval(D.handle),null),D.running=!1}function B(){if(D.remaining<=0){z(),P(`Timer done. Demand proof now.`),W();return}--D.remaining;let e=document.querySelector(`[data-lcd]`);if(e&&(e.textContent=R(D.remaining)),D.remaining===0){z(),P(`Timer done. Demand proof now.`);let e=document.querySelector(`[data-timer-face]`);e&&e.classList.add(`is-done`)}}function V(){D.running||(D.remaining<=0&&(D.remaining=600),D.running=!0,D.handle=setInterval(B,1e3),P(`Live rep running. Cause learning.`),W())}function H(){z(),D.remaining=600,W()}function U(e){E&&window.speechSynthesis&&window.speechSynthesis.cancel(),E=null,C=e,m(S).lastPanel=e===`wizard`?`os`:e,f(S),W()}function W(){let e=document.getElementById(`app`),t=p(S),n=m(S),r=g(S),i=L(),a=w===`max`,o=w===`min`,s=w===`closed`;e.innerHTML=`
    <div class="desk">
      ${s?ue():``}
      <div class="window ${a?`is-max`:``} ${o?`is-min`:``} ${s?`is-closed`:``}">
        <header class="titlebar">
          <div class="traffic">
            <button class="orb close" data-win="close" title="Close" aria-label="Close"></button>
            <button class="orb min" data-win="min" title="Minimize" aria-label="Minimize"></button>
            <button class="orb max" data-win="max" title="Maximize" aria-label="Maximize"></button>
          </div>
          <h1 class="caption">Learning OS</h1>
          <div class="caption-meta">${N(t.name)}</div>
        </header>
        <nav class="toolbar" aria-label="Main">
          ${ae.map(([e,t])=>`
            <button type="button" class="bevel ${C===e?`is-active`:``}" data-goto="${e}">${N(t)}</button>
          `).join(``)}
        </nav>
        <div class="commands" aria-label="Commands">
          ${oe.map(([e,t])=>`
            <button type="button" class="cmd ${C===e?`is-active`:``}" data-goto="${e}">${N(t)}</button>
          `).join(``)}
        </div>
        ${o?``:`<main class="body">${de(t,n,r,i)}</main>`}
        <footer class="statusbar">
          <div class="well" data-status-msg>${N(T||F())}</div>
          <div class="well well-snap">${N(x[C]||C)}</div>
          <div class="well well-snap">${N(y())}</div>
        </footer>
        <nav class="dock" aria-label="Primary">
          ${se.map(([e,t])=>`
            <button type="button" class="${C===e?`is-active`:``}" data-goto="${e}">
              <span>${N(t)}</span>
            </button>
          `).join(``)}
        </nav>
      </div>
      ${Y()}
    </div>
  `}function ue(){return`
    <button class="restore" data-win="restore">
      <span>Learning OS</span>
      <small>Click to restore</small>
    </button>
  `}function de(e,t,n,r){switch(C){case`curricula`:return fe(e);case`os`:return G(e,t,n);case`week`:return pe(e,t,n);case`rep`:return ge(e,t,n,r);case`audio`:return _e(n,r);case`watch`:return he(n,!1);case`aar`:return ve(t,n);case`log`:return ye();case`brief`:return be(n,r);case`redesign`:return xe(t,n);case`wizard`:return Se();default:return G(e,t,n)}}function fe(e){return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">Library</p>
          <h2>Curricula</h2>
          <p class="lede">Switch subjects without losing the Seven Laws seed. Each curriculum keeps its own WEEK, LOG, and drafts.</p>
        </div>
        <button class="bevel accent" data-goto="wizard">New Subject</button>
      </div>
      <div class="card-grid">
        ${Object.values(S.curricula).map(t=>{let n=(S.logs[t.id]||[]).filter(e=>e.type===`rep`).length,r=S.progress[t.id]?.week||1;return`
              <article class="card ${t.id===e.id?`is-selected`:``}">
                <div class="card-top">
                  <h3>${N(t.name)}</h3>
                  ${t.seeded?`<span class="pill">Seed</span>`:`<span class="pill quiet">Custom</span>`}
                </div>
                <p>${N(t.purpose)}</p>
                <p class="meta">WEEK ${r} · ${t.laws.length} topics · ${n} live reps</p>
                <button class="bevel" data-switch="${N(t.id)}" ${t.id===e.id?`disabled`:``}>
                  ${t.id===e.id?`Active`:`Switch`}
                </button>
              </article>
            `}).join(``)}
      </div>
    </section>
  `}function G(e,t,n){let r=n.bingeGuard;return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">Operating system</p>
          <h2>${N(t.osState)}</h2>
          <p class="lede">${N(e.purpose)}</p>
        </div>
        <div class="lcd-mini" title="Current week">${String(t.week).padStart(2,`0`)}</div>
      </div>
      <div class="split">
        <article class="card">
          <h3>Operating rules</h3>
          <ol class="rules">
            ${i.map(e=>`<li>${N(e)}</li>`).join(``)}
          </ol>
          <p class="callout">${N(r)}</p>
        </article>
        <article class="card">
          <h3>Campaign</h3>
          <p class="hint">Fixed. Refuse binge. Two laws per week only.</p>
          <ul class="campaign">
            ${(e.id===`seven-laws-phase-2`?a:e.weeks).map(e=>{let n=e.pair||e.title,r=e.week;return`
                <li class="${r===t.week?`is-now`:``}">
                  <button class="plain" data-set-week="${r}">
                    <span>W${r}</span>
                    <strong>${N(n)}</strong>
                  </button>
                </li>
              `}).join(``)}
          </ul>
        </article>
      </div>
      <article class="card">
        <h3>Law / topic stack</h3>
        <div class="table-wrap">
          <table class="stack-table">
            <thead>
              <tr>
                <th>Law</th>
                <th>Essence</th>
                <th>Method cue</th>
                <th>Confidence</th>
              </tr>
            </thead>
            <tbody>
              ${e.laws.map(e=>{let r=n.lawIds.includes(e.id),i=t.selectedLawId===e.id;return`
                    <tr class="${r?`on-week`:``} ${i?`is-selected`:``}" data-select-law="${N(e.id)}">
                      <td data-label="Law"><button class="plain strong" data-select-law="${N(e.id)}">${N(e.name)}</button></td>
                      <td data-label="Essence">${N(e.essence)}</td>
                      <td data-label="Method cue">${N(e.methodCue)}</td>
                      <td data-label="Confidence"><span class="pill ${N(e.confidence)}">${N(e.confidence)}</span></td>
                    </tr>
                  `}).join(``)}
            </tbody>
          </table>
        </div>
        <p class="hint">Click a law to load BRIEF, AUDIO, and today's REP target.</p>
      </article>
    </section>
  `}function pe(e,t,n){let r=b(),i=(n.watch||[]).slice(0,4);return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">WEEK ${n.week}</p>
          <h2>${N(n.title)}</h2>
          <p class="lede">${N(n.bingeGuard)}</p>
        </div>
        <div class="week-switch">
          ${e.weeks.map(e=>`
            <button class="bevel ${e.week===n.week?`is-active`:``}" data-set-week="${e.week}">${e.week}</button>
          `).join(``)}
        </div>
      </div>
      <div class="day-grid">
        ${n.days.map(e=>{let t=e.lawId?_(S,e.lawId):null,n=e.key===r;return`
              <article class="card day ${n?`is-today`:``}">
                <header>
                  <span class="day-label">${N(e.label)}</span>
                  ${n?`<span class="pill accent">Today</span>`:``}
                  ${t?`<span class="pill quiet">${N(t.name)}</span>`:`<span class="pill quiet">AAR</span>`}
                </header>
                <p class="move"><strong>MOVE</strong> ${N(e.move||`Write today's MOVE.`)}</p>
                <p class="rep-line"><strong>LIVE REP</strong> ${N(e.liveRep||`Run one live rep. Demand proof.`)}</p>
                ${e.key===`sun`?`<button class="bevel" data-goto="aar">Open AAR</button>`:`<button class="bevel accent" data-goto="rep">Run REP</button>`}
              </article>
            `}).join(``)}
      </div>
      ${i.length?K(i,`Week clips`):`<p class="hint">No clips seeded for this week. Live rep still wins.</p>`}
    </section>
  `}function K(e,t){return`
    <article class="card">
      <h3>${N(t)}</h3>
      <div class="watch-strip">
        ${e.map(e=>q(e,!0)).join(``)}
      </div>
    </article>
  `}function q(e,t=!1){return`
    <article class="video-card ${t?`is-compact`:``}" data-video-card>
      <button class="poster" type="button" data-play="${N(e.videoId)}" aria-label="Play ${N(e.title)}">
        <img src="${le(e.videoId)}" alt="" loading="lazy" />
        <span class="play-glyph" aria-hidden="true">▶</span>
        <span class="poster-title">${N(e.title)}</span>
      </button>
      <div class="do-after">
        <strong>DO after</strong>
        <p>${N(e.doAfter)}</p>
        <div class="row-actions">
          <button class="bevel" type="button" data-goto="rep">Run the live move</button>
          <button class="bevel" type="button" data-watch-ask="${N(e.id)}">I finished watching</button>
        </div>
      </div>
    </article>
  `}function J(e){return(g(S).watch||[]).find(t=>t.id===e)||null}function Y(){if(!k)return``;let e=J(k.id),t=k.title||e?.title||`this clip`,n=k.doAfter||e?.doAfter||`Run the live move.`;return`
    <div class="modal-layer" data-watch-modal>
      <div class="modal card callout-card" role="dialog" aria-modal="true" aria-labelledby="watch-live-title">
        <h3 id="watch-live-title">What was run live?</h3>
        <p>You claimed ${N(t)} finished. Watching does not count and is not written to LOG. Name the live move you actually ran.</p>
        <p class="hint">DO after: ${N(n)}</p>
        <textarea data-watch-live rows="3" placeholder="I ran the live move, and the learner produced...">${N(k.draft||``)}</textarea>
        <div class="row-actions">
          <button class="bevel accent" type="button" data-watch-live-save>It was a live rep, go to REP</button>
          <button class="bevel" type="button" data-watch-live-dismiss>Not yet</button>
        </div>
      </div>
    </div>
  `}function me(e){let t=J(e);k={id:e,title:t?.title||`this clip`,doAfter:t?.doAfter||`Run the live move.`,draft:``};let n=document.querySelector(`.desk`);if(!n){W();return}document.querySelector(`[data-watch-modal]`)?.remove();let r=document.createElement(`div`);r.innerHTML=Y(),n.appendChild(r.firstElementChild),document.querySelector(`[data-watch-live]`)?.focus(),P(`Watching is not finishing. What was run live?`)}function he(e,t){let n=e.watch||[];return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">WATCH</p>
          <h2>Clips, then a live move</h2>
          <p class="lede">Watching is not finishing. After each clip, run the DO after move. Live-rep outcomes go to LOG. Watch completions do not.</p>
        </div>
      </div>
      ${n.length===0?`<article class="card empty">
              <h3>No clips in this week</h3>
              <p>This subject week has no seeded videos. Run the LIVE REP anyway.</p>
              <button class="bevel accent" data-goto="rep">Open REP</button>
            </article>`:`<div class="video-grid">${n.map(e=>q(e,t)).join(``)}</div>`}
    </section>
  `}function ge(e,t,n,r){let i=I(n),a=(i.lawId?_(S,i.lawId):r)||r,o=a?.rep||{minutes:10,setup:i.liveRep||`Ten minutes. One idea. Demand proof.`,proofPrompt:`[Name] can now ____, which they could not do before this rep.`,passRule:`PASS = proof produced.`,failRule:`FAIL = coverage without outcome.`},s=(n.watch||[]).filter(e=>!a||e.lawId===a.id).slice(0,2);return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">Today's REP · ${N(i.label)}</p>
          <h2>${N(a?a.name:`Live rep`)} · ${o.minutes} min</h2>
          <p class="lede">${N(i.move)}</p>
        </div>
        <div class="timer-block">
          <div class="lcd ${D.remaining===0?`is-done`:``}" data-lcd data-timer-face>${R(D.remaining)}</div>
          <div class="timer-actions">
            ${D.running?`<button type="button" class="bevel" data-timer="pause">Pause</button>`:`<button type="button" class="bevel accent" data-timer="start">Start timer</button>`}
            <button type="button" class="bevel" data-timer="reset">Reset</button>
          </div>
        </div>
      </div>
      <div class="split">
        <article class="card">
          <h3>Setup</h3>
          <p>${N(o.setup)}</p>
          <p class="move"><strong>LIVE REP</strong> ${N(i.liveRep)}</p>
          <p class="hint">${N(o.passRule)} ${N(o.failRule)}</p>
        </article>
        <article class="card">
          <h3>Proof sentence</h3>
          <p class="hint">${N(o.proofPrompt)}</p>
          <textarea data-proof rows="4" placeholder="${N(o.proofPrompt)}">${N(j)}</textarea>
          <div class="row-actions thumb-row">
            <button type="button" class="bevel pass" data-rep="pass">Pass</button>
            <button type="button" class="bevel fail" data-rep="fail">Fail</button>
          </div>
        </article>
      </div>
      ${s.length?K(s,`Watch strip · then do the rep`):``}
    </section>
  `}function _e(e,t){let n=t||L();if(!n)return`<section class="card empty"><p>Add a topic before AUDIO can speak.</p></section>`;let r=ee(n);return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">AUDIO · 60-90s</p>
          <h2>${N(n.name)} script</h2>
          <p class="lede">Read it aloud or use Speak. Then run the live rep. Do not substitute listening for proof.</p>
        </div>
        <div class="row-actions">
          <button class="bevel accent" data-copy-audio>Copy</button>
          <button class="bevel" data-speak>Speak</button>
          <button class="bevel" data-speak-stop>Stop</button>
        </div>
      </div>
      <article class="card script">
        <p data-audio-script>${N(r)}</p>
      </article>
      <p class="hint">This week's pair: ${N(e.title)}. Two laws only.</p>
    </section>
  `}function ve(e,t){let n=t.aar||[];return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">AAR · WEEK ${t.week}</p>
          <h2>After action</h2>
          <p class="lede">Three questions only. No new law. Save writes to LOG as an AAR, not as a watch completion.</p>
        </div>
      </div>
      <article class="card">
        ${n.map((t,n)=>`
          <label class="field">
            <span>${n+1}. ${N(t)}</span>
            <textarea data-aar="${n}" rows="3">${N(e.aarDraft[n]||``)}</textarea>
          </label>
        `).join(``)}
        <div class="row-actions">
          <button class="bevel accent" data-aar-save>Save AAR to LOG</button>
        </div>
      </article>
    </section>
  `}function ye(){let e=h(S).filter(e=>e.type!==`watch`);return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">LOG</p>
          <h2>Live-rep outcomes</h2>
          <p class="lede">Pass, fail, notes, and AARs. Watch completions stay out.</p>
        </div>
      </div>
      ${e.length===0?`<article class="card empty"><p>No live-rep outcomes yet. Run today's REP.</p><button class="bevel accent" data-goto="rep">Open REP</button></article>`:`<ol class="log-list">
              ${e.map(e=>e.type===`note`?`<li class="card log-item"><time>${N(e.date)}</time><p>${N(e.text)}</p><span class="pill quiet">Note</span></li>`:e.type===`aar`?`<li class="card log-item">
                      <time>${N(e.date)}</time>
                      <p><strong>AAR · WEEK ${N(e.week)}</strong></p>
                      <ol>${(e.answers||[]).map(e=>`<li>${N(e)}</li>`).join(``)}</ol>
                      <span class="pill">AAR</span>
                    </li>`:`<li class="card log-item">
                    <time>${N(e.date)}</time>
                    <p><strong>${N(e.result?.toUpperCase())}</strong> · ${N(e.lawName||`Rep`)} · WEEK ${N(e.week)}</p>
                    <p>${N(e.proof||`No proof sentence.`)}</p>
                    <span class="pill ${e.result===`pass`?`pass`:`fail`}">${N(e.result)}</span>
                  </li>`).join(``)}
            </ol>`}
    </section>
  `}function be(e,t){let n=t||L();if(!n)return`<section class="card empty"><p>Select a law in OS first.</p></section>`;let r=c(n,e.title);return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">BRIEF</p>
          <h2>${N(n.name)}</h2>
          <p class="lede">Six lines. Methods over stories. Confidence: ${N(n.confidence)}.</p>
        </div>
        <button class="bevel accent" data-goto="rep">DRILL/REP</button>
      </div>
      <ol class="brief-lines">
        ${r.map(e=>`<li class="card">${N(e)}</li>`).join(``)}
      </ol>
    </section>
  `}function xe(e,t){return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">REDESIGN</p>
          <h2>Rebuild the talk around this week's pair</h2>
          <p class="lede">${N(t.lawIds.map(e=>_(S,e)?.name).filter(Boolean).join(` + `)||t.title)}. Two laws only. Cause learning; do not cover more.</p>
        </div>
      </div>
      <article class="card">
        <label class="field">
          <span>Talk rebuild</span>
          <textarea data-redesign rows="12" placeholder="Cut the talk to this week's two laws. Name the IM. Name the live proof.">${N(e.redesign)}</textarea>
        </label>
        <div class="row-actions">
          <button class="bevel accent" data-redesign-save>Save draft</button>
        </div>
      </article>
    </section>
  `}function Se(){let e=O;return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">New Subject</p>
          <h2>Reusable curriculum shell</h2>
          <p class="lede">Create a blank subject. Seven Laws stays in the library. Two topics per week.</p>
        </div>
        <p class="step-indicator">Step ${e.step} of 3</p>
      </div>
      ${e.error?`<p class="callout">${N(e.error)}</p>`:``}
      ${e.step===1?Ce(e):``}
      ${e.step===2?we(e):``}
      ${e.step===3?Te(e):``}
    </section>
  `}function Ce(e){return`
    <article class="card">
      <label class="field">
        <span>Subject name</span>
        <input data-wiz="name" value="${N(e.name)}" placeholder="Exodus 1-12" />
      </label>
      <label class="field">
        <span>Purpose</span>
        <textarea data-wiz="purpose" rows="3" placeholder="What live proof should a learner produce?">${N(e.purpose)}</textarea>
      </label>
      <label class="field inline">
        <span>Number of topics / laws</span>
        <input data-wiz="topicCount" type="number" min="1" max="12" value="${N(e.topicCount)}" />
      </label>
      <div class="row-actions">
        <button class="bevel accent" data-wiz-next>Next · topics</button>
      </div>
    </article>
  `}function we(e){return`
    <article class="card">
      <h3>Topics</h3>
      <p class="hint">Each topic needs an essence move, a method cue, and a confidence.</p>
      ${e.topics.map((e,t)=>`
        <fieldset class="topic-block">
          <legend>Topic ${t+1}</legend>
          <label class="field"><span>Name</span><input data-topic="${t}" data-field="name" value="${N(e.name)}" /></label>
          <label class="field"><span>Essence move</span><input data-topic="${t}" data-field="essence" value="${N(e.essence)}" /></label>
          <label class="field"><span>Method cue</span><input data-topic="${t}" data-field="methodCue" value="${N(e.methodCue)}" /></label>
          <label class="field"><span>Confidence</span>
            <select data-topic="${t}" data-field="confidence">
              ${[`solid`,`solid-secondary`,`provisional`].map(t=>`<option ${e.confidence===t?`selected`:``}>${t}</option>`).join(``)}
            </select>
          </label>
        </fieldset>
      `).join(``)}
      <div class="row-actions">
        <button class="bevel" data-wiz-back>Back</button>
        <button class="bevel accent" data-wiz-next>Next · weekly cadence</button>
      </div>
    </article>
  `}function X(e,t){return e.map((e,n)=>`<option value="${n}"${Number(t)===n?` selected`:``}>${N(e.name||`Topic ${n+1}`)}</option>`).join(``)}function Te(e){return`
    <article class="card">
      <h3>Weekly cadence</h3>
      <p class="hint">Two topics per week. Empty week templates are created for you.</p>
      <label class="field inline">
        <span>Weeks</span>
        <input data-wiz="weekCount" type="number" min="1" max="12" value="${N(e.weekCount)}" />
      </label>
      ${e.pairs.map((t,n)=>`
        <div class="pair-row">
          <span>W${n+1}</span>
          <select data-pair="${n}" data-slot="0">${X(e.topics,t[0])}</select>
          <span>+</span>
          <select data-pair="${n}" data-slot="1">${X(e.topics,t[1])}</select>
        </div>
      `).join(``)}
      <div class="row-actions">
        <button class="bevel" data-wiz-back>Back</button>
        <button class="bevel accent" data-wiz-save>Save subject</button>
      </div>
    </article>
  `}function Ee(){let e=document.getElementById(`app`);e.addEventListener(`click`,De),e.addEventListener(`input`,Z),e.addEventListener(`change`,Ne)}function De(e){let t=e.target.closest(`[data-goto], [data-win], [data-switch], [data-set-week], [data-select-law], [data-timer], [data-rep], [data-copy-audio], [data-speak], [data-speak-stop], [data-aar-save], [data-redesign-save], [data-play], [data-watch-ask], [data-watch-live-save], [data-watch-live-dismiss], [data-wiz-next], [data-wiz-back], [data-wiz-save]`);if(t){if(t.dataset.goto){U(t.dataset.goto);return}if(t.dataset.win){Oe(t.dataset.win);return}if(t.dataset.switch){ie(S,t.dataset.switch),C=`os`,P(`Switched to ${p(S).name}.`),W();return}if(t.dataset.setWeek){let e=Number(t.dataset.setWeek),n=m(S).week;Math.abs(e-n)>1&&P(`Refuse all-seven-this-weekend. Advance one week at a time.`),m(S).week=e;let r=g(S);r.lawIds[0]&&(m(S).selectedLawId=r.lawIds[0]),f(S),W();return}if(t.dataset.selectLaw){m(S).selectedLawId=t.dataset.selectLaw,f(S),U(`brief`);return}if(t.dataset.timer){t.dataset.timer===`start`&&V(),t.dataset.timer===`pause`&&(z(),W()),t.dataset.timer===`reset`&&H();return}if(t.dataset.rep){je(t.dataset.rep);return}if(t.hasAttribute(`data-copy-audio`)){let e=document.querySelector(`[data-audio-script]`)?.textContent||``;navigator.clipboard.writeText(e).then(()=>P(`Script copied.`),()=>P(`Copy failed. Select the script and copy manually.`));return}if(t.hasAttribute(`data-speak`)){Ae();return}if(t.hasAttribute(`data-speak-stop`)){window.speechSynthesis&&window.speechSynthesis.cancel(),P(`Speak stopped.`);return}if(t.hasAttribute(`data-aar-save`)){Me();return}if(t.hasAttribute(`data-redesign-save`)){let e=document.querySelector(`[data-redesign]`);m(S).redesign=e?.value||``,f(S),P(`Redesign draft saved.`);return}if(t.dataset.play){ke(t);return}if(t.dataset.watchAsk){e.preventDefault(),me(t.dataset.watchAsk);return}if(t.hasAttribute(`data-watch-live-save`)){k=null,U(`rep`),P(`Good. Run it live. Watching is not the outcome.`);return}if(t.hasAttribute(`data-watch-live-dismiss`)){k=null,document.querySelector(`[data-watch-modal]`)?.remove(),P(`Clip is not finished until a live move runs.`);return}if(t.hasAttribute(`data-wiz-next`)){Pe();return}if(t.hasAttribute(`data-wiz-back`)){O.step=Math.max(1,O.step-1),O.error=``,W();return}t.hasAttribute(`data-wiz-save`)&&Fe()}}function Oe(e){e===`close`&&(w=`closed`),e===`min`&&(w=w===`min`?`normal`:`min`),e===`max`&&(w=w===`max`?`normal`:`max`),e===`restore`&&(w=`normal`),W()}function ke(e){let t=e.dataset.play,n=e.closest(`[data-video-card]`),r=document.createElement(`iframe`);r.src=`${ce(t)}&autoplay=1`,r.title=`YouTube video`,r.allow=`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,r.allowFullscreen=!0,r.loading=`lazy`,r.className=`yt`,e.replaceWith(r),n&&n.classList.add(`is-playing`)}function Ae(){let e=document.querySelector(`[data-audio-script]`)?.textContent||``;if(!window.speechSynthesis){P(`Speech is not available in this browser.`);return}window.speechSynthesis.cancel(),E=new SpeechSynthesisUtterance(e),E.rate=1,window.speechSynthesis.speak(E),P(`Speaking the script.`)}function je(e){let t=(document.querySelector(`[data-proof]`)?.value||j).trim();if(e===`pass`&&!t){P(`Pass needs a proof sentence.`);return}let n=g(S),r=L(),i=I(n),a=i.lawId?_(S,i.lawId):r;v(S,{type:`rep`,date:y(),week:n.week,lawId:a?.id||r?.id||null,lawName:a?.name||r?.name||`Rep`,result:e,proof:t,remaining:D.remaining}),j=``,z(),P(e===`pass`?`Logged PASS. Proof is in LOG.`:`Logged FAIL. Coverage without outcome.`),U(`log`)}function Me(){let e=m(S),t=g(S),n=[...document.querySelectorAll(`[data-aar]`)].map(e=>e.value.trim());if(n.some(e=>!e)){P(`Answer all three AAR questions.`);return}e.aarDraft=n,v(S,{type:`aar`,date:y(),week:t.week,answers:n}),P(`AAR saved to LOG.`),U(`log`)}function Z(e){let t=e.target;if(t.matches(`[data-aar]`)){m(S).aarDraft[Number(t.dataset.aar)]=t.value;return}if(t.matches(`[data-redesign]`)){m(S).redesign=t.value;return}if(t.matches(`[data-watch-live]`)){k&&(k.draft=t.value);return}if(t.matches(`[data-wiz]`)){let e=t.dataset.wiz;O[e]=t.type===`number`?Number(t.value):t.value,e===`topicCount`&&Q(),e===`weekCount`&&$();return}if(t.matches(`[data-topic]`)){let e=Number(t.dataset.topic);O.topics[e][t.dataset.field]=t.value}t.matches(`[data-proof]`)&&(j=t.value)}function Ne(e){let t=e.target;if(t.matches(`[data-topic]`)){let e=Number(t.dataset.topic);O.topics[e][t.dataset.field]=t.value}if(t.matches(`[data-pair]`)){let e=Number(t.dataset.pair),n=Number(t.dataset.slot);O.pairs[e][n]=Number(t.value)}t.matches(`[data-wiz='topicCount']`)&&(O.topicCount=Number(t.value),Q(),W()),t.matches(`[data-wiz='weekCount']`)&&(O.weekCount=Number(t.value),$(),W())}function Q(){let e=Math.min(12,Math.max(1,Number(O.topicCount)||1));for(O.topicCount=e;O.topics.length<e;)O.topics.push({name:``,essence:``,methodCue:``,confidence:`provisional`});O.topics=O.topics.slice(0,e),$()}function $(){let e=Math.min(12,Math.max(1,Number(O.weekCount)||1));for(O.weekCount=e;O.pairs.length<e;){let e=Math.min(O.topics.length-1,O.pairs.length*2),t=Math.min(O.topics.length-1,e+1);O.pairs.push([e,t])}O.pairs=O.pairs.slice(0,e)}function Pe(){if(O.step===1){if(!O.name.trim()||!O.purpose.trim()){O.error=`Name and purpose are required.`,W();return}Q(),O.error=``,O.step=2,W();return}if(O.step===2){if(O.topics.some(e=>!e.name.trim()||!e.essence.trim()||!e.methodCue.trim())){O.error=`Every topic needs a name, essence move, and method cue.`,W();return}O.error=``,$(),O.step=3,W()}}function Fe(){if(Q(),$(),O.pairs.some(e=>e[0]===e[1])&&O.topics.length>1){O.error=`Each week should pair two different topics when you have more than one.`,W();return}let e=O.topics.map((e,t)=>({id:d(`t${t}`),name:e.name.trim(),essence:e.essence.trim(),methodCue:e.methodCue.trim(),confidence:e.confidence||`provisional`})),t=O.pairs.map((t,n)=>{let r=e[t[0]],i=e[t[1]]||r,a=r&&i&&r.id!==i.id?[r.id,i.id]:[r.id],o=a.length===2?`${r.name} + ${i.name}`:r.name;return l(n+1,a,o)}),n={id:d(`cur`),name:O.name.trim(),purpose:O.purpose.trim(),seeded:!1,osState:`Live`,laws:e,weeks:t};re(S,n),O=M(),C=`os`,P(`${n.name} saved. Seven Laws is still in Curricula.`),W()}function Ie(){S=ne(),C=m(S).lastPanel||`os`,(!x[C]||C===`wizard`)&&(C=`os`),Ee(),W()}function Le(){`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./sw.js`).catch(()=>{})})}Le(),Ie();