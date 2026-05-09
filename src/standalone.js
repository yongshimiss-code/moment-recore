const books = [
  {
    id: "sapiens",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    progress: 43,
    pages: 231,
    groupName: "Thinking Notes",
    notes: [
      {
        id: "sapiens-note-1",
        type: "insight",
        time: "Today 10:30",
        zhTime: "今天 10:30",
        text: "Everyone you'll ever meet knows something you don't.",
        zhText: "你遇见的每一个人，都知道一些你不知道的事。"
      },
      {
        id: "sapiens-note-2",
        type: "voice",
        time: "Today 08:45",
        zhTime: "今天 08:45",
        text: "The myth of cooperation feels less abstract when I compare it to modern communities online.",
        zhText: "当我把合作神话和当代线上社群放在一起看时，它就不再只是抽象概念了。",
        duration: "00:45"
      },
      {
        id: "sapiens-note-3",
        type: "image",
        time: "Yesterday 21:15",
        zhTime: "昨天 21:15",
        text: "Captured a page about myth, trust, and collective imagination.",
        zhText: "拍下了一页关于神话、信任与共同想象的内容。",
        imageUrl: "assets/cat-note-page.png"
      }
    ],
    coverImage: "assets/cover-sapiens.png",
    heroImage: "assets/cat-hd-read.png",
    detailImage: "assets/cat-hd-read.png"
  },
  {
    id: "atomic",
    title: "Atomic Habits",
    author: "James Clear",
    progress: 25,
    pages: 128,
    groupName: "Thinking Notes",
    notes: [
      {
        id: "atomic-note-1",
        type: "text",
        time: "Today 09:18",
        zhTime: "今天 09:18",
        text: "A note can stay small and still be useful if it captures the exact moment a sentence shifted something in me.",
        zhText: "一条笔记可以很短，但只要它抓住了一句话真正触动我的那个瞬间，它就已经足够有用。"
      },
      {
        id: "atomic-note-2",
        type: "insight",
        time: "Yesterday 18:40",
        zhTime: "昨天 18:40",
        text: "Tiny repeated actions become believable only when the environment keeps making them easy.",
        zhText: "微小的重复行动，只有在环境持续让它变得容易时，才真的会发生。"
      }
    ],
    coverImage: "assets/cover-atomic.png",
    heroImage: "assets/cat-hd-read.png",
    detailImage: "assets/cat-hd-read.png"
  },
  {
    id: "alchemist",
    title: "The Alchemist",
    author: "Paulo Coelho",
    progress: 10,
    pages: 64,
    groupName: "Slow Reads",
    notes: [
      {
        id: "alchemist-note-1",
        type: "insight",
        time: "Yesterday 16:10",
        zhTime: "昨天 16:10",
        text: "The book keeps asking whether signs are discovered or slowly created by attention itself.",
        zhText: "这本书一直在追问：所谓的征兆，究竟是被发现的，还是被持续关注一点点创造出来的。"
      }
    ],
    coverImage: "assets/cover-alchemist.png",
    heroImage: "assets/cat-hd-read.png",
    detailImage: "assets/cat-hd-read.png"
  },
  {
    id: "deep",
    title: "Deep Work",
    author: "Cal Newport",
    progress: 0,
    pages: 0,
    groupName: "Slow Reads",
    notes: [
      {
        id: "deep-note-1",
        type: "insight",
        time: "Yesterday 19:40",
        zhTime: "昨天 19:40",
        text: "The strongest reading notes are not summaries. They are the points where the book and your own life briefly overlap.",
        zhText: "最有力量的读书笔记不是摘要，而是书里的内容与你自己的生活短暂重叠的那些瞬间。"
      }
    ],
    coverImage: "assets/cover-deepwork.png",
    heroImage: "assets/cat-hd-read.png",
    detailImage: "assets/cat-hd-read.png"
  }
];

const imageAssets = {
  avatarGray: "assets/cat-hd-smile-cutout.png",
  userReadAvatar: "assets/cat-user-read-cutout.png",
  captureGlow: "assets/cat-hd-smile.png",
  notePreview: "assets/cat-hd-smile.png",
  callGray: "assets/cat-call-gray.png",
  callOrange: "assets/cat-call-orange.png"
};

const moments = [
  {
    time: "Today 10:30",
    zhTime: "今天 10:30",
    tag: "Insight",
    zhTag: "灵感",
    text: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
    zhText: "我们听到的一切都只是观点，不是事实。我们看到的一切都只是视角，不是真相。",
    action: "Back to book",
    target: "book-detail",
    bookId: "sapiens"
  },
  {
    time: "Today 09:18",
    zhTime: "今天 09:18",
    tag: "Text",
    zhTag: "文字",
    text: "A note can stay small and still be useful if it captures the exact moment a sentence shifted something in me.",
    zhText: "一条笔记可以很短，但只要它抓住了一句话真正触动我的那个瞬间，它就已经足够有用。",
    action: "Back to book",
    target: "book-detail",
    bookId: "atomic"
  },
  {
    time: "Today 08:45",
    zhTime: "今天 08:45",
    tag: "Voice",
    zhTag: "语音",
    text: "Shared imagination feels like a fragile but powerful structure. I want to compare it to online cultures next.",
    zhText: "共同想象像一种脆弱却强大的结构。我想下一步把它和网络文化放在一起比较。",
    action: "Continue in AI chat",
    target: "ai-chat"
  },
  {
    time: "Yesterday 21:15",
    zhTime: "昨天 21:15",
    tag: "Image",
    zhTag: "图片",
    text: "Captured a page on how trust scales through stories, rituals, and symbols.",
    zhText: "拍下了一页关于信任如何通过故事、仪式与符号被不断放大的内容。",
    action: "Back to book",
    target: "book-detail",
    bookId: "sapiens"
  },
  {
    time: "Yesterday 19:40",
    zhTime: "昨天 19:40",
    tag: "Insight",
    zhTag: "灵感",
    text: "The strongest reading notes are not summaries. They are the points where the book and your own life briefly overlap.",
    zhText: "最有力量的读书笔记不是摘要，而是书里的内容与你自己的生活短暂重叠的那些瞬间。",
    action: "Back to book",
    target: "book-detail",
    bookId: "deep"
  }
];

const searchIndex = [
  {
    type: "books",
    title: "Sapiens",
    meta: "Yuval Noah Harari",
    zhMeta: "尤瓦尔·赫拉利",
    target: "book-detail",
    bookId: "sapiens"
  },
  {
    type: "books",
    title: "Atomic Habits",
    meta: "James Clear",
    zhMeta: "詹姆斯·克利尔",
    target: "book-detail",
    bookId: "atomic"
  },
  {
    type: "notes",
    title: "The purpose of life is to be useful...",
    zhTitle: "生命的意义在于成为一个有用的人……",
    meta: "Today",
    zhMeta: "今天",
    target: "processing"
  },
  {
    type: "notes",
    title: "Everyone you'll ever meet knows something you don't.",
    zhTitle: "你遇见的每一个人，都知道一些你不知道的事。",
    meta: "Today 10:30",
    zhMeta: "今天 10:30",
    target: "book-detail",
    bookId: "sapiens"
  },
  {
    type: "insights",
    title: "Shared imagination is our superpower.",
    zhTitle: "共同想象力，是我们最特别的能力。",
    meta: "2 days ago",
    zhMeta: "2 天前",
    target: "insights"
  },
  {
    type: "insights",
    title: "Evenings are your strongest reflection window.",
    zhTitle: "夜晚是你最适合沉淀阅读想法的时间。",
    meta: "This week",
    zhMeta: "本周",
    target: "insights"
  }
];

const baseSuggestionCopy = {
  summarize: {
    title: "The note centers on purpose as practiced through service, dignity, and compassion instead of emotion alone.",
    zhTitle: "这条笔记真正抓住的，不是情绪本身，而是服务、尊严与善意如何共同构成一种更有方向感的人生意义。",
    body: "This becomes a nice bridge between your reading and your own capture habit: record what changes you, not just what you agree with.",
    zhBody: "它正好搭起了一座桥，把你的阅读和记录习惯连接在一起: 记下真正改变你的部分，而不只是你认同的观点。"
  },
  expand: {
    title: "Expand the thread between usefulness and identity: who do you become when you define meaning through contribution?",
    zhTitle: "可以继续往下追问“有用”与“身份”之间的关系: 当你把意义建立在付出与贡献上时，你会成为怎样的人？",
    body: "You could connect this to your reading on collective myths and ask how communities reward visible usefulness.",
    zhBody: "你可以把它和关于共同神话的阅读连起来，继续想一想: 一个群体通常会怎样奖励那些“看得见的有用”？"
  },
  question: {
    title: "What would change in your day if you measured a meaningful life by usefulness, honor, and compassion rather than mood?",
    zhTitle: "如果你不再用情绪，而是用有用、体面和善意来衡量一天是否有意义，你的生活会发生什么变化？",
    body: "This question can open a more personal dialogue and lead naturally into AI chat or a longer note.",
    zhBody: "这个问题很适合带出更个人的对话，也能自然延伸到 AI 讨论或一条更完整的长笔记。"
  }
};

const aiReplies = [
  {
    en: "That connection makes sense. Shared stories can feel invisible right up until they organize how everyone behaves.",
    zh: "这个联想很成立。共同的故事常常看不见，但它们一旦开始组织人们的行为，就会显出力量。"
  },
  {
    en: "I like where you're taking this. Could you test that thought against a modern platform, a school ritual, or a national identity?",
    zh: "我很喜欢你现在推进的方向。要不要试着把这个想法放到一个现代平台、学校仪式，或某种国家认同里再检验一下？"
  },
  {
    en: "That sounds like a promising insight. We can turn it into a deeper note or keep pulling on the thread together.",
    zh: "这已经是个很有潜力的灵感了。我们可以把它继续整理成更深的一条笔记，或者顺着这条线再往下聊。"
  }
];

const defaultChatMessages = [
  {
    id: "chat-1",
    role: "ai",
    text: "What do you think is the main message of Sapiens?",
    zhText: "你觉得《人类简史》最核心的信息是什么？"
  },
  {
    id: "chat-2",
    role: "self",
    text: "That humans became powerful because we believe in stories together.",
    zhText: "我觉得是，人类之所以强大，是因为我们能共同相信某些故事。"
  },
  {
    id: "chat-3",
    role: "ai",
    text: "Exactly. Shared imagination is our superpower. Which modern systems around you still rely on that same mechanism?",
    zhText: "没错，共同想象力就是我们的超级能力。你身边有哪些现代系统，依然在依靠这种机制运作？"
  }
];

const momoPersonas = [
  {
    id: "humor",
    label: "Humor Momo",
    zhLabel: "幽默达人 Momo",
    prompt: "You are Humor Momo, a witty reading companion. Be warm, playful, lightly funny, and insightful without becoming flippant. Keep replies concise and conversational.",
    intro: "Let's keep this thoughtful and a little fun.",
    zhIntro: "我们认真聊，也可以带一点好玩的机灵劲。"
  },
  {
    id: "scholar",
    label: "Scholar Momo",
    zhLabel: "严谨学者 Momo",
    prompt: "You are Scholar Momo, a precise and rigorous reading companion. Clarify assumptions, reason carefully, and keep responses structured, grounded, and concise.",
    intro: "Let's examine the idea carefully.",
    zhIntro: "我们把这个想法拆开，仔细推一推。"
  },
  {
    id: "philosophy",
    label: "Philosopher Momo",
    zhLabel: "哲学大师 Momo",
    prompt: "You are Philosopher Momo, a reflective reading companion. Explore deeper meaning, paradox, and identity while staying clear and accessible.",
    intro: "Let's follow the deeper thread here.",
    zhIntro: "我们沿着更深的一条线继续往下走。"
  },
  {
    id: "puppy",
    label: "Puppy Momo",
    zhLabel: "快乐小狗 Momo",
    prompt: "You are Puppy Momo, an upbeat and encouraging reading companion. Respond with bright energy, emotional support, and simple momentum-building suggestions.",
    intro: "This is interesting already. Let's keep going.",
    zhIntro: "这个想法已经很有意思了，我们继续！"
  },
  {
    id: "mentor",
    label: "Mentor Momo",
    zhLabel: "心灵导师 Momo",
    prompt: "You are Mentor Momo, a calm and emotionally attuned reading companion. Help the user reflect gently, connect ideas to life, and feel grounded.",
    intro: "Let's stay with what this stirred in you.",
    zhIntro: "我们先停在这个想法真正触动你的地方。"
  }
];



const localizedDefaults = {
  processedText: {
    en: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, and to keep noticing what changes us while we read.",
    zh: "????????????????????????????????????????????????"
  }
};

const localizedTimeMap = {
  "04:21": "04:21",
  "15:30": "15:30",
  "00:00": "00:00",
  "12:40": "12:40"
};

const localizedGroupNames = {
  "Thinking Notes": "思考笔记",
  "Slow Reads": "慢读分组"
};

const localizedBookTitles = {
  "The Alchemist": "牧羊少年奇幻之旅",
  "Atomic Habits": "原子习惯",
  "Deep Work": "深度工作"
};

const localizedAuthors = {
  "Yuval Noah Harari": "尤瓦尔·赫拉利",
  "James Clear": "詹姆斯·克利尔",
  "Paulo Coelho": "保罗·柯艾略",
  "Cal Newport": "卡尔·纽波特"
};

const defaultAiConfig = {
  endpoint: "",
  model: "gpt-4o-mini",
  token: ""
};

const translations = {
  en: {
    profile_preferences: "Preferences",
    profile_language: "Language",
    profile_ai_service: "AI Service",
    profile_data_sync: "Data & Sync",
    profile_about: "About Moment Record",
    ai_local_preview: "Local preview mode",
    ai_endpoint: "API endpoint",
    ai_model: "Model",
    ai_token: "Access token",
    ai_test: "Test connection",
    ai_save: "Save AI settings",
    ai_hint: "Add an OpenAI-compatible endpoint and token to activate live AI features.",
    search_books: "Search books",
    search_notes: "Search notes in this book",
    chat_placeholder: "Ask anything...",
    add_book_title: "Enter book title",
    add_book_author: "Enter author name",
    text_process: "Process with AI",
    image_recognize: "Recognize text",
    image_polish: "AI polish",
    image_save: "Confirm save",
    book_add: "Add to bookshelf",
    podcast_generate: "Generate Audio",
    save_selected: "Save selected",
    delete_selected: "Delete selected",
    voice_setup: "Voice setup",
    host_voice: "Host voice",
    companion_voice: "Companion voice",
    subtitles: "Subtitles",
    auto_scroll: "Auto scroll"
  },
  zh: {
    profile_preferences: "偏好设置",
    profile_language: "语言",
    profile_ai_service: "AI 服务",
    profile_data_sync: "数据与同步",
    profile_about: "关于 Moment Record",
    ai_local_preview: "本地预览模式",
    ai_endpoint: "接口地址",
    ai_model: "模型",
    ai_token: "访问令牌",
    ai_test: "测试连接",
    ai_save: "保存 AI 设置",
    ai_hint: "填写兼容 OpenAI 的接口地址和令牌后，即可启用实时 AI 功能。",
    search_books: "搜索书本",
    search_notes: "搜索本书笔记",
    chat_placeholder: "输入你想讨论的内容…",
    add_book_title: "输入书名",
    add_book_author: "输入作者名",
    text_process: "AI 处理",
    image_recognize: "识别文字",
    image_polish: "AI 优化",
    image_save: "确认保存",
    book_add: "加入书架",
    podcast_generate: "生成音频",
    save_selected: "保存选中",
    delete_selected: "删除选中",
    voice_setup: "声音配置",
    host_voice: "主持人声音",
    companion_voice: "搭档声音",
    subtitles: "字幕",
    auto_scroll: "自动滚动"
  }
};

let activeSuggestionCopy = baseSuggestionCopy;

