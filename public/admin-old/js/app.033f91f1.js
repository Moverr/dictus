(function (e) {
  function t(t) {
    for (
      var a, o, s = t[0], c = t[1], l = t[2], u = 0, d = [];
      u < s.length;
      u++
    )
      (o = s[u]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && d.push(i[o][0]),
        (i[o] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    f && f(t);
    while (d.length) d.shift()();
    return r.push.apply(r, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], a = !0, o = 1; o < n.length; o++) {
        var s = n[o];
        0 !== i[s] && (a = !1);
      }
      a && (r.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var a = {},
    o = { app: 0 },
    i = { app: 0 },
    r = [];
  function s(e) {
    return (
      c.p +
      "js/" +
      ({
        "setup-2fa": "setup-2fa",
        install: "install",
        settings_fields: "settings_fields",
        "date-cs-CZ-date-format-json": "date-cs-CZ-date-format-json",
        "date-de-DE-date-format-json": "date-de-DE-date-format-json",
        "date-fr-FR-date-format-json": "date-fr-FR-date-format-json",
        "date-it-IT-date-format-json": "date-it-IT-date-format-json",
        "date-ms-MY-date-format-json": "date-ms-MY-date-format-json",
        "date-nl-NL-date-format-json": "date-nl-NL-date-format-json",
        "date-pl-PL-date-format-json": "date-pl-PL-date-format-json",
        "date-pt-BR-date-format-json": "date-pt-BR-date-format-json",
        "date-ru-RU-date-format-json": "date-ru-RU-date-format-json",
        "date-sk-SK-date-format-json": "date-sk-SK-date-format-json",
        "date-zh-CN-date-format-json": "date-zh-CN-date-format-json",
        "lang-af-ZA-index-json": "lang-af-ZA-index-json",
        "lang-ar-SA-index-json": "lang-ar-SA-index-json",
        "lang-ca-ES-index-json": "lang-ca-ES-index-json",
        "lang-cs-CZ-index-json": "lang-cs-CZ-index-json",
        "lang-da-DK-index-json": "lang-da-DK-index-json",
        "lang-de-DE-index-json": "lang-de-DE-index-json",
        "lang-el-GR-index-json": "lang-el-GR-index-json",
        "lang-es-419-index-json": "lang-es-419-index-json",
        "lang-es-CL-index-json": "lang-es-CL-index-json",
        "lang-es-ES-index-json": "lang-es-ES-index-json",
        "lang-fi-FI-index-json": "lang-fi-FI-index-json",
        "lang-fr-FR-index-json": "lang-fr-FR-index-json",
        "lang-he-IL-index-json": "lang-he-IL-index-json",
        "lang-hu-HU-index-json": "lang-hu-HU-index-json",
        "lang-id-ID-index-json": "lang-id-ID-index-json",
        "lang-interfaces-af-ZA-interfaces-json":
          "lang-interfaces-af-ZA-interfaces-json",
        "lang-interfaces-af-ZA-layouts-json":
          "lang-interfaces-af-ZA-layouts-json",
        "lang-interfaces-ar-SA-interfaces-json":
          "lang-interfaces-ar-SA-interfaces-json",
        "lang-interfaces-ar-SA-layouts-json":
          "lang-interfaces-ar-SA-layouts-json",
        "lang-interfaces-ca-ES-interfaces-json":
          "lang-interfaces-ca-ES-interfaces-json",
        "lang-interfaces-ca-ES-layouts-json":
          "lang-interfaces-ca-ES-layouts-json",
        "lang-interfaces-cs-CZ-interfaces-json":
          "lang-interfaces-cs-CZ-interfaces-json",
        "lang-interfaces-cs-CZ-layouts-json":
          "lang-interfaces-cs-CZ-layouts-json",
        "lang-interfaces-da-DK-interfaces-json":
          "lang-interfaces-da-DK-interfaces-json",
        "lang-interfaces-da-DK-layouts-json":
          "lang-interfaces-da-DK-layouts-json",
        "lang-interfaces-de-DE-interfaces-json":
          "lang-interfaces-de-DE-interfaces-json",
        "lang-interfaces-de-DE-layouts-json":
          "lang-interfaces-de-DE-layouts-json",
        "lang-interfaces-el-GR-interfaces-json":
          "lang-interfaces-el-GR-interfaces-json",
        "lang-interfaces-el-GR-layouts-json":
          "lang-interfaces-el-GR-layouts-json",
        "lang-interfaces-es-419-interfaces-json":
          "lang-interfaces-es-419-interfaces-json",
        "lang-interfaces-es-419-layouts-json":
          "lang-interfaces-es-419-layouts-json",
        "lang-interfaces-es-CL-interfaces-json":
          "lang-interfaces-es-CL-interfaces-json",
        "lang-interfaces-es-CL-layouts-json":
          "lang-interfaces-es-CL-layouts-json",
        "lang-interfaces-es-ES-interfaces-json":
          "lang-interfaces-es-ES-interfaces-json",
        "lang-interfaces-es-ES-layouts-json":
          "lang-interfaces-es-ES-layouts-json",
        "lang-interfaces-fi-FI-interfaces-json":
          "lang-interfaces-fi-FI-interfaces-json",
        "lang-interfaces-fi-FI-layouts-json":
          "lang-interfaces-fi-FI-layouts-json",
        "lang-interfaces-fr-FR-interfaces-json":
          "lang-interfaces-fr-FR-interfaces-json",
        "lang-interfaces-fr-FR-layouts-json":
          "lang-interfaces-fr-FR-layouts-json",
        "lang-interfaces-he-IL-interfaces-json":
          "lang-interfaces-he-IL-interfaces-json",
        "lang-interfaces-he-IL-layouts-json":
          "lang-interfaces-he-IL-layouts-json",
        "lang-interfaces-hu-HU-interfaces-json":
          "lang-interfaces-hu-HU-interfaces-json",
        "lang-interfaces-hu-HU-layouts-json":
          "lang-interfaces-hu-HU-layouts-json",
        "lang-interfaces-id-ID-interfaces-json":
          "lang-interfaces-id-ID-interfaces-json",
        "lang-interfaces-id-ID-layouts-json":
          "lang-interfaces-id-ID-layouts-json",
        "lang-interfaces-is-IS-interfaces-json":
          "lang-interfaces-is-IS-interfaces-json",
        "lang-interfaces-is-IS-layouts-json":
          "lang-interfaces-is-IS-layouts-json",
        "lang-interfaces-it-IT-interfaces-json":
          "lang-interfaces-it-IT-interfaces-json",
        "lang-interfaces-it-IT-layouts-json":
          "lang-interfaces-it-IT-layouts-json",
        "lang-interfaces-ja-JP-interfaces-json":
          "lang-interfaces-ja-JP-interfaces-json",
        "lang-interfaces-ja-JP-layouts-json":
          "lang-interfaces-ja-JP-layouts-json",
        "lang-interfaces-ko-KR-interfaces-json":
          "lang-interfaces-ko-KR-interfaces-json",
        "lang-interfaces-ko-KR-layouts-json":
          "lang-interfaces-ko-KR-layouts-json",
        "lang-interfaces-lt-LT-interfaces-json":
          "lang-interfaces-lt-LT-interfaces-json",
        "lang-interfaces-lt-LT-layouts-json":
          "lang-interfaces-lt-LT-layouts-json",
        "lang-interfaces-ms-MY-interfaces-json":
          "lang-interfaces-ms-MY-interfaces-json",
        "lang-interfaces-ms-MY-layouts-json":
          "lang-interfaces-ms-MY-layouts-json",
        "lang-interfaces-nl-NL-interfaces-json":
          "lang-interfaces-nl-NL-interfaces-json",
        "lang-interfaces-nl-NL-layouts-json":
          "lang-interfaces-nl-NL-layouts-json",
        "lang-interfaces-no-NO-interfaces-json":
          "lang-interfaces-no-NO-interfaces-json",
        "lang-interfaces-no-NO-layouts-json":
          "lang-interfaces-no-NO-layouts-json",
        "lang-interfaces-pl-PL-interfaces-json":
          "lang-interfaces-pl-PL-interfaces-json",
        "lang-interfaces-pl-PL-layouts-json":
          "lang-interfaces-pl-PL-layouts-json",
        "lang-interfaces-pt-BR-interfaces-json":
          "lang-interfaces-pt-BR-interfaces-json",
        "lang-interfaces-pt-BR-layouts-json":
          "lang-interfaces-pt-BR-layouts-json",
        "lang-interfaces-pt-PT-interfaces-json":
          "lang-interfaces-pt-PT-interfaces-json",
        "lang-interfaces-pt-PT-layouts-json":
          "lang-interfaces-pt-PT-layouts-json",
        "lang-interfaces-ro-RO-interfaces-json":
          "lang-interfaces-ro-RO-interfaces-json",
        "lang-interfaces-ro-RO-layouts-json":
          "lang-interfaces-ro-RO-layouts-json",
        "lang-interfaces-ru-RU-interfaces-json":
          "lang-interfaces-ru-RU-interfaces-json",
        "lang-interfaces-ru-RU-layouts-json":
          "lang-interfaces-ru-RU-layouts-json",
        "lang-interfaces-sk-SK-interfaces-json":
          "lang-interfaces-sk-SK-interfaces-json",
        "lang-interfaces-sk-SK-layouts-json":
          "lang-interfaces-sk-SK-layouts-json",
        "lang-interfaces-sr-SP-interfaces-json":
          "lang-interfaces-sr-SP-interfaces-json",
        "lang-interfaces-sr-SP-layouts-json":
          "lang-interfaces-sr-SP-layouts-json",
        "lang-interfaces-sv-SE-interfaces-json":
          "lang-interfaces-sv-SE-interfaces-json",
        "lang-interfaces-sv-SE-layouts-json":
          "lang-interfaces-sv-SE-layouts-json",
        "lang-interfaces-tr-TR-interfaces-json":
          "lang-interfaces-tr-TR-interfaces-json",
        "lang-interfaces-tr-TR-layouts-json":
          "lang-interfaces-tr-TR-layouts-json",
        "lang-interfaces-uk-UA-interfaces-json":
          "lang-interfaces-uk-UA-interfaces-json",
        "lang-interfaces-uk-UA-layouts-json":
          "lang-interfaces-uk-UA-layouts-json",
        "lang-interfaces-vi-VN-interfaces-json":
          "lang-interfaces-vi-VN-interfaces-json",
        "lang-interfaces-vi-VN-layouts-json":
          "lang-interfaces-vi-VN-layouts-json",
        "lang-interfaces-zh-CN-interfaces-json":
          "lang-interfaces-zh-CN-interfaces-json",
        "lang-interfaces-zh-CN-layouts-json":
          "lang-interfaces-zh-CN-layouts-json",
        "lang-interfaces-zh-TW-interfaces-json":
          "lang-interfaces-zh-TW-interfaces-json",
        "lang-interfaces-zh-TW-layouts-json":
          "lang-interfaces-zh-TW-layouts-json",
        "lang-is-IS-index-json": "lang-is-IS-index-json",
        "lang-it-IT-index-json": "lang-it-IT-index-json",
        "lang-ja-JP-index-json": "lang-ja-JP-index-json",
        "lang-ko-KR-index-json": "lang-ko-KR-index-json",
        "lang-lt-LT-index-json": "lang-lt-LT-index-json",
        "lang-ms-MY-index-json": "lang-ms-MY-index-json",
        "lang-nl-NL-index-json": "lang-nl-NL-index-json",
        "lang-no-NO-index-json": "lang-no-NO-index-json",
        "lang-pl-PL-index-json": "lang-pl-PL-index-json",
        "lang-pt-BR-index-json": "lang-pt-BR-index-json",
        "lang-pt-PT-index-json": "lang-pt-PT-index-json",
        "lang-ro-RO-index-json": "lang-ro-RO-index-json",
        "lang-ru-RU-index-json": "lang-ru-RU-index-json",
        "lang-sk-SK-index-json": "lang-sk-SK-index-json",
        "lang-sr-SP-index-json": "lang-sr-SP-index-json",
        "lang-sv-SE-index-json": "lang-sv-SE-index-json",
        "lang-tr-TR-index-json": "lang-tr-TR-index-json",
        "lang-uk-UA-index-json": "lang-uk-UA-index-json",
        "lang-vi-VN-index-json": "lang-vi-VN-index-json",
        "lang-zh-CN-index-json": "lang-zh-CN-index-json",
        "lang-zh-TW-index-json": "lang-zh-TW-index-json",
        "module-extension": "module-extension",
        "reset-password": "reset-password",
        settings_collections: "settings_collections",
        settings_global: "settings_global",
        settings_interfaces: "settings_interfaces",
        "settings_interfaces-debugger": "settings_interfaces-debugger",
        settings_permissions: "settings_permissions",
        settings_roles: "settings_roles",
        settings_settings: "settings_settings",
      }[e] || e) +
      "." +
      {
        "chunk-02ec76db": "b9f299ce",
        "chunk-03732e18": "4fb78c00",
        "chunk-0416f679": "850a0cbe",
        "chunk-073b9d5c": "578ce513",
        "chunk-08d9dee2": "fc654f6f",
        "chunk-0f4d6f6c": "8d8f8867",
        "chunk-1232e627": "a0e99cfa",
        "chunk-13145859": "c7c7a6fe",
        "chunk-15769862": "e1911805",
        "chunk-19f69ce6": "e080dc76",
        "chunk-1c6fa0e2": "3d5b1542",
        "chunk-22ce3451": "c864a94d",
        "chunk-22fe8d82": "ff439128",
        "chunk-24c13961": "fc6bfd59",
        "chunk-25f5bbaa": "7c4ef6ea",
        "chunk-264bd833": "ea8d576d",
        "chunk-29fe6f82": "7c784437",
        "chunk-2a043d5e": "2dbe02d9",
        "chunk-2b5a097e": "50ea325a",
        "chunk-2d0b21f1": "43beb891",
        "chunk-2d0c847f": "0254b5d3",
        "chunk-2d20f576": "a2b1b7c1",
        "chunk-0b3e4f54": "5322e981",
        "setup-2fa": "74bec230",
        "chunk-2d22497b": "a8478170",
        "chunk-2d50aa6f": "f4d0532e",
        "chunk-2e2e6d82": "d162b1db",
        "chunk-2fe9f608": "ae1a390a",
        "chunk-14f90334": "e9e271ed",
        install: "d012459f",
        settings_fields: "183e5429",
        "chunk-304578ba": "1281beea",
        "chunk-347cc0fb": "1b9c328d",
        "chunk-373d36ce": "c01bd634",
        "chunk-3a78ae2c": "ebd78b7d",
        "chunk-3bccb045": "de4b1cee",
        "chunk-3bccc2c9": "b5df8696",
        "chunk-3bcd24b1": "1d1e43e4",
        "chunk-3bcd5d3d": "22810c5b",
        "chunk-3bcd84a8": "026f7bcc",
        "chunk-3bcdaba5": "245e4fb1",
        "chunk-3bcdc73e": "cd940c76",
        "chunk-3bcdcf7e": "64a1c54d",
        "chunk-3bce130b": "81fb9f26",
        "chunk-3bce74ec": "09cfb486",
        "chunk-3bce781f": "c08d2f60",
        "chunk-3bceb60d": "c8ff10c3",
        "chunk-3bcec2c4": "1c3acd9a",
        "chunk-3bcec31f": "9e1b170a",
        "chunk-3bcef3f1": "88dd0b46",
        "chunk-3bcef810": "be8e695d",
        "chunk-3bcf01a1": "a0113855",
        "chunk-3bd0115a": "f0273243",
        "chunk-3be2e768": "115ab1c0",
        "chunk-3be2e95c": "4a0086ec",
        "chunk-3be2f883": "54bec04b",
        "chunk-3be35f9f": "84d78771",
        "chunk-3be36cf9": "a9706ae6",
        "chunk-3be3ddc8": "7e75d2e7",
        "chunk-3be449cc": "4ee84dd5",
        "chunk-3be46026": "1e6f9158",
        "chunk-3be46253": "44566cc0",
        "chunk-3be48dfb": "d2603c00",
        "chunk-3be505bf": "906a9a6c",
        "chunk-3be53d85": "b6e07590",
        "chunk-3c5ed143": "c2f21d06",
        "chunk-3d112240": "fd3370a0",
        "chunk-3e476fa0": "7d56b6be",
        "chunk-3f2aeaf0": "f7140b27",
        "chunk-40ad74ea": "1f053740",
        "chunk-419d9f22": "1066a846",
        "chunk-41dc27c1": "b14787a8",
        "chunk-425807d2": "c582a639",
        "chunk-44fd0744": "e681ec4f",
        "chunk-45c3938e": "58720324",
        "chunk-4697e636": "4f945892",
        "chunk-49328605": "06faeeb4",
        "chunk-3020ac28": "bf4598c3",
        "chunk-5bb3e31e": "843367ab",
        "chunk-4b51bd42": "bb866031",
        "chunk-4c268a7f": "f0e3e150",
        "chunk-4f2e4d62": "a88db3d2",
        "chunk-50d05f60": "cd991920",
        "chunk-50e1542a": "ce058af8",
        "chunk-51c862a2": "26e944a9",
        "chunk-53ad5f28": "f1da037e",
        "chunk-587c9700": "60f78398",
        "chunk-58b31a04": "6f548c71",
        "chunk-597060b4": "180defff",
        "chunk-59b7c6fa": "514a700e",
        "chunk-5ca5135c": "93856118",
        "chunk-5ffa7cda": "ad47415d",
        "chunk-625cd580": "bb6006b8",
        "chunk-64408c34": "54a6c251",
        "chunk-6853be89": "7aa67245",
        "chunk-6c8a16bc": "c5b78977",
        "chunk-70056a8e": "89c227ee",
        "chunk-7203dae1": "0bf98e82",
        "chunk-77c5cde0": "b5d54479",
        "chunk-7a3c1fd6": "35ca8a5a",
        "chunk-7a5057ef": "47464fcb",
        "chunk-7bd5c5a2": "0214ecb6",
        "chunk-7d14240d": "8eacdad7",
        "chunk-7f07aad8": "e686bd4d",
        "chunk-7ff97aaa": "7547a1be",
        "chunk-8c13f210": "0f477c7f",
        "chunk-8cbde130": "0ba0da75",
        "chunk-8dd65600": "4a42434f",
        "chunk-8e696ca2": "22a8cfd1",
        "chunk-936374e8": "708e15ed",
        "chunk-97331586": "d53fb8ce",
        "chunk-a055d4c6": "404fdd57",
        "chunk-a3670984": "6df1c504",
        "chunk-b1f7d874": "e94446fd",
        "chunk-b2bb2780": "68d5f413",
        "chunk-c2d84bf0": "4e41639f",
        "chunk-c8cab390": "afe546aa",
        "chunk-c9324d3c": "57f2645b",
        "chunk-cd86426c": "d0582045",
        "chunk-d073a0ac": "9985b669",
        "chunk-d2d01fae": "d7e8c9b6",
        "chunk-d56cd5f0": "1e1d4037",
        "chunk-dbda98f0": "0347671d",
        "chunk-dd8fef6a": "d7509542",
        "chunk-ea289bc4": "d9dc3eec",
        "chunk-eb63e2f2": "d22bcaa7",
        "date-cs-CZ-date-format-json": "31fdc2e9",
        "date-de-DE-date-format-json": "7a116f05",
        "date-fr-FR-date-format-json": "8bf1a294",
        "date-it-IT-date-format-json": "12aa5e65",
        "date-ms-MY-date-format-json": "842b2e5b",
        "date-nl-NL-date-format-json": "dbc571c6",
        "date-pl-PL-date-format-json": "08804d23",
        "date-pt-BR-date-format-json": "bbc5fba9",
        "date-ru-RU-date-format-json": "71d58f32",
        "date-sk-SK-date-format-json": "13c20b8e",
        "date-zh-CN-date-format-json": "a590a407",
        "lang-af-ZA-index-json": "2123d642",
        "lang-ar-SA-index-json": "c0d1c7a1",
        "lang-ca-ES-index-json": "fdfb88ec",
        "lang-cs-CZ-index-json": "205b4f42",
        "lang-da-DK-index-json": "9e6ddba5",
        "lang-de-DE-index-json": "4a2e9cec",
        "lang-el-GR-index-json": "58cb5e43",
        "lang-es-419-index-json": "591f233f",
        "lang-es-CL-index-json": "99f92ca1",
        "lang-es-ES-index-json": "ac02a457",
        "lang-fi-FI-index-json": "2bacd7b5",
        "lang-fr-FR-index-json": "771daf17",
        "lang-he-IL-index-json": "551b6c2b",
        "lang-hu-HU-index-json": "fbcc2a3b",
        "lang-id-ID-index-json": "115bfbb7",
        "lang-interfaces-af-ZA-interfaces-json": "b5463632",
        "lang-interfaces-af-ZA-layouts-json": "4215600a",
        "lang-interfaces-ar-SA-interfaces-json": "67329095",
        "lang-interfaces-ar-SA-layouts-json": "8b4d0a71",
        "lang-interfaces-ca-ES-interfaces-json": "6d7bebf7",
        "lang-interfaces-ca-ES-layouts-json": "a3a78d6e",
        "lang-interfaces-cs-CZ-interfaces-json": "34a3b362",
        "lang-interfaces-cs-CZ-layouts-json": "17b24584",
        "lang-interfaces-da-DK-interfaces-json": "185018c2",
        "lang-interfaces-da-DK-layouts-json": "1b612ed0",
        "lang-interfaces-de-DE-interfaces-json": "d26780f8",
        "lang-interfaces-de-DE-layouts-json": "efdee9a7",
        "lang-interfaces-el-GR-interfaces-json": "a7acb437",
        "lang-interfaces-el-GR-layouts-json": "c1be4712",
        "lang-interfaces-es-419-interfaces-json": "c9340b95",
        "lang-interfaces-es-419-layouts-json": "7c5487ec",
        "lang-interfaces-es-CL-interfaces-json": "193fcb71",
        "lang-interfaces-es-CL-layouts-json": "d4f43728",
        "lang-interfaces-es-ES-interfaces-json": "d1a88b3f",
        "lang-interfaces-es-ES-layouts-json": "85543fcf",
        "lang-interfaces-fi-FI-interfaces-json": "880d7455",
        "lang-interfaces-fi-FI-layouts-json": "3596fd29",
        "lang-interfaces-fr-FR-interfaces-json": "f1278f05",
        "lang-interfaces-fr-FR-layouts-json": "e771f0c0",
        "lang-interfaces-he-IL-interfaces-json": "28d2ad34",
        "lang-interfaces-he-IL-layouts-json": "02ac8590",
        "lang-interfaces-hu-HU-interfaces-json": "b707c9e7",
        "lang-interfaces-hu-HU-layouts-json": "392869e0",
        "lang-interfaces-id-ID-interfaces-json": "4a2535e2",
        "lang-interfaces-id-ID-layouts-json": "84a98376",
        "lang-interfaces-is-IS-interfaces-json": "e856913c",
        "lang-interfaces-is-IS-layouts-json": "52f46a23",
        "lang-interfaces-it-IT-interfaces-json": "770c1c77",
        "lang-interfaces-it-IT-layouts-json": "7e8ac6c2",
        "lang-interfaces-ja-JP-interfaces-json": "4abd490a",
        "lang-interfaces-ja-JP-layouts-json": "1f4f7c91",
        "lang-interfaces-ko-KR-interfaces-json": "91d0078d",
        "lang-interfaces-ko-KR-layouts-json": "06ada6db",
        "lang-interfaces-lt-LT-interfaces-json": "8bc82c24",
        "lang-interfaces-lt-LT-layouts-json": "2301c8ad",
        "lang-interfaces-ms-MY-interfaces-json": "31a01421",
        "lang-interfaces-ms-MY-layouts-json": "f9019d00",
        "lang-interfaces-nl-NL-interfaces-json": "45909d3d",
        "lang-interfaces-nl-NL-layouts-json": "38eb338f",
        "lang-interfaces-no-NO-interfaces-json": "d7fb6af4",
        "lang-interfaces-no-NO-layouts-json": "465949b1",
        "lang-interfaces-pl-PL-interfaces-json": "8837f9a6",
        "lang-interfaces-pl-PL-layouts-json": "5d10bbe5",
        "lang-interfaces-pt-BR-interfaces-json": "cdfe0d43",
        "lang-interfaces-pt-BR-layouts-json": "ebb3ace9",
        "lang-interfaces-pt-PT-interfaces-json": "86ce137c",
        "lang-interfaces-pt-PT-layouts-json": "93f2aa4a",
        "lang-interfaces-ro-RO-interfaces-json": "56031487",
        "lang-interfaces-ro-RO-layouts-json": "6be6ee2f",
        "lang-interfaces-ru-RU-interfaces-json": "4c530926",
        "lang-interfaces-ru-RU-layouts-json": "aba68dc9",
        "lang-interfaces-sk-SK-interfaces-json": "325d6fb1",
        "lang-interfaces-sk-SK-layouts-json": "613dfcd1",
        "lang-interfaces-sr-SP-interfaces-json": "825f7058",
        "lang-interfaces-sr-SP-layouts-json": "d3e78a55",
        "lang-interfaces-sv-SE-interfaces-json": "e7250e18",
        "lang-interfaces-sv-SE-layouts-json": "a1b8c3cc",
        "lang-interfaces-tr-TR-interfaces-json": "e6dd5f0b",
        "lang-interfaces-tr-TR-layouts-json": "f10b75c0",
        "lang-interfaces-uk-UA-interfaces-json": "d5eae0c8",
        "lang-interfaces-uk-UA-layouts-json": "9ed9d419",
        "lang-interfaces-vi-VN-interfaces-json": "e3df1134",
        "lang-interfaces-vi-VN-layouts-json": "e72cc4b1",
        "lang-interfaces-zh-CN-interfaces-json": "d0669fa0",
        "lang-interfaces-zh-CN-layouts-json": "20851666",
        "lang-interfaces-zh-TW-interfaces-json": "57f3e1c6",
        "lang-interfaces-zh-TW-layouts-json": "9e04d70e",
        "lang-is-IS-index-json": "3ae352da",
        "lang-it-IT-index-json": "5199d20b",
        "lang-ja-JP-index-json": "c67ac7f7",
        "lang-ko-KR-index-json": "6f549176",
        "lang-lt-LT-index-json": "b981ca89",
        "lang-ms-MY-index-json": "b0222b18",
        "lang-nl-NL-index-json": "77970698",
        "lang-no-NO-index-json": "e15454b9",
        "lang-pl-PL-index-json": "f359aafe",
        "lang-pt-BR-index-json": "cc4169a2",
        "lang-pt-PT-index-json": "98e797ec",
        "lang-ro-RO-index-json": "a252f09b",
        "lang-ru-RU-index-json": "0c650042",
        "lang-sk-SK-index-json": "7f1db0c1",
        "lang-sr-SP-index-json": "e25c945e",
        "lang-sv-SE-index-json": "06022107",
        "lang-tr-TR-index-json": "80e0c170",
        "lang-uk-UA-index-json": "63749084",
        "lang-vi-VN-index-json": "47a45e69",
        "lang-zh-CN-index-json": "46455d00",
        "lang-zh-TW-index-json": "31efdfe4",
        "module-extension": "181090fc",
        "reset-password": "1f448498",
        settings_collections: "c575759b",
        settings_global: "1893fccd",
        settings_interfaces: "204965a6",
        "settings_interfaces-debugger": "1247d4ce",
        settings_permissions: "20429ebc",
        settings_roles: "29c8859e",
        settings_settings: "2c56dc67",
      }[e] +
      ".js"
    );
  }
  function c(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.e = function (e) {
    var t = [],
      n = {
        "chunk-02ec76db": 1,
        "chunk-03732e18": 1,
        "chunk-0416f679": 1,
        "chunk-073b9d5c": 1,
        "chunk-0f4d6f6c": 1,
        "chunk-1232e627": 1,
        "chunk-13145859": 1,
        "chunk-19f69ce6": 1,
        "chunk-1c6fa0e2": 1,
        "chunk-22fe8d82": 1,
        "chunk-24c13961": 1,
        "chunk-25f5bbaa": 1,
        "chunk-264bd833": 1,
        "chunk-29fe6f82": 1,
        "chunk-2a043d5e": 1,
        "chunk-2b5a097e": 1,
        "chunk-0b3e4f54": 1,
        "setup-2fa": 1,
        "chunk-2d50aa6f": 1,
        "chunk-2e2e6d82": 1,
        "chunk-14f90334": 1,
        install: 1,
        settings_fields: 1,
        "chunk-304578ba": 1,
        "chunk-347cc0fb": 1,
        "chunk-373d36ce": 1,
        "chunk-3a78ae2c": 1,
        "chunk-3c5ed143": 1,
        "chunk-40ad74ea": 1,
        "chunk-419d9f22": 1,
        "chunk-41dc27c1": 1,
        "chunk-425807d2": 1,
        "chunk-44fd0744": 1,
        "chunk-45c3938e": 1,
        "chunk-4697e636": 1,
        "chunk-49328605": 1,
        "chunk-3020ac28": 1,
        "chunk-5bb3e31e": 1,
        "chunk-4b51bd42": 1,
        "chunk-4c268a7f": 1,
        "chunk-4f2e4d62": 1,
        "chunk-50e1542a": 1,
        "chunk-51c862a2": 1,
        "chunk-53ad5f28": 1,
        "chunk-587c9700": 1,
        "chunk-58b31a04": 1,
        "chunk-597060b4": 1,
        "chunk-59b7c6fa": 1,
        "chunk-5ca5135c": 1,
        "chunk-5ffa7cda": 1,
        "chunk-625cd580": 1,
        "chunk-64408c34": 1,
        "chunk-6853be89": 1,
        "chunk-6c8a16bc": 1,
        "chunk-70056a8e": 1,
        "chunk-7203dae1": 1,
        "chunk-77c5cde0": 1,
        "chunk-7a3c1fd6": 1,
        "chunk-7a5057ef": 1,
        "chunk-7d14240d": 1,
        "chunk-7ff97aaa": 1,
        "chunk-8c13f210": 1,
        "chunk-8cbde130": 1,
        "chunk-8dd65600": 1,
        "chunk-8e696ca2": 1,
        "chunk-936374e8": 1,
        "chunk-a3670984": 1,
        "chunk-b1f7d874": 1,
        "chunk-b2bb2780": 1,
        "chunk-c2d84bf0": 1,
        "chunk-c8cab390": 1,
        "chunk-c9324d3c": 1,
        "chunk-cd86426c": 1,
        "chunk-d2d01fae": 1,
        "chunk-d56cd5f0": 1,
        "chunk-dbda98f0": 1,
        "chunk-dd8fef6a": 1,
        "chunk-ea289bc4": 1,
        "chunk-eb63e2f2": 1,
        "reset-password": 1,
        settings_collections: 1,
        settings_global: 1,
        settings_interfaces: 1,
        "settings_interfaces-debugger": 1,
        settings_permissions: 1,
        settings_roles: 1,
        settings_settings: 1,
      };
    o[e]
      ? t.push(o[e])
      : 0 !== o[e] &&
        n[e] &&
        t.push(
          (o[e] = new Promise(function (t, n) {
            for (
              var a =
                  "css/" +
                  ({
                    "setup-2fa": "setup-2fa",
                    install: "install",
                    settings_fields: "settings_fields",
                    "date-cs-CZ-date-format-json":
                      "date-cs-CZ-date-format-json",
                    "date-de-DE-date-format-json":
                      "date-de-DE-date-format-json",
                    "date-fr-FR-date-format-json":
                      "date-fr-FR-date-format-json",
                    "date-it-IT-date-format-json":
                      "date-it-IT-date-format-json",
                    "date-ms-MY-date-format-json":
                      "date-ms-MY-date-format-json",
                    "date-nl-NL-date-format-json":
                      "date-nl-NL-date-format-json",
                    "date-pl-PL-date-format-json":
                      "date-pl-PL-date-format-json",
                    "date-pt-BR-date-format-json":
                      "date-pt-BR-date-format-json",
                    "date-ru-RU-date-format-json":
                      "date-ru-RU-date-format-json",
                    "date-sk-SK-date-format-json":
                      "date-sk-SK-date-format-json",
                    "date-zh-CN-date-format-json":
                      "date-zh-CN-date-format-json",
                    "lang-af-ZA-index-json": "lang-af-ZA-index-json",
                    "lang-ar-SA-index-json": "lang-ar-SA-index-json",
                    "lang-ca-ES-index-json": "lang-ca-ES-index-json",
                    "lang-cs-CZ-index-json": "lang-cs-CZ-index-json",
                    "lang-da-DK-index-json": "lang-da-DK-index-json",
                    "lang-de-DE-index-json": "lang-de-DE-index-json",
                    "lang-el-GR-index-json": "lang-el-GR-index-json",
                    "lang-es-419-index-json": "lang-es-419-index-json",
                    "lang-es-CL-index-json": "lang-es-CL-index-json",
                    "lang-es-ES-index-json": "lang-es-ES-index-json",
                    "lang-fi-FI-index-json": "lang-fi-FI-index-json",
                    "lang-fr-FR-index-json": "lang-fr-FR-index-json",
                    "lang-he-IL-index-json": "lang-he-IL-index-json",
                    "lang-hu-HU-index-json": "lang-hu-HU-index-json",
                    "lang-id-ID-index-json": "lang-id-ID-index-json",
                    "lang-interfaces-af-ZA-interfaces-json":
                      "lang-interfaces-af-ZA-interfaces-json",
                    "lang-interfaces-af-ZA-layouts-json":
                      "lang-interfaces-af-ZA-layouts-json",
                    "lang-interfaces-ar-SA-interfaces-json":
                      "lang-interfaces-ar-SA-interfaces-json",
                    "lang-interfaces-ar-SA-layouts-json":
                      "lang-interfaces-ar-SA-layouts-json",
                    "lang-interfaces-ca-ES-interfaces-json":
                      "lang-interfaces-ca-ES-interfaces-json",
                    "lang-interfaces-ca-ES-layouts-json":
                      "lang-interfaces-ca-ES-layouts-json",
                    "lang-interfaces-cs-CZ-interfaces-json":
                      "lang-interfaces-cs-CZ-interfaces-json",
                    "lang-interfaces-cs-CZ-layouts-json":
                      "lang-interfaces-cs-CZ-layouts-json",
                    "lang-interfaces-da-DK-interfaces-json":
                      "lang-interfaces-da-DK-interfaces-json",
                    "lang-interfaces-da-DK-layouts-json":
                      "lang-interfaces-da-DK-layouts-json",
                    "lang-interfaces-de-DE-interfaces-json":
                      "lang-interfaces-de-DE-interfaces-json",
                    "lang-interfaces-de-DE-layouts-json":
                      "lang-interfaces-de-DE-layouts-json",
                    "lang-interfaces-el-GR-interfaces-json":
                      "lang-interfaces-el-GR-interfaces-json",
                    "lang-interfaces-el-GR-layouts-json":
                      "lang-interfaces-el-GR-layouts-json",
                    "lang-interfaces-es-419-interfaces-json":
                      "lang-interfaces-es-419-interfaces-json",
                    "lang-interfaces-es-419-layouts-json":
                      "lang-interfaces-es-419-layouts-json",
                    "lang-interfaces-es-CL-interfaces-json":
                      "lang-interfaces-es-CL-interfaces-json",
                    "lang-interfaces-es-CL-layouts-json":
                      "lang-interfaces-es-CL-layouts-json",
                    "lang-interfaces-es-ES-interfaces-json":
                      "lang-interfaces-es-ES-interfaces-json",
                    "lang-interfaces-es-ES-layouts-json":
                      "lang-interfaces-es-ES-layouts-json",
                    "lang-interfaces-fi-FI-interfaces-json":
                      "lang-interfaces-fi-FI-interfaces-json",
                    "lang-interfaces-fi-FI-layouts-json":
                      "lang-interfaces-fi-FI-layouts-json",
                    "lang-interfaces-fr-FR-interfaces-json":
                      "lang-interfaces-fr-FR-interfaces-json",
                    "lang-interfaces-fr-FR-layouts-json":
                      "lang-interfaces-fr-FR-layouts-json",
                    "lang-interfaces-he-IL-interfaces-json":
                      "lang-interfaces-he-IL-interfaces-json",
                    "lang-interfaces-he-IL-layouts-json":
                      "lang-interfaces-he-IL-layouts-json",
                    "lang-interfaces-hu-HU-interfaces-json":
                      "lang-interfaces-hu-HU-interfaces-json",
                    "lang-interfaces-hu-HU-layouts-json":
                      "lang-interfaces-hu-HU-layouts-json",
                    "lang-interfaces-id-ID-interfaces-json":
                      "lang-interfaces-id-ID-interfaces-json",
                    "lang-interfaces-id-ID-layouts-json":
                      "lang-interfaces-id-ID-layouts-json",
                    "lang-interfaces-is-IS-interfaces-json":
                      "lang-interfaces-is-IS-interfaces-json",
                    "lang-interfaces-is-IS-layouts-json":
                      "lang-interfaces-is-IS-layouts-json",
                    "lang-interfaces-it-IT-interfaces-json":
                      "lang-interfaces-it-IT-interfaces-json",
                    "lang-interfaces-it-IT-layouts-json":
                      "lang-interfaces-it-IT-layouts-json",
                    "lang-interfaces-ja-JP-interfaces-json":
                      "lang-interfaces-ja-JP-interfaces-json",
                    "lang-interfaces-ja-JP-layouts-json":
                      "lang-interfaces-ja-JP-layouts-json",
                    "lang-interfaces-ko-KR-interfaces-json":
                      "lang-interfaces-ko-KR-interfaces-json",
                    "lang-interfaces-ko-KR-layouts-json":
                      "lang-interfaces-ko-KR-layouts-json",
                    "lang-interfaces-lt-LT-interfaces-json":
                      "lang-interfaces-lt-LT-interfaces-json",
                    "lang-interfaces-lt-LT-layouts-json":
                      "lang-interfaces-lt-LT-layouts-json",
                    "lang-interfaces-ms-MY-interfaces-json":
                      "lang-interfaces-ms-MY-interfaces-json",
                    "lang-interfaces-ms-MY-layouts-json":
                      "lang-interfaces-ms-MY-layouts-json",
                    "lang-interfaces-nl-NL-interfaces-json":
                      "lang-interfaces-nl-NL-interfaces-json",
                    "lang-interfaces-nl-NL-layouts-json":
                      "lang-interfaces-nl-NL-layouts-json",
                    "lang-interfaces-no-NO-interfaces-json":
                      "lang-interfaces-no-NO-interfaces-json",
                    "lang-interfaces-no-NO-layouts-json":
                      "lang-interfaces-no-NO-layouts-json",
                    "lang-interfaces-pl-PL-interfaces-json":
                      "lang-interfaces-pl-PL-interfaces-json",
                    "lang-interfaces-pl-PL-layouts-json":
                      "lang-interfaces-pl-PL-layouts-json",
                    "lang-interfaces-pt-BR-interfaces-json":
                      "lang-interfaces-pt-BR-interfaces-json",
                    "lang-interfaces-pt-BR-layouts-json":
                      "lang-interfaces-pt-BR-layouts-json",
                    "lang-interfaces-pt-PT-interfaces-json":
                      "lang-interfaces-pt-PT-interfaces-json",
                    "lang-interfaces-pt-PT-layouts-json":
                      "lang-interfaces-pt-PT-layouts-json",
                    "lang-interfaces-ro-RO-interfaces-json":
                      "lang-interfaces-ro-RO-interfaces-json",
                    "lang-interfaces-ro-RO-layouts-json":
                      "lang-interfaces-ro-RO-layouts-json",
                    "lang-interfaces-ru-RU-interfaces-json":
                      "lang-interfaces-ru-RU-interfaces-json",
                    "lang-interfaces-ru-RU-layouts-json":
                      "lang-interfaces-ru-RU-layouts-json",
                    "lang-interfaces-sk-SK-interfaces-json":
                      "lang-interfaces-sk-SK-interfaces-json",
                    "lang-interfaces-sk-SK-layouts-json":
                      "lang-interfaces-sk-SK-layouts-json",
                    "lang-interfaces-sr-SP-interfaces-json":
                      "lang-interfaces-sr-SP-interfaces-json",
                    "lang-interfaces-sr-SP-layouts-json":
                      "lang-interfaces-sr-SP-layouts-json",
                    "lang-interfaces-sv-SE-interfaces-json":
                      "lang-interfaces-sv-SE-interfaces-json",
                    "lang-interfaces-sv-SE-layouts-json":
                      "lang-interfaces-sv-SE-layouts-json",
                    "lang-interfaces-tr-TR-interfaces-json":
                      "lang-interfaces-tr-TR-interfaces-json",
                    "lang-interfaces-tr-TR-layouts-json":
                      "lang-interfaces-tr-TR-layouts-json",
                    "lang-interfaces-uk-UA-interfaces-json":
                      "lang-interfaces-uk-UA-interfaces-json",
                    "lang-interfaces-uk-UA-layouts-json":
                      "lang-interfaces-uk-UA-layouts-json",
                    "lang-interfaces-vi-VN-interfaces-json":
                      "lang-interfaces-vi-VN-interfaces-json",
                    "lang-interfaces-vi-VN-layouts-json":
                      "lang-interfaces-vi-VN-layouts-json",
                    "lang-interfaces-zh-CN-interfaces-json":
                      "lang-interfaces-zh-CN-interfaces-json",
                    "lang-interfaces-zh-CN-layouts-json":
                      "lang-interfaces-zh-CN-layouts-json",
                    "lang-interfaces-zh-TW-interfaces-json":
                      "lang-interfaces-zh-TW-interfaces-json",
                    "lang-interfaces-zh-TW-layouts-json":
                      "lang-interfaces-zh-TW-layouts-json",
                    "lang-is-IS-index-json": "lang-is-IS-index-json",
                    "lang-it-IT-index-json": "lang-it-IT-index-json",
                    "lang-ja-JP-index-json": "lang-ja-JP-index-json",
                    "lang-ko-KR-index-json": "lang-ko-KR-index-json",
                    "lang-lt-LT-index-json": "lang-lt-LT-index-json",
                    "lang-ms-MY-index-json": "lang-ms-MY-index-json",
                    "lang-nl-NL-index-json": "lang-nl-NL-index-json",
                    "lang-no-NO-index-json": "lang-no-NO-index-json",
                    "lang-pl-PL-index-json": "lang-pl-PL-index-json",
                    "lang-pt-BR-index-json": "lang-pt-BR-index-json",
                    "lang-pt-PT-index-json": "lang-pt-PT-index-json",
                    "lang-ro-RO-index-json": "lang-ro-RO-index-json",
                    "lang-ru-RU-index-json": "lang-ru-RU-index-json",
                    "lang-sk-SK-index-json": "lang-sk-SK-index-json",
                    "lang-sr-SP-index-json": "lang-sr-SP-index-json",
                    "lang-sv-SE-index-json": "lang-sv-SE-index-json",
                    "lang-tr-TR-index-json": "lang-tr-TR-index-json",
                    "lang-uk-UA-index-json": "lang-uk-UA-index-json",
                    "lang-vi-VN-index-json": "lang-vi-VN-index-json",
                    "lang-zh-CN-index-json": "lang-zh-CN-index-json",
                    "lang-zh-TW-index-json": "lang-zh-TW-index-json",
                    "module-extension": "module-extension",
                    "reset-password": "reset-password",
                    settings_collections: "settings_collections",
                    settings_global: "settings_global",
                    settings_interfaces: "settings_interfaces",
                    "settings_interfaces-debugger":
                      "settings_interfaces-debugger",
                    settings_permissions: "settings_permissions",
                    settings_roles: "settings_roles",
                    settings_settings: "settings_settings",
                  }[e] || e) +
                  "." +
                  {
                    "chunk-02ec76db": "d54fa746",
                    "chunk-03732e18": "7be9c5cd",
                    "chunk-0416f679": "68c4b194",
                    "chunk-073b9d5c": "05f046e2",
                    "chunk-08d9dee2": "31d6cfe0",
                    "chunk-0f4d6f6c": "3ad16e41",
                    "chunk-1232e627": "a9bd45f7",
                    "chunk-13145859": "9d556b5d",
                    "chunk-15769862": "31d6cfe0",
                    "chunk-19f69ce6": "2e26f927",
                    "chunk-1c6fa0e2": "49affa79",
                    "chunk-22ce3451": "31d6cfe0",
                    "chunk-22fe8d82": "6361bbb7",
                    "chunk-24c13961": "79126c99",
                    "chunk-25f5bbaa": "60dab699",
                    "chunk-264bd833": "54969460",
                    "chunk-29fe6f82": "88266fb6",
                    "chunk-2a043d5e": "2f739458",
                    "chunk-2b5a097e": "7f537509",
                    "chunk-2d0b21f1": "31d6cfe0",
                    "chunk-2d0c847f": "31d6cfe0",
                    "chunk-2d20f576": "31d6cfe0",
                    "chunk-0b3e4f54": "32168b0b",
                    "setup-2fa": "d9cb0996",
                    "chunk-2d22497b": "31d6cfe0",
                    "chunk-2d50aa6f": "4f3a9c6f",
                    "chunk-2e2e6d82": "607875d7",
                    "chunk-2fe9f608": "31d6cfe0",
                    "chunk-14f90334": "e4c88440",
                    install: "083d9b0c",
                    settings_fields: "ec75f759",
                    "chunk-304578ba": "a9b94e44",
                    "chunk-347cc0fb": "e3b96867",
                    "chunk-373d36ce": "0bf57ef0",
                    "chunk-3a78ae2c": "c58e2c42",
                    "chunk-3bccb045": "31d6cfe0",
                    "chunk-3bccc2c9": "31d6cfe0",
                    "chunk-3bcd24b1": "31d6cfe0",
                    "chunk-3bcd5d3d": "31d6cfe0",
                    "chunk-3bcd84a8": "31d6cfe0",
                    "chunk-3bcdaba5": "31d6cfe0",
                    "chunk-3bcdc73e": "31d6cfe0",
                    "chunk-3bcdcf7e": "31d6cfe0",
                    "chunk-3bce130b": "31d6cfe0",
                    "chunk-3bce74ec": "31d6cfe0",
                    "chunk-3bce781f": "31d6cfe0",
                    "chunk-3bceb60d": "31d6cfe0",
                    "chunk-3bcec2c4": "31d6cfe0",
                    "chunk-3bcec31f": "31d6cfe0",
                    "chunk-3bcef3f1": "31d6cfe0",
                    "chunk-3bcef810": "31d6cfe0",
                    "chunk-3bcf01a1": "31d6cfe0",
                    "chunk-3bd0115a": "31d6cfe0",
                    "chunk-3be2e768": "31d6cfe0",
                    "chunk-3be2e95c": "31d6cfe0",
                    "chunk-3be2f883": "31d6cfe0",
                    "chunk-3be35f9f": "31d6cfe0",
                    "chunk-3be36cf9": "31d6cfe0",
                    "chunk-3be3ddc8": "31d6cfe0",
                    "chunk-3be449cc": "31d6cfe0",
                    "chunk-3be46026": "31d6cfe0",
                    "chunk-3be46253": "31d6cfe0",
                    "chunk-3be48dfb": "31d6cfe0",
                    "chunk-3be505bf": "31d6cfe0",
                    "chunk-3be53d85": "31d6cfe0",
                    "chunk-3c5ed143": "0e50ed18",
                    "chunk-3d112240": "31d6cfe0",
                    "chunk-3e476fa0": "31d6cfe0",
                    "chunk-3f2aeaf0": "31d6cfe0",
                    "chunk-40ad74ea": "213bb45b",
                    "chunk-419d9f22": "4e3aae39",
                    "chunk-41dc27c1": "92bceff7",
                    "chunk-425807d2": "d7f5b271",
                    "chunk-44fd0744": "ec6946f0",
                    "chunk-45c3938e": "40030eb1",
                    "chunk-4697e636": "40fdce1b",
                    "chunk-49328605": "fe71ac11",
                    "chunk-3020ac28": "527e3d90",
                    "chunk-5bb3e31e": "3fd73774",
                    "chunk-4b51bd42": "d66657b7",
                    "chunk-4c268a7f": "e1a5827a",
                    "chunk-4f2e4d62": "b860c909",
                    "chunk-50d05f60": "31d6cfe0",
                    "chunk-50e1542a": "0484ba68",
                    "chunk-51c862a2": "b1342fa5",
                    "chunk-53ad5f28": "ae548a15",
                    "chunk-587c9700": "c817291d",
                    "chunk-58b31a04": "8a580e1e",
                    "chunk-597060b4": "cf90d464",
                    "chunk-59b7c6fa": "c9ebf762",
                    "chunk-5ca5135c": "26900c9a",
                    "chunk-5ffa7cda": "cc1da39f",
                    "chunk-625cd580": "3c277e08",
                    "chunk-64408c34": "536675e5",
                    "chunk-6853be89": "ac81cd64",
                    "chunk-6c8a16bc": "cfefa47c",
                    "chunk-70056a8e": "e468e779",
                    "chunk-7203dae1": "a1d4a94d",
                    "chunk-77c5cde0": "80eb32db",
                    "chunk-7a3c1fd6": "61e85d08",
                    "chunk-7a5057ef": "57da9dbd",
                    "chunk-7bd5c5a2": "31d6cfe0",
                    "chunk-7d14240d": "4b117790",
                    "chunk-7f07aad8": "31d6cfe0",
                    "chunk-7ff97aaa": "bdd1a133",
                    "chunk-8c13f210": "d1fdc2f8",
                    "chunk-8cbde130": "bc78e21c",
                    "chunk-8dd65600": "7f9eb614",
                    "chunk-8e696ca2": "a1c98221",
                    "chunk-936374e8": "d6c551c7",
                    "chunk-97331586": "31d6cfe0",
                    "chunk-a055d4c6": "31d6cfe0",
                    "chunk-a3670984": "c3572233",
                    "chunk-b1f7d874": "98d69b0b",
                    "chunk-b2bb2780": "a765abbb",
                    "chunk-c2d84bf0": "29f23979",
                    "chunk-c8cab390": "8fc5b10f",
                    "chunk-c9324d3c": "6ea70c3f",
                    "chunk-cd86426c": "e547b630",
                    "chunk-d073a0ac": "31d6cfe0",
                    "chunk-d2d01fae": "a0f108a4",
                    "chunk-d56cd5f0": "93d7b673",
                    "chunk-dbda98f0": "622c57d8",
                    "chunk-dd8fef6a": "6daa066a",
                    "chunk-ea289bc4": "4c7ed349",
                    "chunk-eb63e2f2": "9542b7ef",
                    "date-cs-CZ-date-format-json": "31d6cfe0",
                    "date-de-DE-date-format-json": "31d6cfe0",
                    "date-fr-FR-date-format-json": "31d6cfe0",
                    "date-it-IT-date-format-json": "31d6cfe0",
                    "date-ms-MY-date-format-json": "31d6cfe0",
                    "date-nl-NL-date-format-json": "31d6cfe0",
                    "date-pl-PL-date-format-json": "31d6cfe0",
                    "date-pt-BR-date-format-json": "31d6cfe0",
                    "date-ru-RU-date-format-json": "31d6cfe0",
                    "date-sk-SK-date-format-json": "31d6cfe0",
                    "date-zh-CN-date-format-json": "31d6cfe0",
                    "lang-af-ZA-index-json": "31d6cfe0",
                    "lang-ar-SA-index-json": "31d6cfe0",
                    "lang-ca-ES-index-json": "31d6cfe0",
                    "lang-cs-CZ-index-json": "31d6cfe0",
                    "lang-da-DK-index-json": "31d6cfe0",
                    "lang-de-DE-index-json": "31d6cfe0",
                    "lang-el-GR-index-json": "31d6cfe0",
                    "lang-es-419-index-json": "31d6cfe0",
                    "lang-es-CL-index-json": "31d6cfe0",
                    "lang-es-ES-index-json": "31d6cfe0",
                    "lang-fi-FI-index-json": "31d6cfe0",
                    "lang-fr-FR-index-json": "31d6cfe0",
                    "lang-he-IL-index-json": "31d6cfe0",
                    "lang-hu-HU-index-json": "31d6cfe0",
                    "lang-id-ID-index-json": "31d6cfe0",
                    "lang-interfaces-af-ZA-interfaces-json": "31d6cfe0",
                    "lang-interfaces-af-ZA-layouts-json": "31d6cfe0",
                    "lang-interfaces-ar-SA-interfaces-json": "31d6cfe0",
                    "lang-interfaces-ar-SA-layouts-json": "31d6cfe0",
                    "lang-interfaces-ca-ES-interfaces-json": "31d6cfe0",
                    "lang-interfaces-ca-ES-layouts-json": "31d6cfe0",
                    "lang-interfaces-cs-CZ-interfaces-json": "31d6cfe0",
                    "lang-interfaces-cs-CZ-layouts-json": "31d6cfe0",
                    "lang-interfaces-da-DK-interfaces-json": "31d6cfe0",
                    "lang-interfaces-da-DK-layouts-json": "31d6cfe0",
                    "lang-interfaces-de-DE-interfaces-json": "31d6cfe0",
                    "lang-interfaces-de-DE-layouts-json": "31d6cfe0",
                    "lang-interfaces-el-GR-interfaces-json": "31d6cfe0",
                    "lang-interfaces-el-GR-layouts-json": "31d6cfe0",
                    "lang-interfaces-es-419-interfaces-json": "31d6cfe0",
                    "lang-interfaces-es-419-layouts-json": "31d6cfe0",
                    "lang-interfaces-es-CL-interfaces-json": "31d6cfe0",
                    "lang-interfaces-es-CL-layouts-json": "31d6cfe0",
                    "lang-interfaces-es-ES-interfaces-json": "31d6cfe0",
                    "lang-interfaces-es-ES-layouts-json": "31d6cfe0",
                    "lang-interfaces-fi-FI-interfaces-json": "31d6cfe0",
                    "lang-interfaces-fi-FI-layouts-json": "31d6cfe0",
                    "lang-interfaces-fr-FR-interfaces-json": "31d6cfe0",
                    "lang-interfaces-fr-FR-layouts-json": "31d6cfe0",
                    "lang-interfaces-he-IL-interfaces-json": "31d6cfe0",
                    "lang-interfaces-he-IL-layouts-json": "31d6cfe0",
                    "lang-interfaces-hu-HU-interfaces-json": "31d6cfe0",
                    "lang-interfaces-hu-HU-layouts-json": "31d6cfe0",
                    "lang-interfaces-id-ID-interfaces-json": "31d6cfe0",
                    "lang-interfaces-id-ID-layouts-json": "31d6cfe0",
                    "lang-interfaces-is-IS-interfaces-json": "31d6cfe0",
                    "lang-interfaces-is-IS-layouts-json": "31d6cfe0",
                    "lang-interfaces-it-IT-interfaces-json": "31d6cfe0",
                    "lang-interfaces-it-IT-layouts-json": "31d6cfe0",
                    "lang-interfaces-ja-JP-interfaces-json": "31d6cfe0",
                    "lang-interfaces-ja-JP-layouts-json": "31d6cfe0",
                    "lang-interfaces-ko-KR-interfaces-json": "31d6cfe0",
                    "lang-interfaces-ko-KR-layouts-json": "31d6cfe0",
                    "lang-interfaces-lt-LT-interfaces-json": "31d6cfe0",
                    "lang-interfaces-lt-LT-layouts-json": "31d6cfe0",
                    "lang-interfaces-ms-MY-interfaces-json": "31d6cfe0",
                    "lang-interfaces-ms-MY-layouts-json": "31d6cfe0",
                    "lang-interfaces-nl-NL-interfaces-json": "31d6cfe0",
                    "lang-interfaces-nl-NL-layouts-json": "31d6cfe0",
                    "lang-interfaces-no-NO-interfaces-json": "31d6cfe0",
                    "lang-interfaces-no-NO-layouts-json": "31d6cfe0",
                    "lang-interfaces-pl-PL-interfaces-json": "31d6cfe0",
                    "lang-interfaces-pl-PL-layouts-json": "31d6cfe0",
                    "lang-interfaces-pt-BR-interfaces-json": "31d6cfe0",
                    "lang-interfaces-pt-BR-layouts-json": "31d6cfe0",
                    "lang-interfaces-pt-PT-interfaces-json": "31d6cfe0",
                    "lang-interfaces-pt-PT-layouts-json": "31d6cfe0",
                    "lang-interfaces-ro-RO-interfaces-json": "31d6cfe0",
                    "lang-interfaces-ro-RO-layouts-json": "31d6cfe0",
                    "lang-interfaces-ru-RU-interfaces-json": "31d6cfe0",
                    "lang-interfaces-ru-RU-layouts-json": "31d6cfe0",
                    "lang-interfaces-sk-SK-interfaces-json": "31d6cfe0",
                    "lang-interfaces-sk-SK-layouts-json": "31d6cfe0",
                    "lang-interfaces-sr-SP-interfaces-json": "31d6cfe0",
                    "lang-interfaces-sr-SP-layouts-json": "31d6cfe0",
                    "lang-interfaces-sv-SE-interfaces-json": "31d6cfe0",
                    "lang-interfaces-sv-SE-layouts-json": "31d6cfe0",
                    "lang-interfaces-tr-TR-interfaces-json": "31d6cfe0",
                    "lang-interfaces-tr-TR-layouts-json": "31d6cfe0",
                    "lang-interfaces-uk-UA-interfaces-json": "31d6cfe0",
                    "lang-interfaces-uk-UA-layouts-json": "31d6cfe0",
                    "lang-interfaces-vi-VN-interfaces-json": "31d6cfe0",
                    "lang-interfaces-vi-VN-layouts-json": "31d6cfe0",
                    "lang-interfaces-zh-CN-interfaces-json": "31d6cfe0",
                    "lang-interfaces-zh-CN-layouts-json": "31d6cfe0",
                    "lang-interfaces-zh-TW-interfaces-json": "31d6cfe0",
                    "lang-interfaces-zh-TW-layouts-json": "31d6cfe0",
                    "lang-is-IS-index-json": "31d6cfe0",
                    "lang-it-IT-index-json": "31d6cfe0",
                    "lang-ja-JP-index-json": "31d6cfe0",
                    "lang-ko-KR-index-json": "31d6cfe0",
                    "lang-lt-LT-index-json": "31d6cfe0",
                    "lang-ms-MY-index-json": "31d6cfe0",
                    "lang-nl-NL-index-json": "31d6cfe0",
                    "lang-no-NO-index-json": "31d6cfe0",
                    "lang-pl-PL-index-json": "31d6cfe0",
                    "lang-pt-BR-index-json": "31d6cfe0",
                    "lang-pt-PT-index-json": "31d6cfe0",
                    "lang-ro-RO-index-json": "31d6cfe0",
                    "lang-ru-RU-index-json": "31d6cfe0",
                    "lang-sk-SK-index-json": "31d6cfe0",
                    "lang-sr-SP-index-json": "31d6cfe0",
                    "lang-sv-SE-index-json": "31d6cfe0",
                    "lang-tr-TR-index-json": "31d6cfe0",
                    "lang-uk-UA-index-json": "31d6cfe0",
                    "lang-vi-VN-index-json": "31d6cfe0",
                    "lang-zh-CN-index-json": "31d6cfe0",
                    "lang-zh-TW-index-json": "31d6cfe0",
                    "module-extension": "31d6cfe0",
                    "reset-password": "2f89cc61",
                    settings_collections: "6b0316c0",
                    settings_global: "7c6b30e0",
                    settings_interfaces: "24f8fa38",
                    "settings_interfaces-debugger": "0a31c7cf",
                    settings_permissions: "aa6b8bbd",
                    settings_roles: "a380383d",
                    settings_settings: "bc19981a",
                  }[e] +
                  ".css",
                i = c.p + a,
                r = document.getElementsByTagName("link"),
                s = 0;
              s < r.length;
              s++
            ) {
              var l = r[s],
                u = l.getAttribute("data-href") || l.getAttribute("href");
              if ("stylesheet" === l.rel && (u === a || u === i)) return t();
            }
            var d = document.getElementsByTagName("style");
            for (s = 0; s < d.length; s++) {
              (l = d[s]), (u = l.getAttribute("data-href"));
              if (u === a || u === i) return t();
            }
            var f = document.createElement("link");
            (f.rel = "stylesheet"),
              (f.type = "text/css"),
              (f.onload = t),
              (f.onerror = function (t) {
                var a = (t && t.target && t.target.src) || i,
                  r = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + a + ")"
                  );
                (r.code = "CSS_CHUNK_LOAD_FAILED"),
                  (r.request = a),
                  delete o[e],
                  f.parentNode.removeChild(f),
                  n(r);
              }),
              (f.href = i);
            var m = document.getElementsByTagName("head")[0];
            m.appendChild(f);
          }).then(function () {
            o[e] = 0;
          }))
        );
    var a = i[e];
    if (0 !== a)
      if (a) t.push(a[2]);
      else {
        var r = new Promise(function (t, n) {
          a = i[e] = [t, n];
        });
        t.push((a[2] = r));
        var l,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          c.nc && u.setAttribute("nonce", c.nc),
          (u.src = s(e));
        var d = new Error();
        l = function (t) {
          (u.onerror = u.onload = null), clearTimeout(f);
          var n = i[e];
          if (0 !== n) {
            if (n) {
              var a = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              (d.message =
                "Loading chunk " + e + " failed.\n(" + a + ": " + o + ")"),
                (d.name = "ChunkLoadError"),
                (d.type = a),
                (d.request = o),
                n[1](d);
            }
            i[e] = void 0;
          }
        };
        var f = setTimeout(function () {
          l({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = l), document.head.appendChild(u);
      }
    return Promise.all(t);
  }),
    (c.m = e),
    (c.c = a),
    (c.d = function (e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          c.d(
            n,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = ""),
    (c.oe = function (e) {
      throw (console.error(e), e);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var d = 0; d < l.length; d++) t(l[d]);
  var f = u;
  r.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  "0007": function (e) {
    e.exports = JSON.parse('{"name":"$t:cards","icon":"view_module"}');
  },
  "0073": function (e, t, n) {},
  "0098": function (e, t, n) {
    "use strict";
    var a = n("0073"),
      o = n.n(a);
    o.a;
  },
  "00c6": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:hashed","version":"1.0.1","types":["hash"],"icon":"security","recommended":{"length":100},"options":{"hide":{"name":"$t:hide","comment":"$t:hide_comment","interface":"switch","default":false},"placeholder":{"name":"$t:placeholder","comment":"$t:placeholder_comment","interface":"text-input","length":100,"default":"Enter a value..."},"showHash":{"name":"$t:show_hash","comment":"$t:show_hash_comment","interface":"switch","default":false},"hashingType":{"name":"$t:hashing_type","comment":"$t:hashing_type_comment","interface":"dropdown","default":"core","options":{"choices":{"core":"Default","bcrypt":"bcrypt","md5":"md5","sha1":"SHA-1","sha224":"SHA-224","sha256":"SHA-256","sha384":"SHA-384","sha512":"SHA-512"}}}}}'
    );
  },
  "00e5": function (e, t, n) {
    "use strict";
    var a = n("53f8"),
      o = n.n(a);
    o.a;
  },
  "0295": function (e, t, n) {
    "use strict";
    var a = n("cfdc"),
      o = n.n(a);
    o.a;
  },
  "0351": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:dropdown","version":"1.0.2","types":["string"],"icon":"arrow_drop_down_circle","recommended":{"length":100},"options":{"choices":{"name":"$t:choices","comment":"$t:choices_comment","interface":"key-value","type":"JSON","options":{"keyInterface":"text-input","keyType":"string","keyOptions":{"placeholder":"key","monospace":true},"valueInterface":"text-input","valueType":"string","valueOptions":{"placeholder":"value","monospace":true}}},"placeholder":{"name":"$t:placeholder","interface":"text-input","comment":"$t:placeholder_comment","default":"$t:placeholder_default","length":200},"allow_other":{"name":"$t:allow_other","comment":"$t:allow_other_comment","interface":"switch","default":false},"formatting":{"name":"$t:formatting","comment":"$t:formatting_comment","interface":"switch","type":"BOOLEAN","default":true},"icon":{"name":"$t:icon","comment":"$t:icon_comment","interface":"icon","advanced":true}}}'
    );
  },
  "04bd": function (e, t, n) {
    "use strict";
    var a = n("dad3"),
      o = n.n(a);
    o.a;
  },
  "0614": function (e, t, n) {},
  "063a": function (e, t, n) {
    var a = {
      "./af-ZA/layouts.json": ["aaf9", "lang-interfaces-af-ZA-layouts-json"],
      "./ar-SA/layouts.json": ["669a", "lang-interfaces-ar-SA-layouts-json"],
      "./ca-ES/layouts.json": ["f80c", "lang-interfaces-ca-ES-layouts-json"],
      "./cs-CZ/layouts.json": ["ec8c", "lang-interfaces-cs-CZ-layouts-json"],
      "./da-DK/layouts.json": ["10e5", "lang-interfaces-da-DK-layouts-json"],
      "./de-DE/layouts.json": ["cb38", "lang-interfaces-de-DE-layouts-json"],
      "./el-GR/layouts.json": ["ce38", "lang-interfaces-el-GR-layouts-json"],
      "./en-US/layouts.json": ["9696"],
      "./es-419/layouts.json": ["5b41", "lang-interfaces-es-419-layouts-json"],
      "./es-CL/layouts.json": ["43a2", "lang-interfaces-es-CL-layouts-json"],
      "./es-ES/layouts.json": ["1c52", "lang-interfaces-es-ES-layouts-json"],
      "./fi-FI/layouts.json": ["00db", "lang-interfaces-fi-FI-layouts-json"],
      "./fr-FR/layouts.json": ["803a", "lang-interfaces-fr-FR-layouts-json"],
      "./he-IL/layouts.json": ["62d3", "lang-interfaces-he-IL-layouts-json"],
      "./hu-HU/layouts.json": ["ef87", "lang-interfaces-hu-HU-layouts-json"],
      "./id-ID/layouts.json": ["4ba8", "lang-interfaces-id-ID-layouts-json"],
      "./is-IS/layouts.json": ["eeec", "lang-interfaces-is-IS-layouts-json"],
      "./it-IT/layouts.json": ["a3be", "lang-interfaces-it-IT-layouts-json"],
      "./ja-JP/layouts.json": ["a022", "lang-interfaces-ja-JP-layouts-json"],
      "./ko-KR/layouts.json": ["5add", "lang-interfaces-ko-KR-layouts-json"],
      "./lt-LT/layouts.json": ["0cb7", "lang-interfaces-lt-LT-layouts-json"],
      "./ms-MY/layouts.json": ["4c75", "lang-interfaces-ms-MY-layouts-json"],
      "./nl-NL/layouts.json": ["f1b1", "lang-interfaces-nl-NL-layouts-json"],
      "./no-NO/layouts.json": ["c889", "lang-interfaces-no-NO-layouts-json"],
      "./pl-PL/layouts.json": ["6f8e", "lang-interfaces-pl-PL-layouts-json"],
      "./pt-BR/layouts.json": ["de71", "lang-interfaces-pt-BR-layouts-json"],
      "./pt-PT/layouts.json": ["1b67", "lang-interfaces-pt-PT-layouts-json"],
      "./ro-RO/layouts.json": ["e295", "lang-interfaces-ro-RO-layouts-json"],
      "./ru-RU/layouts.json": ["50b1", "lang-interfaces-ru-RU-layouts-json"],
      "./sk-SK/layouts.json": ["3c9a", "lang-interfaces-sk-SK-layouts-json"],
      "./sr-SP/layouts.json": ["9e55", "lang-interfaces-sr-SP-layouts-json"],
      "./sv-SE/layouts.json": ["89b1", "lang-interfaces-sv-SE-layouts-json"],
      "./tr-TR/layouts.json": ["166b", "lang-interfaces-tr-TR-layouts-json"],
      "./uk-UA/layouts.json": ["6210", "lang-interfaces-uk-UA-layouts-json"],
      "./vi-VN/layouts.json": ["f4eb", "lang-interfaces-vi-VN-layouts-json"],
      "./zh-CN/layouts.json": ["02a2", "lang-interfaces-zh-CN-layouts-json"],
      "./zh-TW/layouts.json": ["54c5", "lang-interfaces-zh-TW-layouts-json"],
    };
    function o(e) {
      if (!n.o(a, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = a[e],
        o = t[0];
      return Promise.all(t.slice(1).map(n.e)).then(function () {
        return n.t(o, 3);
      });
    }
    (o.keys = function () {
      return Object.keys(a);
    }),
      (o.id = "063a"),
      (e.exports = o);
  },
  "0801": function (e, t, n) {},
  "083c": function (e, t, n) {},
  "0973": function (e, t, n) {},
  "0991": function (e, t) {
    function n(e) {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = "MODULE_NOT_FOUND"), t);
    }
    (n.keys = function () {
      return [];
    }),
      (n.resolve = n),
      (e.exports = n),
      (n.id = "0991");
  },
  "0a4f": function (e, t, n) {
    "use strict";
    var a = n("7a1f"),
      o = n.n(a);
    o.a;
  },
  "0aff": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:primary_key","version":"1.0.1","types":["integer","string"],"icon":"vpn_key","recommended":{"length":10},"options":{"monospace":{"name":"$t:monospace","comment":"$t:monospace_comment","interface":"switch","default":true}}}'
    );
  },
  "0bc4": function (e, t, n) {
    var a = {
      "./cs-CZ/date-format.json": ["859c", "date-cs-CZ-date-format-json"],
      "./de-DE/date-format.json": ["e283", "date-de-DE-date-format-json"],
      "./en-US/date-format.json": ["8189"],
      "./fr-FR/date-format.json": ["fd39", "date-fr-FR-date-format-json"],
      "./it-IT/date-format.json": ["f21c", "date-it-IT-date-format-json"],
      "./ms-MY/date-format.json": ["7fbb", "date-ms-MY-date-format-json"],
      "./nl-NL/date-format.json": ["ae99", "date-nl-NL-date-format-json"],
      "./pl-PL/date-format.json": ["973c", "date-pl-PL-date-format-json"],
      "./pt-BR/date-format.json": ["6316", "date-pt-BR-date-format-json"],
      "./ru-RU/date-format.json": ["c8ef", "date-ru-RU-date-format-json"],
      "./sk-SK/date-format.json": ["372a", "date-sk-SK-date-format-json"],
      "./zh-CN/date-format.json": ["d09e", "date-zh-CN-date-format-json"],
    };
    function o(e) {
      if (!n.o(a, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = a[e],
        o = t[0];
      return Promise.all(t.slice(1).map(n.e)).then(function () {
        return n.t(o, 3);
      });
    }
    (o.keys = function () {
      return Object.keys(a);
    }),
      (o.id = "0bc4"),
      (e.exports = o);
  },
  "0cf9": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:toggle-icon","version":"1.0.0","types":["boolean"],"icon":"favorite_border","options":{"textInactive":{"name":"$t:text-inactive-name","comment":"$t:text-inactive-comment","interface":"text-input","options":{"placeholder":"$t:text-inactive-placeholder"}},"iconInactive":{"name":"$t:icon-inactive-name","comment":"$t:icon-inactive-comment","default":"favorite_border","interface":"icon"},"colorInactive":{"name":"$t:color-inactive-name","comment":"$t:color-inactive-comment","default":"blue-grey","interface":"color-palette"},"textActive":{"name":"$t:text-active-name","comment":"$t:text-active-comment","interface":"text-input","options":{"placeholder":"$t:text-active-placeholder"}},"iconActive":{"name":"$t:icon-active-name","comment":"$t:icon-active-comment","default":"favorite","interface":"icon"},"colorActive":{"name":"$t:color-active-name","comment":"$t:color-active-comment","default":"pink-500","interface":"color-palette"}}}'
    );
  },
  "0d2b": function (e, t, n) {
    "use strict";
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("transition", { attrs: { name: "fade" } }, [
          n("div", {
            staticClass: "blocker",
            style: { zIndex: e.zIndex },
            on: {
              click: function (t) {
                return e.$emit("click");
              },
              touchend: function (t) {
                return e.$emit("click");
              },
            },
          }),
        ]);
      },
      o = [],
      i =
        (n("a9e3"),
        { name: "Blocker", props: { zIndex: { type: Number, default: 0 } } }),
      r = i,
      s = (n("ea0d"), n("2877")),
      c = Object(s["a"])(r, a, o, !1, null, "8f8b39ca", null);
    t["a"] = c.exports;
  },
  "0df0": function (e, t, n) {
    "use strict";
    var a = n("389e"),
      o = n.n(a);
    o.a;
  },
  "0f0d": function (e, t, n) {
    "use strict";
    var a = n("7e9d"),
      o = n.n(a);
    o.a;
  },
  1: function (e, t) {},
  "11b8": function (e, t, n) {
    "use strict";
    var a = n("c923"),
      o = n.n(a);
    o.a;
  },
  "127e": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:preview","version":"1.0.0","types":["alias"],"icon":"visibility","options":{"url_template":{"name":"$t:url_template","comment":"Test","interface":"text-input","required":true,"default":"https://example.com/collection/{{ id }}","options":{"placeholder":"https://example.com/articles/{{ id }}/{{ slug }}"}}}}'
    );
  },
  "133e": function (e, t, n) {},
  1581: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    n("d81d"), n("ac1f"), n("466d"), n("5319"), n("498a");
    function a(e) {
      var t = /{{(.*?)}}/g,
        n = e.match(t);
      return Array.isArray(n)
        ? ((n = n.map(function (e) {
            return e.replace(/{{/g, "").replace(/}}/g, "").trim();
          })),
          n)
        : [];
    }
  },
  "15a4": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:time","version":"1.0.0","types":["time"],"icon":"access_time","options":{"display24HourClock":{"name":"$t:24hour","comment":"$t:24hour_comment","interface":"switch","default":true}}}'
    );
  },
  1944: function (e, t, n) {
    "use strict";
    var a = n("4207"),
      o = n.n(a);
    o.a;
  },
  "1b8f": function (e, t) {},
  "1be6": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:repeater","version":"1.0.0","icon":"replay","types":["json"],"recommended":{"length":200},"options":{"template":{"name":"$t:template","comment":"$t:template_comment","interface":"text-input","options":{"placeholder":"$t:template_placeholder","monospace":true}},"fields":{"name":"$t:fields","interface":"repeater","type":"JSON","options":{"template":"{{field}} - {{interface}}","datatype":"array","fields":[{"field":"field","interface":"text-input","type":"string","width":"half","options":{"placeholder":"Choose a name for this field","monospace":true,"formatValue":true},"required":true},{"field":"width","interface":"dropdown","type":"string","width":"half","default":"half","options":{"choices":{"half":"Half Width (Wraps)","half-left":"Half Width (Left Only)","half-right":"Half Width (Right Only)","full":"Full Width"}}},{"interface":"interfaces","field":"interface","type":"string","width":"half","default":"text-input","options":{"relational":false,"status":false}},{"field":"type","interface":"interface-types","width":"half","type":"string","options":{"interfaceField":"interface"}},{"field":"default","interface":"text-input","width":"half","type":"string"},{"field":"note","interface":"text-input","width":"half","type":"string"},{"interface":"interface-options","field":"options","type":"string","width":"full","preview":false,"default":{},"options":{"interfaceField":"interface"}}]}},"placeholder":{"name":"$t:placeholder","comment":"$t:placeholder_comment","interface":"text-input","type":"string","default":"New Item...","advanced":true},"createItemText":{"name":"$t:create_item_text","comment":"$t:create_item_text_comment","interface":"text-input","type":"string","default":"Create Item","advanced":true},"limit":{"name":"$t:limit","comment":"$t:limit_comment","interface":"numeric","default":null,"advanced":true},"duplicable":{"name":"$t:duplicable","comment":"$t:duplicable_comment","interface":"switch","advanced":true},"structure":{"name":"$t:structure","comment":"$t:structure_comment","interface":"dropdown","default":"array","type":"JSON","options":{"choices":{"array":"Array","object":"Object"}},"advanced":true},"structure_key":{"name":"$t:structure_key","comment":"$t:structure_key_comment","interface":"text-input","advanced":true,"options":{"monospace":true}}}}'
    );
  },
  "1c27": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:divider","version":"1.0.0","types":["alias"],"icon":"horizontal_split","hideLabel":true,"recommended":{"required":false},"options":{"style":{"name":"$t:style-name","comment":"$t:style-comment","default":"large","interface":"dropdown","options":{"choices":{"small":"Small","medium":"Medium","large":"Large"}}},"title":{"name":"$t:input-name","comment":"$t:input-comment","interface":"text-input","default":"A Section Title"},"description":{"name":"$t:desc-name","comment":"$t:desc-comment","interface":"text-input"},"hr":{"name":"$t:hr-name","comment":"$t:hr-comment","interface":"switch","type":"BOOLEAN","default":true},"margin":{"name":"$t:margin-name","comment":"$t:margin-comment","interface":"switch","type":"BOOLEAN","default":true}}}'
    );
  },
  "1c75": function (e) {
    e.exports = JSON.parse(
      '{"interfaces":{"2fa-secret":{"2fa-secret":"2FA Secret"},"button-group":{"button_group":"Button Group","choices":"Choices","choices_comment":"Enter JSON key value pairs with the saved value and text displayed.","theme":"Interface Theme","theme_comment":"Set the theme of the interface if supported","value":"Value","flight":"Flight","cruise":"Cruise","run":"Run","bus":"Bus","bike":"Bike","train":"Train","car":"Car","other":"Other"},"calendar":{"calendar":"Calendar","min":"Minimum Date","min_comment":"Minimum date that can be chosen by the user","max":"Maximum Date","max_comment":"Maximum date that can be chosen by the user","formatting":"Date Format","formatting_comment":"Follows [Unicode Technical Standard](https://date-fns.org/v2.8.1/docs/format). If left blank, a relative date will be used."},"checkboxes":{"checkboxes":"Checkboxes","choices":"Choices","choices_comment":"Enter JSON key value pairs with the saved value and text displayed.","wrap":"Wrap with Delimiter","wrap_comment":"Wrap the saved value in a delimiter (improves searchability).","formatting":"Show display text","formatting_comment":"Render the values as the display values","display_text":"Display Text","value":"Value","option":"Option","single":"Single Column","single_comment":"Display Checkboxes in single column","draggable":"Draggable Checkboxes","draggable_comment":"Enable sorting by draggable checkboxes","allow_other":"Allow Other","allow_other_comment":"Allow an additional custom option"},"checkboxes-relational":{"checkboxes_relational":"Checkboxes Relational","grid":"Grid","grid_comment":"Number of items to show in a row","item_template":"Item Template","item_template_comment":"How to display values on the single item layouts","item_template_placeholder":"{{name}} — {{first_name}}","listing_template":"Listing Template","listing_template_comment":"How to display values on the listing layouts.<br>You\'ll need to prepend the collection name","listing_template_placeholder":"{{movie.name}} — {{member.first_name}}"},"code":{"code":"Code","template":"Template","template_comment":"Provide a template the user can use to get started with","language":"Language","language_comment":"Set the programming language to use","lineNumber":"Line Number","lineNumber_comment":"Show line numbers","loc":"No lines of {lang} | One line of {lang} | {count} lines of {lang}","fill_template":"Fill with Template"},"collections":{"collections":"Collections","placeholder":"Placeholder","placeholder_comment":"Static text that shown before a value is selected","placeholder_default":"Choose a collection...","option":"Option","include_system":"Include System","include_system_comment":"Include system collections in the options"},"color":{"color":"Color","format":"Output Format","format_comment":"In what data format to save the value","palette":"Palette","palette_comment":"Add color options as hex values","palette_only":"Palette Only","palette_only_comment":"Only allow the user to pick from the palette"},"color-palette":{"color-picker":"Color Picker"},"date":{"date":"Date","min":"Minimum date","min_comment":"Minimum date that can be chosen by the user","max":"Maximum date","max_comment":"Maximum date that can be chosen by the user","localized":"Localized","localized_comment":"Show the date localized in the output","relative":"Show relative date","relative_comment":"Show the date relatively (eg 2 days ago)","icon_left":"Icon Left","icon_left_comment":"Choose an optional icon to display on the left of the input","icon_right":"Icon Right","icon_right_comment":"Choose an optional icon to display on the right of the input"},"datetime":{"datetime":"Datetime","min":"Minimum time","min_comment":"Minimum time that can be chosen by the user","max":"Maximum time","max_comment":"Maximum time that can be chosen by the user","localized":"Localized","localized_comment":"Show the date localized in the output","relative":"Show relative time","relative_comment":"Show the time relatively (eg 50 minutes ago)","icon_left":"Icon Left","icon_left_comment":"Choose an optional icon to display on the left of the input","icon_right":"Icon Right","icon_right_comment":"Choose an optional icon to display on the right of the input","utc":"Save as UTC","utc_comment":"Save to and display from UTC","default_to_current_datetime":"Default to current datetime","default_to_current_datetime_comment":"Sets the default value to current datetime","format":"Format","format_comment":"The DateTime format to use for the input"},"datetime-created":{"datetime_created":"Datetime Created","relative":"Show relative time","relative_comment":"Show the time relatively (eg 50 minutes ago)","now":"You are creating this now","unknown":"Unknown"},"datetime-updated":{"datetime_updated":"Datetime Updated","relative":"Show relative time","relative_comment":"Show the time relatively (eg 50 minutes ago)","now":"You are creating this now","unknown":"Unknown"},"divider":{"divider":"Divider","style-name":"Divider style","style-comment":"Change the style of the Divider","weight-name":"Thickness of the line","weight-comment":"Change the thickness of the line","input-name":"Divider text","input-comment":"Type your text here","desc-name":"Divider description","desc-comment":"Add here a description","hr-name":"HR","hr-comment":"Display a horizontal rule?","margin-name":"Extra Margin","margin-comment":"Add extra margin above interface"},"dropdown":{"dropdown":"Dropdown","choices":"Choices","choices_comment":"Enter JSON key value pairs with the saved value and text displayed.","placeholder":"Placeholder","placeholder_comment":"Static text that shown before a value is selected","option":"Option","formatting":"Show display text","formatting_comment":"Render the values as the display values","placeholder_default":"Choose an option...","icon":"Icon","icon_comment":"Choose an optional icon to display on the left of the input","options_invalid":"The JSON options provided for the dropdown are invalid:","allow_other":"Allow Other","allow_other_comment":"Allow the user to add their own value"},"file":{"file":"File","view_type":"View Type","view_type_comment":"Select in what way you want to view the files","view_options":"View Options","view_options_comment":"Set the view options to use for the files","view_query":"View Query","view_query_comment":"Set the view query to use for the files","filters":"Filters","filters_comment":"What filters to use","accept":"Accept File Types","accept_comment":"Set a list of MIME types that can be picked","allow_delete":"Allow Delete","allow_delete_comment":"Allows the user to permanently delete the related file through the file interface","crop_preview":"Crop File Preview","crop_preview_comment":"Crops the file preview to fill the available space."},"file-preview":{"file_preview":"File Preview","edit":"Editing Options"},"file-size":{"file_size":"File Size","placeholder":"Placeholder","placeholder_comment":"Enter placeholder text","format":"Format value","format_comment":"Show the value in a human readable way (e.g. 10MB)","format_input":"Format input","format_input_comment":"Enter the value using a dropdown for units","decimal":"Decimal","decimal_comment":"Show the value in decimal counting (10MB vs 10MiB)","crop_preview":"Crop Preview Images"},"files":{"files":"Files","visible_columns":"Visible Columns","visible_columns_comment":"Add a CSV of columns you want to display as preview","preferences":"Listing View Preferences","preferences_comment":"Set what options to use for the modal","relation_not_setup":"The relationship hasn\'t been configured correctly","template":"Display Template","template_comment":"Choose how to display values on the item layouts","template_placeholder":"{{movie.name}} — {{member.first_name}}","allow_create":"Allow Create","allow_create_comment":"Allow the user to create a new item from this interface","allow_select":"Allow Select","allow_select_comment":"Allow the user to select an existing item","accept":"Accept File Types","accept_comment":"Set a list of MIME types that can be picked","edit_item":"Edit"},"hashed":{"hashed":"Hashed","hide":"Hide Value","hide_comment":"Display dots instead of the characters you enter","placeholder":"Placeholder","placeholder_comment":"Enter placeholder text","show_hash":"Show the hashed output","show_hash_comment":"Display the saved hash","hashing_type":"Hashing Type","hashing_type_comment":"What method of hashing to use","width":"Size","width_comment":"Set what width to use for the input","auto":"Automatic","small":"Small","medium":"Medium","large":"Large","secured":"Value Secured"},"icon":{"icon":"Icon","search_placeholder":"Search for an icon..."},"interface-options":{"interface-options":"Interface Options","interface-field":"Interface Field","placeholder-comment":"The field that holds the name of the interface","placeholder-default":"Enter a field name..."},"interface-types":{"interface-types":"Interface types","interface-field":"Interface Field","placeholder-comment":"The field that holds the name of the interface","placeholder-default":"Enter a field name..."},"interfaces":{"interfaces":"Interfaces","placeholder":"Placeholder","placeholder_comment":"Static text that shown before a value is selected","placeholder_default":"Choose an interface","option":"Option","relational":"Include relational interfaces","include_status":"Include the status interfaces"},"json":{"template":"Template","template_comment":"Provide a template the user can use to get started with"},"key-value":{"key_interface":"Key Interface","key_data_type":"Key Data Type","key_options":"Key Interface Options","value_interface":"Key Interface","value_data_type":"Key Data Type","value_options":"Key Interface Options"},"language":{"input":"Language","select_language":"Select a language...","limit":"Limit to Directus Availability","limit_comment":"Only show languages that are available as translations in Directus"},"many-to-many":{"m2m":"Many to Many","visible_columns":"Visible Columns","visible_columns_comment":"Add a CSV of columns you want to display as preview","preferences":"Listing View Preferences","preferences_comment":"Set what options to use for the modal","relation_not_setup":"The relationship hasn\'t been configured correctly","template":"Display Template","template_comment":"Choose how to display values on the item layouts","template_placeholder":"{{movie.name}} — {{member.first_name}}","allow_create":"Allow Create","allow_create_comment":"Allow the user to create a new item from this interface","allow_select":"Allow Select","allow_select_comment":"Allow the user to select an existing item"},"many-to-one":{"m2o":"Many to One","template":"Dropdown Template","template_comment":"How to format the dropdown options","visible_fields":"Visible Fields","visible_fields_placeholder":"title,author","visible_fields_note":"CSV of fields visible when selecting an item in the modal","template_placeholder":"{{title}} — {{author}}","placeholder":"Placeholder","placeholder_comment":"Enter placeholder text","preferences":"Listing View Preferences","preferences_comment":"Set what options to use for the modal","relationship_not_setup":"The relationship hasn\'t been configured correctly","icon":"Icon","icon_comment":"Choose an optional icon to display on the left of the input","select_one":"Select one","threshold":"Threshold","threshold_comment":"The number of items after which a modal will be used instead of a dropdown"},"map":{"map":"Map","choices":"choices","choices_comment":"Enter JSON key value pairs with the saved value and text displayed.","theme":"Interface Theme","theme_comment":"Set the theme of the interface if supported","value":"Value","map_lat":"Default Latitude","map_lat_comment":"Map will be centered at this latitude","map_lng":"Default Longitude","map_lng_comment":"Map will be centered at this longitude","height":"Height","default_zoom":"Default Zoom","default_zoom_comment":"Default zoom level of the map","max_zoom":"Max Zoom","max_zoom_comment":"Maximum zoom allowed in the map","no_location":"No location found","user_location_error_blocked":"You\'ve disabled the location access. Kindly enable it from the browser addressbar to auto detect your location.","user_location_error":"There was an error while trying to get your location. Please try again.","address_to_code":"Address Input","address_to_code_comment":"Add an input field to automatically get the geocodes from an address. Uses <a href=\\"https://wiki.openstreetmap.org/wiki/Nominatim\\">Nominatim</a>. Please check their usage policy.","address_to_code_error":"No geocode found for this address","clear_location":"Clear Location","my_location":"Set My Location","address_location":"Set Address Location"},"markdown":{"markdown":"Markdown","edit":"Edit","preview":"Preview","tabbed_preview":"Tabbed Preview","tabbed_preview_comment":"How to display the editor and preview","tabbed_preview_on":"Tabbed Preview","tabbed_preview_off":"Side-by-side Preview","rows":"Rows","rows_comment":"The starting number of text rows available","placeholder":"Placeholder","placeholder_comment":"Enter placeholder text"},"multiselect":{"multiselect":"Multi-Select","choices":"Choices","choices_comment":"Enter JSON key value pairs with the saved value and displayed text","placeholder":"Placeholder","placeholder_comment":"Enter placeholder text","size":"Size","size_comment":"Number of options visible before scrolling","option":"Option","wrap":"Wrap with Delimiter","wrap_comment":"Wrap the values with a pair of delimiters to allow strict searching for a single value","format":"Browse Format","format_comment":"The output format on the Browse Items page"},"numeric":{"numeric":"Numeric","placeholder":"Placeholder","placeholder_comment":"Enter placeholder text","localized":"Localized","localized_comment":"Localize the output to the user\'s locale","icon_left":"Icon Left","icon_left_comment":"Choose an optional icon to display on the left of the input","icon_right":"Icon Right","icon_right_comment":"Choose an optional icon to display on the right of the input","monospace":"Monospace","monospace_comment":"Use a monospace font"},"one-to-many":{"o2m":"One to Many","select_items":"Select the items","relation_not_setup":"The relationship hasn\'t been configured correctly","visible_columns":"Visible Columns","visible_columns_comment":"Add a CSV of columns you want to display as preview","preferences":"Listing View Preferences","preferences_comment":"Set what options to use for the modal","template":"Display Template","template_comment":"How to format value on the item browse display","template_placeholder":"{{title}} — {{author}}","allow_create":"Allow Create","allow_create_comment":"Allow the user to create a new item from this interface","allow_select":"Allow Select","allow_select_comment":"Allow the user to select an existing item","delete_mode":"Delete mode","delete_mode_comment":"What to do when the user deselects an item","sort_field":"Sort Field","sort_field_comment":"The field to store the sort value in"},"password":{"password":"Password","hide":"Hide Value","hide_comment":"Display dots instead of the characters you enter","placeholder":"Placeholder","placeholder_comment":"Enter placeholder text","confirm_placeholder":"Confirm password...","show_hash":"Show the hashed output","show_hash_comment":"Display the saved hash","hashing_type":"Hashing Type","hashing_type_comment":"What method of hashing to use"},"preview":{"preview":"Preview","url_template":"URL Template","url_template_comment":"A mustache template for a URL to preview content","preview_item":"Preview this item"},"primary-key":{"primary_key":"Primary Key","immutable":"Can not be changed","monospace":"Monospace","monospace_comment":"Use a monospace font"},"radio-buttons":{"radio":"Radio Buttons","choices":"Choices","choices_comment":"Enter JSON key value pairs with the saved value and text displayed.","option":"Option","format":"Browse Format","format_comment":"The output format on the Browse Items page"},"rating":{"rating":"Rating","value":"Value","active_color":"Active Color","active_color_comment":"Active color of selected stars","max_stars":"Max Stars","max_stars_comment":"Number of maximum rating allowed","display":"Display","display_comment":"How to display rating values"},"repeater":{"repeater":"Repeater","template":"Display Template","template_comment":"How to format value on the item browse display and inline preview","template_placeholder":"{{title}} — ({{author}})","fields":"Fields","fields_comment":"What fields to show in each repeated row","limit":"Limit","limit_comment":"Maximum amount of rows the user can add","duplicable":"Duplicable rows","duplicable_comment":"Whether to make rows duplicable or not","structure":"Structure","structure_comment":"Whether to save the JSON as an array of objects or single object with unique keys","structure_key":"Structure Key Field","structure_key_comment":"When using an object for the JSON structure, this value controls what field to use for the key values","placeholder":"Placeholder","placeholder_comment":"The value that shows up instead of the template if there\'s no value entered yet","create_item_text":"Create Item Text","create_item_text_comment":"Text that\'s displayed in the button that adds a new row to the repeater"},"slider":{"slider":"Slider","min":"Minimum","min_comment":"The minimum valid value","max":"Maximum","max_comment":"The maximum valid value","step":"Step","step_comment":"Increments at which the value can be set","unit":"Unit","unit_comment":"Show an unit next to the slider value, e.g. 15 Pounds"},"slug":{"slug":"Slug","placeholder_name":"Placeholder","placeholder_comment":"The placeholder text to show","force_lowercase":"Force Lowercase","force_lowercase_comment":"Makes sure the slug is in lowercase","mirrored_field":"Mirrored Field","mirrored_field_comment":"Keep the slug up to date with another (text) field","only_on_create":"Only on Create","only_on_create_comment":"Allow the slug to be edited only when creating a new item"},"sort":{"sort":"Sort"},"status":{"status":"Status","status_mapping":"Status Mapping","status_mapping_comment":"Enter JSON status options","simple_badge":"Simple Badge","simple_badge_comment":"Displays a colored dot on the item listing page.","published":"Published","under_review":"Under Review","draft":"Draft","deleted":"Deleted"},"tags":{"tags":"Tags","alphabetize":"Alphabetize tags","alphabetize_comment":"Will rearrange tags to be alphabetical","lowercase":"Force Lowercase","lowercase_comment":"Convert all tags to lowercase","wrap":"Wrap with delimiter","wrap_comment":"Wrap the values with a pair of delimiters to allow strict searching for a single value","format":"Format Value","format_comment":"Convert the tags to Title Case when displaying the value","sanitize":"Sanitize","sanitize_comment":"Removes any non-alphanumeric characters and converts spaces to hyphens","placeholder_text":"Type a tag and then hit enter or comma...","icon_left":"Icon Left","icon_left_comment":"Choose an optional icon to display on the left of the input","icon_right":"Icon Right","icon_right_comment":"Choose an optional icon to display on the right of the input","validation":"Validation","validation_comment":"A RegEx to check each individual value against","validation_message":"Validation Message","validation_message_comment":"A short message to show users if tag validation fails","validation_message_default":"Please enter a valid tag"},"text-input":{"input":"Text Input","placeholder":"Placeholder","trim":"Trim","trim_comment":"Trim surrounding whitespace from the value before saving","char_count":"Show Character Count","char_count_comment":"Show the remaining characters available","icon_left":"Icon Left","icon_left_comment":"Choose an optional icon to display on the left of the input","icon_right":"Icon Right","icon_right_comment":"Choose an optional icon to display on the right of the input","format":"Pretty Output","format_comment":"Convert the value to title case","monospace":"Monospace","monospace_comment":"Use a monospace font","auto":"Automatic","small":"Small","medium":"Medium","large":"Large"},"textarea":{"textarea":"Text-Area","rows":"Rows","rows_comment":"The number of text rows available for the input before scrolling","placeholder":"Placeholder","placeholder_comment":"Enter placeholder text","serif":"Serif Font","serif_comment":"Use a larger, serif typeface"},"time":{"time":"Time","include_seconds":"Include seconds","include_seconds_comment":"Include seconds in the interface","24hour":"Display 24 hour clock","24hour_comment":"Show the time in 24-hour format (eg.: 15:30)"},"switch":{"switch":"Switch","label_on":"Label (On)","label_on_comment":"Label to show next to the toggle when the toggle is on","label_off":"Label (Off)","label_off_comment":"Label to show next to the toggle when the toggle is off","checkbox":"Show as Checkbox","checkbox_comment":"Display a checkbox instead of the default switch"},"toggle-icon":{"toggle-icon":"Toggle Icon","text-inactive-name":"Inactive Text","text-inactive-comment":"Text next to the inactive icon","text-inactive-placeholder":"Enter your text here","icon-inactive-name":"Inactive Icon","icon-inactive-comment":"Choose an inactive icon","color-inactive-name":"Inactive Color","color-inactive-comment":"Choose the inactive color","text-active-name":"Active Text","text-active-comment":"Text next to the active icon","text-active-placeholder":"Enter your text here","icon-active-name":"Active Icon","icon-active-comment":"Choose an active icon","color-active-name":"Active Color","color-active-comment":"Choose the active color"},"translation":{"translation":"Translation","language_field":"Language Field","language_field_comment":"The field that holds the language code in the related collection","languages":"Languages","template":"Display Template","template_comment":"Choose how to display values on the item layouts","template_placeholder":"{{title}} — {{body}}"},"user":{"user":"User","avatar":"Avatar","name":"Name","template":"Template","template_comment":"How to format the users in the dropdown","placeholder":"Placeholder","placeholder_comment":"Add a placeholder"},"owner":{"owner":"Owner","avatar":"Avatar","name":"Name","template":"Template","template_comment":"How to display the user on the item detail page","display":"Display","display_comment":"How to display the user on the item browse page","you":"You will be the creator","unknown":"Unknown"},"user-roles":{"user-roles":"User Role","choose_role":"Choose a role...","relational":"Relational","relational_comment":"Save as a relational record","show_public":"Show public role"},"user-updated":{"user_updated":"User Updated","avatar":"Avatar","name":"Name","template":"Template","template_comment":"How to display the user on the item detail page","display":"Display","display_comment":"How to display the user on the item browse page","you":"You will be the updater","unknown":"Unknown"},"wysiwyg":{"toolbar":"Toolbar Options","toolbar_comment":"Show, hide, and reorder toolbar options","custom_formats":"Custom Formats","custom_formats_comment":"Custom HTML wrappers for content","tinymce_options":"TinyMCE Options","tinymce_options_comment":"Override any of [the TinyMCE init options](https://www.tiny.cloud/docs/configure/)."}}}'
    );
  },
  "1c82": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:password","version":"1.0.1","types":["hash","string"],"icon":"security","recommended":{"length":100},"options":{"hide":{"name":"$t:hide","comment":"$t:hide_comment","interface":"switch","default":true},"placeholder":{"name":"$t:placeholder","comment":"$t:placeholder_comment","interface":"text-input","length":100,"default":"Enter a password..."},"showHash":{"name":"$t:show_hash","comment":"$t:show_hash_comment","interface":"switch","default":false},"hashingType":{"name":"$t:hashing_type","comment":"$t:hashing_type_comment","interface":"dropdown","default":"core","options":{"choices":{"core":"Default","bcrypt":"bcrypt","md5":"md5","sha1":"SHA-1","sha224":"SHA-224","sha256":"SHA-256","sha384":"SHA-384","sha512":"SHA-512"}}}}}'
    );
  },
  "1e69": function (e) {
    e.exports = JSON.parse(
      '{"about_directus":"About Directus","activity":"Activity","activity_log":"Activity Log","activity_outside_directus":"Item created outside of Directus","add_field_filter":"Add a field filter","add_new":"Add New","add_note":"Add a helpful note for users...","additional_info":"Additional Info","admin_email":"Admin Email","admin_password":"Admin Password","admin_settings":"Admin Settings","advanced_options":"Advanced Options","all":"All","allowed_status_options":"Allowed Status Options","all_set":"All set!","api_installed":"API Successfully Installed","api_url":"API URL","asc":"asc","auto_generate":"Auto-Generate","auto_generated":"Automatically generated...","back":"Back","batch":"Batch","batch_delete":"Batch Delete","batch_delete_confirm":"No items have been selected | Are you sure you want to delete this item? This action can not be undone. | Are you sure you want to delete these {count} items? This action can not be undone.","batch_edit":"Batch Editing Items: {collection}","batch_edit_field":"Batch Edit Field","between":"Between","bookmark_global":"Global: Save for all users","bookmark_personal":"Personal: Save for me","bookmark_role":"Role: Save for \'{role}\'","bookmarks":"Bookmarks","both":"Both","cancel":"Cancel","cant_disable_primary":"You can\'t disable primary key on an existing field. Remove this field instead.","cant_sort_by_this_field":"You can\'t sort by this field","change_project":"Change Project","choose_one":"Choose One","choose_project":"Choose Project","create_project":"Create Project","clear":"Clear","clear_value":"Clear value","click_to_toggle_all_none":"Click to toggle entire column on/off","collection":"Collection | Collections","collection_count":"No Collections | One Collection | {count} Collections","collection_contains_items":"{collection} contains {count} items","collection_invalid_name":"Invalid collection name","collection_names_cannot_be_changed":"Collection names cannot be edited at this time.","collection_removed":"Collection Removed","collection_updated":"Collection Updated","collections_and_fields":"Collection & Fields","collections":{"directus_activity":"Activity","directus_files":"Files","directus_users":"Users"},"fields":{"directus_activity":{"action":"Action","collection":"Collection","item":"Item Primary Key","action_by":"Action By","action_on":"Action On","edited_on":"Edited On","comment_deleted_on":"Comment Deleted On","ip":"IP Address","user_agent":"User Agent","comment":"Comment"},"directus_files":{"title":"Title","tags":"Tags","location":"Location","description":"Description","filename_download":"Filename Download","filename_disk":"Filename Disk","private_hash":"Private Hash","checksum":"Checksum","uploaded_on":"Uploaded On","uploaded_by":"Uploaded By","width":"Width","height":"Height","duration":"Duration","filesize":"Filesize","metadata":"Metadata"},"directus_users":{"status":"Status","first_name":"First Name","last_name":"Last Name","email":"Email","email_notifications":"Email Notifications","password":"Password","role":"Role","company":"Company","title":"Title","timezone":"Timezone","locale":"Locale","avatar":"Avatar","theme":"Theme","2fa_secret":"Two-Factor Authentication"}},"modules":{},"comfortable":"Comfortable","coming_soon":"Coming Soon","comment":"Comment","comments":"Comments","compact":"Compact","config_error":"Missing Config","config_error_copy":"Make sure you\'ve created the application\'s configuration file","confirm":"Confirm","connection":"Connection","contains":"Contains","continue":"Continue","continue_as":"<b>{name}</b> is already authenticated for this project. If you recognize this account, please press continue.","cozy":"Cozy","create":"Create","create_collection":"Create Collection","create_field":"Create Field","create_role":"Create Role","created_by":"Created By","owner":"Owner","created_on":"Created On","create_new_project":"Create New Project","create_new_project_copy":"Make sure you have your database information handy, then enter your API\'s Super-Admin password to continue.","creating_item":"Creating Item","creating_item_page_title":"Creating Item: {collection}","creating_role":"Creating Role","currently_selected":"Currently selected: {thing}","database_connection":"Database Connection","database_connection_copy":"Next, we need to know how to connect to the database where this project will be managed.","datatype":"Datatype","datatypes":{"mysql":{"BIGINT":"An integer. When signed (allows negative) length is -9e18 to 9e18, otherwise the max is 18e18.","BOOLEAN":"True or false. Is saved as either 1 or 0 respectively.","CHAR":"A fixed-length non-binary string right-padded with spaces. Length can be 0 to 255 characters.","DATE":"A date. Allows `1000-01-01` to `9999-12-31`.","DATETIME":"A date and time. Allows `1000-01-01 00:00:00` to `9999-12-31 23:59:59`.","DECIMAL":"An accurate number (eg: for currency), with 1 to 65 digits length (L) and 0 to 30 digits decimal (D). Length format: `L,D`","DOUBLE":"An approximate binary number, 8 bytes with a floating decimal point.","FLOAT":"An approximate binary number, 4 bytes with a floating decimal point.","INT":"An integer. When signed (allows negative) length is -2,147,483,648 to 2,147,483,647, otherwise the max is 4,294,967,295.","LONGTEXT":"A string with a max length of 4,294,967,295 characters.","MEDIUMINT":"An integer. When signed (allows negative) length is -8,388,608 to 8,388,607, otherwise the max is 16,777,215.","MEDIUMTEXT":"A string with a max length of 16,777,215 characters.","SMALLINT":"An integer. When signed (allows negative) length is -32,768 to 32,767, otherwise the max is 65,535.","TEXT":"A string with a max length of 65,535 characters.","TIME":"A time. Allows `-838:59:59` to `838:59:59`.","TIMESTAMP":"A date and time. Allows `1970-01-01 00:00:01` UTC to `2038-01-19 03:14:07` UTC.","TINYINT":"An integer. When signed (allows negative) length is -128 to 127, otherwise the max is 255.","TINYTEXT":"A string with a max length of 255 characters.","VARCHAR":"A variable-length non-binary string. Length can be 0 to 65,535 characters (MySQL 5.0.3+).","YEAR":"A year. Allows `1901` to `2155` or `0000`"}},"date_and_time":"Date & Time","db_column_name":"Database column name...","db_datatype":"{db} Datatype","db_name":"Database Name","db_password":"Database User Password","db_type":"Database Type","db_update_failed":"The database couldn\'t be updated.","db_updated":"Database successfully updated","db_user":"Database User","default":"Default","default_value":"Default Value","delete":"Delete","delete_are_you_sure":"Are you sure you want to delete this item? This action can not be undone.","delete_bookmark":"Delete Bookmark","delete_bookmark_body":"Are you sure you want to delete this bookmark? This action cannot be undone.","delete_collection_are_you_sure":"Are you sure you want to delete this collection? This action can not be undone.","delete_confirmation":"Delete Confirmation","delete_field_are_you_sure":"Are you sure you want to delete the field \\"{field}\\"? This action can not be undone.","delete_role_are_you_sure":"Are you sure to delete the role \\"{name}\\"? This action cannot be undone.","desc":"desc","description":"Description","deselect":"Deselect","dialog_beginning":"Beginning of dialog window.","discard_changes":"Discard Changes","display_name":"Display Name","directus_version":"Directus Version","done":"Done","dont_manage":"Don\'t Manage","dont_manage_copy":"Privileges, preferences, and settings for this collection will be permanently removed from the system! Are you sure?","dont_show":"Don\'t Show","drop_files":"Can\'t Drop Files | Drop file here... | Drop files here...","duplicate":"Duplicate","duplicating_field":"Duplicating Field","editing":"Editing Item: {collection}","editing_item":"Editing Item","editing_items":"Batch Editing {count} Items","editing_my_profile":"Editing My Profile","editing_single":"Editing {collection}","email":"Email","email_address":"Email Address","embed":"Embed","embed_placeholder":"YouTube, Vimeo, or other link","empty_collection":"Empty Collection","empty_collection_body":"There are no items in this collection yet","enable_manual_sorting":"Enable Manual Sorting","enter_collection_name":"Enter collection name...","enter_otp":"Please enter the one-time-password (OTP) from your authenticator app.","enter_role_name":"Enter role name...","enter_value":"Enter Value","environment":"Environment","equal_to":"Equal to","error_unknown":"Unknown error. Try again later.","errors":{"11":"Can Not Reach Database","100":"Incorrect Email/Password","101":"Logged-out from Inactivity","102":"Logged-out from Inactivity","103":"User Suspended","106":"Incorrect Email/Password","107":"User Not Found","111":"Enter One-Time Password","112":"Wrong One-Time Password","114":"Incorrect Email/Password","115":"SSO is not allowed when 2FA is enabled","-1":"Couldn\'t Reach API"},"esc_cancel":"Escape will cancel and close the window.","event_count":"No Events | One Event | {count} Events","existing":"Existing","extension_error":"There was a problem loading the {ext} extension.","extensions_missing":"No Extensions Found","extensions_missing_copy":"Make sure you have the system extensions installed.","fetching_data":"Fetching Data","field":"Field | Fields","field_already_exists":"Field Already Exists: {field}","field_created":"Field Created","field_removed":"Field Removed","field_setup_interface":"What type of field are you creating?","field_setup_schema":"How should it store content in the database?","field_setup_relation":"How is the relationship\'s data stored?","field_setup_options":"All set! Just review these interface options...","field_type":"Field Type","field_updated":"Field Updated","field_width":"Field Width","field_width_half":"Half Width (Wraps)","field_width_left":"Half Width (Left Only)","field_width_right":"Half Width (Right Only)","field_width_full":"Full Width","field_width_fill":"Fill the Page","field_width_note":"The width of this field within the form layout. Half-widths wrap based on other fields and their sort order.","fields_are_saved_instantly":"Changes to fields are saved instantly","fieldtypes":{"alias":"Fields that do not save data or do not have corresponding database columns","array":"Standard array format in API response","date":"Date, eg: 2018-09-19","datetime":"A date and time in ISO format, eg: 2018-09-19T14:00:43.381Z","datetime_created":"System field to track the datetime an item was created, used by revisions","datetime_updated":"System field to track the datetime an item was updated, used by revisions","decimal":"Number that includes a decimal","file":"Foreign key to directus_files.id","group":"Groups fields together visually, children save group into directus_fields.group","integer":"Whole number","json":"Standard JSON format in API response","lang":"Specific to translation interfaces, this stores the language key","m2o":"Many-to-One Relationship","managed":"Managed","o2m":"One-to-Many Relationship","sort":"System field used in drag-and-drop item reordering","status":"System field used for publishing workflows","string":"Any text, numbers, spaces, or symbols; limited by its number of characters","time":"Time, eg: 14:09:22","translation":"Specific to translation interfaces, this o2m stores multi-lingual content","owner":"System field to track the user who created an item, used by revisions","user_updated":"System field to track the user who updated an item, used by revisions","uuid":"A Universally Unique Identifier"},"file":"File","file_library":"File Library","file_type_not_accepted":"{filename} can\'t be uploaded. It is not a valid file type for this field.","file_upload":"Upload File(s)","file_download":"Download","forgot_password":"Forgot Password","greater_than":"Greater than","greater_than_equal":"Greater than or equal to","help_and_docs":"Help & Docs","hidden":"Hidden","hidden_browse":"Hidden on Browse","hidden_detail":"Hidden on Detail","host":"Host","icon":"Icon","in_list":"One of these","info":"Info","initial_schema":"Choose an Initial Schema","initial_schema_copy":"Choose from existing database architectures or start fresh. You can always extend and tweak this later.","install":"Install","install_copy":"This project has not been setup yet. If you are an administrator you can create it now by clicking on the button below.","install_busy_copy":"Thank you. One moment while we create your database, import your schema, and add a new config file for this API.","install_all_set_copy":"The project has successfully been created. You can now sign in to the App with the admin credentials you entered.","install_all_set_super_admin_password":"Make sure to copy the generated Super-Admin password below. You won\'t be able to see it again!","php_extensions":"PHP Extensions","missing_value":"Missing: {value}","write_access":"Write Access","value_not_writeable":"{value} not writeable","intelligent_defaults":"Advanced options lets you configure how data will be stored in the database and tweak additional app settings.","interface":"Interface | Interfaces","interface_count":"No Interfaces | One Interface | {count} Interfaces","interface_has_no_options":"This interface doesn\'t have any options","interface_settings":"Every interface can be perfectly tailored to your needs. Below are the available options for this interface, but only some are required.","is_empty":"Is empty","is_not_null":"Is not NULL","is_null":"Is NULL","item_count":"No Items | One Item | {count} Items","item_count_filter":"No Results | One Result | {count} Results","item_deleted":"Item Deleted","item_saved":"Item Saved | {count} Items Saved","junction_collection":"Junction Collection","keep_editing":"Keep Editing","latency":"Latency","learn_more":"Learn More","leave_comment":"Leave a comment...","length":"Length","length_disabled_placeholder":"Length is determined by the datatype","less_than":"Less than","less_than_equal":"Less than or equal to","limited":"Limited","loading":"Loading...","load_more":"Load more","loading_more":"Loading More Items","login":"Log in","m2m":"Many-to-Many (M2M)","m2o":"Many-to-One (M2O)","manage":"Manage","manage_started":"Started Managing Collection","manage_stopped":"Stopped Managing Collection","max_one_primary_key":"You can only have 1 primary key field per collection","max_size":"Max Size: {size}","mixed":"Mixed","modified_by":"Modified By","modified_on":"Modified On","more_options":"More options","months":{"january":"January","february":"February","march":"March","april":"April","may":"May","june":"June","july":"July","august":"August","september":"September","october":"October","november":"November","december":"December"},"my_activity":"My Activity","my_profile":"My Profile: {name}","name":"Name","name_bookmark":"What would you like to name this bookmark?","navigate_changes":"Are you sure you want to leave this page? The changes you made will be lost if you navigate away from this page.","new":"New","new_field":"New Field","new_file":"New File","new_item":"New Item","next":"Next","no_collections":"No Collections Setup","no_collections_body":"It seems like there aren\'t any collections setup yet","no_fields":"No Fields Setup","no_fields_body":"It seems like this collection doesn\'t have any fields setup yet","no_files":"No Files","no_files_body":"It seems like there haven\'t been any files uploaded yet","no_interface_error":"Field {field} doesn\'t have an interface setup","no_items_selected":"No items selected","no_related_entries":"Has no related entries","no_results":"No Results","no_results_body":"The current filters do not match any collection items","none":"None","not_authenticated":"Not Authenticated","not_between":"Not between","not_contains":"Doesn\'t contain","not_empty":"Is not empty","not_equal_to":"Not equal to","not_in_list":"Not one of these","note":"Note","note_hidden":"[Learn More](https://docs.directus.io/guides/collections.html#hidden)","note_icon":"The icon shown in the App\'s navigation sidebar","note_managed":"[Learn More](https://docs.directus.io/guides/collections.html#managing-collections)","note_note":"An internal description...","note_single":"[Learn More](https://docs.directus.io/guides/collections.html#single)","notifications":"Notifications","no_public_projects":"This API doesn\'t have any public projects. Please contact your administrator.","numeric":"Numeric","o2m":"One-to-Many (O2M)","ok":"OK","one_moment":"One Moment...","open_on_gh":"Open on GitHub","operator":"Operator","optional":"Optional","options":"Options","other":"Other","otp":"One-Time Password","page_not_found":"Page Not Found","page_not_found_body":"The page you are looking for doesn\'t seem to exist.","password":"Password","password_reset_sending":"Sending email...","password_reset_sent":"If a valid user with this email address exists in Directus, we\'ve sent you a secure link to reset your password.","password_reset_successful":"Password successfully reset.","permission_states":{"always":"Always","create":"Create","full":"All","mine":"Mine Only","none":"None","on_create":"On Creation","on_update":"On Update","read":"Readonly","role":"Role Only","update":"Update"},"permissions":"Permissions","permissions_admin":"Admins have access to all managed data within the system by default.","permissions_no_collections":"This project does not have any collections yet.","popular":"Popular","port":"Port","powered_by_directus":"Powered by Directus","preview_and_revert":"Preview and Revert","primary_key":"Primary Key","project":"Project","project_info":"Project Information","project_info_copy":"Below are a few questions about your project, including the credentials of your first administrator.","project_key":"Project Key","project_name":"Project Name","project_not_configured":"Project Not Configured","read":"Read","readable_fields":"Readable Fields","readable_fields_copy":"Select the fields that the user can view","readonly":"Readonly","regex":"RegEx","related_collection":"Related Collection","related_entries":"Has related entries","relational":"Relational","relationship":"Relationship","relationship_not_setup":"The relationship hasn\'t been configured correctly.","remove":"Remove","remove_related":"Remove Related Item","report_issue":"Report Issue","request_feature":"Request Feature","required":"Required","reset":"Reset","reset_password":"Reset Password","reset_preferences":"Reset all listing preferences","reset_to_default":"Reset to default","revert":"Revert","revert_copy":"Do you want to revert this item to how it was on {date}?","role_count":"No Roles | One Role | {count} Roles","role_settings":"Role Settings","roles":"User Roles","save":"Save","save_and_add":"Save and Add New","save_and_stay":"Save and Stay","save_as_bookmark":"Save as Bookmark","save_as_copy":"Save as Copy","scan_in_authenticator":"Scan this code in your authenticator app","schema":"Schema","search":"Search","search_for_item":"Search for an item...","search_interface":"Search for an interface...","select_existing":"Select Existing","select_field":"Select a Field","select_fields":"Select Fields","select_from_device":"Select from device","select_interface":"Select an interface","select_interface_below":"Select an interface below","select_statuses":"Select Statuses","select_statuses_copy":"Select the statuses the user can use","server_details":"Server Details","server_error":"Server Error","server_error_copy":"Something is wrong with this project’s server or database.","server_trouble":"Server Trouble","server_trouble_copy":"Try again later or contact your system administrator help.","settings":"Settings","settings_collections_fields":"Collections & Fields","settings_extensions":"Extensions","settings_global":"Global Settings","settings_permissions":"Roles & Permissions","settings_project":"Project Settings","settings_saved":"Settings Saved","settings_webhooks":"Webhooks","setup_2fa":"Setup 2FA","show_directus_collections":"Show Directus System Collections","signed":"Signed","sign_in":"Sign In","sign_out":"Sign Out","sign_out_confirm":"Are you sure you want to sign out?","sign_out_confirm_edits":"Are you sure you want to sign out? All unsaved changes will be lost.","signing_in":"Signing In","single":"Single","something_went_wrong":"Something went wrong.","something_went_wrong_body":"Trouble processing request. Try again after refreshing the page.","sort":"Sort","sort_by":"Sort By","sort_direction":"Sort Direction","spacing":"Spacing","status":"Status","statuses":"Statuses","submit":"Submit","text":"Text","translation":"Translation","translated_field_name":"Translated field name...","not_translated_in_language":"Not Translated in {language}","this_item_is_not_available":"This item is not available.","this_collection":"This Collection","to":"To","turn_all_on":"Turn all on","turn_all_off":"Turn all off","undo_changes":"Undo changes","unique":"Unique","unsaved_changes":"Unsaved Changes","unsaved_changes_copy":"Are you sure you want to leave this page?","update":"Update","update_confirm":"Are you sure you want to update {count} items?","update_field":"Update Field","upload_exceeds_max_size":"{filename} can\'t be uploaded. Your server is not configured to handle uploads of this size.","user_directory":"User Directory","user_edit_warning":"{first_name} {last_name} is editing this item too. Please coordinate with them so you don\'t lose your changes.","validation":"Validation","value":"Value","values":"Values","version":"Version","version_and_updates":"Version and Updates","view_type":"View As...","visible_all_users":"Visible for all users","webhook_count":"No Webhooks | 1 Webhook | {count} Webhooks","weeks":{"monday":"Monday","tuesday":"Tuesday","wednesday":"Wednesday","thursday":"Thursday","friday":"Friday","saturday":"Saturday","sunday":"Sunday"},"welcome":"Welcome","welcome_to_directus":"Welcome to Directus","welcome_to_directus_copy":"Please make sure you have your database information handy to set up your first project.","why":"Why?","wrapping_up":"Wrapping Up","wrong_super_admin_password":"The super admin password you provided is incorrect.","writable_fields":"Writable Fields","writable_fields_copy":"Select the fields that the user can edit","yes":"Yes"}'
    );
  },
  "1f0e": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:m2o","version":"1.0.1","types":["m2o"],"relation":"m2o","icon":"call_merge","options":{"template":{"name":"$t:template","comment":"$t:template_comment","interface":"text-input","options":{"placeholder":"$t:template_placeholder"}},"visible_fields":{"name":"$t:visible_fields","comment":"$t:visible_fields_note","interface":"text-input","options":{"placeholder":"$t:visible_fields_placeholder"}},"placeholder":{"name":"$t:placeholder","comment":"$t:placeholder_comment","interface":"text-input","length":200,"default":"$t:select_one"},"threshold":{"name":"$t:threshold","comment":"$t:threshold_comment","interface":"numeric","default":20},"icon":{"name":"$t:icon","comment":"$t:icon_comment","interface":"icon","advanced":true}}}'
    );
  },
  2224: function (e, t, n) {
    e.exports = n.p + "img/logo-dark.bf3960d9.svg";
  },
  "24b0": function (e, t, n) {
    var a = {
      "./2fa-secret/input.vue": ["4280", "chunk-2d20f576", "chunk-0b3e4f54"],
      "./button-group/input.vue": ["0e9b", "chunk-8c13f210"],
      "./calendar/input.vue": ["804b", "chunk-a3670984"],
      "./checkboxes-relational/input.vue": ["e3d9", "chunk-1232e627"],
      "./checkboxes/input.vue": ["0e66", "chunk-2d50aa6f"],
      "./code/input.vue": ["daaa", "chunk-49328605", "chunk-3020ac28"],
      "./collections/input.vue": ["e132", "chunk-41dc27c1"],
      "./color-palette/input.vue": ["e32a", "chunk-c9324d3c"],
      "./color/input.vue": ["41a1", "chunk-7a3c1fd6"],
      "./date/input.vue": ["9420", "chunk-c2d84bf0"],
      "./datetime-created/input.vue": ["4f85", "chunk-58b31a04"],
      "./datetime-updated/input.vue": ["bcc1", "chunk-77c5cde0"],
      "./datetime/input.vue": ["7741", "chunk-c8cab390"],
      "./divider/input.vue": ["0812", "chunk-02ec76db"],
      "./dropdown/input.vue": ["61e2", "chunk-4c268a7f"],
      "./file-preview/input.vue": ["fab5", "chunk-7a5057ef"],
      "./file-size/input.vue": ["0221", "chunk-1c6fa0e2"],
      "./file/input.vue": ["dea2", "chunk-6853be89"],
      "./files/input.vue": ["6ab8", "chunk-4f2e4d62"],
      "./hashed/input.vue": ["9137", "chunk-dbda98f0"],
      "./icon/input.vue": ["3cd5", "chunk-45c3938e"],
      "./interface-options/input.vue": ["db31", "chunk-8dd65600"],
      "./interface-types/input.vue": ["14cd", "chunk-3bcd24b1"],
      "./interfaces/input.vue": ["1749", "chunk-13145859"],
      "./json/input.vue": ["c293", "chunk-49328605", "chunk-5bb3e31e"],
      "./key-value/input.vue": ["3f04", "chunk-3bcec2c4"],
      "./language/input.vue": ["1f1b", "chunk-a055d4c6"],
      "./many-to-many/input.vue": ["035b", "chunk-625cd580"],
      "./many-to-one/input.vue": ["085d", "chunk-419d9f22"],
      "./map/input.vue": ["4662", "chunk-d2d01fae"],
      "./markdown/input.vue": ["a9ef", "chunk-304578ba"],
      "./multiselect/input.vue": ["f835", "chunk-073b9d5c"],
      "./numeric/input.vue": ["d688", "chunk-425807d2"],
      "./one-to-many/input.vue": ["2c47", "chunk-ea289bc4"],
      "./owner/input.vue": ["fada", "chunk-0f4d6f6c"],
      "./password/input.vue": ["dae4", "chunk-7203dae1"],
      "./preview/input.vue": ["fa4a", "chunk-03732e18"],
      "./primary-key/input.vue": ["cf6c", "chunk-50e1542a"],
      "./radio-buttons/input.vue": ["75f8", "chunk-2a043d5e"],
      "./rating/input.vue": ["da5b", "chunk-70056a8e"],
      "./repeater/input.vue": ["32cb", "chunk-264bd833"],
      "./slider/input.vue": ["3bfc", "chunk-587c9700"],
      "./slug/input.vue": ["bbba", "chunk-2fe9f608", "chunk-14f90334"],
      "./sort/input.vue": ["4e08", "chunk-51c862a2"],
      "./status/input.vue": ["9162", "chunk-3c5ed143"],
      "./switch/input.vue": ["f027", "chunk-64408c34"],
      "./tags/input.vue": ["2eb1", "chunk-5ca5135c"],
      "./text-input/input.vue": ["26b2", "chunk-59b7c6fa"],
      "./textarea/input.vue": ["c8d2", "chunk-44fd0744"],
      "./time/input.vue": ["d8b4", "chunk-3be46253"],
      "./toggle-icon/input.vue": ["8df3", "chunk-29fe6f82"],
      "./translation/input.vue": ["8485", "chunk-4b51bd42"],
      "./user-roles/input.vue": ["afd9", "chunk-7f07aad8"],
      "./user-updated/input.vue": ["a2c4", "chunk-6c8a16bc"],
      "./user/input.vue": ["900d", "chunk-347cc0fb"],
      "./wysiwyg/input.vue": ["1df9", "chunk-7d14240d"],
    };
    function o(e) {
      if (!n.o(a, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = a[e],
        o = t[0];
      return Promise.all(t.slice(1).map(n.e)).then(function () {
        return n(o);
      });
    }
    (o.keys = function () {
      return Object.keys(a);
    }),
      (o.id = "24b0"),
      (e.exports = o);
  },
  "26d5": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:owner","version":"1.0.0","types":["owner"],"icon":"account_circle","relation":"user","recommended":{"length":10},"options":{"template":{"name":"$t:template","comment":"$t:template_comment","interface":"text-input","default":"{{first_name}} {{last_name}}"},"display":{"name":"$t:display","comment":"$t:display_comment","interface":"dropdown","default":"both","options":{"choices":{"both":"$t:avatar + $t:name","avatar":"$t:avatar","name":"$t:name"}}}}}'
    );
  },
  "28d6": function (e, t, n) {},
  2953: function (e, t, n) {
    "use strict";
    var a = n("b01c"),
      o = n.n(a);
    o.a;
  },
  "2aa2": function (e, t, n) {},
  "2d93": function (e, t, n) {},
  "2dd5": function (e, t, n) {
    "use strict";
    var a = n("90e7"),
      o = n.n(a);
    o.a;
  },
  "2e36": function (e, t, n) {},
  "301d": function (e, t, n) {},
  "316f": function (e, t, n) {},
  "31f0": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:slider","version":"1.0.1","types":["integer"],"icon":"tune","recommended":{"length":10},"options":{"minimum":{"name":"$t:min","comment":"$t:min_comment","interface":"numeric","default":0},"maximum":{"name":"$t:max","interface":"numeric","comment":"$t:max_comment","default":100},"step":{"name":"$t:step","comment":"$t:step_comment","interface":"numeric","default":1},"unit":{"name":"$t:unit","comment":"$t:unit_comment","interface":"text-input"}}}'
    );
  },
  3241: function (e, t, n) {
    "use strict";
    var a = n("316f"),
      o = n.n(a);
    o.a;
  },
  3662: function (e, t, n) {
    "use strict";
    var a = n("c60c"),
      o = n.n(a);
    o.a;
  },
  "376e": function (e, t, n) {},
  "37b6": function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return a;
    }),
      n.d(t, "a", function () {
        return o;
      });
    var a = {
        create: "none",
        read: "none",
        update: "none",
        delete: "none",
        comment: "none",
        explain: "none",
        status_blacklist: [],
        read_field_blacklist: [],
        write_field_blacklist: [],
      },
      o = {
        create: "full",
        read: "full",
        update: "full",
        delete: "full",
        comment: "full",
        explain: "full",
        status_blacklist: [],
        read_field_blacklist: [],
        write_field_blacklist: [],
      };
  },
  "389e": function (e, t, n) {},
  "38d3": function (e, t, n) {
    "use strict";
    n("a4d3"), n("4de4"), n("4160"), n("e439"), n("dbb4"), n("b64b"), n("159b");
    var a = n("ade3"),
      o = n("4360"),
      i = n("9fb0"),
      r = n("8dee"),
      s = n.n(r);
    function c(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function l(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? c(Object(n), !0).forEach(function (t) {
              Object(a["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : c(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var u = { delay: 5e3 },
      d = function (e) {
        var t = l({}, u, {}, e, { id: s.a.generate() });
        o["a"].commit(i["PUSH_NOTIFICATION"], t);
      };
    t["a"] = d;
  },
  3994: function (e, t, n) {},
  "3ac3": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:interface-types","version":"1.0.0","types":["json"],"icon":"category","options":{"interfaceField":{"name":"$t:interface-field","interface":"text-input","comment":"$t:placeholder-comment","default":"$t:placeholder-default","length":200}}}'
    );
  },
  "3af5": function (e, t, n) {},
  "3b45": function (e, t, n) {},
  "3b49": function (e, t, n) {
    "use strict";
    var a = n("8e69"),
      o = n.n(a);
    o.a;
  },
  "3c14": function (e, t, n) {
    "use strict";
    var a = n("2aa2"),
      o = n.n(a);
    o.a;
  },
  "3f4f": function (e, t, n) {
    "use strict";
    var a = n("3994"),
      o = n.n(a);
    o.a;
  },
  "413e": function (e, t, n) {
    "use strict";
    var a = n("f558"),
      o = n.n(a);
    o.a;
  },
  "41cb": function (e, t, n) {
    "use strict";
    n("99af"), n("4de4"), n("caad"), n("d3b7"), n("96cf");
    var a = n("1da1"),
      o = n("2b0e"),
      i = n("8c4f"),
      r = n("d722"),
      s = n("4360"),
      c = n("9fb0"),
      l = n("9923"),
      u = n("f8dc"),
      d = n("e59c"),
      f = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "collections" },
          [
            n("v-header", {
              attrs: {
                breadcrumb: [
                  {
                    name: e.$tc("collection", 2),
                    path: "/" + e.currentProjectKey + "/collections",
                  },
                ],
                icon: "box",
              },
            }),
            0 === e.items.length
              ? n("v-error", {
                  attrs: {
                    title: e.$t("no_collections"),
                    body: e.$t("no_collections_body"),
                    icon: "error_outline",
                  },
                })
              : n(
                  "div",
                  { staticClass: "padding" },
                  [
                    n("v-table", {
                      attrs: {
                        items: e.items,
                        columns: e.fields,
                        "primary-key-field": "collection",
                        link: "__link__",
                      },
                      on: { select: e.select },
                    }),
                  ],
                  1
                ),
            n("v-info-sidebar", { attrs: { wide: "" } }, [
              n("span", { staticClass: "type-note" }, [e._v("No settings")]),
            ]),
          ],
          1
        );
      },
      m = [],
      p =
        (n("a4d3"),
        n("4160"),
        n("d81d"),
        n("e439"),
        n("dbb4"),
        n("b64b"),
        n("07ac"),
        n("2ca0"),
        n("159b"),
        n("ade3")),
      h = n("c359"),
      g = n("2f62"),
      y = n("2ef0");
    function v(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function b(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? v(Object(n), !0).forEach(function (t) {
              Object(p["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : v(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var _ = {
        name: "Collections",
        metaInfo: function () {
          return { title: this.$tc("collection", 2) };
        },
        components: { VError: h["a"] },
        computed: b({}, Object(g["e"])(["currentProjectKey"]), {
          items: function () {
            var e = this;
            return null == this.collections
              ? []
              : Object.values(this.collections)
                  .filter(function (e) {
                    return (
                      0 == e.hidden &&
                      1 == e.managed &&
                      !1 === e.collection.startsWith("directus_")
                    );
                  })
                  .filter(function (t) {
                    return t.status_mapping
                      ? Object(y["some"])(
                          e.permissions[t.collection].statuses,
                          function (e) {
                            return "none" !== e.read;
                          }
                        )
                      : "none" !== e.permissions[t.collection].read;
                  })
                  .map(function (t) {
                    return b({}, t, {
                      collection: e.$helpers.formatCollection(t.collection),
                      __link__: "/"
                        .concat(e.currentProjectKey, "/collections/")
                        .concat(t.collection),
                    });
                  });
          },
          fields: function () {
            return [
              { field: "collection", name: this.$tc("collection", 1) },
              { field: "note", name: this.$t("note") },
            ];
          },
          collections: function () {
            return this.$store.state.collections;
          },
          permissions: function () {
            return this.$store.state.permissions;
          },
        }),
        methods: {
          select: function (e) {
            this.selection = e;
          },
        },
      },
      j = _,
      k = (n("6d93"), n("2877")),
      w = Object(k["a"])(j, f, m, !1, null, "4a93f137", null),
      O = w.exports,
      $ = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.notFound
          ? n("v-not-found")
          : n(
              "div",
              { staticClass: "route-item-listing" },
              [
                n(
                  "v-header",
                  {
                    attrs: {
                      "info-toggle": "",
                      "item-detail": !1,
                      breadcrumb: e.breadcrumb,
                      icon: e.breadcrumbIcon,
                      settings: "directus_webhooks" === e.collection,
                      title: e.currentBookmark && e.currentBookmark.title,
                      "icon-link":
                        "directus_webhooks" === e.collection
                          ? "/" + e.currentProjectKey + "/settings/"
                          : null,
                    },
                  },
                  [
                    n("template", { slot: "title" }, [
                      n(
                        "button",
                        {
                          staticClass: "bookmark",
                          class: e.currentBookmark ? "active" : null,
                          attrs: { disabled: e.currentBookmark },
                          on: {
                            click: function (t) {
                              e.bookmarkModal = !0;
                            },
                          },
                        },
                        [
                          n("v-icon", {
                            attrs: {
                              color: e.currentBookmark
                                ? "--input-background-color-active"
                                : "--input-border-color",
                              name: e.currentBookmark
                                ? "bookmark"
                                : "bookmark_border",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    n("v-search-filter", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            e.selection &&
                            0 === e.selection.length &&
                            !e.emptyCollection,
                          expression:
                            "selection && selection.length === 0 && !emptyCollection",
                        },
                      ],
                      attrs: {
                        filters: e.filters,
                        "search-query": e.searchQuery,
                        "field-names": e.filterableFieldNames,
                        "collection-name": e.collection.name,
                        placeholder: e.resultCopy,
                      },
                      on: {
                        filter: function (t) {
                          return e.updatePreferences("filters", t);
                        },
                        search: function (t) {
                          return e.updatePreferences("search_query", t);
                        },
                        "clear-filters": e.clearFilters,
                      },
                    }),
                    n(
                      "template",
                      { slot: "buttons" },
                      [
                        e.editButton && !e.activity
                          ? n("v-header-button", {
                              key: "edit",
                              attrs: {
                                icon: "mode_edit",
                                "background-color": "warning",
                                "icon-color": "white",
                                "hover-color": "warning-dark",
                                disabled: !e.editButtonEnabled,
                                label: e.$t("batch"),
                                to: e.batchURL,
                              },
                            })
                          : e._e(),
                        e.deleteButton && !e.activity
                          ? n("v-header-button", {
                              key: "delete",
                              attrs: {
                                icon: "delete_outline",
                                "icon-color": "white",
                                "background-color": "danger",
                                "hover-color": "danger-dark",
                                disabled: !e.deleteButtonEnabled,
                                label: e.$t("delete"),
                              },
                              on: {
                                click: function (t) {
                                  e.confirmRemove = !0;
                                },
                              },
                            })
                          : e._e(),
                        e.addButton && !e.activity
                          ? n("v-header-button", {
                              key: "add",
                              attrs: {
                                icon: "add",
                                "icon-color": "button-primary-text-color",
                                "background-color":
                                  "button-primary-background-color",
                                label: e.$t("new"),
                                to: e.createLink,
                              },
                            })
                          : e._e(),
                      ],
                      1
                    ),
                  ],
                  2
                ),
                e.preferences
                  ? n("v-items", {
                      ref: "listing",
                      attrs: {
                        collection: e.collection,
                        filters: e.filters,
                        "search-query": e.searchQuery,
                        "view-query": e.viewQuery,
                        "view-type": e.viewType,
                        "view-options": e.viewOptions,
                        selection: e.activity ? null : e.selection,
                        links: "",
                      },
                      on: {
                        fetch: e.setMeta,
                        options: e.setViewOptions,
                        select: function (t) {
                          e.selection = t;
                        },
                        query: e.setViewQuery,
                      },
                    })
                  : e._e(),
                e.preferences
                  ? n(
                      "v-info-sidebar",
                      [
                        n("template", { slot: "system" }, [
                          n("div", { staticClass: "layout-picker" }, [
                            n(
                              "select",
                              {
                                domProps: { value: e.viewType },
                                on: {
                                  input: function (t) {
                                    return e.updatePreferences(
                                      "view_type",
                                      t.target.value
                                    );
                                  },
                                },
                              },
                              e._l(e.layoutNames, function (t, a) {
                                return n(
                                  "option",
                                  { key: a, domProps: { value: a } },
                                  [e._v(" " + e._s(t) + " ")]
                                );
                              }),
                              0
                            ),
                            n(
                              "div",
                              { staticClass: "preview" },
                              [
                                n("v-icon", {
                                  attrs: {
                                    name: e.layoutIcons[e.viewType],
                                    color: "--sidebar-text-color",
                                  },
                                }),
                                n("span", { staticClass: "label" }, [
                                  e._v(e._s(e.layoutNames[e.viewType])),
                                ]),
                                n("v-icon", {
                                  attrs: {
                                    name: "expand_more",
                                    color: "--sidebar-text-color",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]),
                        n("v-ext-layout-options", {
                          key: e.collection + "-" + e.viewType,
                          staticClass: "layout-options",
                          attrs: {
                            type: e.viewType,
                            collection: e.collection,
                            fields: e.keyBy(e.fields, "field"),
                            "view-options": e.viewOptions,
                            "view-query": e.viewQuery,
                            selection: e.selection,
                            "primary-key-field": e.primaryKeyField,
                            link: "__link__",
                          },
                          on: {
                            query: e.setViewQuery,
                            options: e.setViewOptions,
                          },
                        }),
                      ],
                      2
                    )
                  : n("v-info-sidebar", { attrs: { wide: "" } }, [
                      n("span", { staticClass: "type-note" }, [
                        e._v("No settings"),
                      ]),
                    ]),
                e.confirmRemove
                  ? n(
                      "portal",
                      { attrs: { to: "modal" } },
                      [
                        n("v-confirm", {
                          attrs: {
                            message: e.$tc(
                              "batch_delete_confirm",
                              e.selection.length,
                              { count: e.selection.length }
                            ),
                            color: "danger",
                            "confirm-text": e.$t("delete"),
                          },
                          on: {
                            cancel: function (t) {
                              e.confirmRemove = !1;
                            },
                            confirm: e.remove,
                          },
                        }),
                      ],
                      1
                    )
                  : e._e(),
                e.bookmarkModal
                  ? n(
                      "portal",
                      { attrs: { to: "modal" } },
                      [
                        n("v-create-bookmark", {
                          attrs: { preferences: e.preferences },
                          on: { close: e.closeBookmark },
                        }),
                      ],
                      1
                    )
                  : e._e(),
              ],
              1
            );
      },
      x = [],
      S =
        (n("a15b"),
        n("45fc"),
        n("b0c0"),
        n("ac1f"),
        n("8a79"),
        n("2532"),
        n("5319"),
        n("1276"),
        n("ddb0"),
        n("8dee")),
      C = n.n(S),
      E = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            ref: "searchFilter",
            staticClass: "search-filter",
            class: { open: e.open },
          },
          [
            n(
              "v-header-button",
              {
                staticClass: "toggle",
                attrs: {
                  alert: e.hasFilters,
                  icon: "filter_list",
                  outline: "",
                },
                on: {
                  click: function (t) {
                    e.open = !e.open;
                  },
                },
              },
              [e._v(" Filter ")]
            ),
            n(
              "div",
              { staticClass: "wrapper" },
              [
                n("v-icon", {
                  attrs: { name: "search", color: "--input-border-color" },
                }),
                n("input", {
                  ref: "searchInput",
                  staticClass: "search",
                  class: { "has-filters": e.hasFilters },
                  attrs: {
                    placeholder: e.placeholder || e.$t("search"),
                    type: "text",
                  },
                  domProps: { value: e.searchQuery },
                  on: {
                    input: function (t) {
                      return e.search(t.target.value);
                    },
                  },
                }),
                n("transition", { attrs: { name: "fade" } }, [
                  n(
                    "button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.hasFilters,
                          expression: "hasFilters",
                        },
                      ],
                      staticClass: "clear-filters",
                      class: { "has-filters": e.hasFilters },
                      on: { click: e.clearFilters },
                    },
                    [n("v-icon", { attrs: { name: "close" } })],
                    1
                  ),
                ]),
                n(
                  "button",
                  {
                    staticClass: "toggle",
                    class: { "has-filters": e.hasFilters },
                    on: {
                      click: function (t) {
                        e.open = !e.open;
                      },
                    },
                  },
                  [n("v-icon", { attrs: { name: "filter_list" } })],
                  1
                ),
              ],
              1
            ),
            n("transition", { attrs: { name: "slide" } }, [
              n(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.open,
                      expression: "open",
                    },
                  ],
                  staticClass: "dropdown",
                },
                [
                  n(
                    "div",
                    { staticClass: "search field" },
                    [
                      n("v-input", {
                        attrs: {
                          placeholder: e.placeholder || e.$t("search"),
                          value: e.searchQuery,
                          type: "search",
                          "icon-left": "search",
                        },
                        on: { input: e.search },
                      }),
                    ],
                    1
                  ),
                  e._l(e.filters, function (t, a) {
                    return n(
                      "div",
                      { key: a, staticClass: "field" },
                      [
                        n(
                          "invisible-label",
                          { attrs: { "html-for": "filter-" + a } },
                          [
                            e._v(
                              " " +
                                e._s(e.fields[t.field]) +
                                " " +
                                e._s(e.operators[t.operator]) +
                                " "
                            ),
                          ]
                        ),
                        n("div", { staticClass: "name" }, [
                          n("p", { staticClass: "field-name" }, [
                            e._v(e._s(e.fields[t.field])),
                          ]),
                          n(
                            "span",
                            { staticClass: "operator-name" },
                            [
                              e._v(
                                " " + e._s(e.$t(e.operators[t.operator])) + " "
                              ),
                              n("v-icon", {
                                attrs: { name: "expand_more", small: "" },
                              }),
                              n(
                                "select",
                                {
                                  domProps: { value: t.operator },
                                  on: {
                                    change: function (t) {
                                      return e.updateFilter(
                                        a,
                                        "operator",
                                        t.target.value
                                      );
                                    },
                                  },
                                },
                                e._l(e.operators, function (t, a) {
                                  return n(
                                    "option",
                                    { key: a, domProps: { value: a } },
                                    [e._v(" " + e._s(e.$t(t)) + " ")]
                                  );
                                }),
                                0
                              ),
                            ],
                            1
                          ),
                          n(
                            "button",
                            {
                              staticClass: "remove",
                              on: {
                                click: function (t) {
                                  return e.deleteFilter(a);
                                },
                              },
                            },
                            [
                              n("v-icon", {
                                attrs: { name: "delete_outline" },
                              }),
                            ],
                            1
                          ),
                        ]),
                        n("v-input", {
                          attrs: {
                            id: "filter-" + a,
                            autofocus: "",
                            value: t.value,
                            type: "text",
                          },
                          on: {
                            input: function (t) {
                              return e.updateFilter(a, "value", t);
                            },
                          },
                        }),
                      ],
                      1
                    );
                  }),
                  n(
                    "div",
                    { staticClass: "field" },
                    [
                      n("invisible-label", { attrs: { "html-for": "add" } }, [
                        e._v(" " + e._s(e.$t("add_field_filter")) + " "),
                      ]),
                      n("v-select", {
                        attrs: {
                          id: "add",
                          icon: "add_circle",
                          placeholder: e.$t("add_field_filter"),
                          options: e.fields,
                          "default-value": "",
                        },
                        on: { input: e.addFilter },
                      }),
                    ],
                    1
                  ),
                ],
                2
              ),
            ]),
            e.open
              ? n("v-blocker", {
                  staticClass: "blocker",
                  attrs: { "z-index": 18 },
                  on: {
                    click: function (t) {
                      e.open = !e.open;
                    },
                  },
                })
              : e._e(),
          ],
          1
        );
      },
      P = [],
      T = (n("a434"), n("841c"), n("2909")),
      I = n("0d2b"),
      N = {
        name: "SearchFilter",
        components: { VBlocker: I["a"] },
        props: {
          fieldNames: {
            type: Array,
            default: function () {
              return [];
            },
          },
          collectionName: { type: String, default: null },
          filters: {
            type: Array,
            default: function () {
              return [];
            },
          },
          searchQuery: { type: String, default: "" },
          placeholder: { type: String, default: null },
        },
        data: function () {
          return { open: !1 };
        },
        computed: {
          operators: function () {
            return {
              eq: "equal_to",
              neq: "not_equal_to",
              lt: "less_than",
              lte: "less_than_equal",
              gt: "greater_than",
              gte: "greater_than_equal",
              in: "in_list",
              nin: "not_in_list",
              null: "is_null",
              nnull: "is_not_null",
              contains: "contains",
              ncontains: "not_contains",
              empty: "is_empty",
              nempty: "not_empty",
              has: "related_entries",
              nhas: "no_related_entries",
            };
          },
          hasFilters: function () {
            return !!(
              (this.filters && this.filters.length > 0) ||
              this.searchQuery
            );
          },
          fields: function () {
            var e = this,
              t = {};
            return (
              this.fieldNames.forEach(function (n) {
                e.collectionName
                  ? (t[n] = e.$helpers.formatField(n, e.collectionName))
                  : (t[n] = e.$helpers.formatTitle(n));
              }),
              t
            );
          },
        },
        created: function () {
          (this.search = Object(y["debounce"])(this.search, 300)),
            (this.updateFilter = Object(y["debounce"])(this.updateFilter, 300));
        },
        mounted: function () {
          window.addEventListener("click", this.closeFilter);
        },
        beforeDestroy: function () {
          window.removeEventListener("click", this.closeFilter);
        },
        methods: {
          search: function (e) {
            this.$emit("search", e);
          },
          addFilter: function (e) {
            this.$emit(
              "filter",
              [].concat(Object(T["a"])(this.filters), [
                { field: e, operator: "contains", value: "" },
              ])
            );
          },
          updateFilter: function (e, t, n) {
            var a = Object(y["cloneDeep"])(this.filters);
            (a[e][t] = n), this.$emit("filter", a);
          },
          deleteFilter: function (e) {
            var t = Object(y["cloneDeep"])(this.filters);
            t.splice(e, 1), this.$emit("filter", t);
          },
          clearFilters: function () {
            this.$emit("clear-filters"), this.open && (this.open = !1);
          },
          closeFilter: function (e) {
            var t = this.$refs.searchFilter.contains(e.target);
            this.open && !1 === t && (this.open = !1);
          },
        },
      },
      A = N,
      R = (n("57a7"), Object(k["a"])(A, E, P, !1, null, "915958b0", null)),
      D = R.exports,
      L = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "v-prompt",
          {
            attrs: { message: e.$t("name_bookmark") },
            on: { cancel: e.cancelBookmark, confirm: e.saveBookmark },
            model: {
              value: e.bookmarkTitle,
              callback: function (t) {
                e.bookmarkTitle = t;
              },
              expression: "bookmarkTitle",
            },
          },
          [
            e.isUserAdmin
              ? n(
                  "div",
                  { staticClass: "create-options" },
                  [
                    n("v-select", {
                      attrs: {
                        options: e.bookmarkOptions,
                        value: e.bookmarkType,
                        default: "personal",
                        disabled: e.optionsDisabled,
                      },
                      on: { input: e.changeOption },
                    }),
                  ],
                  1
                )
              : e._e(),
          ]
        );
      },
      F = [];
    function U(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function B(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? U(Object(n), !0).forEach(function (t) {
              Object(p["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : U(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var K = {
        props: { preferences: { type: Object, default: null } },
        data: function () {
          return {
            bookmarkOptions: {
              global: this.$t("bookmark_global"),
              personal: this.$t("bookmark_personal"),
            },
            bookmarkTitle: "",
            bookmarkType: "personal",
            optionsDisabled: !0,
          };
        },
        computed: {
          isUserAdmin: function () {
            return this.$store.state.currentUser.admin;
          },
          collection: function () {
            return this.$route.params.collection;
          },
        },
        created: function () {
          var e = this;
          if (this.isUserAdmin) {
            var t = this.$helpers.shortid.generate();
            this.$store.dispatch("loadingStart", { id: t }),
              r["a"]
                .getRoles()
                .then(function (e) {
                  return e.data;
                })
                .then(function (n) {
                  e.$store.dispatch("loadingFinished", t),
                    n.map(function (t) {
                      e.bookmarkOptions[t.id] = e.$t("bookmark_role", {
                        role: t.name,
                      });
                    }),
                    (e.optionsDisabled = !1);
                })
                .catch(function (n) {
                  e.$store.dispatch("loadingFinished", t),
                    e.$events.emit("error", {
                      notify: e.$t("something_went_wrong_body"),
                      error: n,
                    });
                });
          }
        },
        methods: {
          changeOption: function (e) {
            this.bookmarkType = e;
          },
          cancelBookmark: function () {
            this.$emit("close");
          },
          saveBookmark: function () {
            var e = this,
              t = this.buildPreferences(),
              n = this.$helpers.shortid.generate();
            this.$store.dispatch("loadingStart", { id: n }),
              this.$store
                .dispatch("saveBookmark", t)
                .then(function () {
                  e.$store.dispatch("loadingFinished", n), e.$emit("close");
                })
                .catch(function (t) {
                  e.$store.dispatch("loadingFinished", n),
                    e.$events.emit("error", {
                      notify: e.$t("something_went_wrong_body"),
                      error: t,
                    });
                });
          },
          buildPreferences: function () {
            var e = B({}, this.preferences);
            return (
              delete e.id,
              delete e.role,
              e.collection || (e.collection = this.collection),
              (e.title = this.bookmarkTitle),
              "personal" !== this.bookmarkType && this.isUserAdmin
                ? "global" === this.bookmarkType
                  ? delete e.user
                  : (delete e.user, (e.role = this.bookmarkType))
                : (e.user = this.$store.state.currentUser.id),
              e
            );
          },
        },
      },
      M = K,
      V = (n("87ce"), Object(k["a"])(M, L, F, !1, null, "2578f723", null)),
      q = V.exports,
      z = n("f1d0");
    function H(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function J(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? H(Object(n), !0).forEach(function (t) {
              Object(p["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : H(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var W = {
        name: "Items",
        metaInfo: function () {
          return { title: this.$helpers.formatTitle(this.collection) };
        },
        components: {
          VSearchFilter: D,
          VNotFound: z["default"],
          VCreateBookmark: q,
        },
        data: function () {
          return {
            selection: [],
            meta: null,
            preferences: null,
            confirmRemove: !1,
            bookmarkModal: !1,
            notFound: !1,
          };
        },
        computed: J({}, Object(g["e"])(["currentProjectKey"]), {
          activity: function () {
            return "directus_activity" === this.collection;
          },
          breadcrumbIcon: function () {
            var e;
            return "directus_webhooks" === this.collection
              ? "arrow_back"
              : (null === (e = this.collectionInfo) || void 0 === e
                  ? void 0
                  : e.icon) || "box";
          },
          createLink: function () {
            return "directus_webhooks" === this.collection
              ? "/".concat(this.currentProjectKey, "/settings/webhooks/+")
              : this.collection.startsWith("directus_")
              ? "/"
                  .concat(this.currentProjectKey, "/")
                  .concat(this.collection.substr(9), "/+")
              : "/"
                  .concat(this.currentProjectKey, "/collections/")
                  .concat(this.collection, "/+");
          },
          breadcrumb: function () {
            return "directus_users" === this.collection
              ? [
                  {
                    name: this.$t("user_directory"),
                    path: "/".concat(this.currentProjectKey, "/users"),
                  },
                ]
              : "directus_webhooks" === this.collection
              ? [
                  {
                    name: this.$t("settings"),
                    path: "/".concat(this.currentProjectKey, "/settings"),
                  },
                  {
                    name: this.$t("settings_webhooks"),
                    path: "/".concat(
                      this.currentProjectKey,
                      "/settings/webhooks"
                    ),
                  },
                ]
              : "directus_files" === this.collection
              ? [
                  {
                    name: this.$t("file_library"),
                    path: "/".concat(this.currentProjectKey, "/files"),
                  },
                ]
              : this.collection.startsWith("directus_")
              ? [
                  {
                    name: this.$helpers.formatTitle(this.collection.substr(9)),
                    path: "/"
                      .concat(this.currentProjectKey, "/")
                      .concat(this.collection.substring(9)),
                  },
                ]
              : [
                  {
                    name: this.$tc("collection", 2),
                    path: "/".concat(this.currentProjectKey, "/collections"),
                  },
                  {
                    name: this.$helpers.formatCollection(this.collection),
                    path: "/"
                      .concat(this.currentProjectKey, "/collections/")
                      .concat(this.collection),
                  },
                ];
          },
          fields: function () {
            var e = this,
              t = this.$store.state.collections[this.collection].fields,
              n = Object.values(t).map(function (t) {
                return J({}, t, {
                  name: e.$helpers.formatField(t.field, t.collection),
                });
              }),
              a = n.filter(function (e) {
                return !0 !== e.hidden_browse;
              });
            return a;
          },
          batchURL: function () {
            var e = this;
            return "/"
              .concat(this.currentProjectKey, "/collections/")
              .concat(this.collection, "/")
              .concat(
                this.selection
                  .map(function (t) {
                    return t[e.primaryKeyField];
                  })
                  .join(",")
              );
          },
          currentBookmark: function () {
            if (this.preferences) {
              var e = this.$store.state.bookmarks,
                t = {
                  collection: this.preferences.collection,
                  search_query: this.preferences.search_query,
                  filters: this.preferences.filters,
                  view_options: this.preferences.view_options,
                  view_type: this.preferences.view_type,
                  view_query: this.preferences.view_query,
                },
                n = e.filter(function (e) {
                  var n = {
                    collection: e.collection,
                    search_query: e.search_query,
                    filters: e.filters,
                    view_options: e.view_options,
                    view_type: e.view_type,
                    view_query: e.view_query,
                  };
                  return Object(y["isEqual"])(n, t);
                })[0];
              return n || null;
            }
          },
          collection: function () {
            return this.$route.path.endsWith("webhooks")
              ? "directus_webhooks"
              : this.$route.params.collection;
          },
          collectionInfo: function () {
            return this.$store.state.collections[this.collection];
          },
          emptyCollection: function () {
            return (this.meta && 0 === this.meta.total_count) || !1;
          },
          filters: function () {
            return (this.preferences && this.preferences.filters) || [];
          },
          searchQuery: function () {
            return (this.preferences && this.preferences.search_query) || "";
          },
          viewType: function () {
            return (
              (this.preferences && this.preferences.view_type) || "tabular"
            );
          },
          viewQuery: function () {
            var e = this;
            if (!this.preferences) return {};
            var t = this.$store.state.collections[this.collection].fields;
            t = Object.values(t).map(function (t) {
              return J({}, t, {
                name: e.$helpers.formatField(t.field, t.collection),
              });
            });
            var n =
                (this.preferences.view_query &&
                  this.preferences.view_query[this.viewType]) ||
                {},
              a = t.map(function (e) {
                return e.field;
              });
            if (
              (n.fields &&
                (n.fields = n.fields
                  .split(",")
                  .filter(function (e) {
                    return a.includes(e);
                  })
                  .join(",")),
              n.sort)
            ) {
              var o = n.sort.startsWith("-") ? n.sort.substring(1) : n.sort;
              !1 === a.includes(o) && (n.sort = this.primaryKeyField);
            }
            return n;
          },
          viewOptions: function () {
            return (
              (this.preferences &&
                this.preferences.view_options &&
                this.preferences.view_options[this.viewType]) ||
              {}
            );
          },
          resultCopy: function () {
            if (!this.meta || !this.preferences) return this.$t("loading");
            var e =
                !Object(y["isEmpty"])(this.preferences.filters) ||
                (!Object(y["isNil"])(this.preferences.search_query) &&
                  this.preferences.search_query.length > 0),
              t = this.meta.filter_count;
            return (
              this.meta.result_count <
                this.$store.state.settings.values.default_limit &&
                (t = this.meta.local_count),
              e
                ? this.$tc("item_count_filter", t, { count: this.$n(t) })
                : this.$tc("item_count", t, { count: this.$n(t) })
            );
          },
          filterableFieldNames: function () {
            return this.fields
              .filter(function (e) {
                return e.datatype;
              })
              .map(function (e) {
                return e.field;
              });
          },
          layoutNames: function () {
            var e = this;
            if (!this.$store.state.extensions.layouts) return {};
            var t = {};
            return (
              Object.keys(this.$store.state.extensions.layouts).forEach(
                function (n) {
                  t[n] = e.$store.state.extensions.layouts[n].name;
                }
              ),
              t
            );
          },
          layoutIcons: function () {
            var e = this;
            if (!this.$store.state.extensions.layouts) return {};
            var t = {};
            return (
              Object.keys(this.$store.state.extensions.layouts).forEach(
                function (n) {
                  t[n] = e.$store.state.extensions.layouts[n].icon;
                }
              ),
              t
            );
          },
          statusField: function () {
            var e = this.$store.state.collections[this.collection].fields;
            if (!e) return null;
            var t = Object(y["find"])(e, { type: "status" });
            return t && t.field ? t.field : null;
          },
          softDeleteStatus: function () {
            if (!this.collectionInfo.status_mapping || !this.statusField)
              return null;
            var e = Object.keys(this.collectionInfo.status_mapping),
              t = Object(y["findIndex"])(
                Object.values(this.collectionInfo.status_mapping),
                { soft_delete: !0 }
              );
            return e[t];
          },
          userCreatedField: function () {
            return this.fields
              ? (
                  Object(y["find"])(Object.values(this.fields), function (e) {
                    return "owner" === e.type.toLowerCase();
                  }) || {}
                ).field
              : null;
          },
          primaryKeyField: function () {
            var e = this.$store.state.collections[this.collection].fields;
            if (!e) return null;
            var t = Object(y["find"])(e, { primary_key: !0 });
            return t && t.field ? t.field : null;
          },
          permissions: function () {
            return this.$store.state.permissions;
          },
          permission: function () {
            return this.permissions[this.collection];
          },
          addButton: function () {
            return (
              !!this.$store.state.currentUser.admin ||
              (this.statusField
                ? Object.values(this.permission.statuses).some(function (e) {
                    return "full" === e.create;
                  }) || "full" === this.permission.$create.create
                : "full" === this.permission.create)
            );
          },
          deleteButton: function () {
            return !!this.selection && 0 !== this.selection.length;
          },
          deleteButtonEnabled: function () {
            var e = this;
            if (this.$store.state.currentUser.admin) return !0;
            var t = this.$store.state.currentUser.id,
              n = !0;
            return (
              this.selection.forEach(function (a) {
                var o = e.statusField ? a[e.statusField] : null,
                  i = e.statusField ? e.permission.statuses[o] : e.permission,
                  r = a[e.userCreatedField] ? a[e.userCreatedField].id : null;
                if ("none" === i.delete) return (n = !1);
                if ("mine" === i.delete && r !== t) return (n = !1);
                if ("role" !== i.delete);
                else {
                  var s = e.$store.state.users[r].role,
                    c = e.$store.state.currentUser.role.id;
                  s === c && (n = !0);
                }
              }),
              n
            );
          },
          editButton: function () {
            return !!(this.selection && this.selection.length > 1);
          },
          editButtonEnabled: function () {
            var e = this,
              t = this.$store.state.currentUser.id,
              n = !0;
            return (
              !!this.$store.state.currentUser.admin ||
              (this.selection.forEach(function (a) {
                var o = e.statusField ? a[e.statusField] : null,
                  i = e.statusField ? e.permission.statuses[o] : e.permission,
                  r = a[e.userCreatedField] ? a[e.userCreatedField].id : null;
                if ("none" === i.update) return (n = !1);
                if ("mine" === i.update && r !== t) return (n = !1);
                if ("role" === i.update) {
                  var s = e.$store.state.users[r].role,
                    c = e.$store.state.currentUser.role.id;
                  if (s === c) return void (n = !0);
                }
              }),
              n)
            );
          },
        }),
        watch: {
          $route: function () {
            this.$route.query.b &&
              this.$router.replace({ path: this.$route.path });
          },
        },
        methods: {
          keyBy: y["keyBy"],
          setMeta: function (e) {
            this.meta = e;
          },
          editCollection: function () {
            this.$store.state.currentUser.admin &&
              this.$router.push(
                "/"
                  .concat(this.currentProjectKey, "/settings/collections/")
                  .concat(this.collection)
              );
          },
          closeBookmark: function () {
            this.bookmarkModal = !1;
          },
          setViewQuery: function (e) {
            var t = J(
              {},
              this.preferences.view_query,
              Object(p["a"])({}, this.viewType, J({}, this.viewQuery, {}, e))
            );
            this.updatePreferences("view_query", t);
          },
          setViewOptions: function (e) {
            var t = J(
              {},
              this.preferences.view_options,
              Object(p["a"])({}, this.viewType, J({}, this.viewOptions, {}, e))
            );
            this.updatePreferences("view_options", t);
          },
          updatePreferences: function (e, t) {
            var n = this,
              a =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            a && (t = J({}, this.preferences[e], {}, t)),
              this.$set(this.preferences, e, t);
            var o = null == this.preferences.user;
            if (o) return this.createCollectionPreset();
            var i = this.$helpers.shortid.generate();
            return (
              this.$store.dispatch("loadingStart", { id: i }),
              this.$api
                .updateCollectionPreset(
                  this.preferences.id,
                  Object(p["a"])({}, e, t)
                )
                .then(function () {
                  n.$store.dispatch("loadingFinished", i);
                })
                .catch(function (e) {
                  n.$store.dispatch("loadingFinished", i),
                    n.$events.emit("error", {
                      notify: n.$t("something_went_wrong_body"),
                      error: e,
                    });
                })
            );
          },
          createCollectionPreset: function () {
            var e = this,
              t = this.$helpers.shortid.generate();
            this.$store.dispatch("loadingStart", { id: t });
            var n = J({}, this.preferences);
            return (
              delete n.id,
              this.$api
                .createCollectionPreset(
                  J({}, n, {
                    collection: this.collection,
                    user: this.$store.state.currentUser.id,
                  })
                )
                .then(function (n) {
                  var a = n.data;
                  e.$store.dispatch("loadingFinished", t),
                    e.$set(e.preferences, "id", a.id),
                    e.$set(e.preferences, "user", a.user);
                })
                .catch(function (n) {
                  e.$store.dispatch("loadingFinished", t),
                    e.$events.emit("error", {
                      notify: e.$t("something_went_wrong_body"),
                      error: n,
                    });
                })
            );
          },
          clearFilters: function () {
            this.updatePreferences("filters", null),
              this.updatePreferences("search_query", null);
          },
          remove: function () {
            var e,
              t = this,
              n = this.$helpers.shortid.generate();
            this.$store.dispatch("loadingStart", { id: n });
            var a = this.selection.map(function (e) {
              return e[t.primaryKeyField];
            });
            (e = this.softDeleteStatus
              ? this.$api.updateItem(
                  this.collection,
                  a.join(","),
                  Object(p["a"])({}, this.statusField, this.softDeleteStatus)
                )
              : this.$api.deleteItems(
                  this.collection,
                  this.selection.map(function (e) {
                    return e[t.primaryKeyField];
                  })
                )),
              e
                .then(function () {
                  t.$store.dispatch("loadingFinished", n),
                    t.$refs.listing.getItems(),
                    (t.selection = []),
                    (t.confirmRemove = !1);
                })
                .catch(function (e) {
                  t.$store.dispatch("loadingFinished", n),
                    t.$events.emit("error", {
                      notify: t.$t("something_went_wrong_body"),
                      error: e,
                    });
                });
          },
        },
        beforeRouteEnter: function (e, t, n) {
          var a = this,
            o = e.params.collection;
          e.path.endsWith("webhooks") && (o = "directus_webhooks");
          var i = s["a"].state.collections[o] || null;
          if (!1 === o.startsWith("directus_") && null === i)
            return n(function (e) {
              return (e.notFound = !0);
            });
          if (i && i.single)
            return n(
              "/"
                .concat(s["a"].state.currentProjectKey, "/collections/")
                .concat(o, "/1")
            );
          var c = C.a.generate();
          return (
            s["a"].dispatch("loadingStart", { id: c }),
            r["a"]
              .getMyListingPreferences(o)
              .then(function (e) {
                s["a"].dispatch("loadingFinished", c),
                  n(function (t) {
                    t.$data.preferences = e;
                  });
              })
              .catch(function (e) {
                s["a"].dispatch("loadingFinished", c),
                  a.$events.emit("error", {
                    notify: a.$t("something_went_wrong_body"),
                    error: e,
                  });
              })
          );
        },
        beforeRouteUpdate: function (e, t, n) {
          var a = this,
            o = e.params.collection;
          (this.preferences = null),
            (this.selection = []),
            (this.meta = {}),
            (this.notFound = !1);
          var i = this.$store.state.collections[o] || null;
          if (!1 === o.startsWith("directus_") && null === i)
            return (this.notFound = !0), n();
          if (i && i.single)
            return n(
              "/"
                .concat(this.$store.state.currentProjectKey, "/collections/")
                .concat(o, "/1")
            );
          var s = this.$helpers.shortid.generate();
          return (
            this.$store.dispatch("loadingStart", { id: s }),
            r["a"]
              .getMyListingPreferences(o)
              .then(function (e) {
                a.$store.dispatch("loadingFinished", s),
                  (a.preferences = e),
                  n();
              })
              .catch(function (e) {
                a.$store.dispatch("loadingFinished", s),
                  a.$events.emit("error", {
                    notify: a.$t("something_went_wrong_body"),
                    error: e,
                  });
              })
          );
        },
      },
      G = W,
      Y = (n("d76d"), Object(k["a"])(G, $, x, !1, null, "db219fdc", null)),
      Z = Y.exports,
      Q = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.notFound
          ? n("v-not-found")
          : n(
              "div",
              { staticClass: "route-file-library" },
              [
                n(
                  "v-header",
                  {
                    attrs: {
                      "info-toggle": "",
                      breadcrumb: e.breadcrumb,
                      icon: "photo_library",
                    },
                  },
                  [
                    n("template", { slot: "title" }, [
                      n(
                        "button",
                        {
                          staticClass: "bookmark",
                          class: e.currentBookmark ? "active" : null,
                          attrs: { disabled: e.currentBookmark },
                          on: {
                            click: function (t) {
                              e.bookmarkModal = !0;
                            },
                          },
                        },
                        [
                          n("v-icon", {
                            attrs: {
                              name: e.currentBookmark
                                ? "bookmark"
                                : "bookmark_border",
                            },
                          }),
                        ],
                        1
                      ),
                      e.currentBookmark
                        ? n("div", { staticClass: "bookmark-name no-wrap" }, [
                            e._v(" (" + e._s(e.currentBookmark.title) + ") "),
                          ])
                        : e._e(),
                    ]),
                    n("v-search-filter", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: 0 === e.selection.length && !e.emptyCollection,
                          expression:
                            "selection.length === 0 && !emptyCollection",
                        },
                      ],
                      attrs: {
                        filters: e.filters,
                        "search-query": e.searchQuery,
                        "field-names": e.filterableFieldNames,
                        "collection-name": "directus_files",
                        placeholder: e.resultCopy,
                      },
                      on: {
                        filter: function (t) {
                          return e.updatePreferences("filters", t);
                        },
                        search: function (t) {
                          return e.updatePreferences("search_query", t);
                        },
                        "clear-filters": e.clearFilters,
                      },
                    }),
                    n(
                      "template",
                      { slot: "buttons" },
                      [
                        e.selection.length > 1
                          ? n("v-header-button", {
                              key: "edit",
                              attrs: {
                                icon: "mode_edit",
                                "background-color": "warning",
                                "icon-color": "white",
                                "hover-color": "warning-dark",
                                label: e.$t("batch"),
                                to: e.batchURL,
                              },
                            })
                          : e._e(),
                        e.selection.length
                          ? n("v-header-button", {
                              key: "delete",
                              attrs: {
                                icon: "delete_outline",
                                "background-color": "danger",
                                "icon-color": "white",
                                "hover-color": "danger-dark",
                                label: e.$t("delete"),
                              },
                              on: {
                                click: function (t) {
                                  e.confirmRemove = !0;
                                },
                              },
                            })
                          : e._e(),
                        n("v-header-button", {
                          key: "add",
                          attrs: {
                            icon: "add",
                            "background-color":
                              "button-primary-background-color",
                            "icon-color": "button-primary-text-color",
                            label: e.$t("new"),
                          },
                          on: {
                            click: function (t) {
                              e.newModal = !0;
                            },
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  2
                ),
                e.preferences
                  ? n("v-items", {
                      key: e.key,
                      ref: "listing",
                      attrs: {
                        collection: e.collection,
                        filters: e.filters,
                        "search-query": e.searchQuery,
                        "view-query": e.viewQuery,
                        "view-type": e.viewType,
                        "view-options": e.viewOptions,
                        selection: e.selection,
                        links: "",
                      },
                      on: {
                        fetch: function (t) {
                          e.meta = t;
                        },
                        options: e.setViewOptions,
                        select: function (t) {
                          e.selection = t;
                        },
                        query: e.setViewQuery,
                      },
                    })
                  : e._e(),
                e.preferences
                  ? n(
                      "v-info-sidebar",
                      [
                        n(
                          "template",
                          { slot: "system" },
                          [
                            n(
                              "label",
                              {
                                staticClass: "type-label",
                                attrs: { for: "listing" },
                              },
                              [e._v(e._s(e.$t("view_type")))]
                            ),
                            n("v-select", {
                              attrs: {
                                id: "listing",
                                options: e.layoutNames,
                                value: e.viewType,
                                name: "listing",
                              },
                              on: {
                                input: function (t) {
                                  return e.updatePreferences("view_type", t);
                                },
                              },
                            }),
                          ],
                          1
                        ),
                        n("v-ext-layout-options", {
                          key: e.collection + "-" + e.viewType,
                          attrs: {
                            type: e.viewType,
                            collection: e.collection,
                            fields: e.keyBy(e.fields, "field"),
                            "view-options": e.viewOptions,
                            "view-query": e.viewQuery,
                            selection: e.selection,
                            "primary-key-field": "id",
                            link: "__link__",
                          },
                          on: {
                            query: e.setViewQuery,
                            options: e.setViewOptions,
                          },
                        }),
                      ],
                      2
                    )
                  : e._e(),
                e.confirmRemove
                  ? n(
                      "portal",
                      { attrs: { to: "modal" } },
                      [
                        n("v-confirm", {
                          attrs: {
                            message: e.$tc(
                              "batch_delete_confirm",
                              e.selection.length,
                              { count: e.selection.length }
                            ),
                            color: "danger",
                            "confirm-text": e.$t("delete"),
                          },
                          on: {
                            cancel: function (t) {
                              e.confirmRemove = !1;
                            },
                            confirm: e.remove,
                          },
                        }),
                      ],
                      1
                    )
                  : e._e(),
                e.bookmarkModal
                  ? n(
                      "portal",
                      { attrs: { to: "modal" } },
                      [
                        n("v-prompt", {
                          attrs: { message: e.$t("name_bookmark") },
                          on: {
                            cancel: e.cancelBookmark,
                            confirm: e.saveBookmark,
                          },
                          model: {
                            value: e.bookmarkTitle,
                            callback: function (t) {
                              e.bookmarkTitle = t;
                            },
                            expression: "bookmarkTitle",
                          },
                        }),
                      ],
                      1
                    )
                  : e._e(),
                e.newModal
                  ? n(
                      "portal",
                      { attrs: { to: "modal" } },
                      [
                        n(
                          "v-modal",
                          {
                            attrs: {
                              title: e.$t("file_upload"),
                              buttons: { done: { text: e.$t("done") } },
                            },
                            on: {
                              done: function (t) {
                                e.newModal = !1;
                              },
                              close: function (t) {
                                e.newModal = !1;
                              },
                            },
                          },
                          [
                            n(
                              "div",
                              { staticClass: "modal-body" },
                              [
                                n("v-upload", {
                                  on: {
                                    upload: function (t) {
                                      e.key = e.$helpers.shortid.generate();
                                    },
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  : e._e(),
              ],
              1
            );
      },
      X = [],
      ee = (n("3ca3"), n("3835"));
    function te(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function ne(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? te(Object(n), !0).forEach(function (t) {
              Object(p["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : te(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var ae = {
        name: "RouteFileLibrary",
        metaInfo: function () {
          return { title: this.$t("file_library") };
        },
        components: { VSearchFilter: D, VNotFound: z["default"] },
        data: function () {
          return {
            selection: [],
            meta: null,
            preferences: null,
            confirmRemove: !1,
            bookmarkModal: !1,
            bookmarkTitle: "",
            notFound: !1,
            newModal: !1,
            key: "init",
          };
        },
        computed: ne({}, Object(g["e"])(["currentProjectKey"]), {
          breadcrumb: function () {
            return [
              {
                name: this.$t("file_library"),
                path: "/".concat(this.currentProjectKey, "/files"),
              },
            ];
          },
          batchURL: function () {
            return "/".concat(this.currentProjectKey, "/files/").concat(
              this.selection
                .map(function (e) {
                  return e.id;
                })
                .join(",")
            );
          },
          fields: function () {
            var e = this,
              t = this.$store.state.collections[this.collection].fields;
            return Object.values(t).map(function (t) {
              return ne({}, t, {
                name: e.$helpers.formatField(t.field, t.collection),
              });
            });
          },
          currentBookmark: function () {
            if (this.preferences) {
              var e = this.$store.state.bookmarks,
                t = {
                  collection: this.preferences.collection,
                  search_query: this.preferences.search_query,
                  filters: this.preferences.filters,
                  view_options: this.preferences.view_options,
                  view_type: this.preferences.view_type,
                  view_query: this.preferences.view_query,
                },
                n = e.filter(function (e) {
                  var n = {
                    collection: e.collection,
                    search_query: e.search_query,
                    filters: e.filters,
                    view_options: e.view_options,
                    view_type: e.view_type,
                    view_query: e.view_query,
                  };
                  return Object(y["isEqual"])(n, t);
                })[0];
              return n || null;
            }
          },
          collection: function () {
            return "directus_files";
          },
          emptyCollection: function () {
            return (this.meta && 0 === this.meta.total_count) || !1;
          },
          filters: function () {
            return (this.preferences && this.preferences.filters) || [];
          },
          searchQuery: function () {
            return (this.preferences && this.preferences.search_query) || "";
          },
          viewType: function () {
            return (
              (this.preferences && this.preferences.view_type) || "tabular"
            );
          },
          viewQuery: function () {
            return (
              (this.preferences &&
                this.preferences.view_query &&
                this.preferences.view_query[this.viewType]) ||
              {}
            );
          },
          viewOptions: function () {
            return (
              (this.preferences &&
                this.preferences.view_options &&
                this.preferences.view_options[this.viewType]) ||
              {}
            );
          },
          resultCopy: function () {
            if (!this.meta || !this.preferences) return this.$t("loading");
            var e =
              !Object(y["isEmpty"])(this.preferences.filters) ||
              (!Object(y["isNil"])(this.preferences.search_query) &&
                this.preferences.search_query.length > 0);
            return e
              ? this.$tc("item_count_filter", this.meta.result_count, {
                  count: this.$n(this.meta.result_count),
                })
              : this.$tc("item_count", this.meta.total_count, {
                  count: this.$n(this.meta.total_count),
                });
          },
          filterableFieldNames: function () {
            return this.fields
              .filter(function (e) {
                return e.datatype;
              })
              .map(function (e) {
                return e.field;
              });
          },
          layoutNames: function () {
            var e = this;
            if (!this.$store.state.extensions.layouts) return {};
            var t = {};
            return (
              Object.keys(this.$store.state.extensions.layouts).forEach(
                function (n) {
                  t[n] = e.$store.state.extensions.layouts[n].name;
                }
              ),
              t
            );
          },
        }),
        watch: {
          $route: function () {
            this.$route.query.b &&
              this.$router.replace({ path: this.$route.path });
          },
        },
        methods: {
          keyBy: y["keyBy"],
          cancelBookmark: function () {
            (this.bookmarkTitle = ""), (this.bookmarkModal = !1);
          },
          setViewQuery: function (e) {
            var t = ne(
              {},
              this.preferences.view_query,
              Object(p["a"])({}, this.viewType, ne({}, this.viewQuery, {}, e))
            );
            this.updatePreferences("view_query", t);
          },
          setViewOptions: function (e) {
            var t = ne(
              {},
              this.preferences.view_options,
              Object(p["a"])({}, this.viewType, ne({}, this.viewOptions, {}, e))
            );
            this.updatePreferences("view_options", t);
          },
          updatePreferences: function (e, t) {
            var n = this,
              a =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            a && (t = ne({}, this.preferences[e], {}, t)),
              this.$set(this.preferences, e, t);
            var o = null == this.preferences.user;
            if (o) return this.createCollectionPreset();
            var i = this.$helpers.shortid.generate();
            return (
              this.$store.dispatch("loadingStart", { id: i }),
              this.$api
                .updateCollectionPreset(
                  this.preferences.id,
                  Object(p["a"])({}, e, t)
                )
                .then(function () {
                  n.$store.dispatch("loadingFinished", i);
                })
                .catch(function (e) {
                  n.$store.dispatch("loadingFinished", i),
                    n.$events.emit("error", {
                      notify: n.$t("something_went_wrong_body"),
                      error: e,
                    });
                })
            );
          },
          createCollectionPreset: function () {
            var e = this,
              t = this.$helpers.shortid.generate();
            this.$store.dispatch("loadingStart", { id: t });
            var n = ne({}, this.preferences);
            return (
              delete n.id,
              this.$api
                .createCollectionPreset(
                  ne({}, n, {
                    collection: this.collection,
                    user: this.$store.state.currentUser.id,
                  })
                )
                .then(function (n) {
                  var a = n.data;
                  e.$store.dispatch("loadingFinished", t),
                    e.$set(e.preferences, "id", a.id),
                    e.$set(e.preferences, "user", a.user);
                })
                .catch(function (n) {
                  e.$store.dispatch("loadingFinished", t),
                    e.$events.emit("error", {
                      notify: e.$t("something_went_wrong_body"),
                      error: n,
                    });
                })
            );
          },
          clearFilters: function () {
            this.updatePreferences("filters", null),
              this.updatePreferences("search_query", null);
          },
          remove: function () {
            var e = this,
              t = this.$helpers.shortid.generate();
            this.$store.dispatch("loadingStart", { id: t }),
              this.$api
                .deleteItems(
                  this.collection,
                  this.selection.map(function (e) {
                    return e.id;
                  })
                )
                .then(function () {
                  e.$store.dispatch("loadingFinished", t),
                    e.$refs.listing.getItems(),
                    (e.selection = []);
                })
                .catch(function (n) {
                  e.$store.dispatch("loadingFinished", t),
                    e.$events.emit("error", {
                      notify: e.$t("something_went_wrong_body"),
                      error: n,
                    });
                }),
              (this.confirmRemove = !1);
          },
          saveBookmark: function () {
            var e = this,
              t = ne({}, this.preferences);
            (t.user = this.$store.state.currentUser.id),
              (t.title = this.bookmarkTitle),
              delete t.id,
              delete t.role,
              t.collection || (t.collection = this.collection);
            var n = this.$helpers.shortid.generate();
            this.$store.dispatch("loadingStart", { id: n }),
              this.$store
                .dispatch("saveBookmark", t)
                .then(function () {
                  e.$store.dispatch("loadingFinished", n),
                    (e.bookmarkModal = !1),
                    (e.bookmarkTitle = "");
                })
                .catch(function (t) {
                  e.$store.dispatch("loadingFinished", n),
                    e.$events.emit("error", {
                      notify: e.$t("something_went_wrong_body"),
                      error: t,
                    });
                });
          },
        },
        beforeRouteEnter: function (e, t, n) {
          var a = this,
            o = "directus_files",
            i = s["a"].state.collections[o] || null;
          if (!1 === o.startsWith("directus_") && null === i)
            return n(function (e) {
              return (e.notFound = !0);
            });
          if (i && i.single)
            return n(
              "/"
                .concat(s["a"].state.currentProjectKey, "/collections/")
                .concat(o, "/1")
            );
          var c = C.a.generate();
          return (
            s["a"].dispatch("loadingStart", { id: c }),
            Promise.all([r["a"].getMyListingPreferences(o)])
              .then(function (e) {
                var t = Object(ee["a"])(e, 1),
                  n = t[0];
                return { preferences: n };
              })
              .then(function (e) {
                var t = e.preferences;
                s["a"].dispatch("loadingFinished", c),
                  n(function (e) {
                    e.$data.preferences = t;
                  });
              })
              .catch(function (e) {
                s["a"].dispatch("loadingFinished", c),
                  a.$events.emit("error", {
                    notify: a.$t("something_went_wrong_body"),
                    error: e,
                  });
              })
          );
        },
        beforeRouteUpdate: function (e, t, n) {
          var a = this,
            o = "directus_files";
          (this.preferences = null),
            (this.selection = []),
            (this.meta = {}),
            (this.notFound = !1);
          var i = this.$store.state.collections[o] || null;
          if (!1 === o.startsWith("directus_") && null === i)
            return (this.notFound = !0), n();
          if (i && i.single)
            return n(
              "/"
                .concat(s["a"].state.currentProjectKey, "/collections/")
                .concat(o, "/1")
            );
          var c = this.$helpers.shortid.generate();
          return (
            this.$store.dispatch("loadingStart", { id: c }),
            Promise.all([r["a"].getMyListingPreferences(o)])
              .then(function (e) {
                var t = Object(ee["a"])(e, 1),
                  n = t[0];
                return { preferences: n };
              })
              .then(function (e) {
                var t = e.preferences;
                a.$store.dispatch("loadingFinished", c),
                  (a.preferences = t),
                  n();
              })
              .catch(function (e) {
                a.$store.dispatch("loadingFinished", c),
                  a.$events.emit("error", {
                    notify: a.$t("something_went_wrong_body"),
                    error: e,
                  });
              })
          );
        },
      },
      oe = ae,
      ie = (n("af36"), Object(k["a"])(oe, Q, X, !1, null, "499fe4cd", null)),
      re = ie.exports,
      se = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.notFound
          ? n("v-not-found")
          : e.error
          ? n(
              "div",
              [
                n("v-header"),
                e.error
                  ? n("v-error", {
                      attrs: {
                        icon: "error_outline",
                        color: "warning",
                        title: e.$t("server_trouble"),
                        body: e.$t("server_trouble_copy"),
                      },
                    })
                  : e._e(),
              ],
              1
            )
          : null === e.fields
          ? n(
              "div",
              [
                n("v-header", {
                  attrs: {
                    "icon-link": "/" + e.currentProjectKey + "/collections",
                  },
                }),
                n("v-loader", { attrs: { area: "content" } }),
              ],
              1
            )
          : n(
              "div",
              { key: e.collection + "-" + e.primaryKey, staticClass: "edit" },
              [
                n(
                  "v-header",
                  {
                    attrs: {
                      breadcrumb: e.breadcrumb,
                      "info-toggle":
                        !e.newItem && !e.batch && !e.activityDetail,
                      "icon-link": e.iconLink,
                      icon: e.singleItem
                        ? e.collectionInfo.icon || "box"
                        : "arrow_back",
                      "item-detail": "",
                      settings: "directus_webhooks" === e.collection,
                    },
                  },
                  [
                    e.status
                      ? n("template", { slot: "title" }, [
                          n("span", {
                            directives: [
                              {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: e.statusName,
                                expression: "statusName",
                              },
                            ],
                            staticClass: "status-indicator",
                            style: {
                              backgroundColor: "var(--" + e.statusColor + ")",
                            },
                          }),
                        ])
                      : e._e(),
                    n(
                      "template",
                      { slot: "buttons" },
                      [
                        e.newItem ||
                        e.singleItem ||
                        "none" === e.permission.delete
                          ? e._e()
                          : n("v-header-button", {
                              attrs: {
                                icon: "delete_outline",
                                "icon-color": "white",
                                "background-color": "danger",
                                "hover-color": "danger-dark",
                                label: e.$t("delete"),
                              },
                              on: {
                                click: function (t) {
                                  e.confirmRemove = !0;
                                },
                              },
                            }),
                        e.batch && "none" !== e.permission.update
                          ? n("v-header-button", {
                              attrs: {
                                disabled: !e.editing,
                                loading: e.saving,
                                label: e.$t("save"),
                                icon: "check",
                                "icon-color": "button-primary-text-color",
                                "background-color":
                                  "button-primary-background-color",
                                "hover-color":
                                  "button-primary-background-color-hover",
                              },
                              on: {
                                click: function (t) {
                                  e.confirmBatchSave = !0;
                                },
                              },
                            })
                          : (
                              e.isNew
                                ? "none" !== e.permission.create
                                : "none" !== e.permission.update
                            )
                          ? n("v-header-button", {
                              attrs: {
                                disabled: !e.editing,
                                loading: e.saving,
                                label: e.$t("save"),
                                options: e.saveOptions,
                                icon: "check",
                                "icon-color": "button-primary-text-color",
                                "background-color":
                                  "button-primary-background-color",
                                "hover-color":
                                  "button-primary-background-color-hover",
                              },
                              on: {
                                click: function (t) {
                                  e.singleItem
                                    ? e.save("stay")
                                    : e.save("leave");
                                },
                                input: e.save,
                              },
                            })
                          : e._e(),
                      ],
                      1
                    ),
                  ],
                  2
                ),
                e.newItem || e.batch
                  ? n("v-info-sidebar", { attrs: { wide: "" } }, [
                      n("span", { staticClass: "type-note" }, [
                        e._v("No settings"),
                      ]),
                    ])
                  : n(
                      "v-info-sidebar",
                      { attrs: { wide: "", "item-detail": "" } },
                      [
                        n("v-activity", {
                          staticClass: "activity",
                          attrs: {
                            activity: e.activity,
                            revisions: e.revisions,
                            loading: e.activityLoading,
                            "comment-permission": e.permission.comment,
                          },
                          on: {
                            input: e.postComment,
                            revert: function (t) {
                              e.revertActivity = t;
                            },
                          },
                        }),
                      ],
                      1
                    ),
                n("v-form", {
                  key: e.formKey,
                  ref: "form",
                  attrs: {
                    readonly: e.readonly,
                    fields: e.fields,
                    values: e.values,
                    collection: e.collection,
                    "batch-mode": e.batch,
                    permissions: e.permission,
                    "new-item": e.newItem,
                    "primary-key": e.primaryKey,
                  },
                  on: {
                    "unstage-value": e.unstageValue,
                    "stage-value": e.stageValue,
                  },
                }),
                e.confirmRemove
                  ? n(
                      "portal",
                      { attrs: { to: "modal" } },
                      [
                        n("v-confirm", {
                          attrs: {
                            message: e.batch
                              ? e.$tc(
                                  "batch_delete_confirm",
                                  e.primaryKey.split(",").length,
                                  { count: e.primaryKey.split(",").length }
                                )
                              : e.$t("delete_are_you_sure"),
                            busy: e.confirmRemoveLoading,
                          },
                          on: {
                            cancel: function (t) {
                              e.confirmRemove = !1;
                            },
                            confirm: e.remove,
                          },
                        }),
                      ],
                      1
                    )
                  : e._e(),
                e.confirmNavigation
                  ? n(
                      "portal",
                      { attrs: { to: "modal" } },
                      [
                        n("v-confirm", {
                          attrs: {
                            title: e.$t("unsaved_changes"),
                            message: e.$t("unsaved_changes_copy"),
                            "confirm-text": e.$t("keep_editing"),
                            "cancel-text": e.$t("discard_changes"),
                          },
                          on: {
                            confirm: function (t) {
                              e.confirmNavigation = !1;
                            },
                            cancel: function (t) {
                              e.$router.push(e.leavingTo),
                                (e.confirmNavigation = !1);
                            },
                          },
                        }),
                      ],
                      1
                    )
                  : e._e(),
                e.confirmBatchSave
                  ? n(
                      "portal",
                      { attrs: { to: "modal" } },
                      [
                        n("v-confirm", {
                          attrs: {
                            message: e.$t("update_confirm", {
                              count: e.primaryKey.split(",").length,
                            }),
                            "confirm-text": e.$t("update"),
                          },
                          on: {
                            confirm: function (t) {
                              return e.save("leave");
                            },
                            cancel: function (t) {
                              e.confirmBatchSave = !1;
                            },
                          },
                        }),
                      ],
                      1
                    )
                  : e._e(),
                e.revertActivity
                  ? n(
                      "portal",
                      { attrs: { to: "modal" } },
                      [
                        n(
                          "v-modal",
                          {
                            attrs: {
                              title: e.$t("preview_and_revert"),
                              buttons: {
                                revert: {
                                  text: e.$t("revert"),
                                  loading: e.reverting,
                                },
                              },
                            },
                            on: {
                              revert: function (t) {
                                return e.revertItem(
                                  e.revertActivity.revision.id
                                );
                              },
                              close: function (t) {
                                e.revertActivity = !1;
                              },
                            },
                          },
                          [
                            n(
                              "div",
                              { staticClass: "revert" },
                              [
                                n("v-notice", { attrs: { color: "warning" } }, [
                                  e._v(
                                    " " +
                                      e._s(
                                        e.$t("revert_copy", {
                                          date: e.$d(
                                            e.revertActivity.date,
                                            "long"
                                          ),
                                        })
                                      ) +
                                      " "
                                  ),
                                ]),
                                n("v-form", {
                                  attrs: {
                                    readonly: "",
                                    values: e.revertActivity.revision.data,
                                    collection: e.collection,
                                    fields: e.fields,
                                    "full-width": "",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  : e._e(),
              ],
              1
            );
      },
      ce = [],
      le = n("a609"),
      ue = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "v-activity" },
          [
            n(
              "form",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value:
                      "none" !== e.commentPermission &&
                      "read" !== e.commentPermission,
                    expression:
                      "commentPermission !== 'none' && commentPermission !== 'read'",
                  },
                ],
                ref: "commentArea",
                staticClass: "new-comment",
                on: {
                  submit: function (t) {
                    return t.preventDefault(), e.postComment(t);
                  },
                },
              },
              [
                n("v-textarea", {
                  staticClass: "textarea",
                  attrs: {
                    rows: 5,
                    required: "",
                    placeholder: e.$t("leave_comment"),
                  },
                  model: {
                    value: e.comment,
                    callback: function (t) {
                      e.comment = t;
                    },
                    expression: "comment",
                  },
                }),
                n(
                  "button",
                  {
                    attrs: {
                      type: "submit",
                      disabled: 0 === e.comment.trim().length,
                    },
                  },
                  [e._v(" " + e._s(e.$t("submit")) + " ")]
                ),
              ],
              1
            ),
            e._l(e.activityWithChanges, function (t, a) {
              return n("article", { key: t.id, staticClass: "activity-item" }, [
                n("span", {
                  directives: [
                    {
                      name: "tooltip",
                      rawName: "v-tooltip",
                      value: e.$helpers.formatTitle(t.action),
                      expression: "$helpers.formatTitle(activity.action)",
                    },
                  ],
                  staticClass: "indicator",
                  class: t.action,
                }),
                n("div", { staticClass: "content" }, [
                  "external" !== t.action && t.changes && t.name
                    ? n("details", [
                        n(
                          "summary",
                          { staticClass: "title" },
                          [
                            n(
                              "v-user-popover",
                              { attrs: { id: t.action_by, placement: "top" } },
                              [
                                n("span", { staticClass: "name" }, [
                                  e._v(e._s(t.name)),
                                ]),
                              ]
                            ),
                            t.date
                              ? n(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value: {
                                          content: e.$d(t.date, "long"),
                                          delay: { show: 1500, hide: 100 },
                                        },
                                        expression:
                                          "{\n\t\t\t\t\t\t\tcontent: $d(activity.date, 'long'),\n\t\t\t\t\t\t\tdelay: { show: 1500, hide: 100 }\n\t\t\t\t\t\t}",
                                      },
                                    ],
                                    staticClass: "date",
                                  },
                                  [
                                    e._v(
                                      " " +
                                        e._s(e.getRelativeTimeFromNow(t.date)) +
                                        " "
                                    ),
                                  ]
                                )
                              : e._e(),
                            n("v-icon", {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value: "Revision Details",
                                  expression: "'Revision Details'",
                                },
                              ],
                              staticClass: "chevron",
                              attrs: { name: "chevron_left", small: "" },
                            }),
                          ],
                          1
                        ),
                        t.changes
                          ? n(
                              "div",
                              [
                                n("v-diff", { attrs: { changes: t.changes } }),
                                0 !== a
                                  ? n(
                                      "button",
                                      {
                                        directives: [
                                          {
                                            name: "tooltip",
                                            rawName: "v-tooltip",
                                            value: e.$t("revert"),
                                            expression: "$t('revert')",
                                          },
                                        ],
                                        staticClass: "revert",
                                        on: {
                                          click: function (n) {
                                            return e.$emit("revert", t);
                                          },
                                        },
                                      },
                                      [
                                        n("v-icon", {
                                          attrs: { name: "restore" },
                                        }),
                                      ],
                                      1
                                    )
                                  : e._e(),
                              ],
                              1
                            )
                          : e._e(),
                      ])
                    : t.name
                    ? n(
                        "div",
                        { staticClass: "title" },
                        [
                          t.action_by
                            ? n(
                                "v-user-popover",
                                {
                                  attrs: { id: t.action_by, placement: "top" },
                                },
                                [
                                  n("span", { staticClass: "name" }, [
                                    e._v(e._s(t.name)),
                                  ]),
                                ]
                              )
                            : e._e(),
                          t.date
                            ? n(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "tooltip",
                                      rawName: "v-tooltip",
                                      value: {
                                        content: e.$d(t.date, "long"),
                                        delay: { show: 1500, hide: 100 },
                                      },
                                      expression:
                                        "{\n\t\t\t\t\t\tcontent: $d(activity.date, 'long'),\n\t\t\t\t\t\tdelay: { show: 1500, hide: 100 }\n\t\t\t\t\t}",
                                    },
                                  ],
                                  staticClass: "date",
                                },
                                [
                                  e._v(
                                    " " +
                                      e._s(e.getRelativeTimeFromNow(t.date)) +
                                      " "
                                  ),
                                ]
                              )
                            : e._e(),
                        ],
                        1
                      )
                    : e._e(),
                  t.htmlcomment
                    ? n("p", {
                        staticClass: "selectable",
                        class: {
                          comment:
                            t.action && "comment" === t.action.toLowerCase(),
                        },
                        domProps: { innerHTML: e._s(t.htmlcomment) },
                      })
                    : e._e(),
                ]),
              ]);
            }),
          ],
          2
        );
      },
      de = [],
      fe = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "v-diff" },
          e._l(e.changes, function (t) {
            var a = t.field,
              o = t.before,
              i = t.after;
            return n("div", { key: a, staticClass: "change" }, [
              n("p", [e._v(e._s(e.$helpers.formatTitle(a)))]),
              n("div", { staticClass: "diff" }, [
                n("div", { staticClass: "before", class: { empty: !o } }, [
                  e._v(" " + e._s(o || "--") + " "),
                ]),
                n("div", { staticClass: "after", class: { empty: !i } }, [
                  e._v(e._s(i || "--")),
                ]),
              ]),
            ]);
          }),
          0
        );
      },
      me = [],
      pe = {
        name: "VDiff",
        props: { changes: { type: Object, required: !0 } },
      },
      he = pe,
      ge = (n("2953"), Object(k["a"])(he, fe, me, !1, null, "0d0e6a2a", null)),
      ye = ge.exports,
      ve = n("649d"),
      be = n("8a60"),
      _e = n.n(be),
      je = n("1556");
    function ke(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function we(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ke(Object(n), !0).forEach(function (t) {
              Object(p["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ke(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var Oe = {
        name: "VActivity",
        components: { VDiff: ye },
        props: {
          activity: { type: Array, required: !0 },
          revisions: { type: Object, required: !0 },
          loading: { type: Boolean, default: !1 },
          commentPermission: { type: String, default: "none" },
        },
        data: function () {
          return { comment: "" };
        },
        computed: {
          activityWithChanges: function () {
            var e = this,
              t = this.activity.map(function (t, n) {
                return we({}, t, {
                  changes: e.getChanges(t.id, n),
                  revision: e.revisions[t.id],
                });
              }),
              n = t && t[t.length - 1];
            if (n) {
              var a = "create" === n.action.toLowerCase(),
                o = "upload" === n.action.toLowerCase();
              a ||
                o ||
                t.push({
                  action: "external",
                  comment: this.$t("activity_outside_directus"),
                  id: -1,
                });
            } else
              t.push({
                action: "external",
                comment: this.$t("activity_outside_directus"),
                id: -1,
              });
            return t.map(function (t) {
              return we({}, t, {
                htmlcomment: e.$helpers.snarkdown(
                  (t.comment || "")
                    .replace(/#/g, "")
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;") || ""
                ),
              });
            });
          },
        },
        mounted: function () {
          var e = this;
          this.mousetrap = new _e.a(this.$refs.commentArea).bind(
            "mod+enter",
            function () {
              e.postComment();
            }
          );
        },
        beforeDestroy: function () {
          this.mousetrap.unbind("mod+enter");
        },
        methods: {
          getChanges: function (e, t) {
            var n = this.revisions[e];
            if (!n) return null;
            for (var a = null, o = t + 1; o < this.activity.length; o++)
              if (
                "update" === this.activity[o].action ||
                "create" === this.activity[o].action ||
                "upload" === this.activity[o].action
              ) {
                a = this.activity[o];
                break;
              }
            if (!a) {
              if ("create" === this.activity[t].action) {
                var i = n.data;
                return Object(y["mapValues"])(i, function (e, t) {
                  return { before: null, after: e, field: t };
                });
              }
              return null;
            }
            var r = this.revisions[a.id],
              s = (r && r.data) || {},
              c = n.data || {},
              l = n.delta,
              u = Object(ve["diff"])(
                Object(y["clone"])(s),
                Object(y["clone"])(c)
              ),
              d = Object.keys(u).length > 0;
            return !1 === d
              ? null
              : Object(y["mapValues"])(l, function (e, t) {
                  return { before: s[t], after: e, field: t };
                });
          },
          postComment: function () {
            0 !== this.comment.length &&
              (this.$emit("input", this.comment), (this.comment = ""));
          },
          getRelativeTimeFromNow: function (e) {
            return Object(je["a"])(new Date(), e, { addSuffix: !0 });
          },
        },
      },
      $e = Oe,
      xe =
        (n("a7e3"),
        n("04bd"),
        Object(k["a"])($e, ue, de, !1, null, "0f400fc2", null)),
      Se = xe.exports,
      Ce = n("1b32"),
      Ee = n.n(Ce);
    function Pe(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function Te(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Pe(Object(n), !0).forEach(function (t) {
              Object(p["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Pe(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var Ie = {
        name: "Edit",
        metaInfo: function () {
          var e = this.collection.startsWith("directus_")
            ? this.$helpers.formatTitle(this.collection.substr(9))
            : this.$helpers.formatTitle(this.collection);
          return this.isNew
            ? { title: this.$t("creating_item_page_title", { collection: e }) }
            : this.batch
            ? { title: this.$t("batch_edit", { collection: e }) }
            : { title: this.$t("editing", { collection: e }) };
        },
        components: {
          VLoader: le["a"],
          VNotFound: z["default"],
          VError: h["a"],
          VActivity: Se,
        },
        props: { primaryKey: { type: null, required: !0 } },
        data: function () {
          return {
            saving: !1,
            notFound: !1,
            error: !1,
            confirmRemove: !1,
            confirmRemoveLoading: !1,
            confirmBatchSave: !1,
            confirmNavigation: !1,
            leavingTo: "",
            activityLoading: !1,
            activity: [],
            revisions: {},
            revertActivity: null,
            reverting: !1,
            formKey: C.a.generate(),
          };
        },
        computed: Te({}, Object(g["e"])(["currentProjectKey"]), {
          collection: function () {
            return this.$route.path.includes("settings/webhooks")
              ? "directus_webhooks"
              : this.$route.params.collection;
          },
          iconLink: function () {
            return this.singleItem
              ? null
              : "directus_webhooks" === this.collection
              ? "/".concat(this.currentProjectKey, "/settings/webhooks")
              : this.collection.startsWith("directus_")
              ? "/"
                  .concat(this.currentProjectKey, "/")
                  .concat(this.collection.substring(9))
              : "/"
                  .concat(this.currentProjectKey, "/collections/")
                  .concat(this.collection);
          },
          saveOptions: function () {
            return this.singleItem
              ? {}
              : this.editing
              ? {
                  stay: { text: this.$t("save_and_stay"), icon: "create" },
                  add: { text: this.$t("save_and_add"), icon: "add" },
                  copy: { text: this.$t("save_as_copy"), icon: "file_copy" },
                }
              : { copy: { text: this.$t("save_as_copy"), icon: "file_copy" } };
          },
          breadcrumb: function () {
            if ("directus_users" === this.collection) {
              var e = this.$t("editing_item");
              return (
                this.primaryKey == this.$store.state.currentUser.id
                  ? (e = this.$t("editing_my_profile"))
                  : this.newItem && (e = this.$t("creating_item")),
                [
                  {
                    name: this.$t("user_directory"),
                    path: "/".concat(this.currentProjectKey, "/users"),
                  },
                  { name: e, path: this.$route.path },
                ]
              );
            }
            if ("directus_files" === this.collection)
              return [
                {
                  name: this.$t("file_library"),
                  path: "/".concat(this.currentProjectKey, "/files"),
                },
                {
                  name: this.newItem
                    ? this.$t("creating_item")
                    : this.$t("editing_item"),
                  path: this.$route.path,
                },
              ];
            if ("directus_webhooks" === this.collection)
              return [
                {
                  name: this.$t("settings"),
                  path: "/".concat(this.currentProjectKey, "/settings"),
                },
                {
                  name: this.$t("settings_webhooks"),
                  path: "/".concat(
                    this.currentProjectKey,
                    "/settings/webhooks"
                  ),
                },
                {
                  name: this.newItem
                    ? this.$t("creating_item")
                    : this.$t("editing_item"),
                  path: this.$route.path,
                },
              ];
            if (this.singleItem)
              return [
                {
                  name: this.$tc("collection", 2),
                  path: "/".concat(this.currentProjectKey, "/collections"),
                },
                {
                  name: this.$t("editing_single", {
                    collection: this.$helpers.formatCollection(this.collection),
                  }),
                  path: this.$route.path,
                },
              ];
            var t = [];
            if (
              (this.collection.startsWith("directus_")
                ? t.push({
                    name: this.$helpers.formatTitle(this.collection.substr(9)),
                    path: "/"
                      .concat(this.currentProjectKey, "/")
                      .concat(this.collection.substring(9)),
                  })
                : t.push(
                    {
                      name: this.$tc("collection", 2),
                      path: "/".concat(this.currentProjectKey, "/collections"),
                    },
                    {
                      name: this.$helpers.formatCollection(this.collection),
                      path: "/"
                        .concat(this.currentProjectKey, "/collections/")
                        .concat(this.collection),
                    }
                  ),
              this.batch)
            ) {
              var n = this.primaryKey.split(",").length;
              t.push({
                name: this.$t("editing_items", { count: n }),
                path: this.$route.path,
              });
            } else
              t.push({
                name: this.newItem
                  ? this.$t("creating_item")
                  : this.$t("editing_item"),
                path: this.$route.path,
              });
            return t;
          },
          collectionInfo: function () {
            return this.$store.state.collections[this.collection];
          },
          defaultValues: function () {
            return Object(y["mapValues"])(this.fields, function (e) {
              return "array" === e.type
                ? (e.default_value || "").includes(",")
                  ? e.default_value.split(",")
                  : e.default_value
                  ? [e.default_value]
                  : []
                : "boolean" === e.type
                ? 1 === e.default_value ||
                  "1" === e.default_value ||
                  "true" === e.default_value
                : e.default_value;
            });
          },
          values: function () {
            var e = this.$store.state.edits.values;
            return Te(
              {},
              this.defaultValues,
              {},
              this.savedValues || {},
              {},
              e
            );
          },
          activityDetail: function () {
            return "directus_activity" === this.collection;
          },
          editing: function () {
            return this.$store.getters.editing;
          },
          savedValues: function () {
            return this.$store.state.edits.savedValues;
          },
          newItem: function () {
            return "+" === this.primaryKey;
          },
          softDeleteStatus: function () {
            if (!this.collectionInfo.status_mapping || !this.statusField)
              return null;
            var e = Object.keys(this.collectionInfo.status_mapping),
              t = Object(y["findIndex"])(
                Object.values(this.collectionInfo.status_mapping),
                { soft_delete: !0 }
              );
            return e[t];
          },
          singleItem: function () {
            return this.collectionInfo && !0 === this.collectionInfo.single;
          },
          primaryKeyField: function () {
            return Object(y["find"])(this.fields, { primary_key: !0 }).field;
          },
          batch: function () {
            return this.primaryKey.includes(",");
          },
          statusField: function () {
            return this.fields
              ? (
                  Object(y["find"])(Object.values(this.fields), function (e) {
                    return e.type && "status" === e.type.toLowerCase();
                  }) || {}
                ).field
              : null;
          },
          status: function () {
            return this.statusField ? this.savedValues[this.statusField] : null;
          },
          permission: function () {
            var e = this,
              t = this.$store.state.permissions[this.collection];
            if (this.batch) {
              if (this.statusField) {
                var n = this.savedValues.map(function (t) {
                  return t[e.statusField];
                });
                return y["merge"].apply(
                  void 0,
                  [{}].concat(
                    Object(T["a"])(
                      n.map(function (e) {
                        return t.statuses[e];
                      })
                    )
                  )
                );
              }
              return t;
            }
            return this.isNew
              ? this.status
                ? Te({}, t.statuses[this.status], {
                    read_field_blacklist: t.$create.read_field_blacklist,
                    write_field_blacklist: t.$create.write_field_blacklist,
                    status_blacklist: t.$create.status_blacklist,
                  })
                : Te({}, t, {
                    read_field_blacklist: t.$create.read_field_blacklist,
                    write_field_blacklist: t.$create.write_field_blacklist,
                    status_blacklist: t.$create.status_blacklist,
                  })
              : this.status
              ? t.statuses[this.status]
              : t;
          },
          permissions: function () {
            return this.$store.state.permissions;
          },
          readonly: function () {
            return "none" === this.permission.update;
          },
          isNew: function () {
            return "+" === this.primaryKey;
          },
          fields: function () {
            var e = this.$store.state.collections[this.collection].fields;
            return Object(y["mapValues"])(e, function (e) {
              return Te({}, e, { name: Ee()(e.field) });
            });
          },
          statusColor: function () {
            if (this.statusField && this.status) {
              var e = this.fields[this.statusField].options.status_mapping;
              return (e && e[this.status].background_color) || null;
            }
            return null;
          },
          statusName: function () {
            if (this.statusField && this.status) {
              var e = this.fields[this.statusField].options.status_mapping;
              return (e && e[this.status].name) || null;
            }
            return null;
          },
        }),
        watch: {
          $route: function () {
            this.fetchActivity();
          },
          notFound: function (e) {
            this.singleItem &&
              !0 === e &&
              this.$router.push(
                "/"
                  .concat(this.currentProjectKey, "/collections/")
                  .concat(this.collection, "/+")
              );
          },
        },
        created: function () {
          !1 === this.isNew && (this.fetchActivity(), this.checkOtherUsers());
        },
        mounted: function () {
          var e = this,
            t = function () {
              return e.editing && e.save("stay"), !1;
            };
          this.$helpers.mousetrap.bind("mod+s", t),
            (this.formtrap = this.$helpers
              .mousetrap(this.$refs.form.$el)
              .bind("mod+s", t));
        },
        beforeDestroy: function () {
          this.$helpers.mousetrap.unbind("mod+s"),
            this.formtrap.unbind("mod+s");
        },
        methods: {
          stageValue: function (e) {
            var t = e.field,
              n = e.value;
            this.$store.dispatch("stageValue", { field: t, value: n });
          },
          unstageValue: function (e) {
            this.$store.dispatch("unstageValue", e);
          },
          remove: function () {
            var e = this;
            this.confirmRemoveLoading = !0;
            var t,
              n = this.$helpers.shortid.generate();
            this.$store.dispatch("loadingStart", { id: n }),
              (t = this.softDeleteStatus
                ? this.$api.updateItem(
                    this.collection,
                    this.primaryKey,
                    Object(p["a"])({}, this.statusField, this.softDeleteStatus)
                  )
                : this.$api.deleteItem(this.collection, this.primaryKey)),
              t
                .then(function () {
                  e.$store.dispatch("loadingFinished", n),
                    e.$store.dispatch("discardChanges", n),
                    e.$notify({
                      title: e.$t("item_deleted"),
                      color: "green",
                      iconMain: "check",
                    }),
                    (e.confirmRemoveLoading = !1),
                    (e.confirmRemove = !1);
                  var t = "/"
                    .concat(e.currentProjectKey, "/collections/")
                    .concat(e.collection);
                  !0 === e.collection.startsWith("directus_") &&
                    (t = "/"
                      .concat(e.currentProjectKey, "/")
                      .concat(e.collection.substring(9))),
                    e.$router.push(t);
                })
                .catch(function (t) {
                  e.$store.dispatch("loadingFinished", n),
                    e.$events.emit("error", {
                      notify: e.$t("something_went_wrong_body"),
                      error: t,
                    });
                });
          },
          save: function (e) {
            var t = this;
            if (((this.saving = !0), "copy" === e)) {
              var n = Object.assign({}, this.values);
              Object(y["forEach"])(this.fields, function (e, t) {
                switch (
                  (!0 === e.primary_key && delete n[t], e.type.toLowerCase())
                ) {
                  case "alias":
                  case "datetime_created":
                  case "datetime_updated":
                  case "owner":
                  case "user_updated":
                  case "o2m":
                    delete n[t];
                    break;
                }
              });
              var a = this.$helpers.shortid.generate();
              return (
                this.$store.dispatch("loadingStart", { id: a }),
                this.$store
                  .dispatch("save", { primaryKey: "+", values: n })
                  .then(function (e) {
                    return (
                      t.$store.dispatch("loadingFinished", a),
                      (t.saving = !1),
                      e.data[t.primaryKeyField]
                    );
                  })
                  .then(function (e) {
                    return (
                      t.$notify({
                        title: t.$tc("item_saved"),
                        color: "green",
                        iconMain: "check",
                      }),
                      "directus_webhooks" === t.collection
                        ? t.$router.push(
                            "/"
                              .concat(
                                t.currentProjectKey,
                                "/settings/webhooks/"
                              )
                              .concat(e)
                          )
                        : t.collection.startsWith("directus_")
                        ? t.$router.push(
                            "/"
                              .concat(t.currentProjectKey, "/")
                              .concat(t.collection.substring(9), "/")
                              .concat(e)
                          )
                        : t.$router.push(
                            "/"
                              .concat(t.currentProjectKey, "/collections/")
                              .concat(t.collection, "/")
                              .concat(e)
                          )
                    );
                  })
                  .catch(function (e) {
                    t.$store.dispatch("loadingFinished", a),
                      t.$events.emit("error", {
                        notify: e.message || t.$t("something_went_wrong_body"),
                        error: e,
                      });
                  })
              );
            }
            if (!1 !== this.$store.getters.editing) {
              var o = this.$helpers.shortid.generate();
              return (
                this.$store.dispatch("loadingStart", { id: o }),
                this.$store
                  .dispatch("save")
                  .then(function (e) {
                    return e.data;
                  })
                  .then(function (e) {
                    return (
                      t.$store.dispatch("loadingFinished", o),
                      (t.saving = !1),
                      e
                    );
                  })
                  .then(function (n) {
                    var a = t.savedValues.length;
                    if (
                      (t.$notify({
                        title: t.$tc("item_saved", a, { count: a }),
                        color: "green",
                        iconMain: "check",
                      }),
                      "leave" === e)
                    )
                      return "directus_webhooks" === t.collection
                        ? t.$router.push(
                            "/".concat(
                              t.currentProjectKey,
                              "/settings/webhooks"
                            )
                          )
                        : t.collection.startsWith("directus_")
                        ? t.$router.push(
                            "/"
                              .concat(t.currentProjectKey, "/")
                              .concat(t.collection.substring(9))
                          )
                        : t.$router.push(
                            "/"
                              .concat(t.currentProjectKey, "/collections/")
                              .concat(t.collection)
                          );
                    if ("stay" === e) {
                      if ((t.fetchActivity(), t.newItem)) {
                        var o = n[t.primaryKeyField];
                        return "directus_webhooks" === t.collection
                          ? t.$router.push(
                              "/"
                                .concat(
                                  t.currentProjectKey,
                                  "/settings/webhooks/"
                                )
                                .concat(o)
                            )
                          : t.collection.startsWith("directus_")
                          ? t.$router.push(
                              "/"
                                .concat(t.currentProjectKey, "/")
                                .concat(t.collection.substring(9), "/")
                                .concat(o)
                            )
                          : t.$router.push(
                              "/"
                                .concat(t.currentProjectKey, "/collections/")
                                .concat(t.collection, "/")
                                .concat(o)
                            );
                      }
                      t.$store.dispatch("startEditing", {
                        collection: t.collection,
                        primaryKey: t.primaryKey,
                        savedValues: n,
                      }),
                        (t.formKey = C.a.generate());
                    }
                    "add" === e &&
                      (t.$route.fullPath.endsWith("+")
                        ? t.$store.dispatch("startEditing", {
                            collection: t.collection,
                            primaryKey: "+",
                            savedValues: {},
                          })
                        : t.$router.push(
                            "/"
                              .concat(t.currentProjectKey, "/collections/")
                              .concat(t.collection, "/+")
                          ));
                  })
                  .catch(function (e) {
                    (t.saving = !1),
                      t.$store.dispatch("loadingFinished", o),
                      t.$events.emit("error", {
                        notify: e.message || t.$t("something_went_wrong_body"),
                        error: e,
                      });
                  })
              );
            }
          },
          fetchActivity: function () {
            var e = this;
            (this.activity = []),
              (this.revisions = {}),
              (this.activityLoading = !0);
            var t = C.a.generate();
            return (
              s["a"].dispatch("loadingStart", { id: t }),
              Promise.all([
                this.$api.getActivity({
                  "filter[collection][eq]": this.collection,
                  "filter[item][eq]": this.primaryKey,
                  fields:
                    "id,action,action_on,comment,action_by.id,action_by.first_name,action_by.last_name",
                  sort: "-action_on",
                }),
                this.activityDetail
                  ? Promise.resolve({ data: [] })
                  : this.$api.getItemRevisions(
                      this.collection,
                      this.primaryKey
                    ),
              ])
                .then(function (e) {
                  var n = Object(ee["a"])(e, 2),
                    a = n[0],
                    o = n[1];
                  return (
                    s["a"].dispatch("loadingFinished", t),
                    { activity: a.data, revisions: o.data }
                  );
                })
                .then(function (e) {
                  var t = e.activity,
                    n = e.revisions;
                  return {
                    activity: t.map(function (e) {
                      var t,
                        n,
                        a = new Date(e.action_on);
                      return (
                        (n = e.action_by
                          ? e.action_by.first_name + " " + e.action_by.last_name
                          : "Unknown User"),
                        {
                          id: e.id,
                          date: a,
                          name: n,
                          action_by:
                            null === (t = e.action_by) || void 0 === t
                              ? void 0
                              : t.id,
                          action: e.action.toLowerCase(),
                          comment: e.comment,
                        }
                      );
                    }),
                    revisions: Object(y["keyBy"])(n, "activity"),
                  };
                })
                .then(function (t) {
                  var n = t.activity,
                    a = t.revisions;
                  (e.activity = n), (e.revisions = a), (e.activityLoading = !1);
                })
                .catch(function (n) {
                  s["a"].dispatch("loadingFinished", t),
                    e.$events.emit("error", {
                      notify: e.$t("something_went_wrong_body"),
                      error: n,
                    });
                })
            );
          },
          checkOtherUsers: function () {
            var e = this,
              t = this.$router.currentRoute.path,
              n = this.$helpers.date.dateToSql(new Date(new Date() - 3e5));
            this.$api
              .getUsers({
                "filter[last_access_on][gte]": n,
                "filter[last_page][eq]": t,
                "filter[id][neq]": this.$store.state.currentUser.id,
              })
              .then(function (e) {
                return e.data;
              })
              .then(function (t) {
                t.length > 0 &&
                  t.forEach(function (t) {
                    var n = t.first_name,
                      a = t.last_name;
                    e.$notify({
                      title: e.$t("user_edit_warning", {
                        first_name: n,
                        last_name: a,
                      }),
                      color: "red",
                      iconMain: "error",
                    });
                  });
              })
              .catch(function (e) {
                console.error(e);
              });
          },
          postComment: function (e) {
            var t = this,
              n = C.a.generate();
            s["a"].dispatch("loadingStart", { id: n });
            var a = this.$store.state.currentUser;
            this.$api.api
              .post("/activity/comment", {
                collection: this.collection,
                item: this.primaryKey,
                comment: e,
              })
              .then(function (e) {
                return e.data;
              })
              .then(function (e) {
                s["a"].dispatch("loadingFinished", n),
                  (t.activity = [
                    Te({}, e, {
                      name: "".concat(a.first_name, " ").concat(a.last_name),
                    }),
                  ].concat(Object(T["a"])(t.activity)));
              })
              .catch(function (e) {
                s["a"].dispatch("loadingFinished", n),
                  t.$events.emit("error", {
                    notify: t.$t("something_went_wrong_body"),
                    error: e,
                  });
              });
          },
          revertItem: function (e) {
            var t = this;
            (this.reverting = !0),
              this.$api
                .revert(this.collection, this.primaryKey, e)
                .then(function () {
                  return (
                    (t.reverting = !1),
                    (t.revertActivity = null),
                    Promise.all([
                      t.$api.getItem(t.collection, t.primaryKey),
                      t.fetchActivity(),
                    ])
                  );
                })
                .then(function (e) {
                  var n = Object(ee["a"])(e, 1),
                    a = n[0].data;
                  t.$store.dispatch("startEditing", {
                    collection: t.collection,
                    primaryKey: t.primaryKey,
                    savedValues: a,
                  });
                })
                .catch(function (e) {
                  t.$events.emit("error", {
                    notify: t.$t("something_went_wrong_body"),
                    error: e,
                  });
                });
          },
        },
        beforeRouteEnter: function (e, t, n) {
          var a = e.params,
            o = a.collection,
            i = a.primaryKey;
          !o &&
            e.path.includes("settings/webhooks") &&
            (o = "directus_webhooks");
          var c =
              Object.keys(s["a"].state.collections).includes(o) ||
              o.startsWith("directus_"),
            d = "+" === i;
          if (!1 === c)
            return n(function (e) {
              return (e.$data.notFound = !0);
            });
          if (d)
            return (
              s["a"].dispatch("startEditing", {
                collection: o,
                primaryKey: i,
                savedValues: {},
              }),
              void n()
            );
          var f = C.a.generate();
          return (
            s["a"].dispatch("loadingStart", { id: f }),
            r["a"]
              .getItem(o, i)
              .then(function (e) {
                return e.data;
              })
              .then(function (e) {
                s["a"].dispatch("loadingFinished", f),
                  s["a"].dispatch("startEditing", {
                    collection: o,
                    primaryKey: i,
                    savedValues: e,
                  }),
                  n();
              })
              .catch(function (e) {
                return (
                  s["a"].dispatch("loadingFinished", f),
                  e && 203 === +e.code
                    ? n(function (e) {
                        return (e.$data.notFound = !0);
                      })
                    : (u["a"].emit("error", {
                        notify: l["i18n"].t("something_went_wrong_body"),
                        error: e,
                      }),
                      n(function (e) {
                        return (e.$data.error = !0);
                      }))
                );
              })
          );
        },
        beforeRouteUpdate: function (e, t, n) {
          var a = this,
            o = e.params,
            i = o.collection,
            r = o.primaryKey,
            s =
              Object.keys(this.$store.state.collections).includes(i) ||
              i.startsWith("directus_"),
            c = "+" === r;
          if (
            ((this.saving = !1),
            (this.notFound = !1),
            (this.error = !1),
            (this.confirmRemove = !1),
            (this.confirmRemoveLoading = !1),
            (this.confirmBatchSave = !1),
            (this.confirmNavigation = !1),
            (this.leavingTo = ""),
            (this.activityLoading = !1),
            (this.activity = []),
            (this.revisions = {}),
            (this.revertActivity = null),
            (this.reverting = !1),
            !1 === s)
          )
            return (this.notFound = !0), n();
          if (c)
            return (
              this.$store.dispatch("startEditing", {
                collection: i,
                primaryKey: r,
                savedValues: {},
              }),
              void n()
            );
          var u = this.$helpers.shortid.generate();
          return (
            this.$store.dispatch("loadingStart", { id: u }),
            this.$api
              .getItem(i, r)
              .then(function (e) {
                return e.data;
              })
              .then(function (e) {
                a.$store.dispatch("loadingFinished", u),
                  a.$store.dispatch("startEditing", {
                    collection: i,
                    primaryKey: r,
                    savedValues: e,
                  }),
                  n();
              })
              .catch(function (e) {
                if (
                  (a.$store.dispatch("loadingFinished", u),
                  e && 203 === +e.code)
                )
                  return (a.notFound = !0), n();
                a.$events.emit("error", {
                  notify: l["i18n"].t("something_went_wrong_body"),
                  error: e,
                }),
                  (a.error = e),
                  n();
              })
          );
        },
        beforeRouteLeave: function (e, t, n) {
          return !1 === this.$store.getters.editing
            ? n()
            : !0 === this.confirmNavigation
            ? (this.$store.dispatch("discardChanges"), n())
            : ((this.confirmNavigation = !0),
              (this.leavingTo = e.fullPath),
              n(!1));
        },
      },
      Ne = Ie,
      Ae = (n("bf67"), Object(k["a"])(Ne, se, ce, !1, null, "2551ea91", null)),
      Re = Ae.exports,
      De = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "PublicView",
          {
            attrs: {
              heading:
                e.signingIn || e.fetchingData
                  ? e.$t("signing_in")
                  : e.$t("sign_in"),
            },
          },
          [
            n(
              "form",
              {
                on: {
                  submit: function (t) {
                    return t.preventDefault(), e.onSubmit(t);
                  },
                },
              },
              [
                !1 === (e.signingIn || e.fetchingData)
                  ? n("project-chooser")
                  : e._e(),
                e.signingIn || e.fetchingData
                  ? [
                      n("v-progress-linear", {
                        attrs: { rounded: "", indeterminate: "" },
                      }),
                      n("p", [e._v(e._s(e.currentProject.project_name))]),
                    ]
                  : e.currentProject
                  ? "failed" === e.currentProject.status
                    ? [
                        e._v(" Something is wrong with this project "),
                        n(
                          "v-notice",
                          { attrs: { icon: "error", color: "danger" } },
                          [e._v(e._s(e.readableError))]
                        ),
                      ]
                    : !0 === e.needs2fa
                    ? [
                        n("p", [e._v(e._s(e.$t("enter_otp")))]),
                        n("otp-input", { on: { input: e.onOTPInput } }),
                      ]
                    : [
                        "successful" === e.currentProject.status &&
                        !0 === e.currentProject.data.authenticated
                          ? n(
                              "div",
                              [
                                null === e.firstName
                                  ? n("v-spinner")
                                  : n("p", {
                                      domProps: {
                                        innerHTML: e._s(
                                          e.$t("continue_as", {
                                            name:
                                              e.firstName + " " + e.lastName,
                                          })
                                        ),
                                      },
                                    }),
                                n("div", { staticClass: "buttons" }, [
                                  n(
                                    "button",
                                    {
                                      staticClass: "secondary",
                                      attrs: { type: "button" },
                                      on: { click: e.logout },
                                    },
                                    [e._v(" " + e._s(e.$t("sign_out")) + " ")]
                                  ),
                                  n("button", { attrs: { type: "submit" } }, [
                                    e._v(e._s(e.$t("continue"))),
                                  ]),
                                ]),
                              ],
                              1
                            )
                          : [
                              n("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.email,
                                    expression: "email",
                                  },
                                  { name: "focus", rawName: "v-focus" },
                                ],
                                attrs: {
                                  type: "email",
                                  placeholder: e.$t("email"),
                                  required: "",
                                  autocomplete: "username",
                                },
                                domProps: { value: e.email },
                                on: {
                                  input: function (t) {
                                    t.target.composing ||
                                      (e.email = t.target.value);
                                  },
                                },
                              }),
                              n("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.password,
                                    expression: "password",
                                  },
                                ],
                                ref: "password",
                                attrs: {
                                  type: "password",
                                  placeholder: e.$t("password"),
                                  autocomplete: "current-password",
                                  required: "",
                                },
                                domProps: { value: e.password },
                                on: {
                                  input: function (t) {
                                    t.target.composing ||
                                      (e.password = t.target.value);
                                  },
                                },
                              }),
                              n(
                                "div",
                                { staticClass: "buttons" },
                                [
                                  n("button", { attrs: { type: "submit" } }, [
                                    e._v(e._s(e.$t("sign_in"))),
                                  ]),
                                  n(
                                    "router-link",
                                    {
                                      staticClass: "secondary",
                                      attrs: { to: "/reset-password" },
                                    },
                                    [
                                      e._v(
                                        " " +
                                          e._s(e.$t("forgot_password")) +
                                          " "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              n("sso", {
                                attrs: { providers: e.ssoProviders },
                              }),
                            ],
                      ]
                  : [
                      n(
                        "v-notice",
                        { attrs: { icon: "info", color: "warning" } },
                        [e._v(e._s(e.$t("no_public_projects")))]
                      ),
                    ],
              ],
              2
            ),
            e.notice.text
              ? n(
                  "public-notice",
                  {
                    attrs: {
                      slot: "notice",
                      loading: e.signingIn || e.fetchingData,
                      color: e.notice.color,
                      icon: e.notice.icon,
                    },
                    slot: "notice",
                  },
                  [e._v(" " + e._s(e.notice.text) + " ")]
                )
              : e._e(),
          ],
          1
        );
      },
      Le = [],
      Fe = n("89b3"),
      Ue = n("8a0c"),
      Be = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.providers.length > 0
          ? n(
              "ul",
              { staticClass: "sso" },
              e._l(e.providers, function (t) {
                return n(
                  "li",
                  {
                    directives: [
                      {
                        name: "tooltip",
                        rawName: "v-tooltip.bottom",
                        value: {
                          classes: ["inverted"],
                          content: e.$helpers.formatTitle(t.name),
                        },
                        expression:
                          "{\n\t\t\tclasses: ['inverted'],\n\t\t\tcontent: $helpers.formatTitle(provider.name)\n\t\t}",
                        modifiers: { bottom: !0 },
                      },
                    ],
                    key: t.name,
                  },
                  [
                    n(
                      "a",
                      { attrs: { href: "" + e.ssoPath + t.name + e.params } },
                      [n("img", { attrs: { src: t.icon, alt: t.name } })]
                    ),
                  ]
                );
              }),
              0
            )
          : e._e();
      },
      Ke = [];
    function Me(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function Ve(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Me(Object(n), !0).forEach(function (t) {
              Object(p["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Me(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var qe = {
        name: "Sso",
        props: {
          providers: {
            type: Array,
            default: function () {
              return [];
            },
          },
        },
        computed: Ve({}, Object(g["e"])(["currentProjectKey", "apiRootPath"]), {
          ssoPath: function () {
            return this.apiRootPath + this.currentProjectKey + "/auth/sso/";
          },
          params: function () {
            return (
              "?mode=cookie&redirect_url=" + this.apiRootPath + "admin/%23/"
            );
          },
        }),
      },
      ze = qe,
      He = (n("810a"), Object(k["a"])(ze, Be, Ke, !1, null, "e2497be8", null)),
      Je = He.exports,
      We = n("746c"),
      Ge = n("b56c");
    function Ye(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function Ze(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ye(Object(n), !0).forEach(function (t) {
              Object(p["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Ye(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var Qe = {
        name: "Login",
        components: {
          PublicView: Fe["a"],
          PublicNotice: Ue["a"],
          ProjectChooser: We["a"],
          Sso: Je,
          OtpInput: Ge["a"],
        },
        data: function () {
          return {
            email: "",
            password: "",
            otp: "",
            signingIn: !1,
            fetchingData: !1,
            notice: {
              text: this.$t("not_authenticated"),
              color: "blue-grey-100",
              icon: "lock_outline",
            },
            firstName: null,
            lastName: null,
            ssoProviders: [],
            needs2fa: !1,
          };
        },
        computed: Ze(
          {},
          Object(g["c"])(["currentProject"]),
          {},
          Object(g["e"])(["currentProjectKey", "apiRootPath", "projects"]),
          {
            readableError: function () {
              var e, t, n, a;
              return "failed" !==
                (null === (e = this.currentProject) || void 0 === e
                  ? void 0
                  : e.status)
                ? null
                : (null === (t = this.currentProject.error.response) ||
                  void 0 === t
                    ? void 0
                    : null === (n = t.data) || void 0 === n
                    ? void 0
                    : null === (a = n.error) || void 0 === a
                    ? void 0
                    : a.message) || this.currentProject.error.message;
            },
          }
        ),
        watch: {
          currentProject: {
            deep: !0,
            handler: function () {
              this.handleLoad();
            },
          },
        },
        created: function () {
          this.handleLoad(), this.checkForErrorQueryParam();
        },
        methods: Ze({}, Object(g["d"])([c["UPDATE_PROJECT"]]), {
          onSubmit: function () {
            var e, t;
            return (
              null === (e = this.currentProject) || void 0 === e
                ? void 0
                : null === (t = e.data) || void 0 === t
                ? void 0
                : t.authenticated
            )
              ? this.enterApp()
              : this.login();
          },
          login: function () {
            var e = this,
              t = this.email,
              n = this.password;
            (this.signingIn = !0),
              (this.notice = {
                text: this.$t("signing_in"),
                color: "blue-grey",
                icon: null,
              });
            var o = {
              project: this.currentProjectKey,
              email: t,
              password: n,
              mode: "cookie",
            };
            this.otp && 6 === this.otp.length && (o.otp = this.otp),
              this.$api
                .login(o)
                .then(
                  (function () {
                    var t = Object(a["a"])(
                      regeneratorRuntime.mark(function t(n) {
                        var a, o, i, r, s, l, u;
                        return regeneratorRuntime.wrap(function (t) {
                          while (1)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!n.error) {
                                  t.next = 2;
                                  break;
                                }
                                throw { info: { code: n.error.code } };
                              case 2:
                                return (t.next = 4), e.$api.api.get("/");
                              case 4:
                                (a = t.sent),
                                  (o = a.data),
                                  (i = o.api),
                                  (r = i.requires2FA),
                                  (s = i.version),
                                  (l = i.database),
                                  (u = o.server.max_upload_size),
                                  e[c["UPDATE_PROJECT"]]({
                                    key: e.currentProjectKey,
                                    data: {
                                      authenticated: !0,
                                      requires2FA: r,
                                      version: s,
                                      database: l,
                                      max_upload_size: u,
                                    },
                                  }),
                                  e.enterApp(),
                                  (e.signingIn = !1);
                              case 11:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })()
                )
                .catch(function (t) {
                  var n;
                  e.signingIn = !1;
                  var a =
                    null === (n = t.info) || void 0 === n ? void 0 : n.code;
                  111 === a
                    ? ((e.needs2fa = !0),
                      (e.notice = {
                        text: e.$t("errors.".concat(a)),
                        color: "blue-grey-100",
                        icon: "lock_outline",
                      }))
                    : 113 === a
                    ? e.$router.push("/setup-2fa")
                    : 100 === a
                    ? ((e.notice = {
                        text: e.$t("errors.".concat(a)),
                        color: "warning",
                        icon: "warning",
                      }),
                      e.$nextTick(function () {
                        e.$refs.password.select();
                      }))
                    : (e.notice = a
                        ? {
                            text: e.$t("errors.".concat(a)),
                            color: "warning",
                            icon: "warning",
                          }
                        : {
                            text: e.$t("errors.-1"),
                            color: "danger",
                            icon: "error_outline",
                          });
                });
          },
          logout: function () {
            var e = this;
            return Object(a["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.$api.logout();
                      case 2:
                        e.$store.commit(c["UPDATE_PROJECT"], {
                          key: e.$store.state.currentProjectKey,
                          data: { authenticated: !1 },
                        });
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          enterApp: function () {
            var e = this;
            return Object(a["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e.notice = { text: e.$t("fetching_data") }),
                          (e.fetchingData = !0),
                          (t.next = 4),
                          Object(d["a"])()
                        );
                      case 4:
                        (n = "/".concat(e.currentProjectKey, "/collections")),
                          e.$store.state.currentUser.last_page &&
                            (n = e.$store.state.currentUser.last_page),
                          e.$route.query.redirect &&
                            (n = e.$route.query.redirect),
                          e.$router.push(n, function () {
                            e.fetchingData = !1;
                          });
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          fetchAuthenticatedUser: function () {
            var e = this;
            return Object(a["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (e.currentProject) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return");
                      case 2:
                        return (
                          (e.firstName = null),
                          (e.lastName = null),
                          (t.next = 6),
                          e.$api.getMe({ fields: ["first_name", "last_name"] })
                        );
                      case 6:
                        (n = t.sent),
                          (a = n.data),
                          (e.firstName = a.first_name),
                          (e.lastName = a.last_name);
                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          fetchSSOProviders: function () {
            var e = this;
            return Object(a["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (e.currentProject) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return");
                      case 2:
                        return (
                          (e.ssoProviders = []),
                          (t.next = 5),
                          e.$api.getThirdPartyAuthProviders()
                        );
                      case 5:
                        (n = t.sent), (a = n.data), (e.ssoProviders = a);
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          onOTPInput: function (e) {
            (this.otp = e), this.login();
          },
          checkForErrorQueryParam: function () {
            if (this.$route.query.error) {
              this.notice = {
                text: this.$t("errors.".concat(this.$route.query.code)),
                color: "danger",
                icon: "error",
              };
              var e = Object(y["clone"])(this.$route.query);
              delete e.error, delete e.code, this.$router.replace({ query: e });
            }
          },
          handleLoad: function () {
            var e, t, n;
            "successful" ===
              (null === (e = this.currentProject) || void 0 === e
                ? void 0
                : e.status) &&
              (!0 ===
              (null === (t = this.currentProject) || void 0 === t
                ? void 0
                : null === (n = t.data) || void 0 === n
                ? void 0
                : n.authenticated)
                ? this.fetchAuthenticatedUser()
                : this.fetchSSOProviders());
          },
        }),
      },
      Xe = Qe,
      et = (n("ed82"), Object(k["a"])(Xe, De, Le, !1, null, "7c8e1f98", null)),
      tt = et.exports,
      nt = function () {
        return Promise.all([n.e("chunk-2d20f576"), n.e("setup-2fa")]).then(
          n.bind(null, "3021")
        );
      },
      at = function () {
        return n.e("reset-password").then(n.bind(null, "656d"));
      },
      ot = function () {
        return Promise.all([n.e("chunk-2fe9f608"), n.e("install")]).then(
          n.bind(null, "4858")
        );
      },
      it = function () {
        return Promise.resolve().then(n.bind(null, "f1d0"));
      },
      rt = function () {
        return n.e("settings_interfaces").then(n.bind(null, "32a5"));
      },
      st = function () {
        return n.e("settings_interfaces-debugger").then(n.bind(null, "dbc8"));
      },
      ct = function () {
        return n.e("settings_settings").then(n.bind(null, "ad0b"));
      },
      lt = function () {
        return n.e("settings_global").then(n.bind(null, "c440"));
      },
      ut = function () {
        return n.e("settings_collections").then(n.bind(null, "e126"));
      },
      dt = function () {
        return Promise.all([
          n.e("chunk-2fe9f608"),
          n.e("settings_fields"),
        ]).then(n.bind(null, "0514"));
      },
      ft = function () {
        return n.e("settings_roles").then(n.bind(null, "efba"));
      },
      mt = function () {
        return n.e("settings_permissions").then(n.bind(null, "b68e"));
      },
      pt = function () {
        return n.e("module-extension").then(n.bind(null, "68dd"));
      };
    o["default"].use(i["a"]);
    var ht = new i["a"]({
      mode: "hash",
      scrollBehavior: function (e, t, n) {
        return n || { x: 0, y: 0 };
      },
      routes: [
        { path: "/:project/collections", component: O },
        { path: "/:project/collections/:collection", props: !0, component: Z },
        {
          path: "/:project/collections/:collection/:primaryKey",
          props: !0,
          component: Re,
          meta: { infoSidebarWidth: "wide" },
        },
        { path: "/:project/ext/:id", props: !0, component: pt },
        {
          path: "/:project/bookmarks/:collection/:bookmarkID",
          beforeEnter: function (e, t, n) {
            var a = e.params,
              o = a.collection,
              i = a.bookmarkID,
              c = s["a"].state.bookmarks.filter(function (e) {
                return e.id == i;
              })[0],
              d = c.search_query,
              f = c.filters,
              m = c.view_query,
              p = c.view_options,
              h = c.view_type;
            r["a"]
              .getItems("directus_collection_presets", {
                "filter[user][eq]": s["a"].state.currentUser.id,
                "filter[title][null]": 1,
                "filter[collection][eq]": o,
                fields: "id",
              })
              .then(function (e) {
                return e.data;
              })
              .then(function (e) {
                return e && e.length >= 1 ? e[0] : null;
              })
              .then(function (e) {
                if (e)
                  return r["a"].updateItem(
                    "directus_collection_presets",
                    e.id,
                    {
                      search_query: d,
                      filters: f,
                      view_query: m,
                      view_options: p,
                      view_type: h,
                    }
                  );
              })
              .then(function () {
                return n({
                  path: "/"
                    .concat(s["a"].state.currentProjectKey, "/collections/")
                    .concat(o, "?b=")
                    .concat(c.id),
                });
              })
              .catch(function (e) {
                return u["a"].emit("error", {
                  notify: l["i18n"].t("something_went_wrong_body"),
                  error: e,
                });
              });
          },
        },
        { path: "/:project/files", component: re },
        {
          path: "/:project/collections/directus_files/:primaryKey",
          component: Re,
          alias: "/:project/files/:primaryKey",
          meta: { infoSidebarWidth: "wide" },
        },
        {
          path: "/:project/collections/directus_users",
          component: Z,
          alias: "/:project/users",
        },
        {
          path: "/:project/collections/directus_users/:primaryKey",
          component: Re,
          alias: "/:project/users/:primaryKey",
          meta: { infoSidebarWidth: "wide" },
        },
        {
          path: "/:project/collections/directus_activity",
          component: Z,
          alias: "/:project/activity",
        },
        {
          path: "/:project/collections/directus_activity/:primaryKey",
          component: Re,
          alias: "/:project/activity/:primaryKey",
        },
        { path: "/:project/settings", component: ct },
        { path: "/:project/settings/global", component: lt },
        { path: "/:project/settings/collections", component: ut },
        {
          path: "/:project/settings/collections/:collection",
          component: dt,
          props: !0,
        },
        { path: "/:project/settings/roles", component: ft },
        { path: "/:project/settings/roles/:id", component: mt, props: !0 },
        { path: "/:project/settings/interfaces", component: rt },
        { path: "/:project/settings/interfaces/:id", component: st, props: !0 },
        { path: "/:project/settings/webhooks", component: Z },
        {
          path: "/:project/settings/webhooks/:primaryKey",
          props: !0,
          component: Re,
        },
        { path: "/login", component: tt, meta: { publicRoute: !0 } },
        { path: "/reset-password", component: at, meta: { publicRoute: !0 } },
        { path: "/install", component: ot, meta: { publicRoute: !0 } },
        { path: "/setup-2fa", component: nt, meta: { publicRoute: !0 } },
        { path: "*", component: it },
      ],
    });
    ht.beforeEach(
      (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t, n, a) {
            var o, i, r, l;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((r = t.meta.publicRoute),
                      !0 === s["a"].state.sidebars.nav &&
                        s["a"].commit(c["TOGGLE_NAV"], !1),
                      !0 === s["a"].state.sidebars.info &&
                        s["a"].commit(c["TOGGLE_INFO"], !1),
                      null !== s["a"].state.projects)
                    ) {
                      e.next = 6;
                      break;
                    }
                    return (e.next = 6), s["a"].dispatch("getProjects");
                  case 6:
                    if (!1 !== s["a"].state.projects || "/install" === t.path) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt("return", a("/install"));
                  case 8:
                    if (!r) {
                      e.next = 10;
                      break;
                    }
                    return e.abrupt("return", a());
                  case 10:
                    if (
                      ((l =
                        (null === (o = s["a"].getters.currentProject) ||
                        void 0 === o
                          ? void 0
                          : null === (i = o.data) || void 0 === i
                          ? void 0
                          : i.authenticated) || !1),
                      !n.params.project ||
                        n.params.project === t.params.project)
                    ) {
                      e.next = 17;
                      break;
                    }
                    if (t.params.project === s["a"].state.currentProjectKey) {
                      e.next = 15;
                      break;
                    }
                    return (
                      (e.next = 15),
                      s["a"].dispatch("setCurrentProject", t.params.project)
                    );
                  case 15:
                    e.next = 20;
                    break;
                  case 17:
                    if (!l || !1 !== s["a"].state.hydrated) {
                      e.next = 20;
                      break;
                    }
                    return (e.next = 20), Object(d["a"])();
                  case 20:
                    if (!l) {
                      e.next = 22;
                      break;
                    }
                    return e.abrupt("return", a());
                  case 22:
                    if ("/" !== t.path) {
                      e.next = 24;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      a({ path: "/login", query: t.query })
                    );
                  case 24:
                    return e.abrupt(
                      "return",
                      a({ path: "/login", query: { redirect: t.fullPath } })
                    );
                  case 25:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n, a) {
          return e.apply(this, arguments);
        };
      })()
    ),
      ht.afterEach(function (e) {
        if (
          (setTimeout(function () {
            return s["a"].dispatch("latency");
          }, 1e3),
          s["a"].state.hydrated)
        ) {
          var t = ["/setup-2fa", "/logout", "/login"];
          t.includes(e.path) || s["a"].dispatch("track", { page: e.path });
        }
      });
    t["a"] = ht;
  },
  4207: function (e, t, n) {},
  4360: function (e, t, n) {
    "use strict";
    var a = {};
    n.r(a),
      n.d(a, "getExtensions", function () {
        return E;
      }),
      n.d(a, "getAllExtensions", function () {
        return P;
      });
    var o = {};
    n.r(o),
      n.d(o, "addField", function () {
        return L;
      }),
      n.d(o, "updateField", function () {
        return F;
      }),
      n.d(o, "updateFields", function () {
        return U;
      }),
      n.d(o, "removeField", function () {
        return B;
      }),
      n.d(o, "getCollections", function () {
        return K;
      }),
      n.d(o, "addCollection", function () {
        return V;
      }),
      n.d(o, "removeCollection", function () {
        return q;
      }),
      n.d(o, "updateCollection", function () {
        return z;
      });
    var i = {};
    n.r(i),
      n.d(i, "discardChanges", function () {
        return ne;
      }),
      n.d(i, "startEditing", function () {
        return ae;
      }),
      n.d(i, "stageValue", function () {
        return oe;
      }),
      n.d(i, "unstageValue", function () {
        return ie;
      }),
      n.d(i, "save", function () {
        return re;
      });
    var r = {};
    n.r(r),
      n.d(r, "editing", function () {
        return se;
      });
    var s = {};
    n.r(s),
      n.d(s, "addPermission", function () {
        return ge;
      }),
      n.d(s, "getPermissions", function () {
        return ye;
      });
    var c = {};
    n.r(c),
      n.d(c, "getSettings", function () {
        return Oe;
      }),
      n.d(c, "setSettings", function () {
        return xe;
      }),
      n.d(c, "setSetting", function () {
        return Se;
      });
    var l = {};
    n.r(l),
      n.d(l, "getUsers", function () {
        return Ie;
      });
    var u = {};
    n.r(u),
      n.d(u, "getRelations", function () {
        return Le;
      }),
      n.d(u, "addRelation", function () {
        return Fe;
      }),
      n.d(u, "updateRelation", function () {
        return Ue;
      });
    var d = {};
    n.r(d),
      n.d(d, "m2o", function () {
        return Me;
      }),
      n.d(d, "o2m", function () {
        return Ve;
      });
    var f = {};
    n.r(f),
      n.d(f, "getServerInfo", function () {
        return Ge;
      });
    var m = {};
    n.r(m),
      n.d(m, "latency", function () {
        return ht;
      }),
      n.d(m, "getCurrentUser", function () {
        return gt;
      }),
      n.d(m, "track", function () {
        return yt;
      }),
      n.d(m, "getBookmarks", function () {
        return vt;
      }),
      n.d(m, "saveBookmark", function () {
        return bt;
      }),
      n.d(m, "deleteBookmark", function () {
        return _t;
      }),
      n.d(m, "loadingStart", function () {
        return jt;
      }),
      n.d(m, "loadingFinished", function () {
        return kt;
      }),
      n.d(m, "setCurrentProject", function () {
        return wt;
      }),
      n.d(m, "updateProjectInfo", function () {
        return $t;
      }),
      n.d(m, "getProjects", function () {
        return St;
      });
    var p = {};
    n.r(p),
      n.d(p, "signalStrength", function () {
        return Et;
      }),
      n.d(p, "currentProject", function () {
        return Pt;
      });
    n("a4d3"),
      n("4de4"),
      n("4160"),
      n("caad"),
      n("e439"),
      n("dbb4"),
      n("b64b"),
      n("159b");
    var h,
      g = n("ade3"),
      y = n("2b0e"),
      v = n("2f62"),
      b = n("0e44"),
      _ = n("d722"),
      j =
        (n("99af"),
        n("a15b"),
        n("d81d"),
        n("d3b7"),
        n("ac1f"),
        n("3ca3"),
        n("5319"),
        n("1276"),
        n("2ca0"),
        n("ddb0"),
        n("2909")),
      k = n("2ef0"),
      w = n("9923"),
      O = n("9fb0");
    function $(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function x(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? $(Object(n), !0).forEach(function (t) {
              Object(g["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : $(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function S(e, t, n) {
      var a = function (e) {
        return null == e
          ? e
          : "string" === typeof e
          ? e
              .split(" ")
              .map(function (e) {
                return e.startsWith("$t:")
                  ? w["i18n"].t(
                      "".concat(t, ".").concat(n, ".").concat(e.substring(3))
                    )
                  : e;
              })
              .join(" ")
          : (Object(k["isObject"])(e) && Object.keys(e).length > 0) ||
            (Array.isArray(e) && e.length > 0)
          ? S(e, t, n)
          : e;
      };
      return Array.isArray(e) ? e.map(a) : Object(k["mapValues"])(e, a);
    }
    function C(e) {
      var t;
      switch (e) {
        case "interfaces":
          t = n("f960");
          break;
        case "layouts":
          t = n("82a9");
          break;
        case "modules":
          t = n("0991");
          break;
      }
      return t.keys().map(a);
      function a(e) {
        var n = t(e),
          a = e
            .replace(/^\.\//, "")
            .replace(/\.\w+$/, "")
            .split(/\//)[0];
        return x({}, n, { id: a, core: !0 });
      }
    }
    function E(e, t) {
      var n = e.commit,
        a = t.toUpperCase(),
        o = null;
      switch (t) {
        case "interfaces":
          o = _["a"].getInterfaces();
          break;
        case "layouts":
          o = _["a"].getLayouts();
          break;
        case "modules":
          o = _["a"].getModules();
          break;
        default:
      }
      return o
        .then(function (e) {
          return e.data;
        })
        .then(function (e) {
          return (
            (e = [].concat(Object(j["a"])(e), Object(j["a"])(C(t)))),
            e.forEach(function (e) {
              var n = e.id,
                a = e.translation;
              if (a) {
                var o = {};
                Object(k["forEach"])(a, function (e, a) {
                  o[a] = Object(g["a"])({}, t, Object(g["a"])({}, n, e));
                }),
                  Object.keys(o).forEach(function (e) {
                    w["i18n"].mergeLocaleMessage(e, o[e]);
                  });
              }
            }),
            e
          );
        })
        .then(function (e) {
          return e.map(function (e) {
            return S(e, t, e.id);
          });
        })
        .then(function (e) {
          n(O["SET_".concat(a)], e);
        });
    }
    function P(e) {
      var t = e.dispatch;
      return Promise.all([
        t("getExtensions", "interfaces"),
        t("getExtensions", "layouts"),
        t("getExtensions", "modules"),
      ]);
    }
    var T =
        ((h = {}),
        Object(g["a"])(h, O["RESET"], function (e) {
          Object.keys(N).forEach(function (t) {
            e[t] = N[t];
          });
        }),
        Object(g["a"])(h, O["SET_INTERFACES"], function (e, t) {
          e.interfaces = Object(k["keyBy"])(t, "id");
        }),
        Object(g["a"])(h, O["SET_LAYOUTS"], function (e, t) {
          e.layouts = Object(k["keyBy"])(t, "id");
        }),
        Object(g["a"])(h, O["SET_MODULES"], function (e, t) {
          e.modules = Object(k["keyBy"])(t, "id");
        }),
        h),
      I = T,
      N = { layouts: {}, interfaces: {}, modules: {} },
      A = { state: Object(k["clone"])(N), actions: a, mutations: I },
      R = (n("96cf"), n("1da1"));
    function D(e) {
      !1 === Object(k["isEmpty"])(e.translation) &&
        e.translation.forEach(function (t) {
          var n = t.translation,
            a = t.locale;
          w["i18n"].mergeLocaleMessage(a, {
            collections: Object(g["a"])({}, e.collection, n),
          });
        }),
        Object(k["forEach"])(e.fields, function (t, n) {
          !1 === Object(k["isEmpty"])(t.translation) &&
            t.translation.forEach(function (t) {
              var a = t.translation,
                o = t.locale;
              w["i18n"].mergeLocaleMessage(o, {
                fields: Object(g["a"])(
                  {},
                  e.collection,
                  Object(g["a"])({}, n, a)
                ),
              });
            });
        });
    }
    function L(e, t) {
      var n = e.commit,
        a = t.collection,
        o = t.field;
      n(O["ADD_FIELD"], { collection: a, field: o });
    }
    function F(e, t) {
      var n = e.commit,
        a = t.collection,
        o = t.field;
      n(O["UPDATE_FIELD"], { collection: a, field: o });
    }
    function U(e, t) {
      var n = e.commit,
        a = t.collection,
        o = t.updates;
      n(O["UPDATE_FIELDS"], { collection: a, updates: o });
    }
    function B(e, t) {
      var n = e.commit,
        a = t.collection,
        o = t.field;
      n(O["REMOVE_FIELD"], { collection: a, field: o });
    }
    function K(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = Object(R["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, a, o, i, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.commit), (e.next = 3), _["a"].getCollections()
                    );
                  case 3:
                    return (
                      (a = e.sent),
                      (o = a.data),
                      Object(k["forEach"])(o, D),
                      (e.next = 8),
                      _["a"].getSettingsFields()
                    );
                  case 8:
                    (i = e.sent),
                      (r = i.data),
                      (o = Object(k["keyBy"])(o, "collection")),
                      (o.directus_settings.fields = Object(k["keyBy"])(
                        r,
                        "field"
                      )),
                      n(O["SET_COLLECTIONS"], o);
                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        M.apply(this, arguments)
      );
    }
    function V(e, t) {
      var n = e.commit;
      D(t), n(O["ADD_COLLECTION"], t);
    }
    function q(e, t) {
      var n = e.commit;
      n(O["DELETE_COLLECTION"], t);
    }
    function z(e, t) {
      var n = e.state,
        a = e.commit,
        o = t.collection,
        i = t.edits,
        r = Object(k["clone"])(n[o]);
      D(Object(k["merge"])({}, r, i)),
        a(O["UPDATE_COLLECTION"], { collection: o, edits: i });
    }
    var H;
    n("45fc"), n("07ac");
    function J(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function W(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? J(Object(n), !0).forEach(function (t) {
              Object(g["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : J(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var G,
      Y =
        ((H = {}),
        Object(g["a"])(H, O["RESET"], function (e) {
          Object.keys(e).forEach(function (t) {
            y["default"].delete(e, t);
          });
        }),
        Object(g["a"])(H, O["SET_COLLECTIONS"], function (e, t) {
          var n = Object(k["mapValues"])(
            Object(k["keyBy"])(t, "collection"),
            function (e) {
              var t = Object(k["find"])(e.fields, { interface: "status" }),
                n = t && t.options && t.options.status_mapping;
              return (
                n && "string" === typeof n && (n = JSON.parse(n)),
                W({}, e, { status_mapping: n })
              );
            }
          );
          Object(k["forEach"])(n, function (t, n) {
            y["default"].set(e, n, t);
          });
        }),
        Object(g["a"])(H, O["ADD_COLLECTION"], function (e, t) {
          if (
            Object.values(t.fields).some(function (e) {
              return "status" === e.type;
            })
          ) {
            var n = Object.values(t.fields).filter(function (e) {
              return "status" === e.type;
            })[0];
            t.status_mapping = n.options.status_mapping;
          }
          y["default"].set(e, t.collection, t);
        }),
        Object(g["a"])(H, O["DELETE_COLLECTION"], function (e, t) {
          y["default"].delete(e, t);
        }),
        Object(g["a"])(H, O["UPDATE_COLLECTION"], function (e, t) {
          var n = t.collection,
            a = t.edits;
          Object(k["forEach"])(a, function (t, a) {
            y["default"].set(e[n], a, t);
          });
        }),
        Object(g["a"])(H, O["ADD_FIELD"], function (e, t) {
          var n = t.collection,
            a = t.field;
          y["default"].set(
            e[n],
            "fields",
            W({}, e[n].fields, Object(g["a"])({}, a.field, a))
          ),
            "status" === a.type &&
              y["default"].set(
                e[n],
                "status_mapping",
                a.options.status_mapping
              );
        }),
        Object(g["a"])(H, O["UPDATE_FIELD"], function (e, t) {
          var n = t.collection,
            a = t.field;
          y["default"].set(
            e[n],
            "fields",
            W({}, e[n].fields, Object(g["a"])({}, a.field, a))
          );
        }),
        Object(g["a"])(H, O["UPDATE_FIELDS"], function (e, t) {
          var n = t.collection,
            a = t.updates;
          a.forEach(function (t) {
            y["default"].set(
              e[n].fields,
              t.field,
              W({}, e[n].fields[t.field], {}, t)
            );
          });
        }),
        Object(g["a"])(H, O["REMOVE_FIELD"], function (e, t) {
          var n = t.collection,
            a = t.field,
            o = Object.assign({}, e[n].fields);
          delete o[a], y["default"].set(e[n], "fields", o);
        }),
        H),
      Z = Y,
      Q = {},
      X = { actions: o, mutations: Z, state: Object(k["clone"])(Q) };
    function ee(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function te(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ee(Object(n), !0).forEach(function (t) {
              Object(g["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ee(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function ne(e) {
      var t = e.commit;
      t(O["DISCARD_CHANGES"]);
    }
    function ae(e, t) {
      var n = e.commit,
        a = t.collection,
        o = t.primaryKey,
        i = t.savedValues;
      n(O["START_EDITING"], { collection: a, primaryKey: o, savedValues: i });
    }
    function oe(e, t) {
      var n = e.commit,
        a = e.state,
        o = t.field,
        i = t.value;
      return a.savedValues[o] == i
        ? n(O["UNSTAGE_VALUE"], { field: o })
        : n(O["STAGE_VALUE"], { field: o, value: i });
    }
    function ie(e, t) {
      var n = e.commit;
      return n(O["UNSTAGE_VALUE"], { field: t });
    }
    function re(e, t) {
      var n = e.commit,
        a = e.state,
        o = e.rootState,
        i = te({}, a, {}, t);
      return (
        "directus_users" === i.collection &&
          i.primaryKey == o.currentUser.id &&
          n(O["UPDATE_CURRENT_USER"], i.values),
        "+" === i.primaryKey
          ? _["a"].createItem(i.collection, i.values).then(function (e) {
              return n(O["ITEM_CREATED"]), e;
            })
          : i.collection.startsWith("directus_")
          ? _["a"]
              .updateItem(i.collection, i.primaryKey, i.values)
              .then(function (e) {
                return n(O["ITEM_CREATED"]), e;
              })
          : _["a"]
              .updateItem(i.collection, i.primaryKey, i.values, {
                fields: "*.*.*.*",
              })
              .then(function (e) {
                return n(O["ITEM_CREATED"]), e;
              })
      );
    }
    function se(e) {
      var t = e.collection && e.collection.length > 0,
        n = e.primaryKey && e.primaryKey.length > 0,
        a = e.values && Object.keys(e.values).length > 0,
        o = e.saving;
      return (t && n && a && !o) || !1;
    }
    var ce,
      le =
        ((G = {}),
        Object(g["a"])(G, O["RESET"], function (e) {
          Object.keys(de).forEach(function (t) {
            e[t] = de[t];
          });
        }),
        Object(g["a"])(G, O["DISCARD_CHANGES"], function (e) {
          (e.saving = !1),
            (e.error = null),
            (e.collection = null),
            (e.primaryKey = null),
            (e.values = {});
        }),
        Object(g["a"])(G, O["ITEM_CREATED"], function (e) {
          (e.saving = !1),
            (e.error = null),
            (e.collection = null),
            (e.primaryKey = null);
        }),
        Object(g["a"])(G, O["START_EDITING"], function (e, t) {
          var n = t.collection,
            a = t.primaryKey,
            o = t.savedValues;
          (e.collection = n),
            (e.primaryKey = a),
            (e.savedValues = o),
            (e.values = {});
        }),
        Object(g["a"])(G, O["UNSTAGE_VALUE"], function (e, t) {
          var n = t.field;
          y["default"].delete(e.values, n);
        }),
        Object(g["a"])(G, O["STAGE_VALUE"], function (e, t) {
          var n = t.field,
            a = t.value;
          y["default"].set(e.values, n, a);
        }),
        G),
      ue = le,
      de = { collection: null, primaryKey: null, values: {}, savedValues: {} },
      fe = {
        actions: i,
        mutations: ue,
        state: Object(k["clone"])(de),
        getters: r,
      },
      me = n("37b6");
    function pe(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function he(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? pe(Object(n), !0).forEach(function (t) {
              Object(g["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : pe(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function ge(e, t) {
      var n = e.commit,
        a = t.collection,
        o = t.permission;
      n(O["ADD_PERMISSION"], { collection: a, permission: o });
    }
    function ye(e) {
      var t = e.commit,
        n = e.rootState,
        a = n.collections,
        o = !0 === n.currentUser.admin,
        i = o ? me["a"] : me["b"],
        r = Object(k["mapValues"])(a, function (e) {
          return e.status_mapping
            ? {
                statuses: Object(k["mapValues"])(e.status_mapping, function () {
                  return i;
                }),
                $create: i,
              }
            : he({}, i, { $create: i });
        });
      return o
        ? (t(O["SET_PERMISSIONS"], r), Promise.resolve())
        : _["a"]
            .getMyPermissions()
            .then(function (e) {
              return e.data;
            })
            .then(function (e) {
              return (
                e.forEach(function (e) {
                  var t = e.collection,
                    n = e.status;
                  return n
                    ? "$create" === n
                      ? (r[t].$create = e)
                      : (r[t].statuses[n] = e)
                    : (r[t] = he({}, r[t], {}, e));
                }),
                t(O["SET_PERMISSIONS"], r),
                r
              );
            })
            .then(function (e) {
              Object(k["forEach"])(e, function (e) {
                if (
                  e.read_field_blacklist &&
                  e.read_field_blacklist.length > 0
                ) {
                  var n = a[e.collection];
                  t(O["UPDATE_COLLECTION"], {
                    collection: e.collection,
                    edits: {
                      fields: Object(k["omit"])(
                        n.fields,
                        e.read_field_blacklist
                      ),
                    },
                  });
                }
              });
            });
    }
    var ve,
      be =
        ((ce = {}),
        Object(g["a"])(ce, O["RESET"], function (e) {
          Object.keys(e).forEach(function (t) {
            y["default"].delete(e, t);
          });
        }),
        Object(g["a"])(ce, O["SET_PERMISSIONS"], function (e, t) {
          Object(k["forEach"])(t, function (t, n) {
            y["default"].set(e, n, t);
          });
        }),
        Object(g["a"])(ce, O["ADD_PERMISSION"], function (e, t) {
          var n = t.collection,
            a = t.permission;
          y["default"].set(e, n, a);
        }),
        ce),
      _e = be,
      je = {},
      ke = { actions: s, mutations: _e, state: Object(k["clone"])(je) },
      we =
        ((ve = {}),
        Object(g["a"])(ve, O["RESET"], function (e) {
          Object.keys(Pe).forEach(function (t) {
            e[t] = Pe[t];
          });
        }),
        Object(g["a"])(ve, O["SET_SETTINGS"], function (e, t) {
          var n = Object(k["keyBy"])(t, "key");
          (e.values = Object(k["mapValues"])(n, "value")),
            (e.primaryKeys = Object(k["mapValues"])(n, "id"));
        }),
        Object(g["a"])(ve, O["SET_SETTING"], function (e, t) {
          var n = t.id,
            a = t.key,
            o = t.value;
          y["default"].set(e.values, a, o),
            y["default"].set(e.primaryKeys, a, n);
        }),
        ve);
    function Oe(e) {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = Object(R["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, a, o;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (n = t.commit), (e.next = 3), _["a"].getSettings();
                  case 3:
                    (a = e.sent), (o = a.data), n(O["SET_SETTINGS"], o);
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        $e.apply(this, arguments)
      );
    }
    function xe(e, t) {
      var n = e.dispatch;
      return Promise.all(
        Object.keys(t).map(function (e) {
          return n("setSetting", { key: e, value: t[e] });
        })
      );
    }
    function Se(e, t) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = Object(R["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var a, o, i, r, s, c, l, u, d;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((a = t.commit),
                      (o = t.state),
                      (i = n.key),
                      (r = n.value),
                      (s = o.primaryKeys[i]),
                      !Object(k["isNil"])(s))
                    ) {
                      e.next = 11;
                      break;
                    }
                    return (
                      (e.next = 6),
                      _["a"].createItem("directus_settings", {
                        key: i,
                        value: r,
                      })
                    );
                  case 6:
                    (c = e.sent),
                      (l = c.data),
                      a(O["SET_SETTING"], l),
                      (e.next = 16);
                    break;
                  case 11:
                    return (
                      (e.next = 13),
                      _["a"].updateItem("directus_settings", s, { value: r })
                    );
                  case 13:
                    (u = e.sent), (d = u.data), a(O["SET_SETTING"], d);
                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Ce.apply(this, arguments)
      );
    }
    var Ee,
      Pe = { values: {}, primaryKeys: {} },
      Te = { actions: c, mutations: we, state: Object(k["clone"])(Pe) };
    function Ie(e) {
      var t = e.commit;
      return _["a"]
        .getUsers({
          fields: [
            "id",
            "first_name",
            "last_name",
            "title",
            "status",
            "timezone",
            "role.*",
            "avatar.*",
            "company",
          ],
        })
        .then(function (e) {
          return e.data;
        })
        .then(function (e) {
          t(O["SET_USERS"], e);
        });
    }
    var Ne,
      Ae =
        ((Ee = {}),
        Object(g["a"])(Ee, O["RESET"], function (e) {
          Object.keys(e).forEach(function (t) {
            y["default"].delete(e, t);
          });
        }),
        Object(g["a"])(Ee, O["SET_USERS"], function (e, t) {
          Object.values(t).forEach(function (t) {
            y["default"].set(e, t.id, t);
          });
        }),
        Ee),
      Re = {},
      De = { actions: l, mutations: Ae, state: Object(k["clone"])(Re) };
    function Le(e) {
      var t = e.commit;
      return _["a"]
        .getRelations({ limit: -1 })
        .then(function (e) {
          return e.data;
        })
        .then(function (e) {
          return t(O["SET_RELATIONS"], e);
        });
    }
    function Fe(e, t) {
      var n = e.commit;
      n(O["ADD_RELATION"], t);
    }
    function Ue(e, t) {
      var n = e.commit;
      n(O["UPDATE_RELATION"], t);
    }
    function Be(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function Ke(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Be(Object(n), !0).forEach(function (t) {
              Object(g["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Be(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Me(e, t, n) {
      var a = n.collections;
      return function (t, n) {
        var o = e.filter(function (e) {
            return e.collection_many === t && e.field_many === n;
          }),
          i = o ? o[o.length - 1] : null;
        return i
          ? {
              id: i.id,
              collection_many: a[i.collection_many],
              collection_one: a[i.collection_one],
              field_many: a[i.collection_many].fields[i.field_many],
              field_one: a[i.collection_one].fields[i.field_one],
            }
          : null;
      };
    }
    function Ve(e, t, n) {
      var a = n.collections;
      return function (n, o) {
        var i = e.filter(function (e) {
            return e.collection_one === n && e.field_one === o;
          }),
          r = i ? i[i.length - 1] : null;
        if (r) {
          null != r.junction_field &&
            (r.junction = t.m2o(r.collection_many, r.junction_field));
          try {
            return Ke({}, r, {
              collection_many: a[r.collection_many],
              collection_one: a[r.collection_one],
              field_many: a[r.collection_many].fields[r.field_many],
              field_one: a[r.collection_one].fields[r.field_one],
            });
          } catch (s) {
            return null;
          }
        }
        return null;
      };
    }
    var qe,
      ze =
        ((Ne = {}),
        Object(g["a"])(Ne, O["RESET"], function (e) {
          Object.keys(e).forEach(function (t) {
            y["default"].delete(e, t);
          });
        }),
        Object(g["a"])(Ne, O["SET_RELATIONS"], function (e, t) {
          Object(k["forEach"])(t, function (t, n) {
            y["default"].set(e, n, t);
          });
        }),
        Object(g["a"])(Ne, O["ADD_RELATION"], function (e, t) {
          y["default"].set(e, e.length, t);
        }),
        Object(g["a"])(Ne, O["UPDATE_RELATION"], function (e, t) {
          var n = e.map(function (e) {
            return e.id === t.id ? t : e;
          });
          Object(k["forEach"])(n, function (t, n) {
            y["default"].set(e, n, t);
          });
        }),
        Ne),
      He = [],
      Je = {
        actions: u,
        mutations: ze,
        getters: d,
        state: Object(k["clone"])(He),
      },
      We =
        ((qe = {}),
        Object(g["a"])(qe, O["RESET"], function (e) {
          Object.keys(Ze).forEach(function (t) {
            e[t] = Ze[t];
          });
        }),
        Object(g["a"])(qe, O["SET_SERVER_INFO"], function (e, t) {
          (e.apiVersion = t.apiVersion),
            (e.phpVersion = t.phpVersion),
            (e.maxUploadSize = t.maxUploadSize);
        }),
        qe);
    function Ge(e) {
      var t = e.commit;
      return _["a"]
        .projectInfo()
        .then(function (e) {
          return e.data;
        })
        .then(function (e) {
          t(O["SET_SERVER_INFO"], {
            apiVersion: Object(k["get"])(e, "api.version"),
            phpVersion: Object(k["get"])(e, "server.general.php_version"),
            maxUploadSize: Object(k["get"])(e, "server.max_upload_size"),
          });
        });
    }
    var Ye,
      Ze = {
        apiVersion: null,
        phpVersion: null,
        maxUploadSize: null,
        databaseVendor: "mysql",
      },
      Qe = { state: Object(k["clone"])(Ze), mutations: We, actions: f },
      Xe =
        ((Ye = {}),
        Object(g["a"])(Ye, O["RESET"], function (e) {
          e.queue = [];
        }),
        Object(g["a"])(Ye, O["PUSH_NOTIFICATION"], function (e, t) {
          e.queue.push(t);
        }),
        Object(g["a"])(Ye, O["REMOVE_NOTIFICATION"], function (e, t) {
          e.queue = e.queue.filter(function (e) {
            return e.id !== t;
          });
        }),
        Ye),
      et = Xe,
      tt = { queue: [] },
      nt = { state: Object(k["clone"])(tt), mutations: et },
      at = (n("c975"), n("fb6a"), window.location.pathname),
      ot = at.split("/"),
      it = ot.indexOf("admin"),
      rt = ot.slice(0, it).join("/") + "/",
      st = {
        hydrated: !1,
        hydratingError: null,
        latency: [],
        currentUser: {},
        bookmarks: [],
        sidebars: { nav: !1, info: !1 },
        queue: [],
        currentProjectKey: null,
        projects: null,
        apiRootPath: rt,
      },
      ct = (n("7db0"), n("2532"), n("bc3a")),
      lt = n.n(ct),
      ut = n("41cb"),
      dt = n("e59c"),
      ft = n("cf41");
    function mt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function pt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? mt(Object(n), !0).forEach(function (t) {
              Object(g["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : mt(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function ht(e) {
      var t = e.commit,
        n = performance.now(),
        a = Date.now();
      _["a"]
        .ping()
        .then(function () {
          var e = performance.now(),
            o = e - n;
          t(O["LATENCY"], { date: a, latency: o });
        })
        .catch(function (e) {
          var o = performance.now(),
            i = o - n;
          return -2 === e.code
            ? t(O["LATENCY"], { date: a, latency: i })
            : t(O["LATENCY"], { date: a, latency: -1 });
        });
    }
    function gt(e) {
      var t = e.commit;
      return _["a"]
        .getMe({
          fields: [
            "id",
            "avatar.*",
            "email",
            "first_name",
            "last_name",
            "locale",
            "role.*",
            "last_page",
            "theme",
          ],
        })
        .then(function (e) {
          return e.data;
        })
        .then(function (e) {
          return pt({}, e, { admin: 1 === e.role.id });
        })
        .then(function (e) {
          return t(O["SET_CURRENT_USER"], e);
        });
    }
    function yt(e, t) {
      var n = e.commit,
        a = e.state,
        o = t.page,
        i = a.currentUser.id;
      if (i) {
        var r = { last_page: o };
        return (
          n(O["UPDATE_CURRENT_USER"], r),
          _["a"].api.request(
            "PATCH",
            "/users/".concat(i, "/tracking/page"),
            {},
            r
          )
        );
      }
    }
    function vt(e) {
      var t = e.commit;
      return _["a"].getMyBookmarks().then(function (e) {
        return t(O["SET_BOOKMARKS"], e), e;
      });
    }
    function bt(e, t) {
      var n = e.commit;
      return _["a"].createCollectionPreset(t).then(function (e) {
        var t = e.data;
        return n(O["ADD_BOOKMARK"], t), t;
      });
    }
    function _t(e, t) {
      var n = this,
        a = e.commit;
      return (
        a(O["DELETE_BOOKMARK"], t),
        _["a"].deleteCollectionPreset(t).catch(function (e) {
          n.$events.emit("error", {
            notify: n.$t("something_went_wrong_body"),
            error: e,
          });
        })
      );
    }
    function jt(e, t) {
      var n = e.commit,
        a = t.id,
        o = t.desc;
      n(O["LOADING_START"], { id: a, desc: o });
    }
    function kt(e, t) {
      var n = e.commit;
      n(O["LOADING_FINISHED"], t);
    }
    function wt(e, t) {
      return Ot.apply(this, arguments);
    }
    function Ot() {
      return (
        (Ot = Object(R["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var a, o, i, r, s, c, l, u, d, f, m;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((i = t.commit),
                      (r = t.dispatch),
                      (s = t.state),
                      (c = t.getters),
                      (l = s.projects.find(function (e) {
                        return e.key === n;
                      })),
                      l)
                    ) {
                      e.next = 6;
                      break;
                    }
                    return (e.next = 5), r("updateProjectInfo", n);
                  case 5:
                    l = s.projects.find(function (e) {
                      return e.key === n;
                    });
                  case 6:
                    if (
                      (i(O["SET_CURRENT_PROJECT"], n),
                      (u =
                        (null === (a = l.data) || void 0 === a
                          ? void 0
                          : a.authenticated) || !1),
                      (d = !0 !== ut["a"].currentRoute.meta.publicRoute),
                      (f =
                        null === (o = c.currentProject.data) || void 0 === o
                          ? void 0
                          : o.default_locale),
                      f && Object(w["loadLanguageAsync"])(f),
                      !d || !u)
                    ) {
                      e.next = 23;
                      break;
                    }
                    return i(O["RESET"]), (e.next = 15), r("getProjects");
                  case 15:
                    if (!u) {
                      e.next = 21;
                      break;
                    }
                    return (e.next = 18), Object(dt["a"])();
                  case 18:
                    (m = "/".concat(n, "/collections")),
                      s.currentUser.last_page && (m = s.currentUser.last_page),
                      ut["a"].push(m);
                  case 21:
                    e.next = 24;
                    break;
                  case 23:
                    d && !1 === u && ut["a"].push("/login");
                  case 24:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Ot.apply(this, arguments)
      );
    }
    function $t(e, t) {
      return xt.apply(this, arguments);
    }
    function xt() {
      return (
        (xt = Object(R["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var a, o, i, r, s, c, l, u, d, f, m, p, h, g, y;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = t.commit),
                        (o = t.state),
                        (i = o.apiRootPath),
                        (r = i + n + "/"),
                        a(O["SET_PROJECT_STATUS"], {
                          key: n,
                          status: "loading",
                        }),
                        (e.prev = 4),
                        (e.next = 7),
                        lt.a.get(r)
                      );
                    case 7:
                      (s = e.sent),
                        (c = s.data.data.api),
                        (l = c.project_name),
                        (u = c.project_foreground),
                        (d = c.project_color),
                        (f = c.project_background),
                        (m = c.project_logo),
                        (p = c.project_public_note),
                        (h = c.telemetry),
                        (g = c.default_locale),
                        (y = void 0 === s.data.public),
                        a(O["UPDATE_PROJECT"], {
                          key: n,
                          data: {
                            project_name: l,
                            project_foreground: u,
                            project_color: d,
                            project_background: f,
                            project_logo: m,
                            project_public_note: p,
                            telemetry: h,
                            default_locale: g,
                            authenticated: y,
                          },
                        }),
                        a(O["SET_PROJECT_STATUS"], {
                          key: n,
                          status: "successful",
                        }),
                        (e.next = 18);
                      break;
                    case 14:
                      (e.prev = 14),
                        (e.t0 = e["catch"](4)),
                        a(O["UPDATE_PROJECT"], { key: n, error: e.t0 }),
                        a(O["SET_PROJECT_STATUS"], {
                          key: n,
                          status: "failed",
                        });
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[4, 14]]
            );
          })
        )),
        xt.apply(this, arguments)
      );
    }
    function St(e, t) {
      return Ct.apply(this, arguments);
    }
    function Ct() {
      return (
        (Ct = Object(R["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var a, o, i, r, s, c, l, u, d, f, m, p, h, g, y, v;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((o = t.state),
                        (i = t.dispatch),
                        (r = t.commit),
                        (s = o.currentProjectKey),
                        (c = o.apiRootPath),
                        !0 !== n && null !== o.projects && !1 !== o.projects)
                      ) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (l = c + "server/projects"),
                        (e.prev = 5),
                        (e.next = 8),
                        lt.a.get(l)
                      );
                    case 8:
                      (u = e.sent),
                        (d = u.data.data),
                        (f = d.map(function (e) {
                          return {
                            key: e,
                            status: null,
                            data: null,
                            error: null,
                          };
                        })),
                        s &&
                          !1 === d.includes(s) &&
                          f.push({
                            key: s,
                            status: null,
                            data: null,
                            error: null,
                          }),
                        r(O["INIT_PROJECTS"], f),
                        (e.next = 19);
                      break;
                    case 15:
                      (e.prev = 15),
                        (e.t0 = e["catch"](5)),
                        (p =
                          null === (m = e.t0.response) || void 0 === m
                            ? void 0
                            : m.data.error.code),
                        14 === p && r(O["INIT_PROJECTS"], !1);
                    case 19:
                      if (!Object(ft["a"])(s)) {
                        e.next = 34;
                        break;
                      }
                      return (
                        console.log("[Cloud] Using cloud projects"),
                        (h =
                          "https://cloud-api.directus.cloud/projects/".concat(
                            s,
                            "/related"
                          )),
                        (e.prev = 22),
                        (e.next = 25),
                        lt.a.get(h)
                      );
                    case 25:
                      (g = e.sent),
                        (y = g.data.data),
                        (v = y.map(function (e) {
                          return {
                            key: e,
                            status: null,
                            data: null,
                            error: null,
                          };
                        })),
                        r(O["INIT_PROJECTS"], v),
                        (e.next = 34);
                      break;
                    case 31:
                      (e.prev = 31), (e.t1 = e["catch"](22)), console.log(e.t1);
                    case 34:
                      if (
                        ((null === (a = o.projects) || void 0 === a
                          ? void 0
                          : a.length) > 0 &&
                          null === s &&
                          i("setCurrentProject", o.projects[0].key),
                        null === o.projects || !1 === o.projects)
                      ) {
                        e.next = 37;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        Promise.allSettled(
                          o.projects
                            .map(function (e) {
                              return e.key;
                            })
                            .map(function (e) {
                              return i("updateProjectInfo", e);
                            })
                        )
                      );
                    case 37:
                      return e.abrupt("return", Promise.resolve());
                    case 38:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [5, 15],
                [22, 31],
              ]
            );
          })
        )),
        Ct.apply(this, arguments)
      );
    }
    function Et(e) {
      var t = e.latency[e.latency.length - 1];
      return t
        ? ((t = t.latency),
          t > 0 && t < 200
            ? 4
            : t >= 200 && t < 500
            ? 3
            : t >= 500 && t < 1e3
            ? 2
            : t >= 1e3
            ? 1
            : 0)
        : 0;
    }
    function Pt(e) {
      return e.projects
        ? e.projects.find(function (t) {
            return t.key === e.currentProjectKey;
          })
        : null;
    }
    var Tt;
    n("c7400");
    function It(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function Nt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? It(Object(n), !0).forEach(function (t) {
              Object(g["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : It(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var At =
        ((Tt = {}),
        Object(g["a"])(Tt, O["STORE_HYDRATED"], function (e, t) {
          e.hydrated = t;
        }),
        Object(g["a"])(Tt, O["HYDRATING_FAILED"], function (e, t) {
          (e.hydrated = !1), (e.hydratingError = t);
        }),
        Object(g["a"])(Tt, O["LATENCY"], function (e, t) {
          var n = Object(j["a"])(e.latency);
          n.push(t), n.length > 200 && n.shift(), (e.latency = n);
        }),
        Object(g["a"])(Tt, O["SET_CURRENT_USER"], function (e, t) {
          e.currentUser = t;
        }),
        Object(g["a"])(Tt, O["UPDATE_CURRENT_USER"], function (e, t) {
          e.currentUser = Nt({}, e.currentUser, {}, t);
        }),
        Object(g["a"])(Tt, O["SET_BOOKMARKS"], function (e, t) {
          e.bookmarks = t;
        }),
        Object(g["a"])(Tt, O["ADD_BOOKMARK"], function (e, t) {
          e.bookmarks = [].concat(Object(j["a"])(e.bookmarks), [t]);
        }),
        Object(g["a"])(Tt, O["DELETE_BOOKMARK"], function (e, t) {
          e.bookmarks = e.bookmarks.filter(function (e) {
            return e.id !== t;
          });
        }),
        Object(g["a"])(Tt, O["TOGGLE_NAV"], function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : !e.sidebars.nav;
          e.sidebars.nav = t;
        }),
        Object(g["a"])(Tt, O["TOGGLE_INFO"], function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : !e.sidebars.info;
          e.sidebars.info = t;
        }),
        Object(g["a"])(Tt, O["LOADING_START"], function (e, t) {
          var n = t.id,
            a = t.desc;
          e.queue = [].concat(Object(j["a"])(e.queue), [{ id: n, desc: a }]);
        }),
        Object(g["a"])(Tt, O["LOADING_FINISHED"], function (e, t) {
          e.queue = e.queue.filter(function (e) {
            return e.id !== t;
          });
        }),
        Object(g["a"])(Tt, O["SET_CURRENT_PROJECT"], function (e, t) {
          e.currentProjectKey = t;
        }),
        Object(g["a"])(Tt, O["UPDATE_PROJECT"], function (e, t) {
          var n = t.key,
            a = t.data,
            o = t.error,
            i = e.projects.findIndex(function (e) {
              return e.key === n;
            });
          -1 !== i
            ? y["default"].set(
                e.projects,
                i,
                Nt({}, e.projects[i], {
                  data: Nt({}, e.projects[i].data, {}, a || {}),
                  error: o || null,
                })
              )
            : (e.projects = [].concat(Object(j["a"])(e.projects), [
                { key: n, data: a, error: o },
              ]));
        }),
        Object(g["a"])(Tt, O["SET_PROJECT_STATUS"], function (e, t) {
          var n = t.key,
            a = t.status,
            o = e.projects.findIndex(function (e) {
              return e.key === n;
            });
          y["default"].set(e.projects, o, Nt({}, e.projects[o], { status: a }));
        }),
        Object(g["a"])(Tt, O["INIT_PROJECTS"], function (e, t) {
          e.projects = t;
        }),
        Tt),
      Rt = At;
    function Dt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function Lt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Dt(Object(n), !0).forEach(function (t) {
              Object(g["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Dt(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    y["default"].use(v["a"]);
    var Ft = !1,
      Ut = new v["a"].Store({
        state: Object(k["clone"])(st),
        actions: m,
        getters: p,
        mutations: Lt(
          Object(g["a"])({}, O["RESET"], function (e) {
            var t = ["latency", "currentProjectKey", "projects"];
            Object.keys(st).forEach(function (n) {
              t.includes(n) || (e[n] = st[n]);
            });
          }),
          Rt
        ),
        strict: Ft,
        modules: {
          collections: X,
          extensions: A,
          edits: fe,
          permissions: ke,
          users: De,
          relations: Je,
          serverInfo: Qe,
          notifications: nt,
          settings: Te,
        },
        plugins: [
          Object(b["a"])({
            key: "directus-app",
            paths: ["currentProjectKey"],
            storage: window.sessionStorage,
            rehydrated: function (e) {
              _["a"].config.project = e.state.currentProjectKey;
            },
          }),
        ],
      });
    t["a"] = Ut;
  },
  "437c": function (e, t, n) {},
  "43df": function (e, t, n) {
    "use strict";
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "transition",
          { attrs: { name: "fade" } },
          [
            0 === e.strength
              ? n("v-spinner")
              : 1 === e.strength
              ? n(
                  "svg",
                  { staticClass: "v-signal", attrs: { viewBox: "0 0 48 48" } },
                  [
                    n("path", {
                      attrs: {
                        "fill-opacity": ".3",
                        d: "M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02z",
                      },
                    }),
                    n("path", { attrs: { d: "M0 0h48v48H0z", fill: "none" } }),
                    n("path", {
                      attrs: {
                        d: "M13.34 29.72l10.65 13.27.01.01.01-.01 10.65-13.27C34.13 29.31 30.06 26 24 26s-10.13 3.31-10.66 3.72z",
                      },
                    }),
                  ]
                )
              : 2 === e.strength
              ? n(
                  "svg",
                  { staticClass: "v-signal", attrs: { viewBox: "0 0 48 48" } },
                  [
                    n("path", {
                      attrs: {
                        "fill-opacity": ".3",
                        d: "M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02z",
                      },
                    }),
                    n("path", { attrs: { d: "M0 0h48v48H0z", fill: "none" } }),
                    n("path", {
                      attrs: {
                        d: "M9.58 25.03l14.41 17.95.01.02.01-.02 14.41-17.95C37.7 24.47 32.2 20 24 20s-13.7 4.47-14.42 5.03z",
                      },
                    }),
                  ]
                )
              : 3 === e.strength
              ? n(
                  "svg",
                  { staticClass: "v-signal", attrs: { viewBox: "0 0 48 48" } },
                  [
                    n("path", {
                      attrs: {
                        "fill-opacity": ".3",
                        d: "M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02z",
                      },
                    }),
                    n("path", { attrs: { d: "M0 0h48v48H0z", fill: "none" } }),
                    n("path", {
                      attrs: {
                        d: "M7.07 21.91l16.92 21.07.01.02.02-.02 16.92-21.07C40.08 21.25 33.62 16 24 16c-9.63 0-16.08 5.25-16.93 5.91z",
                      },
                    }),
                  ]
                )
              : 4 === e.strength
              ? n(
                  "svg",
                  { staticClass: "v-signal", attrs: { viewBox: "0 0 48 48" } },
                  [
                    n("path", {
                      attrs: {
                        d: "M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02z",
                      },
                    }),
                    n("path", { attrs: { d: "M0 0h48v48H0z", fill: "none" } }),
                  ]
                )
              : e._e(),
          ],
          1
        );
      },
      o = [],
      i = {
        name: "VSignal",
        computed: {
          strength: function () {
            return this.$store.getters.signalStrength;
          },
        },
      },
      r = i,
      s = (n("db1c"), n("2877")),
      c = Object(s["a"])(r, a, o, !1, null, "275b1b36", null);
    t["a"] = c.exports;
  },
  "44b2": function (e, t, n) {},
  "44e5": function (e, t, n) {
    "use strict";
    var a = n("5b90"),
      o = n.n(a);
    o.a;
  },
  "48d7": function (e, t, n) {},
  "4b93": function (e, t, n) {
    "use strict";
    var a = n("7e58"),
      o = n.n(a);
    o.a;
  },
  "4c95": function (e, t, n) {},
  "4cbd": function (e, t, n) {},
  "4d4c": function (e, t, n) {
    "use strict";
    var a = n("8c93"),
      o = n.n(a);
    o.a;
  },
  5013: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:date","version":"1.0.0","types":["date"],"icon":"event","options":{"min":{"name":"$t:min","comment":"$t:min_comment","interface":"date"},"max":{"name":"$t:max","comment":"$t:max_comment","interface":"date"},"localized":{"name":"$t:localized","comment":"$t:localized_comment","interface":"switch","default":true},"showRelative":{"name":"$t:relative","comment":"$t:relative_comment","interface":"switch","default":true},"iconLeft":{"name":"$t:icon_left","comment":"$t:icon_left_comment","interface":"icon","advanced":true},"iconRight":{"name":"$t:icon_right","comment":"$t:icon_right_comment","interface":"icon","advanced":true}}}'
    );
  },
  "52b6": function (e, t, n) {
    "use strict";
    var a = n("9082"),
      o = n.n(a);
    o.a;
  },
  "52b6b": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:calendar","version":"1.0.0","types":["date"],"icon":"event","options":{"min":{"name":"$t:min","comment":"$t:min_comment","interface":"date"},"max":{"name":"$t:max","comment":"$t:max_comment","interface":"date"},"formatting":{"name":"$t:formatting","comment":"$t:formatting_comment","interface":"text-input","options":{"placeholder":"MM/dd/yyyy"},"length":50}}}'
    );
  },
  "53f8": function (e, t, n) {},
  "549d": function (e, t, n) {
    "use strict";
    var a = n("4cbd"),
      o = n.n(a);
    o.a;
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var a = n("2b0e"),
      o = n("2ef0"),
      i = n.n(o),
      r = n("310e"),
      s = n.n(r),
      c = n("e37d"),
      l = n("2b88"),
      u = n.n(l),
      d = n("bc3a"),
      f = n.n(d),
      m = n("58ca"),
      p = n("3a60"),
      h = n.n(p),
      g = n("750b"),
      y =
        (n("989b"),
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "label",
            { staticClass: "invisible-label", attrs: { for: e.htmlFor } },
            [e._t("default")],
            2
          );
        }),
      v = [],
      b = {
        name: "InvisibleLabel",
        props: { htmlFor: { type: String, required: !0 } },
      },
      _ = b,
      j = (n("4d4c"), n("2877")),
      k = Object(j["a"])(_, y, v, !1, null, "31d1dcec", null),
      w = k.exports,
      O = n("a609"),
      $ = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "v-modal-base",
          {
            attrs: { message: e.message },
            on: {
              cancel: function (t) {
                return e.$emit("confirm");
              },
            },
          },
          [
            n(
              "div",
              {
                staticClass: "buttons",
                on: {
                  keydown: function (t) {
                    return !t.type.indexOf("key") &&
                      e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"])
                      ? null
                      : e.$emit("confirm");
                  },
                },
              },
              [
                n(
                  "v-button",
                  {
                    staticClass: "confirm",
                    on: {
                      click: function (t) {
                        return e.$emit("confirm");
                      },
                    },
                  },
                  [e._v(" " + e._s(e.confirmText || e.$t("ok")) + " ")]
                ),
              ],
              1
            ),
          ]
        );
      },
      x = [],
      S = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("transition", { attrs: { name: "slide" } }, [
          n("div", { staticClass: "v-modal-base" }, [
            n("div", {
              staticClass: "mask",
              on: {
                click: function (t) {
                  return e.$emit("cancel");
                },
              },
            }),
            n("div", { staticClass: "wrapper" }, [
              n(
                "aside",
                { staticClass: "modal" },
                [
                  e.title
                    ? n("h2", { staticClass: "type-title" }, [
                        e._v(e._s(e.title)),
                      ])
                    : e._e(),
                  n("p", [e._v(e._s(e.message))]),
                  e._t("default"),
                ],
                2
              ),
            ]),
          ]),
        ]);
      },
      C = [],
      E = {
        name: "VModalBase",
        props: {
          title: { type: String, required: !1 },
          message: { type: String, required: !1 },
        },
        mounted: function () {
          this.$helpers.disableBodyScroll(this.$refs.modal);
        },
        beforeDestroy: function () {
          this.$helpers.enableBodyScroll(this.$refs.modal);
        },
      },
      P = E,
      T = (n("0f0d"), Object(j["a"])(P, S, C, !1, null, "669802e4", null)),
      I = T.exports,
      N = {
        name: "VAlert",
        components: { VModalBase: I },
        props: {
          message: { type: String, required: !0 },
          confirmText: { type: String, default: null },
        },
      },
      A = N,
      R = (n("e080"), Object(j["a"])(A, $, x, !1, null, "3a35f7b5", null)),
      D = R.exports,
      L = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            staticClass: "v-avatar",
            class: [{ tile: e.tile }, e.sizeClass],
            style: e.styles,
          },
          [e._t("default")],
          2
        );
      },
      F = [];
    n("a9e3"), n("c96a"), n("2ca0");
    function U(e) {
      return e.startsWith("--") ? "var(".concat(e, ")") : e;
    }
    var B = Object(g["b"])({
        props: {
          color: { type: String, default: "--avatar-background-color" },
          size: { type: Number, default: null },
          tile: { type: Boolean, default: !1 },
          xSmall: { type: Boolean, default: !1 },
          small: { type: Boolean, default: !1 },
          large: { type: Boolean, default: !1 },
          xLarge: { type: Boolean, default: !1 },
        },
        setup: function (e) {
          var t = Object(g["a"])(function () {
              var t = { "--_v-avatar-color": U(e.color) };
              return e.size && (t["--_v-avatar-size"] = e.size + "px"), t;
            }),
            n = Object(g["a"])(function () {
              return e.xSmall
                ? "x-small"
                : e.small
                ? "small"
                : e.large
                ? "large"
                : e.xLarge
                ? "x-large"
                : null;
            });
          return { styles: t, sizeClass: n };
        },
      }),
      K = B,
      M = (n("71fe"), Object(j["a"])(K, L, F, !1, null, "686697f6", null)),
      V = M.exports,
      q = V,
      z = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "button",
          {
            staticClass: "v-button",
            class: [
              e.sizeClass,
              {
                block: e.block,
                rounded: e.rounded,
                icon: e.icon,
                outlined: e.outlined,
                loading: e.loading,
              },
            ],
            style: e.styles,
            attrs: { type: e.type, disabled: e.disabled },
            on: {
              click: function (t) {
                !e.loading && e.$emit("click");
              },
            },
          },
          [
            n(
              "span",
              { staticClass: "content", class: { invisible: e.loading } },
              [e._t("default")],
              2
            ),
            n(
              "div",
              { staticClass: "spinner" },
              [
                e.loading
                  ? e._t("loading", [
                      n("v-spinner", {
                        attrs: { "x-small": e.xSmall, small: e.small },
                      }),
                    ])
                  : e._e(),
              ],
              2
            ),
          ]
        );
      },
      H = [],
      J = Object(g["b"])({
        props: {
          block: { type: Boolean, default: !1 },
          rounded: { type: Boolean, default: !1 },
          outlined: { type: Boolean, default: !1 },
          icon: { type: Boolean, default: !1 },
          color: { type: String, default: "--button-primary-text-color" },
          backgroundColor: {
            type: String,
            default: "--button-primary-background-color",
          },
          hoverColor: { type: String, default: "--button-primary-text-color" },
          hoverBackgroundColor: {
            type: String,
            default: "--button-primary-background-color-hover",
          },
          type: { type: String, default: "button" },
          disabled: { type: Boolean, default: !1 },
          loading: { type: Boolean, default: !1 },
          width: { type: Number, default: null },
          xSmall: { type: Boolean, default: !1 },
          small: { type: Boolean, default: !1 },
          large: { type: Boolean, default: !1 },
          xLarge: { type: Boolean, default: !1 },
        },
        setup: function (e) {
          var t = Object(g["a"])(function () {
              var t = {
                "--_v-button-color": U(e.color),
                "--_v-button-background-color": U(e.backgroundColor),
                "--_v-button-hover-color": U(e.hoverColor),
                "--_v-button-hover-background-color": U(e.hoverBackgroundColor),
              };
              return e.width && +e.width > 0 && (t.width = e.width + "px"), t;
            }),
            n = Object(g["a"])(function () {
              return e.xSmall
                ? "x-small"
                : e.small
                ? "small"
                : e.large
                ? "large"
                : e.xLarge
                ? "x-large"
                : null;
            });
          return { styles: t, sizeClass: n };
        },
      }),
      W = J,
      G = (n("3662"), Object(j["a"])(W, z, H, !1, null, "25a09720", null)),
      Y = G.exports,
      Z = Y,
      Q = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          e.element,
          {
            tag: "component",
            staticClass: "v-card",
            class: {
              link: e.link,
              selected: e.selected,
              selectable: e.selectable,
              "selection-mode": e.selectionMode,
              disabled: e.disabled,
              "text-background": e.textBackground,
            },
            on: {
              click: function (t) {
                return e.$emit("click", t);
              },
            },
          },
          [
            n(
              e.wrapperTag,
              {
                tag: "component",
                class: { "only-show-on-hover": e.onlyShowOnHover },
                attrs: { to: e.to, href: e.href, target: "__blank" },
              },
              [
                e.src || e.icon || e.$slots.icon
                  ? n(
                      "div",
                      {
                        staticClass: "header",
                        class: {
                          "big-image": e.bigImage && e.src && !e.error,
                          "medium-image": e.mediumImage && e.src && !e.error,
                        },
                        style: { backgroundColor: "var(--" + e.color + ")" },
                      },
                      [
                        e.selectable
                          ? n(
                              "button",
                              {
                                staticClass: "select",
                                attrs: { type: "button" },
                                on: {
                                  click: function (t) {
                                    return (
                                      t.stopPropagation(), e.$emit("select")
                                    );
                                  },
                                },
                              },
                              [
                                n("v-icon", {
                                  attrs: { name: e.selectionIcon },
                                }),
                              ],
                              1
                            )
                          : e._e(),
                        e.src && !e.error
                          ? n("img", {
                              attrs: { alt: e.title, src: e.src },
                              on: { error: e.onImageError },
                            })
                          : e._e(),
                        e.error
                          ? n("v-icon", {
                              staticClass: "error icon",
                              attrs: {
                                name: "broken_image",
                                "x-large": "",
                                color: "white",
                              },
                            })
                          : e._e(),
                        e.icon
                          ? n("v-icon", {
                              staticClass: "icon",
                              class: { "half-opacity": "half" === e.opacity },
                              attrs: {
                                name: e.icon,
                                "x-large": "",
                                color: "white",
                              },
                            })
                          : e._e(),
                        e.$slots.icon
                          ? n(
                              "div",
                              { staticClass: "custom-icon" },
                              [e._t("icon")],
                              2
                            )
                          : e._e(),
                        e.label
                          ? n("span", { staticClass: "label" }, [
                              e._v(e._s(e.label)),
                            ])
                          : e._e(),
                      ],
                      1
                    )
                  : n(
                      "div",
                      {
                        staticClass: "header small",
                        style: { backgroundColor: "var(--" + e.color + ")" },
                      },
                      [
                        e.selectable
                          ? n(
                              "button",
                              {
                                staticClass: "select",
                                attrs: { type: "button" },
                                on: {
                                  click: function (t) {
                                    return (
                                      t.stopPropagation(), e.$emit("select")
                                    );
                                  },
                                },
                              },
                              [
                                n("v-icon", {
                                  attrs: { name: e.selectionIcon },
                                }),
                              ],
                              1
                            )
                          : e._e(),
                      ]
                    ),
                n(
                  "div",
                  { staticClass: "body", class: { menu: null != e.options } },
                  [
                    n(
                      "div",
                      { staticClass: "main" },
                      [
                        e.$slots.title
                          ? n(
                              "div",
                              { staticClass: "title" },
                              [e._t("title")],
                              2
                            )
                          : n(
                              e.titleElement,
                              {
                                directives: [
                                  {
                                    name: "tooltip",
                                    rawName: "v-tooltip",
                                    value: e.title,
                                    expression: "title",
                                  },
                                ],
                                tag: "component",
                                staticClass: "title",
                              },
                              [e._v(" " + e._s(e.title) + " ")]
                            ),
                        e.$slots.subtitle
                          ? n(
                              "div",
                              { staticClass: "subtitle type-note" },
                              [e._t("subtitle")],
                              2
                            )
                          : e.subtitle
                          ? n("p", { staticClass: "subtitle type-note" }, [
                              e._v(" " + e._s(e.subtitle) + " "),
                            ])
                          : e._e(),
                      ],
                      1
                    ),
                    e.options
                      ? n("v-contextual-menu", {
                          staticClass: "context",
                          attrs: { disabled: e.disabled, options: e.options },
                          on: {
                            click: function (t) {
                              return e.$emit(t);
                            },
                          },
                        })
                      : e._e(),
                  ],
                  1
                ),
              ]
            ),
          ],
          1
        );
      },
      X = [],
      ee =
        (n("caad"),
        {
          name: "VCard",
          props: {
            element: { type: String, default: "article" },
            titleElement: { type: String, default: "h2" },
            icon: { type: String, default: null },
            color: { type: String, default: "card-background-color" },
            textBackground: { type: Boolean, default: !1 },
            src: { type: String, default: null },
            title: { type: String, default: null },
            subtitle: { type: String, default: null },
            to: { type: String, default: null },
            href: { type: String, default: null },
            label: { type: String, default: null },
            opacity: {
              type: String,
              default: "full",
              validator: function (e) {
                return ["full", "half"].includes(e);
              },
            },
            selected: { type: Boolean, default: null },
            selectionMode: { type: Boolean, default: !1 },
            options: { type: Object, default: null },
            disabled: { type: Boolean, default: !1 },
            bigImage: { type: Boolean, default: !1 },
            mediumImage: { type: Boolean, default: !1 },
            onlyShowOnHover: { type: Boolean, default: !1 },
          },
          data: function () {
            return { error: null };
          },
          computed: {
            wrapperTag: function () {
              return this.to ? "router-link" : this.href ? "a" : "div";
            },
            link: function () {
              return !(!this.to && !this.href);
            },
            selectable: function () {
              return null !== this.selected;
            },
            selectionIcon: function () {
              return this.selected
                ? "check_circle"
                : this.selectionMode && !this.selected
                ? "radio_button_unchecked"
                : "check_circle";
            },
          },
          watch: {
            src: function () {
              this.error = null;
            },
          },
          methods: {
            onImageError: function (e) {
              this.error = e;
            },
          },
        }),
      te = ee,
      ne = (n("9ea0"), Object(j["a"])(te, Q, X, !1, null, "9b494cf0", null)),
      ae = ne.exports,
      oe = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "button",
          {
            staticClass: "v-checkbox",
            attrs: {
              type: "button",
              role: "checkbox",
              "aria-pressed": e.isChecked ? "true" : "false",
              disabled: e.disabled,
            },
            on: { click: e.toggleInput },
          },
          [
            n("v-icon", { attrs: { name: e.icon, color: e.iconColor } }),
            n(
              "span",
              { staticClass: "label" },
              [e._t("label", [e._v(e._s(e.label))])],
              2
            ),
          ],
          1
        );
      },
      ie = [],
      re = (n("c975"), n("a434"), n("2532"), n("2909")),
      se = Object(g["b"])({
        model: { prop: "inputValue", event: "change" },
        props: {
          value: { type: String, default: null },
          inputValue: { type: [Boolean, Array], default: !1 },
          label: { type: String, default: null },
          color: { type: String, default: "--input-background-color-active" },
          disabled: { type: Boolean, default: !1 },
          indeterminate: { type: Boolean, default: !1 },
        },
        setup: function (e, t) {
          var n = t.emit,
            a = Object(g["a"])(function () {
              return e.inputValue instanceof Array
                ? e.inputValue.includes(e.value)
                : !0 === e.inputValue;
            }),
            o = Object(g["a"])(function () {
              return e.indeterminate
                ? "indeterminate_check_box"
                : a.value
                ? "check_box"
                : "check_box_outline_blank";
            }),
            i = Object(g["a"])(function () {
              return e.disabled
                ? "--input-background-color-disabled"
                : a.value
                ? e.color
                : "--input-border-color";
            });
          return { isChecked: a, toggleInput: r, icon: o, iconColor: i };
          function r() {
            if (
              (e.indeterminate && n("update:indeterminate", !1),
              e.inputValue instanceof Array)
            ) {
              var t = Object(re["a"])(e.inputValue);
              !1 === a.value
                ? t.push(e.value)
                : t.splice(t.indexOf(e.value), 1),
                n("change", t);
            } else n("change", !a.value);
          }
        },
      }),
      ce = se,
      le = (n("413e"), Object(j["a"])(ce, oe, ie, !1, null, "662f2ceb", null)),
      ue = le.exports,
      de = ue,
      fe = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "v-modal-base",
          {
            attrs: { title: e.title, message: e.message },
            on: {
              cancel: function (t) {
                return e.$emit("cancel");
              },
            },
          },
          [
            n(
              "div",
              {
                staticClass: "buttons",
                on: {
                  keydown: function (t) {
                    return !t.type.indexOf("key") &&
                      e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"])
                      ? null
                      : e.$emit("cancel");
                  },
                },
              },
              [
                n(
                  "v-button",
                  {
                    staticClass: "cancel",
                    attrs: {
                      outlined: "",
                      "background-color": "--button-tertiary-background-color",
                      "hover-background-color":
                        "--button-tertiary-background-color",
                      color: "--button-tertiary-text-color",
                      "hover-color": "--button-tertiary-text-color-hover",
                    },
                    on: {
                      click: function (t) {
                        return e.$emit("cancel");
                      },
                    },
                  },
                  [e._v(" " + e._s(e.cancelText || e.$t("cancel")) + " ")]
                ),
                n(
                  "v-button",
                  {
                    staticClass: "confirm",
                    attrs: {
                      "background-color": "--" + e.color,
                      "hover-background-color": "--" + e.color,
                    },
                    on: {
                      click: function (t) {
                        return e.$emit("confirm");
                      },
                    },
                  },
                  [
                    e.loading
                      ? [
                          n("v-spinner", {
                            attrs: { size: 20, "line-size": 2 },
                          }),
                        ]
                      : [e._v(" " + e._s(e.confirmText || e.$t("ok")) + " ")],
                  ],
                  2
                ),
              ],
              1
            ),
          ]
        );
      },
      me = [],
      pe = {
        name: "VConfirm",
        components: { VModalBase: I },
        props: {
          title: { type: String, required: !1 },
          message: { type: String, required: !0 },
          confirmText: { type: String, default: null },
          cancelText: { type: String, default: null },
          loading: { type: Boolean, default: !1 },
          color: { type: String, default: "action" },
        },
      },
      he = pe,
      ge = (n("3f4f"), Object(j["a"])(he, fe, me, !1, null, "4bbe943f", null)),
      ye = ge.exports,
      ve = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "v-popover",
          {
            attrs: {
              placement: e.placement,
              offset: "2",
              trigger: e.trigger,
              disabled: e.disabled,
            },
          },
          [
            n(
              "div",
              { staticClass: "menu-toggle", class: { disabled: e.disabled } },
              [
                e._v(" " + e._s(e.text) + " "),
                e.icon ? n("v-icon", { attrs: { name: e.icon } }) : e._e(),
                e._t("default"),
              ],
              2
            ),
            null !== e.options
              ? n("template", { slot: "popover" }, [
                  n(
                    "ul",
                    { staticClass: "ctx-menu" },
                    e._l(e.options, function (t, a) {
                      return n("li", { key: a }, [
                        n(
                          "button",
                          {
                            directives: [
                              {
                                name: "close-popover",
                                rawName: "v-close-popover",
                              },
                            ],
                            class: { disabled: t.disabled },
                            attrs: { type: "button", disabled: t.disabled },
                            on: {
                              click: function (n) {
                                return (
                                  n.stopPropagation(), e.optionClicked(t, a)
                                );
                              },
                            },
                          },
                          [
                            t.icon
                              ? n("v-icon", { attrs: { name: t.icon } })
                              : e._e(),
                            e._v(" " + e._s(t.text) + " "),
                          ],
                          1
                        ),
                      ]);
                    }),
                    0
                  ),
                ])
              : e._e(),
          ],
          2
        );
      },
      be = [],
      _e = {
        name: "VContextualMenu",
        props: {
          text: { type: String, default: "" },
          icon: { type: String, default: "more_vert" },
          options: { type: [Array, Object], default: null },
          trigger: { type: String, default: "click" },
          placement: { type: String, default: "left-start" },
          disabled: { type: Boolean, default: !1 },
        },
        computed: {
          body: function () {
            return document.body;
          },
        },
        methods: {
          optionClicked: function (e, t) {
            e.disabled || this.$emit("click", t);
          },
        },
      },
      je = _e,
      ke =
        (n("fea0"),
        n("740b"),
        Object(j["a"])(je, ve, be, !1, null, "ac91b45a", null)),
      we = ke.exports,
      Oe = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "details",
          { staticClass: "v-details", class: e.type, attrs: { open: e.open } },
          [
            n("summary", [e._v(e._s(e.title))]),
            n("div", { staticClass: "content" }, [e._t("default")], 2),
          ]
        );
      },
      $e = [],
      xe = {
        name: "VDetails",
        props: {
          title: { type: String, default: null },
          open: { type: [Boolean, Number], default: !1 },
          type: {
            type: String,
            default: "group",
            validator: function (e) {
              return ["group", "break"].includes(e);
            },
          },
        },
      },
      Se = xe,
      Ce = (n("9714"), Object(j["a"])(Se, Oe, $e, !1, null, "17b75c10", null)),
      Ee = Ce.exports,
      Pe = n("c359"),
      Te = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(e.componentName, {
          tag: "component",
          staticClass: "v-ext-display",
          attrs: {
            id: e.name,
            name: e.name,
            value: e.value,
            type: e.type,
            length: e.length,
            values: e.values,
            collection: e.collection,
            relation: e.relation,
            readonly: e.readonly,
            required: e.required,
            loading: e.loading,
            options: e.optionsWithDefaults,
          },
        });
      },
      Ie = [],
      Ne =
        (n("a4d3"),
        n("99af"),
        n("4de4"),
        n("4160"),
        n("e439"),
        n("dbb4"),
        n("b64b"),
        n("d3b7"),
        n("ac1f"),
        n("5319"),
        n("159b"),
        n("ade3"));
    n("fb6a");
    function Ae(e) {
      return new Promise(function (t, n) {
        var a = document.createElement("script"),
          o = document.createElement("link");
        function i() {
          a.remove(), (window.__DirectusExtension__ = null);
        }
        function r() {
          var e = window.__DirectusExtension__;
          t(e), i();
        }
        function s(e) {
          n(e), i();
        }
        (o.rel = "stylesheet"),
          (o.href = e.slice(0, -2) + "css"),
          (o.onerror = function () {
            this.remove();
          }),
          (a.onload = r),
          (a.onerror = s),
          (a.src = e),
          document.body.appendChild(a),
          document.body.appendChild(o);
      });
    }
    function Re(e) {
      return (
        a["default"].options.components[e] &&
        Object.keys(a["default"].options.components[e]).length > 0
      );
    }
    var De = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "v-ext-display-fallback" }, [
          e._v(e._s(e.value)),
        ]);
      },
      Le = [],
      Fe = {
        name: "VExtDisplayFallback",
        props: { value: { type: null, default: "" } },
      },
      Ue = Fe,
      Be = Object(j["a"])(Ue, De, Le, !1, null, null, null),
      Ke = Be.exports,
      Me = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("v-spinner", {
          attrs: { size: 20, color: "--input-border-color-hover" },
        });
      },
      Ve = [],
      qe = { name: "VExtDisplayLoading" },
      ze = qe,
      He = Object(j["a"])(ze, Me, Ve, !1, null, null, null),
      Je = He.exports,
      We = n("cde4");
    function Ge(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function Ye(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ge(Object(n), !0).forEach(function (t) {
              Object(Ne["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Ge(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var Ze = {
        name: "VExtDisplay",
        components: { VExtDisplayFallback: Ke },
        props: {
          interfaceType: { type: String, default: "text-input" },
          name: { type: String, required: !0 },
          value: { type: null, default: null },
          type: { type: String, default: null },
          datatype: { type: String, default: null },
          length: { type: [String, Number], default: null },
          values: { type: Object, default: null },
          collection: { type: String, default: null },
          readonly: { type: Boolean, default: !1 },
          relation: { type: Object, default: null },
          required: { type: Boolean, default: !1 },
          loading: { type: Boolean, default: !1 },
          options: {
            type: Object,
            default: function () {
              return {};
            },
          },
        },
        computed: {
          interfaces: function () {
            return this.$store.state.extensions.interfaces;
          },
          interfaceInfo: function () {
            return null === this.interfaceType
              ? this.interfaceFallback
              : this.interfaces && this.interfaces[this.interfaceType];
          },
          componentName: function () {
            return null === this.interfaceType
              ? this.componentNameFallback
              : "display-".concat(this.interfaceType);
          },
          componentNameFallback: function () {
            return "display-".concat(this.interfaceFallback.id);
          },
          databaseVendor: function () {
            return this.$store.state.serverInfo.databaseVendor;
          },
          interfaceFallback: function () {
            if (null == this.datatype) return this.interfaces["text-input"];
            var e =
              We["a"][this.databaseVendor][this.datatype].fallbackInterface;
            return this.interfaces[e];
          },
          optionsWithDefaults: function () {
            if (!this.interfaceInfo) return {};
            var e = Object(o["mapValues"])(
              this.interfaceInfo.options,
              function (e) {
                return e.default || null;
              }
            );
            return Ye({}, e, {}, this.options);
          },
        },
        watch: {
          id: function () {
            this.registerDisplay();
          },
        },
        created: function () {
          this.registerDisplay();
        },
        methods: {
          registerDisplay: function () {
            if (!Re(this.componentName)) {
              var e;
              if (this.interfaceInfo)
                if (this.interfaceInfo.core)
                  e = n("c00f")("./" + this.interfaceInfo.id + "/display.vue");
                else {
                  var t = ""
                    .concat(this.$store.state.apiRootPath)
                    .concat(
                      this.interfaceInfo.path.replace("meta.json", "display.js")
                    );
                  e = Ae(t);
                }
              else e = Ke;
              a["default"].component(this.componentName, function () {
                return { component: e, error: Ke, loading: Je };
              });
            }
          },
        },
      },
      Qe = Ze,
      Xe = Object(j["a"])(Qe, Te, Ie, !1, null, null, null),
      et = Xe.exports,
      tt = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          e.componentName,
          {
            tag: "component",
            staticClass: "v-ext-input selectable",
            attrs: {
              id: e.currentInterface.id,
              name: e.name,
              "input-name": e.id,
              value: e.value,
              type: e.typeOrDefault,
              length: e.length,
              readonly: e.readonly,
              required: e.required,
              loading: e.loading,
              options: e.optionsWithDefaults,
              "new-item": e.newItem,
              relation: e.relation,
              fields: e.fieldsFormatted,
              collection: e.collection,
              "primary-key": e.primaryKey,
              values: e.values,
              width: e.width,
            },
            on: {
              input: function (t) {
                return e.$emit("input", t);
              },
              setfield: function (t) {
                return e.$emit("setfield", t);
              },
            },
          },
          [e._t("default")],
          2
        );
      },
      nt = [],
      at = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("v-input", {
          staticClass: "v-ext-input-fallback",
          attrs: { value: e.value },
          on: {
            input: function (t) {
              return e.$emit("input", t);
            },
          },
        });
      },
      ot = [],
      it =
        (n("b0c0"),
        {
          name: "VExtInputFallback",
          props: {
            value: { type: null, default: "" },
            inputName: { type: String, default: "" },
            name: { type: String, default: "" },
          },
          created: function () {
            null == this.inputName
              ? this.$notify({
                  title: this.$t("no_interface_error", {
                    field: this.$helpers.formatTitle(this.name),
                  }),
                  color: "red",
                  iconMain: "error",
                })
              : this.$notify({
                  title: this.$t("extension_error", { ext: this.inputName }),
                  color: "red",
                  iconMain: "error",
                });
          },
        }),
      rt = it,
      st = (n("44e5"), Object(j["a"])(rt, at, ot, !1, null, "233e6d74", null)),
      ct = st.exports,
      lt = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("v-spinner", {
          attrs: { size: 20, color: "--blue-grey-200" },
        });
      },
      ut = [],
      dt = { name: "VExtInputLoading" },
      ft = dt,
      mt = Object(j["a"])(ft, lt, ut, !1, null, null, null),
      pt = mt.exports;
    function ht(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function gt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ht(Object(n), !0).forEach(function (t) {
              Object(Ne["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ht(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var yt = {
        name: "VExtInput",
        props: {
          id: { type: String, default: null },
          name: { type: String, required: !0 },
          value: { type: null, default: null },
          type: { type: String, default: null },
          collection: { type: String, default: null },
          primaryKey: { type: [Number, String], default: null },
          datatype: { type: String, default: null },
          length: { type: [String, Number], default: null },
          readonly: { type: Boolean, default: !1 },
          required: { type: Boolean, default: !1 },
          loading: { type: Boolean, default: !1 },
          options: {
            type: [Object, Array],
            default: function () {
              return {};
            },
          },
          newItem: { type: Boolean, default: !1 },
          relation: { type: Object, default: null },
          fields: { type: [Array, Object], default: null },
          values: { type: Object, default: null },
          width: {
            type: String,
            default: null,
            validator: function (e) {
              return [
                "half",
                "half-left",
                "half-right",
                "full",
                "fill",
              ].includes(e);
            },
          },
        },
        computed: {
          interfaces: function () {
            return this.$store.state.extensions.interfaces;
          },
          currentInterface: function () {
            return null === this.id
              ? this.interfaceFallback
              : void 0 === this.interfaces[this.id]
              ? this.interfaceFallback
              : this.interfaces && this.interfaces[this.id];
          },
          databaseVendor: function () {
            return this.$store.state.serverInfo.databaseVendor;
          },
          componentName: function () {
            return null === this.id
              ? this.componentNameFallback
              : "input-".concat(this.id);
          },
          typeOrDefault: function () {
            return this.currentInterface
              ? this.type
                ? this.type
                : this.currentInterface && this.currentInterface.types[0]
              : null;
          },
          optionsWithDefaults: function () {
            if (!this.currentInterface) return {};
            if (Array.isArray(this.options)) return {};
            var e = Object(o["mapValues"])(
              this.currentInterface.options,
              function (e) {
                return e.default || null;
              }
            );
            return gt({}, e, {}, this.options);
          },
          fieldsFormatted: function () {
            return Array.isArray(this.fields)
              ? Object(o["keyBy"])(this.fields, "field")
              : this.fields;
          },
          componentNameFallback: function () {
            return "input-".concat(this.interfaceFallback.id);
          },
          interfaceFallback: function () {
            if (null == this.datatype) return this.interfaces["text-input"];
            var e =
              We["a"][this.databaseVendor][this.datatype].fallbackInterface;
            return this.interfaces[e];
          },
        },
        watch: {
          id: function () {
            this.registerInterface();
          },
        },
        created: function () {
          this.registerInterface();
        },
        methods: {
          registerInterface: function () {
            if (!Re(this.componentName)) {
              var e;
              if (this.currentInterface.core)
                e = n("9e19")("./" + this.currentInterface.id + "/input.vue");
              else {
                var t = ""
                  .concat(this.$store.state.apiRootPath)
                  .concat(
                    this.currentInterface.path.replace("meta.json", "input.js")
                  );
                e = Ae(t);
              }
              a["default"].component(this.componentName, function () {
                return { component: e, error: ct, loading: pt };
              });
            }
          },
        },
      },
      vt = yt,
      bt = Object(j["a"])(vt, tt, nt, !1, null, null, null),
      _t = bt.exports,
      jt = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(e.componentName, {
          tag: "component",
          staticClass: "v-layout",
          attrs: {
            "layout-name": e.viewType,
            "primary-key-field": e.primaryKeyField,
            fields: e.fields,
            items: e.items,
            collection: e.collection,
            "view-options": e.viewOptions,
            "view-query": e.viewQuery,
            loading: e.loading,
            "lazy-loading": e.lazyLoading,
            selection: e.selection,
            link: e.link,
            "sort-field": e.sortField,
          },
          on: {
            query: function (t) {
              return e.$emit("query", t);
            },
            select: function (t) {
              return e.$emit("select", t);
            },
            options: function (t) {
              return e.$emit("options", t);
            },
            "next-page": function (t) {
              return e.$emit("next-page", t);
            },
            input: function (t) {
              return e.$emit("input", t);
            },
          },
        });
      },
      kt = [],
      wt = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.items && e.columns && e.primaryKeyField
          ? n("v-table", {
              staticClass: "v-ext-layout-fallback",
              attrs: {
                items: e.items,
                columns: e.columns,
                "primary-key-field": e.primaryKeyField,
                "use-interfaces": !0,
                link: "__link__",
              },
            })
          : e._e();
      },
      Ot = [],
      $t =
        (n("d81d"),
        n("07ac"),
        {
          name: "VExtLayoutFallback",
          props: {
            fields: { type: Object, required: !0 },
            items: { type: Array, required: !0 },
            primaryKeyField: { type: String, required: !0 },
            layoutName: { type: String, default: "" },
          },
          computed: {
            columns: function () {
              return Object.values(this.fields).map(function (e) {
                return { field: e.field, name: e.name, fieldInfo: e };
              });
            },
          },
          created: function () {
            this.$notify({
              title: this.$t("extension_error", { ext: this.layoutName }),
              color: "red",
              iconMain: "error",
            });
          },
        }),
      xt = $t,
      St = Object(j["a"])(xt, wt, Ot, !1, null, null, null),
      Ct = St.exports,
      Et = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "v-layout-loading" },
          [
            n("v-spinner", {
              staticClass: "spinner",
              attrs: {
                color: "--blue-grey-300",
                "background-color": "--blue-grey-200",
              },
            }),
          ],
          1
        );
      },
      Pt = [],
      Tt = { name: "VLayoutLoading" },
      It = Tt,
      Nt = Object(j["a"])(It, Et, Pt, !1, null, null, null),
      At = Nt.exports,
      Rt = {
        name: "VLayout",
        props: {
          fields: { type: Object, required: !0 },
          items: { type: Array, required: !0 },
          viewType: { type: String, required: !0 },
          viewOptions: {
            type: Object,
            default: function () {
              return {};
            },
          },
          viewQuery: {
            type: Object,
            default: function () {
              return {};
            },
          },
          selection: {
            type: Array,
            default: function () {
              return [];
            },
          },
          loading: { type: Boolean, default: !1 },
          lazyLoading: { type: Boolean, default: !1 },
          link: { type: String, default: null },
          collection: { type: String, default: null },
          sortField: { type: String, default: null },
        },
        computed: {
          layouts: function () {
            return this.$store.state.extensions.layouts;
          },
          layout: function () {
            return this.layouts && this.layouts[this.viewType];
          },
          componentName: function () {
            return "layout-".concat(this.viewType);
          },
          primaryKeyField: function () {
            var e = Object(o["filter"])(this.fields, function (e) {
              return !0 === e.primary_key;
            })[0];
            return e && e.field;
          },
        },
        watch: {
          viewType: function () {
            this.registerLayout();
          },
        },
        created: function () {
          this.registerLayout();
        },
        methods: {
          registerLayout: function () {
            if (!Re(this.componentName))
              if (this.layout) {
                var e;
                if (this.layout.core)
                  e = n("df88")("./" + this.layout.id + "/layout.vue");
                else {
                  var t = ""
                    .concat(this.$store.state.apiRootPath)
                    .concat(this.layout.path.replace("meta.json", "layout.js"));
                  e = Ae(t);
                }
                a["default"].component(this.componentName, function () {
                  return { component: e, error: Ct, loading: At };
                });
              } else a["default"].component(this.componentName, Ct);
          },
        },
      },
      Dt = Rt,
      Lt = Object(j["a"])(Dt, jt, kt, !1, null, null, null),
      Ft = Lt.exports,
      Ut = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(e.componentName, {
          tag: "component",
          staticClass: "v-ext-layout-options",
          attrs: {
            "primary-key-field": e.primaryKeyField,
            fields: e.fields,
            "view-options": e.viewOptions,
            loading: e.loading,
            "view-query": e.viewQuery,
            selection: e.selection,
            "layout-name": e.type,
          },
          on: {
            query: function (t) {
              return e.$emit("query", t);
            },
            select: function (t) {
              return e.$emit("select", t);
            },
            options: function (t) {
              return e.$emit("options", t);
            },
          },
        });
      },
      Bt = [],
      Kt = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "v-ext-layout-options-fallback" });
      },
      Mt = [],
      Vt = {
        name: "VExtLayoutOptionsFallback",
        props: { layoutName: { type: String, default: "" } },
        created: function () {
          this.$notify({
            title: this.$t("extension_error", { ext: this.layoutName }),
            color: "red",
            iconMain: "error",
          });
        },
      },
      qt = Vt,
      zt = Object(j["a"])(qt, Kt, Mt, !1, null, null, null),
      Ht = zt.exports,
      Jt = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "v-listing-options-loading" });
      },
      Wt = [],
      Gt = { name: "VListingOptionsLoading" },
      Yt = Gt,
      Zt = Object(j["a"])(Yt, Jt, Wt, !1, null, null, null),
      Qt = Zt.exports,
      Xt = {
        name: "VExtLayoutOptions",
        props: {
          type: { type: String, required: !0 },
          fields: { type: Object, required: !0 },
          viewOptions: {
            type: Object,
            default: function () {
              return {};
            },
          },
          loading: { type: Boolean, default: !1 },
          viewQuery: {
            type: Object,
            default: function () {
              return {};
            },
          },
          selection: {
            type: Array,
            default: function () {
              return [];
            },
          },
          primaryKeyField: { type: String, required: !0 },
        },
        computed: {
          layouts: function () {
            return this.$store.state.extensions.layouts;
          },
          layout: function () {
            return this.layouts && this.layouts[this.type];
          },
          componentName: function () {
            return "layout-options-".concat(this.type);
          },
        },
        watch: {
          type: function () {
            this.registerLayoutOptions();
          },
        },
        created: function () {
          this.registerLayoutOptions();
        },
        methods: {
          registerLayoutOptions: function () {
            if (!Re(this.componentName))
              if (this.layout) {
                var e;
                if (this.layout.core)
                  e = n("8e99")("./" + this.layout.id + "/options.vue");
                else {
                  var t = ""
                    .concat(this.$store.state.apiRootPath)
                    .concat(
                      this.layout.path.replace("meta.json", "options.js")
                    );
                  e = Ae(t);
                }
                a["default"].component(this.componentName, function () {
                  return { component: e, error: Ht, loading: Qt };
                });
              } else a["default"].component(this.componentName, Ht);
          },
        },
      },
      en = Xt,
      tn = Object(j["a"])(en, Ut, Bt, !1, null, null, null),
      nn = tn.exports,
      an = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(e.componentName, { tag: "component" }, [e._t("default")], 2);
      },
      on = [],
      rn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div");
      },
      sn = [],
      cn = {
        name: "VExtPageFallback",
        created: function () {
          this.$notify({
            title: this.$t("extension_error", { ext: this.interfaceName }),
            color: "red",
            iconMain: "error",
          });
        },
      },
      ln = cn,
      un = Object(j["a"])(ln, rn, sn, !1, null, null, null),
      dn = un.exports,
      fn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "page-loading" }, [e._v("LOADING")]);
      },
      mn = [],
      pn = { name: "PageLoading" },
      hn = pn,
      gn = Object(j["a"])(hn, fn, mn, !1, null, null, null),
      yn = gn.exports,
      vn = {
        name: "VExtmodule",
        props: { id: { type: String, required: !0 } },
        computed: {
          modules: function () {
            return this.$store.state.extensions.modules;
          },
          module: function () {
            return this.modules && this.modules[this.id];
          },
          componentName: function () {
            return "module-".concat(this.id);
          },
        },
        watch: {
          id: function () {
            this.registerModule();
          },
        },
        created: function () {
          this.registerModule();
        },
        methods: {
          registerModule: function () {
            if (!Re(this.componentName))
              if (this.module) {
                var e;
                if (this.module.core)
                  e = n("24b0")("./" + this.module.id + "input.vue");
                else {
                  var t = ""
                    .concat(this.$store.state.apiRootPath)
                    .concat(this.module.path.replace("meta.json", "module.js"));
                  e = Ae(t);
                }
                a["default"].component(this.componentName, function () {
                  return { component: e, error: dn, loading: yn };
                });
              } else a["default"].component(this.componentName, dn);
          },
        },
      },
      bn = vn,
      _n = Object(j["a"])(bn, an, on, !1, null, null, null),
      jn = _n.exports,
      kn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "form", class: { "full-width": e.fullWidth } },
          e._l(e.filteredFields, function (t) {
            return n("v-field", {
              key: e.uniqueID + "-" + t.field,
              attrs: {
                width: t.width || "full",
                name: e.uniqueID + "-" + t.field,
                field: t,
                fields: e.fieldsFormatted,
                values: e.values,
                collection: e.collection,
                "primary-key": e.primaryKey,
                blocked: e.batchMode && !e.activeFields.includes(t.field),
                "batch-mode": e.batchMode,
                "new-item": e.newItem,
              },
              on: {
                activate: e.activateField,
                deactivate: e.deactivateField,
                "stage-value": function (t) {
                  return e.$emit("stage-value", t);
                },
              },
            });
          }),
          1
        );
      },
      wn = [],
      On = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            class: e.width,
            attrs: {
              "data-collection": e.collection,
              "data-field": e.field.field,
            },
          },
          [
            e.showLabel
              ? n(
                  "div",
                  { staticClass: "type-label" },
                  [
                    !1 === e.field.readonly && !1 === e.batchMode
                      ? n(
                          "v-contextual-menu",
                          {
                            staticClass: "field-action",
                            attrs: {
                              placement: "bottom-start",
                              options: e.options,
                              icon: null,
                            },
                            on: { click: e.emitChange },
                          },
                          [
                            n("span", { staticClass: "field-label" }, [
                              e._v(
                                " " +
                                  e._s(
                                    e.$helpers.formatField(
                                      e.field.field,
                                      e.field.collection
                                    )
                                  ) +
                                  " "
                              ),
                            ]),
                            !0 === e.field.required
                              ? n("v-icon", {
                                  staticClass: "required",
                                  attrs: {
                                    name: "star",
                                    color: "--input-required-color",
                                    sup: "",
                                  },
                                })
                              : e._e(),
                            n("v-icon", {
                              staticClass: "dropdown",
                              attrs: {
                                name: "arrow_drop_down",
                                "icon-style": "outline",
                                small: "",
                              },
                            }),
                          ],
                          1
                        )
                      : n(
                          "span",
                          { staticClass: "field-static" },
                          [
                            n("span", { staticClass: "field-label" }, [
                              e._v(
                                " " +
                                  e._s(
                                    e.$helpers.formatField(
                                      e.field.field,
                                      e.field.collection
                                    )
                                  ) +
                                  " "
                              ),
                            ]),
                            !0 === e.field.required
                              ? n("v-icon", {
                                  staticClass: "required",
                                  attrs: {
                                    name: "star",
                                    color: "--blue-grey-200",
                                    sup: "",
                                  },
                                })
                              : e._e(),
                          ],
                          1
                        ),
                    e.batchMode
                      ? n("v-switch", {
                          directives: [
                            {
                              name: "tooltip",
                              rawName: "v-tooltip",
                              value: e.$t("batch_edit_field"),
                              expression: "$t('batch_edit_field')",
                            },
                          ],
                          staticClass: "batch-toggle",
                          attrs: { inputValue: !e.blocked },
                          on: {
                            change: function (t) {
                              return e.$emit(
                                e.blocked ? "activate" : "deactivate",
                                e.field.field
                              );
                            },
                          },
                        })
                      : e._e(),
                  ],
                  1
                )
              : e._e(),
            n(
              "div",
              { staticClass: "field" },
              [
                n("v-ext-input", {
                  attrs: {
                    id: e.field.interface || "text-input",
                    name: e.name,
                    required: e.field.required,
                    readonly: e.field.readonly || e.blocked,
                    options: e.field.options,
                    type: e.field.type,
                    datatype: e.field.datatype,
                    value: e.value,
                    relation: e.relation,
                    fields: e.fields,
                    collection: e.collection,
                    "primary-key": e.primaryKey,
                    values: e.values,
                    length: e.field.length,
                    "new-item": e.newItem,
                    width: e.width,
                  },
                  on: {
                    input: function (t) {
                      return e.$emit("stage-value", {
                        field: e.field.field,
                        value: t,
                      });
                    },
                    setfield: function (t) {
                      return e.$emit("stage-value", {
                        field: t.field,
                        value: t.value,
                      });
                    },
                  },
                }),
              ],
              1
            ),
            e.field.note
              ? n("div", {
                  staticClass: "type-note",
                  domProps: {
                    innerHTML: e._s(e.$helpers.snarkdown(e.field.note)),
                  },
                })
              : e._e(),
          ]
        );
      },
      $n = [],
      xn =
        (n("ddb0"),
        {
          name: "VField",
          props: {
            name: { type: String, required: !0 },
            field: { type: Object, required: !0 },
            fields: { type: Object, required: !0 },
            values: { type: Object, required: !0 },
            collection: { type: String, default: null },
            primaryKey: { type: [String, Number], default: null },
            blocked: { type: Boolean, default: !1 },
            batchMode: { type: Boolean, default: !1 },
            newItem: { type: Boolean, default: !1 },
            width: {
              type: String,
              default: null,
              validator: function (e) {
                return [
                  "half",
                  "half-left",
                  "half-right",
                  "full",
                  "fill",
                ].includes(e);
              },
            },
          },
          data: function () {
            return { initialValue: this.values[this.field.field] };
          },
          computed: {
            showLabel: function () {
              var e = this.field.interface,
                t = this.getInterfaceMeta(e);
              if (!t) return !0;
              var n = t.hideLabel;
              return !0 !== n;
            },
            relation: function () {
              var e = this.field,
                t = e.collection,
                n = e.field,
                a = e.type;
              return "m2o" === a.toLowerCase()
                ? this.$store.getters.m2o(t, n)
                : "o2m" === a.toLowerCase()
                ? this.$store.getters.o2m(t, n)
                : "translation" === a.toLowerCase()
                ? this.$store.getters.o2m(t, n)
                : null;
            },
            isChanged: function () {
              return this.value !== this.initialValue;
            },
            isDefault: function () {
              var e = this.field.default_value;
              return this.value === e;
            },
            value: function () {
              return this.values[this.field.field];
            },
            options: function () {
              return {
                setNull: {
                  text: this.$t("clear_value"),
                  icon: "delete_outline",
                  disabled: null === this.value,
                },
                reset: {
                  text: this.$t("reset_to_default"),
                  icon: "settings_backup_restore",
                  disabled: !0 === this.isDefault,
                },
                clear: {
                  text: this.$t("undo_changes"),
                  icon: "undo",
                  disabled: !1 === this.isChanged,
                },
              };
            },
          },
          methods: {
            getInterfaceMeta: function (e) {
              var t = this.$store.state.extensions.interfaces[e];
              return t || void 0;
            },
            emitChange: function (e) {
              var t;
              switch (e) {
                case "setNull":
                  t = null;
                  break;
                case "clear":
                  t = this.initialValue;
                  break;
                case "reset":
                  t = this.field.default_value;
                  break;
              }
              this.$emit("stage-value", { field: this.field.field, value: t });
            },
          },
        }),
      Sn = xn,
      Cn = (n("70da"), Object(j["a"])(Sn, On, $n, !1, null, "0bb90e19", null)),
      En = Cn.exports,
      Pn = n("37b6"),
      Tn = {
        name: "VForm",
        components: { VField: En },
        props: {
          fields: { type: [Array, Object], required: !0 },
          values: { type: Object, required: !0 },
          collection: { type: String, default: null },
          primaryKey: { type: [Number, String], default: null },
          readonly: { type: Boolean, default: !1 },
          batchMode: { type: Boolean, default: !1 },
          permissions: {
            type: Object,
            default: function () {
              return Pn["a"];
            },
          },
          newItem: { type: Boolean, default: !1 },
          fullWidth: { type: Boolean, default: !1 },
        },
        data: function () {
          return { activeFields: [] };
        },
        computed: {
          uniqueID: function () {
            return this.$helpers.shortid.generate();
          },
          fieldsFormatted: function () {
            return Array.isArray(this.fields)
              ? Object(o["keyBy"])(this.fields, "field")
              : this.fields;
          },
          filteredFields: function () {
            var e = this,
              t = this.permissions.read_field_blacklist || [],
              n = this.permissions.write_field_blacklist || [],
              a = Object.values(Object(o["cloneDeep"])(this.fieldsFormatted));
            return (
              (a = a.filter(function (e) {
                var n = e.field;
                return !1 === t.includes(n);
              })),
              (a = a.filter(function (e) {
                var t = e.hidden_detail;
                return void 0 === t || "0" == t || !1 === t;
              })),
              (a = a.sort(function (e, t) {
                return e.sort == t.sort
                  ? 0
                  : null === e.sort
                  ? 1
                  : null === t.sort
                  ? -1
                  : e.sort > t.sort
                  ? 1
                  : -1;
              })),
              (a = a.map(function (t) {
                var a = t.field;
                return (
                  e.readonly ||
                  !0 === t.readonly ||
                  "1" === t.readonly ||
                  1 === t.readonly ||
                  n.includes(a)
                    ? (t.readonly = !0)
                    : (t.readonly = !1),
                  t
                );
              })),
              (a = a.map(function (e, t) {
                if (0 === t) return e;
                if ("half" === e.width) {
                  var n = a[t - 1];
                  "half" === n.width && (e.width = "half-right");
                }
                return e;
              })),
              a
            );
          },
        },
        methods: {
          activateField: function (e) {
            this.batchMode &&
              (this.activeFields = [].concat(
                Object(re["a"])(this.activeFields),
                [e]
              ));
          },
          deactivateField: function (e) {
            this.batchMode &&
              ((this.activeFields = this.activeFields.filter(function (t) {
                return t !== e;
              })),
              this.$emit("unstage-value", e));
          },
        },
      },
      In = Tn,
      Nn = (n("f478"), Object(j["a"])(In, kn, wn, !1, null, "5d497bde", null)),
      An = Nn.exports,
      Rn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "header",
          { staticClass: "v-header", class: { scrolled: e.scrolled } },
          [
            n(
              "button",
              {
                staticClass: "nav-toggle",
                attrs: { disabled: e.navActive },
                on: { click: e.activateNav },
              },
              [n("v-icon", { attrs: { name: "menu" } })],
              1
            ),
            n("v-header-button", {
              staticClass: "back",
              attrs: {
                icon: e.icon,
                to: e.iconLink,
                "icon-color": e.settings
                  ? "warning"
                  : "button-tertiary-text-color",
                "background-color": e.settings
                  ? "warning-light"
                  : "button-tertiary-background-color",
              },
            }),
            n(
              "div",
              {
                staticClass: "title",
                class: { "has-breadcrumb": e.navBreadcrumb },
              },
              [
                e.navBreadcrumb
                  ? n(
                      "ol",
                      { staticClass: "breadcrumb" },
                      e._l(e.navBreadcrumb, function (t) {
                        var a = t.name,
                          o = t.path;
                        return n(
                          "li",
                          { key: o, staticClass: "breadcrumb-item" },
                          [
                            n("router-link", { attrs: { to: o } }, [
                              e._v(e._s(a)),
                            ]),
                          ],
                          1
                        );
                      }),
                      0
                    )
                  : e._e(),
                n(
                  "div",
                  { staticClass: "flex" },
                  [
                    n("h1", { staticClass: "type-title" }, [
                      e._v(e._s(e.title || e.currentPage.name)),
                    ]),
                    e._t("title"),
                  ],
                  2
                ),
              ]
            ),
            e._t("default"),
            e._t("buttons"),
          ],
          2
        );
      },
      Dn = [],
      Ln = (n("1276"), n("9fb0")),
      Fn = {
        name: "VHeader",
        props: {
          title: { type: String, default: null },
          breadcrumb: { type: Array, default: null },
          infoToggle: { type: Boolean, default: !1 },
          itemDetail: { type: Boolean, default: !1 },
          icon: { type: String, default: "arrow_back" },
          iconLink: { type: String, default: null },
          settings: { type: Boolean, default: !1 },
        },
        data: function () {
          return { scrolled: !1 };
        },
        computed: {
          defaultBreadcrumb: function () {
            var e = this,
              t = this.$route.path.split("/").filter(function (e) {
                return e;
              });
            return t.map(function (n, a) {
              for (var o = "", i = 0; i < a; i++) o += "/".concat(t[i]);
              return (
                (o += "/".concat(n)),
                { name: e.$helpers.formatTitle(n), path: o }
              );
            });
          },
          navActive: function () {
            return this.$store.state.sidebars.nav;
          },
          currentPage: function () {
            var e = this.breadcrumb || this.defaultBreadcrumb;
            return e[e.length - 1];
          },
          navBreadcrumb: function () {
            var e = this.breadcrumb || this.defaultBreadcrumb,
              t = Object(re["a"])(e);
            return this.title || t.pop(), t.length > 0 ? t : null;
          },
        },
        created: function () {
          window.addEventListener("scroll", this.checkIfScrolled);
        },
        beforeDestroy: function () {
          window.removeEventListener("scroll", this.checkIfScrolled);
        },
        methods: {
          activateNav: function () {
            this.$store.commit(Ln["TOGGLE_NAV"], !0);
          },
          toggleInfo: function () {
            this.$store.commit(Ln["TOGGLE_INFO"]);
          },
          checkIfScrolled: function () {
            var e = window.scrollY;
            this.scrolled = e > 0;
          },
        },
      },
      Un = Fn,
      Bn =
        (n("a14e"),
        n("cb33"),
        n("fc40"),
        Object(j["a"])(Un, Rn, Dn, !1, null, "e4656bce", null)),
      Kn = Bn.exports,
      Mn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: { delay: { show: 750, hide: 100 }, content: e.label },
                expression:
                  "{\n\t\tdelay: { show: 750, hide: 100 },\n\t\tcontent: label\n\t}",
              },
            ],
            staticClass: "v-header-button",
          },
          [
            Object.keys(e.options).length > 0
              ? n("v-contextual-menu", {
                  staticClass: "options",
                  attrs: { placement: "bottom-end", options: e.options },
                  on: { click: e.emitChange },
                })
              : e._e(),
            n(
              e.disabled ? "button" : e.to ? "router-link" : "button",
              {
                tag: "component",
                staticClass: "button",
                class: {
                  attention: e.alert,
                  outline: e.outline,
                  "has-bg": e.hoverColor,
                },
                style: {
                  backgroundColor:
                    e.outline || e.disabled
                      ? null
                      : "var(--" + e.backgroundColor + ")",
                  borderColor: "var(--" + e.backgroundColor + ")",
                  color: "var(--" + e.backgroundColor + ")",
                  "--hover-color": e.hoverColor
                    ? "var(--" + e.hoverColor + ")"
                    : null,
                },
                attrs: { disabled: e.disabled || e.loading, to: e.to || null },
                on: {
                  click: function (t) {
                    !e.to && e.$emit("click", t);
                  },
                },
              },
              [
                e.loading
                  ? n("v-spinner", {
                      attrs: {
                        size: 24,
                        color: "white",
                        "background-color": "transparent",
                      },
                    })
                  : n("v-icon", {
                      attrs: { color: "--" + e.iconColor, name: e.icon },
                    }),
              ],
              1
            ),
          ],
          1
        );
      },
      Vn = [],
      qn = {
        name: "VHeaderButton",
        props: {
          icon: { type: String, required: !0 },
          backgroundColor: {
            type: String,
            default: "button-secondary-background-color",
          },
          hoverColor: { type: String, default: null },
          iconColor: { type: String, default: "button-secondary-text-color" },
          disabled: { type: Boolean, default: !1 },
          loading: { type: Boolean, default: !1 },
          options: {
            type: Object,
            default: function () {
              return {};
            },
          },
          alert: { type: Boolean, default: !1 },
          outline: { type: Boolean, default: !1 },
          to: { type: String, default: null },
          label: { type: String, default: void 0 },
        },
        data: function () {
          return { choice: null };
        },
        methods: {
          emitChange: function (e) {
            this.$emit("input", e), (this.choice = null);
          },
        },
      },
      zn = qn,
      Hn = (n("0a4f"), Object(j["a"])(zn, Mn, Vn, !1, null, "838afe5a", null)),
      Jn = Hn.exports,
      Wn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "span",
          {
            staticClass: "v-icon",
            class: [
              e.sizeClass,
              { "has-click": e.hasClick, left: e.left, right: e.right },
            ],
            style: {
              color: e.colorStyle,
              width: e.customSize,
              height: e.customSize,
            },
            attrs: { role: e.hasClick ? "button" : null },
            on: { click: e.emitClick },
          },
          [
            e.customIconName
              ? n(e.customIconName, { tag: "component" })
              : n(
                  "i",
                  {
                    class: { outline: e.outline },
                    style: { fontSize: e.customSize },
                  },
                  [e._v(e._s(e.name))]
                ),
          ],
          1
        );
      },
      Gn = [],
      Yn =
        (n("664f"),
        function (e, t) {
          var n = t._c;
          return n(
            "svg",
            {
              attrs: {
                viewBox: "0 0 96 100",
                xmlns: "http://www.w3.org/2000/svg",
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                "stroke-linejoin": "round",
                "stroke-miterlimit": "1.414",
              },
            },
            [
              n("path", {
                attrs: {
                  d: "M3.153 79.825l42.917 19.73c1.287.593 2.573.593 3.86 0l42.906-19.73c1.787-.821 2.683-2.216 2.685-4.183V24.358a4.632 4.632 0 0 0-.081-.83v-.242c-.048-.2-.11-.396-.184-.587l-.069-.196a4.73 4.73 0 0 0-.369-.692l-.104-.149a4.668 4.668 0 0 0-.403-.485l-.219-.149a4.476 4.476 0 0 0-.507-.415l-.127-.092a4.558 4.558 0 0 0-.622-.346L49.919.445c-1.287-.593-2.574-.593-3.861 0L3.153 20.175a4.51 4.51 0 0 0-.623.346l-.126.092a4.476 4.476 0 0 0-.507.415l-.15.161c-.146.152-.28.313-.404.484l-.103.15c-.143.22-.266.45-.369.691l-.127.185a4.592 4.592 0 0 0-.184.587v.242a4.632 4.632 0 0 0-.081.83v51.284c0 1.964.891 3.358 2.674 4.183zm6.534-48.264l33.697 15.523v41.142L9.687 72.692V31.561zm42.917 56.654V47.084l33.697-15.523v41.142L52.604 88.215zm-4.61-78.55l31.9 14.693-31.9 14.694-31.899-14.694L47.994 9.665z",
                },
              }),
            ]
          );
        }),
      Zn = [],
      Qn = {},
      Xn = Qn,
      ea = Object(j["a"])(Xn, Yn, Zn, !0, null, null, null),
      ta = ea.exports,
      na = ["box"],
      aa = Object(g["b"])({
        components: { CustomIconBox: ta },
        props: {
          name: { type: String, required: !0 },
          color: { type: String, default: "currentColor" },
          outline: { type: Boolean, default: !1 },
          sup: { type: Boolean, default: !1 },
          size: { type: Number, default: null },
          xSmall: { type: Boolean, default: !1 },
          small: { type: Boolean, default: !1 },
          large: { type: Boolean, default: !1 },
          xLarge: { type: Boolean, default: !1 },
          left: { type: Boolean, default: !1 },
          right: { type: Boolean, default: !1 },
        },
        setup: function (e, t) {
          var n = t.emit,
            a = t.listeners,
            o = Object(g["a"])(function () {
              return e.sup
                ? "sup"
                : e.xSmall
                ? "x-small"
                : e.small
                ? "small"
                : e.large
                ? "large"
                : e.xLarge
                ? "x-large"
                : null;
            }),
            i = Object(g["a"])(function () {
              return e.size ? "".concat(e.size, "px") : null;
            }),
            r = Object(g["a"])(function () {
              return U(e.color);
            }),
            s = Object(g["a"])(function () {
              return na.includes(e.name) ? "custom-icon-".concat(e.name) : null;
            }),
            c = Object(g["a"])(function () {
              return a.hasOwnProperty("click");
            });
          return {
            sizeClass: o,
            colorStyle: r,
            customIconName: s,
            customSize: i,
            hasClick: c,
            emitClick: l,
          };
          function l(e) {
            n("click", e);
          }
        },
      }),
      oa = aa,
      ia = (n("0295"), Object(j["a"])(oa, Wn, Gn, !1, null, "32f5ae2e", null)),
      ra = ia.exports,
      sa = ra,
      ca = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          [
            n("v-blocker", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.active,
                  expression: "active",
                },
              ],
              staticClass: "blocker-info",
              attrs: { "z-index": 9 },
              on: {
                click: function (t) {
                  return e.toggle(!1);
                },
              },
            }),
            n(
              "aside",
              { staticClass: "info-sidebar", class: { active: e.active } },
              [
                n(
                  "button",
                  {
                    directives: [
                      {
                        name: "tooltip",
                        rawName: "v-tooltip.left",
                        value: {
                          content: e.$t("info"),
                          boundariesElement: "body",
                        },
                        expression:
                          "{\n\t\t\t\tcontent: $t('info'),\n\t\t\t\tboundariesElement: 'body'\n\t\t\t}",
                        modifiers: { left: !0 },
                      },
                    ],
                    staticClass: "sidebar-button",
                    on: {
                      click: function (t) {
                        return e.toggle(!e.active);
                      },
                    },
                  },
                  [
                    n("v-icon", {
                      attrs: {
                        "icon-style": "outline",
                        name: "info",
                        color: "--sidebar-text-color",
                      },
                    }),
                    e.active
                      ? n("span", { staticClass: "label" }, [
                          e._v(e._s(e.$t("info"))),
                        ])
                      : e._e(),
                  ],
                  1
                ),
                e.active
                  ? n(
                      "div",
                      { staticClass: "content" },
                      [
                        n(
                          "div",
                          { staticClass: "system" },
                          [e._t("system")],
                          2
                        ),
                        e._t("default"),
                      ],
                      2
                    )
                  : e._e(),
                e.canReadActivity
                  ? n(
                      "router-link",
                      {
                        directives: [
                          {
                            name: "tooltip",
                            rawName: "v-tooltip.left",
                            value: {
                              content: e.$t("notifications"),
                              boundariesElement: "body",
                            },
                            expression:
                              "{\n\t\t\t\tcontent: $t('notifications'),\n\t\t\t\tboundariesElement: 'body'\n\t\t\t}",
                            modifiers: { left: !0 },
                          },
                        ],
                        staticClass: "notifications sidebar-button",
                        attrs: { to: "/" + e.currentProjectKey + "/activity" },
                      },
                      [
                        n("v-icon", {
                          attrs: {
                            name: "notifications",
                            color: "--sidebar-text-color",
                          },
                        }),
                        e.active
                          ? n("span", { staticClass: "label" }, [
                              e._v(e._s(e.$t("notifications"))),
                            ])
                          : e._e(),
                      ],
                      1
                    )
                  : e._e(),
              ],
              1
            ),
          ],
          1
        );
      },
      la = [],
      ua = n("0d2b"),
      da = n("2f62");
    function fa(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function ma(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? fa(Object(n), !0).forEach(function (t) {
              Object(Ne["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : fa(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var pa = {
        name: "InfoSidebar",
        components: { VBlocker: ua["a"] },
        props: { itemDetail: { type: Boolean, default: !1 } },
        computed: ma(
          {},
          Object(da["e"])({
            currentProjectKey: function (e) {
              return e.currentProjectKey;
            },
            active: function (e) {
              return e.sidebars.info;
            },
            permissions: function (e) {
              return e.permissions;
            },
          }),
          {
            canReadActivity: function () {
              return "none" !== this.permissions.directus_activity.read;
            },
          }
        ),
        created: function () {
          this.itemDetail && window.innerWidth > 1235 && this.toggle(!0);
        },
        methods: ma({}, Object(da["d"])({ toggle: Ln["TOGGLE_INFO"] })),
      },
      ha = pa,
      ga = (n("e1f8"), Object(j["a"])(ha, ca, la, !1, null, "2a1da0d6", null)),
      ya = ga.exports,
      va = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            staticClass: "v-input",
            class: { "icon-left": e.iconLeft, "icon-right": e.iconRight },
          },
          [
            e.mask
              ? n("input", {
                  directives: [
                    {
                      name: "mask",
                      rawName: "v-mask",
                      value: e.mask,
                      expression: "mask",
                    },
                    {
                      name: "focus",
                      rawName: "v-focus",
                      value: e.autofocus,
                      expression: "autofocus",
                    },
                  ],
                  ref: "input",
                  class: {
                    charactercount: e.charactercount,
                    monospace: e.monospace,
                  },
                  attrs: {
                    id: e.id,
                    type: e.type,
                    autocomplete: e.autocomplete,
                    max: e.max,
                    maxlength: e.maxlength,
                    min: e.min,
                    minlength: e.minlength,
                    name: e.name,
                    pattern: e.pattern,
                    placeholder: e.placeholder,
                    required: e.required,
                    readonly: e.readonly || e.disabled,
                    spellcheck: e.spellcheck,
                    step: e.step,
                  },
                  domProps: { value: e.value },
                  on: {
                    keyup: function (t) {
                      return e.$emit("keyup", t);
                    },
                    keydown: function (t) {
                      return e.$emit("keydown", t);
                    },
                    input: function (t) {
                      return e.$emit("input", t.target.value);
                    },
                  },
                })
              : n("input", {
                  directives: [
                    {
                      name: "focus",
                      rawName: "v-focus",
                      value: e.autofocus,
                      expression: "autofocus",
                    },
                  ],
                  ref: "input",
                  staticClass: "test",
                  class: {
                    charactercount: e.charactercount,
                    monospace: e.monospace,
                  },
                  attrs: {
                    id: e.id,
                    type: e.type,
                    autocomplete: e.autocomplete,
                    max: e.max,
                    maxlength: e.maxlength,
                    min: e.min,
                    minlength: e.minlength,
                    name: e.name,
                    pattern: e.pattern,
                    placeholder: e.placeholder,
                    required: e.required,
                    readonly: e.readonly || e.disabled,
                    spellcheck: e.spellcheck,
                    step: e.step,
                  },
                  domProps: { value: e.value },
                  on: {
                    keyup: function (t) {
                      return e.$emit("keyup", t);
                    },
                    keydown: function (t) {
                      return e.$emit("keydown", t);
                    },
                    input: function (t) {
                      return e.$emit("input", t.target.value);
                    },
                  },
                }),
            e.iconLeft
              ? n("v-icon", {
                  directives: [
                    {
                      name: "tooltip",
                      rawName: "v-tooltip",
                      value: e.iconLeftTooltip,
                      expression: "iconLeftTooltip",
                    },
                  ],
                  staticClass: "icon-left",
                  attrs: { name: e.iconLeft, color: e.iconLeftColor },
                })
              : e._e(),
            e.iconRight
              ? n("v-icon", {
                  directives: [
                    {
                      name: "tooltip",
                      rawName: "v-tooltip",
                      value: e.iconRightTooltip,
                      expression: "iconRightTooltip",
                    },
                  ],
                  staticClass: "icon-right",
                  attrs: { name: e.iconRight, color: e.iconRightColor },
                })
              : e._e(),
            e.charactercount
              ? n("span", { staticClass: "char-count" }, [
                  e._v(e._s(e.charsRemaining)),
                ])
              : e._e(),
          ],
          1
        );
      },
      ba = [],
      _a = {
        name: "VInput",
        props: {
          type: { type: String, default: "text" },
          autocomplete: { type: String, default: "on" },
          autofocus: { type: Boolean, default: !1 },
          max: { type: [Number, Boolean, String], default: null },
          maxlength: { type: [Number, Boolean, String], default: null },
          min: { type: [Number, Boolean, String], default: null },
          minlength: { type: [Number, Boolean, String], default: null },
          name: { type: String, default: "" },
          pattern: { type: String, default: ".*" },
          placeholder: { type: String, default: "" },
          readonly: { type: Boolean, default: !1 },
          disabled: { type: Boolean, default: !1 },
          required: { type: Boolean, default: !1 },
          spellcheck: { type: Boolean, default: !0 },
          id: { type: String, default: "" },
          value: { type: null, default: "" },
          step: { type: [String, Number], default: 1 },
          iconLeft: { type: String, default: "" },
          iconLeftColor: { type: String, default: "--input-icon-color" },
          iconLeftTooltip: { type: String, default: "" },
          iconRight: { type: String, default: "" },
          iconRightColor: { type: String, default: "--input-icon-color" },
          iconRightTooltip: { type: String, default: "" },
          valid: { type: Boolean, default: !0 },
          charactercount: { type: Boolean, default: !1 },
          mask: { type: [String, Array, Boolean], default: null },
          monospace: { type: Boolean, default: !1 },
        },
        computed: {
          charsRemaining: function () {
            return this.maxlength ? this.maxlength - this.value.length : null;
          },
        },
      },
      ja = _a,
      ka = (n("8bbb"), Object(j["a"])(ja, va, ba, !1, null, "52275a91", null)),
      wa = ka.exports,
      Oa = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.items.error
          ? n("v-error", {
              attrs: {
                icon: "warning",
                color: "danger",
                title: e.$t("server_error"),
                body: e.$t("server_error_copy"),
              },
            })
          : e.items.fields && 0 === Object.keys(e.items.fields).length
          ? n("v-error", {
              attrs: {
                icon: "build",
                title: e.$t("no_fields"),
                body: e.$t("no_fields_body"),
              },
            })
          : "directus_files" === e.collection &&
            e.items.meta &&
            0 === e.items.meta.total_count
          ? n("v-error", {
              attrs: {
                icon: "image",
                title: e.$t("no_files"),
                body: e.$t("no_files_body"),
              },
            })
          : e.items.meta && 0 === e.items.meta.total_count
          ? n("v-error", {
              attrs: {
                icon: "web_asset",
                title: e.$t("empty_collection"),
                body: e.$t("empty_collection_body"),
              },
            })
          : e.items.data &&
            0 === e.items.data.length &&
            e.items.meta &&
            0 !== e.items.meta.total_count
          ? n("v-error", {
              attrs: {
                title: e.$t("no_results"),
                body: e.$t("no_results_body"),
                icon: "search",
              },
            })
          : n("v-ext-layout", {
              attrs: {
                fields: e.fields,
                items: e.items.data || [],
                "view-type": e.viewType,
                "view-query": e.viewQuery,
                "view-options": e.viewOptions,
                selection: e.selectionKeys,
                loading: e.items.loading,
                collection: e.collection,
                "lazy-loading": e.items.lazyLoading,
                link: e.links ? "__link__" : null,
                "sort-field": e.sortField,
              },
              on: {
                input: e.saveItems,
                select: e.select,
                query: function (t) {
                  return e.$emit("query", t);
                },
                options: function (t) {
                  return e.$emit("options", t);
                },
                "next-page": e.lazyLoad,
              },
            });
      },
      $a = [];
    n("e01a"), n("d28b"), n("a15b"), n("3ca3");
    function xa(e) {
      var t = {};
      return (
        e.forEach(function (e) {
          t["filter[".concat(e.field, "][").concat(e.operator, "]")] = e.value;
        }),
        t
      );
    }
    var Sa = n("1581");
    function Ca(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function Ea(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ca(Object(n), !0).forEach(function (t) {
              Object(Ne["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Ca(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var Pa = {
        name: "VItems",
        props: {
          collection: { type: String, required: !0 },
          filters: {
            type: Array,
            default: function () {
              return [];
            },
          },
          searchQuery: { type: String, default: "" },
          viewType: { type: String, default: "tabular" },
          viewOptions: {
            type: Object,
            default: function () {
              return {};
            },
          },
          viewQuery: {
            type: Object,
            default: function () {
              return {};
            },
          },
          selection: { type: Array, default: null },
          links: { type: Boolean, default: !1 },
        },
        data: function () {
          return {
            items: {
              meta: null,
              data: null,
              loading: !1,
              error: null,
              page: 0,
              lazyLoading: !1,
            },
          };
        },
        computed: Ea({}, Object(da["e"])(["currentProjectKey"]), {
          allSelected: function () {
            var e = this,
              t = this.items.data
                .map(function (t) {
                  return t[e.primaryKeyField];
                })
                .sort(),
              n = Object(re["a"])(this.selection);
            return (
              n.sort(), this.selection.length > 0 && Object(o["isEqual"])(t, n)
            );
          },
          primaryKeyField: function () {
            if (this.fields)
              return Object(o["find"])(Object.values(this.fields), {
                primary_key: !0,
              }).field;
          },
          sortField: function () {
            var e = Object(o["find"])(this.fields, { type: "sort" });
            return (e && e.field) || null;
          },
          statusField: function () {
            var e = Object(o["find"])(this.fields, { type: "status" });
            return (e && e.field) || null;
          },
          userCreatedField: function () {
            return this.fields
              ? (
                  Object(o["find"])(Object.values(this.fields), function (e) {
                    return e.type && "owner" === e.type.toLowerCase();
                  }) || {}
                ).field
              : null;
          },
          fields: function () {
            var e = this,
              t = this.$store.state.collections[this.collection].fields,
              n = Object.values(t).sort(function (e, t) {
                return e.sort < t.sort ? -1 : 1;
              }),
              a = {},
              i = !0,
              r = !1,
              s = void 0;
            try {
              for (
                var c, l = n[Symbol.iterator]();
                !(i = (c = l.next()).done);
                i = !0
              ) {
                var u = c.value;
                a[u.field] = u;
              }
            } catch (d) {
              (r = !0), (s = d);
            } finally {
              try {
                i || null == l.return || l.return();
              } finally {
                if (r) throw s;
              }
            }
            return (
              Object(o["mapValues"])(a, function (t) {
                return Ea({}, t, {
                  name: e.$helpers.formatField(t.field, t.collection),
                });
              }) || {}
            );
          },
          selectionKeys: function () {
            var e = this;
            return this.selection
              ? Object(o["uniq"])(
                  this.selection.map(function (t) {
                    return t[e.primaryKeyField];
                  })
                )
              : null;
          },
        }),
        watch: {
          collection: function (e, t) {
            Object(o["isEqual"])(e, t) || this.hydrate();
          },
          viewQuery: {
            deep: !0,
            handler: function (e, t) {
              Object(o["isEqual"])(e, t) || this.getItems();
            },
          },
          filters: {
            deep: !0,
            handler: function (e, t) {
              Object(o["isEqual"])(e, t) || this.getItems();
            },
          },
          searchQuery: function (e, t) {
            Object(o["isEqual"])(e, t) || this.getItems();
          },
        },
        created: function () {
          this.hydrate();
        },
        mounted: function () {
          var e = this;
          this.$helpers.mousetrap.bind("mod+a", function () {
            return e.selectAll(), !1;
          });
        },
        beforeDestroy: function () {
          this.$helpers.mousetrap.unbind("mod+a");
        },
        methods: {
          hydrate: function () {
            this.items.loading ||
              ((this.items.data = null),
              (this.items.loading = !1),
              (this.items.error = null),
              this.getItems());
          },
          selectAll: function () {
            return this.allSelected
              ? this.$emit("select", [])
              : this.$emit("select", this.items.data);
          },
          getItems: function () {
            var e = this;
            if (!this.items.loading) {
              (this.items.loading = !0),
                (this.items.error = null),
                (this.items.page = 0);
              var t = this.$helpers.shortid.generate();
              return (
                this.$store.dispatch("loadingStart", { id: t }),
                this.$api
                  .getItems(this.collection, this.formatParams())
                  .then(function (n) {
                    (e.items.loading = !1),
                      (e.items.meta = n.meta),
                      e.$store.dispatch("loadingFinished", t),
                      e.links
                        ? (e.items.data = n.data.map(function (t) {
                            var n = "/"
                              .concat(e.currentProjectKey, "/collections/")
                              .concat(e.collection, "/")
                              .concat(t[e.primaryKeyField]);
                            return (
                              e.collection.startsWith("directus_") &&
                                (n = "/"
                                  .concat(e.currentProjectKey, "/")
                                  .concat(e.collection.substr(9), "/")
                                  .concat(t[e.primaryKeyField])),
                              "directus_webhooks" === e.collection &&
                                (n = "/"
                                  .concat(
                                    e.currentProjectKey,
                                    "/settings/webhooks/"
                                  )
                                  .concat(t[e.primaryKeyField])),
                              Ea({}, t, { __link__: n })
                            );
                          }))
                        : (e.items.data = n.data),
                      e.$emit(
                        "fetch",
                        Ea({}, n.meta, { local_count: e.items.data.length })
                      );
                  })
                  .catch(function (n) {
                    console.error(n),
                      e.$store.dispatch("loadingFinished", t),
                      (e.items.loading = !1),
                      (e.items.error = n);
                  })
              );
            }
          },
          select: function (e) {
            var t = this;
            this.$emit(
              "select",
              e.map(function (e) {
                return (
                  Object(o["find"])(
                    t.items.data,
                    Object(Ne["a"])({}, t.primaryKeyField, e)
                  ) ||
                  Object(o["find"])(
                    t.selection,
                    Object(Ne["a"])({}, t.primaryKeyField, e)
                  )
                );
              })
            );
          },
          saveItems: function (e) {
            var t = this;
            if (e) {
              var n = this.primaryKeyField,
                a = this.$helpers.shortid.generate();
              if (
                (this.$store.dispatch("loadingStart", { id: a }),
                Array.isArray(e))
              ) {
                var o = [],
                  i = [];
                return (
                  e.forEach(function (e) {
                    e[n] && null != e[n] ? o.push(e) : i.push(e);
                  }),
                  Promise.all([
                    o.length > 0
                      ? this.$api.updateItems(this.collection, o)
                      : null,
                    i.length > 0
                      ? this.$api.createItems(this.collection, i)
                      : null,
                  ])
                    .then(function () {
                      return (
                        t.$store.dispatch("loadingFinished", a), t.getItems()
                      );
                    })
                    .catch(function (e) {
                      t.$store.dispatch("loadingFinished", a),
                        t.$events.emit("error", {
                          notify: t.$t("something_went_wrong_body"),
                          error: e,
                        });
                    })
                );
              }
              return e[n] && null != e[n]
                ? this.$api
                    .updateItem(this.collection, e[n], e)
                    .then(function () {
                      return (
                        t.$store.dispatch("loadingFinished", a), t.getItems()
                      );
                    })
                    .catch(function (e) {
                      t.$store.dispatch("loadingFinished", a),
                        t.$events.emit("error", {
                          notify: t.$t("something_went_wrong_body"),
                          error: e,
                        });
                    })
                : this.$api
                    .createItem(this.collection, e)
                    .then(function () {
                      return (
                        t.$store.dispatch("loadingFinished", a), t.getItems()
                      );
                    })
                    .catch(function (e) {
                      t.$store.dispatch("loadingFinished", a),
                        t.$events.emit("error", {
                          notify: t.$t("something_went_wrong_body"),
                          error: e,
                        });
                    });
            }
          },
          lazyLoad: function () {
            var e = this;
            if (
              !this.items.lazyLoading &&
              !(
                this.items.meta.filter_count === this.items.data.length ||
                this.items.page *
                  this.$store.state.settings.values.default_limit >
                  this.items.data.length
              )
            )
              return (
                (this.items.lazyLoading = !0),
                (this.items.error = null),
                (this.items.page = this.items.page + 1),
                this.$api
                  .getItems(this.collection, this.formatParams())
                  .then(function (t) {
                    (e.items.lazyLoading = !1),
                      e.links
                        ? (e.items.data = [].concat(
                            Object(re["a"])(e.items.data),
                            Object(re["a"])(
                              t.data.map(function (t) {
                                var n = "/"
                                  .concat(e.currentProjectKey, "/collections/")
                                  .concat(e.collection, "/")
                                  .concat(t[e.primaryKeyField]);
                                return (
                                  e.collection.startsWith("directus_") &&
                                    (n = "/"
                                      .concat(e.currentProjectKey, "/")
                                      .concat(e.collection.substr(9), "/")
                                      .concat(t[e.primaryKeyField])),
                                  "directus_webhooks" === e.collection &&
                                    (n = "/"
                                      .concat(
                                        e.currentProjectKey,
                                        "/settings/webhooks/"
                                      )
                                      .concat(t[e.primaryKeyField])),
                                  Ea({}, t, { __link__: n })
                                );
                              })
                            )
                          ))
                        : (e.items.data = [].concat(
                            Object(re["a"])(e.items.data),
                            Object(re["a"])(t.data)
                          )),
                      e.$emit(
                        "fetch",
                        Ea({}, t.meta, { local_count: e.items.data.length })
                      );
                  })
                  .catch(function (t) {
                    console.error(t),
                      (e.items.lazyLoading = !1),
                      (e.items.error = t),
                      (e.items.page = e.items.page - 1);
                  })
              );
          },
          formatParams: function () {
            var e = Object.keys(this.fields),
              t = {
                meta: "total_count,result_count,filter_count",
                limit: this.$store.state.settings.values.default_limit,
                offset:
                  this.$store.state.settings.values.default_limit *
                  this.items.page,
              };
            if (
              (Object.assign(t, this.viewQuery),
              this.viewQuery && this.viewQuery.fields
                ? (t.fields instanceof Array == 0 &&
                    (t.fields = t.fields.split(",")),
                  (t.fields = t.fields.filter(function (t) {
                    return e.includes(t);
                  })),
                  (t.fields = t.fields.map(function (e) {
                    return "".concat(e, ".*");
                  })),
                  t.fields.includes(this.primaryKeyField) ||
                    t.fields.push(this.primaryKeyField),
                  this.statusField &&
                    !t.fields.includes(this.primaryKeyField) &&
                    t.fields.push(this.statusField),
                  this.$store.state.currentUser.admin ||
                    (void 0 === this.userCreatedField ||
                      t.fields.includes(
                        "".concat(this.userCreatedField, ".*")
                      ) ||
                      t.fields.push("".concat(this.userCreatedField, ".*")),
                    null === this.statusField ||
                      t.fields.includes("".concat(this.statusField, ".*")) ||
                      t.fields.push("".concat(this.statusField, ".*"))),
                  (t.fields = t.fields.join(",")))
                : (t.fields = "*.*"),
              t.sort)
            ) {
              var n = t.sort.split(",");
              (t.sort = n
                .filter(function (t) {
                  return (
                    t.startsWith("-") && (t = t.substring(1)), e.includes(t)
                  );
                })
                .join(",")),
                0 === t.sort.length && delete t.sort;
            }
            return (
              this.searchQuery && (t.q = this.searchQuery),
              this.filters &&
                this.filters.length > 0 &&
                (t = Ea({}, t, {}, xa(this.filters))),
              t
            );
          },
        },
      },
      Ta = Pa,
      Ia = Object(j["a"])(Ta, Oa, $a, !1, null, null, null),
      Na = Ia.exports,
      Aa = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "portal",
          { attrs: { to: "modal" } },
          [
            n(
              "v-modal",
              {
                attrs: {
                  title: e.$t("select_existing"),
                  buttons: { done: { text: e.$t("done"), color: "accent" } },
                },
                on: {
                  done: function (t) {
                    return e.$emit("done");
                  },
                  close: function (t) {
                    return e.$emit("cancel");
                  },
                },
              },
              [
                n("div", { staticClass: "search-sort" }, [
                  n("input", {
                    attrs: { placeholder: e.$t("search"), type: "search" },
                    domProps: { value: e.searchQuery },
                    on: { input: e.setSearchQuery },
                  }),
                  n(
                    "div",
                    { staticClass: "select" },
                    [
                      n(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.sortField,
                              expression: "sortField",
                            },
                          ],
                          on: {
                            change: function (t) {
                              var n = Array.prototype.filter
                                .call(t.target.options, function (e) {
                                  return e.selected;
                                })
                                .map(function (e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t;
                                });
                              e.sortField = t.target.multiple ? n : n[0];
                            },
                          },
                        },
                        e._l(e.fields, function (t) {
                          return n(
                            "option",
                            { key: t, domProps: { value: t } },
                            [
                              e._v(
                                " " +
                                  e._s(
                                    e.$helpers.formatField(t, e.collection)
                                  ) +
                                  " "
                              ),
                            ]
                          );
                        }),
                        0
                      ),
                      n("v-icon", {
                        attrs: {
                          name: "arrow_drop_down",
                          color: "--input-icon-color",
                        },
                      }),
                    ],
                    1
                  ),
                  n(
                    "div",
                    { staticClass: "select" },
                    [
                      n(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.sortDirection,
                              expression: "sortDirection",
                            },
                          ],
                          on: {
                            change: function (t) {
                              var n = Array.prototype.filter
                                .call(t.target.options, function (e) {
                                  return e.selected;
                                })
                                .map(function (e) {
                                  var t = "_value" in e ? e._value : e.value;
                                  return t;
                                });
                              e.sortDirection = t.target.multiple ? n : n[0];
                            },
                          },
                        },
                        [
                          n("option", { attrs: { value: "asc" } }, [e._v("↑")]),
                          n("option", { attrs: { value: "desc" } }, [
                            e._v("↓"),
                          ]),
                        ]
                      ),
                      n("v-icon", {
                        attrs: {
                          name: "arrow_drop_down",
                          color: "--input-icon-color",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                e.hydrating
                  ? n("div", { staticClass: "spinner" }, [n("v-spinner")], 1)
                  : e._e(),
                0 !== e.items.length || e.hydrating || e.loading
                  ? e._e()
                  : n("div", { staticClass: "not-found" }, [
                      e._v(" " + e._s(e.$t("no_results")) + " "),
                    ]),
                !e.hydrating && e.items.length > 0
                  ? n(
                      "div",
                      { staticClass: "items" },
                      [
                        n(
                          "div",
                          { staticClass: "head" },
                          [
                            n(
                              "span",
                              [
                                e.single
                                  ? e._e()
                                  : n("v-icon", {
                                      attrs: {
                                        name:
                                          0 == (e.value || []).length
                                            ? "check_box_outline_blank"
                                            : e.value.length == e.items.length
                                            ? "check_box"
                                            : "indeterminate_check_box",
                                        color:
                                          (e.value || []).length ==
                                          e.items.length
                                            ? "--input-background-color-active"
                                            : "--input-border-color",
                                      },
                                      on: {
                                        click: function (t) {
                                          return e.toggleAll();
                                        },
                                      },
                                    }),
                              ],
                              1
                            ),
                            "directus_files" === e.collection
                              ? n("span", [e._v(e._s(e.$t("file")))])
                              : e._e(),
                            e._l(e.fields, function (t) {
                              return n("span", { key: t }, [
                                e._v(
                                  " " +
                                    e._s(
                                      e.$helpers.formatField(t, e.collection)
                                    ) +
                                    " "
                                ),
                              ]);
                            }),
                          ],
                          2
                        ),
                        e._l(e.items, function (t) {
                          return n(
                            "label",
                            { key: e.uid + "_" + t[e.primaryKeyField] },
                            [
                              n(
                                "div",
                                { staticClass: "input" },
                                [
                                  n("input", {
                                    attrs: {
                                      type: e.single ? "radio" : "checkbox",
                                      name: e.uid,
                                    },
                                    domProps: {
                                      value: t[e.primaryKeyField],
                                      checked: e.isChecked(
                                        t[e.primaryKeyField]
                                      ),
                                    },
                                    on: {
                                      change: function (n) {
                                        return e.updateValue(
                                          t[e.primaryKeyField]
                                        );
                                      },
                                    },
                                  }),
                                  e.single
                                    ? n("v-icon", {
                                        attrs: {
                                          name: e.isChecked(
                                            t[e.primaryKeyField]
                                          )
                                            ? "radio_button_checked"
                                            : "radio_button_unchecked",
                                          color: e.isChecked(
                                            t[e.primaryKeyField]
                                          )
                                            ? "--input-background-color-active"
                                            : "--input-border-color",
                                        },
                                      })
                                    : n("v-icon", {
                                        attrs: {
                                          name: e.isChecked(
                                            t[e.primaryKeyField]
                                          )
                                            ? "check_box"
                                            : "check_box_outline_blank",
                                          color: e.isChecked(
                                            t[e.primaryKeyField]
                                          )
                                            ? "--input-background-color-active"
                                            : "--input-border-color",
                                        },
                                      }),
                                ],
                                1
                              ),
                              "directus_files" === e.collection
                                ? n(
                                    "span",
                                    [
                                      n("v-ext-display", {
                                        attrs: {
                                          "interface-type": "file",
                                          name: "thumbnail",
                                          collection: "directus_files",
                                          type: "JSON",
                                          datatype: "TEXT",
                                          value: t,
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : e._e(),
                              e._l(e.fieldsWithInfo, function (a) {
                                return n(
                                  "span",
                                  { key: e.uid + "_" + a.field },
                                  [
                                    n("v-ext-display", {
                                      attrs: {
                                        id: e.uid + "_" + a.field,
                                        "interface-type": a.interface,
                                        name: e.uid + "_" + a.field,
                                        type: a.type,
                                        datatype: a.datatype,
                                        options: a.options,
                                        value: t[a.field],
                                        values: e.getItemValueById(t.id),
                                      },
                                    }),
                                  ],
                                  1
                                );
                              }),
                            ],
                            2
                          );
                        }),
                      ],
                      2
                    )
                  : e._e(),
                e.moreItemsAvailable && !e.hydrating
                  ? n(
                      "v-button",
                      {
                        staticClass: "more",
                        attrs: { loading: e.loading },
                        on: { click: e.loadMore },
                      },
                      [e._v(" " + e._s(e.$t("load_more")) + " ")]
                    )
                  : e._e(),
              ],
              1
            ),
          ],
          1
        );
      },
      Ra = [],
      Da = (n("466d"), n("8dee")),
      La = n.n(Da),
      Fa = {
        name: "ItemSelect",
        props: {
          collection: { type: String, required: !0 },
          fields: { type: Array, required: !0 },
          filters: {
            type: Array,
            default: function () {
              return [];
            },
          },
          value: { type: [Array, String, Number], default: null },
          single: { type: Boolean, default: !1 },
        },
        data: function () {
          return {
            items: [],
            totalCount: 0,
            loading: !1,
            error: !1,
            searchQuery: "",
            sortField: null,
            sortDirection: "asc",
            hydrating: !0,
            moreItemsAvailable: !1,
          };
        },
        computed: {
          primaryKeyField: function () {
            var e = this.$store.state.collections[this.collection];
            return e
              ? Object(o["find"])(e.fields, { primary_key: !0 }).field
              : null;
          },
          uid: function () {
            return La.a.generate();
          },
          fieldsWithInfo: function () {
            var e = this;
            return this.fields.map(function (t) {
              return e.$store.state.collections[e.collection].fields[t];
            });
          },
        },
        watch: {
          collection: function () {
            this.fetchItems();
          },
          filters: {
            deep: !0,
            handler: function (e, t) {
              Object(o["isEqual"])(e, t) || this.fetchItems();
            },
          },
          sortField: function () {
            this.fetchItems();
          },
          sortDirection: function () {
            this.fetchItems();
          },
        },
        created: function () {
          var e = this;
          (this.sortField = this.fields[0]),
            this.fetchItems(),
            (this.setSearchQuery = Object(o["debounce"])(
              this.setSearchQuery,
              850
            )),
            this.$api
              .getItems(this.collection, { meta: "total_count", limit: 1 })
              .then(function (e) {
                return e.meta;
              })
              .then(function (t) {
                return (e.totalCount = t.total_count);
              })
              .catch(function (t) {
                return (e.error = t);
              });
        },
        methods: {
          fetchItems: function () {
            var e = this,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = { replace: !0, offset: 0 };
            (t = Object(o["merge"])(n, t)),
              (this.loading = !0),
              (this.error = null);
            var a = { limit: 200, offset: t.offset, meta: "*" };
            this.searchQuery.length > 0 && (a.q = this.searchQuery),
              this.filters.length > 0 && Object.assign(a, xa(this.filters)),
              "directus_files" === this.collection
                ? (a.fields = ["*"])
                : this.fields.length > 0
                ? (a.fields = Object(o["clone"])(this.fields))
                : (a.fields = []),
              (a.fields = a.fields.map(function (e) {
                return "".concat(e, ".*");
              }));
            var i = "";
            "desc" === this.sortDirection && (i += "-"),
              this.sortField && (i += this.sortField),
              i && (a.sort = i),
              a.fields.push(this.primaryKeyField);
            var r = this.fields.map(function (t) {
                return e.$store.state.collections[e.collection].fields[t];
              }),
              s = Object.values(r).filter(function (e) {
                return (
                  "undefined" != typeof e && "alias" === e.type.toLowerCase()
                );
              });
            s.length > 0 &&
              Object(o["forEach"])(s, function (e) {
                if (e.options.url_template.match(/{{(.*)}}/g)) {
                  var t = Object(Sa["a"])(e.options.url_template)[0],
                    n = t.split(".")[0];
                  a.fields.includes("".concat(n, ".*")) ||
                    a.fields.includes(n) ||
                    a.fields.push("".concat(n, ".*"));
                }
              }),
              this.$api
                .getItems(this.collection, a)
                .then(function (e) {
                  return e.data;
                })
                .then(function (n) {
                  return (
                    (e.moreItemsAvailable = 200 === n.length),
                    t.replace
                      ? (e.items = n)
                      : (e.items = [].concat(
                          Object(re["a"])(e.items),
                          Object(re["a"])(n)
                        ))
                  );
                })
                .catch(function (t) {
                  return (e.error = t);
                })
                .finally(function () {
                  (e.loading = !1), (e.hydrating = !1);
                });
          },
          toggleAll: function () {
            var e = this;
            this.value && this.value.length == this.items.length
              ? this.$emit("input", [])
              : this.$emit(
                  "input",
                  this.items.map(function (t) {
                    return t[e.primaryKeyField];
                  })
                );
          },
          updateValue: function (e) {
            if (this.single) return this.$emit("input", e);
            this.value && this.value.includes(e)
              ? this.$emit(
                  "input",
                  this.value.filter(function (t) {
                    return t !== e;
                  })
                )
              : this.$emit(
                  "input",
                  [].concat(Object(re["a"])(this.value || []), [e])
                );
          },
          isChecked: function (e) {
            return this.single
              ? this.value == e
              : this.value && this.value.includes(e);
          },
          setSearchQuery: function (e) {
            (this.searchQuery = e.target.value), this.fetchItems();
          },
          loadMore: function () {
            var e = this.items.length;
            this.fetchItems({ offset: e, replace: !1 });
          },
          getItemValueById: function (e) {
            var t = this.items.filter(function (t) {
              return t.id == e;
            })[0];
            return Object.assign({}, t);
          },
        },
      },
      Ua = Fa,
      Ba = (n("52b6"), Object(j["a"])(Ua, Aa, Ra, !1, null, "10c3d0f8", null)),
      Ka = Ba.exports,
      Ma = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("transition", { attrs: { name: "slide" } }, [
          n("div", { staticClass: "v-modal" }, [
            n("div", {
              staticClass: "modal-mask",
              class: e.actionRequired ? null : "pointer",
              on: {
                click: function (t) {
                  !e.actionRequired && e.$emit("close");
                },
              },
            }),
            n("div", { staticClass: "modal-wrapper" }, [
              n(
                "aside",
                {
                  ref: "modal",
                  staticClass: "modal-container",
                  class: { "full-size": e.fullSize },
                  attrs: {
                    "aria-labelledby": "modal-title",
                    "aria-describedby": "modal-description",
                    role: "dialog",
                  },
                  on: {
                    keydown: function (t) {
                      if (
                        !t.type.indexOf("key") &&
                        e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"])
                      )
                        return null;
                      !e.actionRequired && e.$emit("close");
                    },
                  },
                },
                [
                  n("div", { attrs: { role: "document" } }, [
                    n(
                      "div",
                      {
                        staticClass: "screen-reader-offscreen",
                        attrs: { id: "modal-description" },
                      },
                      [
                        e._v(
                          " " +
                            e._s(e.$t("dialog_beginning")) +
                            " " +
                            e._s(e.actionRequired ? null : e.$t("esc_cancel")) +
                            " "
                        ),
                      ]
                    ),
                    e.title
                      ? n("header", [
                          n(
                            "h1",
                            {
                              staticClass: "type-heading-small",
                              attrs: { id: "modal-title" },
                            },
                            [e._v(e._s(e.title))]
                          ),
                          e.actionRequired
                            ? e._e()
                            : n(
                                "button",
                                {
                                  on: {
                                    click: function (t) {
                                      return e.$emit("close");
                                    },
                                  },
                                },
                                [n("v-icon", { attrs: { name: "close" } })],
                                1
                              ),
                        ])
                      : e._e(),
                    e.tabs
                      ? n(
                          "div",
                          { staticClass: "tabs" },
                          e._l(e.tabs, function (t, a) {
                            return n(
                              "button",
                              {
                                key: a,
                                class: { active: e.activeTab === a },
                                attrs: { disabled: t.disabled },
                                on: {
                                  click: function (t) {
                                    return e.$emit("tab", a);
                                  },
                                },
                              },
                              [e._v(" " + e._s(t.text) + " ")]
                            );
                          }),
                          0
                        )
                      : e._e(),
                    n(
                      "div",
                      { staticClass: "body" },
                      [
                        e.tabs
                          ? e._l(e.tabs, function (t, a) {
                              return n(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: e.activeTab === a,
                                      expression: "activeTab === id",
                                    },
                                  ],
                                  key: "tab-" + a,
                                  staticClass: "tab",
                                },
                                [e._t(a)],
                                2
                              );
                            })
                          : e._t("default"),
                      ],
                      2
                    ),
                    n(
                      "div",
                      {
                        staticClass: "footer",
                        class: { "action-required": e.actionRequired },
                      },
                      [
                        e.actionRequired
                          ? e._e()
                          : n(
                              "button",
                              {
                                on: {
                                  click: function (t) {
                                    return e.$emit("close");
                                  },
                                },
                              },
                              [e._v(" " + e._s(e.$t("cancel")) + " ")]
                            ),
                        e._l(e.buttons, function (t, a) {
                          return n(
                            "v-button",
                            {
                              key: a,
                              staticClass: "confirm",
                              attrs: {
                                loading: t.loading || !1,
                                disabled: t.disabled || !1,
                              },
                              on: {
                                click: function (t) {
                                  return e.$emit(a);
                                },
                              },
                            },
                            [e._v(" " + e._s(t.text) + " ")]
                          );
                        }),
                      ],
                      2
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
        ]);
      },
      Va = [],
      qa = n("c740"),
      za = {
        name: "VModal",
        props: {
          actionRequired: { type: Boolean, default: !1 },
          title: { type: String, default: null },
          buttons: {
            type: Object,
            default: function () {
              return {};
            },
          },
          tabs: { type: Object, default: null },
          activeTab: { type: String, default: null },
          fullSize: { type: Boolean, default: !1 },
        },
        mounted: function () {
          Object(qa["disableBodyScroll"])(this.$refs.modal);
        },
        beforeDestroy: function () {
          Object(qa["enableBodyScroll"])(this.$refs.modal);
        },
      },
      Ha = za,
      Ja = (n("70b3"), Object(j["a"])(Ha, Ma, Va, !1, null, "18e1eaba", null)),
      Wa = Ja.exports,
      Ga = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "p",
          { staticClass: "notice selectable", class: e.color },
          [
            e.icon
              ? n("v-icon", { staticClass: "icon", attrs: { name: e.icon } })
              : e._e(),
            e._t("default"),
          ],
          2
        );
      },
      Ya = [],
      Za = {
        name: "VNotice",
        props: {
          color: {
            type: String,
            default: "gray",
            validator: function (e) {
              return [
                "gray",
                "gray-subdued",
                "accent",
                "warning",
                "danger",
                "success",
              ].includes(e);
            },
          },
          icon: { type: String, default: void 0 },
        },
      },
      Qa = Za,
      Xa = (n("11b8"), n("1b8f")),
      eo = n.n(Xa),
      to = Object(j["a"])(Qa, Ga, Ya, !1, null, "38f68d62", null);
    "function" === typeof eo.a && eo()(to);
    var no = to.exports,
      ao = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            staticClass: "v-progress-linear",
            class: {
              absolute: e.absolute,
              bottom: e.bottom,
              fixed: e.fixed,
              indeterminate: e.indeterminate,
              rounded: e.rounded,
              top: e.top,
            },
            style: e.styles,
          },
          [
            n("div", { staticClass: "inner", style: { width: e.value + "%" } }),
            e._t("default", null, { value: e.value }),
          ],
          2
        );
      },
      oo = [],
      io = Object(g["b"])({
        props: {
          absolute: { type: Boolean, default: !1 },
          backgroundColor: {
            type: String,
            default: "--progress-background-color",
          },
          bottom: { type: Boolean, default: !1 },
          color: {
            type: String,
            default: "--progress-background-color-accent",
          },
          fixed: { type: Boolean, default: !1 },
          height: { type: Number, default: 4 },
          indeterminate: { type: Boolean, default: !1 },
          rounded: { type: Boolean, default: !1 },
          top: { type: Boolean, default: !1 },
          value: { type: Number, default: 0 },
        },
        setup: function (e) {
          var t = Object(g["a"])(function () {
            return {
              "--_v-progress-linear-background-color": U(e.backgroundColor),
              "--_v-progress-linear-color": U(e.color),
              "--_v-progress-linear-height": e.height + "px",
            };
          });
          return { styles: t };
        },
      }),
      ro = io,
      so = (n("5e6f"), Object(j["a"])(ro, ao, oo, !1, null, "f58af99a", null)),
      co = so.exports,
      lo = co,
      uo = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            staticClass: "v-progress-ring",
            style: {
              height: 2 * e.radius + "px",
              width: 2 * e.radius + "px",
              minWidth: 2 * e.radius + "px",
            },
          },
          [
            n("svg", [
              n("circle", {
                staticClass: "background",
                attrs: {
                  fill: "var(--" + e.color + ")",
                  stroke: "transparent",
                  "stroke-width": e.stroke,
                  r: e.normalizedRadius,
                  cx: e.radius,
                  cy: e.radius,
                },
              }),
              n("circle", {
                style: { strokeDashoffset: e.strokeDashoffset },
                attrs: {
                  stroke: "var(--" + e.color + ")",
                  fill: "transparent",
                  "stroke-dasharray": e.circumference + " " + e.circumference,
                  "stroke-width": e.stroke,
                  r: e.normalizedRadius,
                  cx: e.radius,
                  cy: e.radius,
                },
              }),
            ]),
            e.icon
              ? n("v-icon", {
                  attrs: {
                    size: e.iconSize,
                    color: "--" + e.color,
                    name: e.icon,
                  },
                })
              : e._e(),
          ],
          1
        );
      },
      fo = [],
      mo = {
        name: "VProgressRing",
        props: {
          radius: { type: Number, default: 24 },
          stroke: { type: Number, default: 2 },
          progress: {
            type: Number,
            required: !0,
            validator: function (e) {
              return e >= 0 && e <= 100;
            },
          },
          color: { type: String, default: "blue-grey-600" },
          icon: { type: String, default: null },
        },
        data: function () {
          var e = this.radius - 2 * this.stroke,
            t = 2 * e * Math.PI;
          return { normalizedRadius: e, circumference: t };
        },
        computed: {
          strokeDashoffset: function () {
            return (
              this.circumference - (this.progress / 100) * this.circumference
            );
          },
          iconSize: function () {
            return 6 * Math.round(this.radius / 6);
          },
        },
      },
      po = mo,
      ho = (n("f45e"), Object(j["a"])(po, uo, fo, !1, null, "039ff59c", null)),
      go = ho.exports,
      yo = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "v-modal-base",
          {
            attrs: { title: e.title, message: e.message },
            on: {
              cancel: function (t) {
                return e.$emit("cancel");
              },
            },
          },
          [
            n(
              "div",
              {
                staticClass: "v-prompt",
                on: {
                  keydown: function (t) {
                    return !t.type.indexOf("key") &&
                      e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"])
                      ? null
                      : e.$emit("cancel");
                  },
                },
              },
              [
                e.multiline
                  ? n("v-textarea", {
                      staticClass: "input multiline",
                      attrs: {
                        autofocus: "",
                        placeholder: e.placeholder,
                        value: e.value,
                      },
                      on: {
                        input: function (t) {
                          return e.$emit("input", t);
                        },
                      },
                    })
                  : n("v-input", {
                      staticClass: "input",
                      attrs: {
                        autofocus: "",
                        value: e.value,
                        placeholder: e.placeholder,
                      },
                      on: {
                        input: e.emitValue,
                        keydown: function (t) {
                          return !t.type.indexOf("key") &&
                            e._k(t.keyCode, "enter", 13, t.key, "Enter")
                            ? null
                            : e.$emit("confirm");
                        },
                      },
                    }),
                e._t("default"),
                n(
                  "div",
                  { staticClass: "buttons" },
                  [
                    n(
                      "button",
                      {
                        staticClass: "cancel",
                        on: {
                          click: function (t) {
                            return e.$emit("cancel");
                          },
                        },
                      },
                      [e._v(" " + e._s(e.cancelText || e.$t("cancel")) + " ")]
                    ),
                    n(
                      "v-button",
                      {
                        staticClass: "confirm",
                        attrs: {
                          loading: e.loading,
                          disabled: e.required && e.disabled,
                        },
                        on: {
                          click: function (t) {
                            return e.$emit("confirm");
                          },
                        },
                      },
                      [e._v(" " + e._s(e.confirmText || e.$t("ok")) + " ")]
                    ),
                  ],
                  1
                ),
              ],
              2
            ),
          ]
        );
      },
      vo = [],
      bo =
        (n("25f0"),
        {
          name: "VPrompt",
          components: { VModalBase: I },
          props: {
            title: { type: String, required: !1 },
            message: { type: String, required: !1 },
            confirmText: { type: String, default: null },
            cancelText: { type: String, default: null },
            value: { type: String, default: null },
            multiline: { type: Boolean, default: !1 },
            required: { type: Boolean, default: !1 },
            placeholder: { type: String, default: "" },
            loading: { type: Boolean, default: !1 },
            safe: { type: Boolean, default: !1 },
          },
          computed: {
            disabled: function () {
              return null == this.value || 0 === this.value.length;
            },
          },
          methods: {
            emitValue: function (e) {
              this.safe &&
                (e = e
                  .toString()
                  .replace(/\s+/g, "_")
                  .replace(/[^\w_]+/g, "")
                  .replace(/__+/g, "_")
                  .replace(/^_+/, "")
                  .replace(/_+$/, "")
                  .toLowerCase()),
                this.$emit("input", e);
            },
          },
        }),
      _o = bo,
      jo = (n("79cc"), Object(j["a"])(_o, yo, vo, !1, null, "4910604c", null)),
      ko = jo.exports,
      wo = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "v-radio" }, [
          n("input", {
            attrs: {
              id: e.id,
              name: e.name,
              disabled: e.disabled,
              type: "radio",
            },
            domProps: { checked: e.shouldBeChecked, value: e.value },
            on: { change: e.updateInput },
          }),
          n("label", { attrs: { for: e.id } }, [e._v(e._s(e.label))]),
        ]);
      },
      Oo = [],
      $o = {
        model: { prop: "modelValue", event: "change" },
        props: {
          name: { type: String, required: !0 },
          id: { type: String, required: !0 },
          readonly: { type: Boolean, default: !1 },
          disabled: { type: Boolean, default: !1 },
          value: { type: String, required: !0 },
          modelValue: { type: String, default: "" },
          label: { type: String, required: !0 },
        },
        computed: {
          shouldBeChecked: function () {
            return this.modelValue === this.value;
          },
        },
        methods: {
          updateInput: function () {
            this.$emit("change", this.value);
          },
        },
      },
      xo = $o,
      So = (n("a4b0"), Object(j["a"])(xo, wo, Oo, !1, null, "e0142dfe", null)),
      Co = So.exports,
      Eo = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "v-select", class: { icon: e.icon } },
          [
            e.other
              ? n(
                  "select",
                  {
                    attrs: {
                      id: e.otherActive ? null : e.id,
                      disabled: e.disabled || e.readonly,
                    },
                    domProps: { value: e.value },
                    on: {
                      change: function (t) {
                        return e.change(t.target.value);
                      },
                    },
                  },
                  [
                    n(
                      "optgroup",
                      { attrs: { label: e.$t("values") } },
                      e._l(e.parsedOptions, function (t, a) {
                        return n("option", { key: a, domProps: { value: a } }, [
                          e._v(" " + e._s(t) + " "),
                        ]);
                      }),
                      0
                    ),
                    n("optgroup", { attrs: { label: e.$t("other") } }, [
                      n(
                        "option",
                        {
                          domProps: {
                            value: e.customValue || "__other",
                            selected: e.otherActive,
                          },
                        },
                        [
                          e._v(
                            " " +
                              e._s(
                                e.customValue.length
                                  ? e.customValue
                                  : e.$t("enter_value")
                              ) +
                              " "
                          ),
                        ]
                      ),
                    ]),
                  ]
                )
              : n(
                  "select",
                  {
                    ref: "select",
                    attrs: {
                      id: e.otherActive ? null : e.id,
                      disabled: e.disabled || e.readonly,
                    },
                    domProps: { value: e.value },
                    on: {
                      change: function (t) {
                        return e.change(t.target.value);
                      },
                    },
                  },
                  [
                    e.placeholder
                      ? n(
                          "option",
                          {
                            ref: "default",
                            attrs: { selected: "", disabled: "", value: "" },
                          },
                          [e._v(" " + e._s(e.placeholder) + " ")]
                        )
                      : e._e(),
                    e._l(e.parsedOptions, function (t, a) {
                      return n(
                        "option",
                        {
                          key: a,
                          domProps: { value: a, selected: e.value == a },
                        },
                        [e._v(" " + e._s(t) + " ")]
                      );
                    }),
                  ],
                  2
                ),
            e.otherActive
              ? n("input", {
                  directives: [{ name: "focus", rawName: "v-focus" }],
                  ref: "input",
                  attrs: {
                    id: e.id,
                    type: e.type,
                    placeholder: e.placeholder,
                    autofocus: "",
                  },
                  domProps: { value: e.customValue },
                  on: { input: e.changeCustom },
                })
              : e._e(),
            n(
              "div",
              { staticClass: "value" },
              [
                e.icon ? n("v-icon", { attrs: { name: e.icon } }) : e._e(),
                e.placeholder && !e.value
                  ? n("span", { staticClass: "placeholder" }, [
                      e._v(e._s(e.placeholder)),
                    ])
                  : e._e(),
                e.parsedOptions[e.value]
                  ? n("span", { staticClass: "no-wrap" }, [
                      e._v(e._s(e.parsedOptions[e.value])),
                    ])
                  : n("span", { staticClass: "no-wrap" }, [
                      e._v(e._s(e.value)),
                    ]),
              ],
              1
            ),
            n("v-icon", {
              staticClass: "chevron",
              attrs: { name: "arrow_drop_down" },
            }),
          ],
          1
        );
      },
      Po = [],
      To = {
        name: "VSelect",
        props: {
          disabled: { type: Boolean, default: !1 },
          readonly: { type: Boolean, default: !1 },
          name: { type: String, default: "" },
          id: { type: String, default: "" },
          value: { type: [String, Number], default: "" },
          other: { type: Boolean, default: !1 },
          icon: { type: String, default: "" },
          type: { type: String, default: "" },
          options: { type: [Object, String, Array], required: !0 },
          placeholder: { type: String, default: "Choose one..." },
          defaultValue: { type: Boolean, default: !1 },
        },
        data: function () {
          return { otherActive: !1, customValue: "" };
        },
        computed: {
          parsedOptions: function () {
            return "string" === typeof this.options
              ? JSON.parse(this.options)
              : this.options;
          },
        },
        methods: {
          change: function (e) {
            if (e === this.customValue || "__other" === e)
              return (
                this.$emit("input", this.customValue),
                void (this.otherActive = !0)
              );
            (this.otherActive = !1),
              this.$emit("input", e),
              !0 === this.defaultValue &&
                (this.$refs.default.setAttribute("selected", "selected"),
                (this.$refs.select.value = ""));
          },
          changeCustom: function (e) {
            (this.customValue = e.target.value),
              this.$emit("input", this.customValue);
          },
        },
      },
      Io = To,
      No = (n("71db"), Object(j["a"])(Io, Eo, Po, !1, null, "ef6a9b26", null)),
      Ao = No.exports,
      Ro = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "v-sheet", style: e.styles },
          [e._t("default")],
          2
        );
      },
      Do = [],
      Lo = Object(g["b"])({
        props: {
          color: { type: String, default: "--input-background-color-alt" },
          minHeight: { type: Number, default: null },
          maxHeight: { type: Number, default: null },
          height: { type: Number, default: null },
          minWidth: { type: Number, default: null },
          maxWidth: { type: Number, default: null },
          width: { type: Number, default: null },
        },
        setup: function (e) {
          var t = Object(g["a"])(function () {
            var t = { "--_v-sheet-color": U(e.color) };
            return (
              e.minHeight && (t["--_v-sheet-min-height"] = e.minHeight + "px"),
              e.maxHeight && (t["--_v-sheet-max-height"] = e.maxHeight + "px"),
              e.height && (t["--_v-sheet-height"] = e.height + "px"),
              e.minWidth && (t["--_v-sheet-min-width"] = e.minWidth + "px"),
              e.maxWidth && (t["--_v-sheet-max-width"] = e.maxWidth + "px"),
              e.width && (t["--_v-sheet-width"] = e.width + "px"),
              t
            );
          });
          return { styles: t };
        },
      }),
      Fo = Lo,
      Uo = (n("a64e"), Object(j["a"])(Fo, Ro, Do, !1, null, "6244d446", null)),
      Bo = Uo.exports,
      Ko = Bo,
      Mo = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "v-simple-select" }, [
          n(
            "select",
            {
              ref: "selectElement",
              attrs: { disabled: e.disabled },
              domProps: { value: e.value },
              on: { change: e.stageValue },
            },
            [
              n(
                "option",
                {
                  attrs: { disabled: "", value: "" },
                  domProps: { selected: null == e.value },
                },
                [e._v(" " + e._s(e.placeholder || "--") + " ")]
              ),
              e._t("default"),
            ],
            2
          ),
          n(
            "div",
            { staticClass: "preview" },
            [
              e.value
                ? [e._v(" " + e._s(e.valueText) + " ")]
                : n("span", { staticClass: "placeholder" }, [
                    e._v(e._s(e.placeholder || "--")),
                  ]),
              n("v-icon", {
                staticClass: "icon",
                attrs: { name: "arrow_drop_down" },
              }),
            ],
            2
          ),
        ]);
      },
      Vo = [],
      qo =
        (n("a630"),
        n("498a"),
        {
          name: "VSimpleSelect",
          props: {
            value: { type: String, default: null },
            placeholder: { type: String, default: null },
            disabled: { type: Boolean, default: !1 },
          },
          data: function () {
            return { valueNames: {} };
          },
          computed: {
            valueText: function () {
              return this.valueNames[this.value];
            },
          },
          watch: {
            value: function () {
              this.getValueNames();
            },
          },
          mounted: function () {
            this.getValueNames();
          },
          updated: function () {
            this.getValueNames();
          },
          methods: {
            stageValue: function (e) {
              this.$emit("input", e.target.value);
            },
            getValueNames: function () {
              var e = this.$refs.selectElement,
                t = {},
                n = Array.from(e.querySelectorAll("option"));
              n.forEach(function (e) {
                t[e.value.trim()] = e.innerText.trim();
              }),
                Object(o["isEqual"])(t, this.valueNames) ||
                  (this.valueNames = t);
            },
          },
        }),
      zo = qo,
      Ho = (n("00e5"), Object(j["a"])(zo, Mo, Vo, !1, null, "82de7f22", null)),
      Jo = Ho.exports,
      Wo = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "v-slider" }, [
          n("div", { staticClass: "input" }, [
            n("input", {
              attrs: {
                id: e.id,
                name: e.id,
                min: e.min,
                max: e.max,
                step: e.step,
                type: "range",
              },
              domProps: { value: e.value },
              on: {
                input: function (t) {
                  e.$emit("input", Number(t.target.value));
                },
              },
            }),
            n("div", { ref: "track", staticClass: "track-wrapper" }, [
              n("div", {
                staticClass: "track-fill",
                style: { width: 100 * e.progress + "%" },
              }),
            ]),
            n("div", { staticClass: "output-container" }, [
              n(
                "output",
                {
                  class: { "output-shown": e.alwaysShowOutput },
                  style: { left: 100 * e.progress + "%" },
                  attrs: { for: e.id },
                },
                [e._v(" " + e._s(e.valueOrDefault) + " " + e._s(e.unit) + " ")]
              ),
            ]),
          ]),
        ]);
      },
      Go = [],
      Yo = {
        name: "VSlider",
        props: {
          id: { type: String, default: null },
          value: { type: Number, default: null },
          min: { type: Number, default: 0 },
          max: { type: Number, default: 100 },
          step: { type: [Number, String], default: 1 },
          unit: { type: String, default: null },
          alwaysShowOutput: { type: Boolean, default: !1 },
        },
        data: function () {
          return { valuePos: 0 };
        },
        computed: {
          valueOrDefault: function () {
            return null == this.value ? (this.max - this.min) / 2 : this.value;
          },
          progress: function () {
            return (
              Math.round(
                ((this.valueOrDefault - this.min) / (this.max - this.min)) * 100
              ) / 100
            );
          },
        },
      },
      Zo = Yo,
      Qo = (n("bdc0"), Object(j["a"])(Zo, Wo, Go, !1, null, "3f805988", null)),
      Xo = Qo.exports,
      ei = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", {
          staticClass: "v-spinner",
          class: e.sizeClass,
          style: e.styles,
        });
      },
      ti = [],
      ni = Object(g["b"])({
        props: {
          color: { type: String, default: "--loading-background-color-accent" },
          backgroundColor: {
            type: String,
            default: "--loading-background-color",
          },
          size: { type: Number, default: null },
          lineSize: { type: Number, default: null },
          speed: { type: String, default: "1s" },
          xSmall: { type: Boolean, default: !1 },
          small: { type: Boolean, default: !1 },
          large: { type: Boolean, default: !1 },
          xLarge: { type: Boolean, default: !1 },
        },
        setup: function (e) {
          var t = Object(g["a"])(function () {
              var t = {
                "--_v-spinner-color": U(e.color),
                "--_v-spinner-background-color": U(e.backgroundColor),
                "--_v-spinner-speed": e.speed,
              };
              return (
                e.size && (t["--_v-spinner-size"] = "".concat(e.size, "px")),
                e.lineSize &&
                  (t["--_v-spinner-line-size"] = "".concat(e.lineSize, "px")),
                t
              );
            }),
            n = Object(g["a"])(function () {
              return e.xSmall
                ? "x-small"
                : e.small
                ? "small"
                : e.large
                ? "large"
                : e.xLarge
                ? "x-large"
                : null;
            });
          return { styles: t, sizeClass: n };
        },
      }),
      ai = ni,
      oi = (n("0df0"), Object(j["a"])(ai, ei, ti, !1, null, "3baad8ad", null)),
      ii = oi.exports,
      ri = ii,
      si = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "button",
          {
            staticClass: "v-switch",
            style: e.colorStyle,
            attrs: {
              type: "button",
              role: "switch",
              "aria-pressed": e.isChecked ? "true" : "false",
              disabled: e.disabled,
            },
            on: { click: e.toggleInput },
          },
          [
            n("span", { staticClass: "switch" }),
            n(
              "span",
              { staticClass: "label" },
              [e._t("label", [e._v(e._s(e.label))])],
              2
            ),
          ]
        );
      },
      ci = [],
      li = Object(g["b"])({
        model: { prop: "inputValue", event: "change" },
        props: {
          value: { type: String, default: null },
          inputValue: { type: [Boolean, Array], default: !1 },
          label: { type: String, default: null },
          color: { type: String, default: "--input-background-color-active" },
          disabled: { type: Boolean, default: !1 },
        },
        setup: function (e, t) {
          var n = t.emit,
            a = Object(g["a"])(function () {
              return e.inputValue instanceof Array
                ? e.inputValue.includes(e.value)
                : !0 === e.inputValue;
            }),
            o = Object(g["a"])(function () {
              return { "--_v-switch-color": U(e.color) };
            });
          return { isChecked: a, toggleInput: i, colorStyle: o };
          function i() {
            if (e.inputValue instanceof Array) {
              var t = Object(re["a"])(e.inputValue);
              !1 === a.value
                ? t.push(e.value)
                : t.splice(t.indexOf(e.value), 1),
                n("change", t);
            } else n("change", !a.value);
          }
        },
      }),
      ui = li,
      di = (n("549d"), Object(j["a"])(ui, si, ci, !1, null, "c205c880", null)),
      fi = di.exports,
      mi = fi,
      pi = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            ref: "container",
            staticClass: "v-table",
            class: { loading: e.loading },
            style: { minWidth: e.totalWidth + "px" },
            on: { scroll: e.onScroll },
          },
          [
            n(
              "div",
              { staticClass: "toolbar", class: { shadow: e.scrolled } },
              [
                e.manualSortField
                  ? n(
                      "div",
                      {
                        staticClass: "manual-sort cell",
                        class: { active: e.manualSorting },
                      },
                      [
                        n(
                          "button",
                          {
                            directives: [
                              {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: e.$t("enable_manual_sorting"),
                                expression: "$t('enable_manual_sorting')",
                              },
                            ],
                            on: { click: e.startManualSorting },
                          },
                          [n("v-icon", { attrs: { name: "sort" } })],
                          1
                        ),
                      ]
                    )
                  : e._e(),
                e.selectable
                  ? n(
                      "div",
                      { staticClass: "select cell" },
                      [
                        n("v-checkbox", {
                          attrs: {
                            id: "select-all",
                            inputValue: e.allSelected,
                            name: "select-all",
                            value: "all",
                          },
                          on: { change: e.selectAll },
                        }),
                      ],
                      1
                    )
                  : e._e(),
                e._l(e.columns, function (t, a) {
                  var o = t.field,
                    i = t.name;
                  return n(
                    "div",
                    {
                      key: o,
                      staticClass: "cell",
                      style: {
                        flexBasis:
                          e.widths && e.widths[o] ? e.widths[o] + "px" : null,
                      },
                    },
                    [
                      e.sortable && !e.isRelational(e.columns[a].fieldInfo)
                        ? n(
                            "button",
                            {
                              staticClass: "sort type-table-head no-wrap",
                              class: { active: e.sortVal.field === o },
                              on: {
                                click: function (t) {
                                  return e.updateSort(o);
                                },
                              },
                            },
                            [
                              e._v(
                                " " +
                                  e._s(
                                    e.widths[o] > 40
                                      ? e.$helpers.formatField(
                                          o,
                                          e.columns[a].fieldInfo.collection
                                        )
                                      : null
                                  ) +
                                  " "
                              ),
                              n("v-icon", {
                                staticClass: "sort-icon",
                                class: e.sortVal.asc ? "asc" : "desc",
                                attrs: {
                                  color: "--input-border-color-hover",
                                  name: "sort",
                                },
                              }),
                            ],
                            1
                          )
                        : n(
                            "span",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value: e.isRelational(e.columns[a].fieldInfo)
                                    ? e.$t("cant_sort_by_this_field")
                                    : void 0,
                                  expression:
                                    "\n\t\t\t\t\tisRelational(columns[index].fieldInfo)\n\t\t\t\t\t\t? $t('cant_sort_by_this_field')\n\t\t\t\t\t\t: undefined\n\t\t\t\t",
                                },
                              ],
                              staticClass: "type-table-head",
                            },
                            [
                              e._v(
                                " " + e._s(e.widths[o] > 40 ? i : null) + " "
                              ),
                            ]
                          ),
                      e.resizeable && a !== e.columns.length - 1
                        ? n(
                            "div",
                            {
                              staticClass: "drag-handle",
                              attrs: { draggable: "" },
                              on: {
                                drag: function (t) {
                                  return e.drag(o, t);
                                },
                                dragstart: e.hideDragImage,
                                dragend: e.dragEnd,
                              },
                            },
                            [n("div", { staticClass: "drag-handle-line" })]
                          )
                        : e._e(),
                    ]
                  );
                }),
              ],
              2
            ),
            n(
              "div",
              {
                staticClass: "body",
                class: { loading: e.loading, dragging: e.dragging },
              },
              [
                e.loading && 0 === e.items.length
                  ? n(
                      "div",
                      { staticClass: "loader" },
                      e._l(50, function (t) {
                        return n("div", {
                          key: t,
                          staticClass: "row",
                          style: { height: e.rowHeight + "px" },
                        });
                      }),
                      0
                    )
                  : e._e(),
                n(
                  e.manualSorting ? "draggable" : "div",
                  {
                    tag: "component",
                    attrs: { options: { handle: ".manual-sort" } },
                    on: { start: e.startSort, end: e.saveSort },
                    model: {
                      value: e.itemsManuallySorted,
                      callback: function (t) {
                        e.itemsManuallySorted = t;
                      },
                      expression: "itemsManuallySorted",
                    },
                  },
                  [
                    e.link
                      ? e._l(e.itemsArray, function (t) {
                          return n(
                            "div",
                            {
                              key: t[e.primaryKeyField],
                              staticClass: "link row",
                              class: {
                                selected:
                                  e.selection &&
                                  e.selection.includes(t[e.primaryKeyField]),
                              },
                              style: { height: e.rowHeight + "px" },
                              attrs: { tabindex: "0", role: "link" },
                              on: {
                                click: function (n) {
                                  return (
                                    n.stopPropagation(),
                                    e.$router.push(t[e.link])
                                  );
                                },
                                keyup: function (n) {
                                  return !n.type.indexOf("key") &&
                                    e._k(n.keyCode, "enter", 13, n.key, "Enter")
                                    ? null
                                    : (n.stopPropagation(),
                                      e.$router.push(t[e.link]));
                                },
                              },
                            },
                            [
                              e.manualSortField
                                ? n(
                                    "div",
                                    {
                                      staticClass: "manual-sort cell",
                                      class: { active: e.manualSorting },
                                      on: {
                                        click: function (e) {
                                          e.stopPropagation(),
                                            e.preventDefault();
                                        },
                                      },
                                    },
                                    [
                                      n("v-icon", {
                                        attrs: { name: "drag_handle" },
                                      }),
                                    ],
                                    1
                                  )
                                : e._e(),
                              e.selectable
                                ? n(
                                    "div",
                                    {
                                      staticClass: "cell select",
                                      on: {
                                        click: function (e) {
                                          e.stopPropagation();
                                        },
                                      },
                                    },
                                    [
                                      n("v-checkbox", {
                                        attrs: {
                                          id: "check-" + t[e.primaryKeyField],
                                          value: "" + t[e.primaryKeyField],
                                          inputValue: e.selection.includes(
                                            t[e.primaryKeyField]
                                          ),
                                        },
                                        on: {
                                          change: function (n) {
                                            return e.toggleCheckbox(
                                              t[e.primaryKeyField]
                                            );
                                          },
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : e._e(),
                              e._l(e.columns, function (a) {
                                var o = a.field,
                                  i = a.fieldInfo;
                                return n(
                                  "div",
                                  {
                                    key: o,
                                    staticClass: "cell",
                                    style: {
                                      flexBasis:
                                        e.widths && e.widths[o]
                                          ? e.widths[o] + "px"
                                          : null,
                                    },
                                  },
                                  [
                                    ("" === t[o] || e.isNil(t[o])) &&
                                    i &&
                                    "alias" !== i.type.toLowerCase()
                                      ? n("div", { staticClass: "empty" }, [
                                          e._v(" -- "),
                                        ])
                                      : e.useInterfaces &&
                                        (!e.isNil(t[o]) ||
                                          (i &&
                                            "alias" === i.type.toLowerCase()))
                                      ? n("v-ext-display", {
                                          staticClass: "ellipsis",
                                          attrs: {
                                            id: o,
                                            "interface-type": i.interface,
                                            name: o,
                                            values: t,
                                            collection: e.collection,
                                            type: i.type,
                                            datatype: i.datatype,
                                            options: i.options,
                                            value: t[o],
                                            relation: i.relation,
                                          },
                                        })
                                      : [e._v(" " + e._s(t[o]) + " ")],
                                  ],
                                  2
                                );
                              }),
                            ],
                            2
                          );
                        })
                      : e._l(e.itemsArray, function (t) {
                          return n(
                            "div",
                            {
                              key: t[e.primaryKeyField],
                              staticClass: "row",
                              style: { height: e.rowHeight + "px" },
                            },
                            [
                              e.selectable
                                ? n(
                                    "div",
                                    {
                                      staticClass: "select",
                                      on: {
                                        click: function (e) {
                                          e.stopPropagation();
                                        },
                                      },
                                    },
                                    [
                                      n("v-checkbox", {
                                        attrs: {
                                          id: "check-" + t[e.primaryKeyField],
                                          value: "" + t[e.primaryKeyField],
                                          inputValue: e.selection.includes(
                                            t[e.primaryKeyField]
                                          ),
                                        },
                                        on: {
                                          change: function (n) {
                                            return e.toggleCheckbox(
                                              t[e.primaryKeyField]
                                            );
                                          },
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : e._e(),
                              e._l(e.columns, function (a) {
                                var o = a.field,
                                  i = a.fieldInfo;
                                return n(
                                  "div",
                                  {
                                    key: o,
                                    staticClass: "cell",
                                    style: {
                                      flexBasis:
                                        e.widths && e.widths[o]
                                          ? e.widths[o] + "px"
                                          : null,
                                    },
                                  },
                                  [
                                    "" === t[o] || e.isNil(t[o])
                                      ? n("div", { staticClass: "empty" }, [
                                          e._v(" -- "),
                                        ])
                                      : e.useInterfaces && !e.isNil(t[o])
                                      ? n("v-ext-display", {
                                          attrs: {
                                            id: o,
                                            "interface-type": i.interface,
                                            name: o,
                                            collection: e.collection,
                                            type: i.type,
                                            options: i.options,
                                            value: t[o],
                                          },
                                        })
                                      : [e._v(" " + e._s(t[o]) + " ")],
                                  ],
                                  2
                                );
                              }),
                            ],
                            2
                          );
                        }),
                  ],
                  2
                ),
              ],
              1
            ),
            n("transition", { attrs: { name: "fade" } }, [
              e.lazyLoading
                ? n(
                    "div",
                    { staticClass: "lazy-loader" },
                    [
                      n("v-spinner", {
                        attrs: {
                          color: "--blue-grey-300",
                          "background-color": "--blue-grey-200",
                        },
                      }),
                    ],
                    1
                  )
                : e._e(),
            ]),
          ],
          1
        );
      },
      hi = [];
    n("13d5"), n("45fc");
    function gi(e) {
      var t;
      if (!e) return !1;
      var n = null === (t = e.type) || void 0 === t ? void 0 : t.toLowerCase();
      switch (n) {
        case "o2m":
        case "m2o":
        case "user":
        case "owner":
        case "user_updated":
        case "alias":
        case "translation":
        case "file":
          return !0;
        default:
          return !1;
      }
    }
    var yi = {
        name: "VTable",
        props: {
          loading: { type: Boolean, default: !1 },
          lazyLoading: { type: Boolean, default: !1 },
          items: { type: Array, required: !0 },
          height: { type: Number, default: null },
          columns: { type: Array, required: !0 },
          link: { type: String, default: null },
          selection: { type: Array, default: null },
          sortVal: { type: Object, default: null },
          manualSortField: { type: String, default: null },
          primaryKeyField: { type: String, required: !0 },
          rowHeight: { type: Number, default: 48 },
          columnWidths: { type: Object, default: null },
          useInterfaces: { type: Boolean, default: !1 },
          collection: { type: String, default: null },
        },
        data: function () {
          return {
            widths: {},
            lastDragXPosition: null,
            windowHeight: 0,
            scrolled: !1,
            dragging: !1,
            manualSorting: !1,
            itemsManuallySorted: [],
          };
        },
        computed: {
          allSelected: function () {
            var e = this,
              t = this.items
                .map(function (t) {
                  return t[e.primaryKeyField];
                })
                .sort(),
              n = Object(re["a"])(this.selection);
            return (
              n.sort(), this.selection.length > 0 && Object(o["isEqual"])(t, n)
            );
          },
          selectable: function () {
            return Array.isArray(this.selection);
          },
          sortable: function () {
            return Object(o["isObject"])(this.sortVal);
          },
          resizeable: function () {
            return Object(o["isObject"])(this.columnWidths);
          },
          totalWidth: function () {
            var e = this;
            return (
              Object.keys(this.widths)
                .map(function (t) {
                  return e.widths[t];
                })
                .reduce(function (e, t) {
                  return e + t;
                }, 0) +
              30 +
              40 +
              (this.manualSorting ? 38 : 0)
            );
          },
          itemsArray: function () {
            return this.manualSorting ? this.itemsManuallySorted : this.items;
          },
        },
        watch: {
          columnWidths: function () {
            this.initWidths();
          },
          columns: function () {
            this.initWidths();
          },
          items: function (e) {
            this.itemsManuallySorted = e;
          },
        },
        created: function () {
          this.initWidths(),
            this.manualSortField &&
              this.sortVal &&
              this.sortVal.field === this.manualSortField &&
              !0 === this.sortVal.asc &&
              ((this.manualSorting = !0),
              (this.itemsManuallySorted = this.items));
        },
        methods: {
          isRelational: gi,
          isNil: function (e) {
            return Object(o["isNil"])(e);
          },
          selectAll: function () {
            var e = this;
            if (this.allSelected) return this.$emit("select", []);
            var t = this.items.map(function (t) {
              return t[e.primaryKeyField];
            });
            return this.$emit("select", t);
          },
          updateSort: function (e, t) {
            if (((this.manualSorting = !1), t)) {
              var n = { field: e, asc: "asc" === t };
              return this.$emit("sort", n);
            }
            var a = {
              field: e,
              asc: e === this.sortVal.field ? !this.sortVal.asc : "ASC",
            };
            this.$emit("sort", a);
          },
          toggleCheckbox: function (e) {
            var t = Object(re["a"])(this.selection);
            this.selection.includes(e) ? t.splice(t.indexOf(e), 1) : t.push(e),
              this.$emit("select", t);
          },
          drag: function (e, t) {
            var n = t.screenX;
            if (0 !== n && this.lastDragXPosition) {
              var a = n - this.lastDragXPosition,
                o = this.widths[e] + a;
              this.widths[e] = o;
            }
            this.lastDragXPosition = n;
          },
          dragEnd: function () {
            (this.lastDragXPosition = 0), this.$emit("widths", this.widths);
          },
          hideDragImage: function (e) {
            var t = document.createElement("img");
            (t.src =
              "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
              e.dataTransfer.setDragImage(t, 0, 0),
              (e.dataTransfer.effectAllowed = "move"),
              e.dataTransfer.setData("text/plain", null);
          },
          initWidths: function () {
            var e = this,
              t = {};
            this.columns.forEach(function (n) {
              var a = n.field,
                o = (e.columnWidths && e.columnWidths[a]) || 200;
              t[a] = o > 0 ? o : 200;
            }),
              (this.widths = t);
          },
          onScroll: function (e) {
            var t = e.srcElement,
              n = t.scrollHeight,
              a = t.clientHeight,
              o = t.scrollTop,
              i = n - a,
              r = i - o;
            r <= 500 && this.$emit("scroll-end"), (this.scrolled = o > 0);
          },
          startManualSorting: function () {
            this.manualSorting
              ? (this.manualSorting = !1)
              : (this.updateSort(this.manualSortField, "asc"),
                (this.manualSorting = !0));
          },
          startSort: function () {
            this.dragging = !0;
          },
          saveSort: function () {
            var e = this;
            return (
              (this.dragging = !1),
              this.itemsManuallySorted.some(function (t) {
                return null == t[e.manualSortField];
              })
                ? this.$emit(
                    "input",
                    this.itemsManuallySorted.map(function (t, n) {
                      var a;
                      return (
                        (a = {}),
                        Object(Ne["a"])(
                          a,
                          e.primaryKeyField,
                          t[e.primaryKeyField]
                        ),
                        Object(Ne["a"])(a, e.manualSortField, n + 1),
                        a
                      );
                    })
                  )
                : this.$emit(
                    "input",
                    this.itemsManuallySorted.map(function (t, n) {
                      var a;
                      return (
                        (a = {}),
                        Object(Ne["a"])(
                          a,
                          e.primaryKeyField,
                          t[e.primaryKeyField]
                        ),
                        Object(Ne["a"])(
                          a,
                          e.manualSortField,
                          e.items[n][e.manualSortField]
                        ),
                        a
                      );
                    })
                  )
            );
          },
        },
      },
      vi = yi,
      bi = (n("fe8e"), Object(j["a"])(vi, pi, hi, !1, null, "50f4c9b3", null)),
      _i = bi.exports,
      ji = function (e, t) {
        var n = t._c;
        return t.props.clickable
          ? n("button", t._g({}, t.listeners), [t._t("default")], 2)
          : n("span", [t._t("default")], 2);
      },
      ki = [],
      wi = {
        name: "VTag",
        props: { clickable: { type: Boolean, default: !1 } },
      },
      Oi = wi,
      $i = (n("3b49"), n("9cc7")),
      xi = n.n($i),
      Si = Object(j["a"])(Oi, ji, ki, !0, null, "1f9e4926", null);
    "function" === typeof xi.a && xi()(Si);
    var Ci = Si.exports,
      Ei = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("textarea", {
          staticClass: "v-textarea",
          class: [e.serif ? "type-body-serif" : "type-body-sans"],
          attrs: {
            id: e.id,
            cols: e.cols,
            disabled: e.disabled,
            maxlength: e.maxlength,
            minlength: e.minlength,
            name: e.name,
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            rows: e.rows,
            spellcheck: e.spellcheck,
            wrap: e.wrap,
            autofocus: e.autofocus,
          },
          domProps: { value: e.value },
          on: {
            keydown: function (t) {
              return e.$emit("keydown", t.target.value);
            },
            input: function (t) {
              return e.$emit("input", t.target.value);
            },
          },
        });
      },
      Pi = [],
      Ti = {
        name: "VTextarea",
        props: {
          cols: { type: Number, default: 20 },
          disabled: { type: Boolean, default: !1 },
          maxlength: { type: Number, default: null },
          minlength: { type: Number, default: null },
          name: { type: String, default: null },
          id: { type: String, default: null },
          placeholder: { type: String, default: null },
          readonly: { type: Boolean, default: !1 },
          required: { type: Boolean, default: !1 },
          rows: { type: Number, default: null },
          serif: { type: Boolean, default: !1 },
          spellcheck: { type: Boolean, default: null },
          wrap: { type: String, default: null },
          value: { type: String, default: null },
          autofocus: { type: String, default: null },
        },
      },
      Ii = Ti,
      Ni = (n("fdf3"), Object(j["a"])(Ii, Ei, Pi, !1, null, "c7c933de", null)),
      Ai = Ni.exports,
      Ri = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            staticClass: "v-upload",
            class: { uploading: e.uploading, disabled: e.disabled },
          },
          [
            n("input", {
              ref: "select",
              staticClass: "select",
              attrs: {
                disabled: e.disabled,
                type: "file",
                accept: e.accept,
                multiple: e.multiple,
              },
              on: {
                change: function (t) {
                  return e.filesChange(t.target.files);
                },
              },
            }),
            n("div", { staticClass: "dropzone", class: { smaller: e.small } }, [
              n(
                "div",
                { staticClass: "icon" },
                [
                  n("v-icon", {
                    attrs: {
                      name: "cloud_upload",
                      size: e.uploading ? 32 : 100,
                      color: "--input-icon-color",
                    },
                  }),
                ],
                1
              ),
              n("div", { staticClass: "info" }, [
                n("p", { staticClass: "name type-heading-small" }, [
                  e._v(e._s(e.$tc("drop_files", e.multiple ? 2 : 1))),
                ]),
                n("p", { staticClass: "file-info no-wrap" }, [
                  e._v(
                    " " +
                      e._s(
                        e.$t("max_size", {
                          size: e.$helpers.filesize(
                            e.$store.state.serverInfo.maxUploadSize
                          ),
                        })
                      ) +
                      " "
                  ),
                ]),
              ]),
              n("div", { staticClass: "buttons" }, [
                e.embed
                  ? n(
                      "form",
                      {
                        staticClass: "embed-input",
                        on: {
                          submit: function (t) {
                            return t.preventDefault(), e.saveEmbed(t);
                          },
                        },
                      },
                      [
                        n("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.embedLink,
                              expression: "embedLink",
                            },
                          ],
                          attrs: {
                            type: "url",
                            placeholder: e.$t("embed_placeholder"),
                          },
                          domProps: { value: e.embedLink },
                          on: {
                            input: function (t) {
                              t.target.composing ||
                                (e.embedLink = t.target.value);
                            },
                          },
                        }),
                        n("button", { attrs: { type: "submit" } }, [
                          e._v("Save"),
                        ]),
                      ]
                    )
                  : e._e(),
                n(
                  "button",
                  {
                    on: {
                      click: function (t) {
                        e.embed = !e.embed;
                      },
                    },
                  },
                  [
                    n("v-icon", {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip",
                          value: e.$t("embed"),
                          expression: "$t('embed')",
                        },
                      ],
                      staticClass: "select",
                      attrs: { name: "link" },
                    }),
                  ],
                  1
                ),
                n(
                  "button",
                  {
                    on: {
                      click: function (t) {
                        return e.$refs.select.click();
                      },
                    },
                  },
                  [
                    n("v-icon", {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip",
                          value: e.$t("select_from_device"),
                          expression: "$t('select_from_device')",
                        },
                      ],
                      staticClass: "material-icons select",
                      attrs: { name: "devices" },
                    }),
                  ],
                  1
                ),
              ]),
            ]),
            n(
              "transition-group",
              { attrs: { tag: "ol", name: "list" } },
              e._l(e.files, function (t) {
                return n(
                  "li",
                  { key: t.id, staticClass: "list-item" },
                  [
                    n("v-progress-ring", {
                      staticClass: "icon",
                      attrs: {
                        progress: t.progress,
                        icon:
                          null !== t.error
                            ? "cloud_off"
                            : 100 === t.progress
                            ? "cloud_done"
                            : "cloud_upload",
                        color:
                          null !== t.error
                            ? "danger"
                            : 100 === t.progress
                            ? "success"
                            : "accent",
                        stroke: 100 === t.progress ? 0 : 2,
                      },
                    }),
                    n("div", { staticClass: "info" }, [
                      n("p", { staticClass: "name no-wrap" }, [
                        e._v(e._s(t.name)),
                      ]),
                      n("p", { staticClass: "file-info no-wrap" }, [
                        e._v(" " + e._s(t.size) + " "),
                        t.progress && 100 !== t.progress
                          ? n("span", { staticClass: "progress" }, [
                              e._v(" " + e._s(t.progress) + "% "),
                            ])
                          : e._e(),
                      ]),
                    ]),
                  ],
                  1
                );
              }),
              0
            ),
            n("input", {
              ref: "drop",
              staticClass: "drop",
              attrs: {
                disabled: e.disabled,
                type: "file",
                accept: e.accept,
                multiple: e.multiple,
              },
              on: {
                click: function (e) {
                  e.preventDefault();
                },
                change: function (t) {
                  return e.filesChange(t.target.files);
                },
              },
            }),
          ],
          1
        );
      },
      Di = [],
      Li = (n("baa5"), n("49d5")),
      Fi = n.n(Li);
    function Ui(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function Bi(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ui(Object(n), !0).forEach(function (t) {
              Object(Ne["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Ui(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var Ki = {
        name: "VUpload",
        props: {
          accept: { type: String },
          multiple: { type: Boolean, default: !0 },
          small: { type: Boolean, default: !1 },
          disabled: { type: Boolean, default: !1 },
        },
        data: function () {
          return { files: {}, embedLink: null, embed: !1 };
        },
        computed: {
          acceptTypesList: function () {
            return this.accept ? this.accept.trim().split(/\s*,\s*/) : [];
          },
          uploading: function () {
            return Object.keys(this.files).length > 0;
          },
        },
        methods: {
          saveEmbed: function () {
            var e = this,
              t = this.$helpers.shortid.generate(),
              n = this.embedLink.substring(this.embedLink.lastIndexOf("/") + 1);
            (this.files = Bi(
              Object(Ne["a"])({}, t, {
                id: t,
                name: n,
                size: null,
                progress: 0,
                type: null,
                error: null,
              }),
              this.files
            )),
              this.$api
                .createItem("directus_files", { data: this.embedLink })
                .then(function (e) {
                  return e.data;
                })
                .then(function (n) {
                  var a = n.filesize,
                    o = n.type,
                    i = n.title;
                  return (
                    (e.files = Bi(
                      Object(Ne["a"])({}, t, {
                        id: t,
                        name: i,
                        size: a,
                        progress: 100,
                        type: o,
                        error: null,
                      }),
                      e.files
                    )),
                    n
                  );
                })
                .then(function (n) {
                  e.$emit("upload", Bi({}, e.files[t], { data: n }));
                })
                .then(function () {
                  return (e.embed = !1);
                })
                .then(function () {
                  return (e.embedLink = null);
                })
                .catch(function (t) {
                  e.$events.emit("error", {
                    notify: e.$t("something_went_wrong_body"),
                    error: t,
                  });
                });
          },
          filesChange: function (e) {
            e && e.length && Array.from(e).forEach(this.save);
          },
          save: function (e) {
            var t = this,
              n = this.$helpers.shortid.generate(),
              a = new FormData(),
              o = e.name,
              i = e.size,
              r = e.type;
            -1 !== i && i > this.$store.state.serverInfo.maxUploadSize
              ? this.$events.emit("warning", {
                  notify: this.$t("upload_exceeds_max_size", { filename: o }),
                })
              : this.acceptTypesList.length > 0 &&
                !this.acceptTypesList.includes(r)
              ? this.$events.emit("warning", {
                  notify: this.$t("file_type_not_accepted", { filename: o }),
                })
              : (a.append("data", e, o),
                (this.files = Bi(
                  Object(Ne["a"])({}, n, {
                    id: n,
                    name: o,
                    size: Fi()(i),
                    type: r,
                    progress: 0,
                    error: null,
                  }),
                  this.files
                )),
                this.$api
                  .uploadFiles(a, function (e) {
                    var a = e.loaded,
                      o = e.total,
                      i = Math.min(Math.round((100 * a) / o), 95);
                    t.files[n].progress = i;
                  })
                  .then(function (e) {
                    return e.data;
                  })
                  .then(function (e) {
                    (t.files[n].progress = 100),
                      t.$emit("upload", Bi({}, t.files[n], { data: e })),
                      (t.$refs.select.value = ""),
                      (t.$refs.drop.value = "");
                  })
                  .catch(function (e) {
                    var a;
                    (t.files[n].error = e),
                      (a = e.message
                        ? e.message
                        : t.$t("something_went_wrong_body")),
                      t.$events.emit("error", { notify: a, error: e });
                  }));
          },
        },
      },
      Mi = Ki,
      Vi = (n("1944"), Object(j["a"])(Mi, Ri, Di, !1, null, "0fc62acb", null)),
      qi = Vi.exports,
      zi = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "v-popover",
          {
            staticClass: "user-popover",
            attrs: {
              trigger: "hover",
              delay: { show: 300, hide: 0 },
              placement: e.placement,
              "boundaries-element": e.boundariesElement,
            },
            on: { show: e.fetchUser },
          },
          [
            e._t("default"),
            n(
              "router-link",
              {
                staticClass: "popover",
                attrs: {
                  slot: "popover",
                  to: "/" + e.currentProjectKey + "/users/" + e.id,
                },
                slot: "popover",
              },
              [
                e.loading
                  ? n("v-spinner")
                  : e.data
                  ? [
                      n(
                        "v-avatar",
                        { attrs: { "x-large": "" } },
                        [
                          e.data.avatar
                            ? n("img", { attrs: { src: e.data.avatar } })
                            : n("v-icon", { attrs: { name: "person" } }),
                        ],
                        1
                      ),
                      n("div", { staticClass: "info" }, [
                        n("div", { staticClass: "primary type-label" }, [
                          e._v(
                            e._s(e.data.first_name) +
                              " " +
                              e._s(e.data.last_name)
                          ),
                        ]),
                        n("div", { staticClass: "secondary" }, [
                          e._v(" " + e._s(e.data.title || "No Title") + " "),
                        ]),
                        n("div", { staticClass: "secondary" }, [
                          e._v(
                            " " + e._s(e.data.company || "No Company") + " "
                          ),
                        ]),
                      ]),
                      n("v-icon", {
                        staticClass: "arrow",
                        attrs: {
                          color: "--input-icon-color",
                          name: "open_in_new",
                        },
                      }),
                    ]
                  : e._e(),
              ],
              2
            ),
          ],
          2
        );
      },
      Hi = [],
      Ji = (n("96cf"), n("1da1"));
    function Wi(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function Gi(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Wi(Object(n), !0).forEach(function (t) {
              Object(Ne["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Wi(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var Yi = {
        name: "UserPopover",
        props: {
          id: { type: Number, required: !0 },
          placement: {
            type: String,
            validator: function (e) {
              return [
                "auto",
                "auto-start",
                "auto-end",
                "top",
                "top-start",
                "top-end",
                "right",
                "right-start",
                "right-end",
                "bottom",
                "bottom-start",
                "bottom-end",
                "left",
                "left-start",
                "left-end",
              ].includes(e);
            },
            default: "top",
          },
        },
        data: function () {
          return { loading: !0, error: null, data: null };
        },
        computed: Gi({}, Object(da["e"])(["currentProjectKey"]), {
          boundariesElement: function () {
            return document.body;
          },
        }),
        methods: {
          fetchUser: function () {
            var e = this;
            return Object(Ji["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a, o, i, r, s;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (null === e.data) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return");
                        case 2:
                          return (
                            (t.prev = 2),
                            (t.next = 5),
                            e.$api.getUser(e.id, {
                              fields: [
                                "avatar.data.thumbnails",
                                "first_name",
                                "last_name",
                                "title",
                                "company",
                                "role.name",
                              ],
                            })
                          );
                        case 5:
                          (r = t.sent),
                            (s = r.data),
                            (s.role =
                              null === (n = s.role) || void 0 === n
                                ? void 0
                                : n.name),
                            (s.avatar =
                              null === s || void 0 === s
                                ? void 0
                                : null === (a = s.avatar) || void 0 === a
                                ? void 0
                                : null === (o = a.data) || void 0 === o
                                ? void 0
                                : null === (i = o.thumbnails) || void 0 === i
                                ? void 0
                                : i[0].url),
                            (e.data = s),
                            (t.next = 15);
                          break;
                        case 12:
                          (t.prev = 12),
                            (t.t0 = t["catch"](2)),
                            (e.error = t.t0);
                        case 15:
                          return (t.prev = 15), (e.loading = !1), t.finish(15);
                        case 18:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 12, 15, 18]]
                );
              })
            )();
          },
        },
      },
      Zi = Yi,
      Qi = (n("e077"), Object(j["a"])(Zi, zi, Hi, !1, null, "6fd073f6", null)),
      Xi = Qi.exports;
    a["default"].component("invisible-label", w),
      a["default"].component("loader", O["a"]),
      a["default"].component("v-alert", D),
      a["default"].component("v-avatar", q),
      a["default"].component("v-button", Z),
      a["default"].component("v-card", ae),
      a["default"].component("v-checkbox", de),
      a["default"].component("v-confirm", ye),
      a["default"].component("v-contextual-menu", we),
      a["default"].component("v-details", Ee),
      a["default"].component("v-error", Pe["a"]),
      a["default"].component("v-ext-display", et),
      a["default"].component("v-ext-input", _t),
      a["default"].component("v-ext-layout-options", nn),
      a["default"].component("v-ext-layout", Ft),
      a["default"].component("v-ext-module", jn),
      a["default"].component("v-form", An),
      a["default"].component("v-header-button", Jn),
      a["default"].component("v-header", Kn),
      a["default"].component("v-icon", sa),
      a["default"].component("v-info-sidebar", ya),
      a["default"].component("v-input", wa),
      a["default"].component("v-item-select", Ka),
      a["default"].component("v-items", Na),
      a["default"].component("v-modal", Wa),
      a["default"].component("v-notice", no),
      a["default"].component("v-progress-ring", go),
      a["default"].component("v-progress-linear", lo),
      a["default"].component("v-prompt", ko),
      a["default"].component("v-radio", Co),
      a["default"].component("v-select", Ao),
      a["default"].component("v-sheet", Ko),
      a["default"].component("v-simple-select", Jo),
      a["default"].component("v-slider", Xo),
      a["default"].component("v-spinner", ri),
      a["default"].component("v-switch", mi),
      a["default"].component("v-table", _i),
      a["default"].component("v-tag", Ci),
      a["default"].component("v-textarea", Ai),
      a["default"].component("v-upload", qi),
      a["default"].component("v-user-popover", Xi);
    n("5b09"), n("6bff");
    var er = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.hydratingError
          ? n(
              "div",
              { staticClass: "error", attrs: { id: "app" } },
              [
                n("v-error", {
                  attrs: {
                    icon: "warning",
                    title: e.$t("server_error"),
                    body: e.$t("server_error_copy"),
                    color: "danger",
                  },
                }),
                n(
                  "p",
                  { staticClass: "try-again" },
                  [
                    e._v(" Try again later or "),
                    n("router-link", { attrs: { to: "/logout" } }, [
                      e._v("login to a different project"),
                    ]),
                  ],
                  1
                ),
              ],
              1
            )
          : e.extensionError
          ? n(
              "div",
              { staticClass: "error", attrs: { id: "app" } },
              [
                n("v-error", {
                  attrs: {
                    icon: "extension",
                    title: e.$t("extensions_missing"),
                    body: e.$t("extensions_missing_copy"),
                    color: "warning",
                  },
                }),
              ],
              1
            )
          : e.publicRoute
          ? n(
              "div",
              { attrs: { id: "app" } },
              [n("router-view"), n("v-notification")],
              1
            )
          : n(
              "div",
              {
                style: {
                  "--brand": e.color.startsWith("#")
                    ? e.color
                    : "var(--" + e.color + ")",
                },
                attrs: { id: "app" },
              },
              [
                e.hydrated
                  ? n(
                      "div",
                      { staticClass: "directus" },
                      [
                        n("v-nav-sidebar"),
                        n("router-view", { staticClass: "page-root" }),
                      ],
                      1
                    )
                  : n("loader", { attrs: { area: "full-page" } }),
                n("portal-target", { attrs: { name: "modal", multiple: "" } }),
                n("v-notification"),
              ],
              1
            );
      },
      tr = [],
      nr = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "nav-sidebar" },
          [
            n("v-blocker", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.active,
                  expression: "active",
                },
              ],
              staticClass: "blocker",
              attrs: { "z-index": 2 },
              on: { click: e.disableNav },
            }),
            n("transition", { attrs: { name: "nav" } }, [
              n(
                "aside",
                { class: { active: e.active } },
                [
                  n(
                    "button",
                    { staticClass: "a11y-close", on: { click: e.disableNav } },
                    [e._v("Close nav")]
                  ),
                  n("module-bar"),
                  n(
                    "section",
                    { staticClass: "main-bar" },
                    [
                      n("project-switcher"),
                      null === e.customCollections
                        ? n("nav-menu", {
                            staticClass: "menu-section",
                            attrs: { links: e.defaultCollections },
                          })
                        : e._l(e.customCollections, function (e, t) {
                            return n("nav-menu", {
                              key: t,
                              staticClass: "menu-section",
                              attrs: { title: e.title, links: e.links },
                            });
                          }),
                      e.bookmarks && e.bookmarks.length > 0
                        ? n("nav-bookmarks", {
                            staticClass: "menu-section",
                            attrs: { bookmarks: e.bookmarks },
                          })
                        : e._e(),
                    ],
                    2
                  ),
                ],
                1
              ),
            ]),
          ],
          1
        );
      },
      ar = [],
      or =
        (n("7db0"),
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "project-switcher" }, [
            n(
              "div",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip.left",
                    value: {
                      content: e.tooltipContent,
                      boundariesElement: "body",
                    },
                    expression:
                      "{\n\t\t\tcontent: tooltipContent,\n\t\t\tboundariesElement: 'body'\n\t\t}",
                    modifiers: { left: !0 },
                  },
                ],
                staticClass: "content",
                class: {
                  slow: 1 === e.signalStrength,
                  disconnected: 0 === e.signalStrength,
                },
              },
              [
                n("v-signal", { staticClass: "icon" }),
                n(
                  "span",
                  { staticClass: "no-wrap project-name" },
                  [
                    "successful" === e.currentProject.status
                      ? [
                          e._v(
                            " " + e._s(e.currentProject.data.project_name) + " "
                          ),
                        ]
                      : [e._v(" " + e._s(e.currentProjectKey) + " ")],
                  ],
                  2
                ),
                e.projects.length > 1
                  ? n("v-icon", {
                      staticClass: "chevron",
                      attrs: { name: "expand_more" },
                    })
                  : e._e(),
                e.projects.length > 1
                  ? n(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.currentProjectKey,
                            expression: "currentProjectKey",
                          },
                        ],
                        on: {
                          change: function (t) {
                            var n = Array.prototype.filter
                              .call(t.target.options, function (e) {
                                return e.selected;
                              })
                              .map(function (e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t;
                              });
                            e.currentProjectKey = t.target.multiple ? n : n[0];
                          },
                        },
                      },
                      e._l(e.projects, function (t) {
                        return n(
                          "option",
                          {
                            key: t.key,
                            attrs: { name: t.key },
                            domProps: {
                              value: t.key,
                              selected: e.currentProjectKey === t.key,
                            },
                          },
                          [
                            "successful" === t.status
                              ? [
                                  e._v(" " + e._s(t.data.project_name) + " "),
                                  !0 === t.data.authenticated
                                    ? [e._v(" • ")]
                                    : e._e(),
                                ]
                              : [e._v(" " + e._s(t.key) + " ")],
                          ],
                          2
                        );
                      }),
                      0
                    )
                  : e._e(),
              ],
              1
            ),
          ]);
        }),
      ir = [],
      rr = n("43df");
    function sr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function cr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? sr(Object(n), !0).forEach(function (t) {
              Object(Ne["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : sr(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var lr = {
        name: "ProjectSwitcher",
        components: { VSignal: rr["a"] },
        computed: cr(
          {},
          Object(da["e"])(["projects", "apiRootPath", "latency"]),
          {},
          Object(da["c"])(["currentProject", "signalStrength"]),
          {
            currentProjectKey: {
              get: function () {
                return this.$store.state.currentProjectKey;
              },
              set: function (e) {
                this.$store.dispatch("setCurrentProject", e);
              },
            },
            apiURL: function () {
              return (
                window.location.origin +
                this.apiRootPath +
                this.currentProjectKey
              );
            },
            tooltipContent: function () {
              var e = this.latency[this.latency.length - 1].latency;
              (e = Math.round(e)), e && (e = this.$n(e));
              var t = this.apiURL;
              return (
                (t += "<br>"),
                (t += this.$t("latency") + ":"),
                (t += " ".concat(e, "ms")),
                t
              );
            },
          }
        ),
      },
      ur = lr,
      dr = (n("3c14"), Object(j["a"])(ur, or, ir, !1, null, "0ee86300", null)),
      fr = dr.exports,
      mr = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.links.length > 0
          ? n("div", { staticClass: "nav-menu" }, [
              e.title ? n("h3", [e._v(e._s(e.titleTranslated))]) : e._e(),
              n("nav", [
                n(
                  "ul",
                  e._l(e.links, function (t) {
                    var a = t.link,
                      o = t.name,
                      i = t.icon,
                      r = t.color;
                    return n(
                      "li",
                      { key: a },
                      [
                        a.startsWith("http")
                          ? [
                              n(
                                "a",
                                {
                                  class: r || null,
                                  attrs: {
                                    href: a,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  },
                                },
                                [
                                  n("v-icon", {
                                    staticClass: "icon",
                                    attrs: {
                                      name: i || "box",
                                      color: "--sidebar-text-color",
                                    },
                                  }),
                                  e._v(" " + e._s(o) + " "),
                                ],
                                1
                              ),
                            ]
                          : a
                          ? n(
                              "router-link",
                              { class: r || null, attrs: { to: a } },
                              [
                                n("v-icon", {
                                  staticClass: "icon",
                                  attrs: {
                                    name: i || "box",
                                    color: "--sidebar-text-color",
                                  },
                                }),
                                e._v(" " + e._s(o) + " "),
                              ],
                              1
                            )
                          : e._e(),
                      ],
                      2
                    );
                  }),
                  0
                ),
              ]),
            ])
          : e._e();
      },
      pr = [],
      hr = {
        name: "NavMenu",
        props: {
          title: { type: String, default: null },
          links: { type: Array, required: !0 },
        },
        computed: {
          titleTranslated: function () {
            return this.title.startsWith("$t:")
              ? this.$t(this.title.substring(3))
              : this.title;
          },
        },
      },
      gr = hr,
      yr = (n("6ad7"), Object(j["a"])(gr, mr, pr, !1, null, "15a15520", null)),
      vr = yr.exports,
      br = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "nav-bookmarks" },
          [
            e.bookmarks && e.bookmarks.length > 0
              ? n("nav", [
                  n(
                    "ul",
                    e._l(e.bookmarks, function (t) {
                      return n(
                        "li",
                        { key: t.id, staticClass: "bookmark" },
                        [
                          n(
                            "router-link",
                            {
                              staticClass: "no-wrap",
                              attrs: {
                                to:
                                  "/" +
                                  e.currentProjectKey +
                                  "/bookmarks/" +
                                  t.collection +
                                  "/" +
                                  t.id,
                              },
                            },
                            [
                              n("v-icon", {
                                staticClass: "icon",
                                attrs: { name: "bookmark_outline" },
                              }),
                              e._v(" " + e._s(t.title) + " "),
                            ],
                            1
                          ),
                          e.isUserAdmin || t.user === e.userId
                            ? n(
                                "button",
                                {
                                  directives: [
                                    {
                                      name: "tooltip",
                                      rawName: "v-tooltip",
                                      value: e.$t("delete_bookmark"),
                                      expression: "$t('delete_bookmark')",
                                    },
                                  ],
                                  on: {
                                    click: function (n) {
                                      (e.confirmRemove = !0),
                                        (e.toBeDeletedBookmark = t.id);
                                    },
                                  },
                                },
                                [
                                  n("v-icon", {
                                    attrs: { name: "delete_outline" },
                                  }),
                                ],
                                1
                              )
                            : e._e(),
                        ],
                        1
                      );
                    }),
                    0
                  ),
                ])
              : e._e(),
            e.confirmRemove
              ? n(
                  "portal",
                  { attrs: { to: "modal" } },
                  [
                    n("v-confirm", {
                      attrs: { message: e.$t("delete_bookmark_body") },
                      on: {
                        cancel: function (t) {
                          e.confirmRemove = !1;
                        },
                        confirm: e.deleteBookmark,
                      },
                    }),
                  ],
                  1
                )
              : e._e(),
          ],
          1
        );
      },
      _r = [];
    function jr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function kr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? jr(Object(n), !0).forEach(function (t) {
              Object(Ne["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : jr(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var wr = {
        name: "NavBookmarks",
        props: { bookmarks: { type: Array, required: !0 } },
        data: function () {
          return { confirmRemove: !1, toBeDeletedBookmark: null };
        },
        computed: kr({}, Object(da["e"])(["currentProjectKey"]), {
          isUserAdmin: function () {
            return this.$store.state.currentUser.admin;
          },
          userId: function () {
            return this.$store.state.currentUser.id;
          },
        }),
        methods: {
          deleteBookmark: function () {
            this.$store.dispatch("deleteBookmark", this.toBeDeletedBookmark),
              (this.confirmRemove = !1),
              (this.toBeDeletedBookmark = null);
          },
        },
      },
      Or = wr,
      $r = (n("d1bb"), Object(j["a"])(Or, br, _r, !1, null, "00f4808a", null)),
      xr = $r.exports,
      Sr = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "module-bar" },
          [
            n("v-logo", { staticClass: "logo" }),
            e._l(e.modules, function (e) {
              return [
                e.link.startsWith("http")
                  ? n(
                      "a",
                      {
                        directives: [
                          {
                            name: "tooltip",
                            rawName: "v-tooltip.left",
                            value: {
                              content: e.name,
                              boundariesElement: "body",
                            },
                            expression:
                              "{\n\t\t\t\tcontent: singleModule.name,\n\t\t\t\tboundariesElement: 'body'\n\t\t\t}",
                            modifiers: { left: !0 },
                          },
                        ],
                        key: e.link,
                        staticClass: "link",
                        class: e.class,
                        attrs: { href: e.link, target: "__blank" },
                      },
                      [
                        n("v-icon", {
                          staticClass: "icon",
                          attrs: {
                            name: e.icon || "box",
                            color: "--" + (e.color || "blue-grey-400"),
                          },
                        }),
                      ],
                      1
                    )
                  : n(
                      "router-link",
                      {
                        directives: [
                          {
                            name: "tooltip",
                            rawName: "v-tooltip.left",
                            value: {
                              content: e.name,
                              boundariesElement: "body",
                            },
                            expression:
                              "{\n\t\t\t\tcontent: singleModule.name,\n\t\t\t\tboundariesElement: 'body'\n\t\t\t}",
                            modifiers: { left: !0 },
                          },
                        ],
                        key: e.link,
                        staticClass: "link",
                        class: e.class,
                        attrs: { to: e.link },
                      },
                      [
                        n("v-icon", {
                          staticClass: "icon",
                          attrs: {
                            name: e.icon || "box",
                            color: "--" + (e.color || "blue-grey-400"),
                          },
                        }),
                      ],
                      1
                    ),
              ];
            }),
            n("div", { staticClass: "spacer" }),
            n(
              "router-link",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip.left",
                    value: {
                      content:
                        e.currentUser.first_name +
                        " " +
                        e.currentUser.last_name,
                      boundariesElement: "body",
                    },
                    expression:
                      "{\n\t\t\tcontent: currentUser.first_name + ' ' + currentUser.last_name,\n\t\t\tboundariesElement: 'body'\n\t\t}",
                    modifiers: { left: !0 },
                  },
                ],
                staticClass: "edit-user",
                class: { smoke: e.avatarURL },
                attrs: {
                  to: "/" + e.currentProjectKey + "/users/" + e.currentUser.id,
                },
              },
              [
                n(
                  "v-avatar",
                  {
                    attrs: {
                      "x-large": "",
                      tile: "",
                      color: "--module-background-color-active",
                    },
                  },
                  [
                    e.avatarURL
                      ? n("img", { attrs: { src: e.avatarURL } })
                      : n("v-icon", {
                          attrs: { name: "person", color: "--blue-grey-400" },
                        }),
                  ],
                  1
                ),
              ],
              1
            ),
            n(
              "button",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip.left",
                    value: {
                      content: e.$t("sign_out"),
                      boundariesElement: "body",
                    },
                    expression:
                      "{\n\t\t\tcontent: $t('sign_out'),\n\t\t\tboundariesElement: 'body'\n\t\t}",
                    modifiers: { left: !0 },
                  },
                ],
                staticClass: "sign-out",
                attrs: { type: "button" },
                on: {
                  click: function (t) {
                    e.confirmSignOut = !0;
                  },
                },
              },
              [
                n("v-icon", {
                  attrs: { name: "logout", color: "--blue-grey-400" },
                }),
              ],
              1
            ),
            e.confirmSignOut
              ? n(
                  "portal",
                  { attrs: { to: "modal" } },
                  [
                    n("v-confirm", {
                      attrs: {
                        busy: e.confirmSignOutLoading,
                        message: e.editing
                          ? e.$t("sign_out_confirm_edits")
                          : e.$t("sign_out_confirm"),
                        "confirm-text": e.$t("sign_out"),
                      },
                      on: {
                        cancel: function (t) {
                          e.confirmSignOut = !1;
                        },
                        confirm: e.signOut,
                      },
                    }),
                  ],
                  1
                )
              : e._e(),
          ],
          2
        );
      },
      Cr = [],
      Er = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "v-logo" }, [
          e.customLogoPath
            ? n("img", { attrs: { src: e.customLogoPath, alt: e.projectName } })
            : n("div", {
                staticClass: "logo",
                class: { running: e.running },
                on: { animationiteration: e.checkRunning },
              }),
        ]);
      },
      Pr = [];
    function Tr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function Ir(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Tr(Object(n), !0).forEach(function (t) {
              Object(Ne["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Tr(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var Nr = {
        name: "VLogo",
        data: function () {
          return { running: !1 };
        },
        computed: Ir({}, Object(da["c"])(["currentProject"]), {
          customLogoPath: function () {
            var e, t;
            return (
              null === (e = this.currentProject) || void 0 === e
                ? void 0
                : null === (t = e.data) || void 0 === t
                ? void 0
                : t.project_logo
            )
              ? this.currentProject.data.project_logo.full_url
              : null;
          },
          projectName: function () {
            var e;
            return null === (e = this.currentProject) || void 0 === e
              ? void 0
              : e.data.project_name;
          },
          queueContainsItems: function () {
            return 0 !== this.$store.state.queue.length;
          },
        }),
        watch: {
          queueContainsItems: function (e) {
            !0 === e && (this.running = !0);
          },
        },
        methods: {
          checkRunning: function () {
            !1 === this.queueContainsItems && (this.running = !1);
          },
        },
      },
      Ar = Nr,
      Rr = (n("7de5"), Object(j["a"])(Ar, Er, Pr, !1, null, "51bf84ed", null)),
      Dr = Rr.exports;
    function Lr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function Fr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Lr(Object(n), !0).forEach(function (t) {
              Object(Ne["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Lr(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var Ur = {
        name: "ModuleBar",
        components: { VLogo: Dr },
        data: function () {
          return { confirmSignOut: !1, confirmSignOutLoading: !1 };
        },
        computed: Fr(
          {},
          Object(da["e"])(["permissions", "currentUser", "currentProjectKey"]),
          {},
          Object(da["c"])(["editing"]),
          {
            modules: function () {
              var e,
                t,
                n = [];
              return (
                (n =
                  Array.isArray(
                    null === (e = this.currentUser.role) || void 0 === e
                      ? void 0
                      : e.module_listing
                  ) &&
                  (null === (t = this.currentUser.role) || void 0 === t
                    ? void 0
                    : t.module_listing.length) > 0
                    ? Object(o["clone"])(this.currentUser.role.module_listing)
                    : this.getDefaultModules()),
                !0 === this.$store.state.currentUser.admin &&
                  n.push({
                    link: "/".concat(this.currentProjectKey, "/settings"),
                    name: this.$t("admin_settings"),
                    icon: "settings",
                    class: "settings",
                  }),
                n
              );
            },
            avatarURL: function () {
              var e, t, n;
              return null === (e = this.currentUser.avatar) || void 0 === e
                ? void 0
                : null === (t = e.data) || void 0 === t
                ? void 0
                : null === (n = t.thumbnails) || void 0 === n
                ? void 0
                : n.find(function (e) {
                    return "directus-medium-crop" === e.key;
                  }).url;
            },
            fullName: function () {
              var e = this.currentUser,
                t = e.first_name,
                n = e.last_name;
              return "".concat(t, " ").concat(n);
            },
          }
        ),
        methods: {
          signOut: function () {
            var e = this;
            return Object(Ji["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e.confirmSignOutLoading = !0),
                          (t.next = 3),
                          e.$api.logout()
                        );
                      case 3:
                        return (
                          e.$store.commit(Ln["UPDATE_PROJECT"], {
                            key: e.$store.state.currentProjectKey,
                            data: { authenticated: !1 },
                          }),
                          e.$store.commit(Ln["RESET"]),
                          (t.next = 7),
                          e.$store.dispatch("getProjects")
                        );
                      case 7:
                        e.$router.push("/login"),
                          (e.confirmSignOutLoading = !1);
                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          getDefaultModules: function () {
            var e = this,
              t = [];
            t.push({
              link: "/".concat(this.currentProjectKey, "/collections"),
              name: this.$tc("collection", 2),
              icon: "box",
            }),
              ("none" === this.permissions.directus_users.read &&
                "mine" === this.permissions.directus_users.read) ||
                t.push({
                  link: "/".concat(this.currentProjectKey, "/users"),
                  name: this.$t("user_directory"),
                  icon: "people",
                }),
              "none" !== this.permissions.directus_files.read &&
                t.push({
                  link: "/".concat(this.currentProjectKey, "/files"),
                  name: this.$t("file_library"),
                  icon: "collections",
                }),
              t.push({
                link: "https://docs.directus.io",
                name: this.$t("help_and_docs"),
                icon: "help",
              });
            var n = this.$store.state.extensions.modules;
            return (
              Object(o["forEach"])(n, function (n, a) {
                t.push({
                  link: "/".concat(e.currentProjectKey, "/ext/").concat(a),
                  name: n.name,
                  icon: n.icon,
                });
              }),
              t
            );
          },
        },
      },
      Br = Ur,
      Kr =
        (n("9a58"),
        n("88b2"),
        Object(j["a"])(Br, Sr, Cr, !1, null, "1446d41c", null)),
      Mr = Kr.exports;
    function Vr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function qr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Vr(Object(n), !0).forEach(function (t) {
              Object(Ne["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Vr(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var zr = {
        name: "NavSidebar",
        components: {
          ProjectSwitcher: fr,
          NavMenu: vr,
          NavBookmarks: xr,
          VBlocker: ua["a"],
          ModuleBar: Mr,
        },
        computed: qr(
          {},
          Object(da["e"])(["currentProjectKey", "currentUser"]),
          {
            permissions: function () {
              return this.$store.state.permissions;
            },
            collections: function () {
              var e = this,
                t = this.$store.state.collections;
              return null == t
                ? []
                : Object.values(t)
                    .filter(function (e) {
                      return (
                        0 == e.hidden &&
                        1 == e.managed &&
                        !1 === e.collection.startsWith("directus_")
                      );
                    })
                    .filter(function (t) {
                      return t.status_mapping &&
                        e.permissions[t.collection].statuses
                        ? Object(o["some"])(
                            e.permissions[t.collection].statuses,
                            function (e) {
                              return "none" !== e.read;
                            }
                          )
                        : "none" !== e.permissions[t.collection].read;
                    });
            },
            projectName: function () {
              return this.$store.getters.currentProject.project_name;
            },
            active: function () {
              return this.$store.state.sidebars.nav;
            },
            bookmarks: function () {
              return this.$store.state.bookmarks;
            },
            customCollections: function () {
              var e = this,
                t = this.currentUser.role.collection_listing,
                n = Array.isArray(t) && t.length > 0;
              return !1 === n
                ? null
                : t.map(function (t) {
                    return {
                      title: t.group_name,
                      links: (t.collections || []).map(function (t) {
                        var n = t.collection,
                          a = e.collections.find(function (e) {
                            return e.collection === n;
                          });
                        return {
                          link: "/"
                            .concat(e.currentProjectKey, "/collections/")
                            .concat(n),
                          name: e.$helpers.formatCollection(n),
                          icon: a ? a.icon : null,
                        };
                      }),
                    };
                  });
            },
            defaultCollections: function () {
              var e = this;
              return this.collections
                .map(function (t) {
                  var n = t.collection,
                    a = t.icon;
                  return {
                    link: "/"
                      .concat(e.currentProjectKey, "/collections/")
                      .concat(n),
                    name: e.$helpers.formatCollection(n),
                    icon: a,
                  };
                })
                .sort(function (e, t) {
                  return e.name > t.name ? 1 : -1;
                });
            },
          }
        ),
        methods: {
          logout: function () {
            this.$store.dispatch("logout");
          },
          deleteBookmark: function (e) {
            this.$store.dispatch("deleteBookmark", e);
          },
          toBookmark: function (e) {
            var t = this,
              n = e.collection,
              a = e.search_query,
              o = e.filters,
              i = e.view_options,
              r = e.view_type,
              s = e.view_query;
            this.$store
              .dispatch("setListingPreferences", {
                collection: n,
                updates: {
                  search_query: a,
                  filters: o,
                  view_options: i,
                  view_type: r,
                  view_query: s,
                },
              })
              .then(function () {
                t.$router.push(
                  "/".concat(t.currentProjectKey, "/collections/").concat(n)
                );
              });
          },
          disableNav: function () {
            this.$store.commit(Ln["TOGGLE_NAV"], !1);
          },
        },
      },
      Hr = zr,
      Jr =
        (n("6944"),
        n("58de"),
        Object(j["a"])(Hr, nr, ar, !1, null, "0eed50d5", null)),
      Wr = Jr.exports,
      Gr = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "notifications" },
          [
            n(
              "transition-group",
              { attrs: { name: "slide-fade", tag: "div" } },
              e._l(e.notifications, function (e) {
                return n("v-item", { key: e.id, attrs: { item: e } });
              }),
              1
            ),
          ],
          1
        );
      },
      Yr = [],
      Zr = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "notification", class: e.item.color }, [
          n(
            "div",
            {
              staticClass: "icon-main",
              style: { backgroundColor: e.ringColor },
            },
            [
              e.item.iconMain
                ? n("v-icon", {
                    attrs: { color: e.iconColor, name: e.item.iconMain },
                  })
                : e._e(),
            ],
            1
          ),
          n("div", { staticClass: "content" }, [
            n("div", { staticClass: "title selectable" }, [
              e._v(e._s(e.item.title)),
            ]),
            n("div", {
              staticClass: "details selectable",
              domProps: { innerHTML: e._s(e.detailHtml) },
            }),
          ]),
          n(
            "div",
            { staticClass: "icon-right", on: { click: e.actionClick } },
            [
              e.item.iconRight
                ? n("v-icon", { attrs: { name: e.item.iconRight } })
                : e._e(),
            ],
            1
          ),
        ]);
      },
      Qr = [];
    function Xr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function es(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Xr(Object(n), !0).forEach(function (t) {
              Object(Ne["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Xr(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var ts = {
        name: "VItem",
        props: { item: { type: Object, required: !0 } },
        computed: {
          detailHtml: function () {
            return void 0 !== this.item.details
              ? this.$helpers.snarkdown(this.item.details)
              : "";
          },
          iconColor: function () {
            return void 0 !== this.item.color
              ? "--".concat(this.item.color, "-500")
              : "--blue-grey-500";
          },
          ringColor: function () {
            return void 0 !== this.item.color
              ? "var(--".concat(this.item.color, "-100)")
              : "var(--blue-grey-100)";
          },
        },
        methods: es(
          {},
          Object(da["d"])("notifications", [Ln["REMOVE_NOTIFICATION"]]),
          {
            startItemTimeout: function () {
              var e = this;
              void 0 !== this.item.delay &&
                this.item.delay > 0 &&
                setTimeout(function () {
                  return e.removeItemFromStore();
                }, this.item.delay);
            },
            removeItemFromStore: function () {
              this.$store.commit(Ln["REMOVE_NOTIFICATION"], this.item.id);
            },
            actionClick: function () {
              if (!(this.item.onClick instanceof Function))
                throw new Error("Notification callback is not a function");
              this.item.onClick(), this.removeItemFromStore();
            },
          }
        ),
        mounted: function () {
          this.startItemTimeout();
        },
      },
      ns = ts,
      as = (n("2dd5"), Object(j["a"])(ns, Zr, Qr, !1, null, "12c149bd", null)),
      os = as.exports,
      is = {
        name: "VNotifications",
        components: { VItem: os },
        computed: {
          notifications: function () {
            return this.$store.state.notifications.queue;
          },
        },
      },
      rs = is,
      ss = (n("ffd4"), Object(j["a"])(rs, Gr, Yr, !1, null, "87b52fc4", null)),
      cs = ss.exports,
      ls = n("cf41");
    function us(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function ds(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? us(Object(n), !0).forEach(function (t) {
              Object(Ne["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : us(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var fs = {
        name: "Directus",
        metaInfo: { title: "Directus" },
        components: { VError: Pe["a"], VNavSidebar: Wr, VNotification: cs },
        computed: ds(
          {},
          Object(da["e"])({
            color: function (e) {
              return (
                e.settings.values.project_color ||
                getComputedStyle(document.documentElement)
                  .getPropertyValue("--brand")
                  .trim()
              );
            },
            infoActive: function (e) {
              return e.sidebars.info;
            },
            projects: function (e) {
              return e.projects;
            },
            currentProjectKey: function (e) {
              return e.currentProjectKey;
            },
          }),
          {
            publicRoute: function () {
              return this.$route.meta.publicRoute || !1;
            },
            hydrated: function () {
              return this.$store.state.hydrated || !1;
            },
            hydratingError: function () {
              return this.$store.state.hydratingError;
            },
            extensionError: function () {
              if (!this.hydrated) return null;
              var e = this.$store.state.extensions;
              return (
                0 === Object.values(e.interfaces).length &&
                0 === Object.values(e.layouts).length &&
                0 === Object.values(e.modules).length
              );
            },
          }
        ),
        watch: {
          $route: function () {
            this.bodyClass(),
              this.$store.commit(Ln["TOGGLE_NAV"], !1),
              this.preselectProject();
          },
          infoActive: function (e) {
            this.toggleInfoSidebarBodyClass(e);
          },
          hydratingError: function (e) {
            e && document.body.classList.add("no-padding");
          },
        },
        created: function () {
          this.bodyClass();
        },
        methods: {
          bodyClass: function () {
            this.publicRoute
              ? (document.body.classList.add("no-padding"),
                document.body.classList.remove("private"),
                document.body.classList.add("public"))
              : (document.body.classList.remove("no-padding"),
                document.body.classList.add("private"),
                document.body.classList.remove("public")),
              -1 !==
                ["auto", "light", "dark"].indexOf(
                  this.$store.state.currentUser.theme
                ) &&
                document.body.classList.add(
                  this.$store.state.currentUser.theme
                ),
              this.toggleInfoSidebarBodyClass();
          },
          keepEditing: function () {
            this.$router.push(
              "/"
                .concat(this.currentProjectKey, "/collections/")
                .concat(this.$store.state.edits.collection, "/")
                .concat(this.$store.state.edits.primaryKey)
            );
          },
          discardChanges: function () {
            this.$store.dispatch("discardChanges");
          },
          toggleInfoSidebarBodyClass: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null;
            null === e && (e = this.infoActive);
            var t =
              this.$route.meta && "wide" === this.$route.meta.infoSidebarWidth
                ? "info-wide-active"
                : "info-active";
            e
              ? document.body.classList.add(t)
              : (document.body.classList.remove("info-wide-active"),
                document.body.classList.remove("info-active"));
          },
          preselectProject: function () {
            if (this.$route.query.project) {
              this.$store.dispatch(
                "setCurrentProject",
                this.$route.query.project
              ),
                Object(ls["a"])(this.$route.query.project) &&
                  this.$store.dispatch("getProjects");
              var e = Object(o["clone"])(this.$route.query);
              delete e.project, this.$router.replace({ query: e });
            }
          },
        },
      },
      ms = fs,
      ps =
        (n("6294"),
        n("9228"),
        Object(j["a"])(ms, er, tr, !1, null, "490f629a", null)),
      hs = ps.exports,
      gs = n("41cb"),
      ys = n("9923"),
      vs = n("4360"),
      bs = n("d722"),
      _s = n("2a0c"),
      js = n.n(_s),
      ks = n("1b32"),
      ws = n.n(ks),
      Os = n("a75a"),
      $s = n.n(Os),
      xs = n("8a60"),
      Ss = n.n(xs),
      Cs = n("ecde"),
      Es = n("6ff4");
    function Ps(e) {
      var t = e.split(/[- :]/);
      return new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]));
    }
    function Ts(e) {
      return e.toISOString().slice(0, 19).replace("T", " ");
    }
    var Is = { sqlToDate: Ps, dateToSql: Ts };
    function Ns(e, t) {
      var n = Vs.$helpers.formatTitle(e);
      if (!e || "string" !== typeof e) return n;
      if (!t || "string" !== typeof t) return n;
      var a = "fields.".concat(t, ".").concat(e);
      return Vs.$te(a) ? Vs.$t(a) : n;
    }
    function As(e) {
      var t = Vs.$helpers.formatTitle(e);
      if (!e || "string" !== typeof e)
        return (
          console.warn("[formatField]: Expected collection to be a string"), t
        );
      var n = "collections.".concat(e);
      return Vs.$te(n) ? Vs.$t(n) : t;
    }
    var Rs = {
        formatTitle: ws.a,
        date: Is,
        convertRange: js.a,
        micromustache: $s.a,
        filesize: Fi.a,
        shortid: La.a,
        componentExists: Re,
        formatFilters: xa,
        enableBodyScroll: qa["enableBodyScroll"],
        disableBodyScroll: qa["disableBodyScroll"],
        snarkdown: Cs["a"],
        mousetrap: Ss.a,
        dateFns: Es,
        formatField: Ns,
        formatCollection: As,
      },
      Ds = {
        install: function (e) {
          e.prototype.$helpers = Rs;
        },
      };
    a["default"].use(Ds);
    var Ls = Rs,
      Fs = n("38d3"),
      Us = n("f8dc"),
      Bs = n("65f2"),
      Ks = n.n(Bs);
    Ks.a.shim(),
      (a["default"].config.productionTip = !1),
      (window._ = i.a),
      (window.$directus = window.$directus || {}),
      (window.$directus.import = function (e) {
        var t = {
          api: bs["a"],
          axios: f.a,
          lodash: i.a,
          notify: Fs["a"],
          router: gs["a"],
          store: vs["a"],
        };
        return e ? t[e] : t;
      }),
      Object.defineProperties(a["default"].prototype, {
        $api: { value: bs["a"] },
        $notify: { value: Fs["a"] },
        $axios: { value: f.a },
      }),
      a["default"].directive("focus", {
        inserted: function (e, t) {
          (void 0 !== t.value && !1 === Boolean(t.value)) || e.focus();
        },
      }),
      a["default"].use(g["c"]),
      a["default"].use(Us["a"]),
      a["default"].use(c["a"], {
        defaultDelay: { show: 500 },
        defaultOffset: 2,
        defaultBoundariesElement: "window",
        autoHide: !1,
      }),
      a["default"].use(u.a),
      a["default"].use(h.a),
      a["default"].use(m["a"]),
      a["default"].component("draggable", s.a);
    var Ms = new a["default"]({
      render: function (e) {
        return e(hs);
      },
      router: gs["a"],
      i18n: ys["i18n"],
      store: vs["a"],
      api: bs["a"],
      helpers: Ls,
    }).$mount("#app");
    vs["a"].watch(
      function (e) {
        return e.currentUser.locale;
      },
      function (e) {
        return Object(ys["loadLanguageAsync"])(e);
      }
    ),
      vs["a"].watch(
        function (e) {
          return e.currentProjectKey;
        },
        function (e) {
          return (bs["a"].config.project = e);
        }
      );
    var Vs = (t["default"] = Ms);
  },
  "57a7": function (e, t, n) {
    "use strict";
    var a = n("7ce0"),
      o = n.n(a);
    o.a;
  },
  "58de": function (e, t, n) {
    "use strict";
    var a = n("ca21"),
      o = n.n(a);
    o.a;
  },
  5945: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:color-picker","version":"1.0.1","types":["string"],"icon":"palette","recommended":{"length":20},"options":{}}'
    );
  },
  "5b09": function (e, t) {
    function n(e) {
      e.key &&
        "tab" === e.key.toLowerCase() &&
        (document.body.classList.add("user-is-tabbing"),
        window.removeEventListener("keydown", n),
        window.addEventListener("mousedown", a));
    }
    function a() {
      document.body.classList.remove("user-is-tabbing"),
        window.removeEventListener("mousedown", a),
        window.addEventListener("keydown", n);
    }
    window.addEventListener("keydown", n);
  },
  "5b5b": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:user-roles","version":"1.0.0","types":["m2o"],"relation":"m2o","icon":"perm_identity","options":{"relational":{"name":"$t:relational","comment":"$t:relational_comment","interface":"switch","default":true},"showPublic":{"name":"$t:show_public","interface":"switch","default":false}}}'
    );
  },
  "5b75": function (e, t, n) {},
  "5b90": function (e, t, n) {},
  "5bcb": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:interface-options","version":"1.0.0","types":["json"],"icon":"category","options":{"interfaceField":{"name":"$t:interface-field","interface":"text-input","comment":"$t:placeholder-comment","default":"$t:placeholder-default","length":200}}}'
    );
  },
  "5e6f": function (e, t, n) {
    "use strict";
    var a = n("2e36"),
      o = n.n(a);
    o.a;
  },
  6039: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:file_size","version":"1.0.1","types":["integer"],"icon":"storage","recommended":{"length":10},"options":{"placeholder":{"name":"$t:placeholder","interface":"text-input","comment":"$t:placeholder_comment","length":200},"format":{"name":"$t:format","comment":"$t:format_comment","interface":"switch","default":true},"formatInput":{"name":"$t:format_input","comment":"$t:format_input_comment","interface":"switch","default":true},"decimal":{"name":"$t:decimal","comment":"$t:decimal_comment","interface":"switch","default":true}}}'
    );
  },
  6057: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:file_preview","version":"1.0.0","types":["string"],"relation":"file","hideLabel":true,"icon":"image","options":{"edit":{"name":"$t:edit","interface":"checkboxes","default":["image_editor"],"options":{"choices":{"image_editor":"Image Editor"}}}}}'
    );
  },
  "60c5": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:multiselect","version":"1.0.1","types":["array"],"icon":"playlist_add_check","recommended":{"length":100},"options":{"choices":{"name":"$t:choices","comment":"$t:choices_comment","interface":"key-value","type":"JSON","options":{"dataType":"value","fields":[{"field":"name","interface":"text-input","type":"String","preview":true},{"field":"value","interface":"text-input","type":"String","index":true}]},"default":{"value1":"$t:option 1","value2":"$t:option 2","value3":"$t:option 3","value4":"$t:option 4","value5":"$t:option 5"}},"placeholder":{"name":"$t:placeholder","comment":"$t:placeholder_comment","interface":"text-input","length":200},"size":{"name":"$t:size","comment":"$t:size_comment","interface":"numeric","options":{"min":3,"max":20},"default":6},"wrapWithDelimiter":{"name":"$t:wrap","comment":"$t:wrap_comment","interface":"switch","default":true},"formatting":{"name":"$t:format","comment":"$t:format_comment","interface":"radio-buttons","default":"text","options":{"choices":{"text":"Display Text","value":"Value"}}}}}'
    );
  },
  6294: function (e, t, n) {
    "use strict";
    var a = n("437c"),
      o = n.n(a);
    o.a;
  },
  6368: function (e, t, n) {},
  6407: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:code","version":"1.0.0","types":["string","json"],"icon":"code","recommended":{"length":2000},"options":{"language":{"name":"$t:language","comment":"$t:language_comment","interface":"dropdown","default":"text/plain","options":{"choices":{"text/plain":"Plain Text","text/javascript":"JavaScript","application/json":"JSON","text/x-vue":"Vue","application/x-httpd-php":"PHP"}}},"template":{"name":"$t:template","comment":"$t:template_comment","interface":"code","options":{"language":"text/plain"}},"lineNumber":{"name":"$t:lineNumber","comment":"$t:lineNumber_comment","interface":"switch","default":true}}}'
    );
  },
  6536: function (e, t, n) {},
  "65b2": function (e, t, n) {},
  6603: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:files","version":"1.1.0","types":["o2m"],"relation":{"type":"m2m","relatedCollection":"directus_files"},"icon":"insert_drive_file","recommended":{"length":10},"options":{"fields":{"name":"$t:visible_columns","comment":"$t:visible_columns_comment","interface":"text-input","placeholder":"title","default":"title"},"template":{"name":"$t:template","comment":"$t:template_comment","interface":"text-input","options":{"placeholder":"$t:template_placeholder"},"default":"{{ title }}"},"allow_create":{"name":"$t:allow_create","comment":"$t:allow_create_comment","interface":"switch","default":true},"allow_select":{"name":"$t:allow_select","comment":"$t:allow_select_comment","interface":"switch","default":true},"accept":{"name":"$t:accept","comment":"$t:accept_comment","interface":"text-input"}}}'
    );
  },
  "66ef": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:input","version":"1.0.1","icon":"text_fields","types":["string","lang"],"recommended":{"length":200},"options":{"placeholder":{"name":"$t:placeholder","interface":"text-input","length":200},"trim":{"name":"$t:trim","comment":"$t:trim_comment","interface":"switch","default":true},"showCharacterCount":{"name":"$t:char_count","comment":"$t:char_count_comment","interface":"switch","default":true},"iconLeft":{"name":"$t:icon_left","comment":"$t:icon_left_comment","interface":"icon","advanced":true},"iconRight":{"name":"$t:icon_right","comment":"$t:icon_right_comment","interface":"icon","advanced":true},"formatValue":{"name":"$t:format","comment":"$t:format_comment","interface":"switch","default":false},"monospace":{"name":"$t:monospace","comment":"$t:monospace_comment","interface":"switch","default":false}}}'
    );
  },
  "675b": function (e, t, n) {},
  "692a": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:2fa-secret","version":"1.0.0","types":["string"],"recommended":{"length":16},"icon":"settings"}'
    );
  },
  6944: function (e, t, n) {
    "use strict";
    var a = n("f007"),
      o = n.n(a);
    o.a;
  },
  "69fa": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:collections","version":"1.0.1","types":["string"],"icon":"category","recommended":{"length":100},"options":{"placeholder":{"name":"$t:placeholder","interface":"text-input","comment":"$t:placeholder_comment","default":"$t:placeholder_default","length":200},"include_system":{"name":"$t:include_system","comment":"$t:include_system_comment","interface":"switch","type":"BOOLEAN","default":false}}}'
    );
  },
  "6abf": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:translation","version":"1.0.0","types":["translation"],"relation":"o2m","icon":"translate","options":{"languageField":{"name":"$t:language_field","comment":"$t:language_field_comment","interface":"text-input","options":{"monospace":true}},"languages":{"name":"$t:languages","interface":"key-value","default":{"en":"English","es":"Spanish","de":"German","fr":"French","pt":"Portuguese","zh":"Chinese","ru":"Russian"},"options":{"keyOptions":{"placeholder":"Code (en-US)","monospace":true},"valueOptions":{"placeholder":"Name (English)"}}},"template":{"name":"$t:template","comment":"$t:template_comment","interface":"text-input","options":{"placeholder":"{{title}} — {{summary}}"}}}}'
    );
  },
  "6ad7": function (e, t, n) {
    "use strict";
    var a = n("0614"),
      o = n.n(a);
    o.a;
  },
  "6bff": function (e, t) {
    var n,
      a = !1;
    function o() {
      (a = !1),
        clearTimeout(n),
        (n = setTimeout(function () {
          !1 === a && document.body.classList.remove("dragging");
        }, 50));
    }
    document.body.addEventListener(
      "dragenter",
      function () {
        (a = !0), document.body.classList.add("dragging");
      },
      !1
    ),
      document.body.addEventListener(
        "dragover",
        function () {
          a = !0;
        },
        !1
      ),
      document.body.addEventListener("dragleave", o, !1),
      document.body.addEventListener("dragexit", o, !1),
      document.body.addEventListener("dragend", o, !1),
      document.body.addEventListener("drop", o, !1);
  },
  "6d93": function (e, t, n) {
    "use strict";
    var a = n("92ac"),
      o = n.n(a);
    o.a;
  },
  7092: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:slug","version":"1.0.2","types":["slug"],"icon":"link","recommended":{"length":200},"options":{"placeholder":{"name":"$t:placeholder_name","comment":"$t:placeholder_comment","interface":"text-input","length":200,"default":"A unique label..."},"onlyOnCreate":{"name":"$t:only_on_create","comment":"$t:only_on_create_comment","interface":"switch","default":true},"forceLowercase":{"name":"$t:force_lowercase","comment":"$t:force_lowercase_comment","interface":"switch","default":true},"mirroredField":{"name":"$t:mirrored_field","comment":"$t:mirrored_field_comment","interface":"text-input"}}}'
    );
  },
  "70b3": function (e, t, n) {
    "use strict";
    var a = n("b701"),
      o = n.n(a);
    o.a;
  },
  "70da": function (e, t, n) {
    "use strict";
    var a = n("3b45"),
      o = n.n(a);
    o.a;
  },
  "71db": function (e, t, n) {
    "use strict";
    var a = n("a457"),
      o = n.n(a);
    o.a;
  },
  "71fe": function (e, t, n) {
    "use strict";
    var a = n("84c8"),
      o = n.n(a);
    o.a;
  },
  "740b": function (e, t, n) {
    "use strict";
    var a = n("851d"),
      o = n.n(a);
    o.a;
  },
  "745b": function (e) {
    e.exports = JSON.parse('{"name":"$t:calendar","icon":"date_range"}');
  },
  "746c": function (e, t, n) {
    "use strict";
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.projects && e.projects.length > 1
          ? n("div", { staticClass: "project-chooser" }, [
              n(
                "span",
                {
                  directives: [
                    {
                      name: "tooltip",
                      rawName: "v-tooltip.right",
                      value: { classes: ["inverted"], content: "API URL" },
                      expression:
                        "{ classes: ['inverted'], content: 'API URL' }",
                      modifiers: { right: !0 },
                    },
                  ],
                  staticClass: "preview",
                },
                [
                  n("v-signal", { staticClass: "signal" }),
                  "successful" === e.currentProject.status
                    ? [
                        e._v(
                          " " + e._s(e.currentProject.data.project_name) + " "
                        ),
                      ]
                    : [e._v(" " + e._s(e.currentProjectKey) + " ")],
                  n("v-icon", {
                    staticClass: "icon dropdown",
                    attrs: {
                      color: "--input-text-color",
                      name: "arrow_drop_down",
                    },
                  }),
                ],
                2
              ),
              n(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: e.currentProjectKey,
                      expression: "currentProjectKey",
                    },
                  ],
                  on: {
                    change: function (t) {
                      var n = Array.prototype.filter
                        .call(t.target.options, function (e) {
                          return e.selected;
                        })
                        .map(function (e) {
                          var t = "_value" in e ? e._value : e.value;
                          return t;
                        });
                      e.currentProjectKey = t.target.multiple ? n : n[0];
                    },
                  },
                },
                e._l(e.projects, function (t) {
                  return n(
                    "option",
                    { key: t.key, domProps: { value: t.key } },
                    [
                      "successful" === t.status
                        ? [
                            e._v(" " + e._s(t.data.project_name) + " "),
                            !0 === t.data.authenticated
                              ? [e._v(" • ")]
                              : e._e(),
                          ]
                        : [e._v(" " + e._s(t.key) + " ")],
                    ],
                    2
                  );
                }),
                0
              ),
            ])
          : e._e();
      },
      o = [],
      i =
        (n("a4d3"),
        n("4de4"),
        n("4160"),
        n("e439"),
        n("dbb4"),
        n("b64b"),
        n("159b"),
        n("ade3")),
      r = n("2f62"),
      s = n("43df");
    function c(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function l(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? c(Object(n), !0).forEach(function (t) {
              Object(i["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : c(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var u = {
        name: "ProjectChooser",
        components: { VSignal: s["a"] },
        computed: l(
          {},
          Object(r["c"])(["currentProject"]),
          {},
          Object(r["e"])(["projects"]),
          {
            currentProjectKey: {
              get: function () {
                return this.$store.state.currentProjectKey;
              },
              set: function (e) {
                this.$store.dispatch("setCurrentProject", e);
              },
            },
          }
        ),
      },
      d = u,
      f = (n("dff8"), n("2877")),
      m = Object(f["a"])(d, a, o, !1, null, "f16d8002", null);
    t["a"] = m.exports;
  },
  "75a8": function (e, t, n) {},
  7615: function (e, t, n) {},
  "78cc": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:map","version":"1.0.1","types":["json"],"fieldset":true,"icon":"place","options":{"height":{"name":"$t:height","interface":"text-input","default":400},"mapLat":{"name":"$t:map_lat","comment":"$t:map_lat_comment","interface":"text-input","default":40.72803624},"mapLng":{"name":"$t:map_lng","comment":"$t:map_lng_comment","interface":"text-input","default":-73.94896388},"defaultZoom":{"name":"$t:default_zoom","comment":"$t:default_zoom_comment","interface":"text-input","default":12},"maxZoom":{"name":"$t:max_zoom","comment":"$t:max_zoom_comment","interface":"text-input","default":17},"address_to_code":{"name":"$t:address_to_code","comment":"$t:address_to_code_comment","interface":"switch","type":"BOOLEAN","default":false},"theme":{"name":"$t:theme","comment":"$t:theme_comment","interface":"button-group","type":"JSON","default":"https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png","options":{"choices":[{"label":"Grayscale","value":"https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png"},{"label":"Color","value":"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"}]}}}}'
    );
  },
  "79cc": function (e, t, n) {
    "use strict";
    var a = n("0801"),
      o = n.n(a);
    o.a;
  },
  "7a1f": function (e, t, n) {},
  "7ce0": function (e, t, n) {},
  "7de5": function (e, t, n) {
    "use strict";
    var a = n("4c95"),
      o = n.n(a);
    o.a;
  },
  "7e12": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:button_group","version":"1.0.0","types":["string"],"fieldset":true,"icon":"view_week","options":{"choices":{"name":"$t:choices","comment":"$t:choices_comment","interface":"repeater","type":"JSON","options":{"fields":[{"field":"groups","width":"full","interface":"repeater","type":"JSON","options":{"template":"{{ label }}","fields":[{"field":"label","interface":"text-input","type":"String","preview":true},{"field":"value","interface":"text-input","type":"String"},{"field":"icon","width":"full","interface":"icon","type":"String"}]}}]}},"theme":{"name":"$t:theme","comment":"$t:theme_comment","interface":"button-group","type":"JSON","default":"solid","options":{"choices":[{"label":"Solid","value":"solid"},{"label":"Outline","value":"outline"}]}}}}'
    );
  },
  "7e2b": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:color","version":"1.0.1","types":["string"],"icon":"colorize","recommended":{"length":20},"options":{"format":{"name":"$t:format","comment":"$t:format_comment","interface":"dropdown","default":"hex","options":{"choices":{"hex":"Hex","rgb":"RGB","hsl":"HSL"}}},"palette":{"name":"$t:palette","comment":"$t:palette_comment","interface":"tags","type":"array","options":{"wrapWithDelimiter":false},"default":["#E91E63","#F44336","#FF9800","#FFC107","#FFEB3B","#CDDC39","#4CAF50","#00BCD4","#2196F3","#3F51B5","#9C27B0","#607D8B"]},"paletteOnly":{"name":"$t:palette_only","comment":"$t:palette_only_comment","interface":"switch","default":false}}}'
    );
  },
  "7e58": function (e, t, n) {},
  "7e9d": function (e, t, n) {},
  "7f83": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:interfaces","types":["string"],"icon":"category","recommended":{"length":100},"options":{"placeholder":{"name":"$t:placeholder","interface":"text-input","comment":"$t:placeholder_comment","default":"$t:placeholder_default","length":200},"relational":{"name":"$t:relational","interface":"switch","default":true},"status":{"name":"$t:include_status","interface":"switch","default":true}}}'
    );
  },
  8079: function (e, t, n) {},
  "810a": function (e, t, n) {
    "use strict";
    var a = n("b694"),
      o = n.n(a);
    o.a;
  },
  "817d": function (e, t, n) {},
  8189: function (e) {
    e.exports = JSON.parse(
      '{"short":{"year":"numeric","month":"short","day":"numeric"},"long":{"year":"numeric","month":"short","day":"numeric","weekday":"short","hour":"numeric","minute":"numeric","hour12":true}}'
    );
  },
  "82a9": function (e, t, n) {
    var a = {
      "./calendar/meta.json": "745b",
      "./cards/meta.json": "0007",
      "./tabular/meta.json": "b6da",
      "./timeline/meta.json": "d274",
    };
    function o(e) {
      var t = i(e);
      return n(t);
    }
    function i(e) {
      if (!n.o(a, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return a[e];
    }
    (o.keys = function () {
      return Object.keys(a);
    }),
      (o.resolve = i),
      (e.exports = o),
      (o.id = "82a9");
  },
  "84c8": function (e, t, n) {},
  "851d": function (e, t, n) {},
  8590: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:tags","version":"1.1.0","types":["array","string"],"icon":"local_offer","recommended":{"length":2000},"options":{"alphabetize":{"name":"$t:alphabetize","comment":"$t:alphabetize_comment","interface":"switch","default":true},"lowercase":{"name":"$t:lowercase","comment":"$t:lowercase_comment","interface":"switch","default":true},"wrap":{"name":"$t:wrap","comment":"$t:wrap_comment","interface":"switch","default":false},"format":{"name":"$t:format","comment":"$t:format_comment","interface":"switch","default":false},"sanitize":{"name":"$t:sanitize","comment":"$t:sanitize_comment","interface":"switch","default":false},"iconLeft":{"name":"$t:icon_left","comment":"$t:icon_left_comment","interface":"icon","advanced":true},"iconRight":{"name":"$t:icon_right","comment":"$t:icon_right_comment","interface":"icon","default":"local_offer","advanced":true},"validation":{"name":"$t:validation","comment":"$t:validation_comment","interface":"text-input","advanced":true},"validationMessage":{"name":"$t:validation_message","comment":"$t:validation_message_comment","interface":"text-input","default":"Please enter a valid tag","advanced":true}}}'
    );
  },
  "86da": function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:datetime_created","version":"1.0.0","types":["datetime_created"],"icon":"access_time","options":{"showRelative":{"name":"$t:relative","interface":"switch","comment":"$t:relative_comment","value":false}}}'
    );
  },
  "87ce": function (e, t, n) {
    "use strict";
    var a = n("d342"),
      o = n.n(a);
    o.a;
  },
  "88b2": function (e, t, n) {
    "use strict";
    var a = n("d104"),
      o = n.n(a);
    o.a;
  },
  "89b3": function (e, t, n) {
    "use strict";
    var a = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a("div", { staticClass: "public" }, [
          a("div", { staticClass: "container", class: { wide: e.wide } }, [
            a(
              "a",
              { staticClass: "logo", attrs: { href: "#", target: "_blank" } },
              [
                a("img", {
                  directives: [
                    {
                      name: "tooltip",
                      rawName: "v-tooltip.right",
                      value: { classes: ["inverted"], content: e.version },
                      expression: "{ classes: ['inverted'], content: version }",
                      modifiers: { right: !0 },
                    },
                  ],
                  attrs: { alt: "Directus Logo", src: n("2224") },
                }),
              ]
            ),
            a(
              "div",
              { staticClass: "content" },
              [
                a("h1", { staticClass: "title type-heading-large" }, [
                  e._v(e._s(e.heading)),
                ]),
                e._t("default"),
              ],
              2
            ),
            a(
              "div",
              { staticClass: "public-view-notice" },
              [e._t("notice")],
              2
            ),
          ]),
          a("div", { staticClass: "art", style: e.artStyles }, [
            e.project_foreground.asset_url
              ? a("img", {
                  staticClass: "logo",
                  attrs: {
                    src: e.project_foreground.asset_url,
                    alt: e.project_name,
                  },
                })
              : e._e(),
            e.project_public_note
              ? a("div", {
                  staticClass: "public-note selectable",
                  domProps: { innerHTML: e._s(e.project_public_note) },
                })
              : e._e(),
          ]),
        ]);
      },
      o = [],
      i =
        (n("a4d3"),
        n("4de4"),
        n("4160"),
        n("e439"),
        n("dbb4"),
        n("b64b"),
        n("2ca0"),
        n("159b"),
        n("ade3")),
      r = n("9224"),
      s = n("2f62"),
      c = n("e0c1"),
      l = n.n(c);
    function u(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function d(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? u(Object(n), !0).forEach(function (t) {
              Object(i["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : u(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var f = {
        project_color: "project-background-color",
        project_background: { asset_url: null },
        project_foreground: { asset_url: null },
        project_name: "Directus",
        project_public_note: null,
      },
      m = {
        name: "PublicView",
        props: {
          heading: { type: String, required: !0 },
          wide: { type: Boolean, default: !1 },
        },
        computed: d({}, Object(s["c"])(["currentProject"]), {
          artStyles: function () {
            var e, t;
            return (
              null === (e = this.project_background) || void 0 === e
                ? void 0
                : e.asset_url
            )
              ? {
                  backgroundImage: "url(".concat(
                    null === (t = this.project_background) || void 0 === t
                      ? void 0
                      : t.asset_url,
                    ")"
                  ),
                }
              : {
                  backgroundColor: this.project_color.startsWith("#")
                    ? this.project_color
                    : "var(--".concat(this.project_color, ")"),
                };
          },
          project_color: function () {
            var e, t;
            return (
              (null === (e = this.currentProject) || void 0 === e
                ? void 0
                : null === (t = e.data) || void 0 === t
                ? void 0
                : t.project_color) || f.project_color
            );
          },
          project_background: function () {
            var e, t;
            return (
              (null === (e = this.currentProject) || void 0 === e
                ? void 0
                : null === (t = e.data) || void 0 === t
                ? void 0
                : t.project_background) || f.project_background
            );
          },
          project_foreground: function () {
            var e, t;
            return (
              (null === (e = this.currentProject) || void 0 === e
                ? void 0
                : null === (t = e.data) || void 0 === t
                ? void 0
                : t.project_foreground) || f.project_foreground
            );
          },
          project_name: function () {
            var e, t;
            return (
              (null === (e = this.currentProject) || void 0 === e
                ? void 0
                : null === (t = e.data) || void 0 === t
                ? void 0
                : t.project_name) || f.project_name
            );
          },
          project_public_note: function () {
            var e,
              t,
              n =
                (null === (e = this.currentProject) || void 0 === e
                  ? void 0
                  : null === (t = e.data) || void 0 === t
                  ? void 0
                  : t.project_public_note) || f.project_public_note;
            return n ? l()(n) : null;
          },
          version: function () {
            return "Directus v".concat(r["a"]);
          },
        }),
      },
      p = m,
      h = (n("4b93"), n("2877")),
      g = Object(h["a"])(p, a, o, !1, null, "1793d2af", null);
    t["a"] = g.exports;
  },
  "8a0c": function (e, t, n) {
    "use strict";
    var a = function (e, t) {
        var n = t._c;
        return n(
          "span",
          {
            staticClass: "public-notice",
            style: { color: "var(--" + t.props.color + ")" },
          },
          [
            t.props.loading
              ? n("v-spinner", {
                  attrs: {
                    size: 20,
                    "line-size": 2,
                    color: "--blue-grey",
                    "background-color": "--blue-grey-100",
                  },
                })
              : t._e(),
            !t.props.loading && t.props.icon
              ? n("v-icon", {
                  attrs: { name: t.props.icon, color: "--" + t.props.color },
                })
              : t._e(),
            n("span", { staticClass: "copy" }, [t._t("default")], 2),
          ],
          1
        );
      },
      o = [],
      i = {
        name: "PublicNotice",
        props: {
          color: { type: String, default: "blue-grey" },
          icon: { type: String, default: null },
          loading: { type: Boolean, default: !1 },
        },
      },
      r = i,
      s = (n("f663"), n("2877")),
      c = Object(s["a"])(r, a, o, !0, null, "55136ad7", null);
    t["a"] = c.exports;
  },
  "8a3c": function (e, t, n) {},
  "8bbb": function (e, t, n) {
    "use strict";
    var a = n("bab1"),
      o = n.n(a);
    o.a;
  },
  "8c93": function (e, t, n) {},
  "8d0f": function (e, t, n) {
    var a = {
      "./af-ZA/index.json": ["5c11", "lang-af-ZA-index-json"],
      "./ar-SA/index.json": ["bfef", "lang-ar-SA-index-json"],
      "./ca-ES/index.json": ["7f55", "lang-ca-ES-index-json"],
      "./cs-CZ/index.json": ["6e93", "lang-cs-CZ-index-json"],
      "./da-DK/index.json": ["72b2", "lang-da-DK-index-json"],
      "./de-DE/index.json": ["d913", "lang-de-DE-index-json"],
      "./el-GR/index.json": ["32bc", "lang-el-GR-index-json"],
      "./en-US/index.json": ["1e69"],
      "./es-419/index.json": ["140b", "lang-es-419-index-json"],
      "./es-CL/index.json": ["6484", "lang-es-CL-index-json"],
      "./es-ES/index.json": ["f614", "lang-es-ES-index-json"],
      "./fi-FI/index.json": ["87f4", "lang-fi-FI-index-json"],
      "./fr-FR/index.json": ["02ea", "lang-fr-FR-index-json"],
      "./he-IL/index.json": ["e6e9", "lang-he-IL-index-json"],
      "./hu-HU/index.json": ["3b0b", "lang-hu-HU-index-json"],
      "./id-ID/index.json": ["de64", "lang-id-ID-index-json"],
      "./is-IS/index.json": ["365f", "lang-is-IS-index-json"],
      "./it-IT/index.json": ["ad03", "lang-it-IT-index-json"],
      "./ja-JP/index.json": ["25ae", "lang-ja-JP-index-json"],
      "./ko-KR/index.json": ["14f3", "lang-ko-KR-index-json"],
      "./lt-LT/index.json": ["2358", "lang-lt-LT-index-json"],
      "./ms-MY/index.json": ["cf52", "lang-ms-MY-index-json"],
      "./nl-NL/index.json": ["3f8f", "lang-nl-NL-index-json"],
      "./no-NO/index.json": ["0688", "lang-no-NO-index-json"],
      "./pl-PL/index.json": ["4927", "lang-pl-PL-index-json"],
      "./pt-BR/index.json": ["2385", "lang-pt-BR-index-json"],
      "./pt-PT/index.json": ["3028", "lang-pt-PT-index-json"],
      "./ro-RO/index.json": ["2ace", "lang-ro-RO-index-json"],
      "./ru-RU/index.json": ["3d1e", "lang-ru-RU-index-json"],
      "./sk-SK/index.json": ["79eb", "lang-sk-SK-index-json"],
      "./sr-SP/index.json": ["dc37", "lang-sr-SP-index-json"],
      "./sv-SE/index.json": ["c0fd", "lang-sv-SE-index-json"],
      "./tr-TR/index.json": ["e817", "lang-tr-TR-index-json"],
      "./uk-UA/index.json": ["af07", "lang-uk-UA-index-json"],
      "./vi-VN/index.json": ["fe84", "lang-vi-VN-index-json"],
      "./zh-CN/index.json": ["c224", "lang-zh-CN-index-json"],
      "./zh-TW/index.json": ["116c", "lang-zh-TW-index-json"],
    };
    function o(e) {
      if (!n.o(a, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = a[e],
        o = t[0];
      return Promise.all(t.slice(1).map(n.e)).then(function () {
        return n.t(o, 3);
      });
    }
    (o.keys = function () {
      return Object.keys(a);
    }),
      (o.id = "8d0f"),
      (e.exports = o);
  },
  "8e69": function (e, t, n) {},
  "8e99": function (e, t, n) {
    var a = {
      "./calendar/options.vue": ["1489", "chunk-25f5bbaa"],
      "./cards/options.vue": ["bc51", "chunk-53ad5f28"],
      "./tabular/options.vue": ["1ee4", "chunk-7ff97aaa"],
      "./timeline/options.vue": ["a1c3", "chunk-24c13961"],
    };
    function o(e) {
      if (!n.o(a, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = a[e],
        o = t[0];
      return n.e(t[1]).then(function () {
        return n(o);
      });
    }
    (o.keys = function () {
      return Object.keys(a);
    }),
      (o.id = "8e99"),
      (e.exports = o);
  },
  9082: function (e, t, n) {},
  "90e7": function (e, t, n) {},
  9224: function (e) {
    e.exports = JSON.parse('{"a":"8.8.1"}');
  },
  9228: function (e, t, n) {
    "use strict";
    var a = n("b72a"),
      o = n.n(a);
    o.a;
  },
  9234: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:checkboxes_relational","version":"1.0.0","types":["o2m"],"relation":"m2m","fieldset":true,"icon":"check_box","options":{"grid":{"name":"$t:grid","comment":"$t:grid_comment","interface":"numeric","type":"INT","default":2},"template":{"name":"$t:item_template","comment":"$t:item_template_comment","interface":"text-input","options":{"placeholder":"$t:item_template_placeholder"}},"listing_template":{"name":"$t:listing_template","comment":"$t:listing_template_comment","interface":"text-input","options":{"placeholder":"$t:listing_template_placeholder"}}}}'
    );
  },
  "92ac": function (e, t, n) {},
  9696: function (e) {
    e.exports = JSON.parse(
      '{"layouts":{"calendar":{"calendar":"Calendar","fields":"Fields","today":"today","events":"Events","moreEvents":"and {amount} more...","noEvents":"no events yet!","date":"Date","datetime":"Datetime","time":"Time","title":"Title","color":"Color"},"cards":{"cards":"Cards","title":"Title","subtitle":"Subtitle","src":"Image Source","content":"Body Content","fit":"Fit"},"tabular":{"tabular":"Table","fields":"Fields"},"timeline":{"timeline":"Timeline","fields":"Fields","today":"today","events":"Events","moreEvents":"and {amount} more...","noEvents":"no events yet!","date":"Date","content":"Content","title":"Title","color":"Color"}}}'
    );
  },
  9714: function (e, t, n) {
    "use strict";
    var a = n("28d6"),
      o = n.n(a);
    o.a;
  },
  "989b": function (e, t, n) {},
  9923: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "i18n", function () {
        return d;
      }),
      n.d(t, "availableLanguages", function () {
        return p;
      }),
      n.d(t, "loadLanguageAsync", function () {
        return h;
      });
    n("caad"), n("b64b"), n("d3b7"), n("2532"), n("96cf");
    var a = n("1da1"),
      o = n("2b0e"),
      i = n("a925"),
      r = n("1e69"),
      s = n("1c75"),
      c = n("9696"),
      l = n("8189"),
      u = n("2ef0");
    o["default"].use(i["a"]);
    var d = new i["a"]({
        locale: "en-US",
        fallbackLocale: "en-US",
        messages: { "en-US": Object(u["merge"])(r, s, c) },
        dateTimeFormats: { "en-US": l },
        silentTranslationWarn: !0,
      }),
      f = ["en-US"];
    function m(e) {
      return (
        (d.locale = e),
        document.querySelector("html").setAttribute("lang", e),
        e
      );
    }
    var p = {
      "af-ZA": "Afrikaans (South Africa)",
      "ar-SA": "Arabic (Saudi Arabia)",
      "ca-ES": "Catalan (Spain)",
      "zh-CN": "Chinese (Simplified)",
      "cs-CZ": "Czech (Czech Republic)",
      "da-DK": "Danish (Denmark)",
      "nl-NL": "Dutch (Netherlands)",
      "en-US": "English (United States)",
      "fi-FI": "Finnish (Finland)",
      "fr-FR": "French (France)",
      "de-DE": "German (Germany)",
      "el-GR": "Greek (Greece)",
      "he-IL": "Hebrew (Israel)",
      "hu-HU": "Hungarian (Hungary)",
      "is-IS": "Icelandic (Iceland)",
      "id-ID": "Indonesian (Indonesia)",
      "it-IT": "Italian (Italy)",
      "ja-JP": "Japanese (Japan)",
      "ko-KR": "Korean (Korea)",
      "ms-MY": "Malay (Malaysia)",
      "no-NO": "Norwegian (Norway)",
      "pl-PL": "Polish (Poland)",
      "pt-BR": "Portuguese (Brazil)",
      "pt-PT": "Portuguese (Portugal)",
      "ru-RU": "Russian (Russian Federation)",
      "es-ES": "Spanish (Spain)",
      "es-419": "Spanish (Latin America)",
      "zh-TW": "Taiwanese Mandarin (Taiwan)",
      "tr-TR": "Turkish (Turkey)",
      "uk-UA": "Ukrainian (Ukraine)",
      "vi-VN": "Vietnamese (Vietnam)",
    };
    function h(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var a, o, i, r;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (!1 !== Object.keys(p).includes(t)) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      if (d.locale === t) {
                        e.next = 49;
                        break;
                      }
                      if (f.includes(t)) {
                        e.next = 48;
                        break;
                      }
                      return (
                        (e.prev = 6),
                        (e.next = 9),
                        n("8d0f")("./".concat(t, "/index.json"))
                      );
                    case 9:
                      (a = e.sent), d.mergeLocaleMessage(t, a), (e.next = 16);
                      break;
                    case 13:
                      (e.prev = 13),
                        (e.t0 = e["catch"](6)),
                        console.warn("Couldn't fetch language messages");
                    case 16:
                      return (
                        (e.prev = 16),
                        (e.next = 19),
                        n("c1f1")("./".concat(t, "/interfaces.json"))
                      );
                    case 19:
                      (o = e.sent), d.mergeLocaleMessage(t, o), (e.next = 26);
                      break;
                    case 23:
                      (e.prev = 23),
                        (e.t1 = e["catch"](16)),
                        console.warn(
                          "Couldn't fetch language interface messages"
                        );
                    case 26:
                      return (
                        (e.prev = 26),
                        (e.next = 29),
                        n("063a")("./".concat(t, "/layouts.json"))
                      );
                    case 29:
                      (i = e.sent), d.mergeLocaleMessage(t, i), (e.next = 36);
                      break;
                    case 33:
                      (e.prev = 33),
                        (e.t2 = e["catch"](26)),
                        console.warn(
                          "Couldn't fetch language layouts messages"
                        );
                    case 36:
                      return (
                        (e.prev = 36),
                        (e.next = 39),
                        n("0bc4")("./".concat(t, "/date-format.json"))
                      );
                    case 39:
                      (r = e.sent), d.setDateTimeFormat(t, r), (e.next = 46);
                      break;
                    case 43:
                      (e.prev = 43),
                        (e.t3 = e["catch"](36)),
                        console.warn(
                          "Couldn't fetch date formats for language"
                        );
                    case 46:
                      return f.push(t), e.abrupt("return", m(t));
                    case 48:
                      return e.abrupt("return", Promise.resolve(m(t)));
                    case 49:
                      return e.abrupt("return", Promise.resolve(t));
                    case 50:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [6, 13],
                [16, 23],
                [26, 33],
                [36, 43],
              ]
            );
          })
        )),
        g.apply(this, arguments)
      );
    }
    d.availableLanguages = p;
  },
  "9a58": function (e, t, n) {
    "use strict";
    var a = n("8a3c"),
      o = n.n(a);
    o.a;
  },
  "9a9a": function (e, t, n) {},
  "9bf0": function (e, t, n) {},
  "9cc7": function (e, t) {},
  "9e19": function (e, t, n) {
    var a = {
      "./2fa-secret/input.vue": ["4280", "chunk-2d20f576", "chunk-0b3e4f54"],
      "./button-group/input.vue": ["0e9b", "chunk-8c13f210"],
      "./calendar/input.vue": ["804b", "chunk-a3670984"],
      "./checkboxes-relational/input.vue": ["e3d9", "chunk-1232e627"],
      "./checkboxes/input.vue": ["0e66", "chunk-2d50aa6f"],
      "./code/input.vue": ["daaa", "chunk-49328605", "chunk-3020ac28"],
      "./collections/input.vue": ["e132", "chunk-41dc27c1"],
      "./color-palette/input.vue": ["e32a", "chunk-c9324d3c"],
      "./color/input.vue": ["41a1", "chunk-7a3c1fd6"],
      "./date/input.vue": ["9420", "chunk-c2d84bf0"],
      "./datetime-created/input.vue": ["4f85", "chunk-58b31a04"],
      "./datetime-updated/input.vue": ["bcc1", "chunk-77c5cde0"],
      "./datetime/input.vue": ["7741", "chunk-c8cab390"],
      "./divider/input.vue": ["0812", "chunk-02ec76db"],
      "./dropdown/input.vue": ["61e2", "chunk-4c268a7f"],
      "./file-preview/input.vue": ["fab5", "chunk-7a5057ef"],
      "./file-size/input.vue": ["0221", "chunk-1c6fa0e2"],
      "./file/input.vue": ["dea2", "chunk-6853be89"],
      "./files/input.vue": ["6ab8", "chunk-4f2e4d62"],
      "./hashed/input.vue": ["9137", "chunk-dbda98f0"],
      "./icon/input.vue": ["3cd5", "chunk-45c3938e"],
      "./interface-options/input.vue": ["db31", "chunk-8dd65600"],
      "./interface-types/input.vue": ["14cd", "chunk-3bcd24b1"],
      "./interfaces/input.vue": ["1749", "chunk-13145859"],
      "./json/input.vue": ["c293", "chunk-49328605", "chunk-5bb3e31e"],
      "./key-value/input.vue": ["3f04", "chunk-3bcec2c4"],
      "./language/input.vue": ["1f1b", "chunk-a055d4c6"],
      "./many-to-many/input.vue": ["035b", "chunk-625cd580"],
      "./many-to-one/input.vue": ["085d", "chunk-419d9f22"],
      "./map/input.vue": ["4662", "chunk-d2d01fae"],
      "./markdown/input.vue": ["a9ef", "chunk-304578ba"],
      "./multiselect/input.vue": ["f835", "chunk-073b9d5c"],
      "./numeric/input.vue": ["d688", "chunk-425807d2"],
      "./one-to-many/input.vue": ["2c47", "chunk-ea289bc4"],
      "./owner/input.vue": ["fada", "chunk-0f4d6f6c"],
      "./password/input.vue": ["dae4", "chunk-7203dae1"],
      "./preview/input.vue": ["fa4a", "chunk-03732e18"],
      "./primary-key/input.vue": ["cf6c", "chunk-50e1542a"],
      "./radio-buttons/input.vue": ["75f8", "chunk-2a043d5e"],
      "./rating/input.vue": ["da5b", "chunk-70056a8e"],
      "./repeater/input.vue": ["32cb", "chunk-264bd833"],
      "./slider/input.vue": ["3bfc", "chunk-587c9700"],
      "./slug/input.vue": ["bbba", "chunk-2fe9f608", "chunk-14f90334"],
      "./sort/input.vue": ["4e08", "chunk-51c862a2"],
      "./status/input.vue": ["9162", "chunk-3c5ed143"],
      "./switch/input.vue": ["f027", "chunk-64408c34"],
      "./tags/input.vue": ["2eb1", "chunk-5ca5135c"],
      "./text-input/input.vue": ["26b2", "chunk-59b7c6fa"],
      "./textarea/input.vue": ["c8d2", "chunk-44fd0744"],
      "./time/input.vue": ["d8b4", "chunk-3be46253"],
      "./toggle-icon/input.vue": ["8df3", "chunk-29fe6f82"],
      "./translation/input.vue": ["8485", "chunk-4b51bd42"],
      "./user-roles/input.vue": ["afd9", "chunk-7f07aad8"],
      "./user-updated/input.vue": ["a2c4", "chunk-6c8a16bc"],
      "./user/input.vue": ["900d", "chunk-347cc0fb"],
      "./wysiwyg/input.vue": ["1df9", "chunk-7d14240d"],
    };
    function o(e) {
      if (!n.o(a, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = a[e],
        o = t[0];
      return Promise.all(t.slice(1).map(n.e)).then(function () {
        return n(o);
      });
    }
    (o.keys = function () {
      return Object.keys(a);
    }),
      (o.id = "9e19"),
      (e.exports = o);
  },
  "9ea0": function (e, t, n) {
    "use strict";
    var a = n("817d"),
      o = n.n(a);
    o.a;
  },
  "9fb0": function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "RESET", function () {
        return a;
      }),
      n.d(t, "LOGIN_PENDING", function () {
        return o;
      }),
      n.d(t, "LOGIN_SUCCESS", function () {
        return i;
      }),
      n.d(t, "LOGIN_FAILED", function () {
        return r;
      }),
      n.d(t, "LOGOUT", function () {
        return s;
      }),
      n.d(t, "REFRESH_TOKEN", function () {
        return c;
      }),
      n.d(t, "REMOVE_AUTH_ERROR", function () {
        return l;
      }),
      n.d(t, "CHANGE_API", function () {
        return u;
      }),
      n.d(t, "SWITCH_PROJECT", function () {
        return d;
      }),
      n.d(t, "SET_BOOKMARKS", function () {
        return f;
      }),
      n.d(t, "ADD_BOOKMARK", function () {
        return m;
      }),
      n.d(t, "DELETE_BOOKMARK", function () {
        return p;
      }),
      n.d(t, "SET_COLLECTIONS", function () {
        return h;
      }),
      n.d(t, "ADD_COLLECTION", function () {
        return g;
      }),
      n.d(t, "DELETE_COLLECTION", function () {
        return y;
      }),
      n.d(t, "UPDATE_COLLECTION", function () {
        return v;
      }),
      n.d(t, "DISCARD_CHANGES", function () {
        return b;
      }),
      n.d(t, "ITEM_CREATED", function () {
        return _;
      }),
      n.d(t, "START_EDITING", function () {
        return j;
      }),
      n.d(t, "UNSTAGE_VALUE", function () {
        return k;
      }),
      n.d(t, "STAGE_VALUE", function () {
        return w;
      }),
      n.d(t, "ADD_FIELD", function () {
        return O;
      }),
      n.d(t, "UPDATE_FIELD", function () {
        return $;
      }),
      n.d(t, "UPDATE_FIELDS", function () {
        return x;
      }),
      n.d(t, "REMOVE_FIELD", function () {
        return S;
      }),
      n.d(t, "SET_INTERFACES", function () {
        return C;
      }),
      n.d(t, "SET_LAYOUTS", function () {
        return E;
      }),
      n.d(t, "SET_MODULES", function () {
        return P;
      }),
      n.d(t, "STORE_HYDRATED", function () {
        return T;
      }),
      n.d(t, "HYDRATING_FAILED", function () {
        return I;
      }),
      n.d(t, "SET_PERMISSIONS", function () {
        return N;
      }),
      n.d(t, "ADD_PERMISSION", function () {
        return A;
      }),
      n.d(t, "LATENCY", function () {
        return R;
      }),
      n.d(t, "LOADING_START", function () {
        return D;
      }),
      n.d(t, "LOADING_FINISHED", function () {
        return L;
      }),
      n.d(t, "SET_CURRENT_USER", function () {
        return F;
      }),
      n.d(t, "UPDATE_CURRENT_USER", function () {
        return U;
      }),
      n.d(t, "SET_RELATIONS", function () {
        return B;
      }),
      n.d(t, "ADD_RELATION", function () {
        return K;
      }),
      n.d(t, "UPDATE_RELATION", function () {
        return M;
      }),
      n.d(t, "SET_SERVER_INFO", function () {
        return V;
      }),
      n.d(t, "TOGGLE_NAV", function () {
        return q;
      }),
      n.d(t, "TOGGLE_INFO", function () {
        return z;
      }),
      n.d(t, "SET_USERS", function () {
        return H;
      }),
      n.d(t, "PUSH_NOTIFICATION", function () {
        return J;
      }),
      n.d(t, "REMOVE_NOTIFICATION", function () {
        return W;
      }),
      n.d(t, "SET_CURRENT_PROJECT", function () {
        return G;
      }),
      n.d(t, "UPDATE_PROJECT", function () {
        return Y;
      }),
      n.d(t, "SET_PROJECT_STATUS", function () {
        return Z;
      }),
      n.d(t, "INIT_PROJECTS", function () {
        return Q;
      }),
      n.d(t, "SET_SETTINGS", function () {
        return X;
      }),
      n.d(t, "SET_SETTING", function () {
        return ee;
      });
    var a = "🔥 Reset State",
      o = "🔒 Login Pending",
      i = "🔒✅ Login Successful",
      r = "🔒❌ Login Failed",
      s = "🔒 Logout",
      c = "🔒 Refresh Token",
      l = "🔒 Remove Auth Error",
      u = "🔒 Change API",
      d = "🔒 Switch API Project ",
      f = "🔖 Set Bookmarks",
      m = "🔖 Add Bookmark",
      p = "🔖 Delete Bookmark",
      h = "🗄 Set Collections",
      g = "🗄 Add Collection",
      y = "🗄 Remove Collection",
      v = "🗄 Update Collection",
      b = "📝 Discard Changes",
      _ = "📝 Item Saved",
      j = "📝 Start Editing",
      k = "📝 Unstage Value",
      w = "📝 Stage Value",
      O = "📌 Add Field",
      $ = "📌 Update Field",
      x = "📌 Update Fields",
      S = "📌 Remove Field",
      C = "📦 Set Interfaces",
      E = "📦 Set Layouts",
      P = "📦 Set Modules",
      T = "🏪 Store Hydrated",
      I = "🏪❌ Store Hydration Failed",
      N = "🙅🏻‍♂️ Set Permissions",
      A = "🙅🏻‍♂️ Add Permissions",
      R = "⏱ Latency Check",
      D = "⏳ Queue Request",
      L = "⏳ Remove Request from Queue",
      F = "👨🏻‍💻✅ Set Current User",
      U = "👨🏻‍💻 Current User Updated",
      B = "❤️ Set Relations",
      K = "❤️ Add Relation",
      M = "❤️ Update Relation",
      V = "🔮 Set Server Info",
      q = "🎨 Toggle Nav Sidebar",
      z = "🎨 Toggle Info Sidebar",
      H = "👯‍♀️ Set Users",
      J = "💬 Push Notification",
      W = "💬❌ Remove Notification",
      G = "🌟 Set Current Project",
      Y = "🌟 Update Project",
      Z = "🌟 Set Status",
      Q = "🌟 Initialize Projects",
      X = "⚙️ Set Settings",
      ee = "⚙️ Set Setting";
  },
  "9fea": function (e, t, n) {},
  a14e: function (e, t, n) {
    "use strict";
    var a = n("6368"),
      o = n.n(a);
    o.a;
  },
  a338: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:status","version":"1.1.0","types":["status"],"recommended":{"defaultValue":"draft","length":20},"fieldset":true,"icon":"outlined_flag","options":{"simpleBadge":{"name":"$t:simple_badge","comment":"$t:simple_badge_comment","interface":"switch","type":"BOOLEAN","default":true},"status_mapping":{"name":"$t:status_mapping","comment":"$t:status_mapping_comment","interface":"repeater","type":"JSON","options":{"structure":"object","structure_key":"value","template":"{{name}} ({{value}})","fields":[{"field":"name","interface":"text-input","type":"String"},{"field":"value","interface":"text-input","type":"String"},{"field":"text_color","interface":"color-palette","type":"String"},{"field":"background_color","interface":"color-palette","type":"String"},{"field":"browse_subdued","interface":"switch","type":"boolean"},{"field":"browse_badge","interface":"switch","type":"boolean"},{"field":"soft_delete","interface":"switch","type":"boolean"},{"field":"required_fields","interface":"switch","type":"boolean"},{"field":"published","interface":"switch","type":"boolean"}]},"default":{"published":{"name":"$t:published","value":"published","text_color":"blue-100","background_color":"blue","browse_subdued":false,"browse_badge":true,"soft_delete":false,"published":true,"required_fields":true},"draft":{"name":"$t:draft","value":"draft","text_color":"blue-grey-100","background_color":"blue-grey","browse_subdued":true,"browse_badge":true,"soft_delete":false,"published":false,"required_fields":false},"deleted":{"name":"$t:deleted","value":"deleted","text_color":"red-100","background_color":"red","browse_subdued":true,"browse_badge":true,"soft_delete":true,"published":false,"required_fields":false}}}}}'
    );
  },
  a457: function (e, t, n) {},
  a4b0: function (e, t, n) {
    "use strict";
    var a = n("376e"),
      o = n.n(a);
    o.a;
  },
  a609: function (e, t, n) {
    "use strict";
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("transition", { attrs: { name: "fade" } }, [
          n(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.active,
                  expression: "active",
                },
              ],
              staticClass: "loader",
              class: e.area,
              style: { zIndex: e.zIndex },
            },
            [
              n("div", {
                staticClass: "overlay",
                class: { transparent: e.transparent },
              }),
              n(
                "transition",
                { attrs: { name: "fade" } },
                [
                  n("v-spinner", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.spinnerActive,
                        expression: "spinnerActive",
                      },
                    ],
                    staticClass: "spinner",
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ]);
      },
      o = [],
      i =
        (n("caad"),
        n("a9e3"),
        {
          name: "Loader",
          props: {
            area: {
              type: String,
              default: null,
              validator: function (e) {
                var t = ["content", "full-page"];
                return t.includes(e);
              },
            },
            transparent: { type: Boolean, default: !1 },
            delay: { type: Number, default: 0 },
            spinnerDelay: { type: Number, default: 0 },
            zIndex: { type: Number, default: 500 },
          },
          data: function () {
            return { active: !1, spinnerActive: !1 };
          },
          created: function () {
            var e = this;
            setTimeout(function () {
              e.active = !0;
            }, this.delay),
              setTimeout(function () {
                e.spinnerActive = !0;
              }, this.delay + this.spinnerDelay);
          },
        }),
      r = i,
      s = (n("acf3"), n("2877")),
      c = Object(s["a"])(r, a, o, !1, null, "58cbba58", null);
    t["a"] = c.exports;
  },
  a619: function (e, t, n) {},
  a64e: function (e, t, n) {
    "use strict";
    var a = n("2d93"),
      o = n.n(a);
    o.a;
  },
  a6e7: function (e) {
    e.exports = JSON.parse(
      '{"name":"WYSIWYG","version":"1.0.2","types":["string"],"icon":"format_quote","recommended":{"length":65534},"options":{"toolbar":{"name":"$t:toolbar","comment":"$t:toolbar_comment","interface":"checkboxes","default":["bold","italic","underline","removeformat","link","bullist","numlist","blockquote","h1","h2","h3","image","media","hr","code","fullscreen"],"options":{"choices":{"aligncenter":"Align Center","alignjustify":"Align Justify","alignleft":"Align Left","alignnone":"Align None","alignright":"Align Right","forecolor":"Foreground Color","backcolor":"Background Color","bold":"Bold","italic":"Italic","underline":"Underline","strikethrough":"Strikethrough","subscript":"Subscript","superscript":"Superscript","blockquote":"Blockquote","bullist":"Bullet List","numlist":"Numbered List","hr":"Horizontal Rule","link":"Add Link","unlink":"Remove Link","media":"Add Media","image":"Add Image","copy":"Copy","cut":"Cut","paste":"Paste","h1":"Heading 1","h2":"Heading 2","h3":"Heading 3","h4":"Heading 4","h5":"Heading 5","h6":"Heading 6","fontselect":"Select Font","fontsizeselect":"Select Font Size","indent":"Indent","outdent":"Outdent","undo":"Undo","redo":"Redo","remove":"Remove","removeformat":"Remove Format","selectall":"Select All","table":"Table","visualaid":"View invisible elements","code":"View Source","fullscreen":"Full Screen","ltr rtl":"Directionality"}}},"custom_formats":{"name":"$t:custom_formats","comment":"$t:custom_formats_comment","interface":"json","default":null,"options":{"template":[{"title":"My Custom Format","inline":"span","classes":"custom-wrapper","styles":{"color":"#00ff00","font-size":"20px"},"attributes":{"title":"My Custom Wrapper"}}]}},"tinymce_options":{"name":"$t:tinymce_options","comment":"$t:tinymce_options_comment","interface":"json","default":null,"advanced":true}}}'
    );
  },
  a731: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:datetime","version":"1.0.1","types":["datetime","datetime_updated","datetime_created"],"icon":"access_time","options":{"min":{"name":"$t:min","comment":"$t:min_comment","interface":"datetime"},"max":{"name":"$t:max","comment":"$t:max_comment","interface":"datetime"},"localized":{"name":"$t:localized","comment":"$t:localized_comment","interface":"switch","value":true},"showRelative":{"name":"$t:relative","interface":"switch","comment":"$t:relative_comment","value":false},"iconLeft":{"name":"$t:icon_left","comment":"$t:icon_left_comment","interface":"icon","advanced":true},"iconRight":{"name":"$t:icon_right","comment":"$t:icon_right_comment","interface":"icon","advanced":true},"defaultToCurrentDatetime":{"name":"$t:default_to_current_datetime","comment":"$t:default_to_current_datetime_comment","interface":"switch","advanced":true},"format":{"name":"$t:format","comment":"$t:format_comment","interface":"dropdown","advanced":true,"default":"mdy","options":{"choices":{"mdy":"mm/dd/yyyy hh:mm:ss","dmy":"dd/mm/yyyy hh:mm:ss","ymd":"yyyy-mm-dd hh:mm:ss"}}}}}'
    );
  },
  a7e3: function (e, t, n) {
    "use strict";
    var a = n("3af5"),
      o = n.n(a);
    o.a;
  },
  acf3: function (e, t, n) {
    "use strict";
    var a = n("f665"),
      o = n.n(a);
    o.a;
  },
  ae42: function (e) {
    e.exports = JSON.parse(
      '{"name":"Key / Value","version":"1.0.0","icon":"list_alt","types":["json"],"options":{"keyInterface":{"name":"$t:key_interface","interface":"interfaces","default":"text-input","options":{"relational":false}},"keyType":{"name":"$t:key_data_type","interface":"interface-types","default":"string","options":{"interfaceField":"keyInterface"}},"keyOptions":{"name":"$t:key_options","interface":"interface-options","default":{"placeholder":"Key"},"options":{"interfaceField":"keyInterface"}},"valueInterface":{"name":"$t:value_interface","interface":"interfaces","default":"text-input","options":{"relational":false}},"valueType":{"name":"$t:value_data_type","interface":"interface-types","default":"string","options":{"interfaceField":"valueInterface"}},"valueOptions":{"name":"$t:value_options","interface":"interface-options","default":{"placeholder":"Value"},"options":{"interfaceField":"valueInterface"}}}}'
    );
  },
  af36: function (e, t, n) {
    "use strict";
    var a = n("b276"),
      o = n.n(a);
    o.a;
  },
  affa: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:icon","version":"1.0.1","types":["string"],"icon":"insert_emoticon","recommended":{"length":20},"options":{}}'
    );
  },
  b01c: function (e, t, n) {},
  b0bd: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:textarea","version":"1.0.0","types":["string"],"icon":"text_fields","recommended":{"length":2000},"options":{"rows":{"name":"$t:rows","comment":"$t:rows_comment","interface":"numeric","options":{"min":5,"max":100},"default":8},"placeholder":{"name":"$t:placeholder","comment":"$t:placeholder_comment","interface":"text-input","length":200},"serif":{"name":"$t:serif","comment":"$t:serif_comment","interface":"switch","default":false,"options":{"labelOn":"Serif Font","labelOff":"Sans-Serif Font"}}}}'
    );
  },
  b276: function (e, t, n) {},
  b56c: function (e, t, n) {
    "use strict";
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("the-mask", {
          directives: [{ name: "focus", rawName: "v-focus" }],
          staticClass: "otp-input",
          attrs: {
            type: "text",
            value: e.value,
            mask: "###-###",
            placeholder: "***-***",
            masked: !1,
          },
          on: { input: e.onInput },
        });
      },
      o = [],
      i = {
        name: "OTPInput",
        props: { value: { type: String, default: "" } },
        methods: {
          onInput: function (e) {
            (0 !== e.length && 6 !== e.length) || this.$emit("input", e);
          },
        },
      },
      r = i,
      s = (n("3241"), n("2877")),
      c = Object(s["a"])(r, a, o, !1, null, "4e68fdd0", null);
    t["a"] = c.exports;
  },
  b626: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:switch","version":"1.0.0","types":["boolean"],"icon":"toggle_on","options":{"labelOn":{"name":"$t:label_on","comment":"$t:label_on_comment","interface":"text-input"},"labelOff":{"name":"$t:label_off","comment":"$t:label_off_comment","interface":"text-input"},"checkbox":{"name":"$t:checkbox","comment":"$t:checkbox_comment","interface":"switch","default":false}}}'
    );
  },
  b694: function (e, t, n) {},
  b6da: function (e) {
    e.exports = JSON.parse('{"name":"$t:tabular","icon":"view_headline"}');
  },
  b701: function (e, t, n) {},
  b72a: function (e, t, n) {},
  b8dc: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:radio","version":"1.0.1","types":["string"],"fieldset":true,"icon":"radio_button_checked","recommended":{"length":100},"options":{"choices":{"name":"$t:choices","comment":"$t:choices_comment","interface":"key-value","type":"JSON","options":{"keyInterface":"text-input","keyType":"string","keyOptions":{"placeholder":"key","monospace":true},"valueInterface":"text-input","valueType":"string","valueOptions":{"placeholder":"value","monospace":true}}},"format":{"name":"$t:format","comment":"$t:format_comment","interface":"switch","type":"BOOLEAN","default":true}}}'
    );
  },
  b93e: function (e, t, n) {},
  baac: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:datetime_updated","version":"1.0.0","types":["datetime_updated"],"icon":"access_time","options":{"showRelative":{"name":"$t:relative","interface":"switch","comment":"$t:relative_comment","value":false}}}'
    );
  },
  bab1: function (e, t, n) {},
  bdc0: function (e, t, n) {
    "use strict";
    var a = n("7615"),
      o = n.n(a);
    o.a;
  },
  be9d: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:file","version":"1.1.0","types":["file"],"icon":"insert_drive_file","relation":"file","recommended":{"length":10},"options":{"crop":{"name":"$t:crop_preview","comment":"$t:crop_preview_comment","default":true,"interface":"switch"},"viewType":{"name":"$t:view_type","comment":"$t:view_type_comment","default":"cards","interface":"text-input"},"viewOptions":{"name":"$t:view_options","comment":"$t:view_options_comment","interface":"json","options":{"language":"application/json"},"default":{"title":"title","subtitle":"type","content":"description","src":"data"}},"viewQuery":{"name":"$t:view_query","comment":"$t:view_query_comment","interface":"json","options":{"language":"application/json"},"default":{}},"filters":{"name":"$t:filters","comment":"$t:filters_comment","interface":"json","options":{"language":"application/json"},"default":[]},"accept":{"name":"$t:accept","comment":"$t:accept_comment","interface":"text-input"},"allowDelete":{"name":"$t:allow_delete","comment":"$t:allow_delete_comment","interface":"switch","default":false}}}'
    );
  },
  bee3: function (e, t, n) {
    "use strict";
    var a = n("9bf0"),
      o = n.n(a);
    o.a;
  },
  bf67: function (e, t, n) {
    "use strict";
    var a = n("9fea"),
      o = n.n(a);
    o.a;
  },
  c00f: function (e, t, n) {
    var a = {
      "./2fa-secret/display.vue": ["29c4", "chunk-3bcdaba5"],
      "./button-group/display.vue": ["a264", "chunk-3be2e95c"],
      "./calendar/display.vue": ["3699", "chunk-3f2aeaf0"],
      "./checkboxes-relational/display.vue": ["21dc", "chunk-936374e8"],
      "./checkboxes/display.vue": ["09b5", "chunk-3bccc2c9"],
      "./code/display.vue": ["ddc0", "chunk-b2bb2780"],
      "./collections/display.vue": ["3ab4", "chunk-3bceb60d"],
      "./color-palette/display.vue": ["88d8", "chunk-40ad74ea"],
      "./color/display.vue": ["e0e4", "chunk-eb63e2f2"],
      "./date/display.vue": ["23d6", "chunk-50d05f60"],
      "./datetime-created/display.vue": ["4cc8", "chunk-7bd5c5a2"],
      "./datetime-updated/display.vue": ["46d8", "chunk-97331586"],
      "./datetime/display.vue": ["532e", "chunk-08d9dee2"],
      "./divider/display.vue": ["ce51", "chunk-22ce3451"],
      "./dropdown/display.vue": ["3f32", "chunk-3bcec31f"],
      "./file-preview/display.vue": ["c58a", "chunk-3be3ddc8"],
      "./file-size/display.vue": ["1d85", "chunk-15769862"],
      "./file/display.vue": ["f210", "chunk-22fe8d82"],
      "./files/display.vue": ["1c65", "chunk-3bcdcf7e"],
      "./hashed/display.vue": ["2085", "chunk-3bcd84a8"],
      "./icon/display.vue": ["4289", "chunk-3bce74ec"],
      "./interface-options/display.vue": ["2382", "chunk-2d0b21f1"],
      "./interface-types/display.vue": ["53e0", "chunk-2d0c847f"],
      "./interfaces/display.vue": ["d915", "chunk-3be46026"],
      "./json/display.vue": ["0bec", "chunk-3bcd5d3d"],
      "./key-value/display.vue": ["5668", "chunk-3bcef810"],
      "./language/display.vue": ["4e2d", "chunk-3d112240"],
      "./many-to-many/display.vue": ["f608", "chunk-3be53d85"],
      "./many-to-one/display.vue": ["d5d7", "chunk-d073a0ac"],
      "./map/display.vue": ["ee37", "chunk-5ffa7cda"],
      "./markdown/display.vue": ["e192", "chunk-2d22497b"],
      "./multiselect/display.vue": ["432e", "chunk-3bce781f"],
      "./numeric/display.vue": ["6b45", "chunk-3bd0115a"],
      "./one-to-many/display.vue": ["c5b4", "chunk-d56cd5f0"],
      "./owner/display.vue": ["5d1a", "chunk-373d36ce"],
      "./password/display.vue": ["9420f", "chunk-3e476fa0"],
      "./preview/display.vue": ["cd6c", "chunk-3be48dfb"],
      "./primary-key/display.vue": ["57f8", "chunk-3bcf01a1"],
      "./radio-buttons/display.vue": ["a678", "chunk-3be2f883"],
      "./rating/display.vue": ["1fd3", "chunk-19f69ce6"],
      "./repeater/display.vue": ["04d8", "chunk-3bccb045"],
      "./slider/display.vue": ["3760", "chunk-3bce130b"],
      "./slug/display.vue": ["d31a", "chunk-3be449cc"],
      "./sort/display.vue": ["a0d0", "chunk-3be2e768"],
      "./status/display.vue": ["552e", "chunk-597060b4"],
      "./switch/display.vue": ["a781", "chunk-0416f679"],
      "./tags/display.vue": ["91e0", "chunk-4697e636"],
      "./text-input/display.vue": ["b1cf", "chunk-3be35f9f"],
      "./textarea/display.vue": ["5537", "chunk-3bcef3f1"],
      "./time/display.vue": ["de3d", "chunk-3be505bf"],
      "./toggle-icon/display.vue": ["96c7", "chunk-3a78ae2c"],
      "./translation/display.vue": ["e3f1", "chunk-8e696ca2"],
      "./user-roles/display.vue": ["1a01", "chunk-3bcdc73e"],
      "./user-updated/display.vue": ["3991", "chunk-2b5a097e"],
      "./user/display.vue": ["8dce", "chunk-dd8fef6a"],
      "./wysiwyg/display.vue": ["b680", "chunk-3be36cf9"],
    };
    function o(e) {
      if (!n.o(a, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = a[e],
        o = t[0];
      return n.e(t[1]).then(function () {
        return n(o);
      });
    }
    (o.keys = function () {
      return Object.keys(a);
    }),
      (o.id = "c00f"),
      (e.exports = o);
  },
  c162: function (e, t, n) {},
  c1f1: function (e, t, n) {
    var a = {
      "./af-ZA/interfaces.json": [
        "3ad5",
        "lang-interfaces-af-ZA-interfaces-json",
      ],
      "./ar-SA/interfaces.json": [
        "7be8",
        "lang-interfaces-ar-SA-interfaces-json",
      ],
      "./ca-ES/interfaces.json": [
        "0c54",
        "lang-interfaces-ca-ES-interfaces-json",
      ],
      "./cs-CZ/interfaces.json": [
        "b1a5",
        "lang-interfaces-cs-CZ-interfaces-json",
      ],
      "./da-DK/interfaces.json": [
        "7a9f",
        "lang-interfaces-da-DK-interfaces-json",
      ],
      "./de-DE/interfaces.json": [
        "8929",
        "lang-interfaces-de-DE-interfaces-json",
      ],
      "./el-GR/interfaces.json": [
        "28c4",
        "lang-interfaces-el-GR-interfaces-json",
      ],
      "./en-US/interfaces.json": ["1c75"],
      "./es-419/interfaces.json": [
        "72e5",
        "lang-interfaces-es-419-interfaces-json",
      ],
      "./es-CL/interfaces.json": [
        "f98b",
        "lang-interfaces-es-CL-interfaces-json",
      ],
      "./es-ES/interfaces.json": [
        "9bf8",
        "lang-interfaces-es-ES-interfaces-json",
      ],
      "./fi-FI/interfaces.json": [
        "776d",
        "lang-interfaces-fi-FI-interfaces-json",
      ],
      "./fr-FR/interfaces.json": [
        "bcfe",
        "lang-interfaces-fr-FR-interfaces-json",
      ],
      "./he-IL/interfaces.json": [
        "41607",
        "lang-interfaces-he-IL-interfaces-json",
      ],
      "./hu-HU/interfaces.json": [
        "d25f",
        "lang-interfaces-hu-HU-interfaces-json",
      ],
      "./id-ID/interfaces.json": [
        "4b50",
        "lang-interfaces-id-ID-interfaces-json",
      ],
      "./is-IS/interfaces.json": [
        "9b64",
        "lang-interfaces-is-IS-interfaces-json",
      ],
      "./it-IT/interfaces.json": [
        "7edc",
        "lang-interfaces-it-IT-interfaces-json",
      ],
      "./ja-JP/interfaces.json": [
        "226b",
        "lang-interfaces-ja-JP-interfaces-json",
      ],
      "./ko-KR/interfaces.json": [
        "4f95",
        "lang-interfaces-ko-KR-interfaces-json",
      ],
      "./lt-LT/interfaces.json": [
        "4f29",
        "lang-interfaces-lt-LT-interfaces-json",
      ],
      "./ms-MY/interfaces.json": [
        "c764",
        "lang-interfaces-ms-MY-interfaces-json",
      ],
      "./nl-NL/interfaces.json": [
        "ab68",
        "lang-interfaces-nl-NL-interfaces-json",
      ],
      "./no-NO/interfaces.json": [
        "d938",
        "lang-interfaces-no-NO-interfaces-json",
      ],
      "./pl-PL/interfaces.json": [
        "5d9c",
        "lang-interfaces-pl-PL-interfaces-json",
      ],
      "./pt-BR/interfaces.json": [
        "e7d5",
        "lang-interfaces-pt-BR-interfaces-json",
      ],
      "./pt-PT/interfaces.json": [
        "a586",
        "lang-interfaces-pt-PT-interfaces-json",
      ],
      "./ro-RO/interfaces.json": [
        "5439",
        "lang-interfaces-ro-RO-interfaces-json",
      ],
      "./ru-RU/interfaces.json": [
        "68fa",
        "lang-interfaces-ru-RU-interfaces-json",
      ],
      "./sk-SK/interfaces.json": [
        "b92a",
        "lang-interfaces-sk-SK-interfaces-json",
      ],
      "./sr-SP/interfaces.json": [
        "9a87",
        "lang-interfaces-sr-SP-interfaces-json",
      ],
      "./sv-SE/interfaces.json": [
        "597f",
        "lang-interfaces-sv-SE-interfaces-json",
      ],
      "./tr-TR/interfaces.json": [
        "32fd",
        "lang-interfaces-tr-TR-interfaces-json",
      ],
      "./uk-UA/interfaces.json": [
        "54de",
        "lang-interfaces-uk-UA-interfaces-json",
      ],
      "./vi-VN/interfaces.json": [
        "6fc1",
        "lang-interfaces-vi-VN-interfaces-json",
      ],
      "./zh-CN/interfaces.json": [
        "1ff8",
        "lang-interfaces-zh-CN-interfaces-json",
      ],
      "./zh-TW/interfaces.json": [
        "5727",
        "lang-interfaces-zh-TW-interfaces-json",
      ],
    };
    function o(e) {
      if (!n.o(a, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = a[e],
        o = t[0];
      return Promise.all(t.slice(1).map(n.e)).then(function () {
        return n.t(o, 3);
      });
    }
    (o.keys = function () {
      return Object.keys(a);
    }),
      (o.id = "c1f1"),
      (e.exports = o);
  },
  c359: function (e, t, n) {
    "use strict";
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("transition", { attrs: { name: "error" } }, [
          n("div", { staticClass: "v-error" }, [
            n(
              "div",
              {
                staticClass: "circle",
                style: { borderColor: "var(--" + e.color + ")" },
              },
              [
                n("v-icon", {
                  staticClass: "icon",
                  class: e.icon,
                  attrs: { name: e.icon, "x-large": "", color: "--" + e.color },
                }),
              ],
              1
            ),
            n(
              "h2",
              {
                staticClass: "type-heading-small",
                style: { color: "var(--" + e.color + ")" },
              },
              [e._v(" " + e._s(e.title) + " ")]
            ),
            n("p", [e._v(e._s(e.body))]),
          ]),
        ]);
      },
      o = [],
      i =
        (n("caad"),
        {
          name: "VError",
          props: {
            color: {
              type: String,
              default: "page-text-color",
              validator: function (e) {
                return [
                  "page-text-color",
                  "accent",
                  "success",
                  "warning",
                  "danger",
                ].includes(e);
              },
            },
            icon: { type: String, required: !0 },
            title: { type: String, required: !0 },
            body: { type: String, required: !0 },
          },
        }),
      r = i,
      s = (n("0098"), n("2877")),
      c = Object(s["a"])(r, a, o, !1, null, "73b484b2", null);
    t["a"] = c.exports;
  },
  c60c: function (e, t, n) {},
  c6be: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:markdown","version":"1.0.0","types":["string"],"icon":"text_fields","recommended":{"length":65534},"options":{"tabbed":{"name":"$t:tabbed_preview","comment":"$t:tabbed_preview_comment","interface":"switch","options":{"labelOn":"$t:tabbed_preview_on","labelOff":"$t:tabbed_preview_off"},"default":true},"rows":{"name":"$t:rows","comment":"$t:rows_comment","interface":"numeric","options":{"min":5,"max":100},"default":12},"placeholder":{"name":"$t:placeholder","comment":"$t:placeholder_comment","interface":"textarea","default":"Enter **markdown** here...","placeholder":"Enter **markdown** here..."}}}'
    );
  },
  c923: function (e, t, n) {},
  ca21: function (e, t, n) {},
  cb33: function (e, t, n) {
    "use strict";
    var a = n("5b75"),
      o = n.n(a);
    o.a;
  },
  cde4: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var a = {
      mysql: {
        CHAR: {
          length: !0,
          defaultLength: 50,
          maxLength: 255,
          description: "datatypes.mysql.CHAR",
          fallbackInterface: "text-input",
        },
        VARCHAR: {
          length: !0,
          defaultLength: 255,
          maxLength: 65535,
          description: "datatypes.mysql.VARCHAR",
          fallbackInterface: "text-input",
        },
        TINYTEXT: {
          description: "datatypes.mysql.TINYTEXT",
          fallbackInterface: "textarea",
        },
        TEXT: {
          description: "datatypes.mysql.TEXT",
          fallbackInterface: "textarea",
        },
        MEDIUMTEXT: {
          description: "datatypes.mysql.MEDIUMTEXT",
          fallbackInterface: "textarea",
        },
        LONGTEXT: {
          description: "datatypes.mysql.LONGTEXT",
          fallbackInterface: "textarea",
        },
        TINYINT: {
          description: "datatypes.mysql.TINYINT",
          fallbackInterface: "switch",
        },
        SMALLINT: {
          description: "datatypes.mysql.SMALLINT",
          fallbackInterface: "numeric",
        },
        MEDIUMINT: {
          description: "datatypes.mysql.MEDIUMINT",
          fallbackInterface: "numeric",
        },
        INT: {
          description: "datatypes.mysql.INT",
          fallbackInterface: "numeric",
        },
        BIGINT: {
          description: "datatypes.mysql.BIGINT",
          fallbackInterface: "numeric",
        },
        DECIMAL: {
          decimal: !0,
          description: "datatypes.mysql.DECIMAL",
          defaultDigits: 10,
          maxDigits: 65,
          defaultDecimals: 10,
          maxDecimals: 30,
          fallbackInterface: "numeric",
        },
        FLOAT: {
          decimal: !0,
          description: "datatypes.mysql.FLOAT",
          defaultDigits: 10,
          defaultDecimals: 10,
          fallbackInterface: "numeric",
        },
        DOUBLE: {
          decimal: !0,
          description: "datatypes.mysql.DOUBLE",
          defaultDigits: 10,
          defaultDecimals: 10,
          fallbackInterface: "numeric",
        },
        DATE: {
          description: "datatypes.mysql.DATE",
          fallbackInterface: "date",
        },
        DATETIME: {
          description: "datatypes.mysql.DATETIME",
          fallbackInterface: "datetime",
        },
        TIME: {
          description: "datatypes.mysql.TIME",
          fallbackInterface: "time",
        },
        TIMESTAMP: {
          description: "datatypes.mysql.TIMESTAMP",
          fallbackInterface: "time",
        },
        YEAR: {
          description: "datatypes.mysql.YEAR",
          fallbackInterface: "numeric",
        },
      },
    };
    t["b"] = {
      alias: {
        description: "fieldtypes.alias",
        mysql: { datatypes: null, default: null },
      },
      array: {
        description: "fieldtypes.array",
        mysql: { datatypes: ["VARCHAR"], default: "VARCHAR" },
      },
      boolean: {
        description: "fieldtypes.boolean",
        mysql: { datatypes: ["TINYINT"], default: "TINYINT" },
      },
      date: {
        description: "fieldtypes.date",
        mysql: { datatypes: ["DATE"], default: "DATE" },
      },
      datetime: {
        description: "fieldtypes.datetime",
        mysql: { datatypes: ["DATETIME"], default: "DATETIME" },
      },
      datetime_created: {
        description: "fieldtypes.datetime_created",
        mysql: { datatypes: ["DATETIME"], default: "DATETIME" },
      },
      datetime_updated: {
        description: "fieldtypes.datetime_updated",
        mysql: { datatypes: ["DATETIME"], default: "DATETIME" },
      },
      decimal: {
        description: "fieldtypes.decimal",
        mysql: {
          datatypes: ["DECIMAL", "FLOAT", "DOUBLE"],
          default: "DECIMAL",
        },
      },
      time: {
        description: "fieldtypes.time",
        mysql: { datatypes: ["TIME"], default: "TIME" },
      },
      file: {
        description: "fieldtypes.file",
        mysql: { datatypes: ["INT"], default: "INT" },
      },
      group: {
        description: "fieldtypes.group",
        mysql: { datatypes: null, default: null },
      },
      integer: {
        description: "fieldtypes.integer",
        mysql: {
          datatypes: ["TINYINT", "SMALLINT", "MEDIUMINT", "INT", "BIGINT"],
          default: "INT",
        },
      },
      json: {
        description: "fieldtypes.json",
        mysql: {
          datatypes: ["VARCHAR", "TINYTEXT", "TEXT", "MEDIUMTEXT", "LONGTEXT"],
          default: "TEXT",
        },
      },
      lang: {
        description: "fieldtypes.lang",
        mysql: { datatypes: ["CHAR", "VARCHAR"], default: "CHAR" },
      },
      m2o: {
        description: "fieldtypes.m2o",
        mysql: {
          datatypes: ["CHAR", "VARCHAR", "INT", "BIGINT"],
          default: "INT",
        },
      },
      o2m: {
        description: "fieldtypes.o2m",
        mysql: { datatypes: null, default: null },
      },
      sort: {
        description: "fieldtypes.sort",
        mysql: {
          datatypes: ["TINYINT", "SMALLINT", "MEDIUMINT", "INT", "BIGINT"],
          default: "INT",
        },
      },
      status: {
        description: "fieldtypes.status",
        mysql: { datatypes: ["CHAR", "VARCHAR", "INT"], default: "VARCHAR" },
      },
      string: {
        description: "fieldtypes.string",
        mysql: {
          datatypes: [
            "CHAR",
            "VARCHAR",
            "TINYTEXT",
            "TEXT",
            "MEDIUMTEXT",
            "LONGTEXT",
          ],
          default: "VARCHAR",
        },
      },
      slug: {
        description: "fieldtypes.slug",
        mysql: {
          datatypes: [
            "CHAR",
            "VARCHAR",
            "TINYTEXT",
            "TEXT",
            "MEDIUMTEXT",
            "LONGTEXT",
          ],
          default: "VARCHAR",
        },
      },
      translation: {
        description: "fieldtypes.translation",
        mysql: { datatypes: null, default: null },
      },
      uuid: {
        description: "fieldtypes.uuid",
        mysql: { datatypes: ["VARCHAR"], default: "VARCHAR" },
      },
      user: {
        description: "fieldtypes.user",
        mysql: { datatypes: ["INT"], default: "INT" },
      },
      owner: {
        description: "fieldtypes.owner",
        mysql: { datatypes: ["INT"], default: "INT" },
      },
      user_updated: {
        description: "fieldtypes.user_updated",
        mysql: { datatypes: ["INT"], default: "INT" },
      },
      hash: {
        description: "fieldtypes.hash",
        mysql: { datatypes: ["VARCHAR"], default: "VARCHAR" },
      },
    };
  },
  cde9: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:sort","version":"1.0.1","types":["sort"],"icon":"low_priority","recommended":{"length":10},"options":{}}'
    );
  },
  cf41: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    n("2ca0");
    function a(e) {
      return (
        "string" === typeof e &&
        e.startsWith("dc") &&
        16 === e.length &&
        /dc[A-Za-z0-9]{14}/.test(e)
      );
    }
  },
  cfdc: function (e, t, n) {},
  d104: function (e, t, n) {},
  d1bb: function (e, t, n) {
    "use strict";
    var a = n("8079"),
      o = n.n(a);
    o.a;
  },
  d274: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:timeline","icon":"format_list_bulleted"}'
    );
  },
  d2d9: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:user","version":"1.0.1","types":["user","integer","owner","user_updated"],"icon":"account_circle","relation":"user","recommended":{"length":10},"options":{"template":{"name":"$t:template","comment":"$t:template_comment","interface":"text-input","default":"{{first_name}} {{last_name}}"},"placeholder":{"name":"$t:placeholder","comment":"$t:placeholder_comment","interface":"text-input","default":"Choose a User"}}}'
    );
  },
  d342: function (e, t, n) {},
  d44ea: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:input","version":"1.0.0","icon":"translate","types":["string","lang"],"recommended":{"length":10},"options":{"limit":{"name":"$t:limit","comment":"$t:limit_comment","interface":"switch","default":false}}}'
    );
  },
  d4ca: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:o2m","version":"2.0.2","types":["o2m"],"options":{"fields":{"name":"$t:visible_columns","comment":"$t:visible_columns_comment","interface":"text-input","placeholder":"name,description"},"template":{"name":"$t:template","comment":"$t:template_comment","interface":"text-input","options":{"placeholder":"$t:template_placeholder"}},"sort_field":{"name":"$t:sort_field","comment":"$t:sort_field_comment","interface":"text-input","options":{"placeholder":"E.g.: sort"}},"delete_mode":{"name":"$t:delete_mode","comment":"$t:delete_mode_comment","interface":"dropdown","default":"relation","options":{"choices":{"relation":"Nullify relationship","item":"Delete related item"}}},"allow_create":{"name":"$t:allow_create","comment":"$t:allow_create_comment","interface":"switch","default":true},"allow_select":{"name":"$t:allow_select","comment":"$t:allow_select_comment","interface":"switch","default":true}},"relation":"o2m","icon":"call_split"}'
    );
  },
  d718: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:rating","version":"1.0.1","types":["integer","decimal"],"icon":"star","fieldset":true,"recommended":{"length":10},"options":{"active_color":{"name":"$t:active_color","comment":"$t:active_color_comment","interface":"color-palette","default":"amber"},"max_stars":{"name":"$t:max_stars","comment":"$t:max_stars_comment","interface":"numeric","default":5},"display":{"name":"$t:display","comment":"$t:display_comment","interface":"button-group","default":"star","type":"JSON","options":{"choices":[{"label":"Numbers","value":"number"},{"label":"Stars","value":"star"}]}}}}'
    );
  },
  d722: function (e, t, n) {
    "use strict";
    n("c975"), n("a15b"), n("fb6a"), n("ac1f"), n("1276");
    var a = n("a32c"),
      o = window.location.pathname,
      i = o.split("/"),
      r = i.indexOf("admin"),
      s = i.slice(0, r).join("/") + "/",
      c = new a["a"]({ mode: "cookie", url: s });
    t["a"] = c;
  },
  d76d: function (e, t, n) {
    "use strict";
    var a = n("a619"),
      o = n.n(a);
    o.a;
  },
  dad3: function (e, t, n) {},
  db1c: function (e, t, n) {
    "use strict";
    var a = n("c162"),
      o = n.n(a);
    o.a;
  },
  dcc6: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:user_updated","version":"1.0.0","types":["user_updated"],"relation":"user_updated","icon":"account_circle","recommended":{"length":10},"options":{"template":{"name":"$t:template","comment":"$t:template_comment","interface":"text-input","default":"{{first_name}} {{last_name}}"},"display":{"name":"$t:display","comment":"$t:display_comment","interface":"dropdown","default":"both","options":{"choices":{"both":"$t:avatar + $t:name","avatar":"$t:avatar","name":"$t:name"}}}}}'
    );
  },
  df88: function (e, t, n) {
    var a = {
      "./calendar/layout.vue": ["70dd", "chunk-2e2e6d82"],
      "./cards/layout.vue": ["db4d", "chunk-cd86426c"],
      "./tabular/layout.vue": ["bac0", "chunk-8cbde130"],
      "./timeline/layout.vue": ["ba5e", "chunk-b1f7d874"],
    };
    function o(e) {
      if (!n.o(a, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = a[e],
        o = t[0];
      return n.e(t[1]).then(function () {
        return n(o);
      });
    }
    (o.keys = function () {
      return Object.keys(a);
    }),
      (o.id = "df88"),
      (e.exports = o);
  },
  dff8: function (e, t, n) {
    "use strict";
    var a = n("f4e5"),
      o = n.n(a);
    o.a;
  },
  e077: function (e, t, n) {
    "use strict";
    var a = n("133e"),
      o = n.n(a);
    o.a;
  },
  e080: function (e, t, n) {
    "use strict";
    var a = n("44b2"),
      o = n.n(a);
    o.a;
  },
  e1f8: function (e, t, n) {
    "use strict";
    var a = n("75a8"),
      o = n.n(a);
    o.a;
  },
  e59c: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return u;
    });
    n("d3b7"), n("3ca3"), n("ddb0"), n("96cf");
    var a = n("1da1"),
      o = n("bc3a"),
      i = n.n(o),
      r = n("4360"),
      s = n("9923"),
      c = n("9fb0"),
      l = n("9224");
    function u() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = Object(a["a"])(
          regeneratorRuntime.mark(function e() {
            var t, n, a, o, u, d, f, m;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Promise.all([
                          r["a"].dispatch("getProjects"),
                          r["a"].dispatch("getCurrentUser"),
                        ])
                      );
                    case 3:
                      if (
                        ((u =
                          null === (t = r["a"].getters.currentProject) ||
                          void 0 === t
                            ? void 0
                            : null === (n = t.data) || void 0 === n
                            ? void 0
                            : n.default_locale),
                        (d = r["a"].state.currentUser.locale),
                        !d)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (e.next = 8), Object(s["loadLanguageAsync"])(d);
                    case 8:
                      e.next = 17;
                      break;
                    case 10:
                      if (!u) {
                        e.next = 15;
                        break;
                      }
                      return (e.next = 13), Object(s["loadLanguageAsync"])(u);
                    case 13:
                      e.next = 17;
                      break;
                    case 15:
                      return (
                        (e.next = 17),
                        Object(s["loadLanguageAsync"])(
                          window.navigator.userLanguage ||
                            window.navigator.language
                        )
                      );
                    case 17:
                      return (
                        (e.next = 19),
                        Promise.all([
                          r["a"].dispatch("latency"),
                          r["a"].dispatch("getAllExtensions"),
                          r["a"].dispatch("getCollections"),
                          r["a"].dispatch("getSettings"),
                          r["a"].dispatch("getBookmarks"),
                          r["a"].dispatch("getUsers"),
                          r["a"].dispatch("getRelations"),
                          r["a"].dispatch("getServerInfo"),
                        ])
                      );
                    case 19:
                      return (e.next = 21), r["a"].dispatch("getPermissions");
                    case 21:
                      if (
                        ((f = r["a"].state.currentUser.admin),
                        (m =
                          !1 !==
                          (null === (a = r["a"].getters.currentProject) ||
                          void 0 === a
                            ? void 0
                            : null === (o = a.data) || void 0 === o
                            ? void 0
                            : o.telemetry)),
                        !(m && f && navigator.onLine))
                      ) {
                        e.next = 32;
                        break;
                      }
                      return (
                        (e.prev = 24),
                        (e.next = 27),
                        i.a.post("https://telemetry.directus.io/count", {
                          type: "app",
                          url: window.location.origin,
                          version: l["a"],
                        })
                      );
                    case 27:
                      e.next = 32;
                      break;
                    case 29:
                      (e.prev = 29),
                        (e.t0 = e["catch"](24)),
                        console.log("Couldn't send telemetery ping");
                    case 32:
                      r["a"].commit(c["STORE_HYDRATED"], new Date()),
                        (e.next = 39);
                      break;
                    case 35:
                      (e.prev = 35),
                        (e.t1 = e["catch"](0)),
                        r["a"].commit(c["HYDRATING_FAILED"], e.t1),
                        console.error(e.t1);
                    case 39:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [0, 35],
                [24, 29],
              ]
            );
          })
        )),
        d.apply(this, arguments)
      );
    }
  },
  e968: function (e) {
    e.exports = JSON.parse(
      '{"name":"JSON","version":"1.0.0","types":["json"],"icon":"code","options":{"template":{"name":"$t:template","comment":"$t:template_comment","interface":"json"}}}'
    );
  },
  ea0d: function (e, t, n) {
    "use strict";
    var a = n("083c"),
      o = n.n(a);
    o.a;
  },
  ed50: function (e, t, n) {},
  ed82: function (e, t, n) {
    "use strict";
    var a = n("301d"),
      o = n.n(a);
    o.a;
  },
  ef4a: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:m2m","version":"1.0.2","types":["o2m"],"relation":"m2m","icon":"compare_arrows","options":{"fields":{"name":"$t:visible_columns","comment":"$t:visible_columns_comment","interface":"text-input","placeholder":"name,description"},"template":{"name":"$t:template","comment":"$t:template_comment","interface":"text-input","options":{"placeholder":"$t:template_placeholder"}},"allow_create":{"name":"$t:allow_create","comment":"$t:allow_create_comment","interface":"switch","default":true},"allow_select":{"name":"$t:allow_select","comment":"$t:allow_select_comment","interface":"switch","default":true}}}'
    );
  },
  f007: function (e, t, n) {},
  f1d0: function (e, t, n) {
    "use strict";
    n.r(t);
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "not-found" },
          [
            n("v-header", { attrs: { title: e.$t("page_not_found") } }),
            n("v-error", {
              attrs: {
                title: e.$t("page_not_found"),
                body: e.$t("page_not_found_body"),
                icon: "not_interested",
              },
            }),
            n("v-info-sidebar", { attrs: { wide: "" } }, [
              n("span", { staticClass: "type-note" }, [e._v("No settings")]),
            ]),
          ],
          1
        );
      },
      o = [],
      i = n("c359"),
      r = {
        name: "NotFound",
        metaInfo: function () {
          return { title: this.$t("page_not_found") };
        },
        components: { VError: i["a"] },
      },
      s = r,
      c = (n("bee3"), n("2877")),
      l = Object(c["a"])(s, a, o, !1, null, "29ddbd36", null);
    t["default"] = l.exports;
  },
  f45e: function (e, t, n) {
    "use strict";
    var a = n("b93e"),
      o = n.n(a);
    o.a;
  },
  f478: function (e, t, n) {
    "use strict";
    var a = n("0973"),
      o = n.n(a);
    o.a;
  },
  f4e5: function (e, t, n) {},
  f558: function (e, t, n) {},
  f663: function (e, t, n) {
    "use strict";
    var a = n("6536"),
      o = n.n(a);
    o.a;
  },
  f665: function (e, t, n) {},
  f8dc: function (e, t, n) {
    "use strict";
    var a = n("2b0e"),
      o = n("38d3"),
      i = n("2ef0"),
      r = function (e) {
        Object(i["isEmpty"])(e.message) || console.error(e.message),
          Object(i["isUndefined"])(e.error) || console.error(e.error),
          Object(i["isEmpty"])(e.notify) ||
            Object(o["a"])({
              title: e.notify,
              color: "red",
              iconMain: "error",
            });
      },
      s = r,
      c = function (e) {
        Object(i["isEmpty"])(e.notify) ||
          Object(o["a"])({
            title: e.notify,
            color: e.color || "orange",
            iconMain: e.iconMain || "warning",
          });
      },
      l = c,
      u = new a["default"]();
    Object.defineProperties(u, {
      on: {
        get: function () {
          return u.$on;
        },
      },
      off: {
        get: function () {
          return u.$off;
        },
      },
      emit: {
        get: function () {
          return u.$emit;
        },
      },
      once: {
        get: function () {
          return u.$once;
        },
      },
    }),
      u.on("error", s),
      u.on("warning", l),
      (u.install = function (e) {
        Object.defineProperty(e.prototype, "$events", { value: u });
      });
    t["a"] = u;
  },
  f960: function (e, t, n) {
    var a = {
      "./2fa-secret/meta.json": "692a",
      "./button-group/meta.json": "7e12",
      "./calendar/meta.json": "52b6b",
      "./checkboxes-relational/meta.json": "9234",
      "./checkboxes/meta.json": "fe2d",
      "./code/meta.json": "6407",
      "./collections/meta.json": "69fa",
      "./color-palette/meta.json": "5945",
      "./color/meta.json": "7e2b",
      "./date/meta.json": "5013",
      "./datetime-created/meta.json": "86da",
      "./datetime-updated/meta.json": "baac",
      "./datetime/meta.json": "a731",
      "./divider/meta.json": "1c27",
      "./dropdown/meta.json": "0351",
      "./file-preview/meta.json": "6057",
      "./file-size/meta.json": "6039",
      "./file/meta.json": "be9d",
      "./files/meta.json": "6603",
      "./hashed/meta.json": "00c6",
      "./icon/meta.json": "affa",
      "./interface-options/meta.json": "5bcb",
      "./interface-types/meta.json": "3ac3",
      "./interfaces/meta.json": "7f83",
      "./json/meta.json": "e968",
      "./key-value/meta.json": "ae42",
      "./language/meta.json": "d44ea",
      "./many-to-many/meta.json": "ef4a",
      "./many-to-one/meta.json": "1f0e",
      "./map/meta.json": "78cc",
      "./markdown/meta.json": "c6be",
      "./multiselect/meta.json": "60c5",
      "./numeric/meta.json": "fd6f",
      "./one-to-many/meta.json": "d4ca",
      "./owner/meta.json": "26d5",
      "./password/meta.json": "1c82",
      "./preview/meta.json": "127e",
      "./primary-key/meta.json": "0aff",
      "./radio-buttons/meta.json": "b8dc",
      "./rating/meta.json": "d718",
      "./repeater/meta.json": "1be6",
      "./slider/meta.json": "31f0",
      "./slug/meta.json": "7092",
      "./sort/meta.json": "cde9",
      "./status/meta.json": "a338",
      "./switch/meta.json": "b626",
      "./tags/meta.json": "8590",
      "./text-input/meta.json": "66ef",
      "./textarea/meta.json": "b0bd",
      "./time/meta.json": "15a4",
      "./toggle-icon/meta.json": "0cf9",
      "./translation/meta.json": "6abf",
      "./user-roles/meta.json": "5b5b",
      "./user-updated/meta.json": "dcc6",
      "./user/meta.json": "d2d9",
      "./wysiwyg/meta.json": "a6e7",
    };
    function o(e) {
      var t = i(e);
      return n(t);
    }
    function i(e) {
      if (!n.o(a, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return a[e];
    }
    (o.keys = function () {
      return Object.keys(a);
    }),
      (o.resolve = i),
      (e.exports = o),
      (o.id = "f960");
  },
  fc40: function (e, t, n) {
    "use strict";
    var a = n("675b"),
      o = n.n(a);
    o.a;
  },
  fd6f: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:numeric","version":"1.0.1","types":["integer","decimal"],"icon":"dialpad","recommended":{"length":10},"options":{"placeholder":{"name":"$t:placeholder","comment":"$t:placeholder_comment","interface":"text-input","length":100},"localized":{"name":"$t:localized","comment":"$t:localized_comment","interface":"switch","default":true},"iconLeft":{"name":"$t:icon_left","comment":"$t:icon_left_comment","interface":"icon","advanced":true},"iconRight":{"name":"$t:icon_right","comment":"$t:icon_right_comment","interface":"icon","advanced":true},"monospace":{"name":"$t:monospace","comment":"$t:monospace_comment","interface":"switch","default":false}}}'
    );
  },
  fdf3: function (e, t, n) {
    "use strict";
    var a = n("ed50"),
      o = n.n(a);
    o.a;
  },
  fe2d: function (e) {
    e.exports = JSON.parse(
      '{"name":"$t:checkboxes","version":"1.0.0","types":["array"],"fieldset":true,"icon":"check_box","options":{"choices":{"name":"$t:choices","comment":"$t:choices_comment","interface":"key-value","type":"JSON","options":{"keyInterface":"text-input","keyType":"string","keyOptions":{"placeholder":"key","monospace":true},"valueInterface":"text-input","valueType":"string","valueOptions":{"placeholder":"value","monospace":true}}},"allow_other":{"name":"$t:allow_other","comment":"$t:allow_other_comment","interface":"switch","default":false},"draggable":{"name":"$t:draggable","comment":"$t:draggable_comment","interface":"switch","type":"BOOLEAN","default":false},"wrap":{"name":"$t:wrap","comment":"$t:wrap_comment","interface":"switch","type":"BOOLEAN","default":false},"formatting":{"name":"$t:formatting","comment":"$t:formatting_comment","interface":"switch","type":"BOOLEAN","default":true},"single":{"name":"$t:single","comment":"$t:single_comment","interface":"switch","type":"BOOLEAN","default":false}}}'
    );
  },
  fe8e: function (e, t, n) {
    "use strict";
    var a = n("65b2"),
      o = n.n(a);
    o.a;
  },
  fea0: function (e, t, n) {
    "use strict";
    var a = n("48d7"),
      o = n.n(a);
    o.a;
  },
  ffd4: function (e, t, n) {
    "use strict";
    var a = n("9a9a"),
      o = n.n(a);
    o.a;
  },
});
//# sourceMappingURL=app.033f91f1.js.map
