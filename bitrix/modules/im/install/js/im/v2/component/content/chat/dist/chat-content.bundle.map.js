{"version":3,"file":"chat-content.bundle.map.js","names":["this","BX","Messenger","v2","Component","exports","im_v2_component_dialog_chat","im_v2_component_textarea","im_v2_lib_logger","im_v2_lib_localStorage","im_v2_lib_theme","im_v2_provider_service","im_v2_component_entitySelector","im_v2_lib_utils","im_v2_lib_call","im_public","im_v2_component_elements","im_v2_const","im_v2_component_sidebar","main_core","main_core_events","INPUT_PADDING","EditableChatTitle","name","components","ChatTitle","props","dialogId","type","String","required","emits","data","isEditing","inputWidth","showEditIcon","chatTitle","computed","dialog","$store","getters","canBeRenamed","extranet","ChatOption","rename","inputStyle","width","watch","length","mounted","methods","onTitleClick","$nextTick","then","$refs","focus","onNewTitleSubmit","nameNotChanged","$emit","onEditCancel","template","ChatHeader","Avatar","AddToChat","default","sidebarOpened","Boolean","showAddToChatPopup","AvatarSize","user","isInited","inited","isUser","DialogType","isChat","avatarStyle","backgroundImage","avatar","chatId","dialogDescription","Loc","getMessagePlural","userCounter","userLink","Utils","getProfileLink","userLastOnline","chatCanBeCalled","CallManager","getInstance","toggleRightPanel","onMembersClick","EventEmitter","emit","EventType","sidebar","open","detailBlock","SidebarDetailBlock","main","newTitle","getChatService","renameChat","catch","UI","Notification","Center","notify","content","loc","chatService","ChatService","openInvitePopup","startVideoCall","phraseCode","replacements","$Bitrix","getMessage","SidebarWrapper","ChatSidebar","sidebarDetailBlock","onClickBack","EVENT_NAMESPACE","_observer","babelHelpers","classPrivateFieldLooseKey","_textareaHeight","_initObserver","ResizeManager","constructor","super","Object","defineProperty","value","_initObserver2","writable","setEventNamespace","classPrivateFieldLooseBase","observeTextarea","element","observe","clientHeight","unobserveTextarea","unobserve","ResizeObserver","entries","forEach","entry","_entry$borderBoxSize","height","borderBoxSize","blockSize","Type","isNumber","events","onHeightChange","newHeight","CHAT_HEADER_HEIGHT","ChatContent","ChatDialog","ChatTextarea","directives","binding","instance","textareaResizeManager","beforeUnmount","entityId","contextMessageId","Number","needSidebarTransition","textareaHeight","layout","sidebarTransitionName","backgroundStyle","ThemeManager","getCurrentBackgroundStyle","dialogContainerStyle","newValue","oldValue","Logger","warn","onChatChange","resetSidebarDetailState","saveSidebarOpenedState","created","restoreSidebarOpenState","initTextareaResizeManager","subscribe","onSidebarOpen","close","onSidebarClose","unsubscribe","loading","contextId","loadChatWithContext","loadChat","error","code","showNotification","console","openChat","loadChatWithMessages","toggleSidebar","eventData","sidebarOpenState","LocalStorageManager","get","LocalStorageKey","WRITE_TO_STORAGE_TIMEOUT","clearTimeout","saveSidebarStateTimeout","setTimeout","set","event","getData","text","Content","Dialog","Lib","Provider","Service","EntitySelector","Elements","Const","Event"],"sources":["chat-content.bundle.js"],"mappings":"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"}