const uiTranslations = {
  en: {
    profile_preferences: "Preferences",
    profile_language: "Language",
    profile_ai_service: "AI Service",
    profile_data_sync: "Data & Sync",
    profile_about: "About Moment Record",
    ai_local_preview: "Local preview mode",
    ai_connected: "Connected · {token}",
    ai_endpoint: "API endpoint",
    ai_endpoint_placeholder: "Base URL or full /chat/completions URL",
    ai_model: "Model",
    ai_token: "Access token",
    ai_token_placeholder: "Paste your token",
    ai_test: "Test connection",
    ai_save: "Save AI settings",
    ai_hint: "Add an OpenAI-compatible endpoint and token to activate live AI features.",
    ai_fill_first: "Please fill endpoint, model, and token first.",
    ai_testing: "Testing AI connection...",
    ai_test_failed: "Connection failed. Check endpoint, token, and model.",
    ai_test_failed_status: "Connection failed ({status}). {detail}",
    ai_test_failed_network: "Connection could not be reached. Check the endpoint format, network, or browser permissions.",
    ai_saved: "AI settings saved. Live features are ready.",
    search_books: "Search books",
    search_notes: "Search notes in this book",
    search_all_placeholder: "Search books, notes, insights...",
    chat_placeholder: "Ask anything...",
    chat_input_aria: "Chat input",
    chat_voice_input: "Voice input",
    chat_voice_listening: "Listening...",
    chat_voice_transcribing: "Listening and transcribing...",
    chat_voice_unsupported: "This browser does not support live speech-to-text here.",
    chat_voice_permission: "Microphone or speech permission was denied.",
    chat_voice_no_speech: "No clear speech was detected. Try again a little closer to the mic.",
    chat_voice_processing: "Finishing voice input...",
    chat_voice_empty: "No transcript yet.",
    chat_voice_ready_to_send: "Voice input is ready. Review it, then tap send.",
    add_book_title: "Enter book title",
    add_book_author: "Enter author name",
    text_process: "Process with AI",
    image_recognize: "Recognize text",
    image_recognize_again: "Recognize again",
    image_recognizing: "Recognizing...",
    image_polish: "AI polish",
    image_save: "Confirm save",
    image_editor_placeholder: "Recognized text will appear here so you can edit it before saving.",
    image_preview_placeholder: "Recognized text will appear here.",
    image_selected: "Image selected. Run OCR to extract text.",
    image_choose_first: "Choose an image first.",
    image_scanning: "Scanning image for text...",
    image_detected: "Text recognized. Ready to process.",
    image_detected_none: "No clear text detected. Try another image.",
    image_detected_editable: "Text recognized. You can edit it, polish it, and save it below.",
    image_ocr_failed: "OCR could not finish here. Try a clearer image or a different browser.",
    image_polished: "Text polished. You can still edit it before saving.",
    image_ai_polished: "AI polish complete. You can still edit it before saving.",
    book_add: "Add to bookshelf",
    podcast_generate: "Generate Audio",
    podcast_generating: "Generating...",
    save_selected: "Save selected",
    delete_selected: "Delete selected",
    voice_setup: "Voice setup",
    host_voice: "Host voice",
    companion_voice: "Companion voice",
    subtitles: "Subtitles",
    auto_scroll: "Auto scroll",
    podcast_card_title: "Momo & Teacher on Sapiens",
    podcast_card_summary: "Auto-generated dialogue from your notes and questions.",
    language_english: "English",
    language_chinese: "Chinese",
    profile_language_hint: "Used for menus and system copy",
    voice_status_ready: "Microphone ready. Start recording to capture a thought.",
    voice_preview: "Your transcript will appear here while you speak.",
    no_text_captured: "No text was captured yet. Try again with a clearer input.",
    processing_label: "AI Processing",
    processing_title_voice: "Voice Transcription",
    processing_title_text: "Text Reflection",
    processing_title_image: "Image OCR",
    processing_meta_voice_recorded: "Recorded voice note",
    processing_meta_voice_live: "Live speech capture",
    processing_meta_text: "Typed capture",
    processing_meta_image: "Recognized from image",
    filter_books: "Books",
    filter_notes: "Notes",
    filter_insights: "Insights",
    books_count: "{count} books",
    notes_count: "{count} notes",
    delete_book_aria: "Delete {title}",
    move_label: "Move",
    no_matches_title: "No matches yet",
    no_matches_hint: "Try another keyword or switch the filter.",
    rename_group_prompt: "Rename this group",
    new_group_prompt: "Name the new group",
    new_group_default: "Fresh Notes",
    home_greeting: "Hi, Momo",
    home_title: "What are we thinking today?",
    home_notes_today: "Notes Today",
    books_title: "Books",
    detail_updated_today: "Updated today",
    detail_finish_add: "Add finish date",
    detail_finish_update: "Update finish date",
    detail_finish_save: "Save",
    note_time_today_1030: "Today 10:30",
    note_time_today_0845: "Today 08:45",
    note_quote_primary: "Everyone you'll ever meet knows something you don't.",
    note_quote_voice: "The myth of cooperation feels less abstract when I compare it to modern communities online.",
    tab_notes: "Notes",
    tab_ai: "AI Chat",
    tab_media: "Media",
    tag_insight: "Insight",
    tag_voice: "Voice",
    tag_image: "Image",
    reading_companion: "Reading Companion",
    question_label: "Question",
    your_thought: "Your thought",
    continue_chat: "Continue immersive chat",
    podcast_label: "Podcast",
    open_label: "Open",
    voice_session: "Voice Session",
    voice_session_title: "Save a real-time conversation as a warm audio keepsake.",
    voice_session_summary: "Switch from text into a softer, live reading exchange.",
    join_call: "Join call",
    capture_label: "Capture Thought",
    capture_title: "Catch the feeling before it fades.",
    capture_voice: "Voice",
    capture_text: "Text",
    capture_image: "Image",
    capture_voice_title: "Speak with Momo",
    capture_text_title: "Write it down",
    capture_image_title: "Capture a page",
    image_choose_snapshot: "Choose a page snapshot",
    recognized_text: "Recognized text",
    save_into_book: "Save into book",
    latest_capture: "Latest capture",
    ai_suggestions: "AI Suggestions",
    suggestion_summarize: "Summarize",
    suggestion_summarize_hint: "Get key points",
    suggestion_expand: "Expand Idea",
    suggestion_expand_hint: "Explore deeper",
    suggestion_question: "Ask Question",
    suggestion_question_hint: "Dig into details",
    suggestion_preview: "Suggestion preview",
    save_to_book: "Save to book",
    new_book: "New Book",
    upload_cover: "Upload cover",
    book_title_label: "Book title",
    author_label: "Author",
    start_reading: "Start reading",
    finish_reading: "Finish reading (Optional)",
    chat_title: "Discuss with Momo",
    momo_listening: "Momo is listening",
    switch_to_call: "Switch to call mode",
    call_mode: "Call Mode",
    call_title: "Real-time companion",
    voice_conversation: "Voice conversation in progress",
    mute: "Mute",
    end: "End",
    save: "Save",
    podcast_preview: "Podcast preview",
    insights_label: "Insights",
    insights_title: "Reading growth",
    books_read: "Books Read",
    most_active_time: "Most Active Time",
    total_notes: "Total Notes",
    weekly_note_trend: "Weekly note trend",
    search_label: "Search",
    search_title: "Find books, notes, and insights",
    profile_label: "Profile",
    profile_title: "Personal space",
    profile_subtitle: "Keep reading, keep growing.",
    stats_notes: "Notes",
    stats_ai_chats: "AI Chats",
    stats_books_read: "Books Read",
    stats_voice_mins: "Voice Mins",
    quick_add: "Quick Add",
    quick_add_title: "Catch the thought before it fades.",
    quick_speak_freely: "Speak freely",
    quick_write_thought: "Write a thought",
    quick_capture_page: "Capture a page",
    new_group: "New group",
    rename_group: "Rename group",
    delete_books_label: "Delete books",
    nav_home: "Home",
    nav_books: "Books",
    nav_capture: "Capture",
    nav_profile: "Profile"
  },
  zh: {
    profile_preferences: "偏好设置",
    profile_language: "语言",
    profile_ai_service: "AI 服务",
    profile_data_sync: "数据与同步",
    profile_about: "关于 Moment Record",
    ai_local_preview: "本地预览模式",
    ai_connected: "已连接 · {token}",
    ai_endpoint: "接口地址",
    ai_endpoint_placeholder: "填写基础地址或完整 /chat/completions 接口",
    ai_model: "模型",
    ai_token: "访问令牌",
    ai_token_placeholder: "粘贴你的令牌",
    ai_test: "测试连接",
    ai_save: "保存 AI 设置",
    ai_hint: "填写兼容 OpenAI 的接口地址与令牌后，即可启用实时 AI 功能。",
    ai_fill_first: "请先填写接口地址、模型和令牌。",
    ai_testing: "正在测试 AI 连接...",
    ai_test_failed: "连接失败，请检查接口地址、令牌和模型。",
    ai_test_failed_status: "连接失败（{status}）。{detail}",
    ai_test_failed_network: "当前无法连接该服务，请检查地址格式、网络或浏览器权限。",
    ai_saved: "AI 设置已保存，现在可以直接使用。",
    search_books: "搜索书本",
    search_notes: "搜索本书笔记",
    search_all_placeholder: "搜索书本、笔记、灵感...",
    chat_placeholder: "输入你想讨论的内容...",
    chat_input_aria: "聊天输入框",
    chat_voice_input: "语音输入",
    chat_voice_listening: "正在聆听...",
    chat_voice_transcribing: "正在聆听并转写...",
    chat_voice_unsupported: "当前浏览器暂不支持这里的实时语音转文字。",
    chat_voice_permission: "麦克风或语音识别权限被拒绝了。",
    chat_voice_no_speech: "没有识别到清晰语音，可以靠近麦克风再试一次。",
    chat_voice_processing: "正在结束语音输入...",
    chat_voice_empty: "暂时还没有转写内容。",
    chat_voice_ready_to_send: "语音转写已完成，确认后再发送。",
    add_book_title: "输入书名",
    add_book_author: "输入作者名",
    text_process: "AI 处理",
    image_recognize: "识别文字",
    image_recognize_again: "重新识别",
    image_recognizing: "识别中...",
    image_polish: "AI 优化",
    image_save: "确认保存",
    image_editor_placeholder: "识别出的文字会显示在这里，你可以保存前继续调整。",
    image_preview_placeholder: "识别出的文字会显示在这里。",
    image_selected: "图片已选中，点击开始识别文字。",
    image_choose_first: "请先选择一张图片。",
    image_scanning: "正在识别图片中的文字...",
    image_detected: "文字识别完成，可以继续处理。",
    image_detected_none: "没有识别到清晰文字，换一张图片试试。",
    image_detected_editable: "文字识别完成，你可以继续编辑、优化并保存。",
    image_ocr_failed: "当前环境无法完成 OCR，请尝试更清晰的图片或更换浏览器。",
    image_polished: "文本已优化，你仍可继续编辑后再保存。",
    image_ai_polished: "AI 优化完成，你仍可继续编辑后再保存。",
    book_add: "加入书架",
    podcast_generate: "生成音频",
    podcast_generating: "生成中...",
    save_selected: "保存选中",
    delete_selected: "删除选中",
    voice_setup: "声音配置",
    host_voice: "主持人声音",
    companion_voice: "搭档声音",
    subtitles: "字幕",
    auto_scroll: "自动滚动",
    podcast_card_title: "Momo 和 Teacher 的读书对谈",
    podcast_card_summary: "根据你的笔记与问题自动生成的一段对话。",
    language_english: "English",
    language_chinese: "中文",
    profile_language_hint: "用于菜单、按钮与系统文案",
    voice_status_ready: "麦克风已就绪，开始录音记录想法。",
    voice_preview: "你的转写内容会在这里实时显示。",
    no_text_captured: "暂时还没有捕获到文本，换一个更清晰的输入再试试。",
    processing_label: "AI 处理中",
    processing_title_voice: "语音转写",
    processing_title_text: "文字整理",
    processing_title_image: "图片识别",
    processing_meta_voice_recorded: "录制语音",
    processing_meta_voice_live: "实时语音记录",
    processing_meta_text: "文字记录",
    processing_meta_image: "图片识别结果",
    filter_books: "书本",
    filter_notes: "笔记",
    filter_insights: "灵感",
    books_count: "{count} 本书",
    notes_count: "{count} 条笔记",
    delete_book_aria: "删除《{title}》",
    move_label: "移动",
    no_matches_title: "暂无结果",
    no_matches_hint: "换个关键词试试，或切换筛选。",
    rename_group_prompt: "重命名当前分组",
    new_group_prompt: "给新分组命名",
    new_group_default: "新的笔记分组",
    home_greeting: "嗨，Momo",
    home_title: "今天想记录点什么？",
    home_notes_today: "今日笔记",
    books_title: "书架",
    detail_updated_today: "今天更新",
    detail_finish_add: "补充结束时间",
    detail_finish_update: "更新结束时间",
    detail_finish_save: "保存",
    note_time_today_1030: "今天 10:30",
    note_time_today_0845: "今天 08:45",
    note_quote_primary: "你遇见的每一个人，都知道一些你不知道的事。",
    note_quote_voice: "当我把“合作的神话”放到今天的线上社群里去看时，它就不再抽象了。",
    tab_notes: "笔记",
    tab_ai: "AI 对话",
    tab_media: "媒体",
    tag_insight: "灵感",
    tag_voice: "语音",
    tag_image: "图片",
    reading_companion: "阅读陪伴",
    question_label: "问题",
    your_thought: "你的想法",
    continue_chat: "继续沉浸对话",
    podcast_label: "播客",
    open_label: "打开",
    voice_session: "语音对话",
    voice_session_title: "把实时对话保存成一段温柔的音频留念。",
    voice_session_summary: "从文字切换到更轻柔的实时阅读交流。",
    join_call: "进入通话",
    capture_label: "记录灵感",
    capture_title: "把稍纵即逝的感觉留下来。",
    capture_voice: "语音",
    capture_text: "文字",
    capture_image: "图片",
    capture_voice_title: "和 Momo 说说",
    capture_text_title: "写下来",
    capture_image_title: "拍下这一页",
    image_choose_snapshot: "选择页面图片",
    recognized_text: "识别文本",
    save_into_book: "保存到书本",
    latest_capture: "最新记录",
    ai_suggestions: "AI 建议",
    suggestion_summarize: "总结",
    suggestion_summarize_hint: "提炼重点",
    suggestion_expand: "延展想法",
    suggestion_expand_hint: "继续深入",
    suggestion_question: "提出问题",
    suggestion_question_hint: "继续追问",
    suggestion_preview: "建议预览",
    save_to_book: "保存到书本",
    new_book: "新增书籍",
    upload_cover: "上传封面",
    book_title_label: "书名",
    author_label: "作者",
    start_reading: "开始阅读时间",
    finish_reading: "结束阅读时间（可选）",
    chat_title: "和 Momo 聊聊",
    momo_listening: "Momo 正在听你说",
    switch_to_call: "切换到通话模式",
    call_mode: "通话模式",
    call_title: "实时陪伴",
    voice_conversation: "语音对话进行中",
    mute: "静音",
    end: "结束",
    save: "保存",
    podcast_preview: "播客预览",
    insights_label: "灵感",
    insights_title: "阅读成长",
    books_read: "已读书本",
    most_active_time: "最活跃时段",
    total_notes: "总笔记数",
    weekly_note_trend: "每周笔记趋势",
    search_label: "搜索",
    search_title: "查找书本、笔记和灵感",
    profile_label: "我的",
    profile_title: "个人空间",
    profile_subtitle: "继续阅读，也继续生长。",
    stats_notes: "笔记",
    stats_ai_chats: "AI 对话",
    stats_books_read: "已读书本",
    stats_voice_mins: "语音分钟",
    quick_add: "快速记录",
    quick_add_title: "趁想法还没散开，先抓住它。",
    quick_speak_freely: "直接说出来",
    quick_write_thought: "写下一句",
    quick_capture_page: "拍下一页",
    new_group: "新建分组",
    rename_group: "重命名分组",
    delete_books_label: "删除书本",
    nav_home: "首页",
    nav_books: "书架",
    nav_capture: "记录",
    nav_profile: "我的"
  }
};

const state = {
  screen: "home",
  history: ["home"],
  activeBookId: "sapiens",
  activeFilter: "all",
  deletedBooks: [],
  activeBooksGroup: "Thinking Notes",
  groups: ["Thinking Notes", "Slow Reads"],
  selectedGroupName: "Thinking Notes",
  suggestion: "summarize",

  homeSlide: 0,
  captureSource: "voice",
  processedText: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, and to keep noticing what changes us while we read.",
  pendingBookNote: null,
  processingSaveBookId: "sapiens",
  processingSaveStatus: "",
  pendingNewBookSource: "",
  captureEntryBookId: "",
  activeBookNoteMenuId: "",
  activeNoteActionId: "",
  textAiMode: "summarize",
  textAiResult: "",
  textAiGenerated: false,
  textAiAccepted: false,
  textAiOriginal: "",
  textSavePickerOpen: false,
  textAiWorking: false,
  textAiAccepting: false,
  textAiSaveStatus: "",
  expandedNoteIds: [],
  bookFinishEditorOpen: false,
  noteLightboxImage: "",
  editingNoteId: "",
  editingNoteBookId: "",
  editingNoteType: "",
  chatMessages: defaultChatMessages.map((message) => ({ ...message })),
  selectedChatMessageIds: [],
  activeMomoPersona: "humor",
  isChatVoiceRecording: false,
  chatVoiceTranscript: "",
  chatVoiceStatus: "",
  voiceTranscript: "",
  voiceStatus: "Microphone ready. Start recording to capture a thought.",
  voicePreview: "Your transcript will appear here while you speak.",
  voiceAudioUrl: "",
  isRecording: false,
  textDraft: "",
  imageStatus: "Choose a page snapshot to extract text.",
  imagePreviewUrl: "",
  imageStoredUrl: "",
  imageFileName: "",
  imageText: "",
  imageCanRecognize: false,
  isOcrRunning: false,
  booksQuery: "",
  bookNotesQuery: "",
  draggingBookId: "",
  dragOverGroupName: "",
  profileLanguage: "zh",
  profilePreferencesOpen: false,
  profileLanguageOpen: false,
  profileAiOpen: false,
  aiConfig: { ...defaultAiConfig },
  aiStatus: "Add an OpenAI-compatible endpoint and token to activate live AI features."
};

const screenIds = new Set([
  "home",
  "bookshelf",
  "book-detail",
  "capture",
  "capture-voice",
  "capture-text",
  "capture-image",
  "processing",
  "ai-chat",
  "insights",
  "search",
  "profile",
  "book-add"
]);

const homeHighlight = document.getElementById("home-highlight");
const homeNotesTopScroller = document.getElementById("home-notes-bubbles-top");
const homeNotesBottomScroller = document.getElementById("home-notes-bubbles-bottom");
const bookshelfList = document.getElementById("bookshelf-list");
const bookshelfScreen = document.getElementById("screen-bookshelf");
const searchResults = document.getElementById("search-results");
const searchInput = document.getElementById("search-input");
const booksSearchInput = document.getElementById("books-search-input");
const primaryNav = document.getElementById("primary-nav");
const suggestionPreview = document.getElementById("suggestion-preview");
const chatStream = document.getElementById("chat-stream");
const chatScreen = document.getElementById("screen-ai-chat");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-text");
const chatVoiceButton = document.getElementById("chat-voice-button");
const chatVoiceStatusEl = document.getElementById("chat-voice-status");
const quickSheetWrap = document.getElementById("quick-sheet-wrap");
const booksSheetWrap = document.getElementById("books-sheet-wrap");
const voiceOrb = document.getElementById("voice-orb");
const voiceRecordToggle = document.getElementById("voice-record-toggle");
const voiceStatusEl = document.getElementById("voice-status");
const voiceTranscriptPreviewEl = document.getElementById("voice-transcript-preview");
const voiceAudioPreviewEl = document.getElementById("voice-audio-preview");
const voiceProcessButton = document.getElementById("voice-process-button");
const captureTextarea = document.getElementById("capture-textarea");
const textProcessButton = document.getElementById("text-process-button");
const textAiResultWrap = document.getElementById("text-ai-result-wrap");
const textAiResultEl = document.getElementById("text-ai-result");
const textAiFooter = document.getElementById("text-ai-footer");
const textAiSaveField = document.getElementById("text-ai-save-field");
const textAiBookSelect = document.getElementById("text-ai-book-select");
const textAiSaveWrap = document.getElementById("text-ai-save-wrap");
const textAiSaveStatusEl = document.getElementById("text-ai-save-status");
const textAiCancelButton = document.getElementById("text-ai-cancel-button");
const textAiRegenerateButton = document.getElementById("text-ai-regenerate-button");
const textAiAcceptButton = document.getElementById("text-ai-accept-button");
const textAiSaveButton = document.getElementById("text-ai-save-button");
const textAiNewBookButton = document.getElementById("text-ai-new-book-button");
const textDirectSaveButton = document.getElementById("text-direct-save-button");
const textEditActions = document.getElementById("text-edit-actions");
const textEditSaveButton = document.getElementById("text-edit-save-button");
const captureImageInput = document.getElementById("capture-image-input");
const captureImagePicker = document.getElementById("capture-image-picker");
const captureImageCard = document.getElementById("capture-image-card");
const captureImagePreview = document.getElementById("capture-image-preview");
const imageStatusEl = document.getElementById("image-status");
const imageTextPreviewEl = document.getElementById("image-text-preview");
const imageProcessButton = document.getElementById("image-process-button");
const imagePolishButton = document.getElementById("image-polish-button");
const imageTextEditor = document.getElementById("image-text-editor");
const imageBookField = document.getElementById("image-book-field");
const imageBookSelect = document.getElementById("image-book-select");
const imageSaveButton = document.getElementById("image-save-button");
const bookNotesSearchInput = document.getElementById("book-notes-search-input");
const bookNotesPanel = document.getElementById("book-notes-panel");
const imageLightbox = document.getElementById("image-lightbox");
const imageLightboxImage = document.getElementById("image-lightbox-image");
const processingLabelEl = document.getElementById("processing-label");
const processingTitleEl = document.getElementById("processing-title");
const processingMetaEl = document.getElementById("processing-meta");
const processingTranscriptEl = document.getElementById("processing-transcript");
const processingBookSelect = document.getElementById("processing-book-select");
const processingSaveStatusEl = document.getElementById("processing-save-status");
const processingSaveHintEl = document.getElementById("processing-save-hint");
const processingSaveButton = document.getElementById("processing-save-button");
const processingNewBookButton = document.getElementById("processing-new-book-button");
const bookCoverInput = document.getElementById("book-cover-input");
const bookCoverPicker = document.getElementById("book-cover-picker");
const bookCoverCard = document.getElementById("book-cover-card");
const bookCoverPreview = document.getElementById("book-cover-preview");
const bookCoverName = document.getElementById("book-cover-name");
const bookTitleInput = document.getElementById("book-title-input");
const bookAuthorInput = document.getElementById("book-author-input");
const bookStartInput = document.getElementById("book-start-input");
const bookEndInput = document.getElementById("book-end-input");
const bookAddContext = document.getElementById("book-add-context");
const profilePreferencesPanel = document.getElementById("profile-preferences-panel");
const profilePreferencesSummary = document.getElementById("profile-preferences-summary");
const profileLanguagePanel = document.getElementById("profile-language-panel");
const profileLanguageSummary = document.getElementById("profile-language-summary");
const languageChips = document.getElementById("language-chips");
const profileAiPanel = document.getElementById("profile-ai-panel");
const profileAiSummary = document.getElementById("profile-ai-summary");
const aiEndpointInput = document.getElementById("ai-endpoint-input");
const aiModelInput = document.getElementById("ai-model-input");
const aiTokenInput = document.getElementById("ai-token-input");
const aiSettingsStatus = document.getElementById("ai-settings-status");
const chatSaveSelectedButton = document.getElementById("chat-save-selected-button");
const chatDeleteSelectedButton = document.getElementById("chat-delete-selected-button");
const chatSelectionToolbar = document.getElementById("chat-selection-toolbar");
const chatPersonas = document.getElementById("chat-personas");
const chatPersonaHint = document.getElementById("chat-persona-hint");
const detailFinishWrap = document.getElementById("detail-finish");
const detailFinishTrigger = document.getElementById("detail-finish-trigger");
const detailFinishTriggerLabel = document.querySelector("[data-finish-trigger-label]");
const detailFinishDisplay = document.querySelector("[data-finish-display]");
const detailFinishEditor = document.getElementById("detail-finish-editor");
const detailFinishInput = document.getElementById("detail-finish-input");
const detailFinishSaveButton = document.getElementById("detail-finish-save");

let mediaRecorder = null;
let mediaStream = null;
let recognition = null;
let audioChunks = [];
let transcriptSegments = [];
let tesseractLoader = null;
let bookLongPressTimer = null;
let bookLongPressTriggered = false;
let draggingPointerId = null;
let dragStartX = 0;
let dragStartY = 0;
let dragOffsetX = 0;
let dragOffsetY = 0;
let pressedBookRow = null;
let chatTapPointerId = null;
let chatTapStartX = 0;
let chatTapStartY = 0;
let chatTapTargetId = "";
let chatTapMoved = false;
let noteLongPressTimer = null;
let noteLongPressPointerId = null;
let noteLongPressStartX = 0;
let noteLongPressStartY = 0;
let noteLongPressTargetId = "";
let noteLongPressTriggered = false;
let activeHomeNotesScroller = null;
let homeNotesPointerId = null;
let homeNotesStartX = 0;
let homeNotesStartY = 0;
let homeNotesStartScrollLeft = 0;
let homeNotesDragging = false;
let homeNotesSuppressClick = false;
let stableViewportHeight = 0;
let suppressNextBookRowTap = false;
let draggingBookRow = null;
let draggingTouchIdentifier = null;
let dragPointerClientX = 0;
let dragPointerClientY = 0;
let booksDragAutoScrollFrame = 0;

function isTextEntryElement(element) {
  if (!(element instanceof HTMLElement)) {
    return false;
  }

  if (element.isContentEditable) {
    return true;
  }

  const tagName = element.tagName;
  if (tagName === "TEXTAREA") {
    return true;
  }

  if (tagName !== "INPUT") {
    return false;
  }

  const type = (element.getAttribute("type") || "text").toLowerCase();
  return !["button", "checkbox", "radio", "range", "file", "color", "submit", "reset"].includes(type);
}

function isChatComposerFocused() {
  return Boolean(chatForm && isTextEntryElement(document.activeElement) && chatForm.contains(document.activeElement));
}

function scrollChatToBottom(behavior = "smooth") {
  const rows = chatStream?.querySelectorAll?.("[data-chat-message]");
  const lastRow = rows?.[rows.length - 1];
  lastRow?.scrollIntoView({ behavior, block: "end" });
}

function scrollChatComposerIntoView() {
  if (!chatForm || !chatStream || state.screen !== "ai-chat") {
    return;
  }

  window.requestAnimationFrame(() => {
    chatStream.scrollTo({
      top: chatStream.scrollHeight,
      behavior: "auto"
    });
  });
}

function syncViewportHeight() {
  const visualViewport = window.visualViewport;
  const viewportHeight = Math.round(visualViewport?.height || window.innerHeight || 0);
  const viewportOffsetTop = Math.round(visualViewport?.offsetTop || 0);
  const layoutHeight = Math.round(window.innerHeight || viewportHeight);
  const fallbackHeight = Math.max(viewportHeight, layoutHeight);
  const hasTextFocus = isTextEntryElement(document.activeElement);
  const chatComposerFocused = isChatComposerFocused();

  if (!stableViewportHeight) {
    stableViewportHeight = fallbackHeight;
  }

  const projectedKeyboardInset = Math.max(0, stableViewportHeight - (viewportHeight + viewportOffsetTop));
  const keyboardLikelyOpen = hasTextFocus && projectedKeyboardInset > 96;

  if (!keyboardLikelyOpen) {
    stableViewportHeight = fallbackHeight;
  }

  const keyboardInset = keyboardLikelyOpen
    ? Math.max(0, stableViewportHeight - (viewportHeight + viewportOffsetTop))
    : 0;

  document.documentElement.style.setProperty("--app-height", `${stableViewportHeight}px`);
  document.documentElement.style.setProperty("--chat-keyboard-inset", `${chatComposerFocused ? keyboardInset : 0}px`);
  document.documentElement.classList.toggle(
    "chat-keyboard-active",
    chatComposerFocused && state.screen === "ai-chat" && keyboardInset > 0
  );

  if (chatComposerFocused && state.screen === "ai-chat") {
    window.requestAnimationFrame(() => {
      scrollChatToBottom(keyboardInset > 0 ? "auto" : "smooth");
    });
    scrollChatComposerIntoView();
  }
}

function hideQuickSheet() {
  if (!quickSheetWrap) {
    return;
  }
  quickSheetWrap.hidden = true;
  quickSheetWrap.classList.remove("is-open");
}

