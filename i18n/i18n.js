/**
 * FILMWAKER i18n ENGINE v3 — Dizionari inline, zero fetch
 * Funziona con file://, http://, qualsiasi server.
 * Nessuna dipendenza esterna.
 */
const FW_I18N = (() => {
  const STORAGE_KEY  = 'fw_lang';
  const DEFAULT_LANG = 'it';
  const SUPPORTED    = ['it', 'en'];
  let _lang = DEFAULT_LANG;

  /* ═══════════════════════════════════════════════════════════════════
     DIZIONARI INLINE — tutto il testo del sito in un unico posto
     ═══════════════════════════════════════════════════════════════════ */
  const _dict = {

    /* ── ITALIANO (default) ─────────────────────────────────────────── */
    it: {
      nav: {
        services:"Servizi", portfolio:"Portfolio", courses:"Corsi",
        team:"Team", contact:"Contattaci", academy:"Academy"
      },
      hero: {
        tagline:"RIVOLUZIONA LA TUA IMMAGINE CON",
        sub:"Produciamo contenuti video e animazioni di altissima qualità che catturano l'essenza del tuo brand e la raccontano al mondo.",
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
        filter_all:"Tutto", filter_commercial:"Commerciale", filter_cgi:"CGI & Unreal", filter_vfx:"VFX & Virtual",
        watch_yt:"Guarda su YouTube",
        p1_tag:"Virtual Production", p1_h2:"Sci-Fi Environment Integration",
        p1_h3a:"Il Progetto", p1_p1:"L'obiettivo era creare un ambiente sci-fi realistico senza costruire un set fisico costoso. Abbiamo usato la tecnologia LED wall per immergere completamente l'attore nella scena.",
        p1_h3b:"Cosa Abbiamo Fatto", p1_p2:"Abbiamo sviluppato l'ambiente 3D in Unreal Engine 5, ottimizzandolo per il rendering in tempo reale. Sul set abbiamo gestito il camera tracking per ottenere il parallasse perfetto direttamente in camera.",
        p2_tag:"Commercial & Storytelling", p2_h2:"Corporate Brand Story",
        p2_h3a:"Il Progetto", p2_p1:"Il cliente aveva bisogno di comunicare i valori aziendali attraverso un'intervista empatica e cinematografica.",
        p2_h3b:"Cosa Abbiamo Fatto", p2_p2:"Ci siamo concentrati su cinematografia e regia. Lighting morbido, montaggio ritmico e color grading per elevare la qualità percepita del brand.",
        p3_tag:"CGI & Animazione 3D", p3_h2:"Automotive & Product Reveal",
        p3_h3a:"Il Progetto", p3_p1:"L'obiettivo era creare un video reveal dove la cinematografia tradizionale non poteva arrivare.",
        p3_h3b:"Cosa Abbiamo Fatto", p3_p2:"Modelli fotorealistici, animazioni meccaniche sincronizzate con la musica e illuminazione virtuale per valorizzare forme e superfici metalliche."
      },
      mission: {
        title:"La Nostra Missione",
        p1:"Trasformiamo la tua visione in realtà con video e CGI di impatto.",
        q1:"Qual è il processo di produzione di un video?",
        a1:"Seguiamo un flusso di lavoro professionale dalla concept creation alla post-produzione.",
        q2:"Offrite servizi di animazione 3D?",
        a2:"Sì, realizziamo soluzioni complete di animazione 3D per qualunque esigenza creativa."
      },
      courses_home: {
        title:"I Nostri Corsi",
        game:{ h:"Game Development Fundamentals", p:"Impara a creare giochi professionali usando i motori più avanzati.", level:"Livello: Base", price:"€99" },
        vfx:{ h:"Visual Effects Mastery", p:"Domina le tecniche avanzate di visual effects e color grading.", level:"Livello: Intermedio", price:"€149" },
        vp:{ h:"Virtual Production Pro", p:"Esplora il futuro della produzione con realtà virtuale e LED wall.", level:"Livello: Avanzato", price:"€199" }
      },
      faq: {
        title:"Domande Frequenti",
        q1:"Come iniziare un progetto con voi?", a1:"Contattaci, raccontaci la tua visione e organizziamo una call.",
        q2:"Quali sono i tempi di consegna?", a2:"I tempi variano in base alla complessità. Forniamo un preventivo con cronoprogramma.",
        q3:"Offrite revisioni durante il processo?", a3:"Assolutamente sì. Le revisioni sono fondamentali per il risultato perfetto.",
        q4:"Come posso saperne di più sui prezzi?", a4:"Contattaci per una consulenza gratuita e un preventivo personalizzato."
      },
      contact: { title:"Contattaci", sub:"Trasforma la tua visione in realtà. Parliamo del tuo progetto.", btn:"Invia una Email" },
      footer: {
        services:"Servizi", resources:"Risorse", social:"Social",
        team_link:"Conosci Il Team", video_prod:"Produzione Video",
        cgi:"CGI & Animazione", ads:"Spot Pubblicitari", rights:"Tutti i diritti riservati."
      },
      team: {
        hero_h1:"Conosci i", hero_h1_span:"Creators",
        hero_p:"Siamo artisti, tecnici e storyteller. Uniamo creatività e tecnologia per plasmare il futuro della produzione digitale.",
        ale_bio:"Artista 3D e Animatore dedicato a trasformare idee in storie visive potenti. Specializzato in CGI, motion e storytelling digitale, con passione per la creazione di mondi cinematografici.",
        edo_bio:"Tech Artist e Unreal Engine Specialist che unisce creatività e precisione tecnica. Focalizzato su virtual production, ambienti real-time e visual di alto impatto.",
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
        hero_title:"Impara dai professionisti.\nCrea al massimo livello.",
        hero_sub:"Corsi pratici su Unreal Engine, VFX e Virtual Production tenuti da chi lavora ogni giorno sul campo.",
        hero_cta:"Scopri i Corsi",
        stats_students:"Studenti formati", stats_hours:"Ore di contenuto", stats_courses:"Corsi attivi", stats_support:"Supporto docente",
        why_title:"Perché scegliere Filmwaker Academy?",
        why_1_title:"Docenti in attività", why_1_p:"I nostri insegnanti lavorano ogni giorno in produzione. Non teoria: strumenti reali, workflow reali.",
        why_2_title:"Studia quando vuoi", why_2_p:"Lezioni on-demand disponibili 24/7. Rivedile quante volte vuoi, dal dispositivo che preferisci.",
        why_3_title:"Supporto diretto", why_3_p:"Ogni docente è raggiungibile per domande, anche dopo la fine del corso. Non sei mai solo.",
        why_4_title:"Attestato riconosciuto", why_4_p:"Ogni corso rilascia un attestato di completamento spendibile su LinkedIn e nel tuo curriculum.",
        courses_title:"I Nostri Corsi",
        free_preview:"Guarda le lezioni gratuite", enroll_cta:"Inizia ora", info_cta:"Richiedi info",
        level:"Livello", lessons:"Lezioni", duration:"Durata",
        included_title:"Cosa è incluso in ogni corso",
        inc_1:"Attestato finale", inc_2:"Accesso a vita", inc_3:"Supporto del docente",
        inc_4:"Materiali scaricabili", inc_5:"Aggiornamenti inclusi", inc_6:"Community dedicata",
        testimonials_title:"Cosa dicono i nostri studenti",
        final_cta_title:"Pronto a iniziare?",
        final_cta_sub:"Scegli il tuo corso e inizia oggi a costruire le competenze che il mercato richiede.",
        final_cta_btn:"Vedi tutti i corsi"
      },
      courses: {
        hero_title:"Formazione per tutti i livelli",
        hero_sub:"I nostri corsi sono guidati da professionisti del settore.",
        badge_base:"Base", badge_mid:"Intermedio", badge_adv:"Avanzato",
        learn_title:"Cosa imparerai", curriculum_title:"Programma del corso",
        included_title:"Cosa è incluso", instructor_title:"Il Tuo Docente",
        inc_cert:"Attestato finale", inc_cert_p:"Richiedibile su LinkedIn o nel tuo CV.",
        inc_pace:"Studia ai tuoi ritmi", inc_pace_p:"Lezioni on-demand, visibili quando vuoi.",
        inc_support:"Supporto del docente", inc_support_p:"Assistenza per ogni domanda durante e dopo il corso.",
        inc_assets:"Materiali scaricabili", inc_assets_p:"Asset, progetti finiti e risorse di supporto.",
        inc_realwork:"Progetti reali", inc_realwork_p:"Esercizi pratici su footage reale da set professionali.",
        inc_studio:"Accesso al set Filmwaker", inc_studio_p:"Sessioni pratiche opzionali presso il nostro studio.",
        enroll_from:"Inizia Ora — da", request_info:"Richiedi Informazioni",
        discover:"Scopri i Corsi", overview_title:"I Nostri Corsi",
        stat_level:"Livello", stat_lessons:"Lezioni", stat_duration:"Durata", stat_from:"Da",
        lessons_label:"Lezioni", da_label:"da",
        game_tag:"GAME DEVELOPMENT", game_title:"Game Development Fundamentals",
        game_card_p:"Dal game design alla programmazione, scopri tutti i segreti dello sviluppo ludico moderno.",
        game_lead:"Apprendi Unreal Engine e tutte le competenze necessarie a sviluppare il tuo videogioco, anche partendo da zero.",
        game_ch1:"Capitolo 1 – Interfaccia di Unreal Engine", game_ch1_p:"Panoramica dell'interfaccia, content browser, viewport navigation e prime impostazioni di progetto.",
        game_ch2:"Capitolo 2 – Strumenti e modalità dell'Engine", game_ch2_p:"Landscape tools, foliage, geometry brushes e tutte le modalità di editing avanzate.",
        game_ch3:"Capitolo 3 – Creazione di ambientazioni", game_ch3_p:"Creazione di ambienti realistici con Megascans, Nanite e Lumen per illuminazione dinamica.",
        game_ch4:"Capitolo 4 – Programmazione Blueprint", game_ch4_p:"Logica di gioco, input management, Blueprint communication e introduzione a C++.",
        game_ch5:"Capitolo 5 – Build & Deploy", game_ch5_p:"Ottimizzazione finale, packaging del progetto e distribuzione su piattaforme target.",
        game_li1:"Workflow e creazione di un gioco completo in Unreal Engine",
        game_li2:"Programmazione Blueprint + introduzione a C++",
        game_li3:"Best practice Blueprint: ottimizzazione, memoria, struttura",
        game_li4:"Integrazione ed uso degli effetti Niagara",
        game_li5:"Game optimization & testing",
        game_li6:"Debugging e build dell'applicazione finale",
        vfx_tag:"VISUAL EFFECTS", vfx_title:"Visual Effects Mastery",
        vfx_card_p:"Compositing, color grading, particle effects. Domina le tecniche avanzate di VFX.",
        vfx_lead:"Domina le tecniche avanzate di VFX. Dal compositing al color grading, crea effetti cinematografici.",
        vfx_ch1:"Capitolo 1 – Fondamenta del VFX", vfx_ch1_p:"Teoria del colore, psicologia visiva e panoramica software VFX.",
        vfx_ch2:"Capitolo 2 – Compositing Avanzato", vfx_ch2_p:"Layering, masking, keying in After Effects e Nuke.",
        vfx_ch3:"Capitolo 3 – Tracking e Rotoscoping", vfx_ch3_p:"Camera tracking, object tracking e rotoscoping frame-by-frame.",
        vfx_ch4:"Capitolo 4 – Color Grading", vfx_ch4_p:"DaVinci Resolve, LUTs e look cinematografici.",
        vfx_ch5:"Capitolo 5 – Delivery & Export", vfx_ch5_p:"Codecs, formati broadcast, pipeline di consegna.",
        vfx_li1:"Teoria del colore e psicologia visiva", vfx_li2:"Compositing avanzato con After Effects & Nuke",
        vfx_li3:"Motion tracking & rotoscoping professionale", vfx_li4:"Particle effects & simulazioni fisiche",
        vfx_li5:"Color grading cinematografico con DaVinci Resolve", vfx_li6:"Correzioni primarie e secondarie",
        vfx_li7:"Workflow di export e consegna in vari formati",
        vp_tag:"VIRTUAL PRODUCTION", vp_title:"Virtual Production Pro",
        vp_card_p:"LED wall, real-time rendering, motion capture. Esplora il futuro della produzione.",
        vp_lead:"Esplora il futuro della produzione con ambienti virtuali e LED wall.",
        vp_ch1:"Capitolo 1 – Fondamenta Virtual Production", vp_ch1_p:"Storia, tecnologie attuali, in-camera vs post VFX.",
        vp_ch2:"Capitolo 2 – LED Wall & Hardware", vp_ch2_p:"Setup hardware, calibrazione display, gestione del colore.",
        vp_ch3:"Capitolo 3 – Unreal Engine per VP", vp_ch3_p:"nDisplay, rendering in tempo reale, pipeline Perforce.",
        vp_ch4:"Capitolo 4 – Motion Capture", vp_ch4_p:"Optical mocap, live link, retargeting.",
        vp_ch5:"Capitolo 5 – Produzione & Post", vp_ch5_p:"Coordinamento set virtuale, tracking camera, consegna.",
        vp_li1:"Tecnologie LED wall e setup hardware professionale", vp_li2:"Real-time rendering con Unreal Engine",
        vp_li3:"Motion capture & performance capture", vp_li4:"Virtual camera & virtual cinematography",
        vp_li5:"Integrazione con pipeline di produzione tradizionale",
        vp_li6:"Virtual lighting & tecniche di illuminazione avanzate",
        vp_li7:"Case study da produzioni cinematografiche high-end",
        vp_li8:"Workflow completo dalla pre-produzione alla consegna finale",
        instr_name:"Team Filmwaker",
        instr_role_game:"Game Developer & 3D Artist", instr_role_vfx:"VFX Artist & Compositor", instr_role_vp:"Virtual Production Supervisor",
        instr_bio_game:"Professionisti con anni di esperienza su titoli indie e produzioni commerciali. Disponibili per ogni domanda anche dopo la fine del corso.",
        instr_bio_vfx:"Esperti di post-produzione con background in pubblicità e cinema. Supporto diretto durante tutto il percorso formativo.",
        instr_bio_vp:"Supervisori con esperienza diretta su set con LED wall e pipeline Unreal Engine. Conoscenza pratica di ogni fase del workflow."
      }
    }, /* fine it */

    /* ── ENGLISH ─────────────────────────────────────────────────────── */
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
        filter_all:"All", filter_commercial:"Commercial", filter_cgi:"CGI & Unreal", filter_vfx:"VFX & Virtual",
        watch_yt:"Watch on YouTube",
        p1_tag:"Virtual Production", p1_h2:"Sci-Fi Environment Integration",
        p1_h3a:"The Project", p1_p1:"The goal was to create a realistic sci-fi environment without building an expensive physical set. We used LED wall technology to fully immerse the actor in the scene.",
        p1_h3b:"What We Did", p1_p2:"We developed the 3D environment in Unreal Engine 5, optimising it for real-time rendering. On set, we managed camera tracking to achieve perfect parallax directly in camera.",
        p2_tag:"Commercial & Storytelling", p2_h2:"Corporate Brand Story",
        p2_h3a:"The Project", p2_p1:"The client needed to communicate company values through an empathetic and cinematic interview.",
        p2_h3b:"What We Did", p2_p2:"We focused on cinematography and direction. Soft lighting, rhythmic editing and colour grading to elevate the perceived quality of the brand.",
        p3_tag:"CGI & 3D Animation", p3_h2:"Automotive & Product Reveal",
        p3_h3a:"The Project", p3_p1:"The goal was to create a product reveal video where traditional cinematography couldn't reach.",
        p3_h3b:"What We Did", p3_p2:"Photorealistic models, mechanical animations synced to music and virtual studio lighting to highlight shapes and metallic surfaces."
      },
      mission: {
        title:"Our Mission",
        p1:"We transform your vision into reality with impactful video and CGI.",
        q1:"What is the video production process?",
        a1:"We follow a professional workflow from concept creation to post-production, ensuring quality and fast delivery.",
        q2:"Do you offer 3D animation services?",
        a2:"Yes, we deliver complete 3D animation solutions for any creative need, from modelling to final rendering."
      },
      courses_home: {
        title:"Our Courses",
        game:{ h:"Game Development Fundamentals", p:"Learn to create professional games using the most advanced engines.", level:"Level: Beginner", price:"€99" },
        vfx:{ h:"Visual Effects Mastery", p:"Master advanced visual effects and colour grading techniques.", level:"Level: Intermediate", price:"€149" },
        vp:{ h:"Virtual Production Pro", p:"Explore the future of production with virtual reality and LED walls.", level:"Level: Advanced", price:"€199" }
      },
      faq: {
        title:"Frequently Asked Questions",
        q1:"How do I start a project with you?", a1:"Contact us, share your vision and we'll schedule a call to understand your needs.",
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
        hero_title:"Learn from professionals.\nCreate at the highest level.",
        hero_sub:"Practical courses on Unreal Engine, VFX and Virtual Production — taught by people who work on set every day.",
        hero_cta:"Explore Courses",
        stats_students:"Students trained", stats_hours:"Hours of content", stats_courses:"Active courses", stats_support:"Teacher support",
        why_title:"Why choose Filmwaker Academy?",
        why_1_title:"Active practitioners", why_1_p:"Our teachers work in production every day. No theory: real tools, real workflows.",
        why_2_title:"Study on your schedule", why_2_p:"On-demand lessons available 24/7. Rewatch them as many times as you like.",
        why_3_title:"Direct support", why_3_p:"Every teacher is reachable for questions even after the course ends.",
        why_4_title:"Recognised certificate", why_4_p:"Each course awards a completion certificate you can add to LinkedIn and your CV.",
        courses_title:"Our Courses",
        free_preview:"Watch free lessons", enroll_cta:"Enroll now", info_cta:"Request info",
        level:"Level", lessons:"Lessons", duration:"Duration",
        included_title:"What's included in every course",
        inc_1:"Final certificate", inc_2:"Lifetime access", inc_3:"Teacher support",
        inc_4:"Downloadable materials", inc_5:"Updates included", inc_6:"Dedicated community",
        testimonials_title:"What our students say",
        final_cta_title:"Ready to start?",
        final_cta_sub:"Choose your course and start building the skills the industry demands.",
        final_cta_btn:"Browse all courses"
      },
      courses: {
        hero_title:"Training for all skill levels",
        hero_sub:"Our courses are led by industry professionals who guide you step by step.",
        badge_base:"Beginner", badge_mid:"Intermediate", badge_adv:"Advanced",
        learn_title:"What you will learn", curriculum_title:"Course curriculum",
        included_title:"What's included", instructor_title:"Your Instructor",
        inc_cert:"Final certificate", inc_cert_p:"Add it to LinkedIn or your CV.",
        inc_pace:"Study at your own pace", inc_pace_p:"On-demand lessons, watch whenever you want.",
        inc_support:"Teacher support", inc_support_p:"Help with any question during and after the course.",
        inc_assets:"Downloadable materials", inc_assets_p:"Assets, finished projects and support resources.",
        inc_realwork:"Real projects", inc_realwork_p:"Hands-on exercises using real footage from professional sets.",
        inc_studio:"Filmwaker studio access", inc_studio_p:"Optional practical sessions at our studio.",
        enroll_from:"Enroll Now — from", request_info:"Request Information",
        discover:"Explore Courses", overview_title:"Our Courses",
        stat_level:"Level", stat_lessons:"Lessons", stat_duration:"Duration", stat_from:"From",
        lessons_label:"Lessons", da_label:"from",
        game_tag:"GAME DEVELOPMENT", game_title:"Game Development Fundamentals",
        game_card_p:"From game design to programming, discover all the secrets of modern game development.",
        game_lead:"Learn Unreal Engine and all the skills needed to build your own game — even starting from zero.",
        game_ch1:"Chapter 1 – Unreal Engine Interface", game_ch1_p:"Interface overview, content browser, viewport navigation and initial project settings.",
        game_ch2:"Chapter 2 – Engine Tools & Modes", game_ch2_p:"Landscape tools, foliage, geometry brushes and all advanced editing modes.",
        game_ch3:"Chapter 3 – Environment Creation", game_ch3_p:"Creating realistic environments with Megascans, Nanite and Lumen.",
        game_ch4:"Chapter 4 – Blueprint Programming", game_ch4_p:"Game logic, input management, Blueprint communication and introduction to C++.",
        game_ch5:"Chapter 5 – Build & Deploy", game_ch5_p:"Final optimisation, project packaging and distribution to target platforms.",
        game_li1:"Workflow and complete game creation in Unreal Engine",
        game_li2:"Blueprint programming + introduction to C++",
        game_li3:"Blueprint best practices: optimisation, memory, structure",
        game_li4:"Integrating and using Niagara effects",
        game_li5:"Game optimisation & testing",
        game_li6:"Debugging and building the final application",
        vfx_tag:"VISUAL EFFECTS", vfx_title:"Visual Effects Mastery",
        vfx_card_p:"Compositing, colour grading, particle effects. Master advanced VFX techniques.",
        vfx_lead:"Master advanced VFX techniques. From compositing to colour grading, create cinematic effects.",
        vfx_ch1:"Chapter 1 – VFX Foundations", vfx_ch1_p:"Colour theory, visual psychology and overview of the main VFX software.",
        vfx_ch2:"Chapter 2 – Advanced Compositing", vfx_ch2_p:"Layering, masking, keying in After Effects and Nuke.",
        vfx_ch3:"Chapter 3 – Tracking & Rotoscoping", vfx_ch3_p:"Camera tracking, object tracking and frame-by-frame rotoscoping.",
        vfx_ch4:"Chapter 4 – Colour Grading", vfx_ch4_p:"DaVinci Resolve, LUTs and cinematic looks.",
        vfx_ch5:"Chapter 5 – Delivery & Export", vfx_ch5_p:"Codecs, broadcast formats, delivery pipelines.",
        vfx_li1:"Colour theory and visual psychology", vfx_li2:"Advanced compositing with After Effects & Nuke",
        vfx_li3:"Professional motion tracking & rotoscoping", vfx_li4:"Particle effects & physical simulations",
        vfx_li5:"Cinematic colour grading with DaVinci Resolve", vfx_li6:"Primary and secondary corrections",
        vfx_li7:"Export and delivery workflow in various formats",
        vp_tag:"VIRTUAL PRODUCTION", vp_title:"Virtual Production Pro",
        vp_card_p:"LED walls, real-time rendering, motion capture. Explore the future of production.",
        vp_lead:"Explore the future of production with virtual environments and LED walls.",
        vp_ch1:"Chapter 1 – VP Foundations", vp_ch1_p:"History, current technologies, in-camera vs post-production VFX.",
        vp_ch2:"Chapter 2 – LED Wall & Hardware", vp_ch2_p:"Hardware setup, display calibration, colour management.",
        vp_ch3:"Chapter 3 – Unreal Engine for VP", vp_ch3_p:"nDisplay, real-time rendering, Perforce pipeline.",
        vp_ch4:"Chapter 4 – Motion Capture", vp_ch4_p:"Optical mocap, live link, retargeting.",
        vp_ch5:"Chapter 5 – Production & Post", vp_ch5_p:"Virtual set coordination, camera tracking, delivery.",
        vp_li1:"LED wall technologies and professional hardware setup", vp_li2:"Real-time rendering with Unreal Engine",
        vp_li3:"Motion capture & performance capture", vp_li4:"Virtual camera & virtual cinematography",
        vp_li5:"Integration with traditional production pipelines",
        vp_li6:"Virtual lighting & advanced illumination techniques",
        vp_li7:"Case studies from high-end film productions",
        vp_li8:"Full workflow from pre-production to final delivery",
        instr_name:"Filmwaker Team",
        instr_role_game:"Game Developer & 3D Artist", instr_role_vfx:"VFX Artist & Compositor", instr_role_vp:"Virtual Production Supervisor",
        instr_bio_game:"Professionals with years of experience on indie titles and commercial productions. Available for questions even after the course ends.",
        instr_bio_vfx:"Post-production experts with backgrounds in advertising and cinema. Direct support throughout your entire learning journey.",
        instr_bio_vp:"Supervisors with hands-on experience on LED wall sets and Unreal Engine pipelines. Practical knowledge of every workflow stage."
      }
    } /* fine en */

  }; /* fine _dict */


  /* ═══════════════════════════════════════════════════════════════════
     MOTORE — legge dalla chiave dotted, applica al DOM
     ═══════════════════════════════════════════════════════════════════ */

  /** Risolve "nav.services" → valore nel dizionario corrente */
  function _t(key) {
    const parts = key.split('.');
    let node = _dict[_lang];
    for (const p of parts) {
      if (node == null || typeof node !== 'object') return null;
      node = node[p];
    }
    return (node != null && typeof node === 'string') ? node : null;
  }

  /** Applica tutte le traduzioni al DOM senza sovrascrivere se la chiave manca */
  function _applyDOM() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = _t(el.dataset.i18n);
      if (val == null) return; /* chiave mancante — lascia il testo originale */
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

    /* Aggiorna bottoni switcher */
    document.querySelectorAll('.fw-lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === _lang);
    });

    document.documentElement.lang = _lang;
  }

  /** Init — legge la scelta salvata, default IT */
  function init() {
    const stored = localStorage.getItem(STORAGE_KEY);
    _lang = (stored && SUPPORTED.includes(stored)) ? stored : DEFAULT_LANG;
    /* Applica dopo che il DOM è pronto */
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', _applyDOM);
    } else {
      _applyDOM();
    }
  }

  /** Cambia lingua e riapplica */
  function switchTo(lang) {
    if (!SUPPORTED.includes(lang)) return;
    _lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    _applyDOM();
  }

  function current() { return _lang; }
  function t(key)    { const v = _t(key); return v != null ? v : key; }

  return { init, switchTo, current, t };

})();

/* Auto-init */
FW_I18N.init();
