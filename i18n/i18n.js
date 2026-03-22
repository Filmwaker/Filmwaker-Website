/**
 * FILMWAKER i18n ENGINE v3 — Dizionari inline, zero fetch
 */
const FW_I18N = (() => {
  const STORAGE_KEY  = 'fw_lang';
  const DEFAULT_LANG = 'it';
  const SUPPORTED    = ['it', 'en'];
  let _lang = DEFAULT_LANG;

  const _dict = {

    /* ── ITALIANO ── */
    it: {
      nav: {
        services:"Servizi", portfolio:"Portfolio", courses:"Corsi",
        team:"Team", contact:"Contattaci", academy:"Academy"
      },
      hero: {
        tagline:"RIVOLUZIONA LA TUA IMMAGINE CON",
        sub:"Produciamo contenuti video e animazioni di altissima qualit\u00e0 che catturano l'essenza del tuo brand e la raccontano al mondo.",
        cta_quote:"Richiedi un Preventivo", cta_portfolio:"Guarda i Nostri Lavori"
      },
      services: {
        title:"I Nostri Servizi",
        video:{ h:"Produzione Video", p:"Dalla pre-produzione alla post-produzione, realizziamo ogni tipo di contenuto video professionale." },
        cgi:{ h:"CGI & Animazione 3D", p:"Modellazione 3D, animazioni fluide e rendering fotorealistico per ogni esigenza creativa." },
        ads:{ h:"Spot Pubblicitari", p:"Creazioni pubblicitarie ad alto impatto visivo che parlano al tuo pubblico e convertono." }
      },
      clients: { title:"I Nostri Clienti" },
      portfolio: {
        title:"Le Nostre Ultime Opere",
        hero_h1:"I Nostri", hero_h1_span:"Lavori",
        hero_p:"Non produciamo solo video. Risolviamo problemi creativi. Ecco come lavoriamo.",
        filter_all:"Tutto", filter_vfx:"VFX & Virtual", filter_cgi:"CGI & Unreal", filter_doc:"Documentary",
        watch_yt:"Guarda su YouTube",
        p1_tag:"VFX & Virtual Production", p1_h2:"Death Stranding 2: On The Beach \u2014 Fan Film",
        p1_h3a:"Il Progetto",
        p1_p1:"Un fan film ambientato nell'universo di <strong>Death Stranding 2: On The Beach</strong>, con <a href='https://www.instagram.com/misshatred/' target='_blank' rel='noopener noreferrer'><strong>Jessica Armanetti</strong></a> nel ruolo di Higgs e <a href='https://www.instagram.com/droid.rust/' target='_blank' rel='noopener noreferrer'><strong>Fabio Meschini</strong></a> nel ruolo di Sam. L'obiettivo era restituire l'atmosfera e l'estetica del videogioco con un livello di qualit\u00e0 visiva da produzione professionale \u2014 il tutto in soli <strong>10 giorni di produzione totale</strong>. Il video ha raggiunto <a href='https://www.instagram.com/hidekojima_en/' target='_blank' rel='noopener noreferrer'><strong>Hideo Kojima</strong></a> in persona, che lo ha guardato e ricondiviso pubblicamente, riconoscendo la qualit\u00e0 del lavoro.",
        p1_h3b:"Cosa Abbiamo Fatto",
        p1_p2:"Le riprese sono state realizzate su <strong>green screen</strong>, con gli attori impegnati su un set minimale ma accuratamente pianificato. In parallelo abbiamo costruito l'intero ambiente sci-fi in <strong>Unreal Engine 5</strong>, con un livello di dettaglio e una cura artistica in grado di reggere il confronto con la direzione visiva del gioco originale. Il cuore della produzione \u00e8 stato il <strong>sistema di camera tracking</strong>: i movimenti fisici della camera sul set sono stati catturati e replicati fedelmente all'interno della scena virtuale, garantendo una coerenza prospettica perfetta tra attori e mondo digitale. La fase di <strong>compositing</strong> ha poi unito tutti gli elementi in un risultato finale sorprendente, considerando la brevit\u00e0 del periodo di produzione.",
        p2_tag:"CGI & Unreal Engine 5", p2_h2:"Metal Gear Solid 2 \u2014 Opening Remake",
        p2_h3a:"Il Progetto",
        p2_p1:"Una ricostruzione fedele e shot-per-shot della <strong>sequenza d'apertura di Metal Gear Solid 2: Sons of Liberty</strong> di <strong>Hideo Kojima</strong>, realizzata interamente in <strong>Unreal Engine 5</strong>. L'obiettivo era dimostrare fino a dove pu\u00f2 arrivare la produzione in real-time quando viene applicata con rigore artistico e tecnico a un materiale iconico, restituendo la stessa tensione cinematografica del gioco originale con un livello visivo contemporaneo, capace di reggere il confronto con produzioni di tutt'altra scala e budget.",
        p2_h3b:"Cosa Abbiamo Fatto",
        p2_p2:"Il personaggio di <strong>Snake</strong> \u00e8 stato costruito interamente da zero come un <strong>Metahuman personalizzato</strong>, modellato, rifinito e animato nei dettagli per rispecchiare fedelmente il design originale nella sua versione pi\u00f9 iconica. Ogni inquadratura \u00e8 stata ricreata manualmente all'interno di Unreal Engine 5, rispettando composizione, timing e atmosfera della sequenza originale. L'ambiente \u2014 il ponte della <strong>USS Discovery</strong> battuto dalla pioggia notturna \u2014 \u00e8 stato costruito pezzo per pezzo con particolare attenzione all'illuminazione drammatica, alla simulazione volumetrica, alla qualit\u00e0 dei materiali bagnati e ai riflessi in tempo reale.",
        p3_tag:"Documentary & BTS", p3_h2:"Metal Gear Solid 2 \u2014 Behind The Scenes",
        p3_h3a:"Il Progetto",
        p3_p1:"Un documentario dietro le quinte che racconta dall'interno il processo creativo e tecnico dietro la realizzazione del remake di <strong>Metal Gear Solid 2: Opening Remake</strong>. Ideato e realizzato da <a href='https://www.youtube.com/@JacktheLightning' target='_blank' rel='noopener noreferrer'><strong>JackTheLightning</strong></a>, questo video nasce dalla volont\u00e0 di aprire le porte dello studio e mostrare con trasparenza cosa significa costruire una produzione di questo livello con strumenti accessibili, competenza tecnica e una visione artistica precisa.",
        p3_h3b:"Cosa Abbiamo Fatto",
        p3_p2:"<a href='https://www.youtube.com/@JacktheLightning' target='_blank' rel='noopener noreferrer'><strong>JackTheLightning</strong></a> ha curato interamente l'ideazione, la struttura narrativa e la realizzazione del documentario, guidando lo spettatore attraverso ogni fase del processo: dalla costruzione del <strong>Metahuman di Snake</strong>, alla ricostruzione dell'ambiente della <strong>USS Discovery</strong>, fino alle complessit\u00e0 del lighting in tempo reale e del compositing finale."
      },
      mission: {
        title:"La Nostra Missione",
        p1:"Trasformiamo la tua visione in realt\u00e0 con video e CGI di impatto.",
        q1:"Qual \u00e8 il processo di produzione di un video?", a1:"Seguiamo un flusso di lavoro professionale dalla concept creation alla post-produzione.",
        q2:"Offrite servizi di animazione 3D?", a2:"S\u00ec, realizziamo soluzioni complete di animazione 3D per qualunque esigenza creativa."
      },
      courses_home: {
        title:"I Nostri Corsi",
        game:{ h:"Game Development Fundamentals", p:"Programmazione Blueprint e C++ in Unreal Engine 5, partendo da zero.", level:"Livello: Base", price:"\u20ac99" },
        vfx:{ h:"Unreal Engine 5 \u2014 Fondamenta", p:"Dall'editor alla tua prima cinematica: ambienti, Metahuman e animazione.", level:"Livello: Base", price:"\u20ac149" }
      },
      faq: {
        title:"Domande Frequenti",
        q1:"Come iniziare un progetto con voi?", a1:"Contattaci, raccontaci la tua visione e organizziamo una call.",
        q2:"Quali sono i tempi di consegna?", a2:"I tempi variano in base alla complessit\u00e0. Forniamo un preventivo con cronoprogramma.",
        q3:"Offrite revisioni durante il processo?", a3:"Assolutamente s\u00ec. Le revisioni sono fondamentali per il risultato perfetto.",
        q4:"Come posso saperne di pi\u00f9 sui prezzi?", a4:"Contattaci per una consulenza gratuita e un preventivo personalizzato."
      },
      contact: { title:"Contattaci", sub:"Trasforma la tua visione in realt\u00e0. Parliamo del tuo progetto.", btn:"Invia una Email" },
      footer: {
        services:"Servizi", resources:"Risorse", social:"Social",
        team_link:"Conosci Il Team", video_prod:"Produzione Video",
        cgi:"CGI & Animazione", ads:"Spot Pubblicitari", rights:"Tutti i diritti riservati."
      },
      team: {
        hero_h1:"Conosci i", hero_h1_span:"Creators",
        hero_p:"Siamo artisti, tecnici e storyteller. Uniamo creativit\u00e0 e tecnologia per plasmare il futuro della produzione digitale.",
        ale_bio:"Artista 3D e Animatore dedicato a trasformare idee in storie visive potenti. Specializzato in CGI, motion e storytelling digitale, con passione per la creazione di mondi cinematografici.",
        edo_bio:"Tech Artist e Unreal Engine Specialist che unisce creativit\u00e0 e precisione tecnica. Focalizzato su virtual production, ambienti real-time e visual di alto impatto.",
        gio_bio:"VFX Supervisor e Compositor con occhio preciso per dettaglio e coerenza visiva. Esperto nella creazione di effetti seamless, supervisione di pipeline e compositing avanzato.",
        amati_role:"Filmmaker & Director",
        amati_bio:"Filmmaker e regista diplomato in regia, montaggio e direzione della fotografia. Porta sul set una visione cinematografica solida, costruita tra cortometraggi, spot e produzioni video di carattere.",
        chad_role:"Social Media Manager",
        chad_bio:"Gestisce la presenza digital di Filmwaker sui social, curando contenuti, strategia editoriale e community. Trasforma ogni produzione in storytelling pensato per i canali digitali.",
        pasini_role:"Programmatore & Docente",
        pasini_bio:"Programmatore con esperienza nello sviluppo software e nella didattica tecnica. Docente nei corsi Filmwaker Academy, guida gli studenti attraverso programmazione, logica e strumenti di sviluppo applicati alla produzione creativa."
      },
      academy: {
        badge:"FILMWAKER ACADEMY",
        hero_title:"Impara a creare.\nPasso dopo passo.",
        hero_sub:"Corsi pensati per chi parte da zero o vuole migliorare. Tutorial chiari, docenti disponibili, contenuti gratuiti su YouTube \u2014 e la possibilit\u00e0 di seguire dal vivo in videocall.",
        hero_cta:"Scopri i Corsi",
        stats_courses:"Corsi disponibili", stats_live:"Videocall con i docenti", stats_free:"Contenuti gratuiti su YouTube", stats_support:"Supporto diretto",
        why_title:"Perch\u00e9 scegliere Filmwaker Academy?",
        why_1_title:"Accessibile a tutti", why_1_p:"I nostri corsi sono pensati per chi vuole imparare davvero, senza esperienza pregressa. Spieghiamo tutto dall'inizio, con un linguaggio chiaro e tutorial facili da seguire.",
        why_2_title:"Videocall con i docenti", why_2_p:"Puoi seguire i corsi anche in diretta tramite videocall, fare domande in tempo reale e ricevere feedback personalizzato da chi lavora nel settore.",
        why_3_title:"Contenuti gratuiti su YouTube", why_3_p:"Prima di iscriverti, puoi gi\u00e0 iniziare a imparare. Pubblichiamo regolarmente tutorial gratuiti sul nostro canale YouTube per darti un assaggio del nostro stile di insegnamento.",
        why_4_title:"Supporto continuo", why_4_p:"I docenti sono disponibili per domande durante e dopo il corso. Non sei mai solo nel tuo percorso di apprendimento.",
        courses_title:"I Nostri Corsi",
        free_preview:"Guarda le lezioni gratuite", enroll_cta:"Inizia ora", info_cta:"Richiedi info",
        level:"Livello", lessons:"Lezioni", duration:"Durata",
        included_title:"Cosa \u00e8 incluso in ogni corso",
        inc_1:"Attestato di completamento", inc_2:"Accesso a vita ai materiali", inc_3:"Sessioni in videocall",
        inc_4:"Materiali scaricabili", inc_5:"Aggiornamenti inclusi", inc_6:"Supporto diretto del docente",
        final_cta_title:"Pronto a iniziare?",
        final_cta_sub:"Scegli il corso che fa per te e inizia a imparare, al tuo ritmo \u2014 o prenota una videocall con il docente.",
        final_cta_btn:"Vedi tutti i corsi"
      },
      courses: {
        hero_title:"Impara a creare. Passo dopo passo.",
        hero_sub:"Corsi accessibili tenuti da chi lavora davvero nel settore.",
        badge_base:"Base", badge_mid:"Base", badge_adv:"Base",
        learn_title:"Cosa imparerai", curriculum_title:"Programma del corso",
        included_title:"Cosa \u00e8 incluso", instructor_title:"Il Tuo Docente",
        inc_cert:"Attestato di completamento", inc_cert_p:"Al termine del corso ricevi un attestato da aggiungere al CV.",
        inc_pace:"Sessioni in videocall", inc_pace_p:"Puoi seguire il corso dal vivo con il docente in videocall.",
        inc_support:"Supporto diretto", inc_support_p:"Il docente \u00e8 disponibile per domande durante e dopo il corso.",
        inc_assets:"Materiali scaricabili", inc_assets_p:"Progetti di esempio e risorse di supporto.",
        inc_realwork:"Progetto finale reale", inc_realwork_p:"Realizzi una cinematica completa come progetto di fine corso.",
        inc_studio:"Accesso al set Filmwaker", inc_studio_p:"Sessioni pratiche opzionali presso il nostro studio.",
        enroll_from:"Inizia Ora \u2014 da", request_info:"Richiedi Informazioni",
        discover:"Scopri i Corsi", overview_title:"I Nostri Corsi",
        stat_level:"Livello", stat_lessons:"Lezioni", stat_duration:"Durata", stat_from:"Da",
        lessons_label:"Lezioni", da_label:"da",
        game_tag:"GAME DEVELOPMENT", game_title:"Game Development Fundamentals",
        game_card_p:"Impara a programmare in Unreal Engine 5 con Blueprint e C++, partendo dalle basi assolute.",
        game_lead:"Impara a programmare in Unreal Engine 5 usando Blueprint e C++. Un corso pensato per chi parte da zero, con un approccio chiaro e pratico. Tenuto da Fabrizio Pasini.",
        game_ch1:"Capitolo 1 \u2013 Introduzione a UE5", game_ch1_p:"Panoramica dell'interfaccia, content browser, viewport e prime impostazioni di progetto.",
        game_ch2:"Capitolo 2 \u2013 Blueprint", game_ch2_p:"Logica visuale con Blueprint: variabili, eventi, funzioni e comunicazione tra attori.",
        game_ch3:"Capitolo 3 \u2013 Introduzione C++", game_ch3_p:"Basi di C++ applicate a Unreal Engine: classi, componenti e integrazione con Blueprint.",
        game_ch4:"Capitolo 4 \u2013 Gameplay & Input", game_ch4_p:"Gestione degli input, sistema di gioco, collisioni e interazioni.",
        game_ch5:"Capitolo 5 \u2013 Build & Deploy", game_ch5_p:"Ottimizzazione, debugging, packaging e distribuzione del progetto finito.",
        game_li1:"Come muoverti nell'editor di Unreal Engine 5",
        game_li2:"Programmazione con Blueprint, dalla logica base alla struttura avanzata",
        game_li3:"Introduzione a C++ per lo sviluppo di giochi",
        game_li4:"Gestione degli input, eventi e comunicazione tra Blueprint",
        game_li5:"Ottimizzazione, testing e debugging del progetto",
        game_li6:"Build finale e packaging dell'applicazione",
        vfx_tag:"UNREAL ENGINE 5", vfx_title:"Unreal Engine 5 \u2014 Fondamenta",
        vfx_card_p:"Dall'editor alla tua prima cinematica: lighting, ambienti, Metahuman e animazione.",
        vfx_lead:"Parti dalle basi dell'editor e arriva a creare la tua prima cinematica. Lighting, ambienti, Metahuman e animazione spiegati passo dopo passo. Tenuto da Edoardo Di Savina.",
        vfx_ch1:"Capitolo 1 \u2013 Interfaccia e navigazione", vfx_ch1_p:"Orientarsi nell'editor, gestire il content browser e impostare il progetto.",
        vfx_ch2:"Capitolo 2 \u2013 Ambienti e Lighting", vfx_ch2_p:"Costruire ambienti con Megascans e Nanite, illuminazione dinamica con Lumen.",
        vfx_ch3:"Capitolo 3 \u2013 Metahuman & Animazione", vfx_ch3_p:"Creare un personaggio con Metahuman Creator, importarlo in UE5 e animarlo.",
        vfx_ch4:"Capitolo 4 \u2013 Sequencer & Cinematica", vfx_ch4_p:"Usare il Sequencer per comporre una scena cinematica con camera movement e timing.",
        vfx_ch5:"Capitolo 5 \u2013 Rendering & Export", vfx_ch5_p:"Impostare il Movie Render Queue e esportare il video finale in alta qualit\u00e0.",
        vfx_li1:"Navigare nell'editor di Unreal Engine 5 con sicurezza",
        vfx_li2:"Creare e illuminare ambienti 3D realistici con Lumen",
        vfx_li3:"Usare Megascans e Nanite per asset ad alta qualit\u00e0",
        vfx_li4:"Creare e animare un personaggio con la pipeline Metahuman",
        vfx_li5:"Realizzare una cinematica completa con Sequencer",
        vfx_li6:"Gestire camera, movimento e rendering finale",
        vfx_li7:"Esportare il video finito in alta qualit\u00e0",
        instr_name:"Team Filmwaker",
        instr_role_game:"Programmatore & Docente", instr_role_vfx:"Tech Artist & Unreal Specialist",
        instr_bio_game:"Programmatore con esperienza nello sviluppo software e nella didattica. Approccio diretto, pratico e adatto a chi parte da zero.",
        instr_bio_vfx:"Tech Artist e Unreal Engine Specialist con esperienza diretta su produzioni reali. Insegna con un approccio pratico, partendo sempre dal concreto."
      }
    }, /* fine it */

    /* ── ENGLISH ── */
    en: {
      nav: {
        services:"Services", portfolio:"Portfolio", courses:"Courses",
        team:"Team", contact:"Contact Us", academy:"Academy"
      },
      hero: {
        tagline:"TRANSFORM YOUR IMAGE WITH",
        sub:"We produce ultra-high-quality video content and animations that capture the essence of your brand and tell your story to the world.",
        cta_quote:"Request a Quote", cta_portfolio:"See Our Work"
      },
      services: {
        title:"Our Services",
        video:{ h:"Video Production", p:"From pre-production to post-production, we craft every type of professional video content." },
        cgi:{ h:"CGI & 3D Animation", p:"3D modelling, fluid animations and photorealistic rendering for every creative need." },
        ads:{ h:"Commercial Spots", p:"High-impact advertising creations that speak to your audience and drive conversions." }
      },
      clients: { title:"Our Clients" },
      portfolio: {
        title:"Our Latest Works",
        hero_h1:"Our", hero_h1_span:"Work",
        hero_p:"We don't just produce video. We solve creative problems. Here's how we work.",
        filter_all:"All", filter_vfx:"VFX & Virtual", filter_cgi:"CGI & Unreal", filter_doc:"Documentary",
        watch_yt:"Watch on YouTube",
        p1_tag:"VFX & Virtual Production", p1_h2:"Death Stranding 2: On The Beach \u2014 Fan Film",
        p1_h3a:"The Project",
        p1_p1:"A fan film set in the universe of <strong>Death Stranding 2: On The Beach</strong>, featuring <a href='https://www.instagram.com/misshatred/' target='_blank' rel='noopener noreferrer'><strong>Jessica Armanetti</strong></a> as Higgs and <a href='https://www.instagram.com/droid.rust/' target='_blank' rel='noopener noreferrer'><strong>Fabio Meschini</strong></a> as Sam. The goal was to capture the atmosphere and aesthetic of the video game at a professional production level \u2014 all within a total production window of just <strong>10 days</strong>. The film reached <a href='https://www.instagram.com/hidekojima_en/' target='_blank' rel='noopener noreferrer'><strong>Hideo Kojima</strong></a> himself, who watched it and reshared it publicly, acknowledging the quality of the work.",
        p1_h3b:"What We Did",
        p1_p2:"The shoot took place on <strong>green screen</strong>, with the cast working on a minimal but carefully planned set. In parallel, we built the entire sci-fi environment in <strong>Unreal Engine 5</strong>. The heart of the production was the <strong>camera tracking system</strong>: physical camera movements on set were captured and faithfully replicated inside the virtual scene. The <strong>compositing</strong> phase then brought everything together into a final result that surprised for its quality, especially given the 10-day production window.",
        p2_tag:"CGI & Unreal Engine 5", p2_h2:"Metal Gear Solid 2 \u2014 Opening Remake",
        p2_h3a:"The Project",
        p2_p1:"A faithful, shot-for-shot reconstruction of the <strong>opening sequence of Metal Gear Solid 2: Sons of Liberty</strong> by <strong>Hideo Kojima</strong>, built entirely in <strong>Unreal Engine 5</strong>. The goal was to demonstrate how far real-time production can go when applied with artistic and technical rigour to iconic source material.",
        p2_h3b:"What We Did",
        p2_p2:"The character of <strong>Snake</strong> was built from scratch as a fully custom <strong>Metahuman</strong>, modelled, refined and animated to faithfully mirror the original design. Every shot was recreated by hand inside Unreal Engine 5. The environment \u2014 the deck of the <strong>USS Discovery</strong> in the rain \u2014 was constructed piece by piece with dramatic lighting, volumetric particles, wet materials and real-time reflections.",
        p3_tag:"Documentary & BTS", p3_h2:"Metal Gear Solid 2 \u2014 Behind The Scenes",
        p3_h3a:"The Project",
        p3_p1:"A behind-the-scenes documentary inside the creative and technical process behind <strong>Metal Gear Solid 2: Opening Remake</strong>. Conceived and directed by <a href='https://www.youtube.com/@JacktheLightning' target='_blank' rel='noopener noreferrer'><strong>JackTheLightning</strong></a>, this film opens the studio doors to show what it really takes to build a production of this calibre.",
        p3_h3b:"What We Did",
        p3_p2:"<a href='https://www.youtube.com/@JacktheLightning' target='_blank' rel='noopener noreferrer'><strong>JackTheLightning</strong></a> took complete ownership of the concept, narrative and production, guiding the viewer through every phase: the <strong>Snake Metahuman</strong>, the <strong>USS Discovery</strong> environment, real-time lighting and final compositing."
      },
      mission: {
        title:"Our Mission",
        p1:"We transform your vision into reality with impactful video and CGI.",
        q1:"What is the video production process?", a1:"We follow a professional workflow from concept creation to post-production.",
        q2:"Do you offer 3D animation services?", a2:"Yes, we deliver complete 3D animation solutions for any creative need."
      },
      courses_home: {
        title:"Our Courses",
        game:{ h:"Game Development Fundamentals", p:"Learn Blueprint and C++ programming in Unreal Engine 5, starting from scratch.", level:"Level: Beginner", price:"\u20ac99" },
        vfx:{ h:"Unreal Engine 5 \u2014 Foundations", p:"From editor basics to your first cinematic: environments, Metahuman and animation.", level:"Level: Beginner", price:"\u20ac149" }
      },
      faq: {
        title:"Frequently Asked Questions",
        q1:"How do I start a project with you?", a1:"Contact us, share your vision and we'll schedule a call.",
        q2:"What are the delivery times?", a2:"Times vary based on complexity. We always provide a detailed quote with a timeline.",
        q3:"Do you offer revisions during the process?", a3:"Absolutely. Including revisions is key to achieving the perfect result.",
        q4:"How can I learn more about pricing?", a4:"Contact us for a free consultation and a personalised quote."
      },
      contact: { title:"Contact Us", sub:"Transform your vision into reality. Let's talk about your project.", btn:"Send an Email" },
      footer: {
        services:"Services", resources:"Resources", social:"Social",
        team_link:"Meet the Team", video_prod:"Video Production",
        cgi:"CGI & Animation", ads:"Commercials", rights:"All rights reserved."
      },
      team: {
        hero_h1:"Meet the", hero_h1_span:"Creators",
        hero_p:"We are artists, technicians and storytellers. We combine creativity and technology to shape the future of digital production.",
        ale_bio:"A 3D Artist and Animator dedicated to transforming ideas into powerful visual stories. Skilled in CGI, motion, and digital storytelling, with a passion for creating cinematic worlds.",
        edo_bio:"Tech Artist and Unreal Engine Specialist blending creativity and technical precision. Focused on virtual production, real-time environments and high-impact digital visuals.",
        gio_bio:"A VFX Supervisor & Compositor with a sharp eye for detail and visual coherence. Experienced in crafting seamless effects, supervising pipelines, and elevating shots through advanced compositing.",
        amati_role:"Filmmaker & Director",
        amati_bio:"Filmmaker and director with a diploma in directing, editing and cinematography. He brings a sharp cinematic eye to every set, built across short films, commercials and character-driven video productions.",
        chad_role:"Social Media Manager",
        chad_bio:"Manages Filmwaker's digital presence across social platforms, handling content, editorial strategy and community. He turns every production into social-first storytelling that connects with audiences.",
        pasini_role:"Programmer & Instructor",
        pasini_bio:"Software developer and technical instructor with hands-on experience in programming and teaching. At Filmwaker Academy he guides students through coding, logic and development tools applied to creative production."
      },
      academy: {
        badge:"FILMWAKER ACADEMY",
        hero_title:"Learn to create.\nStep by step.",
        hero_sub:"Courses designed for beginners and those who want to grow. Clear tutorials, available instructors, free content on YouTube \u2014 and the option to follow live via video call.",
        hero_cta:"Explore Courses",
        stats_courses:"Courses available", stats_live:"Live video calls with instructors", stats_free:"Free content on YouTube", stats_support:"Direct support",
        why_title:"Why choose Filmwaker Academy?",
        why_1_title:"Accessible to everyone", why_1_p:"Our courses are designed for those who genuinely want to learn, with no prior experience needed. We explain everything from the beginning with easy-to-follow tutorials.",
        why_2_title:"Live video calls with instructors", why_2_p:"You can follow courses live via video call, ask questions in real time and get personalised feedback.",
        why_3_title:"Free content on YouTube", why_3_p:"Before you sign up, you can already start learning. We regularly publish free tutorials on our YouTube channel.",
        why_4_title:"Ongoing support", why_4_p:"Instructors are available for questions during and after the course. You are never alone in your learning journey.",
        courses_title:"Our Courses",
        free_preview:"Watch free lessons", enroll_cta:"Enroll now", info_cta:"Request info",
        level:"Level", lessons:"Lessons", duration:"Duration",
        included_title:"What's included in every course",
        inc_1:"Completion certificate", inc_2:"Lifetime access to materials", inc_3:"Live video call sessions",
        inc_4:"Downloadable materials", inc_5:"Updates included", inc_6:"Direct instructor support",
        final_cta_title:"Ready to start?",
        final_cta_sub:"Pick the course that suits you and start learning at your own pace \u2014 or book a video call with the instructor.",
        final_cta_btn:"Browse all courses"
      },
      courses: {
        hero_title:"Learn to create. Step by step.",
        hero_sub:"Accessible courses taught by people who actually work in the industry.",
        badge_base:"Beginner", badge_mid:"Beginner", badge_adv:"Beginner",
        learn_title:"What you will learn", curriculum_title:"Course curriculum",
        included_title:"What's included", instructor_title:"Your Instructor",
        inc_cert:"Completion certificate", inc_cert_p:"At the end of the course you receive a certificate to add to your CV.",
        inc_pace:"Live video call sessions", inc_pace_p:"You can follow the course live with the instructor via video call.",
        inc_support:"Direct support", inc_support_p:"The instructor is available for questions during and after the course.",
        inc_assets:"Downloadable materials", inc_assets_p:"Sample projects and support resources.",
        inc_realwork:"Real final project", inc_realwork_p:"You will create a complete cinematic as your end-of-course project.",
        inc_studio:"Filmwaker studio access", inc_studio_p:"Optional practical sessions at our studio.",
        enroll_from:"Enroll Now \u2014 from", request_info:"Request Information",
        discover:"Explore Courses", overview_title:"Our Courses",
        stat_level:"Level", stat_lessons:"Lessons", stat_duration:"Duration", stat_from:"From",
        lessons_label:"Lessons", da_label:"from",
        game_tag:"GAME DEVELOPMENT", game_title:"Game Development Fundamentals",
        game_card_p:"Learn to program in Unreal Engine 5 with Blueprint and C++, starting from scratch.",
        game_lead:"Learn to program inside Unreal Engine 5 using Blueprint and C++. A course designed for complete beginners, taught by Fabrizio Pasini with a clear, practical and straightforward approach.",
        game_ch1:"Chapter 1 \u2013 Intro to UE5", game_ch1_p:"Interface overview, content browser, viewport and initial project settings.",
        game_ch2:"Chapter 2 \u2013 Blueprint", game_ch2_p:"Visual scripting with Blueprint: variables, events, functions and actor communication.",
        game_ch3:"Chapter 3 \u2013 Intro to C++", game_ch3_p:"C++ basics applied to Unreal Engine: classes, components and Blueprint integration.",
        game_ch4:"Chapter 4 \u2013 Gameplay & Input", game_ch4_p:"Input management, game systems, collisions and interactions.",
        game_ch5:"Chapter 5 \u2013 Build & Deploy", game_ch5_p:"Optimisation, debugging, packaging and distribution of the finished project.",
        game_li1:"Navigating the Unreal Engine 5 editor with confidence",
        game_li2:"Blueprint programming from basic logic to advanced structure",
        game_li3:"Introduction to C++ for game development",
        game_li4:"Input management, events and Blueprint communication",
        game_li5:"Project optimisation, testing and debugging",
        game_li6:"Final build and application packaging",
        vfx_tag:"UNREAL ENGINE 5", vfx_title:"Unreal Engine 5 \u2014 Foundations",
        vfx_card_p:"From editor basics to your first cinematic: lighting, environments, Metahuman and animation.",
        vfx_lead:"Start from the editor basics and work your way up to creating your first cinematic. Covering editor navigation, lighting, environments, Metahuman pipeline and animation. Taught by Edoardo Di Savina.",
        vfx_ch1:"Chapter 1 \u2013 Interface & Navigation", vfx_ch1_p:"Getting around the editor, managing the content browser and setting up a project.",
        vfx_ch2:"Chapter 2 \u2013 Environments & Lighting", vfx_ch2_p:"Building environments with Megascans and Nanite, dynamic lighting with Lumen.",
        vfx_ch3:"Chapter 3 \u2013 Metahuman & Animation", vfx_ch3_p:"Creating a character with Metahuman Creator, importing into UE5 and animating it.",
        vfx_ch4:"Chapter 4 \u2013 Sequencer & Cinematic", vfx_ch4_p:"Using the Sequencer to compose a cinematic scene with camera movement and timing.",
        vfx_ch5:"Chapter 5 \u2013 Rendering & Export", vfx_ch5_p:"Setting up the Movie Render Queue and exporting the final video in high quality.",
        vfx_li1:"Navigating the Unreal Engine 5 editor with confidence",
        vfx_li2:"Creating and lighting realistic 3D environments with Lumen",
        vfx_li3:"Using Megascans and Nanite for high-quality assets",
        vfx_li4:"Creating and animating a character with the Metahuman pipeline",
        vfx_li5:"Producing a complete cinematic with Sequencer",
        vfx_li6:"Managing camera, movement and final rendering",
        vfx_li7:"Exporting the finished video in high quality",
        instr_name:"Filmwaker Team",
        instr_role_game:"Programmer & Instructor", instr_role_vfx:"Tech Artist & Unreal Specialist",
        instr_bio_game:"Software developer with experience in programming and teaching. Direct, practical approach suited to complete beginners.",
        instr_bio_vfx:"Tech Artist and Unreal Engine Specialist with hands-on experience on real productions. Teaches with a practical approach, always starting from the concrete."
      }
    } /* fine en */

  }; /* fine _dict */


  function _t(key) {
    const parts = key.split('.');
    let node = _dict[_lang];
    for (const p of parts) {
      if (node == null || typeof node !== 'object') return null;
      node = node[p];
    }
    return (node != null && typeof node === 'string') ? node : null;
  }

  function _applyDOM() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = _t(el.dataset.i18n);
      if (val == null) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const val = _t(el.dataset.i18nHtml);
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll('.fw-lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === _lang);
    });
    document.documentElement.lang = _lang;
  }

  function init() {
    const stored = localStorage.getItem(STORAGE_KEY);
    _lang = (stored && SUPPORTED.includes(stored)) ? stored : DEFAULT_LANG;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', _applyDOM);
    } else {
      _applyDOM();
    }
  }

  function switchTo(lang) {
    if (!SUPPORTED.includes(lang)) return;
    _lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    _applyDOM();
  }

  function current() { return _lang; }
  function t(key) { const v = _t(key); return v != null ? v : key; }

  return { init, switchTo, current, t };

})();

FW_I18N.init();