function toggleQuickSheet() {
  if (!quickSheetWrap) {
    return;
  }
  const shouldOpen = quickSheetWrap.hidden;
  if (shouldOpen) {
    quickSheetWrap.hidden = false;
    window.requestAnimationFrame(() => {
      quickSheetWrap.classList.add("is-open");
    });
    return;
  }
  hideQuickSheet();
}

function hideBooksSheet() {
  if (!booksSheetWrap) {
    return;
  }
  booksSheetWrap.hidden = true;
  booksSheetWrap.classList.remove("is-open");
}

function toggleBooksSheet() {
  if (!booksSheetWrap) {
    return;
  }
  const shouldOpen = booksSheetWrap.hidden;
  if (shouldOpen) {
    hideQuickSheet();
    booksSheetWrap.hidden = false;
    window.requestAnimationFrame(() => {
      booksSheetWrap.classList.add("is-open");
    });
    return;
  }
  hideBooksSheet();
}

function getActiveBook() {
  return books.find((book) => book.id === state.activeBookId) || books[0];
}

function createBookCover(book, compact = false) {
  const loadingMode = compact ? "lazy" : "eager";
  const decodingMode = compact ? "async" : "async";
  return `
    <div class="book-cover book-cover--image${compact ? " book-cover--compact" : ""}">
      <img class="book-cover__image" src="${book.coverImage}" alt="${book.title} cover" loading="${loadingMode}" decoding="${decodingMode}" draggable="false">
    </div>
  `;
}

function clipText(text, max = 180) {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) {
    return normalized;
  }
  return `${normalized.slice(0, max).trim()}...`;
}

function localizeText(enValue, zhValue) {
  if (state.profileLanguage === "zh" && zhValue) {
    return zhValue;
  }
  return enValue;
}

function localizeBookTitle(title) {
  return state.profileLanguage === "zh" ? (localizedBookTitles[title] || title) : title;
}

function localizeAuthor(author) {
  return state.profileLanguage === "zh" ? (localizedAuthors[author] || author) : author;
}

function localizeGroupName(groupName) {
  return state.profileLanguage === "zh" ? (localizedGroupNames[groupName] || groupName) : groupName;
}

function formatStoredDate(value) {
  if (!value) {
    return "";
  }

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  if (state.profileLanguage === "zh") {
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getVisibleBooks() {
  return books.filter((book) => !state.deletedBooks.includes(book.id));
}

function getBookNoteCount(book) {
  return Array.isArray(book?.notes) ? book.notes.length : 0;
}

function getTotalNoteCount() {
  return getVisibleBooks().reduce((total, book) => total + getBookNoteCount(book), 0);
}

function getBooksReadCount() {
  return getVisibleBooks().filter((book) => {
    const hasFinishedDate = Boolean(book?.finishedAt);
    const finishedProgress = Number(book?.progress || 0) >= 100;
    return hasFinishedDate || finishedProgress;
  }).length;
}

function syncCollectionMetrics() {
  const visibleBookCount = getVisibleBooks().length;
  const totalNoteCount = getTotalNoteCount();
  const booksReadCount = getBooksReadCount();
  const totalAiChats = Array.isArray(state.chatMessages)
    ? state.chatMessages.filter((message) => message.role === "ai").length
    : 0;

  document.querySelectorAll("[data-bind='books-total']").forEach((node) => {
    node.textContent = String(visibleBookCount);
  });

  document.querySelectorAll("[data-bind='notes-total']").forEach((node) => {
    node.textContent = String(totalNoteCount);
  });

  document.querySelectorAll("[data-bind='ai-chats-total']").forEach((node) => {
    node.textContent = String(totalAiChats);
  });

  document.querySelectorAll("[data-bind='books-read-total']").forEach((node) => {
    node.textContent = String(booksReadCount);
  });
}

function renderBookFinishMeta() {
  const book = getActiveBook();
  if (!detailFinishWrap || !detailFinishTriggerLabel || !detailFinishDisplay || !detailFinishEditor || !detailFinishInput || !detailFinishSaveButton) {
    return;
  }

  const hasFinishedDate = Boolean(book?.finishedAt);
  detailFinishWrap.classList.toggle("is-open", state.bookFinishEditorOpen);
  detailFinishWrap.classList.toggle("has-value", hasFinishedDate);
  detailFinishTriggerLabel.textContent = hasFinishedDate ? t("detail_finish_update") : t("detail_finish_add");
  detailFinishDisplay.textContent = hasFinishedDate ? formatStoredDate(book.finishedAt) : "";
  detailFinishDisplay.hidden = !hasFinishedDate;
  detailFinishEditor.hidden = !state.bookFinishEditorOpen;
  detailFinishInput.value = state.bookFinishEditorOpen
    ? (detailFinishInput.value || book?.finishedAt || "")
    : (book?.finishedAt || "");
  detailFinishSaveButton.textContent = t("detail_finish_save");
}

function toggleBookFinishEditor(forceOpen) {
  const nextOpen = typeof forceOpen === "boolean" ? forceOpen : !state.bookFinishEditorOpen;
  state.bookFinishEditorOpen = nextOpen;
  if (detailFinishInput) {
    detailFinishInput.value = getActiveBook()?.finishedAt || "";
  }
  renderBookFinishMeta();
}

function saveBookFinishDate() {
  const book = getActiveBook();
  const nextDate = detailFinishInput?.value || "";
  if (!book || !nextDate) {
    return;
  }

  book.finishedAt = nextDate;
  state.bookFinishEditorOpen = false;
  syncBookBindings();
  syncCollectionMetrics();
  renderBookshelf();
}

function getNoteTypeCopy(type) {
  if (type === "voice") {
    return { label: "Voice", zhLabel: "语音", className: "tag tag--sky" };
  }
  if (type === "image") {
    return { label: "Image", zhLabel: "图片", className: "tag tag--peach" };
  }
  if (type === "text") {
    return { label: "Text", zhLabel: "文字", className: "tag" };
  }
  return { label: "Insight", zhLabel: "灵感", className: "tag" };
}

function createTimestampLabels() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return {
    en: `Today ${hours}:${minutes}`,
    zh: `今天 ${hours}:${minutes}`
  };
}

function createBookNote(source, text, options = {}) {
  const labels = createTimestampLabels();
  const normalizedSource = source === "image" || source === "voice" || source === "text"
    ? source
    : "insight";

  const note = {
    id: `${normalizedSource}-${Date.now()}`,
    type: normalizedSource,
    time: labels.en,
    zhTime: labels.zh,
    text,
    zhText: text,
    duration: normalizedSource === "voice" ? "00:30" : ""
  };

  if (normalizedSource === "image") {
    note.imageUrl = options.imageUrl || imageAssets.notePreview;
  }

  return note;
}

function findBookById(bookId) {
  return books.find((book) => book.id === bookId) || null;
}

function findNoteLocation(noteId) {
  if (!noteId) {
    return null;
  }
  for (const book of books) {
    const noteIndex = (book.notes || []).findIndex((note) => note.id === noteId);
    if (noteIndex >= 0) {
      return {
        book,
        noteIndex,
        note: book.notes[noteIndex]
      };
    }
  }
  return null;
}

function removeSavedNoteReferences(bookId, noteId, previousNote = null) {
  if (!bookId) {
    return;
  }

  for (let index = moments.length - 1; index >= 0; index -= 1) {
    const moment = moments[index];
    const matchesNoteId = noteId && moment.noteId === noteId;
    const matchesPrevious = previousNote
      && moment.bookId === bookId
      && moment.time === previousNote.time
      && moment.text === previousNote.text;
    if (moment.bookId === bookId && (matchesNoteId || matchesPrevious)) {
      moments.splice(index, 1);
    }
  }

  for (let index = searchIndex.length - 1; index >= 0; index -= 1) {
    const item = searchIndex[index];
    const matchesNoteId = noteId && item.noteId === noteId;
    const matchesPrevious = previousNote
      && item.bookId === bookId
      && item.meta === previousNote.time
      && item.title === clipText(previousNote.text, 72);
    if (item.bookId === bookId && (matchesNoteId || matchesPrevious)) {
      searchIndex.splice(index, 1);
    }
  }
}

function isNoteExpanded(noteId) {
  return state.expandedNoteIds.includes(noteId);
}

function toggleNoteExpanded(noteId) {
  if (!noteId) {
    return;
  }
  state.expandedNoteIds = state.expandedNoteIds.includes(noteId)
    ? state.expandedNoteIds.filter((id) => id !== noteId)
    : [...state.expandedNoteIds, noteId];
  renderBookNotes();
}

function openImageLightbox(imageUrl) {
  if (!imageLightbox || !imageLightboxImage || !imageUrl) {
    return;
  }
  state.noteLightboxImage = imageUrl;
  imageLightboxImage.src = imageUrl;
  imageLightbox.hidden = false;
}

function closeImageLightbox() {
  if (!imageLightbox || imageLightbox.hidden) {
    return;
  }
  imageLightbox.hidden = true;
  state.noteLightboxImage = "";
  if (imageLightboxImage) {
    imageLightboxImage.removeAttribute("src");
  }
}

function clearCaptureDraftState() {
  state.pendingBookNote = null;
  state.pendingNewBookSource = "";
  state.processingSaveStatus = "";
}

function clearEditingState() {
  state.editingNoteId = "";
  state.editingNoteBookId = "";
  state.editingNoteType = "";
}

function isEditingTextNote() {
  return Boolean(state.editingNoteId) && state.editingNoteType !== "image";
}

function isEditingImageNote() {
  return Boolean(state.editingNoteId) && state.editingNoteType === "image";
}

function getCurrentTextCaptureValue() {
  return captureTextarea?.value.trim() || state.textDraft.trim();
}

function closeNoteActionMenu(shouldRender = true) {
  if (!state.activeNoteActionId) {
    return;
  }
  state.activeNoteActionId = "";
  if (shouldRender) {
    renderBookNotes();
  }
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
    reader.onerror = () => reject(reader.error || new Error("file-read-failed"));
    reader.readAsDataURL(file);
  });
}

function appendSavedNoteToFeeds(book, note) {
  const typeCopy = getNoteTypeCopy(note.type);

  moments.unshift({
    noteId: note.id,
    time: note.time,
    zhTime: note.zhTime,
    tag: typeCopy.label,
    zhTag: typeCopy.zhLabel,
    text: note.text,
    zhText: note.zhText || note.text,
    action: "Back to book",
    target: "book-detail",
    bookId: book.id
  });

  if (moments.length > 8) {
    moments.length = 8;
  }

  searchIndex.unshift({
    noteId: note.id,
    type: "notes",
    title: clipText(note.text, 72),
    zhTitle: clipText(note.zhText || note.text, 48),
    meta: note.time,
    zhMeta: note.zhTime,
    target: "book-detail",
    bookId: book.id
  });

  if (searchIndex.length > 20) {
    searchIndex.length = 20;
  }
}

function renderBookNotes() {
  if (!bookNotesPanel) {
    return;
  }

  const activeBook = getActiveBook();
  const notes = activeBook.notes || [];

  if (!notes.length) {
    bookNotesPanel.innerHTML = `
      <article class="note-card note-card--flat note-card--empty">
        <p>${localizeText("No notes yet. Save a processed capture to start this book's trail.", "这本书还没有笔记。先把整理好的记录保存进来吧。")}</p>
      </article>
    `;
    return;
  }

  bookNotesPanel.innerHTML = notes.map((note) => {
    const typeCopy = getNoteTypeCopy(note.type);
    const time = escapeHtml(localizeText(note.time, note.zhTime || note.time));
    const tag = escapeHtml(localizeText(typeCopy.label, typeCopy.zhLabel));
    const body = escapeHtml(localizeText(note.text, note.zhText || note.text));
    const isExpanded = isNoteExpanded(note.id);
    const isActionOpen = state.activeNoteActionId === note.id;
    const actionMenu = `
      <div class="note-action-popover${isActionOpen ? " is-visible" : ""}" data-note-action-menu role="menu" aria-label="${escapeHtml(localizeText("Note actions", "笔记操作"))}">
        <button type="button" class="note-action-popover__button" data-note-edit="${note.id}">
          ${escapeHtml(localizeText("Edit", "编辑"))}
        </button>
        <button type="button" class="note-action-popover__button note-action-popover__button--danger" data-note-delete="${note.id}">
          ${escapeHtml(localizeText("Delete", "删除"))}
        </button>
      </div>
    `;

    if (note.type === "voice") {
      return `
        <article class="note-card note-card--audio note-card--flat${isExpanded ? " is-expanded" : ""}${isActionOpen ? " is-action-open" : ""}" data-note-item data-note-id="${note.id}">
          <div class="note-card__top">
            <span>${time}</span>
            <span class="${typeCopy.className}">${tag}</span>
          </div>
          <button type="button" class="note-card__body" data-note-toggle="${note.id}">
            <p class="note-card__text">${body}</p>
          </button>
          <div class="wave-player">
            <button type="button" class="play-pill" aria-label="${escapeHtml(localizeText("Play voice note", "播放语音笔记"))}">
              <svg class="icon"><use href="#i-play"></use></svg>
            </button>
            <div class="wave-player__bars">
              <span></span><span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <strong>${escapeHtml(note.duration || "00:30")}</strong>
          </div>
          ${actionMenu}
        </article>
      `;
    }

    if (note.type === "image") {
      return `
        <article class="note-card note-card--flat${isExpanded ? " is-expanded" : ""}${isActionOpen ? " is-action-open" : ""}" data-note-item data-note-id="${note.id}">
          <div class="note-card__top">
            <span>${time}</span>
            <span class="${typeCopy.className}">${tag}</span>
          </div>
          <div class="note-card__media">
            <button type="button" class="note-card__quote note-card__body" data-note-toggle="${note.id}">
              <p class="note-card__text">${body}</p>
            </button>
            <button type="button" class="page-snapshot page-snapshot--image" data-note-image="${escapeHtml(note.imageUrl || imageAssets.notePreview)}" aria-label="${escapeHtml(localizeText("Open image note", "查看图片笔记"))}">
              <img src="${escapeHtml(note.imageUrl || imageAssets.notePreview)}" alt="">
            </button>
          </div>
          ${actionMenu}
        </article>
      `;
    }

    return `
      <article class="note-card note-card--flat${isExpanded ? " is-expanded" : ""}${isActionOpen ? " is-action-open" : ""}" data-note-item data-note-id="${note.id}">
        <div class="note-card__top">
          <span>${time}</span>
          <span class="${typeCopy.className}">${tag}</span>
        </div>
        <button type="button" class="note-card__body" data-note-toggle="${note.id}">
          <p class="note-card__text">${body}</p>
        </button>
        ${actionMenu}
      </article>
    `;
  }).join("");

  renderBookNotesSearch();
}

function populateProcessingBookSelect() {
  if (!processingBookSelect) {
    return;
  }

  const visibleBooks = getVisibleBooks();
  const selectedBookId = visibleBooks.some((book) => book.id === state.processingSaveBookId)
    ? state.processingSaveBookId
    : visibleBooks[0]?.id || "";

  state.processingSaveBookId = selectedBookId;
  processingBookSelect.innerHTML = visibleBooks.map((book) => `
    <option value="${book.id}" ${book.id === selectedBookId ? "selected" : ""}>${escapeHtml(book.title)}</option>
  `).join("");
}

function renderBookAddContext() {
  if (!bookAddContext) {
    return;
  }

  bookAddContext.textContent = state.pendingBookNote
    ? localizeText(
      "Create a new book and place the current processed note into it in one step.",
      "创建新书后，当前整理好的笔记会一起保存进去。"
    )
    : localizeText(
      "Add a new book to your shelf.",
      "把一本新书加入你的书架。"
    );
}

function updateProcessingSaveUI() {
  if (processingSaveHintEl) {
    processingSaveHintEl.textContent = localizeText(
      "Choose which book should keep this cleaned note, or create a new one first.",
      "选择这条整理后笔记要保存到哪本书，或者先新建一本书。"
    );
  }

  if (processingSaveButton) {
    processingSaveButton.textContent = localizeText("Save to selected book", "保存到所选书本");
  }

  if (processingNewBookButton) {
    processingNewBookButton.textContent = localizeText("New book", "新增书本");
  }

  const visibleBooks = getVisibleBooks();
  const hasPendingNote = Boolean(state.pendingBookNote?.text);
  const hasBooks = visibleBooks.length > 0;

  if (processingSaveButton) {
    processingSaveButton.disabled = !hasPendingNote || !hasBooks;
  }

  if (processingBookSelect) {
    processingBookSelect.disabled = !hasBooks;
  }

  if (processingSaveStatusEl) {
    processingSaveStatusEl.textContent = state.processingSaveStatus
      || (!hasPendingNote
        ? localizeText("Process a voice or text capture first, then choose a destination book.", "先完成语音或文字整理，再选择要保存到的书本。")
        : !hasBooks
          ? localizeText("There is no book on the shelf yet. Create one first.", "书架里还没有书，先新增一本书吧。")
          : localizeText("AI recommends linking this note back to a book while the context is still fresh.", "AI 建议趁上下文还新鲜时，把这条笔记及时归回书本。"));
  }
}

function finalizeNoteSave(book, note) {
  state.activeBookId = book.id;
  state.processingSaveBookId = book.id;
  state.captureEntryBookId = "";
  if (bookNotesSearchInput) {
    bookNotesSearchInput.value = "";
  }
  state.bookNotesQuery = "";
  clearCaptureDraftState();
  clearEditingState();
  closeNoteActionMenu(false);
  syncBookBindings();
  renderBookshelf();
  renderSearch();
  renderHomeMoments();
  renderHomeNotesOverview();
  populateImageBookSelect();
  populateTextAiBookSelect();
  populateProcessingBookSelect();
  updateProcessingSaveUI();
  setBookTab("notes");
  return note;
}

function saveCaptureToBook(bookId, source, text, options = {}) {
  const targetBook = books.find((book) => book.id === bookId);
  const cleanedText = text.trim();
  const {
    shouldNavigate = true,
    statusMessage = "",
    noteId = "",
    existingImageUrl = "",
    imageUrl = "",
    resetCapture = true
  } = options;

  if (!targetBook || !cleanedText) {
    return;
  }

  const existingLocation = noteId ? findNoteLocation(noteId) : null;
  let note;

  if (existingLocation) {
    const previousBookId = existingLocation.book.id;
    const previousNote = { ...existingLocation.note };
    note = {
      ...existingLocation.note,
      type: source === "image" || source === "voice" || source === "text" ? source : existingLocation.note.type,
      text: cleanedText,
      zhText: cleanedText
    };

    if (note.type === "image") {
      note.imageUrl = imageUrl || existingImageUrl || existingLocation.note.imageUrl || imageAssets.notePreview;
    }

    existingLocation.book.notes.splice(existingLocation.noteIndex, 1);
    targetBook.notes.unshift(note);
    removeSavedNoteReferences(previousBookId, previousNote.id, previousNote);
    appendSavedNoteToFeeds(targetBook, note);
  } else {
    note = createBookNote(source, cleanedText, {
      ...options,
      imageUrl: imageUrl || existingImageUrl || options.imageUrl
    });
    targetBook.notes = [note, ...(targetBook.notes || [])];
    appendSavedNoteToFeeds(targetBook, note);
  }

  state.processingSaveStatus = statusMessage || localizeText(
    `Saved to ${targetBook.title}.`,
    `已保存到《${localizeBookTitle(targetBook.title)}》。`
  );
  finalizeNoteSave(targetBook, note);
  if (resetCapture) {
    resetCaptureFlows();
  }
  if (shouldNavigate) {
    navigate("book-detail");
  }
  return note;
}

function saveProcessedCaptureToBook() {
  const selectedBookId = processingBookSelect?.value || state.processingSaveBookId || state.activeBookId;
  const source = state.pendingBookNote?.source || state.captureSource;
  const text = state.pendingBookNote?.text || state.processedText;

  saveCaptureToBook(selectedBookId, source, text);
}

function startNoteEditing(noteId) {
  const location = findNoteLocation(noteId);
  if (!location) {
    return;
  }

  state.activeBookId = location.book.id;
  state.captureEntryBookId = location.book.id;
  state.processingSaveBookId = location.book.id;
  state.editingNoteId = location.note.id;
  state.editingNoteBookId = location.book.id;
  state.editingNoteType = location.note.type === "image" ? "image" : location.note.type || "text";
  closeNoteActionMenu(false);
  syncBookBindings();

  if (location.note.type === "image") {
    resetImageCaptureDraft();
    state.imageStoredUrl = location.note.imageUrl || "";
    state.imagePreviewUrl = "";
    state.imageFileName = "";
    state.imageCanRecognize = false;
    state.imageText = location.note.text || "";
    state.imageStatus = localizeText("Edit the recognized text and save it back.", "编辑识别文字后保存回原笔记。");
    populateImageBookSelect();
    if (imageBookSelect) {
      imageBookSelect.value = location.book.id;
    }
    updateImageUI();
    navigate("capture-image");
    return;
  }

  resetTextCaptureDraft();
  if (captureTextarea) {
    captureTextarea.value = location.note.text || "";
  }
  state.textDraft = location.note.text || "";
  populateTextAiBookSelect();
  renderTextAiInline();
  navigate("capture-text");
}

function deleteBookNote(noteId) {
  const location = findNoteLocation(noteId);
  if (!location) {
    return;
  }

  location.book.notes.splice(location.noteIndex, 1);
  removeSavedNoteReferences(location.book.id, location.note.id, location.note);
  state.expandedNoteIds = state.expandedNoteIds.filter((id) => id !== noteId);
  if (state.editingNoteId === noteId) {
    resetCaptureFlows();
  }
  closeNoteActionMenu(false);
  syncBookBindings();
  renderBookshelf();
  renderSearch();
  renderHomeMoments();
  renderHomeNotesOverview();
  renderBookNotes();
}

function saveEditedTextNote() {
  if (!state.editingNoteId) {
    return;
  }

  const text = getCurrentTextCaptureValue();
  if (!text) {
    return;
  }

  saveCaptureToBook(state.editingNoteBookId || state.activeBookId, state.editingNoteType || "text", text, {
    noteId: state.editingNoteId,
    statusMessage: localizeText("Note updated.", "笔记已更新。")
  });
}

function closeBookNoteMenu(shouldRender = true) {
  if (!state.activeBookNoteMenuId) {
    return;
  }
  state.activeBookNoteMenuId = "";
  if (shouldRender) {
    renderBookshelf();
  }
}

function toggleBookNoteMenu(bookId) {
  state.activeBookNoteMenuId = state.activeBookNoteMenuId === bookId ? "" : bookId;
  renderBookshelf();
}

