(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lang-interfaces-zh-TW-interfaces-json"],{5727:function(e){e.exports=JSON.parse('{"interfaces":{"2fa-secret":{"2fa-secret":"2FA 加密"},"button-group":{"button_group":"按鈕組","choices":"選擇","choices_comment":"輸入用來保存的值以及顯示文字的 JSON 鍵值對。","theme":"介面主題","theme_comment":"設置介面主題（如果支持）","value":"值","flight":"飛行","cruise":"巡航","run":"運行","bus":"公車","bike":"自行車","train":"火車","car":"汽車","other":"其它"},"calendar":{"calendar":"行事曆","min":"最小日期","min_comment":"用戶可以選擇的最小日期","max":"最大日期","max_comment":"用戶可以選擇的最大日期","formatting":"日期格式","formatting_comment":"遵循 [Unicode技術標準]（https://date-fns.org/v2.8.1/docs/format）。如果流空，將使用相對日期。"},"checkboxes":{"checkboxes":"複選框","choices":"選擇","choices_comment":"輸入用來保存的值以及顯示文字的 JSON 鍵值對。","wrap":"用分隔符號封裝","wrap_comment":"用定界符封裝儲存的值（改善搜尋性）。","formatting":"呈現顯示的文字","formatting_comment":"將渲染值變為顯示值","display_text":"顯示文字","value":"值","option":"選項","single":"單列","single_comment":"在單列中顯示複選框","draggable":"可拖曳複選框","draggable_comment":"啟用複選框拖曳排序","allow_other":"允許其他選項","allow_other_comment":"允許附加的自定義選項"},"checkboxes-relational":{"checkboxes_relational":"關係型複選框","grid":"網格","grid_comment":"連續顯示的項目數","item_template":"項目模板","item_template_comment":"如何在單個項目佈局上顯示值","item_template_placeholder":"{{name}} - {{first_name}}","listing_template":"清單模板","listing_template_comment":"如何在清單布局上顯示值。<br>您需要在資料集名稱前添加前綴","listing_template_placeholder":"{{movie.name}} — {{member.first_name}}"},"code":{"code":"程式碼","template":"模板","template_comment":"提供用戶可以用來入門的模板","language":"語言","language_comment":"設置要使用的程式語言","lineNumber":"行號","lineNumber_comment":"顯示行號","loc":"沒有 {lang} | 一行 {lang} | {count} 行 {lang}","fill_template":"填寫模板"},"collections":{"collections":"資料集","placeholder":"佔位符","placeholder_comment":"選擇的值之前顯示的靜態文字","placeholder_default":"選擇一個資料集...","option":"選項","include_system":"包含系統","include_system_comment":"在選項中包括系統資料集"},"color":{"color":"顏色","format":"輸出格式","format_comment":"資料的儲存格式","palette":"調色盤","palette_comment":"增加顏色選項為十六進位值","palette_only":"僅調色盤","palette_only_comment":"只允許用戶從調色盤中選擇"},"color-palette":{"color-picker":"選色器"},"date":{"date":"日期","min":"最小日期","min_comment":"用戶可以選擇的最小日期","max":"最大日期","max_comment":"用戶可以選擇的最大日期","localized":"本地化","localized_comment":"顯示輸出中的本地化日期","relative":"顯示相對日期","relative_comment":"顯示相對日期（例如：2天前）","icon_left":"左圖示","icon_left_comment":"選擇一個在輸入框左側顯示的圖示（可選）","icon_right":"右圖示","icon_right_comment":"選擇一個在輸入框右側顯示的圖示（可選）"},"datetime":{"datetime":"日期時間","min":"最小時間","min_comment":"用戶可以選擇的最小時間","max":"最大時間","max_comment":"用戶可以選擇的最大時間","localized":"本地化","localized_comment":"顯示輸出中的本地化日期","relative":"顯示相對時間","relative_comment":"顯示相對時間（例如：50 分鐘前）","icon_left":"左圖示","icon_left_comment":"選擇一個在輸入框左側顯示的圖示（可選）","icon_right":"右圖示","icon_right_comment":"選擇一個在輸入框右側顯示的圖示（可選）","utc":"另存為 UTC ...","utc_comment":"以 UTC 儲存並顯示","default_to_current_datetime":"預設為當前日期時間","default_to_current_datetime_comment":"將預設值設定為當前日期時間","format":"格式","format_comment":"用於輸入的日期時間格式"},"datetime-created":{"datetime_created":"已建立日期時間","relative":"顯示相對時間","relative_comment":"顯示相對時間（例如：50 分鐘前）","now":"您現在正在創建這個","unknown":"未知的"},"datetime-updated":{"datetime_updated":"已更新日期時間","relative":"顯示相對時間","relative_comment":"顯示相對時間（例如：50 分鐘前）","now":"您現在正在創建這個","unknown":"未知的"},"divider":{"divider":"分隔線","style-name":"分隔線樣式","style-comment":"更改分隔線的樣式","weight-name":"線粗","weight-comment":"更改線的粗細","input-name":"分格線文字","input-comment":"在此輸入文字","desc-name":"分隔線描述","desc-comment":"在此處添加說明","hr-name":"HR","hr-comment":"顯示水平線？","margin-name":"額外邊距","margin-comment":"在介面上方增加額外邊距"},"dropdown":{"dropdown":"下拉選單","choices":"選擇","choices_comment":"輸入用來保存的值以及顯示文字的 JSON 鍵值對。","placeholder":"佔位符","placeholder_comment":"選擇的值之前顯示的靜態文字","option":"選項","formatting":"呈現顯示的文字","formatting_comment":"將渲染值變為顯示值","placeholder_default":"選擇一個選項...","icon":"圖示","icon_comment":"選擇一個在輸入框左側顯示的圖示（可選）","options_invalid":"下拉選單提供的 JSON 選項無效：","allow_other":"允許其他選項","allow_other_comment":"允許用戶添加自定義選項"},"file":{"file":"檔案","view_type":"視圖類型","view_type_comment":"選擇您要查看檔案的方式","view_options":"視圖選項","view_options_comment":"設定用於檔案的視圖選項","view_query":"視圖查詢","view_query_comment":"設定用於檔案的視圖查詢","filters":"篩選","filters_comment":"使用何種篩選","accept":"接受檔案類型","accept_comment":"設定可選擇的 MIME 類型清單","allow_delete":"允許刪除","allow_delete_comment":"允許用戶透過文件介面永久刪除相關文件","crop_preview":"預覽裁剪的檔案","crop_preview_comment":"裁剪文件預覽來填滿可用空間。"},"file-preview":{"file_preview":"預覽檔案","edit":"編輯選項"},"file-size":{"file_size":"檔案大小","placeholder":"佔位符","placeholder_comment":"輸入佔位符文字","format":"格式化值","format_comment":"以易於理解的方式顯示值（例如：10MB）","format_input":"格式化輸入","format_input_comment":"使用下拉選單輸入欄位的值","decimal":"小數","decimal_comment":"以十進位數字顯示值（10MB 與 10MiB）","crop_preview":"裁切預覽圖"},"files":{"files":"檔案","visible_columns":"可見欄位","visible_columns_comment":"增加您想預覽顯示的一列 CSV","preferences":"清單視圖偏好設定","preferences_comment":"設定用於模態的選項","relation_not_setup":"關聯配置不正確","template":"顯示模板","template_comment":"選擇如何顯示在項目佈局上的值","template_placeholder":"{{movie.name}} — {{member.first_name}}","allow_create":"允許建立","allow_create_comment":"允許用戶從此介面建立新項目","allow_select":"允許選取","allow_select_comment":"允許用戶選擇一個現有項目","accept":"接受檔案類型","accept_comment":"設定可選擇的 MIME 類型清單","edit_item":"編輯"},"hashed":{"hashed":"已雜湊","hide":"隱藏值","hide_comment":"您輸入的字元將改由點來顯示","placeholder":"佔位符","placeholder_comment":"輸入佔位符文字","show_hash":"顯示雜湊後的結果","show_hash_comment":"顯示已儲存的雜湊","hashing_type":"散列定址法類型","hashing_type_comment":"使用哪種雜湊方法","width":"尺寸","width_comment":"設定輸入使用的寬度","auto":"自動","small":"小","medium":"中","large":"大","secured":"價值擔保"},"icon":{"icon":"圖示","search_placeholder":"搜尋圖示..."},"interface-options":{"interface-options":"介面選項","interface-field":"介面欄位","placeholder-comment":"包含介面名稱的欄位","placeholder-default":"輸入一個欄位名稱..."},"interface-types":{"interface-types":"介面類型","interface-field":"介面欄位","placeholder-comment":"包含介面名稱的欄位","placeholder-default":"輸入一個欄位名稱..."},"interfaces":{"interfaces":"介面","placeholder":"佔位符","placeholder_comment":"選擇的值之前顯示的靜態文字","placeholder_default":"選擇一個介面","option":"選項","relational":"包含關聯介面","include_status":"包含狀態介面"},"json":{"template":"模板","template_comment":"提供用戶可以用來入門的模板"},"key-value":{"key_interface":"按鍵介面","key_data_type":"關鍵資料類型","key_options":"關鍵介面選項","value_interface":"按鍵介面","value_data_type":"關鍵資料類型","value_options":"關鍵介面選項"},"language":{"input":"語言","select_language":"選擇一種語言...","limit":"限制 Directus 可用性","limit_comment":"僅顯示 Directus 中可被翻譯的語言"},"many-to-many":{"m2m":"多對多","visible_columns":"可見欄位","visible_columns_comment":"增加您想預覽顯示的一列 CSV","preferences":"清單視圖偏好設定","preferences_comment":"設定用於模態的選項","relation_not_setup":"關聯配置不正確","template":"顯示模板","template_comment":"選擇如何顯示在項目佈局上的值","template_placeholder":"{{movie.name}} — {{member.first_name}}","allow_create":"允許建立","allow_create_comment":"允許用戶從此介面建立新項目","allow_select":"允許選取","allow_select_comment":"允許用戶選擇一個現有項目"},"many-to-one":{"m2o":"多對一","template":"下拉選單模板","template_comment":"如何格式化下拉選項","visible_fields":"可見欄位","visible_fields_placeholder":"標題，作者","visible_fields_note":"在模態中選擇項目時可見的 CSV 欄位","template_placeholder":"{{title}} — {{author}}","placeholder":"佔位符","placeholder_comment":"輸入佔位符文字","preferences":"清單視圖偏好設定","preferences_comment":"設定用於模態的選項","relationship_not_setup":"關聯配置不正確","icon":"圖示","icon_comment":"選擇一個在輸入框左側顯示的圖示（可選）","select_one":"選擇一個","threshold":"門檻","threshold_comment":"放在替代下拉選單的模組之後的項目數量"},"map":{"map":"地圖","choices":"選擇","choices_comment":"輸入用來保存的值以及顯示文字的 JSON 鍵值對。","theme":"介面主題","theme_comment":"設置介面主題（如果支持）","value":"值","map_lat":"預設緯度","map_lat_comment":"地圖將以此緯度為中心","map_lng":"預設經度","map_lng_comment":"地圖將以此經度為中心","height":"高度","default_zoom":"預設縮放","default_zoom_comment":"地圖的預設縮放等級","max_zoom":"最大縮放","max_zoom_comment":"地圖中允許的最大縮放","no_location":"找不到位置","user_location_error_blocked":"您已禁用位置訊息訪問權限。請從瀏覽器網址列中啟用它以自動檢測您的位置。","user_location_error":"嘗試獲取您的位置時出錯。請再嘗試一次。","address_to_code":"地址輸入","address_to_code_comment":"加一個輸入欄位來自動化從地址取得地理編碼。使用 <a href=\\"https://wiki.openstreetmap.org/wiki/Nominatim\\">Nominatim</a>。 請檢查其使用政策。","address_to_code_error":"找不到該地址的地理編碼","clear_location":"清除位置","my_location":"設定我的位置","address_location":"設置地址位置"},"markdown":{"markdown":"Markdown","edit":"編輯","preview":"預覽","tabbed_preview":"分頁預覽","tabbed_preview_comment":"如何顯示編輯器和預覽","tabbed_preview_on":"分頁預覽","tabbed_preview_off":"並排預覽","rows":"行","rows_comment":"可用的起始文字行數","placeholder":"佔位符","placeholder_comment":"輸入佔位符文字"},"multiselect":{"multiselect":"複選","choices":"選擇","choices_comment":"JSON 鍵值對輸入儲存的值和顯示文字","placeholder":"佔位符","placeholder_comment":"輸入佔位符文字","size":"尺寸","size_comment":"滾動前可見的選項數量","option":"選項","wrap":"用分隔符號封裝","wrap_comment":"用一對分隔符號封裝這些值，以允許嚴格搜尋單個值","format":"瀏覽格式","format_comment":"在瀏覽項目頁面上的輸出格式"},"numeric":{"numeric":"數字","placeholder":"佔位符","placeholder_comment":"輸入佔位符文字","localized":"本地化","localized_comment":"將輸出定位到用戶的語言環境","icon_left":"左圖示","icon_left_comment":"選擇一個在輸入框左側顯示的圖示（可選）","icon_right":"右圖示","icon_right_comment":"選擇一個在輸入框右側顯示的圖示（可選）","monospace":"等寬字體","monospace_comment":"使用等寬字體"},"one-to-many":{"o2m":"一對多","select_items":"選擇項目","relation_not_setup":"關聯配置不正確","visible_columns":"可見欄位","visible_columns_comment":"增加您想預覽顯示的一列 CSV","preferences":"清單視圖偏好設定","preferences_comment":"設定用於模態的選項","template":"顯示模板","template_comment":"在項目瀏覽中以何種格式顯示","template_placeholder":"{{title}} — {{author}}","allow_create":"允許建立","allow_create_comment":"允許用戶從此介面建立新項目","allow_select":"允許選取","allow_select_comment":"允許用戶選擇一個現有項目","delete_mode":"刪除模式","delete_mode_comment":"當用戶取消選擇一個項目時該怎麼辦","sort_field":"排序欄位","sort_field_comment":"用於儲存排序值的欄位"},"password":{"password":"密碼","hide":"隱藏值","hide_comment":"您輸入的字元將改由點來顯示","placeholder":"佔位符","placeholder_comment":"輸入佔位符文字","confirm_placeholder":"確認密碼...","show_hash":"顯示雜湊後的結果","show_hash_comment":"顯示已儲存的雜湊","hashing_type":"散列定址法類型","hashing_type_comment":"使用哪種雜湊方法"},"preview":{"preview":"預覽","url_template":"URL 模板","url_template_comment":"可預覽 URL 內容的小鬍子模板","preview_item":"預覽此項目"},"primary-key":{"primary_key":"主鍵","immutable":"不能被改變","monospace":"等寬字體","monospace_comment":"使用等寬字體"},"radio-buttons":{"radio":"單選按鈕","choices":"選擇","choices_comment":"輸入用來保存的值以及顯示文字的 JSON 鍵值對。","option":"選項","format":"瀏覽格式","format_comment":"在瀏覽項目頁面上的輸出格式"},"rating":{"rating":"評分","value":"值","active_color":"啟用的顏色","active_color_comment":"啟用所選星星的顏色","max_stars":"最大星數","max_stars_comment":"允許的最大評分數","display":"顯示","display_comment":"如何顯示評分值"},"repeater":{"repeater":"重複者","template":"顯示模板","template_comment":"如何在項目瀏覽顯示以及內部聯接預覽中格式化值","template_placeholder":"{{title}} — ({{author}})","fields":"欄位","fields_comment":"每個重複的行顯示那些欄位","limit":"限制","limit_comment":"用戶可以添加的最大行數","duplicable":"可重複的行","duplicable_comment":"是否使行重複","structure":"結構","structure_comment":"將 JSON 儲存為物件陣列或有唯一鍵的單獨物件","structure_key":"結構關鍵欄位","structure_key_comment":"當使用 JSON 結構的物件時，此值用於控制欄位的鍵值","placeholder":"佔位符","placeholder_comment":"模板如果有值尚未輸入，則以顯示的值代替","create_item_text":"建立項目文字","create_item_text_comment":"用於重複新增行數的按鈕文字"},"slider":{"slider":"滑塊","min":"最小值","min_comment":"最小有效值","max":"最大值","max_comment":"最大有效值","step":"步驟","step_comment":"該值可設定的增量","unit":"單元","unit_comment":"在滑桿旁邊顯示值的單位，例如：15 磅"},"slug":{"slug":"網址片段","placeholder_name":"佔位符","placeholder_comment":"要顯示的佔位符文字","force_lowercase":"強制小寫","force_lowercase_comment":"確保網址片段是小寫的","mirrored_field":"鏡像欄位","mirrored_field_comment":"使用另一個（文字）欄位來保持最新的網址片段","only_on_create":"僅在建立時","only_on_create_comment":"僅在建立新項目時才允許對網址片段進行編輯"},"sort":{"sort":"排序"},"status":{"status":"狀態","status_mapping":"狀態映像","status_mapping_comment":"輸入 JSON 狀態選項","simple_badge":"簡易識別","simple_badge_comment":"在項目清單頁面上顯示一個彩色的點。","published":"已發佈","under_review":"審核中","draft":"草稿","deleted":"已刪除"},"tags":{"tags":"標籤","alphabetize":"按字母順序排列標籤","alphabetize_comment":"將標籤重新排列為字母順序","lowercase":"強制小寫","lowercase_comment":"將所有標籤轉換為小寫","wrap":"用分隔符號封裝","wrap_comment":"用一對分隔符號封裝這些值，以允許嚴格搜尋單個值","format":"格式化值","format_comment":"顯示值時將標籤轉換為標題大小寫","sanitize":"消毒","sanitize_comment":"刪除所有非英文字母、數字的字元，並將空格轉換為連字符號","placeholder_text":"輸入標籤，然後按 Enter 或逗號...","icon_left":"左圖示","icon_left_comment":"選擇一個在輸入框左側顯示的圖示（可選）","icon_right":"右圖示","icon_right_comment":"選擇一個在輸入框右側顯示的圖示（可選）","validation":"驗證","validation_comment":"一個正規表達式來檢查每一個單獨的值","validation_message":"驗證訊息","validation_message_comment":"如果標籤驗證失敗，則向用戶顯示一條短訊息","validation_message_default":"請輸入一個有效標籤"},"text-input":{"input":"文字輸入","placeholder":"佔位符","trim":"去除內容前後空格","trim_comment":"儲存時去除內容前後空格","char_count":"顯示字元數","char_count_comment":"顯示剩餘的可用字元","icon_left":"左圖示","icon_left_comment":"選擇一個在輸入框左側顯示的圖示（可選）","icon_right":"右圖示","icon_right_comment":"選擇一個在輸入框右側顯示的圖示（可選）","format":"美化輸出","format_comment":"將值轉換為標題大小寫","monospace":"等寬字體","monospace_comment":"使用等寬字體","auto":"自動","small":"小","medium":"中","large":"大"},"textarea":{"textarea":"文字區塊","rows":"行","rows_comment":"滾軸滑動前的可輸入內容的行數","placeholder":"佔位符","placeholder_comment":"輸入佔位符文字","serif":"襯線字體","serif_comment":"使用較大的襯線字型"},"time":{"time":"時間","include_seconds":"包含秒數","include_seconds_comment":"在介面中包含秒數","24hour":"以 24 小時制顯示","24hour_comment":"以 24 小時制顯示時間（例如：15:30）"},"switch":{"switch":"轉換","label_on":"標籤（開）","label_on_comment":"切換開關開啟時，顯示在切換開關旁的標籤","label_off":"標籤（關）","label_off_comment":"切換開關關閉時，顯示在切換開關旁的標籤\\n","checkbox":"顯示為複選框","checkbox_comment":"顯示複選框而不是預設開關"},"toggle-icon":{"toggle-icon":"開關圖示","text-inactive-name":"非作用中文字","text-inactive-comment":"未啟用圖示旁的文字","text-inactive-placeholder":"請在此輸入您的文字","icon-inactive-name":"未啟用圖示","icon-inactive-comment":"選擇一個未啟用的圖示","color-inactive-name":"停用的顏色","color-inactive-comment":"選擇停用的顏色","text-active-name":"作用中文字","text-active-comment":"活動圖示旁的文字","text-active-placeholder":"請在此輸入您的文字","icon-active-name":"啟用的圖示","icon-active-comment":"選擇一個啟用的圖示","color-active-name":"啟用的顏色","color-active-comment":"選擇啟用的顏色"},"translation":{"translation":"翻譯","language_field":"語言欄位","language_field_comment":"在相關資料集中保存語言編碼的欄位","languages":"語言","template":"顯示模板","template_comment":"選擇如何顯示在項目佈局上的值","template_placeholder":"{{title}} — {{body}}"},"user":{"user":"用戶","avatar":"頭像","name":"名稱","template":"模板","template_comment":"如何在下拉選單中格式化用戶","placeholder":"佔位符","placeholder_comment":"添加一個佔位符"},"owner":{"owner":"擁有者","avatar":"頭像","name":"名稱","template":"模板","template_comment":"如何在項目詳細訊息頁面上顯示用戶","display":"顯示","display_comment":"如何在項目瀏覽頁面上顯示用戶","you":"您將成為創建者","unknown":"未知的"},"user-roles":{"user-roles":"用戶角色","choose_role":"選擇一個角色...","relational":"相關的","relational_comment":"另存為相關的紀錄","show_public":"顯示公開的角色"},"user-updated":{"user_updated":"用戶更新","avatar":"頭像","name":"名稱","template":"模板","template_comment":"如何在項目詳細訊息頁面上顯示用戶","display":"顯示","display_comment":"如何在項目瀏覽頁面上顯示用戶","you":"您將成為更新者","unknown":"未知的"},"wysiwyg":{"toolbar":"工具列選項","toolbar_comment":"顯示，隱藏，以及重新排序工具列選項","custom_formats":"自訂格式","custom_formats_comment":"內容自定義的 HTML 封裝","tinymce_options":"TinyMCE 選項","tinymce_options_comment":"覆蓋任何 [TinyMCE 初始化選項]（https://www.tiny.cloud/docs/configure/）。"}}}')}}]);
//# sourceMappingURL=lang-interfaces-zh-TW-interfaces-json.c46a112e.js.map