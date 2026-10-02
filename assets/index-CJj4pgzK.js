(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`seven-laws-phase-2`,t=`learning-os.v1`,n={solid:`solid`,"solid-secondary":`solid, later`,provisional:`still testing`};function r(e){return n[e]||e||`still testing`}var i=`Teaching means causing learning. If they have not learned, you have not taught. That is the Law of the Learner. Flip your mindset. The wrong move is smooth talking and covering material. The right move is what happens in the student. When you teach, you are 100 percent responsible to cause it. Three rules. Teachers are responsible to cause students to learn. Teachers should judge their success by the success of their students. Teachers exist to serve the students. How to do it. You control the subject, the style, and the speaker. If they are not learning, change one of those now. Stop the content. Recover the learner. Then ask them to teach it back. Today's live work. Ten minutes. Teach two minutes of one idea. Demand proof. If they cannot show it, you have not taught. Start the timer.`,a=[`Where did you cover material instead of causing learning? What did you change to get the learner back?`,`What are this week's must-know facts, in the exact words the learner can still say?`,`What live proof do you have that someone else learned it, not only you?`],o=[`A live rep beats watching. If you say you finished by watching, name what you ran live.`,`Do not skip the hard laws. Learner, Retention, and Application get used too much. Do Need, Expectation, and Revival on their weeks.`,`Do not try all seven laws this weekend.`,`Use methods, not stories. You succeed when the learner shows proof.`,`Two laws per week. That is the limit.`],s=[{week:1,pair:`Learner + Retention`,lawIds:[`learner`,`retention`]},{week:2,pair:`Need + Application`,lawIds:[`need`,`application`]},{week:3,pair:`Expectation + Equipping`,lawIds:[`expectation`,`equipping`]},{week:4,pair:`Revival + final proof`,lawIds:[`revival`,`equipping`]}];function c(e,t,n,r,i){return{key:e,label:t,lawId:n,move:r,liveRep:i}}function ee(){return{id:e,name:`Seven Laws of the Learner`,purpose:`Cause learning with a live rep each week. Do not binge the videos. Two laws per week. Proof is the only pass.`,seeded:!0,osState:`Phase 2. Live work.`,laws:[{id:`learner`,name:`Learner`,essence:`Cause learning. Covering material is not teaching.`,methodCue:`Cause them to learn. Stop the content. Change subject, style, or speaker. Get the learner back.`,confidence:`solid`,audioScript:i,brief:[`Law of the Learner. Cause learning. Covering material is not teaching.`,`If they have not learned, you have not taught.`,`Teachers are responsible to cause students to learn.`,`Teachers should judge their success by the success of their students.`,`Teachers exist to serve the students. Control subject, style, and speaker.`,`Stop the content. Recover the learner. Then ask them to teach it back.`],rep:{minutes:10,setup:`Take 30 seconds. Pick one idea and one proof line. Teach for 2 minutes. Stop. Demand proof. If they fail, cut content, change style, or change speaker.`,proofPrompt:`[Name] can now ____, which they could not do before this live rep.`,passRule:`Pass means they showed proof.`,failRule:`Fail means you covered material and they showed no proof.`}},{id:`expectation`,name:`Expectation`,essence:`Expect the best.`,methodCue:`Blossom method: notice, name the act, name the feel, name the future, show you value them.`,confidence:`solid-secondary`},{id:`application`,name:`Application`,essence:`Life change, not excitement about the content.`,methodCue:`Explain. Cut it down. Make it personal. Persuade. Judge by the change.`,confidence:`solid-secondary`},{id:`retention`,name:`Retention`,essence:`Must-know facts, an easy picture they can remember, then review.`,methodCue:`Overview, organize, outline, must-know facts, an easy picture, review.`,confidence:`solid-secondary`},{id:`need`,name:`Need`,essence:`Name the felt need before you start the content.`,methodCue:`Catch the felt need. Stir curiosity. Stir the felt need. Name the real need. Then meet it.`,confidence:`provisional`},{id:`equipping`,name:`Equipping`,essence:`Coach the skill. Judge after they do it, not while you talk.`,methodCue:`Instruct, illustrate, involve, improve, inspire.`,confidence:`provisional`},{id:`revival`,name:`Revival`,essence:`Restore a Christian who slipped. Use Nathan's way: name the slip, then restore.`,methodCue:`Show the truth. Name the slip. Turn back. Promise again. Restore.`,confidence:`provisional`}],weeks:[{week:1,title:`Learner + Retention`,lawIds:[`learner`,`retention`],bingeGuard:`Two laws only. Do not pull in Need, Expectation, or Revival this week.`,days:[c(`mon`,`Mon`,`learner`,`Stop covering. Cause learning.`,`Teach one idea for 2 minutes. Ask them to teach it back. Reteach the gap. Write a proof sentence.`),c(`tue`,`Tue`,`learner`,`When they look lost, recover the learner. Change style or cut content.`,`Stop when they look lost. Change style or cut content. Demand proof on the same idea.`),c(`wed`,`Wed`,`learner`,`Grade only by student proof. Reteach the gap. No new material.`,`No new material. Reteach the gap until proof appears.`),c(`thu`,`Thu`,`retention`,`Keep only 3 to 5 must-know facts. Teach only those. Check recall.`,`Teach only the must-know facts. Check recall. Misses stay in the list. Do not add facts.`),c(`fri`,`Fri`,`retention`,`One easy picture or memory trick. The learner says it from memory.`,`Show one easy picture or memory trick. The learner says it from memory.`),c(`sat`,`Sat`,`retention`,`Review in the same order. Misses get review again, not new facts.`,`Review in the same order. Review misses again. No new facts.`),c(`sun`,`Sun`,null,`Three end-of-week review questions only. No new law.`,`End-of-week review only. Do not start Week 2.`)],watch:[{id:`w1-learner-1`,title:`Learner Part 1`,videoId:`ZbJNnvIvyZE`,url:`https://www.youtube.com/watch?v=ZbJNnvIvyZE`,lawId:`learner`,doAfter:`Run today's live rep. Teach 2 minutes. Demand proof.`},{id:`w1-learner-2`,title:`Learner Part 2`,videoId:`qqMrUUVjuyg`,url:`https://www.youtube.com/watch?v=qqMrUUVjuyg`,lawId:`learner`,doAfter:`Pause and recover. When they first look lost, stop the content and recover the learner.`},{id:`w1-retention-1`,title:`Retention Part 1`,videoId:`y8VwYvbp9jg`,url:`https://www.youtube.com/watch?v=y8VwYvbp9jg`,lawId:`retention`,doAfter:`Keep only the few facts they must remember. Teach only 3 to 5 facts.`},{id:`w1-retention-2`,title:`Retention Part 2`,videoId:`FTDFYKqwmJM`,url:`https://www.youtube.com/watch?v=FTDFYKqwmJM`,lawId:`retention`,doAfter:`Build one easy picture or memory trick. The learner says it from memory.`}],aar:a},{week:2,title:`Need + Application`,lawIds:[`need`,`application`],bingeGuard:`Do Need this week. Do not skip it to stay with Learner or Retention.`,days:[c(`mon`,`Mon`,`need`,`Name the felt need before you start the content.`,`Catch the felt need. Do not start the content until they name it.`),c(`tue`,`Tue`,`need`,`Stir curiosity. Stir the felt need.`,`Stir curiosity, then one idea only. Demand that the learner name the need.`),c(`wed`,`Wed`,`need`,`Name the real need. Then meet it.`,`Name the real need in the learner's words. Then meet it with the must-know facts only.`),c(`thu`,`Thu`,`application`,`Life change, not excitement about the content.`,`Explain. Then cut it down. One life-change target.`),c(`fri`,`Fri`,`application`,`Make it personal. Persuade.`,`The learner names the next 24-hour change in their own words.`),c(`sat`,`Sat`,`application`,`Judge by change, not by a recap.`,`Proof is a change they can point to, not a summary.`),c(`sun`,`Sun`,null,`Three end-of-week review questions only. No new law.`,`End-of-week review only.`)],watch:[],aar:a},{week:3,title:`Expectation + Equipping`,lawIds:[`expectation`,`equipping`],bingeGuard:`Do Expectation this week. Do not skip it to stay with Learner or Retention.`,days:[c(`mon`,`Mon`,`expectation`,`Expect the best. Blossom method: notice.`,`Notice a real act. Name it. Demand that the learner hear the expectation.`),c(`tue`,`Tue`,`expectation`,`Name the act. Name the feel.`,`Name the act and the feel. Proof is that the learner can repeat both.`),c(`wed`,`Wed`,`expectation`,`Name the future. Show you value them.`,`Name a future and show you value them. Do not pile on new content.`),c(`thu`,`Thu`,`equipping`,`Coach the skill. Judge after they do it.`,`Instruct, then illustrate one skill. The learner attempts it live.`),c(`fri`,`Fri`,`equipping`,`Involve and improve.`,`Involve the learner. Improve the attempt. Judge after they do it.`),c(`sat`,`Sat`,`equipping`,`Inspire after the attempt, not before the work.`,`One more live attempt. Proof is the skill shown, not the pep talk.`),c(`sun`,`Sun`,null,`Three end-of-week review questions only. No new law.`,`End-of-week review only.`)],watch:[],aar:a},{week:4,title:`Revival + final proof`,lawIds:[`revival`],bingeGuard:`Do Revival this week. Final proof is proof, not a dump of all seven laws.`,days:[c(`mon`,`Mon`,`revival`,`Restore. Use Nathan's way. First show the truth.`,`First show the truth. Name what slipped. Do not recap all seven laws.`),c(`tue`,`Tue`,`revival`,`Name the slip. Turn back.`,`Name the specific slip. The learner names how they will turn back.`),c(`wed`,`Wed`,`revival`,`Promise again and restore.`,`Promise again in a proof sentence. Restore by a live attempt.`),c(`thu`,`Thu`,`revival`,`Final live work on this week's two laws.`,`One live final rep. Use methods, not stories.`),c(`fri`,`Fri`,null,`Final proof: you succeed when the learner shows proof.`,`Run live proof for someone other than you. No new law.`),c(`sat`,`Sat`,null,`Review the proof, not how much you covered.`,`Run the misses again. Do not try all seven laws this weekend.`),c(`sun`,`Sun`,null,`Three end-of-week review questions only. End of the four weeks.`,`End-of-week review only. Log proof. Do not log finished clips.`)],watch:[],aar:a}]}}function te(e,t){return e.brief?e.brief:[`Law of ${e.name}.`,`Core move. ${e.essence}`,`How to do it. ${e.methodCue}`,`How sure. ${r(e.confidence)}.`,t?`This week: ${t}. Two laws only.`:`Two laws per week. That is the limit.`,`Use methods, not stories. You succeed when the learner shows proof.`]}function l(e){return e.audioScript?e.audioScript:[`This is the Law of ${e.name}.`,`Core move. ${e.essence}`,`How to do it. ${e.methodCue}`,`A live rep beats watching. If they have not shown proof, you have not finished.`,`Use methods, not stories. You succeed when the learner shows proof.`,`Ten minutes. Run one live rep. Demand proof. Start the timer.`].join(` `)}function ne(e,t,n){let r=[`mon`,`tue`,`wed`,`thu`,`fri`,`sat`,`sun`],i=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`];return{week:e,title:n||`Week ${e}`,lawIds:t.filter(Boolean),bingeGuard:`Two topics per week only. A live rep beats watching.`,days:r.map((e,n)=>({key:e,label:i[n],lawId:e===`sun`?null:t[n<3?0:1]||t[0]||null,move:e===`sun`?`Three end-of-week review questions only. No new topic.`:``,liveRep:e===`sun`?`End-of-week review only.`:``})),watch:[],aar:a}}function re(){return[{id:`note-phase-2`,type:`note`,date:`2026-09-14`,text:`Phase 2 started.`}]}function u(e=`id`){return`${e}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}function ie(){let t=ee();return{version:1,activeId:e,curricula:{[e]:t},progress:{[e]:{osState:t.osState,week:1,selectedLawId:`learner`,redesign:``,aarDraft:[``,``,``],lastPanel:`os`}},logs:{[e]:re()}}}function ae(){let n=ie(),r=localStorage.getItem(t);if(!r)return d(n),n;try{let t=JSON.parse(r),i={version:1,activeId:t.activeId||`seven-laws-phase-2`,curricula:{...t.curricula||{}},progress:{...t.progress||{}},logs:{...t.logs||{}}};return i.curricula[e]=n.curricula[e],i.progress[`seven-laws-phase-2`]||(i.progress[e]=n.progress[e]),i.logs[`seven-laws-phase-2`]||(i.logs[e]=n.logs[e]),i.curricula[i.activeId]||(i.activeId=e),i}catch{return d(n),n}}function d(e){localStorage.setItem(t,JSON.stringify(e))}function f(e){return e.curricula[e.activeId]}function p(e){if(!e.progress[e.activeId]){let t=f(e);e.progress[e.activeId]={osState:t.osState||`Live`,week:1,selectedLawId:t.laws[0]?.id||null,redesign:``,aarDraft:[``,``,``],lastPanel:`os`}}return e.progress[e.activeId]}function m(e){return e.logs[e.activeId]||(e.logs[e.activeId]=[]),e.logs[e.activeId]}function h(e){let t=f(e),n=p(e).week;return t.weeks.find(e=>e.week===n)||t.weeks[0]}function g(e,t){return f(e).laws.find(e=>e.id===t)||null}function oe(e,t){e.curricula[t.id]=t,e.progress[t.id]={osState:t.osState||`Live`,week:1,selectedLawId:t.laws[0]?.id||null,redesign:``,aarDraft:[``,``,``],lastPanel:`os`},e.logs[t.id]=[],e.activeId=t.id,d(e)}function se(e,t){e.curricula[t]&&(e.activeId=t,d(e))}function _(e,t){m(e).unshift({id:u(`log`),...t}),d(e)}function v(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function y(e=new Date){return[`sun`,`mon`,`tue`,`wed`,`thu`,`fri`,`sat`][e.getDay()]}var b={curricula:`Subjects`,os:`OS`,week:`WEEK`,rep:`REP`,audio:`AUDIO`,watch:`WATCH`,aar:`Review`,log:`LOG`,brief:`BRIEF`,redesign:`REDESIGN`,wizard:`New Subject`},x=[[`curricula`,`Subjects`],[`os`,`OS`],[`week`,`WEEK`],[`rep`,`REP`],[`audio`,`AUDIO`],[`watch`,`WATCH`],[`aar`,`Review`],[`log`,`LOG`],[`wizard`,`New Subject`]],ce=[[`os`,`OS`],[`brief`,`BRIEF`],[`redesign`,`REDESIGN`],[`rep`,`REP`],[`audio`,`AUDIO`],[`week`,`WEEK`],[`watch`,`WATCH`],[`aar`,`Review`]],le=[[`os`,`OS`,`Home`],[`week`,`WEEK`,`This week`],[`rep`,`REP`,`Live work`],[`watch`,`WATCH`,`Clips`],[`log`,`LOG`,`Results`]],S,C=`os`,w=`normal`,T=``,E=null,D={remaining:600,running:!1,handle:null},O=M(),k=null,A=null,j=``;function M(){return{step:1,name:``,purpose:``,topicCount:4,topics:Array.from({length:4},()=>({name:``,essence:``,methodCue:``,confidence:`provisional`})),weekCount:2,pairs:[[0,1],[2,3]],error:``}}function N(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function P(e){T=e;let t=document.querySelector(`[data-status-msg]`);t&&(t.textContent=e),A&&clearTimeout(A),e&&(A=setTimeout(()=>{T=``;let e=document.querySelector(`[data-status-msg]`);e&&(e.textContent=F())},4e3))}function F(){let e=f(S),t=p(S),n=m(S).filter(e=>e.type===`rep`);return`${e.name}  ·  ${e.osState||t.osState}  ·  Week ${t.week}  ·  ${n.length} live reps logged`}function I(e){let t=y();return e.days.find(e=>e.key===t)||e.days[0]}function L(){let e=p(S),t=h(S),n=f(S);return g(S,e.selectedLawId)||g(S,t.lawIds[0])||n.laws[0]||null}function ue(e){return`https://www.youtube-nocookie.com/embed/${encodeURIComponent(e)}?rel=0`}function de(e){return`https://i.ytimg.com/vi/${encodeURIComponent(e)}/hqdefault.jpg`}function R(e){let t=Math.max(0,e),n=Math.floor(t/60),r=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`}function z(){D.handle&&=(clearInterval(D.handle),null),D.running=!1}function B(){if(D.remaining<=0){z(),P(`Timer done. Demand proof now.`),W();return}--D.remaining;let e=document.querySelector(`[data-lcd]`);if(e&&(e.textContent=R(D.remaining)),D.remaining===0){z(),P(`Timer done. Demand proof now.`);let e=document.querySelector(`[data-timer-face]`);e&&e.classList.add(`is-done`)}}function V(){D.running||(D.remaining<=0&&(D.remaining=600),D.running=!0,D.handle=setInterval(B,1e3),P(`Live rep running. Cause learning.`),W())}function H(){z(),D.remaining=600,W()}function U(e){E&&window.speechSynthesis&&window.speechSynthesis.cancel(),E=null,C=e,p(S).lastPanel=e===`wizard`?`os`:e,d(S),W()}function W(){let e=document.getElementById(`app`),t=f(S),n=p(S),r=h(S),i=L(),a=w===`max`,o=w===`min`,s=w===`closed`;e.innerHTML=`
    <div class="desk">
      ${s?fe():``}
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
          ${x.map(([e,t])=>`
            <button type="button" class="bevel ${C===e?`is-active`:``}" data-goto="${e}">${N(t)}</button>
          `).join(``)}
        </nav>
        <div class="commands" aria-label="Commands">
          ${ce.map(([e,t])=>`
            <button type="button" class="cmd ${C===e?`is-active`:``}" data-goto="${e}">${N(t)}</button>
          `).join(``)}
        </div>
        ${o?``:`<main class="body">${pe(t,n,r,i)}</main>`}
        <footer class="statusbar">
          <div class="well" data-status-msg>${N(T||F())}</div>
          <div class="well well-snap">${N(b[C]||C)}</div>
          <div class="well well-snap">${N(v())}</div>
        </footer>
        <nav class="dock" aria-label="Primary">
          ${le.map(([e,t,n])=>`
            <button type="button" class="${C===e?`is-active`:``}" data-goto="${e}" aria-label="${N(t)}: ${N(n)}">
              <span>${N(t)}</span>
              <small>${N(n)}</small>
            </button>
          `).join(``)}
        </nav>
      </div>
      ${Y()}
    </div>
  `}function fe(){return`
    <button class="restore" data-win="restore">
      <span>Learning OS</span>
      <small>Tap to open</small>
    </button>
  `}function pe(e,t,n,r){switch(C){case`curricula`:return me(e);case`os`:return G(e,t,n);case`week`:return he(e,t,n);case`rep`:return ve(e,t,n,r);case`audio`:return ye(n,r);case`watch`:return _e(n,!1);case`aar`:return be(t,n);case`log`:return xe();case`brief`:return Se(n,r);case`redesign`:return Ce(t,n);case`wizard`:return we();default:return G(e,t,n)}}function me(e){return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">Library</p>
          <h2>Subjects</h2>
          <p class="lede">Switch subjects. Seven Laws stays. Each subject keeps its own week, log, and drafts.</p>
        </div>
        <button class="bevel accent" data-goto="wizard">New Subject</button>
      </div>
      <div class="card-grid">
        ${Object.values(S.curricula).map(t=>{let n=(S.logs[t.id]||[]).filter(e=>e.type===`rep`).length,r=S.progress[t.id]?.week||1;return`
              <article class="card ${t.id===e.id?`is-selected`:``}">
                <div class="card-top">
                  <h3>${N(t.name)}</h3>
                  ${t.seeded?`<span class="pill">Built-in</span>`:`<span class="pill quiet">Yours</span>`}
                </div>
                <p>${N(t.purpose)}</p>
                <p class="meta">Week ${r} · ${t.laws.length} topics · ${n} live reps</p>
                <button class="bevel" data-switch="${N(t.id)}" ${t.id===e.id?`disabled`:``}>
                  ${t.id===e.id?`Active`:`Switch`}
                </button>
              </article>
            `}).join(``)}
      </div>
    </section>
  `}function G(e,t,n){let i=n.bingeGuard;return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">OS · Home</p>
          <h2>${N(e.osState||t.osState)}</h2>
          <p class="lede">${N(e.purpose)}</p>
        </div>
        <div class="lcd-mini" title="This week">${String(t.week).padStart(2,`0`)}</div>
      </div>
      <div class="split">
        <article class="card">
          <h3>Rules</h3>
          <ol class="rules">
            ${o.map(e=>`<li>${N(e)}</li>`).join(``)}
          </ol>
          <p class="callout">${N(i)}</p>
        </article>
        <article class="card">
          <h3>Four-week plan</h3>
          <p class="hint">This plan is fixed. Two laws per week. Do not binge.</p>
          <ul class="campaign">
            ${(e.id===`seven-laws-phase-2`?s:e.weeks).map(e=>{let n=e.pair||e.title,r=e.week;return`
                <li class="${r===t.week?`is-now`:``}">
                  <button class="plain" data-set-week="${r}">
                    <span>Week ${r}</span>
                    <strong>${N(n)}</strong>
                  </button>
                </li>
              `}).join(``)}
          </ul>
        </article>
      </div>
      <article class="card">
        <h3>Laws and topics</h3>
        <div class="table-wrap">
          <table class="stack-table">
            <thead>
              <tr>
                <th>Law</th>
                <th>Core move</th>
                <th>How to do it</th>
                <th>How sure</th>
              </tr>
            </thead>
            <tbody>
              ${e.laws.map(e=>{let i=n.lawIds.includes(e.id),a=t.selectedLawId===e.id;return`
                    <tr class="${i?`on-week`:``} ${a?`is-selected`:``}" data-select-law="${N(e.id)}">
                      <td data-label="Law"><button class="plain strong" data-select-law="${N(e.id)}">${N(e.name)}</button></td>
                      <td data-label="Core move">${N(e.essence)}</td>
                      <td data-label="How to do it">${N(e.methodCue)}</td>
                      <td data-label="How sure"><span class="pill ${N(e.confidence)}">${N(r(e.confidence))}</span></td>
                    </tr>
                  `}).join(``)}
            </tbody>
          </table>
        </div>
        <p class="hint">Tap a law. That loads the brief, the audio, and today's live rep.</p>
      </article>
    </section>
  `}function he(e,t,n){let r=y(),i=(n.watch||[]).slice(0,4);return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">WEEK ${n.week} · This week's plan</p>
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
        ${n.days.map(e=>{let t=e.lawId?g(S,e.lawId):null,n=e.key===r;return`
              <article class="card day ${n?`is-today`:``}">
                <header>
                  <span class="day-label">${N(e.label)}</span>
                  ${n?`<span class="pill accent">Today</span>`:``}
                  ${t?`<span class="pill quiet">${N(t.name)}</span>`:`<span class="pill quiet">Review</span>`}
                </header>
                <p class="move"><strong>Today's move</strong> ${N(e.move||`Write today's move.`)}</p>
                <p class="rep-line"><strong>Live rep</strong> ${N(e.liveRep||`Run one live rep. Demand proof.`)}</p>
                ${e.key===`sun`?`<button class="bevel" data-goto="aar">Open end-of-week review</button>`:`<button class="bevel accent" data-goto="rep">Run live rep</button>`}
              </article>
            `}).join(``)}
      </div>
      ${i.length?K(i,`This week's clips`):`<p class="hint">No clips this week. Run the live rep anyway.</p>`}
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
        <img src="${de(e.videoId)}" alt="" loading="lazy" />
        <span class="play-glyph" aria-hidden="true">▶</span>
        <span class="poster-title">${N(e.title)}</span>
      </button>
      <div class="do-after">
        <strong>Do this after</strong>
        <p>${N(e.doAfter)}</p>
        <div class="row-actions">
          <button class="bevel" type="button" data-goto="rep">Run the live move</button>
          <button class="bevel" type="button" data-watch-ask="${N(e.id)}">I finished watching</button>
        </div>
      </div>
    </article>
  `}function J(e){return(h(S).watch||[]).find(t=>t.id===e)||null}function Y(){if(!k)return``;let e=J(k.id),t=k.title||e?.title||`this clip`,n=k.doAfter||e?.doAfter||`Run the live move.`;return`
    <div class="modal-layer" data-watch-modal>
      <div class="modal card callout-card" role="dialog" aria-modal="true" aria-labelledby="watch-live-title">
        <h3 id="watch-live-title">What did you run live?</h3>
        <p>You said you finished ${N(t)}. Watching does not count. It is not saved to the log. Name the live move you actually ran.</p>
        <p class="hint">Do this after: ${N(n)}</p>
        <textarea data-watch-live rows="3" placeholder="I ran the live move, and the learner showed...">${N(k.draft||``)}</textarea>
        <div class="row-actions">
          <button class="bevel accent" type="button" data-watch-live-save>I ran it live. Go to the live rep</button>
          <button class="bevel" type="button" data-watch-live-dismiss>Not yet</button>
        </div>
      </div>
    </div>
  `}function ge(e){let t=J(e);k={id:e,title:t?.title||`this clip`,doAfter:t?.doAfter||`Run the live move.`,draft:``};let n=document.querySelector(`.desk`);if(!n){W();return}document.querySelector(`[data-watch-modal]`)?.remove();let r=document.createElement(`div`);r.innerHTML=Y(),n.appendChild(r.firstElementChild),document.querySelector(`[data-watch-live]`)?.focus(),P(`Watching is not finishing. What did you run live?`)}function _e(e,t){let n=e.watch||[];return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">WATCH · Clips</p>
          <h2>Watch, then do the live move</h2>
          <p class="lede">Watching is not finishing. After each clip, do the live move. Only live-rep results go in the log. Finishing a clip does not.</p>
        </div>
      </div>
      ${n.length===0?`<article class="card empty">
              <h3>No clips this week</h3>
              <p>This week has no videos. Run the live rep anyway.</p>
              <button class="bevel accent" data-goto="rep">Open live rep</button>
            </article>`:`<div class="video-grid">${n.map(e=>q(e,t)).join(``)}</div>`}
    </section>
  `}function ve(e,t,n,r){let i=I(n),a=(i.lawId?g(S,i.lawId):r)||r,o=a?.rep||{minutes:10,setup:i.liveRep||`Ten minutes. One idea. Demand proof.`,proofPrompt:`[Name] can now ____, which they could not do before this live rep.`,passRule:`Pass means they showed proof.`,failRule:`Fail means you covered material and they showed no proof.`},s=(n.watch||[]).filter(e=>!a||e.lawId===a.id).slice(0,2);return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">Today's live rep · ${N(i.label)}</p>
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
          <p class="move"><strong>Live rep</strong> ${N(i.liveRep)}</p>
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
      ${s.length?K(s,`Clips for this law. Watch, then run the live rep.`):``}
    </section>
  `}function ye(e,t){let n=t||L();if(!n)return`<section class="card empty"><p>Add a topic before audio can speak.</p></section>`;let r=l(n);return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">AUDIO · 60 to 90 seconds</p>
          <h2>${N(n.name)} script</h2>
          <p class="lede">Read it out loud, or tap Speak. Then run the live rep. Listening is not proof.</p>
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
      <p class="hint">This week: ${N(e.title)}. Two laws only.</p>
    </section>
  `}function be(e,t){let n=t.aar||[];return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">End-of-week review · Week ${t.week}</p>
          <h2>End-of-week review</h2>
          <p class="lede">Three questions only. No new law. Save writes to the log as a review, not as a finished clip.</p>
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
          <button class="bevel accent" data-aar-save>Save review to the log</button>
        </div>
      </article>
    </section>
  `}function xe(){let e=m(S).filter(e=>e.type!==`watch`);return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">LOG · Results</p>
          <h2>Live-rep results</h2>
          <p class="lede">Pass, fail, notes, and end-of-week reviews. Finished clips stay out.</p>
        </div>
      </div>
      ${e.length===0?`<article class="card empty"><p>Nothing logged yet. Run today's live rep.</p><button class="bevel accent" data-goto="rep">Open live rep</button></article>`:`<ol class="log-list">
              ${e.map(e=>e.type===`note`?`<li class="card log-item"><time>${N(e.date)}</time><p>${N(e.text)}</p><span class="pill quiet">Note</span></li>`:e.type===`aar`?`<li class="card log-item">
                      <time>${N(e.date)}</time>
                      <p><strong>End-of-week review · Week ${N(e.week)}</strong></p>
                      <ol>${(e.answers||[]).map(e=>`<li>${N(e)}</li>`).join(``)}</ol>
                      <span class="pill">Review</span>
                    </li>`:`<li class="card log-item">
                    <time>${N(e.date)}</time>
                    <p><strong>${N(e.result?.toUpperCase())}</strong> · ${N(e.lawName||`Rep`)} · Week ${N(e.week)}</p>
                    <p>${N(e.proof||`No proof sentence.`)}</p>
                    <span class="pill ${e.result===`pass`?`pass`:`fail`}">${N(e.result)}</span>
                  </li>`).join(``)}
            </ol>`}
    </section>
  `}function Se(e,t){let n=t||L();if(!n)return`<section class="card empty"><p>Pick a law on Home first.</p></section>`;let i=te(n,e.title);return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">BRIEF · Six lines</p>
          <h2>${N(n.name)}</h2>
          <p class="lede">Six lines. Use methods, not stories. How sure: ${N(r(n.confidence))}.</p>
        </div>
        <button class="bevel accent" data-goto="rep">Run live rep</button>
      </div>
      <ol class="brief-lines">
        ${i.map(e=>`<li class="card">${N(e)}</li>`).join(``)}
      </ol>
    </section>
  `}function Ce(e,t){return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">REDESIGN · Rebuild the talk</p>
          <h2>Rebuild the talk around this week's two laws</h2>
          <p class="lede">${N(t.lawIds.map(e=>g(S,e)?.name).filter(Boolean).join(` + `)||t.title)}. Two laws only. Cause learning. Do not cover more.</p>
        </div>
      </div>
      <article class="card">
        <label class="field">
          <span>Talk rebuild</span>
          <textarea data-redesign rows="12" placeholder="Cut the talk to this week's two laws. Name the must-know facts. Name the live proof.">${N(e.redesign)}</textarea>
        </label>
        <div class="row-actions">
          <button class="bevel accent" data-redesign-save>Save draft</button>
        </div>
      </article>
    </section>
  `}function we(){let e=O;return`
    <section class="stack">
      <div class="hero-row">
        <div>
          <p class="kicker">New Subject</p>
          <h2>Add a new subject</h2>
          <p class="lede">Make a blank subject. Seven Laws stays in Subjects. Two topics per week.</p>
        </div>
        <p class="step-indicator">Step ${e.step} of 3</p>
      </div>
      ${e.error?`<p class="callout">${N(e.error)}</p>`:``}
      ${e.step===1?Te(e):``}
      ${e.step===2?Ee(e):``}
      ${e.step===3?De(e):``}
    </section>
  `}function Te(e){return`
    <article class="card">
      <label class="field">
        <span>Subject name</span>
        <input data-wiz="name" value="${N(e.name)}" placeholder="Exodus 1-12" />
      </label>
      <label class="field">
        <span>Purpose</span>
        <textarea data-wiz="purpose" rows="3" placeholder="What live proof should a learner show?">${N(e.purpose)}</textarea>
      </label>
      <label class="field inline">
        <span>How many topics</span>
        <input data-wiz="topicCount" type="number" min="1" max="12" value="${N(e.topicCount)}" />
      </label>
      <div class="row-actions">
        <button class="bevel accent" data-wiz-next>Next: topics</button>
      </div>
    </article>
  `}function Ee(e){return`
    <article class="card">
      <h3>Topics</h3>
      <p class="hint">Each topic needs a core move, a how-to cue, and how sure you are.</p>
      ${e.topics.map((e,t)=>`
        <fieldset class="topic-block">
          <legend>Topic ${t+1}</legend>
          <label class="field"><span>Name</span><input data-topic="${t}" data-field="name" value="${N(e.name)}" /></label>
          <label class="field"><span>Core move</span><input data-topic="${t}" data-field="essence" value="${N(e.essence)}" /></label>
          <label class="field"><span>How to do it</span><input data-topic="${t}" data-field="methodCue" value="${N(e.methodCue)}" /></label>
          <label class="field"><span>How sure</span>
            <select data-topic="${t}" data-field="confidence">
              ${[[`solid`,`solid`],[`solid-secondary`,`solid, later`],[`provisional`,`still testing`]].map(([t,n])=>`<option value="${t}" ${e.confidence===t?`selected`:``}>${n}</option>`).join(``)}
            </select>
          </label>
        </fieldset>
      `).join(``)}
      <div class="row-actions">
        <button class="bevel" data-wiz-back>Back</button>
        <button class="bevel accent" data-wiz-next>Next: weeks</button>
      </div>
    </article>
  `}function X(e,t){return e.map((e,n)=>`<option value="${n}"${Number(t)===n?` selected`:``}>${N(e.name||`Topic ${n+1}`)}</option>`).join(``)}function De(e){return`
    <article class="card">
      <h3>Week plan</h3>
      <p class="hint">Two topics per week. Empty weeks are made for you.</p>
      <label class="field inline">
        <span>Weeks</span>
        <input data-wiz="weekCount" type="number" min="1" max="12" value="${N(e.weekCount)}" />
      </label>
      ${e.pairs.map((t,n)=>`
        <div class="pair-row">
          <span>Week ${n+1}</span>
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
  `}function Oe(){let e=document.getElementById(`app`);e.addEventListener(`click`,ke),e.addEventListener(`input`,Pe),e.addEventListener(`change`,Fe)}function ke(e){let t=e.target.closest(`[data-goto], [data-win], [data-switch], [data-set-week], [data-select-law], [data-timer], [data-rep], [data-copy-audio], [data-speak], [data-speak-stop], [data-aar-save], [data-redesign-save], [data-play], [data-watch-ask], [data-watch-live-save], [data-watch-live-dismiss], [data-wiz-next], [data-wiz-back], [data-wiz-save]`);if(t){if(t.dataset.goto){U(t.dataset.goto);return}if(t.dataset.win){Ae(t.dataset.win);return}if(t.dataset.switch){se(S,t.dataset.switch),C=`os`,P(`Switched to ${f(S).name}.`),W();return}if(t.dataset.setWeek){let e=Number(t.dataset.setWeek),n=p(S).week;Math.abs(e-n)>1&&P(`Do not jump weeks. Do one week at a time. Do not try all seven this weekend.`),p(S).week=e;let r=h(S);r.lawIds[0]&&(p(S).selectedLawId=r.lawIds[0]),d(S),W();return}if(t.dataset.selectLaw){p(S).selectedLawId=t.dataset.selectLaw,d(S),U(`brief`);return}if(t.dataset.timer){t.dataset.timer===`start`&&V(),t.dataset.timer===`pause`&&(z(),W()),t.dataset.timer===`reset`&&H();return}if(t.dataset.rep){Me(t.dataset.rep);return}if(t.hasAttribute(`data-copy-audio`)){let e=document.querySelector(`[data-audio-script]`)?.textContent||``;navigator.clipboard.writeText(e).then(()=>P(`Script copied.`),()=>P(`Copy failed. Select the script and copy manually.`));return}if(t.hasAttribute(`data-speak`)){Z();return}if(t.hasAttribute(`data-speak-stop`)){window.speechSynthesis&&window.speechSynthesis.cancel(),P(`Speak stopped.`);return}if(t.hasAttribute(`data-aar-save`)){Ne();return}if(t.hasAttribute(`data-redesign-save`)){let e=document.querySelector(`[data-redesign]`);p(S).redesign=e?.value||``,d(S),P(`Talk rebuild saved.`);return}if(t.dataset.play){je(t);return}if(t.dataset.watchAsk){e.preventDefault(),ge(t.dataset.watchAsk);return}if(t.hasAttribute(`data-watch-live-save`)){k=null,U(`rep`),P(`Good. Run it live. Watching is not the result.`);return}if(t.hasAttribute(`data-watch-live-dismiss`)){k=null,document.querySelector(`[data-watch-modal]`)?.remove(),P(`The clip is not finished until a live move runs.`);return}if(t.hasAttribute(`data-wiz-next`)){Ie();return}if(t.hasAttribute(`data-wiz-back`)){O.step=Math.max(1,O.step-1),O.error=``,W();return}t.hasAttribute(`data-wiz-save`)&&Le()}}function Ae(e){e===`close`&&(w=`closed`),e===`min`&&(w=w===`min`?`normal`:`min`),e===`max`&&(w=w===`max`?`normal`:`max`),e===`restore`&&(w=`normal`),W()}function je(e){let t=e.dataset.play,n=e.closest(`[data-video-card]`),r=document.createElement(`iframe`);r.src=`${ue(t)}&autoplay=1`,r.title=`YouTube video`,r.allow=`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,r.allowFullscreen=!0,r.loading=`lazy`,r.className=`yt`,e.replaceWith(r),n&&n.classList.add(`is-playing`)}function Z(){let e=document.querySelector(`[data-audio-script]`)?.textContent||``;if(!window.speechSynthesis){P(`Speech is not available in this browser.`);return}window.speechSynthesis.cancel(),E=new SpeechSynthesisUtterance(e),E.rate=1,window.speechSynthesis.speak(E),P(`Speaking the script.`)}function Me(e){let t=(document.querySelector(`[data-proof]`)?.value||j).trim();if(e===`pass`&&!t){P(`Pass needs a proof sentence.`);return}let n=h(S),r=L(),i=I(n),a=i.lawId?g(S,i.lawId):r;_(S,{type:`rep`,date:v(),week:n.week,lawId:a?.id||r?.id||null,lawName:a?.name||r?.name||`Rep`,result:e,proof:t,remaining:D.remaining}),j=``,z(),P(e===`pass`?`Logged pass. Proof is in the log.`:`Logged fail. You covered material. The learner showed no proof.`),U(`log`)}function Ne(){let e=p(S),t=h(S),n=[...document.querySelectorAll(`[data-aar]`)].map(e=>e.value.trim());if(n.some(e=>!e)){P(`Answer all three review questions.`);return}e.aarDraft=n,_(S,{type:`aar`,date:v(),week:t.week,answers:n}),P(`End-of-week review saved to the log.`),U(`log`)}function Pe(e){let t=e.target;if(t.matches(`[data-aar]`)){p(S).aarDraft[Number(t.dataset.aar)]=t.value;return}if(t.matches(`[data-redesign]`)){p(S).redesign=t.value;return}if(t.matches(`[data-watch-live]`)){k&&(k.draft=t.value);return}if(t.matches(`[data-wiz]`)){let e=t.dataset.wiz;O[e]=t.type===`number`?Number(t.value):t.value,e===`topicCount`&&Q(),e===`weekCount`&&$();return}if(t.matches(`[data-topic]`)){let e=Number(t.dataset.topic);O.topics[e][t.dataset.field]=t.value}t.matches(`[data-proof]`)&&(j=t.value)}function Fe(e){let t=e.target;if(t.matches(`[data-topic]`)){let e=Number(t.dataset.topic);O.topics[e][t.dataset.field]=t.value}if(t.matches(`[data-pair]`)){let e=Number(t.dataset.pair),n=Number(t.dataset.slot);O.pairs[e][n]=Number(t.value)}t.matches(`[data-wiz='topicCount']`)&&(O.topicCount=Number(t.value),Q(),W()),t.matches(`[data-wiz='weekCount']`)&&(O.weekCount=Number(t.value),$(),W())}function Q(){let e=Math.min(12,Math.max(1,Number(O.topicCount)||1));for(O.topicCount=e;O.topics.length<e;)O.topics.push({name:``,essence:``,methodCue:``,confidence:`provisional`});O.topics=O.topics.slice(0,e),$()}function $(){let e=Math.min(12,Math.max(1,Number(O.weekCount)||1));for(O.weekCount=e;O.pairs.length<e;){let e=Math.min(O.topics.length-1,O.pairs.length*2),t=Math.min(O.topics.length-1,e+1);O.pairs.push([e,t])}O.pairs=O.pairs.slice(0,e)}function Ie(){if(O.step===1){if(!O.name.trim()||!O.purpose.trim()){O.error=`Name and purpose are required.`,W();return}Q(),O.error=``,O.step=2,W();return}if(O.step===2){if(O.topics.some(e=>!e.name.trim()||!e.essence.trim()||!e.methodCue.trim())){O.error=`Every topic needs a name, a core move, and a how-to cue.`,W();return}O.error=``,$(),O.step=3,W()}}function Le(){if(Q(),$(),O.pairs.some(e=>e[0]===e[1])&&O.topics.length>1){O.error=`Each week should pair two different topics when you have more than one.`,W();return}let e=O.topics.map((e,t)=>({id:u(`t${t}`),name:e.name.trim(),essence:e.essence.trim(),methodCue:e.methodCue.trim(),confidence:e.confidence||`provisional`})),t=O.pairs.map((t,n)=>{let r=e[t[0]],i=e[t[1]]||r,a=r&&i&&r.id!==i.id?[r.id,i.id]:[r.id],o=a.length===2?`${r.name} + ${i.name}`:r.name;return ne(n+1,a,o)}),n={id:u(`cur`),name:O.name.trim(),purpose:O.purpose.trim(),seeded:!1,osState:`Live`,laws:e,weeks:t};oe(S,n),O=M(),C=`os`,P(`${n.name} saved. Seven Laws is still in Subjects.`),W()}function Re(){S=ae(),C=p(S).lastPanel||`os`,(!b[C]||C===`wizard`)&&(C=`os`),Oe(),W()}function ze(){`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/sw.js`).catch(()=>{})})}ze(),Re();