function resetTextCaptureDraft() {
  if (captureTextarea) {
    captureTextarea.value = "";
  }
  state.textDraft = "";
  resetTextAiInline();
  renderTextAiInline();
}

function resetVoiceCaptureDraft() {
  stopRecognition();
  cleanupMediaStream();
  state.isRecording = false;
  revokeObjectUrl(state.voiceAudioUrl);
  state.voiceAudioUrl = "";
  state.voiceTranscript = "";
  state.voiceStatus = t("voice_status_ready");
  state.voicePreview = t("voice_preview");
  updateVoiceUI();
}

function resetImageCaptureDraft() {
  revokeObjectUrl(state.imagePreviewUrl);
  state.imagePreviewUrl = "";
  state.imageStoredUrl = "";
  state.imageFileName = "";
  state.imageText = "";
  state.imageCanRecognize = false;
  state.isOcrRunning = false;
  state.imageStatus = localizeText(
    "Choose a page snapshot to extract text.",
    "选择一张页面图片来识别文字。"
  );
  if (captureImageInput) {
    captureImageInput.value = "";
  }
  updateImageUI();
}

function resetCaptureFlows() {
  clearCaptureDraftState();
  clearEditingState();
  resetVoiceCaptureDraft();
  resetTextCaptureDraft();
  resetImageCaptureDraft();
}

function openFreshCapture(mode, bookId = "") {
  clearEditingState();
  closeNoteActionMenu(false);
  clearCaptureDraftState();
  state.captureEntryBookId = bookId || "";
  state.processingSaveBookId = bookId || state.activeBookId;

  if (mode === "voice") {
    resetVoiceCaptureDraft();
    setActiveScreen("capture-voice", true);
    return;
  }

  if (mode === "image") {
    resetImageCaptureDraft();
    populateImageBookSelect();
    setActiveScreen("capture-image", true);
    return;
  }

  resetTextCaptureDraft();
  populateTextAiBookSelect();
  setActiveScreen("capture-text", true);
}

function startBookNoteCapture(bookId, mode = "text") {
  const targetBook = books.find((book) => book.id === bookId);
  if (!targetBook) {
    return;
  }

  closeBookNoteMenu(false);
  state.activeBookId = bookId;
  state.captureEntryBookId = bookId;
  state.processingSaveBookId = bookId;
  state.processingSaveStatus = "";
  syncBookBindings();
  openFreshCapture(mode, bookId);
}

function renderChatSelectionState() {
  const selectedCount = state.selectedChatMessageIds.length;

  if (chatSaveSelectedButton) {
    chatSaveSelectedButton.disabled = selectedCount === 0;
  }
  if (chatDeleteSelectedButton) {
    chatDeleteSelectedButton.disabled = selectedCount === 0;
  }
  if (chatSelectionToolbar) {
    const shouldShow = selectedCount > 0;
    chatSelectionToolbar.hidden = !shouldShow;
    chatSelectionToolbar.classList.toggle("is-visible", shouldShow);
  }
}

function getActiveMomoPersona() {
  return momoPersonas.find((persona) => persona.id === state.activeMomoPersona) || momoPersonas[0];
}

function renderChatPersonaOptions() {
  if (!chatPersonas) {
    return;
  }

  const persona = getActiveMomoPersona();
  const chatHeroLabel = document.querySelector("#screen-ai-chat .chat-stage__copy .eyebrow");
  if (chatHeroLabel) {
    chatHeroLabel.textContent = localizeText(persona.label, persona.zhLabel);
  }
  if (chatPersonaHint) {
    chatPersonaHint.textContent = localizeText(persona.intro, persona.zhIntro);
  }

  chatPersonas.innerHTML = momoPersonas.map((persona) => `
    <button
      type="button"
      class="chat-persona${persona.id === state.activeMomoPersona ? " is-active" : ""}"
      data-chat-persona="${persona.id}"
    >
      ${escapeHtml(localizeText(persona.label, persona.zhLabel))}
    </button>
  `).join("");
}

function renderChatMessages() {
  if (!chatStream) {
    return;
  }

  if (!state.chatMessages.length) {
    chatStream.innerHTML = `
      <article class="chat-row chat-row--empty">
        <div class="chat-bubble">${escapeHtml(localizeText("No messages left in this thread yet.", "这条对话里暂时还没有消息了。"))}</div>
      </article>
    `;
    renderChatSelectionState();
    return;
  }

  chatStream.innerHTML = state.chatMessages.map((message) => {
    const isSelf = message.role === "self";
    const isSelected = state.selectedChatMessageIds.includes(message.id);
    const body = escapeHtml(localizeText(message.text, message.zhText || message.text));

    if (isSelf) {
      return `
        <article class="chat-row chat-row--self${isSelected ? " is-selected" : ""}" data-chat-message="${message.id}">
          <button type="button" class="chat-bubble chat-bubble--self chat-bubble--selectable${isSelected ? " is-selected" : ""}">
            ${body}
          </button>
          <div class="chat-row__avatar chat-row__avatar--self" aria-hidden="true">
            <img src="${imageAssets.userReadAvatar}" alt="">
          </div>
        </article>
      `;
    }

    return `
      <article class="chat-row${isSelected ? " is-selected" : ""}" data-chat-message="${message.id}">
        <div class="chat-row__avatar">
          <img src="${imageAssets.avatarGray}" alt="Momo avatar">
        </div>
        <button type="button" class="chat-bubble chat-bubble--selectable${isSelected ? " is-selected" : ""}">
          ${body}
        </button>
      </article>
    `;
  }).join("");

  renderChatSelectionState();
  renderChatPersonaOptions();
}

function updateChatVoiceUI() {
  if (!chatVoiceButton) {
    return;
  }

  chatVoiceButton.classList.toggle("is-active", state.isChatVoiceRecording);
  chatVoiceButton.setAttribute("aria-label", t("chat_voice_input"));
  chatVoiceButton.title = state.isChatVoiceRecording
    ? (state.chatVoiceTranscript || state.chatVoiceStatus || t("chat_voice_listening"))
    : (state.chatVoiceStatus || t("chat_voice_input"));

  if (chatVoiceStatusEl) {
    const shouldShow = Boolean(state.chatVoiceStatus) || Boolean(state.chatVoiceTranscript);
    chatVoiceStatusEl.hidden = !shouldShow;
    chatVoiceStatusEl.textContent = state.chatVoiceTranscript || state.chatVoiceStatus || "";
    chatVoiceStatusEl.classList.toggle("is-active", state.isChatVoiceRecording);
  }
}

function toggleChatMessageSelection(messageId) {
  if (!messageId) {
    return;
  }
  state.selectedChatMessageIds = state.selectedChatMessageIds.includes(messageId)
    ? state.selectedChatMessageIds.filter((id) => id !== messageId)
    : [...state.selectedChatMessageIds, messageId];
  renderChatMessages();
}

function saveSelectedChatMessages() {
  if (!state.selectedChatMessageIds.length) {
    return;
  }

  const selectedMessages = state.chatMessages.filter((message) => state.selectedChatMessageIds.includes(message.id));
  const combinedText = selectedMessages
    .map((message) => {
      const speaker = message.role === "self"
        ? localizeText("Me", "我")
        : "Momo";
      return `${speaker}: ${localizeText(message.text, message.zhText || message.text)}`;
    })
    .join("\n");

  if (!combinedText.trim()) {
    return;
  }

  const currentBookId = state.activeBookId;
  state.selectedChatMessageIds = [];
  saveCaptureToBook(currentBookId, "text", combinedText, {
    shouldNavigate: false,
    resetCapture: false,
    statusMessage: localizeText(
      "Selected chat messages were saved to the current book.",
      "选中的对话已直接保存到当前书本。"
    )
  });
  renderChatMessages();
}

function deleteSelectedChatMessages() {
  if (!state.selectedChatMessageIds.length) {
    return;
  }

  state.chatMessages = state.chatMessages.filter((message) => !state.selectedChatMessageIds.includes(message.id));
  state.selectedChatMessageIds = [];
  renderChatMessages();
}

function buildSuggestionSet(text) {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (!cleaned) {
    return baseSuggestionCopy;
  }

  const firstSentence = cleaned.split(/(?<=[.!?。！？])/)[0] || cleaned;
  const shortLead = clipText(firstSentence, 96);
  const activeBook = getActiveBook();

  return {
    summarize: {
      title: shortLead,
      body: state.profileLanguage === "zh"
        ? "这条记录已经足够清晰，可以整理后作为一条更聚焦的笔记保存回书本。"
        : "This capture is now clean enough to save back into the book as a focused note."
    },
    expand: {
      title: state.profileLanguage === "zh"
        ? "把这个想法继续往下展开，连到书里的一个具体例子、场景，或某个论点。"
        : "Expand this thread by linking it to one concrete example, scene, or argument from the book.",
      body: state.profileLanguage === "zh"
        ? `一个自然的下一步，是把这条记录重新连回《${localizeBookTitle(activeBook.title)}》，写清楚它为什么会停留在你心里。`
        : `A useful next step is to connect this capture back to ${activeBook.title} and explain why it stayed with you.`
    },
    question: {
      title: state.profileLanguage === "zh"
        ? "这条记录里，最值得你之后再回来重看的部分是什么？"
        : "What part of this capture feels most worth returning to later?",
      body: state.profileLanguage === "zh"
        ? "你可以从这个回答继续展开成更深的 AI 对话、一段语音反思，或一条更完整的长笔记。"
        : "Use that answer to start a deeper AI chat, a voice reflection, or a longer note."
    }
  };
}

function renderProcessingState() {
  const labels = {
    voice: {
      label: t("processing_label"),
      title: t("processing_title_voice"),
      meta: state.voiceAudioUrl ? t("processing_meta_voice_recorded") : t("processing_meta_voice_live")
    },
    text: {
      label: t("processing_label"),
      title: t("processing_title_text"),
      meta: t("processing_meta_text")
    },
    image: {
      label: t("processing_label"),
      title: t("processing_title_image"),
      meta: state.imageFileName || t("processing_meta_image")
    }
  };
  const current = labels[state.captureSource] || labels.voice;

  if (processingLabelEl) {
    processingLabelEl.textContent = current.label;
  }
  if (processingTitleEl) {
    processingTitleEl.textContent = current.title;
  }
  if (processingMetaEl) {
    processingMetaEl.textContent = current.meta;
  }
  if (processingTranscriptEl) {
    processingTranscriptEl.textContent = state.processedText;
  }
  updateProcessingSaveUI();
}

function setProcessedCapture(source, text) {
  state.captureSource = source;
  state.processedText = text.trim() || t("no_text_captured");
  state.pendingBookNote = {
    source,
    text: state.processedText
  };
  state.processingSaveBookId = state.activeBookId;
  state.processingSaveStatus = "";
  activeSuggestionCopy = buildSuggestionSet(state.processedText);
  populateProcessingBookSelect();
  renderBookAddContext();
  renderProcessingState();
  setSuggestion(state.suggestion);
}

function revokeObjectUrl(url) {
  if (url) {
    URL.revokeObjectURL(url);
  }
}

function updateVoiceUI() {
  const hasAudio = Boolean(state.voiceAudioUrl);
  const transcript = state.voiceTranscript.trim();

  if (voiceOrb) {
    voiceOrb.classList.toggle("is-recording", state.isRecording);
  }
  if (voiceRecordToggle) {
    voiceRecordToggle.textContent = state.isRecording
      ? localizeText("Stop recording", "结束录音")
      : hasAudio
        ? localizeText("Record again", "重新录音")
        : localizeText("Start recording", "开始录音");
  }
  if (voiceStatusEl) {
    voiceStatusEl.textContent = state.voiceStatus;
  }
  if (voiceTranscriptPreviewEl) {
    voiceTranscriptPreviewEl.textContent = transcript || state.voicePreview;
  }
  if (voiceAudioPreviewEl) {
    if (hasAudio) {
      voiceAudioPreviewEl.hidden = false;
      voiceAudioPreviewEl.src = state.voiceAudioUrl;
    } else {
      voiceAudioPreviewEl.hidden = true;
      voiceAudioPreviewEl.removeAttribute("src");
    }
  }
  if (voiceProcessButton) {
    voiceProcessButton.disabled = state.isRecording || (!transcript && !hasAudio);
  }
}

function updateImageUI() {
  const activeImageUrl = state.imagePreviewUrl || state.imageStoredUrl;
  const hasImage = Boolean(activeImageUrl);
  const editingImage = isEditingImageNote();

  if (captureImageCard) {
    captureImageCard.hidden = !hasImage;
  }
  if (captureImagePreview && hasImage) {
    captureImagePreview.src = activeImageUrl;
  }
  if (imageTextEditor && document.activeElement !== imageTextEditor) {
    imageTextEditor.value = state.imageText || "";
  }
  if (imageBookField) {
    imageBookField.hidden = editingImage;
  }
  if (imageProcessButton) {
    imageProcessButton.disabled = !state.imageCanRecognize || state.isOcrRunning;
    imageProcessButton.textContent = state.isOcrRunning ? t("image_recognizing") : state.imageText ? t("image_recognize_again") : t("image_recognize");
  }
  if (imagePolishButton) {
    imagePolishButton.disabled = !state.imageText.trim() || state.isOcrRunning;
  }
  if (imageSaveButton) {
    imageSaveButton.disabled = !state.imageText.trim();
    imageSaveButton.textContent = editingImage
      ? localizeText("Save changes", "保存修改")
      : t("image_save");
  }
}

function cleanupMediaStream() {
  if (mediaStream) {
    mediaStream.getTracks().forEach((track) => track.stop());
    mediaStream = null;
  }
}

function stopRecognition() {
  if (!recognition) {
    return;
  }
  try {
    recognition.stop();
  } catch (error) {
    // Ignore stop race conditions from repeated taps.
  }
  recognition = null;
}

function getSpeechRecognitionCtor() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function stopChatRecognition() {
  if (!recognition) {
    return;
  }
  try {
    recognition.stop();
  } catch (error) {
    // Ignore repeated stop calls.
  }
}

function applyChatVoiceTranscript(transcript) {
  const cleaned = transcript.trim();
  if (!cleaned) {
    state.chatVoiceStatus = t("chat_voice_empty");
    updateChatVoiceUI();
    return;
  }

  if (chatInput) {
    chatInput.value = cleaned;
  }
  state.chatVoiceTranscript = cleaned;
  state.chatVoiceStatus = t("chat_voice_ready_to_send");
  updateChatVoiceUI();
}

function finishChatVoiceInput() {
  if (!state.isChatVoiceRecording) {
    return;
  }
  state.isChatVoiceRecording = false;
  state.chatVoiceStatus = t("chat_voice_processing");
  updateChatVoiceUI();
  stopChatRecognition();
}

function startChatRecognition() {
  const SpeechRecognitionCtor = getSpeechRecognitionCtor();
  if (!SpeechRecognitionCtor) {
    state.chatVoiceStatus = t("chat_voice_unsupported");
    updateChatVoiceUI();
    return;
  }

  stopRecognition();
  state.isChatVoiceRecording = true;
  state.chatVoiceTranscript = "";
  state.chatVoiceStatus = t("chat_voice_listening");
  if (chatInput) {
    chatInput.value = "";
  }
  updateChatVoiceUI();

  recognition = new SpeechRecognitionCtor();
  recognition.lang = state.profileLanguage === "zh" ? "zh-CN" : "en-US";
  recognition.interimResults = true;
  recognition.continuous = true;

  recognition.onresult = (event) => {
    let mergedTranscript = "";
    for (let index = 0; index < event.results.length; index += 1) {
      const current = event.results[index][0];
      if (!current?.transcript) {
        continue;
      }
      mergedTranscript += `${current.transcript} `;
    }

    state.chatVoiceTranscript = mergedTranscript.trim();
    if (chatInput) {
      chatInput.value = state.chatVoiceTranscript;
    }
    state.chatVoiceStatus = state.chatVoiceTranscript
      ? t("chat_voice_transcribing")
      : t("chat_voice_listening");
    updateChatVoiceUI();
  };

  recognition.onerror = (event) => {
    state.isChatVoiceRecording = false;
    if (event.error === "aborted") {
      updateChatVoiceUI();
      return;
    }
    if (event.error === "not-allowed") {
      state.chatVoiceStatus = t("chat_voice_permission");
    } else if (event.error === "no-speech") {
      state.chatVoiceStatus = t("chat_voice_no_speech");
    } else {
      state.chatVoiceStatus = t("chat_voice_unsupported");
    }
    updateChatVoiceUI();
  };

  recognition.onend = () => {
    recognition = null;
    if (state.isChatVoiceRecording) {
      state.isChatVoiceRecording = false;
      applyChatVoiceTranscript(state.chatVoiceTranscript);
      return;
    }

    if (state.chatVoiceStatus === t("chat_voice_processing")) {
      applyChatVoiceTranscript(state.chatVoiceTranscript);
    }
  };

  try {
    recognition.start();
  } catch (error) {
    state.isChatVoiceRecording = false;
    state.chatVoiceStatus = t("chat_voice_unsupported");
    updateChatVoiceUI();
  }
}

function toggleChatVoiceInput() {
  if (state.isChatVoiceRecording) {
    finishChatVoiceInput();
    return;
  }
  startChatRecognition();
}

function startRecognition() {
  const SpeechRecognitionCtor = getSpeechRecognitionCtor();
  if (!SpeechRecognitionCtor) {
    state.voiceStatus = localizeText("Recording works here, but live transcription depends on browser speech recognition support.", "当前环境支持录音，但实时转写仍取决于浏览器语音识别能力。");
    updateVoiceUI();
    return;
  }

  recognition = new SpeechRecognitionCtor();
  recognition.lang = "zh-CN";
  recognition.interimResults = true;
  recognition.continuous = true;

  recognition.onresult = (event) => {
    let mergedTranscript = "";
    for (let index = 0; index < event.results.length; index += 1) {
      const current = event.results[index][0];
      if (!current?.transcript) {
        continue;
      }
      mergedTranscript += `${current.transcript} `;
    }

    state.voiceTranscript = mergedTranscript.trim();
    state.voiceStatus = state.voiceTranscript
      ? localizeText("Listening and transcribing...", "正在聆听并转写...")
      : localizeText("Listening...", "正在聆听...");
    updateVoiceUI();
  };

  recognition.onerror = (event) => {
    if (event.error === "aborted") {
      return;
    }
    if (event.error === "no-speech") {
      state.voiceStatus = localizeText("No clear speech was detected. Try speaking a little closer to the mic.", "没有检测到清晰语音，试着靠近麦克风再说一次。");
      updateVoiceUI();
      return;
    }
    if (event.error === "not-allowed") {
      state.voiceStatus = localizeText("Microphone or speech permission was denied.", "麦克风或语音识别权限被拒绝了。");
    } else {
      state.voiceStatus = localizeText("Live transcription paused, but the recording can still be saved.", "实时转写已暂停，但录音仍然可以保存。");
    }
    updateVoiceUI();
  };

  recognition.onend = () => {
    recognition = null;
  };

  try {
    recognition.start();
  } catch (error) {
    state.voiceStatus = localizeText("Live transcription could not start, but recording can still continue.", "实时转写没有成功启动，但录音仍可继续。");
    updateVoiceUI();
  }
}

async function startVoiceCapture() {
  if (!navigator.mediaDevices?.getUserMedia) {
    state.voiceStatus = localizeText("This browser cannot access the microphone.", "当前浏览器无法访问麦克风。");
    updateVoiceUI();
    return;
  }

  revokeObjectUrl(state.voiceAudioUrl);
  state.voiceAudioUrl = "";
  state.voiceTranscript = "";
  state.voiceStatus = localizeText("Requesting microphone...", "正在请求麦克风权限...");
  updateVoiceUI();

  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioChunks = [];
    mediaRecorder = new MediaRecorder(mediaStream);

    mediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) {
        audioChunks.push(event.data);
      }
    });

    mediaRecorder.addEventListener("stop", () => {
      const recordedBlob = new Blob(audioChunks, {
        type: mediaRecorder?.mimeType || "audio/webm"
      });

      if (recordedBlob.size > 0) {
        state.voiceAudioUrl = URL.createObjectURL(recordedBlob);
      }

      state.voiceStatus = state.voiceTranscript.trim()
        ? localizeText("Recording saved with live transcript.", "录音已保存，并附带实时转写内容。")
        : getSpeechRecognitionCtor()
          ? localizeText("Recording saved. If no text appeared, try speaking a little closer to the mic.", "录音已保存。如果没有出现文字，可以靠近麦克风再试一次。")
          : localizeText("Recording saved. This browser does not provide live transcription, but the audio note is kept.", "录音已保存。当前浏览器不提供实时转写，但语音内容已经保留。");

      mediaRecorder = null;
      cleanupMediaStream();
      updateVoiceUI();
    });

    mediaRecorder.start();
    state.isRecording = true;
    state.voiceStatus = localizeText("Listening...", "正在聆听...");
    startRecognition();
    updateVoiceUI();
  } catch (error) {
    state.voiceStatus = localizeText("Microphone permission is required before recording can begin.", "开始录音前需要先允许麦克风权限。");
    cleanupMediaStream();
    updateVoiceUI();
  }
}

async function stopVoiceCapture() {
  if (!mediaRecorder) {
    return;
  }

  state.isRecording = false;
  state.voiceStatus = localizeText("Finishing recording...", "正在结束录音...");
  stopRecognition();
  updateVoiceUI();
  mediaRecorder.stop();
}

async function toggleVoiceCapture() {
  if (state.isRecording) {
    await stopVoiceCapture();
    return;
  }
  await startVoiceCapture();
}

function formatOcrStatus(status, progress = 0) {
  const normalized = status.replace(/_/g, " ");
  const label = normalized.charAt(0).toUpperCase() + normalized.slice(1);
  if (!progress) {
    return label;
  }
  return `${label} ${Math.round(progress * 100)}%`;
}

function ensureTesseract() {
  if (window.Tesseract) {
    return Promise.resolve(window.Tesseract);
  }
  if (tesseractLoader) {
    return tesseractLoader;
  }

  tesseractLoader = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
    script.async = true;
    script.onload = () => resolve(window.Tesseract);
    script.onerror = () => reject(new Error("tesseract-load-failed"));
    document.head.appendChild(script);
  });

  return tesseractLoader;
}

