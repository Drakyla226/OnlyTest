{"version":3,"sources":["script.js"],"names":["BX","BXSGRE","iframe","errorBlock","mode","init","params","this","type","isNotEmptyString","errorBlockName","bind","delegate","event","submitForm","action","preventDefault","checkAll","currentTarget","processUserList","addCustomEvent","getEventId","eventData","getData","util","in_array","code","SocialnetworkUICommon","reload","listNode","userId","userNodeList","findChildren","className","i","length","e","getEventTarget","href","top","location","button","hideError","showButtonWait","form_name","value","ajax","submitAjax","document","forms","url","getAttribute","method","dataType","onsuccess","responseData","hideButtonWait","MESSAGE","URL","window","SidePanel","Instance","postMessageAll","data","ERROR_MESSAGE","showError","onfailure","message","input","input_list","parentNode","tag","checked","removeClass","addClass"],"mappings":"CAAA,WAEA,KAAMA,GAAGC,OAAQ,CAChB,OAGDD,GAAGC,QACFC,OAAQ,MACRC,WAAY,KACZC,KAAM,MAGPJ,GAAGC,OAAOI,KAAO,SAASC,GACzB,UAAW,GAAY,YACvB,CACC,UAAYA,EAAa,QAAK,YAC9B,CACCC,KAAKL,SAAWI,EAAOJ,OAGxB,GACCF,GAAGQ,KAAKC,iBAAiBH,EAAOI,iBAC7BV,GAAGM,EAAOI,gBAEd,CACCH,KAAKJ,WAAaH,GAAGM,EAAOI,gBAG7B,UAAYJ,EAAW,MAAK,YAC5B,CACCC,KAAKH,KAAOE,EAAOF,MAIrB,GAAIJ,GAAG,8CACP,CACCA,GAAGW,KAAKX,GAAG,8CAA+C,QAASA,GAAGY,SAAS,SAASC,GACvFN,KAAKO,WAAWD,GACfL,KAAM,KACNO,OAAQ,WAETF,EAAMG,kBACJT,OAGJ,GAAIP,GAAG,8CACP,CACCA,GAAGW,KAAKX,GAAG,8CAA+C,QAASA,GAAGY,SAAS,SAASC,GACvFN,KAAKO,WAAWD,GACfL,KAAM,KACNO,OAAQ,WAETF,EAAMG,kBACJT,OAGJ,GAAIP,GAAG,+CACP,CACCA,GAAGW,KAAKX,GAAG,+CAAgD,QAASA,GAAGY,SAAS,SAASC,GACxFN,KAAKO,WAAWD,GACfL,KAAM,MACNO,OAAQ,WAETF,EAAMG,kBACJT,OAGJ,GAAIP,GAAG,qCACP,CACCA,GAAGW,KAAKX,GAAG,qCAAsC,QAASA,GAAGY,SAAS,SAASC,GAC9EN,KAAKU,SAASJ,EAAMK,gBAClBX,OAGJ,GAAIP,GAAG,sCACP,CACCA,GAAGW,KAAKX,GAAG,sCAAuC,QAASA,GAAGY,SAAS,SAASC,GAC/EN,KAAKU,SAASJ,EAAMK,gBAClBX,OAGJA,KAAKY,gBAAgBnB,GAAG,wBACxBO,KAAKY,gBAAgBnB,GAAG,yBAExBA,GAAGoB,eAAe,6BAA8BpB,GAAGY,SAAS,SAASC,GACpE,GAAIA,EAAMQ,cAAgB,kBAC1B,CACC,IAAIC,EAAYT,EAAMU,UACtB,GACCvB,GAAGwB,KAAKC,SAASlB,KAAKH,MAAO,MAAO,SACjCJ,GAAGQ,KAAKC,iBAAiBa,EAAUI,OACnCJ,EAAUI,MAAQ,cAEtB,CACC1B,GAAG2B,sBAAsBC,YAGzBrB,QAGJP,GAAGC,OAAOkB,gBAAkB,SAASU,GAEpC,GAAI7B,GAAG6B,GACP,CACC,IAAIC,EAAS,KACb,GAAI9B,GAAG6B,GACP,CACC,IAAIE,EAAe/B,GAAGgC,aAAahC,GAAG6B,IAAaI,UAAW,oBAAqB,MACnF,IAAK,IAAIC,EAAI,EAAGC,EAASJ,EAAaI,OAAQD,EAAIC,EAAQD,IAC1D,CACClC,GAAGW,KAAKoB,EAAaG,GAAI,QAAS,SAASE,GAC1C,GAAIpC,GAAGQ,KAAKC,iBAAiBT,GAAGqC,eAAeD,GAAGE,MAClD,CACCC,IAAIC,SAASF,KAAOtC,GAAGqC,eAAeD,GAAGE,KAE1CF,EAAEpB,uBAOPhB,GAAGC,OAAOa,WAAa,SAASD,EAAOP,GAEtC,IACCE,EAAO,KACPO,EAAS,KAEV,UAAW,GAAY,YACvB,CACC,GAAIf,GAAGQ,KAAKC,iBAAiBH,EAAOE,MACpC,CACCA,EAAOF,EAAOE,KAGf,GAAIR,GAAGQ,KAAKC,iBAAiBH,EAAOS,QACpC,CACCA,EAAST,EAAOS,QAIlB,IACEP,IACGO,EAEL,CACC,OAAO,MAGR,IAAI0B,EAAS5B,EAAMK,cAEnBlB,GAAG2B,sBAAsBe,UAAUnC,KAAKJ,YACxCH,GAAG2B,sBAAsBgB,eAAeF,GAExC,IAAIG,EAAapC,GAAQ,MAAS,oBAAsB,gBAExD,GAAIR,GAAG,mBAAqBQ,GAC5B,CACCR,GAAG,mBAAqBQ,GAAMqC,MAAQ9B,EAGvCf,GAAG8C,KAAKC,WACPC,SAASC,MAAML,IAEdM,IAAKF,SAASC,MAAML,GAAWO,aAAa,UAC5CC,OAAQ,OACRC,SAAU,OACVC,UAAWtD,GAAGY,SAAS,SAAS2C,GAC/BvD,GAAG2B,sBAAsB6B,eAAef,GAExC,UACQc,EAAaE,SAAW,aAC5BF,EAAaE,SAAW,kBACjBF,EAAaG,KAAO,YAE/B,CACC,GAAIC,SAAWpB,IAAIoB,OACnB,CACCpB,IAAIC,SAASF,KAAOiB,EAAaG,QAGlC,CACCC,OAAOpB,IAAIvC,GAAG4D,UAAUC,SAASC,eAAeH,OAAQ,mBACvDjC,KAAOlB,GAAQ,MAAQ,wBAA0B,qBACjDuD,UAED/D,GAAG2B,sBAAsBC,eAGtB,UACG2B,EAAaE,SAAW,aAC5BF,EAAaE,SAAW,gBACjBF,EAAaS,eAAiB,aACrCT,EAAaS,cAAc7B,OAAS,EAExC,CACCnC,GAAG2B,sBAAsBsC,UAAUV,EAAaS,cAAezD,KAAKJ,cAEnEI,MACH2D,UAAWlE,GAAGY,SAAS,SAAS2C,GAC/BvD,GAAG2B,sBAAsB6B,eAAef,GACxCzC,GAAG2B,sBAAsBsC,UAAUjE,GAAGmE,QAAQ,qBAAsB5D,KAAKJ,aACvEI,QAIL,OAAO,OAGRP,GAAGC,OAAOgB,SAAW,SAASmD,GAC7B,IACClC,EAAI,KACJmC,EAAarE,GAAGgC,aAAaoC,EAAME,WAAWA,WAAWA,YAAcC,IAAK,SAAW,MACxF,IAAKH,EAAMI,QACX,CACC,IAAItC,EAAE,EAAGA,EAAEmC,EAAWlC,OAAQD,IAC9B,CACCmC,EAAWnC,GAAGsC,QAAU,MACxBxE,GAAGyE,YAAYJ,EAAWnC,GAAGoC,WAAWA,WAAWA,WAAY,2BAIjE,CACC,IAAIpC,EAAE,EAAGA,EAAEmC,EAAWlC,OAAQD,IAC9B,CACCmC,EAAWnC,GAAGsC,QAAU,KACxBxE,GAAG0E,SAASL,EAAWnC,GAAGoC,WAAWA,WAAWA,WAAY,0BAlO/D","file":""}