async function detectTextWithBrowser(file) {
  if (!window.TextDetector || !window.createImageBitmap) {
    return "";
  }

  const imageBitmap = await createImageBitmap(file);

  try {
    const detector = new window.TextDetector();
    const blocks = await detector.detect(imageBitmap);
    return blocks
      .map((block) => block.rawValue || "")
      .join("\n")
      .trim();
  } finally {
    if (typeof imageBitmap.close === "function") {
      imageBitmap.close();
    }
  }
}

async function setSelectedImage(file) {
  revokeObjectUrl(state.imagePreviewUrl);
  state.imagePreviewUrl = URL.createObjectURL(file);
  state.imageStoredUrl = await fileToDataUrl(file);
  state.imageFileName = file.name;
  state.imageText = "";
  state.imageCanRecognize = true;
  state.imageStatus = t("image_selected");
  updateImageUI();
}

function populateImageBookSelect() {
  if (!imageBookSelect) {
    return;
  }

  const visibleBooks = books.filter((book) => !state.deletedBooks.includes(book.id));
  const selectedBookId = isEditingImageNote()
    ? state.editingNoteBookId || state.activeBookId
    : state.activeBookId;
  imageBookSelect.innerHTML = visibleBooks.map((book) => `
    <option value="${book.id}" ${book.id === selectedBookId ? "selected" : ""}>${book.title}</option>
  `).join("");
}

function populateTextAiBookSelect() {
  if (!textAiBookSelect) {
    return;
  }

  const visibleBooks = books.filter((book) => !state.deletedBooks.includes(book.id));
  const selectedBookId = visibleBooks.some((book) => book.id === state.processingSaveBookId)
    ? state.processingSaveBookId
    : state.activeBookId;

  state.processingSaveBookId = selectedBookId;
  textAiBookSelect.innerHTML = visibleBooks.map((book) => `
    <option value="${book.id}" ${book.id === selectedBookId ? "selected" : ""}>${book.title}</option>
  `).join("");
}

function normalizeSentenceForDiff(sentence) {
  return sentence
    .replace(/\s+/g, " ")
    .replace(/[“”]/g, "\"")
    .replace(/[‘’]/g, "'")
    .replace(/\s*([,.;:!?，。！？；：])/g, "$1")
    .trim()
    .toLowerCase();
}

function splitTextIntoSentences(text) {
  const normalized = String(text || "")
    .replace(/\r\n/g, "\n")
    .trim();

  if (!normalized) {
    return [];
  }

  const sentences = [];
  let buffer = "";

  for (let index = 0; index < normalized.length; index += 1) {
    const char = normalized[index];
    const nextChar = normalized[index + 1] || "";

    if (char === "\n") {
      if (buffer.trim()) {
        sentences.push(buffer.trim());
      }
      buffer = "";
      continue;
    }

    buffer += char;

    if (/[。！？!?]/.test(char)) {
      sentences.push(buffer.trim());
      buffer = "";
      continue;
    }

    if (char === "." && (!nextChar || /\s|\n/.test(nextChar))) {
      sentences.push(buffer.trim());
      buffer = "";
    }
  }

  if (buffer.trim()) {
    sentences.push(buffer.trim());
  }

  return sentences.filter(Boolean);
}

function createSentenceParagraphs(text) {
  const paragraphs = String(text || "")
    .replace(/\r\n/g, "\n")
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  let sentenceIndex = 0;
  return paragraphs.map((paragraph) => {
    const sentences = splitTextIntoSentences(paragraph);
    const safeSentences = sentences.length ? sentences : [paragraph];
    return safeSentences.map((sentence) => {
      sentenceIndex += 1;
      return {
        text: sentence,
        index: sentenceIndex
      };
    });
  });
}

function getSentenceSpacer(previousSentence) {
  return /[。！？；：]$/.test(previousSentence.trim()) ? "" : " ";
}

function getSentenceDiffSequence(originalText, revisedText) {
  const originalSentences = splitTextIntoSentences(originalText).map((sentence) => ({
    text: sentence,
    normalized: normalizeSentenceForDiff(sentence)
  }));
  const revisedSentences = splitTextIntoSentences(revisedText).map((sentence) => ({
    text: sentence,
    normalized: normalizeSentenceForDiff(sentence)
  }));

  if (!originalSentences.length && !revisedSentences.length) {
    return [];
  }

  if (!originalSentences.length) {
    return revisedSentences.map((sentence) => ({ type: "added", text: sentence.text }));
  }

  if (!revisedSentences.length) {
    return originalSentences.map((sentence) => ({ type: "removed", text: sentence.text }));
  }

  const lcs = Array.from({ length: originalSentences.length + 1 }, () => Array(revisedSentences.length + 1).fill(0));

  for (let originalIndex = originalSentences.length - 1; originalIndex >= 0; originalIndex -= 1) {
    for (let revisedIndex = revisedSentences.length - 1; revisedIndex >= 0; revisedIndex -= 1) {
      lcs[originalIndex][revisedIndex] = originalSentences[originalIndex].normalized === revisedSentences[revisedIndex].normalized
        ? lcs[originalIndex + 1][revisedIndex + 1] + 1
        : Math.max(lcs[originalIndex + 1][revisedIndex], lcs[originalIndex][revisedIndex + 1]);
    }
  }

  const sequence = [];
  let originalCursor = 0;
  let revisedCursor = 0;

  while (originalCursor < originalSentences.length && revisedCursor < revisedSentences.length) {
    if (originalSentences[originalCursor].normalized === revisedSentences[revisedCursor].normalized) {
      sequence.push({ type: "unchanged", text: revisedSentences[revisedCursor].text });
      originalCursor += 1;
      revisedCursor += 1;
      continue;
    }

    if (lcs[originalCursor + 1][revisedCursor] >= lcs[originalCursor][revisedCursor + 1]) {
      sequence.push({ type: "removed", text: originalSentences[originalCursor].text });
      originalCursor += 1;
    } else {
      sequence.push({ type: "added", text: revisedSentences[revisedCursor].text });
      revisedCursor += 1;
    }
  }

  while (originalCursor < originalSentences.length) {
    sequence.push({ type: "removed", text: originalSentences[originalCursor].text });
    originalCursor += 1;
  }

  while (revisedCursor < revisedSentences.length) {
    sequence.push({ type: "added", text: revisedSentences[revisedCursor].text });
    revisedCursor += 1;
  }

  return sequence;
}

function getUnchangedRevisedSentenceIndices(originalText, revisedParagraphs) {
  const flattenedRevised = revisedParagraphs.flat();
  const originalSentences = splitTextIntoSentences(originalText).map(normalizeSentenceForDiff);
  const revisedSentences = flattenedRevised.map((sentence) => normalizeSentenceForDiff(sentence.text));

  if (!originalSentences.length || !revisedSentences.length) {
    return new Set();
  }

  const lcs = Array.from({ length: originalSentences.length + 1 }, () => Array(revisedSentences.length + 1).fill(0));

  for (let originalIndex = originalSentences.length - 1; originalIndex >= 0; originalIndex -= 1) {
    for (let revisedIndex = revisedSentences.length - 1; revisedIndex >= 0; revisedIndex -= 1) {
      lcs[originalIndex][revisedIndex] = originalSentences[originalIndex] === revisedSentences[revisedIndex]
        ? lcs[originalIndex + 1][revisedIndex + 1] + 1
        : Math.max(lcs[originalIndex + 1][revisedIndex], lcs[originalIndex][revisedIndex + 1]);
    }
  }

  const unchanged = new Set();
  let originalCursor = 0;
  let revisedCursor = 0;

  while (originalCursor < originalSentences.length && revisedCursor < revisedSentences.length) {
    if (originalSentences[originalCursor] === revisedSentences[revisedCursor]) {
      unchanged.add(flattenedRevised[revisedCursor].index);
      originalCursor += 1;
      revisedCursor += 1;
      continue;
    }

    if (lcs[originalCursor + 1][revisedCursor] >= lcs[originalCursor][revisedCursor + 1]) {
      originalCursor += 1;
    } else {
      revisedCursor += 1;
    }
  }

  return unchanged;
}

function buildInlineTextAiPreview(originalText, revisedText) {
  const paragraphs = String(revisedText || "")
    .replace(/\r\n/g, "\n")
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  if (!paragraphs.length) {
    return escapeHtml(revisedText);
  }

  return paragraphs.map((paragraph, paragraphIndex) => {
    const sourceParagraph = (String(originalText || "")
      .replace(/\r\n/g, "\n")
      .split(/\n+/)
      .map((item) => item.trim())
      .filter(Boolean))[paragraphIndex] || "";
    const diffSequence = getSentenceDiffSequence(sourceParagraph, paragraph);
    if (!diffSequence.length) {
      return `<p class="text-ai-preview__paragraph">${escapeHtml(paragraph)}</p>`;
    }

    return `
    <p class="text-ai-preview__paragraph">
      ${diffSequence.map((item, itemIndex) => {
        const previousText = itemIndex > 0 ? diffSequence[itemIndex - 1].text : "";
        const prefix = itemIndex > 0 ? getSentenceSpacer(previousText) : "";
        const className = item.type === "added"
          ? "text-ai-sentence is-revised"
          : item.type === "removed"
            ? "text-ai-sentence is-original"
            : "text-ai-sentence";
        return `${prefix}<span class="${className}">${escapeHtml(item.text)}</span>`;
      }).join("")}
    </p>
  `;
  }).join("");
}

function resetTextAiInline() {
  state.textAiOriginal = "";
  state.textAiResult = "";
  state.textAiGenerated = false;
  state.textAiAccepted = false;
  state.textSavePickerOpen = false;
  state.textAiWorking = false;
  state.textAiSaveStatus = "";
  if (textAiBookSelect) {
    textAiBookSelect.selectedIndex = Math.max(textAiBookSelect.selectedIndex, 0);
  }
  renderTextAiInline();
}

function renderTextAiInline() {
  const editingText = isEditingTextNote();
  const hasGeneratedResult = state.textAiGenerated && Boolean(state.textAiResult.trim());
  const hasDraftText = Boolean((captureTextarea?.value || state.textDraft || "").trim());
  if (captureTextarea) {
    captureTextarea.hidden = !editingText && hasGeneratedResult;
  }
  if (textAiResultWrap) {
    textAiResultWrap.hidden = editingText || !hasGeneratedResult;
    textAiResultWrap.classList.toggle("is-accepting", state.textAiAccepting);
  }
  if (textAiResultEl) {
    textAiResultEl.innerHTML = hasGeneratedResult
      ? buildInlineTextAiPreview(state.textAiOriginal, state.textAiResult)
      : "";
  }
  if (textAiFooter) {
    textAiFooter.hidden = editingText || !hasGeneratedResult;
  }
  if (textAiSaveField) {
    textAiSaveField.hidden = editingText || !state.textSavePickerOpen;
  }
  if (textAiSaveWrap) {
    textAiSaveWrap.hidden = editingText || !state.textSavePickerOpen;
  }
  if (textEditActions) {
    textEditActions.hidden = !editingText;
  }
  if (textEditSaveButton) {
    textEditSaveButton.disabled = !editingText || !getCurrentTextCaptureValue();
  }
  document.querySelectorAll("[data-text-ai-mode]").forEach((button) => {
    button.hidden = editingText;
    button.classList.toggle("is-active", button.dataset.textAiMode === state.textAiMode);
    button.disabled = editingText || state.textAiWorking;
  });
  if (textAiCancelButton) {
    textAiCancelButton.disabled = editingText || state.textAiWorking || !hasGeneratedResult;
  }
  if (textAiRegenerateButton) {
    textAiRegenerateButton.disabled = editingText || state.textAiWorking;
  }
  if (textAiAcceptButton) {
    textAiAcceptButton.disabled = editingText || state.textAiWorking || !hasGeneratedResult;
  }
  if (textDirectSaveButton) {
    textDirectSaveButton.disabled = editingText || !hasDraftText;
  }
  if (textAiSaveButton) {
    textAiSaveButton.disabled = editingText || !state.textSavePickerOpen || !hasDraftText;
  }
  if (textAiNewBookButton) {
    textAiNewBookButton.disabled = editingText || !state.textSavePickerOpen || !hasDraftText;
  }
  if (textAiSaveStatusEl) {
    textAiSaveStatusEl.textContent = editingText
      ? localizeText("Save changes directly back to this note.", "修改后可直接保存回这条笔记。")
      : state.textAiSaveStatus;
  }
  if (textAiRegenerateButton) {
    textAiRegenerateButton.textContent = state.textAiWorking
      ? localizeText("Generating...", "生成中...")
      : localizeText("Regenerate", "重新生成");
  }
}

function cancelInlineTextAi() {
  state.textAiResult = "";
  state.textAiGenerated = false;
  state.textAiAccepted = false;
  state.textAiAccepting = false;
  state.textSavePickerOpen = false;
  state.textAiSaveStatus = "";
  if (captureTextarea) {
    captureTextarea.value = state.textAiOriginal || state.textDraft || captureTextarea.value;
  }
  state.textDraft = state.textAiOriginal || state.textDraft;
  renderTextAiInline();
}

async function generateInlineTextAi(mode = state.textAiMode) {
  const text = captureTextarea?.value.trim()
    || state.textDraft
    || localizeText("Write a thought here, then refine it with AI.", "先写下一点想法，再用 AI 帮你整理。");

  state.textDraft = text;
  state.textAiOriginal = text;
  state.textAiMode = mode;
  state.textAiResult = "";
  state.textAiGenerated = false;
  state.textAiAccepted = false;
  state.textAiAccepting = false;
  state.textSavePickerOpen = false;
  state.textAiSaveStatus = "";
  state.textAiWorking = true;
  renderTextAiInline();

  const fallback = mode === "expand"
    ? localizeText(
      `${text}\n\nA useful next step is to connect this idea to one concrete example from the book, so the note can move from intuition into a clearer argument.`,
      `${text}\n\n一个自然的下一步，是把这个想法连到书里的一个具体例子上，让这条笔记从直觉继续长成更清晰的判断。`
    )
    : localizeText(
      clipText(text, 180),
      clipText(text, 120)
    );

  try {
    let result = fallback;
    if (hasLiveAiConfig()) {
      const modePrompt = mode === "expand"
        ? "Expand the reading note into a slightly richer, clearer version while keeping it concise. Return only the rewritten note."
        : "Summarize the reading note into a concise, clean version. Return only the rewritten note.";
      const reply = await callAi([
        {
          role: "system",
          content: modePrompt
        },
        {
          role: "user",
          content: text
        }
      ], fallback);
      result = (reply || fallback).trim();
    }
    state.textAiResult = result;
    state.textAiGenerated = Boolean(result.trim());
  } catch (error) {
    state.textAiResult = fallback;
    state.textAiGenerated = Boolean(fallback.trim());
  } finally {
    state.textAiWorking = false;
    renderTextAiInline();
  }
}

function acceptInlineTextAi() {
  if (!state.textAiResult.trim()) {
    return;
  }
  const confirmedText = state.textAiResult.trim();
  state.textAiAccepted = true;
  state.textAiAccepting = true;
  renderTextAiInline();

  window.setTimeout(() => {
    if (captureTextarea) {
      captureTextarea.value = confirmedText;
    }
    state.textDraft = confirmedText;
    state.textAiOriginal = "";
    state.textAiResult = "";
    state.textAiGenerated = false;
    state.textAiAccepted = false;
    state.textAiAccepting = false;
    state.textAiSaveStatus = localizeText("AI 修改已覆盖原文。", "AI 修改内容已覆盖原文。");
    renderTextAiInline();
  }, 180);
}

function saveInlineTextAiToBook() {
  const selectedBookId = textAiBookSelect?.value || state.processingSaveBookId || state.activeBookId;
  const text = (captureTextarea?.value || state.textDraft || "").trim();
  if (!selectedBookId || !text) {
    return;
  }

  saveCaptureToBook(selectedBookId, "text", text, {
    statusMessage: localizeText(
      `Saved to ${books.find((book) => book.id === selectedBookId)?.title || ""}.`,
      `已保存到《${localizeBookTitle(books.find((book) => book.id === selectedBookId)?.title || "")}》。`
    )
  });
  state.textAiSaveStatus = localizeText("Saved to your book.", "已保存到书本。");
  state.textAiAccepted = false;
  state.textAiAccepting = false;
  state.textAiGenerated = false;
  state.textAiOriginal = "";
  state.textAiResult = "";
  state.textSavePickerOpen = false;
  renderTextAiInline();
}

function openTextSavePicker() {
  const text = (captureTextarea?.value || state.textDraft || "").trim();
  if (!text) {
    return;
  }
  state.pendingBookNote = {
    source: "text",
    text
  };
  state.textSavePickerOpen = true;
  state.textAiSaveStatus = localizeText(
    "Choose whether to save into an existing book or create a new one.",
    "选择保存到现有书本，或者新建一本书。"
  );
  if (state.captureEntryBookId) {
    state.activeBookId = state.captureEntryBookId;
    state.processingSaveBookId = state.captureEntryBookId;
  }
  populateTextAiBookSelect();
  renderTextAiInline();
}

function polishImageText() {
  const source = (imageTextEditor?.value || state.imageText || "").trim();
  if (!source) {
    return;
  }
  polishCaptureTextWithAi(source, "ocr note").then((cleaned) => {
    state.imageText = cleaned
      .replace(/\s+\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .replace(/[ \t]{2,}/g, " ")
      .trim();
    state.imageStatus = hasLiveAiConfig() ? t("image_ai_polished") : t("image_polished");
    updateImageUI();
  });
}

function saveImageTextToBook() {
  const text = (imageTextEditor?.value || state.imageText || "").trim();
  const selectedBookId = imageBookSelect?.value || state.editingNoteBookId || state.activeBookId;
  if (!text || !selectedBookId) {
    return;
  }

  state.imageText = text;
  state.imageStatus = localizeText("Saved to your book.", "已保存到书本。");
  updateImageUI();
  saveCaptureToBook(selectedBookId, "image", text, {
    noteId: state.editingNoteId,
    existingImageUrl: state.imageStoredUrl || imageAssets.notePreview,
    imageUrl: state.imageStoredUrl || state.imagePreviewUrl || imageAssets.notePreview,
    statusMessage: state.editingNoteId
      ? localizeText("Note updated.", "笔记已更新。")
      : localizeText(
        `Saved to ${books.find((book) => book.id === selectedBookId)?.title || ""}.`,
        `已保存到《${localizeBookTitle(books.find((book) => book.id === selectedBookId)?.title || "")}》。`
      )
  });
}

async function runImageRecognition() {
  const file = captureImageInput?.files?.[0];
  if (!file) {
    state.imageStatus = t("image_choose_first");
    updateImageUI();
    return "";
  }

  state.isOcrRunning = true;
  state.imageStatus = t("image_scanning");
  updateImageUI();

  try {
    let recognizedText = await detectTextWithBrowser(file);

    if (!recognizedText) {
      const Tesseract = await ensureTesseract();
      const result = await Tesseract.recognize(file, "eng+chi_sim", {
        logger: (message) => {
          if (message.status) {
            state.imageStatus = formatOcrStatus(message.status, message.progress);
            updateImageUI();
          }
        }
      });
      recognizedText = result?.data?.text?.trim() || "";
    }

    state.imageText = recognizedText || t("image_detected_none");
    state.imageStatus = recognizedText ? t("image_detected") : t("image_detected_none");
  } catch (error) {
    state.imageText = "";
    state.imageStatus = t("image_ocr_failed");
  } finally {
    state.isOcrRunning = false;
    updateImageUI();
  }

  return state.imageText;
}

function processVoiceCapture() {
  const transcript = state.voiceTranscript.trim();
  const fallback = state.voiceAudioUrl
    ? localizeText("Recording saved successfully. This browser did not return a usable live transcript, but the audio note is available.", "录音已经保存成功。当前浏览器没有返回可用的实时转写，但语音笔记已保留。")
    : localizeText("No voice capture yet. Start recording first.", "还没有语音记录，请先开始录音。");
  const source = transcript || fallback;
  polishCaptureTextWithAi(source, "voice capture").then(async (result) => {
    setProcessedCapture("voice", result);
    await generateSuggestionsWithAi(result);
    setSuggestion(state.suggestion);
    navigate("processing");
  });
}

function processTextCapture() {
  generateInlineTextAi(state.textAiMode || "summarize");
}

async function processImageCapture() {
  const text = state.imageText || await runImageRecognition();
  if (!text) {
    return;
  }
  state.imageText = text;
  state.imageStatus = t("image_detected_editable");
  populateImageBookSelect();
  updateImageUI();
}

function applyCaptureEntryReset(target) {
  if (state.editingNoteId) {
    return false;
  }
  if (target === "capture-voice") {
    openFreshCapture("voice", state.captureEntryBookId);
    return true;
  }
  if (target === "capture-text") {
    openFreshCapture("text", state.captureEntryBookId);
    return true;
  }
  if (target === "capture-image") {
    openFreshCapture("image", state.captureEntryBookId);
    return true;
  }
  return false;
}

function renderHomeMoments() {
  const homeTitle = document.querySelector(".home-slide__copy-head h3");
  const homeMeta = document.querySelector(".home-slide__copy-head p:last-child");
  if (!homeTitle || !homeMeta) {
    return;
  }

  const moment = moments[0];
  homeTitle.textContent = localizeText(moment.text, moment.zhText);
  homeMeta.textContent = `${localizeText(moment.time, moment.zhTime)} · ${localizeText(moment.tag, moment.zhTag)}`;
}

function renderBookshelf() {
  syncCollectionMetrics();
  if (!bookshelfList) {
    return;
  }

  const query = state.booksQuery.trim().toLowerCase();
  const visibleBooks = books.filter((book) => {
    if (state.deletedBooks.includes(book.id)) {
      return false;
    }
    if (!query) {
      return true;
    }
    return `${book.title} ${book.author}`.toLowerCase().includes(query);
  });
  const groups = state.groups.map((groupName) => {
    const booksInGroup = visibleBooks.filter((book) => (book.groupName || state.groups[0]) === groupName);

    return {
      rawName: groupName,
      title: localizeGroupName(groupName),
      meta: tp("books_count", { count: booksInGroup.length }),
      books: booksInGroup
    };
  }).filter((group) => group.books.length > 0 || group.rawName === state.selectedGroupName);

  bookshelfList.innerHTML = groups.map((group) => `
    <section class="books-group${state.selectedGroupName === group.rawName ? " is-selected" : ""}${state.dragOverGroupName === group.rawName ? " is-drop-target" : ""}" data-group-name="${group.rawName}">
      <header class="books-group__header">
        <div>
          <h3>${group.title}</h3>
          <p>${group.meta}</p>
        </div>
      </header>
      <div class="books-group__list">
        ${group.books.map((book) => {
          const noteCount = getBookNoteCount(book);
          const isDragging = state.draggingBookId === book.id;
          const isNoteMenuOpen = state.activeBookNoteMenuId === book.id;
          const latestNote = (book.notes || [])[0];
          const latestPreview = latestNote
            ? clipText(localizeText(latestNote.text, latestNote.zhText || latestNote.text), 52)
            : localizeText("No notes yet. Save your first capture here.", "还没有笔记，先把第一条记录放进来。");
          const dragStyle = isDragging ? ` style="--drag-x:${dragOffsetX}px; --drag-y:${dragOffsetY}px;"` : "";
          return `
            <div class="books-list-item${isDragging ? " is-dragging" : ""}${isNoteMenuOpen ? " is-note-menu-open" : ""}" data-book-row data-book="${book.id}"${dragStyle}>
              <div class="books-list-item__cover">
                ${createBookCover(book, true)}
              </div>
              <div class="books-list-item__body">
                <h4>${localizeBookTitle(book.title)}</h4>
                <p>${localizeAuthor(book.author)}</p>
                <span>${tp("notes_count", { count: noteCount })}</span>
                <small class="books-list-item__preview">${escapeHtml(latestPreview)}</small>
              </div>
              <div class="books-list-item__actions">
                ${state.activeFilter === "delete"
                  ? `<button type="button" class="books-list-item__action books-list-item__action--delete" data-delete-book="${book.id}" aria-label="${tp("delete_book_aria", { title: book.title })}">-</button>`
                  : isDragging
                    ? `<span class="books-list-item__action books-list-item__action--placeholder" aria-hidden="true"></span>`
                    : `<button type="button" class="books-list-item__action${isNoteMenuOpen ? " is-active" : ""}" data-add-note-book="${book.id}" aria-label="${escapeHtml(localizeText(`Add note to ${book.title}`, `为《${localizeBookTitle(book.title)}》新增笔记`))}">+</button>`
                }
                ${!isDragging && isNoteMenuOpen ? `
                  <div class="books-note-popover" data-book-note-menu role="menu" aria-label="${escapeHtml(localizeText("Choose note type", "选择笔记类型"))}">
                    <button type="button" class="books-note-popover__action" data-book-note-mode="voice" data-book-note-book="${book.id}">
                      <span class="books-note-popover__icon"><svg class="icon"><use href="#i-mic"></use></svg></span>
                      <span>${t("capture_voice")}</span>
                    </button>
                    <button type="button" class="books-note-popover__action" data-book-note-mode="text" data-book-note-book="${book.id}">
                      <span class="books-note-popover__icon"><svg class="icon"><use href="#i-pen"></use></svg></span>
                      <span>${t("capture_text")}</span>
                    </button>
                    <button type="button" class="books-note-popover__action" data-book-note-mode="image" data-book-note-book="${book.id}">
                      <span class="books-note-popover__icon"><svg class="icon"><use href="#i-camera"></use></svg></span>
                      <span>${t("capture_image")}</span>
                    </button>
                  </div>
                ` : ""}
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </section>
  `).join("");

  bookshelfList.classList.toggle("is-drag-active", Boolean(state.draggingBookId));
}

function groupSearchResults(results) {
  return {
    books: results.filter((item) => item.type === "books"),
    notes: results.filter((item) => item.type === "notes"),
    insights: results.filter((item) => item.type === "insights")
  };
}

function renderSearch() {
  if (!searchResults) {
    return;
  }

  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const filtered = searchIndex.filter((item) => {
    const matchesType = state.activeFilter === "all" || item.type === state.activeFilter;
    const localizedTitle = localizeText(item.title, item.zhTitle || item.title);
    const localizedMeta = localizeText(item.meta, item.zhMeta || item.meta);
    const matchesQuery = !query || `${localizedTitle} ${localizedMeta}`.toLowerCase().includes(query);
    return matchesType && matchesQuery;
  });
  const groups = groupSearchResults(filtered);

  const sections = ["books", "notes", "insights"]
    .filter((key) => groups[key].length > 0)
    .map((key) => `
      <section class="search-section">
        <h3>${t(`filter_${key}`)}</h3>
        ${groups[key].map((item) => {
          if (item.type === "books") {
            const linkedBook = books.find((book) => book.id === item.bookId) || books[0];
            return `
              <button type="button" class="search-item search-item--book" data-target="${item.target}" data-book="${item.bookId || ""}">
                ${createBookCover(linkedBook, true)}
                <div class="search-item__body">
                  <strong>${localizeText(item.title, item.zhTitle || item.title)}</strong>
                  <p>${localizeText(item.meta, item.zhMeta || item.meta)}</p>
                </div>
              </button>
            `;
          }
        return `
          <button type="button" class="search-item" data-target="${item.target}" ${item.bookId ? `data-book="${item.bookId}"` : ""}>
            <div class="search-item__body">
              <strong>${localizeText(item.title, item.zhTitle || item.title)}</strong>
              <span>${t(`filter_${item.type}`)}</span>
            </div>
            <span class="search-item__time">${localizeText(item.meta, item.zhMeta || item.meta)}</span>
          </button>
        `;
      }).join("")}
    </section>
  `).join("");

  searchResults.innerHTML = sections || `
    <section class="search-section">
      <h3>${t("no_matches_title")}</h3>
      <p class="eyebrow">${t("no_matches_hint")}</p>
    </section>
  `;
}

function renderHomeNotesOverview() {
  const homeTitle = document.querySelector(".home-slide__copy-head h3");
  if (!homeTitle || !homeNotesTopScroller || !homeNotesBottomScroller) {
    return;
  }

  const recentMoments = moments.slice(0, 5);
  const topMoments = recentMoments.filter((_, index) => index % 2 === 0);
  const bottomMoments = recentMoments.filter((_, index) => index % 2 === 1);
  homeTitle.textContent = "";

  const renderLane = (items, laneName) => items.map((moment) => `
    <button
      type="button"
      class="home-note-bubble"
      data-home-lane="${laneName}"
      data-target="${moment.target}"
      ${moment.bookId ? `data-book="${moment.bookId}"` : ""}
    >
      <span class="home-note-bubble__tag">${localizeText(moment.tag, moment.zhTag)}</span>
      <strong>${clipText(localizeText(moment.text, moment.zhText), 90)}</strong>
      <span class="home-note-bubble__time">${localizeText(moment.time, moment.zhTime)}</span>
    </button>
  `).join("");

  homeNotesTopScroller.innerHTML = renderLane(topMoments, "top");
  homeNotesBottomScroller.innerHTML = renderLane(bottomMoments, "bottom");
}

function renderBookNotesSearch() {
  const query = state.bookNotesQuery.trim().toLowerCase();
  document.querySelectorAll("[data-note-item]").forEach((item) => {
    const text = item.textContent?.toLowerCase() || "";
    item.hidden = Boolean(query) && !text.includes(query);
  });
}

function syncBookBindings() {
  const book = getActiveBook();
  const noteCount = getBookNoteCount(book);

  document.querySelectorAll("[data-bind='book-title']").forEach((el) => {
    el.textContent = localizeBookTitle(book.title);
  });

  document.querySelectorAll("[data-bind='book-author']").forEach((el) => {
    el.textContent = localizeAuthor(book.author);
  });

  document.querySelectorAll("[data-bind='book-pages']").forEach((el) => {
    el.textContent = localizeText(`${noteCount} notes`, `${noteCount} 条笔记`);
  });

  document.querySelectorAll("[data-cover-preview]").forEach((el) => {
    el.innerHTML = createBookCover(book, false);
  });

  document.querySelectorAll("[data-home-book-art]").forEach((el) => {
    el.innerHTML = `<img src="${book.heroImage}" alt="">`;
  });

  document.querySelectorAll("[data-detail-book-art]").forEach((el) => {
    el.innerHTML = `<img src="${book.detailImage}" alt="">`;
  });

  renderBookFinishMeta();
  renderBookNotes();
  populateImageBookSelect();
  populateProcessingBookSelect();
  renderBookAddContext();
}

function setHomeSlide(index) {
  const slides = Array.from(document.querySelectorAll("[data-home-slide]"));
  const dots = Array.from(document.querySelectorAll("[data-home-dot]"));
  if (!slides.length) {
    return;
  }

  const normalizedIndex = (index + slides.length) % slides.length;
  state.homeSlide = normalizedIndex;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === normalizedIndex);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === normalizedIndex);
  });
}

function deleteSelectedBooks() {
  if (!state.draggingBookId) {
    return;
  }
  state.deletedBooks = [...new Set([...state.deletedBooks, state.draggingBookId])];
  if (state.deletedBooks.includes(state.activeBookId)) {
    const nextBook = books.find((book) => !state.deletedBooks.includes(book.id));
    if (nextBook) {
      state.activeBookId = nextBook.id;
      syncBookBindings();
    }
  }
  state.draggingBookId = "";
  renderBookshelf();
}

function toggleBookSelection(bookId) {
  if (state.activeFilter === "delete") {
    state.deletedBooks = [...new Set([...state.deletedBooks, bookId])];
    renderBookshelf();
    return;
  }

  if (!state.draggingBookId) {
    state.activeBookId = bookId;
    syncBookBindings();
    navigate("book-detail");
    return;
  }
}

function renameBooksGroup() {
  const nextName = window.prompt(t("rename_group_prompt"), state.selectedGroupName);
  if (!nextName) {
    return;
  }
  state.groups = state.groups.map((group) => group === state.selectedGroupName ? (nextName.trim() || group) : group);
  state.selectedGroupName = nextName.trim() || state.selectedGroupName;
  state.activeBooksGroup = state.groups[0];
  renderBookshelf();
}

function createBooksGroup() {
  const nextName = window.prompt(t("new_group_prompt"), t("new_group_default"));
  if (!nextName) {
    return;
  }
  const groupName = nextName.trim();
  if (!groupName) {
    return;
  }
  if (state.groups.includes(groupName)) {
    state.selectedGroupName = groupName;
    renderBookshelf();
    return;
  }
  state.groups = [...state.groups, groupName];
  state.selectedGroupName = groupName;
  renderBookshelf();
}

function resetBooksDragState() {
  window.clearTimeout(bookLongPressTimer);
  state.draggingBookId = "";
  state.dragOverGroupName = "";
  draggingPointerId = null;
  draggingTouchIdentifier = null;
  dragOffsetX = 0;
  dragOffsetY = 0;
  dragPointerClientX = 0;
  dragPointerClientY = 0;
  if (booksDragAutoScrollFrame) {
    window.cancelAnimationFrame(booksDragAutoScrollFrame);
    booksDragAutoScrollFrame = 0;
  }
  bookshelfList?.classList.remove("is-drag-active");
  document.querySelectorAll("[data-group-name]").forEach((group) => {
    group.classList.remove("is-drop-target");
  });
  if (draggingBookRow) {
    if (draggingPointerId !== null && draggingBookRow.hasPointerCapture?.(draggingPointerId)) {
      draggingBookRow.releasePointerCapture(draggingPointerId);
    }
    draggingBookRow.classList.remove("is-dragging");
    draggingBookRow.style.removeProperty("--drag-x");
    draggingBookRow.style.removeProperty("--drag-y");
    draggingBookRow = null;
  }
  document.documentElement.classList.remove("book-dragging");
  if (pressedBookRow) {
    pressedBookRow.classList.remove("is-pressing");
    pressedBookRow = null;
  }
}

function findBooksGroupFromPoint(clientX, clientY) {
  const hitStack = document.elementsFromPoint?.(clientX, clientY) || [];
  const directGroup = hitStack
    .map((element) => element?.closest?.("[data-group-name]"))
    .find(Boolean);
  if (directGroup) {
    return directGroup;
  }

  const groups = Array.from(document.querySelectorAll("[data-group-name]"));
  if (!groups.length) {
    return null;
  }

  const horizontallyAligned = groups.filter((group) => {
    const rect = group.getBoundingClientRect();
    return clientX >= rect.left - 18 && clientX <= rect.right + 18;
  });
  const candidates = horizontallyAligned.length ? horizontallyAligned : groups;

  let bestGroup = null;
  let bestDistance = Number.POSITIVE_INFINITY;

  candidates.forEach((group) => {
    const rect = group.getBoundingClientRect();
    const deltaY = clientY < rect.top
      ? rect.top - clientY
      : clientY > rect.bottom
        ? clientY - rect.bottom
        : 0;

    if (deltaY < bestDistance) {
      bestDistance = deltaY;
      bestGroup = group;
    }
  });

  return bestDistance <= 56 ? bestGroup : null;
}

function updateBooksDragTargetFromPoint(clientX, clientY) {
  const groupBlock = findBooksGroupFromPoint(clientX, clientY);
  state.dragOverGroupName = groupBlock?.dataset.groupName || "";
  document.querySelectorAll("[data-group-name]").forEach((group) => {
    group.classList.toggle("is-drop-target", group.dataset.groupName === state.dragOverGroupName);
  });
}

function finishBooksDrag() {
  suppressNextBookRowTap = true;
  if (state.draggingBookId && state.dragOverGroupName) {
    const movingBook = books.find((book) => book.id === state.draggingBookId);
    if (movingBook) {
      movingBook.groupName = state.dragOverGroupName;
      state.selectedGroupName = state.dragOverGroupName;
    }
  }
  resetBooksDragState();
  renderBookshelf();
}

function startBooksManageMode() {
  state.activeFilter = "delete";
  resetBooksDragState();
  renderBookshelf();
}

function selectBooksGroup(groupName) {
  if (state.draggingBookId) {
    const movingBook = books.find((book) => book.id === state.draggingBookId);
    if (movingBook) {
      movingBook.groupName = groupName;
    }
    resetBooksDragState();
  }
  state.selectedGroupName = groupName;
  state.activeFilter = "all";
  renderBookshelf();
}

function syncDraggingBookVisual(clientX, clientY) {
  if (!state.draggingBookId) {
    return;
  }

  dragOffsetX = clientX - dragStartX;
  dragOffsetY = clientY - dragStartY;

  const activeRow = draggingBookRow || document.querySelector(`[data-book-row][data-book="${state.draggingBookId}"]`);
  if (!activeRow) {
    return;
  }

  activeRow.style.setProperty("--drag-x", `${dragOffsetX}px`);
  activeRow.style.setProperty("--drag-y", `${dragOffsetY}px`);
}

function stepBooksDragAutoScroll() {
  booksDragAutoScrollFrame = 0;

  if (!state.draggingBookId || !bookshelfScreen) {
    return;
  }

  const rect = bookshelfScreen.getBoundingClientRect();
  const edgeInset = Math.min(92, rect.height * 0.18);
  let delta = 0;

  if (dragPointerClientY < rect.top + edgeInset) {
    delta = -Math.max(4, (rect.top + edgeInset - dragPointerClientY) * 0.18);
  } else if (dragPointerClientY > rect.bottom - edgeInset) {
    delta = Math.max(4, (dragPointerClientY - (rect.bottom - edgeInset)) * 0.18);
  }

  if (!delta) {
    return;
  }

  const maxScrollTop = Math.max(0, bookshelfScreen.scrollHeight - bookshelfScreen.clientHeight);
  const nextScrollTop = Math.max(0, Math.min(bookshelfScreen.scrollTop + delta, maxScrollTop));

  if (nextScrollTop !== bookshelfScreen.scrollTop) {
    bookshelfScreen.scrollTop = nextScrollTop;
    syncDraggingBookVisual(dragPointerClientX, dragPointerClientY);
    updateBooksDragTargetFromPoint(dragPointerClientX, dragPointerClientY);
    booksDragAutoScrollFrame = window.requestAnimationFrame(stepBooksDragAutoScroll);
  }
}

function scheduleBooksDragAutoScroll(clientX, clientY) {
  dragPointerClientX = clientX;
  dragPointerClientY = clientY;
  if (!booksDragAutoScrollFrame) {
    booksDragAutoScrollFrame = window.requestAnimationFrame(stepBooksDragAutoScroll);
  }
}

function activateBookDrag(bookId, bookRow, clientX, clientY, pointerId = null, touchIdentifier = null) {
  state.draggingBookId = bookId;
  bookLongPressTriggered = true;
  dragOffsetX = 0;
  dragOffsetY = 0;
  dragPointerClientX = clientX;
  dragPointerClientY = clientY;
  draggingPointerId = pointerId;
  draggingTouchIdentifier = touchIdentifier;
  draggingBookRow = bookRow;
  pressedBookRow?.classList.remove("is-pressing");
  draggingBookRow.classList.add("is-dragging");
  draggingBookRow.style.setProperty("--drag-x", "0px");
  draggingBookRow.style.setProperty("--drag-y", "0px");
  if (pointerId !== null) {
    draggingBookRow.setPointerCapture?.(pointerId);
  }
  bookshelfList?.classList.add("is-drag-active");
  document.documentElement.classList.add("book-dragging");
  window.getSelection?.()?.removeAllRanges();
  updateBooksDragTargetFromPoint(clientX, clientY);
  scheduleBooksDragAutoScroll(clientX, clientY);
}

function beginBookLongPress(bookRow, bookId, clientX, clientY, pointerId = null, touchIdentifier = null) {
  window.clearTimeout(bookLongPressTimer);
  bookLongPressTriggered = false;
  draggingPointerId = pointerId;
  draggingTouchIdentifier = touchIdentifier;
  dragStartX = clientX;
  dragStartY = clientY;
  dragOffsetX = 0;
  dragOffsetY = 0;
  if (pressedBookRow && pressedBookRow !== bookRow) {
    pressedBookRow.classList.remove("is-pressing");
  }
  pressedBookRow = bookRow;
  pressedBookRow.classList.add("is-pressing");
  bookLongPressTimer = window.setTimeout(() => {
    activateBookDrag(bookId, bookRow, clientX, clientY, pointerId, touchIdentifier);
  }, 420);
}

function cancelBookLongPressPressing() {
  window.clearTimeout(bookLongPressTimer);
  if (pressedBookRow) {
    pressedBookRow.classList.remove("is-pressing");
    pressedBookRow = null;
  }
}

function findTrackedTouch(touchList) {
  if (draggingTouchIdentifier === null) {
    return null;
  }
  return Array.from(touchList).find((touch) => touch.identifier === draggingTouchIdentifier) || null;
}

function snapHomeNotesScroller(scroller = activeHomeNotesScroller) {
  if (!scroller) {
    return;
  }

  const firstBubble = scroller.querySelector(".home-note-bubble");
  if (!firstBubble) {
    return;
  }

  const styles = window.getComputedStyle(scroller);
  const gap = parseFloat(styles.columnGap || styles.gap || "0");
  const step = firstBubble.getBoundingClientRect().width + gap;
  const maxScroll = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
  const rawIndex = step > 0 ? scroller.scrollLeft / step : 0;
  const nextScrollLeft = Math.max(0, Math.min(Math.round(rawIndex) * step, maxScroll));

  scroller.scrollTo({
    left: nextScrollLeft,
    behavior: "smooth"
  });
}

function endHomeNotesDrag() {
  if (!activeHomeNotesScroller) {
    return;
  }

  activeHomeNotesScroller.classList.remove("is-dragging");
  activeHomeNotesScroller = null;
  homeNotesPointerId = null;
  homeNotesDragging = false;
}

function saveNewBook() {
  const title = bookTitleInput?.value.trim();
  const author = bookAuthorInput?.value.trim();
  const startedAt = bookStartInput?.value || "";
  const finishedAt = bookEndInput?.value || "";
  if (!title || !author) {
    return;
  }

  const pendingNote = state.pendingBookNote;
  const newBook = {
    id: `book-${Date.now()}`,
    title,
    author,
    progress: 0,
    pages: 60,
    groupName: state.selectedGroupName || state.groups[0],
    startedAt,
    finishedAt,
    notes: [],
    coverImage: bookCoverPreview?.src || "assets/cover-sapiens.png",
    heroImage: "assets/cat-hd-read.png",
    detailImage: "assets/cat-hd-read.png"
  };

  if (pendingNote?.text) {
    const note = createBookNote(pendingNote.source || state.captureSource, pendingNote.text);
    newBook.notes = [note];
    appendSavedNoteToFeeds(newBook, note);
    state.processingSaveStatus = localizeText(
      `Saved to ${newBook.title}.`,
      `已保存到《${newBook.title}》。`
    );
  }

  books.unshift(newBook);
  state.activeBookId = newBook.id;
  state.bookFinishEditorOpen = false;
  state.processingSaveBookId = newBook.id;
  state.pendingBookNote = null;
  state.pendingNewBookSource = "";
  syncBookBindings();
  renderBookshelf();
  renderSearch();
  renderHomeMoments();
  renderHomeNotesOverview();
  populateTextAiBookSelect();
  updateProcessingSaveUI();
  setBookTab("notes");
  navigate(pendingNote?.text ? "book-detail" : "bookshelf");

  if (bookTitleInput) bookTitleInput.value = "";
  if (bookAuthorInput) bookAuthorInput.value = "";
  if (bookStartInput) bookStartInput.value = "";
  if (bookEndInput) bookEndInput.value = "";
  if (bookCoverCard) bookCoverCard.hidden = true;
  if (bookCoverName) bookCoverName.textContent = localizeText("Your uploaded cover will appear here.", "你上传的封面会显示在这里。");
  renderBookAddContext();
}

function setActiveScreen(target, pushHistory = true) {
  if (!screenIds.has(target)) {
    return;
  }

  closeBookNoteMenu();
  state.bookFinishEditorOpen = false;
  hideQuickSheet();
  hideBooksSheet();
  state.screen = target;
  const screens = document.querySelectorAll(".screen");
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === target);
  });

  document.querySelectorAll(".tabbar__item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === target);
  });

  const activeScreen = document.querySelector(`.screen[data-screen="${target}"]`);
  const navMode = activeScreen ? activeScreen.dataset.nav : "none";
  if (primaryNav) {
    primaryNav.classList.toggle("is-hidden", navMode !== "primary");
  }

  if (pushHistory) {
    const last = state.history[state.history.length - 1];
    if (last !== target) {
      state.history.push(target);
    }
  }

  if (activeScreen) {
    activeScreen.scrollTop = 0;
  }

  syncViewportHeight();
}

function navigate(target) {
  if (applyCaptureEntryReset(target)) {
    return;
  }
  setActiveScreen(target, true);
}

function goBack() {
  if (state.history.length > 1) {
    state.history.pop();
    const previous = state.history[state.history.length - 1];
    setActiveScreen(previous, false);
    return;
  }
  setActiveScreen("home", false);
}

function setBookTab(tab) {
  document.querySelectorAll("[data-book-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.bookTab === tab);
  });
  document.querySelectorAll("[data-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === tab);
  });
}

function setSuggestion(kind) {
  state.suggestion = kind;
  document.querySelectorAll("[data-suggestion]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.suggestion === kind);
  });
  if (!suggestionPreview) {
    return;
  }
  const copy = activeSuggestionCopy[kind] || baseSuggestionCopy[kind];
  suggestionPreview.innerHTML = `
    <p class="eyebrow">${t("suggestion_preview")}</p>
    <h3>${localizeText(copy.title, copy.zhTitle || copy.title)}</h3>
    <p>${localizeText(copy.body, copy.zhBody || copy.body)}</p>
  `;
}

function setSearchFilter(filter) {
  state.activeFilter = filter;
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });
  renderSearch();
}

function getStoredAiConfig() {
  try {
    const raw = window.localStorage.getItem("moment-record-ai-config");
    if (!raw) {
      return { ...defaultAiConfig };
    }
    return { ...defaultAiConfig, ...JSON.parse(raw) };
  } catch (error) {
    return { ...defaultAiConfig };
  }
}

function persistAiConfig() {
  try {
    window.localStorage.setItem("moment-record-ai-config", JSON.stringify(state.aiConfig));
  } catch (error) {
    // Ignore storage failures and keep the in-memory config.
  }
}

function getStoredLanguage() {
  try {
    return window.localStorage.getItem("moment-record-language") || "zh";
  } catch (error) {
    return "zh";
  }
}

function persistLanguage() {
  try {
    window.localStorage.setItem("moment-record-language", state.profileLanguage);
  } catch (error) {
    // Ignore storage failures and keep the in-memory language.
  }
}

function t(key) {
  return uiTranslations[state.profileLanguage]?.[key]
    || uiTranslations.en[key]
    || translations[state.profileLanguage]?.[key]
    || translations.en[key]
    || key;
}

function tp(key, vars = {}) {
  return Object.entries(vars).reduce((message, [name, value]) => {
    return message.replaceAll(`{${name}}`, String(value));
  }, t(key));
}

function hasLiveAiConfig() {
  return Boolean(state.aiConfig.endpoint && state.aiConfig.model && state.aiConfig.token);
}

function normalizeAiEndpoint(rawEndpoint) {
  const endpoint = (rawEndpoint || "").trim();
  if (!endpoint) {
    return "";
  }

  if (/\/(chat\/completions|responses)\/?$/i.test(endpoint)) {
    return endpoint;
  }

  return `${endpoint.replace(/\/+$/, "")}/chat/completions`;
}

function callAi(messages, fallbackText = "") {
  if (!hasLiveAiConfig()) {
    return Promise.resolve(fallbackText);
  }
  const requestUrl = normalizeAiEndpoint(state.aiConfig.endpoint);
  return fetch(requestUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${state.aiConfig.token}`
    },
    body: JSON.stringify({
      model: state.aiConfig.model,
      messages,
      temperature: 0.7
    })
  }).then(async (response) => {
    if (!response.ok) {
      let detail = "";
      try {
        const errorPayload = await response.json();
        detail = errorPayload?.error?.message || errorPayload?.message || "";
      } catch (error) {
        detail = "";
      }
      throw new Error(`ai-http-${response.status}${detail ? `::${detail}` : ""}`);
    }
    const data = await response.json();
    const text = data?.choices?.[0]?.message?.content;
    if (typeof text === "string") {
      return text.trim();
    }
    if (Array.isArray(text)) {
      return text.map((part) => part?.text || "").join("").trim();
    }
    if (typeof data?.output_text === "string") {
      return data.output_text.trim();
    }
    if (Array.isArray(data?.output)) {
      const merged = data.output
        .flatMap((item) => item?.content || [])
        .map((part) => part?.text || "")
        .join("")
        .trim();
      if (merged) {
        return merged;
      }
    }
    throw new Error("ai-empty-response");
  });
}

async function generateChatReply(userMessage) {
  const persona = getActiveMomoPersona();
  const activeBook = getActiveBook();
  const historyMessages = state.chatMessages.slice(-8).map((message) => ({
    role: message.role === "self" ? "user" : "assistant",
    content: localizeText(message.text, message.zhText || message.text)
  }));
  const fallbackReply = localizeText(
    aiReplies[Math.floor(Math.random() * aiReplies.length)]?.en || "That thought has real potential. We can keep pulling on it together.",
    aiReplies[Math.floor(Math.random() * aiReplies.length)]?.zh || "这个想法已经很有延展性了，我们可以继续顺着聊下去。"
  );

  if (!hasLiveAiConfig()) {
    return fallbackReply;
  }

  try {
    const reply = await callAi([
      {
        role: "system",
        content: `${persona.prompt} You are discussing the book "${activeBook.title}" by ${activeBook.author}. Reply in the user's current language. Keep each reply under 120 words and return only the assistant reply text.`
      },
      ...historyMessages,
      {
        role: "user",
        content: userMessage
      }
    ], fallbackReply);

    return reply || fallbackReply;
  } catch (error) {
    console.error("generateChatReply failed", error);
    return fallbackReply;
  }
}

function updateAiConfigFromInputs() {
  state.aiConfig = {
    endpoint: aiEndpointInput?.value.trim() || "",
    model: aiModelInput?.value.trim() || defaultAiConfig.model,
    token: aiTokenInput?.value.trim() || ""
  };
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = value;
  });
}

function setPlaceholder(selector, value) {
  document.querySelectorAll(selector).forEach((node) => {
    node.placeholder = value;
  });
}

function setAriaLabel(selector, value) {
  document.querySelectorAll(selector).forEach((node) => {
    node.setAttribute("aria-label", value);
  });
}

function rebuildLanguageOptions() {
  if (profileLanguagePanel) {
    profileLanguagePanel.innerHTML = `
      <button type="button" class="settings-option${state.profileLanguage === "en" ? " is-active" : ""}" data-language="en">
        <span>${t("language_english")}</span>
        <span class="settings-option__check">✓</span>
      </button>
      <button type="button" class="settings-option${state.profileLanguage === "zh" ? " is-active" : ""}" data-language="zh">
        <span>中文</span>
        <span class="settings-option__check">✓</span>
      </button>
    `;
  }
}

function applyLanguage() {
  document.documentElement.lang = state.profileLanguage === "zh" ? "zh-CN" : "en";
  rebuildLanguageOptions();

  setText("#screen-home .hero-top__profile .eyebrow", t("home_greeting"));
  setText("#screen-home .hero-top__profile .display", t("home_title"));
  setText("#screen-home .home-slide__copy-head .eyebrow", t("home_notes_today"));

  setText("#screen-bookshelf .page-chrome .display", t("books_title"));
  setPlaceholder("#books-search-input", t("search_books"));
  setAriaLabel("#screen-bookshelf [data-booksheet-toggle]", t("books_title"));

  setText(".detail-meta__stats strong", t("detail_updated_today"));
  if (detailFinishSaveButton) {
    detailFinishSaveButton.textContent = t("detail_finish_save");
  }
  setPlaceholder("#book-notes-search-input", t("search_notes"));
  setText("[data-book-tab='notes']", t("tab_notes"));
  setText("[data-book-tab='ai']", t("tab_ai"));
  setText(".book-panel[data-panel='notes'] .note-card:nth-of-type(1) .note-card__top span:first-child", t("note_time_today_1030"));
  setText(".book-panel[data-panel='notes'] .note-card:nth-of-type(2) .note-card__top span:first-child", t("note_time_today_0845"));
  setText(".book-panel[data-panel='notes'] .note-card:nth-of-type(1) p", t("note_quote_primary"));
  setText(".book-panel[data-panel='notes'] .note-card:nth-of-type(2) p", t("note_quote_voice"));
  setText(".note-card__top .tag:not(.tag--sky):not(.tag--peach)", t("tag_insight"));
  setText(".note-card__top .tag--sky", t("tag_voice"));
  setText(".note-card__quote .tag--peach", t("tag_image"));
  setText(".companion-preview .eyebrow", t("reading_companion"));
  setText(".chat-preview--prompt .eyebrow", t("question_label"));
  setText(".chat-preview--reply .eyebrow", t("your_thought"));
  setText(".companion-flow__footer .btn", t("continue_chat"));

  setText("#screen-capture .page-chrome .eyebrow", t("capture_label"));
  setText("#screen-capture .page-chrome .display", t("capture_title"));
  setText("#screen-capture [data-target='capture-voice'] strong", t("capture_voice"));
  setText("#screen-capture [data-target='capture-text'] strong", t("capture_text"));
  setText("#screen-capture [data-target='capture-image'] strong", t("capture_image"));
  setText("#screen-capture-voice .page-chrome .eyebrow", t("capture_voice"));
  setText("#screen-capture-voice .page-chrome .display", t("capture_voice_title"));
  setText("#screen-capture-text .page-chrome .eyebrow", t("capture_text"));
  setText("#screen-capture-text .page-chrome .display", t("capture_text_title"));
  setText("[data-text-ai-mode='summarize'] .ai-mini-btn__label", t("suggestion_summarize"));
  setText("[data-text-ai-mode='expand'] .ai-mini-btn__label", t("suggestion_expand"));
  setText("#text-direct-save-button .ai-mini-btn__label", localizeText("Save", "保存"));
  setText("#text-ai-cancel-button", localizeText("Cancel", "取消"));
  setText("#text-ai-regenerate-button", localizeText("Regenerate", "重新生成"));
  setText("#text-ai-accept-button", localizeText("Confirm", "确认"));
  setText("#text-edit-save-button", localizeText("Save changes", "保存修改"));
  setText("#screen-capture-text .book-field span", t("save_into_book"));
  setText("#text-ai-new-book-button", t("new_book"));
  setText("#text-ai-save-button", localizeText("Save to existing book", "保存到现有书本"));
  setText("#screen-capture-image .page-chrome .eyebrow", t("capture_image"));
  setText("#screen-capture-image .page-chrome .display", t("capture_image_title"));
  setText("#capture-image-picker strong", t("image_choose_snapshot"));
  setText("#screen-capture-image .book-field:nth-of-type(1) span", t("recognized_text"));
  setText("#screen-capture-image .book-field:nth-of-type(2) span", t("save_into_book"));

  setText("#processing-meta", t("latest_capture"));
  setText("#screen-processing .section-title h3", t("ai_suggestions"));
  setText("[data-suggestion='summarize'] strong", t("suggestion_summarize"));
  setText("[data-suggestion='summarize'] small", t("suggestion_summarize_hint"));
  setText("[data-suggestion='expand'] strong", t("suggestion_expand"));
  setText("[data-suggestion='expand'] small", t("suggestion_expand_hint"));
  setText("[data-suggestion='question'] strong", t("suggestion_question"));
  setText("[data-suggestion='question'] small", t("suggestion_question_hint"));
  setText("#processing-new-book-button", t("new_book"));

  setText("#screen-book-add .page-chrome .eyebrow", t("new_book"));
  setText("#book-cover-picker strong", t("upload_cover"));
  setText("#screen-book-add .book-field:nth-of-type(1) span", t("book_title_label"));
  setText("#screen-book-add .book-field:nth-of-type(2) span", t("author_label"));
  setText("#screen-book-add .book-field:nth-of-type(3) span", t("start_reading"));
  setText("#screen-book-add .book-field:nth-of-type(4) span", t("finish_reading"));

  setText("#screen-search .page-chrome .eyebrow", t("search_label"));
  setText("#screen-search .page-chrome .display", t("search_title"));
  setPlaceholder("#search-input", t("search_all_placeholder"));
  setText("#filter-row [data-filter='books']", t("filter_books"));
  setText("#filter-row [data-filter='notes']", t("filter_notes"));
  setText("#filter-row [data-filter='insights']", t("filter_insights"));

  setText("#screen-ai-chat .page-chrome .display", t("chat_title"));
  setText("#screen-ai-chat .chat-stage__copy .eyebrow", "Momo");
  setText("#chat-save-selected-button", t("save_selected"));
  setText("#chat-delete-selected-button", t("delete_selected"));
  setPlaceholder("#chat-text", t("chat_placeholder"));
  setAriaLabel("#chat-text", t("chat_input_aria"));
  setAriaLabel("#chat-voice-button", t("chat_voice_input"));
  renderChatPersonaOptions();
  updateChatVoiceUI();

  setPlaceholder("#book-title-input", t("add_book_title"));
  setPlaceholder("#book-author-input", t("add_book_author"));
  setPlaceholder("#image-text-editor", t("image_editor_placeholder"));
  setPlaceholder("#ai-token-input", t("ai_token_placeholder"));

  setText("#text-process-button", t("text_process"));
  setText("#image-polish-button", t("image_polish"));
  setText("#book-save-button", t("book_add"));

  setText("#screen-insights .page-chrome .eyebrow", t("insights_label"));
  setText("#screen-insights .page-chrome .display", t("insights_title"));
  setText(".insights-hero .eyebrow", t("books_read"));
  setText(".insight-mini--warm .eyebrow", t("most_active_time"));
  setText(".insight-mini--blue .eyebrow", t("total_notes"));
  setText(".trend-card .section-title h3", t("weekly_note_trend"));

  setText("#screen-profile .page-chrome .eyebrow", t("profile_label"));
  setText("#screen-profile .page-chrome .display", t("profile_title"));
  setText("#screen-profile .profile-unified__top p", t("profile_subtitle"));
  setText("#screen-profile .profile-stat:nth-child(1) span", t("stats_notes"));
  setText("#screen-profile .profile-stat:nth-child(2) span", t("stats_ai_chats"));
  setText("#screen-profile .profile-stat:nth-child(3) span", t("stats_books_read"));
  setText("[data-profile-section-toggle='preferences'] .settings-item__left span:last-child", t("profile_preferences"));
  setText(".settings-subitem__label", t("profile_language"));
  setText("[data-profile-section-toggle='ai-settings'] .settings-item__left span:last-child", t("profile_ai_service"));
  setText("#profile-ai-panel .book-field:nth-of-type(1) span", t("ai_endpoint"));
  setText("#profile-ai-panel .book-field:nth-of-type(2) span", t("ai_model"));
  setText("#profile-ai-panel .book-field:nth-of-type(3) span", t("ai_token"));
  setPlaceholder("#ai-endpoint-input", t("ai_endpoint_placeholder"));
  setText("#ai-settings-test-button", t("ai_test"));
  setText("#ai-settings-save-button", t("ai_save"));
  setText("#screen-profile .settings-item:nth-of-type(3) .settings-item__left span:last-child", t("profile_data_sync"));
  setText("#screen-profile .settings-item:nth-of-type(4) .settings-item__left span:last-child", t("profile_about"));

  setText("#quick-sheet-wrap .quick-sheet__header .eyebrow", t("quick_add"));
  setText("#quick-sheet-wrap .quick-sheet__header h3", t("quick_add_title"));
  setText("#quick-sheet-wrap [data-quick-mode='voice'] strong", t("capture_voice"));
  setText("#quick-sheet-wrap [data-quick-mode='voice'] small", t("quick_speak_freely"));
  setText("#quick-sheet-wrap [data-quick-mode='text'] strong", t("capture_text"));
  setText("#quick-sheet-wrap [data-quick-mode='text'] small", t("quick_write_thought"));
  setText("#quick-sheet-wrap [data-quick-mode='image'] strong", t("capture_image"));
  setText("#quick-sheet-wrap [data-quick-mode='image'] small", t("quick_capture_page"));
  setText("#books-sheet-wrap [data-group-create] strong", t("new_group"));
  setText("#books-sheet-wrap [data-group-rename] strong", t("rename_group"));
  setText("#books-sheet-wrap [data-books-delete-selected] strong", t("delete_books_label"));

  setText("[data-tab='home'] span", t("nav_home"));
  setText("[data-tab='bookshelf'] span", t("nav_books"));
  setText("[data-tab='capture'] span", t("nav_capture"));
  setText("[data-tab='profile'] span", t("nav_profile"));

  if (!state.processedText || state.processedText === localizedDefaults.processedText.en || state.processedText === localizedDefaults.processedText.zh) {
    state.processedText = localizeText(localizedDefaults.processedText.en, localizedDefaults.processedText.zh);
  }
  renderBookFinishMeta();
}
function maskToken(token) {
  if (!token) {
    return t("ai_local_preview");
  }
  const preview = token.length > 8 ? `${token.slice(0, 4)}...${token.slice(-4)}` : token;
  return tp("ai_connected", { token: preview });
}

function renderAiSettings() {
  if (profileAiPanel) {
    profileAiPanel.hidden = !state.profileAiOpen;
  }
  if (profileAiSummary) {
    profileAiSummary.textContent = maskToken(state.aiConfig.token);
  }
  if (aiEndpointInput && document.activeElement !== aiEndpointInput) {
    aiEndpointInput.value = state.aiConfig.endpoint;
  }
  if (aiModelInput && document.activeElement !== aiModelInput) {
    aiModelInput.value = state.aiConfig.model;
  }
  if (aiTokenInput && document.activeElement !== aiTokenInput) {
    aiTokenInput.value = state.aiConfig.token;
  }
  if (aiSettingsStatus) {
    aiSettingsStatus.textContent = state.aiStatus || t("ai_hint");
  }
}

async function testAiConnection() {
  updateAiConfigFromInputs();
  if (!hasLiveAiConfig()) {
    state.aiStatus = t("ai_fill_first");
    renderAiSettings();
    return;
  }
  state.aiStatus = t("ai_testing");
  renderAiSettings();
  try {
    const reply = await callAi([
      { role: "system", content: "Reply with only: connection ok" },
      { role: "user", content: "Check the connection." }
    ], "connection ok");
    state.aiStatus = reply || "connection ok";
  } catch (error) {
    const message = String(error?.message || "");
    const httpMatch = message.match(/^ai-http-(\d+)(?:::([\s\S]+))?$/);
    if (httpMatch) {
      const status = httpMatch[1];
      const detail = (httpMatch[2] || t("ai_test_failed")).trim();
      state.aiStatus = tp("ai_test_failed_status", { status, detail });
    } else {
      state.aiStatus = t("ai_test_failed_network");
    }
  }
  renderAiSettings();
}

function saveAiSettings() {
  updateAiConfigFromInputs();
  persistAiConfig();
  state.aiStatus = hasLiveAiConfig() ? t("ai_saved") : t("ai_hint");
  renderAiSettings();
}

async function generateSuggestionsWithAi(sourceText) {
  const fallback = buildSuggestionSet(sourceText);
  if (!hasLiveAiConfig()) {
    activeSuggestionCopy = fallback;
    return;
  }

  try {
    const reply = await callAi([
      {
        role: "system",
        content: "You generate JSON with keys summarize, expand, question. Each value must contain title and body."
      },
      {
        role: "user",
        content: `Source note:\n${sourceText}\n\nReturn concise JSON only.`
      }
    ], JSON.stringify(fallback));
    const parsed = JSON.parse(reply);
    activeSuggestionCopy = {
      summarize: parsed.summarize || fallback.summarize,
      expand: parsed.expand || fallback.expand,
      question: parsed.question || fallback.question
    };
  } catch (error) {
    activeSuggestionCopy = fallback;
  }
}

async function polishCaptureTextWithAi(sourceText, modeLabel = "reading note") {
  const cleaned = sourceText.replace(/\s+/g, " ").trim();
  if (!cleaned) {
    return "";
  }
  if (!hasLiveAiConfig()) {
    return cleaned;
  }
  try {
    const reply = await callAi([
      {
        role: "system",
        content: "You polish reading notes. Keep the original meaning, remove noise, keep it concise, and return only the improved text."
      },
      {
        role: "user",
        content: `Polish this ${modeLabel}:\n${cleaned}`
      }
    ], cleaned);
    return reply || cleaned;
  } catch (error) {
    return cleaned;
  }
}

function renderProfilePreferences() {
  if (profilePreferencesPanel) {
    profilePreferencesPanel.hidden = !state.profilePreferencesOpen;
  }
  if (profileLanguagePanel) {
    profileLanguagePanel.hidden = !state.profileLanguageOpen;
  }
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === state.profileLanguage);
  });
  const languageLabel = state.profileLanguage === "zh" ? "中文" : t("language_english");
  if (profilePreferencesSummary) {
    profilePreferencesSummary.textContent = languageLabel;
  }
  if (profileLanguageSummary) {
    profileLanguageSummary.textContent = languageLabel;
  }
  applyLanguage();
  renderAiSettings();
}

function appendChatMessage(text, self = false) {
  state.chatMessages.push({
    id: `chat-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    role: self ? "self" : "ai",
    text,
    zhText: text
  });
  renderChatMessages();
  scrollChatToBottom("smooth");
}

document.addEventListener("click", async (event) => {
  if (homeNotesSuppressClick) {
    const bubble = event.target.closest(".home-note-bubble");
    if (bubble) {
      event.preventDefault();
      homeNotesSuppressClick = false;
      return;
    }
    homeNotesSuppressClick = false;
  }

  if (
    state.activeBookNoteMenuId
    && !event.target.closest("[data-add-note-book]")
    && !event.target.closest("[data-book-note-menu]")
    && !event.target.closest("[data-book-note-mode]")
  ) {
    closeBookNoteMenu();
  }

  if (
    state.bookFinishEditorOpen
    && !event.target.closest("[data-finish-wrap]")
  ) {
    toggleBookFinishEditor(false);
  }

  if (
    state.activeNoteActionId
    && !event.target.closest("[data-note-item]")
    && !event.target.closest("[data-note-action-menu]")
  ) {
    closeNoteActionMenu();
  }

  const chatSaveSelected = event.target.closest("#chat-save-selected-button");
  if (chatSaveSelected) {
    saveSelectedChatMessages();
    return;
  }

  const chatDeleteSelected = event.target.closest("#chat-delete-selected-button");
  if (chatDeleteSelected) {
    deleteSelectedChatMessages();
    return;
  }

  const chatPersonaButton = event.target.closest("[data-chat-persona]");
  if (chatPersonaButton) {
    state.activeMomoPersona = chatPersonaButton.dataset.chatPersona || "humor";
    renderChatPersonaOptions();
    return;
  }

  const voiceToggle = event.target.closest("#voice-record-toggle");
  if (voiceToggle) {
    await toggleVoiceCapture();
    return;
  }

  const voiceProcess = event.target.closest("#voice-process-button");
  if (voiceProcess) {
    if (state.isRecording) {
      await stopVoiceCapture();
    }
    processVoiceCapture();
    return;
  }

  const textProcess = event.target.closest("#text-process-button");
  if (textProcess) {
    processTextCapture();
    return;
  }

  const textAiModeButton = event.target.closest("[data-text-ai-mode]");
  if (textAiModeButton) {
    await generateInlineTextAi(textAiModeButton.dataset.textAiMode || "summarize");
    return;
  }

  const textAiRegenerate = event.target.closest("#text-ai-regenerate-button");
  if (textAiRegenerate) {
    await generateInlineTextAi(state.textAiMode || "summarize");
    return;
  }

  const textAiCancel = event.target.closest("#text-ai-cancel-button");
  if (textAiCancel) {
    cancelInlineTextAi();
    return;
  }

  const textAiAccept = event.target.closest("#text-ai-accept-button");
  if (textAiAccept) {
    acceptInlineTextAi();
    return;
  }

  const textDirectSave = event.target.closest("#text-direct-save-button");
  if (textDirectSave) {
    openTextSavePicker();
    return;
  }

  const textAiSave = event.target.closest("#text-ai-save-button");
  if (textAiSave) {
    saveInlineTextAiToBook();
    return;
  }

  const textAiNewBook = event.target.closest("#text-ai-new-book-button");
  if (textAiNewBook) {
    const text = (captureTextarea?.value || state.textDraft || "").trim();
    state.pendingNewBookSource = "text";
    state.pendingBookNote = {
      source: "text",
      text
    };
    navigate("book-add");
    return;
  }

  const textEditSave = event.target.closest("#text-edit-save-button");
  if (textEditSave) {
    saveEditedTextNote();
    return;
  }

  const imagePicker = event.target.closest("#capture-image-picker");
  if (imagePicker) {
    if (captureImageInput) {
      captureImageInput.value = "";
      captureImageInput.click();
    }
    return;
  }

  const imageProcess = event.target.closest("#image-process-button");
  if (imageProcess) {
    await processImageCapture();
    return;
  }

  const imagePolish = event.target.closest("#image-polish-button");
  if (imagePolish) {
    polishImageText();
    return;
  }

  const imageSave = event.target.closest("#image-save-button");
  if (imageSave) {
    saveImageTextToBook();
    return;
  }

  const processingSave = event.target.closest("#processing-save-button");
  if (processingSave) {
    saveProcessedCaptureToBook();
    return;
  }

  const processingNewBook = event.target.closest("#processing-new-book-button");
  if (processingNewBook) {
    state.pendingNewBookSource = state.pendingBookNote?.source || state.captureSource;
    navigate("book-add");
    return;
  }

  const bookCoverButton = event.target.closest("#book-cover-picker");
  if (bookCoverButton) {
    if (bookCoverInput) {
      bookCoverInput.value = "";
      bookCoverInput.click();
    }
    return;
  }

  const bookSaveButton = event.target.closest("#book-save-button");
  if (bookSaveButton) {
    saveNewBook();
    return;
  }

  const profileSectionToggle = event.target.closest("[data-profile-section-toggle='preferences']");
  if (profileSectionToggle) {
    state.profilePreferencesOpen = !state.profilePreferencesOpen;
    if (!state.profilePreferencesOpen) {
      state.profileLanguageOpen = false;
    }
    renderProfilePreferences();
    return;
  }

  const profileLanguageToggle = event.target.closest("[data-profile-section-toggle='language']");
  if (profileLanguageToggle) {
    state.profileLanguageOpen = !state.profileLanguageOpen;
    renderProfilePreferences();
    return;
  }

  const profileAiToggle = event.target.closest("[data-profile-section-toggle='ai-settings']");
  if (profileAiToggle) {
    state.profileAiOpen = !state.profileAiOpen;
    renderAiSettings();
    return;
  }

  const languageButton = event.target.closest("[data-language]");
  if (languageButton) {
    state.profileLanguage = languageButton.dataset.language || "en";
    persistLanguage();
    state.aiStatus = hasLiveAiConfig() ? state.aiStatus : t("ai_hint");
    renderProfilePreferences();
    renderHomeMoments();
    renderHomeNotesOverview();
    renderBookshelf();
    renderSearch();
    renderBookNotesSearch();
    renderProcessingState();
    updateVoiceUI();
    updateImageUI();
    return;
  }

  const aiTestButton = event.target.closest("#ai-settings-test-button");
  if (aiTestButton) {
    await testAiConnection();
    return;
  }

  const aiSaveButton = event.target.closest("#ai-settings-save-button");
  if (aiSaveButton) {
    saveAiSettings();
    return;
  }

  const bookshelfToggle = event.target.closest("[data-booksheet-toggle]");
  if (bookshelfToggle) {
    toggleBooksSheet();
    return;
  }

  const booksEditToggle = event.target.closest("[data-books-edit-toggle]");
  if (booksEditToggle) {
    startBooksManageMode();
    hideBooksSheet();
    return;
  }

  const booksDeleteButton = event.target.closest("[data-books-delete-selected]");
  if (booksDeleteButton) {
    state.activeFilter = state.activeFilter === "delete" ? "all" : "delete";
    resetBooksDragState();
    hideBooksSheet();
    renderBookshelf();
    return;
  }

  const groupCreateButton = event.target.closest("[data-group-create]");
  if (groupCreateButton) {
    createBooksGroup();
    hideBooksSheet();
    return;
  }

  const groupRenameButton = event.target.closest("[data-group-rename]");
  if (groupRenameButton) {
    renameBooksGroup();
    hideBooksSheet();
    return;
  }

  if (event.target.closest("#books-sheet-backdrop")) {
    hideBooksSheet();
    return;
  }

  const deleteBookButton = event.target.closest("[data-delete-book]");
  if (deleteBookButton) {
    state.deletedBooks = [...new Set([...state.deletedBooks, deleteBookButton.dataset.deleteBook])];
    resetBooksDragState();
    populateImageBookSelect();
    renderBookshelf();
    return;
  }

  const addNoteButton = event.target.closest("[data-add-note-book]");
  if (addNoteButton) {
    toggleBookNoteMenu(addNoteButton.dataset.addNoteBook);
    return;
  }

  const addNoteModeButton = event.target.closest("[data-book-note-mode]");
  if (addNoteModeButton) {
    startBookNoteCapture(
      addNoteModeButton.dataset.bookNoteBook,
      addNoteModeButton.dataset.bookNoteMode || "text"
    );
    return;
  }

  const noteImageButton = event.target.closest("[data-note-image]");
  if (noteImageButton) {
    window.clearTimeout(noteLongPressTimer);
    noteLongPressPointerId = null;
    noteLongPressTargetId = "";
    noteLongPressTriggered = false;
    openImageLightbox(noteImageButton.dataset.noteImage);
    return;
  }

  const finishToggleButton = event.target.closest("[data-finish-toggle]");
  if (finishToggleButton) {
    toggleBookFinishEditor();
    return;
  }

  const finishSaveButton = event.target.closest("[data-finish-save]");
  if (finishSaveButton) {
    saveBookFinishDate();
    return;
  }

  if (event.target.closest("#image-lightbox") && !event.target.closest("#image-lightbox-image")) {
    closeImageLightbox();
    return;
  }

  const noteToggleButton = event.target.closest("[data-note-toggle]");
  if (noteToggleButton) {
    if (state.activeNoteActionId === noteToggleButton.dataset.noteToggle) {
      return;
    }
    toggleNoteExpanded(noteToggleButton.dataset.noteToggle);
    return;
  }

  const noteEditButton = event.target.closest("[data-note-edit]");
  if (noteEditButton) {
    startNoteEditing(noteEditButton.dataset.noteEdit);
    return;
  }

  const noteDeleteButton = event.target.closest("[data-note-delete]");
  if (noteDeleteButton) {
    deleteBookNote(noteDeleteButton.dataset.noteDelete);
    return;
  }

  const bookRow = event.target.closest("[data-book-row]");
  if (bookRow) {
    if (suppressNextBookRowTap) {
      suppressNextBookRowTap = false;
      return;
    }
    if (bookLongPressTriggered) {
      bookLongPressTriggered = false;
      return;
    }
    toggleBookSelection(bookRow.dataset.book);
    return;
  }

  const groupBlock = event.target.closest("[data-group-name]");
  if (groupBlock) {
    if (state.draggingBookId) {
      finishBooksDrag();
      return;
    }
    selectBooksGroup(groupBlock.dataset.groupName);
    return;
  }

  const bookshelfScreen = event.target.closest("#screen-bookshelf");
  if (
    bookshelfScreen &&
    state.activeFilter === "delete" &&
    !event.target.closest("[data-book-row]") &&
    !event.target.closest("[data-group-name]") &&
    !event.target.closest(".searchbox") &&
    !event.target.closest(".page-chrome") &&
    !event.target.closest("#books-sheet-wrap")
  ) {
    state.activeFilter = "all";
    resetBooksDragState();
    renderBookshelf();
    return;
  }

  const targetButton = event.target.closest("[data-target]");
  if (targetButton) {
    const bookId = targetButton.dataset.book;
    if (bookId) {
      state.activeBookId = bookId;
      syncBookBindings();
    }
    navigate(targetButton.dataset.target);
    return;
  }

  const quickToggle = event.target.closest("[data-quick-toggle]");
  if (quickToggle) {
    toggleQuickSheet();
    return;
  }

  const quickModeButton = event.target.closest("[data-quick-mode]");
  if (quickModeButton) {
    openFreshCapture(quickModeButton.dataset.quickMode || "text");
    return;
  }

  if (event.target.closest("#quick-sheet-backdrop")) {
    hideQuickSheet();
    return;
  }

  const backButton = event.target.closest("[data-back]");
  if (backButton) {
    goBack();
    return;
  }

  const tabButton = event.target.closest("[data-book-tab]");
  if (tabButton) {
    setBookTab(tabButton.dataset.bookTab);
    return;
  }

  const homeDot = event.target.closest("[data-home-dot]");
  if (homeDot) {
    setHomeSlide(Number(homeDot.dataset.homeDot));
    return;
  }

  const suggestionButton = event.target.closest("[data-suggestion]");
  if (suggestionButton) {
    setSuggestion(suggestionButton.dataset.suggestion);
    return;
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    setSearchFilter(filterButton.dataset.filter);
    return;
  }
});

if (searchInput) {
  searchInput.addEventListener("input", renderSearch);
}

if (booksSearchInput) {
  booksSearchInput.addEventListener("input", () => {
    state.booksQuery = booksSearchInput.value.trim();
    renderBookshelf();
  });
}

if (bookNotesSearchInput) {
  bookNotesSearchInput.addEventListener("input", () => {
    state.bookNotesQuery = bookNotesSearchInput.value.trim();
    renderBookNotesSearch();
  });
}

if (captureTextarea) {
  state.textDraft = captureTextarea.value.trim();
  captureTextarea.addEventListener("input", () => {
    state.textDraft = captureTextarea.value.trim();
  state.textAiOriginal = "";
  state.textAiResult = "";
  state.textAiGenerated = false;
  state.textAiAccepted = false;
  state.textAiAccepting = false;
  state.textSavePickerOpen = false;
    state.textAiSaveStatus = "";
    state.pendingBookNote = null;
    renderTextAiInline();
  });
}

if (captureImageInput) {
  captureImageInput.addEventListener("change", async () => {
    const file = captureImageInput.files?.[0];
    if (!file) {
      return;
    }
    try {
      await setSelectedImage(file);
    } catch (error) {
      state.imageStoredUrl = "";
      state.imageStatus = localizeText("Image selected, but preview storage failed. You can still continue.", "图片已选中，但预览存储失败，你仍然可以继续。");
      updateImageUI();
    }
  });
}

if (imageTextEditor) {
  imageTextEditor.addEventListener("input", () => {
    state.imageText = imageTextEditor.value;
    updateImageUI();
  });
}

if (imageBookSelect) {
  imageBookSelect.addEventListener("change", () => {
    state.activeBookId = imageBookSelect.value;
  });
}

if (processingBookSelect) {
  processingBookSelect.addEventListener("change", () => {
    state.processingSaveBookId = processingBookSelect.value;
    state.processingSaveStatus = "";
    updateProcessingSaveUI();
  });
}

if (textAiBookSelect) {
  textAiBookSelect.addEventListener("change", () => {
    state.processingSaveBookId = textAiBookSelect.value;
    state.textAiSaveStatus = "";
    renderTextAiInline();
  });
}

if (bookCoverInput) {
  bookCoverInput.addEventListener("change", () => {
    const file = bookCoverInput.files?.[0];
    if (!file) {
      return;
    }
    const previewUrl = URL.createObjectURL(file);
    if (bookCoverPreview) {
      bookCoverPreview.src = previewUrl;
    }
    if (bookCoverName) {
      bookCoverName.textContent = file.name;
    }
    if (bookCoverCard) {
      bookCoverCard.hidden = false;
    }
  });
}

if (chatForm && chatInput) {
  chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = chatInput.value.trim();
    if (!message) {
      return;
    }
    state.chatVoiceTranscript = "";
    state.chatVoiceStatus = "";
    updateChatVoiceUI();
    appendChatMessage(message, true);
    chatInput.value = "";
    const reply = await generateChatReply(message);
    appendChatMessage(reply, false);
  });
}

if (chatVoiceButton) {
  chatVoiceButton.addEventListener("click", () => {
    toggleChatVoiceInput();
  });
}


document.addEventListener("pointerdown", (event) => {
  const homeBubble = event.target.closest(".home-note-bubble");
  const homeLane = event.target.closest(".home-notes-bubbles");
  if (homeBubble && homeLane && !state.draggingBookId) {
    activeHomeNotesScroller = homeLane;
    homeNotesPointerId = event.pointerId;
    homeNotesStartX = event.clientX;
    homeNotesStartY = event.clientY;
    homeNotesStartScrollLeft = homeLane.scrollLeft;
    homeNotesDragging = false;
    homeLane.classList.remove("is-dragging");
  }

  const chatMessage = event.target.closest("[data-chat-message]");
  if (chatMessage && !event.target.closest(".chat-row__avatar")) {
    chatTapPointerId = event.pointerId;
    chatTapStartX = event.clientX;
    chatTapStartY = event.clientY;
    chatTapTargetId = chatMessage.dataset.chatMessage || "";
    chatTapMoved = false;
  }

  if (
    event.target.closest("[data-note-image]")
    || event.target.closest("[data-note-action-menu]")
    || event.target.closest("[data-note-edit]")
    || event.target.closest("[data-note-delete]")
  ) {
    return;
  }

  const noteItem = event.target.closest("[data-note-item]");
  if (noteItem && !event.target.closest("[data-note-image]")) {
    noteLongPressPointerId = event.pointerId;
    noteLongPressStartX = event.clientX;
    noteLongPressStartY = event.clientY;
    noteLongPressTargetId = noteItem.dataset.noteId || "";
    noteLongPressTriggered = false;
    window.clearTimeout(noteLongPressTimer);
    noteLongPressTimer = window.setTimeout(() => {
      if (!noteLongPressTargetId) {
        return;
      }
      state.activeNoteActionId = noteLongPressTargetId;
      noteLongPressTriggered = true;
      renderBookNotes();
    }, 430);
  }

  if (
    event.target.closest("[data-delete-book]")
    || event.target.closest("[data-add-note-book]")
    || event.target.closest("[data-book-note-menu]")
  ) {
    return;
  }
  const bookRow = event.target.closest("[data-book-row]");
  if (!bookRow) {
    return;
  }
  if (state.activeFilter === "delete") {
    return;
  }
  const { book } = bookRow.dataset;
  beginBookLongPress(bookRow, book, event.clientX, event.clientY, event.pointerId, null);
});

document.addEventListener("pointermove", (event) => {
  if (homeNotesPointerId === event.pointerId && activeHomeNotesScroller) {
    const deltaX = event.clientX - homeNotesStartX;
    const deltaY = event.clientY - homeNotesStartY;
    if (!homeNotesDragging && Math.abs(deltaX) > 6 && Math.abs(deltaX) > Math.abs(deltaY)) {
      homeNotesDragging = true;
      homeNotesSuppressClick = true;
      activeHomeNotesScroller.classList.add("is-dragging");
    }
    if (homeNotesDragging) {
      activeHomeNotesScroller.scrollLeft = homeNotesStartScrollLeft - deltaX;
      event.preventDefault();
    }
  }

  if (chatTapPointerId === event.pointerId) {
    const moved = Math.abs(event.clientX - chatTapStartX) > 10 || Math.abs(event.clientY - chatTapStartY) > 10;
    if (moved) {
      chatTapMoved = true;
    }
  }

  if (noteLongPressPointerId === event.pointerId) {
    const moved = Math.abs(event.clientX - noteLongPressStartX) > 10 || Math.abs(event.clientY - noteLongPressStartY) > 10;
    if (moved) {
      window.clearTimeout(noteLongPressTimer);
    }
  }

  if (draggingPointerId !== event.pointerId) {
    return;
  }
  if (state.draggingBookId) {
    event.preventDefault();
    syncDraggingBookVisual(event.clientX, event.clientY);
    updateBooksDragTargetFromPoint(event.clientX, event.clientY);
    scheduleBooksDragAutoScroll(event.clientX, event.clientY);
    return;
  }
  const moved = Math.abs(event.clientX - dragStartX) > 10 || Math.abs(event.clientY - dragStartY) > 10;
  if (moved) {
    cancelBookLongPressPressing();
  }
});

document.addEventListener("pointerup", (event) => {
  if (homeNotesPointerId === event.pointerId) {
    endHomeNotesDrag();
  }

  if (chatTapPointerId === event.pointerId) {
    if (!chatTapMoved && chatTapTargetId) {
      toggleChatMessageSelection(chatTapTargetId);
    }
    chatTapPointerId = null;
    chatTapTargetId = "";
    chatTapMoved = false;
  }

  if (noteLongPressPointerId === event.pointerId) {
    window.clearTimeout(noteLongPressTimer);
    noteLongPressPointerId = null;
    noteLongPressTargetId = "";
    window.setTimeout(() => {
      noteLongPressTriggered = false;
    }, 0);
  }

  cancelBookLongPressPressing();
  if (state.draggingBookId) {
    finishBooksDrag();
    return;
  }
  draggingPointerId = null;
  window.setTimeout(() => {
    bookLongPressTriggered = false;
  }, 0);
});

document.addEventListener("pointercancel", () => {
  endHomeNotesDrag();
  chatTapPointerId = null;
  chatTapTargetId = "";
  chatTapMoved = false;
  noteLongPressPointerId = null;
  noteLongPressTargetId = "";
  noteLongPressTriggered = false;
  window.clearTimeout(noteLongPressTimer);
  if (state.draggingBookId) {
    resetBooksDragState();
    renderBookshelf();
  }
  cancelBookLongPressPressing();
  draggingPointerId = null;
  bookLongPressTriggered = false;
});

document.addEventListener("touchstart", (event) => {
  if (event.touches.length !== 1 || state.draggingBookId) {
    return;
  }

  const touch = event.changedTouches[0];
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  const bookRow = target?.closest?.("[data-book-row]");
  if (!bookRow || state.activeFilter === "delete") {
    return;
  }

  if (
    target.closest?.("[data-delete-book]")
    || target.closest?.("[data-add-note-book]")
    || target.closest?.("[data-book-note-menu]")
  ) {
    return;
  }

  const { book } = bookRow.dataset;
  beginBookLongPress(bookRow, book, touch.clientX, touch.clientY, null, touch.identifier);
}, { passive: true });

document.addEventListener("touchmove", (event) => {
  const trackedTouch = findTrackedTouch(event.touches);
  if (!trackedTouch) {
    return;
  }

  if (state.draggingBookId) {
    event.preventDefault();
    syncDraggingBookVisual(trackedTouch.clientX, trackedTouch.clientY);
    updateBooksDragTargetFromPoint(trackedTouch.clientX, trackedTouch.clientY);
    scheduleBooksDragAutoScroll(trackedTouch.clientX, trackedTouch.clientY);
    return;
  }

  const moved = Math.abs(trackedTouch.clientX - dragStartX) > 10 || Math.abs(trackedTouch.clientY - dragStartY) > 10;
  if (moved) {
    cancelBookLongPressPressing();
    draggingTouchIdentifier = null;
  }
}, { passive: false });

document.addEventListener("touchend", (event) => {
  const trackedTouch = findTrackedTouch(event.changedTouches);
  if (!trackedTouch) {
    return;
  }

  if (state.draggingBookId) {
    event.preventDefault();
    finishBooksDrag();
    return;
  }

  cancelBookLongPressPressing();
  draggingTouchIdentifier = null;
  window.setTimeout(() => {
    bookLongPressTriggered = false;
  }, 0);
}, { passive: false });

document.addEventListener("touchcancel", (event) => {
  const trackedTouch = findTrackedTouch(event.changedTouches);
  if (!trackedTouch && draggingTouchIdentifier === null && !state.draggingBookId) {
    return;
  }

  if (state.draggingBookId) {
    resetBooksDragState();
    renderBookshelf();
  } else {
    cancelBookLongPressPressing();
  }
  draggingTouchIdentifier = null;
  bookLongPressTriggered = false;
}, { passive: true });

document.addEventListener("selectstart", (event) => {
  if (state.draggingBookId || event.target.closest?.("[data-book-row]")) {
    event.preventDefault();
  }
});

renderHomeMoments();
renderHomeNotesOverview();
renderBookshelf();
renderSearch();
renderBookNotesSearch();
state.profileLanguage = getStoredLanguage();
state.aiConfig = getStoredAiConfig();
syncBookBindings();
syncCollectionMetrics();
state.aiStatus = t("ai_hint");
renderProfilePreferences();
renderProcessingState();
setBookTab("notes");
generateSuggestionsWithAi(state.processedText).then(() => {
  setSuggestion(state.suggestion);
});
setSuggestion("summarize");
setHomeSlide(0);
setActiveScreen("home", false);
renderChatMessages();
updateVoiceUI();
updateImageUI();
populateImageBookSelect();
populateTextAiBookSelect();
populateProcessingBookSelect();
renderTextAiInline();
syncViewportHeight();

window.addEventListener("resize", syncViewportHeight);
window.visualViewport?.addEventListener("resize", syncViewportHeight);
window.visualViewport?.addEventListener("scroll", syncViewportHeight);
document.addEventListener("focusin", syncViewportHeight);
document.addEventListener("focusout", () => {
  window.setTimeout(syncViewportHeight, 0);
});







