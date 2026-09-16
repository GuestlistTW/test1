  // ===================== i18n =====================
  const I18N = {
    nav_info:{en:'Event Info', ja:'イベント情報', ko:'행사 정보'}, nav_register:{en:'Register & Lookup', ja:'申込・照会', ko:'신청 및 조회'}, nav_payment:{en:'Payment', ja:'銀行振込', ko:'송금 안내'},
    nav_gallery:{en:'Gallery', ja:'フォトギャラリー', ko:'사진첩'}, nav_admin:{en:'Admin', ja:'管理画面', ko:'관리자'},
    banner_loc:{en:'G House Taipei', ja:'鉅星匯國際宴會廳', ko:'G House 타이베이'},
    info_title:{en:'Event Info', ja:'イベント情報', ko:'행사 정보'},
    info_tagline:{en:'TAIWAN PRIDE — Third Edition', ja:'TAIWAN PRIDE 第3回開催', ko:'TAIWAN PRIDE 제3회 개최'},
    info_intro:{en:'We\'re bringing together friends from around the world before the parade for an evening of food, conversation, and new connections. Whether you\'re local to Taipei or visiting from afar, there\'s a seat for you.', ja:'世界各地から集まる仲間たちと、パレード前に食卓を囲みます。食事を楽しみながらお互いを知り、この一年の出来事を語り合いましょう。台北在住の方も、遠方からお越しの方も、皆さまのための席をご用意しています。', ko:'세계 각지의 친구들을 초대해, 퍼레이드에 앞서 다 함께 식사를 나눕니다. 한 끼 식사를 나누며 서로를 알아가고 지난 일 년의 이야기를 나눠요. 타이베이에 사는 분도, 멀리서 오신 여행자도 자리를 마련해 두었습니다.'},
    loc_label:{en:'Location', ja:'会場', ko:'장소'},
    loc_value:{en:'G House Taipei (Banquet Hall)', ja:'鉅星匯國際宴會廳', ko:'G House 타이베이 (鉅星匯)'},
    loc_addr:{en:'2F, No. 28, Sec. 2, Xinsheng N. Rd., Zhongshan Dist., Taipei', ja:'台北市中山区新生北路二段28号2階', ko:'타이베이시 중산구 신성베이루 2단 28호 2층'},
    loc_btn:{en:'📍 Open in Google Maps →', ja:'📍 Google マップで開く →', ko:'📍 Google 지도에서 열기 →'},
    time_label:{en:'Time', ja:'日時', ko:'일시'}, fee_label:{en:'Fee', ja:'参加費', ko:'참가비'}, fee_value:{en:'NT$1,200 / person', ja:'NT$1,200／人', ko:'1인당 NT$1,200'},
    community_label:{en:'Reminder', ja:'お知らせ', ko:'안내'}, community_value:{en:'To speed up on-site check-in and entry, we recommend having a friend based in Taiwan complete the payment in advance. If advance payment isn\'t convenient, you can also complete it on-site.', ja:'当日の受付・入場をスムーズにするため、台湾在住のお友達に事前決済をお願いいただくことをおすすめします。事前決済が難しい場合は、当日会場でのお手続きも可能です。', ko:'현장 체크인과 입장을 신속하게 진행할 수 있도록, 대만에 계신 지인에게 사전 결제를 부탁드리는 것을 권장합니다. 사전 결제가 어려우신 경우 현장에서도 진행하실 수 있습니다.'},
    notice_title:{en:'Notes', ja:'注意事項', ko:'유의사항'},
    notice_1:{en:'Seating at the restaurant is limited — please register early. If registration exceeds capacity, the organizer will process refunds', ja:'席数に限りがございますので、お早めにお申込みください。定員を超えた場合は主催者より返金のご案内をいたします', ko:'좌석이 한정되어 있으니 서둘러 신청해 주세요. 정원을 초과할 경우 주최 측에서 환불을 안내해 드립니다'},
    notice_2:{en:'Only non-alcoholic drinks will be provided on-site; you\'re welcome to bring your own alcohol', ja:'会場ではノンアルコール飲料のみご用意しております。お酒はお持ち込みいただけます', ko:'현장에서는 무알코올 음료만 제공됩니다. 주류는 각자 가져오실 수 있습니다'},
    notice_3:{en:'If you can\'t make it on the day, please find your own replacement — no refunds', ja:'当日やむを得ずご欠席の場合は、代わりの方をご自身でお探しください。返金はいたしかねます', ko:'당일 부득이하게 참석하지 못하실 경우 대체 참가자를 직접 구해 주세요. 환불은 불가합니다'},
    notice_4:{en:'Guests bringing a plus-one must register and pay together, and will be seated at the same table', ja:'同伴者がいる場合は、お申込みとお支払いをまとめて行っていただき、同じテーブルにご案内します', ko:'동반자와 함께 한 번에 신청 및 결제를 완료해 주세요. 같은 테이블로 안내해 드립니다'},
    notice_6:{en:'For table requests, please provide the person\'s name and IG handle — unclear details may not be accommodated', ja:'同席のご希望は、お相手のお名前と Instagram アカウントをご記入ください。情報が不明確な場合はご希望に添えないことがあります', ko:'동석 희망은 상대방의 이름과 Instagram 계정을 적어 주세요. 정보가 불명확할 경우 반영이 어려울 수 있습니다'},
    notice_7:{en:'Please arrive before the event starts to help keep check-in smooth', ja:'会場の混雑を避けるため、開始時刻までにご入場ください', ko:'현장 혼잡을 피하기 위해 시작 시각 전까지 입장해 주세요'},
    notice_8:{en:'Please treat staff and other guests with respect — the organizer reserves the right to remove anyone behaving inappropriately', ja:'スタッフや他のお客様への配慮をお願いします。不適切な行為があった場合、主催者はご退場をお願いすることがあります', ko:'스태프와 다른 참가자를 존중해 주세요. 부적절한 행위가 있을 경우 주최 측이 퇴장을 요청할 수 있습니다'},
    notice_9:{en:'Photography may take place during the event — let staff know at check-in if you\'d prefer not to be photographed', ja:'当日は写真・動画の撮影を行う場合があります。写り込みを避けたい方は受付時にスタッフへお申し出ください', ko:'당일 사진 및 영상 촬영이 있을 수 있습니다. 사진이나 영상에 나오기를 원하지 않으시면 접수 시 스태프에게 말씀해 주세요'},
    seating_title:{en:'Seating Chart', ja:'座席表', ko:'좌석 배치도'},
    seating_1:{en:'Seating chart placeholder', ja:'座席表は準備中です', ko:'좌석 배치도를 준비 중입니다'}, seating_2:{en:'The seating chart will be posted here once table counts are confirmed', ja:'テーブル数が確定次第、こちらに座席表を掲載します', ko:'테이블 수가 확정되면 이곳에 좌석 배치도를 게시합니다'},
    register_title:{en:'Register & Lookup', ja:'お申込み・照会', ko:'신청 및 조회'},
    register_desc:{en:'Fill out the form to register, or look up your status using the phone number you registered with.', ja:'フォームにご記入いただくか、お申込み時の電話番号で現在の状況を確認できます。', ko:'양식을 작성하거나, 신청 시 입력한 전화번호로 현재 상태를 확인할 수 있습니다.'},
    toggle_signup:{en:'Register', ja:'申し込む', ko:'신청하기'}, toggle_lookup:{en:'Check Status', ja:'申込状況を確認', ko:'신청 상태 조회'},
    field_name:{en:'Name', ja:'お名前 / Name', ko:'이름 / Name'}, field_country:{en:'Country', ja:'国籍 / Country', ko:'국적 / Country'}, field_email:{en:'Email', ja:'メールアドレス', ko:'이메일'},
    field_phone:{en:'Phone', ja:'電話番号', ko:'연락처'}, field_phone_hint:{en:'※ This phone number is used to check your registration status and payment details — please make sure it\'s correct', ja:'※申込状況やお支払いの確認に使用しますので、お間違いのないようご確認ください', ko:'※신청 상태와 결제 확인에 사용되므로 정확히 입력해 주세요'},
    field_ig:{en:'Instagram Handle (required)', ja:'Instagram アカウント（必須）', ko:'Instagram 계정 (필수)'},
    guest_label:{en:'Plus-ones (not including yourself)', ja:'同伴者（ご本人を除く）', ko:'동반자 (본인 제외)'},
    guest_add_btn:{en:'+ Add plus-one', ja:'＋ 同伴者を追加', ko:'＋ 동반자 추가'},
    subtotal_label:{en:'Amount Due (Subtotal)', ja:'お支払い金額', ko:'결제 금액'},
    field_notes:{en:'Dietary restrictions or other notes (optional)', ja:'食物アレルギー・食事上の制限、その他ご要望（任意）', ko:'식사 제한 및 기타 요청 (선택)'},
    field_tablewith:{en:'Table request (optional)', ja:'同席のご希望（任意）', ko:'동석 희망 (선택)'},
    field_tablewith_name_ph:{en:'Name', ja:'お名前', ko:'이름'}, field_tablewith_ig_ph:{en:'IG', ja:'IG', ko:'IG'},
    time_value:{en:'Fri, Oct 30 · 7:00 PM', ja:'2026年10月30日（金）19:00', ko:'2026년 10월 30일(금) 19:00'},
    tablewith_country_ph:{en:'Country', ja:'国籍', ko:'국적'},
    tablewith_ig_required:{en:'Please also fill in that person\'s IG handle so we can identify them',
      ja:'ご本人を特定するため、お相手の Instagram アカウントもご記入ください',
      ko:'해당 인원을 확인할 수 있도록 상대방의 Instagram 계정도 입력해 주세요'},
    field_tablewith_hint:{en:'※ Please give the other person\'s name and IG handle to avoid mix-ups with same names/nicknames — unclear info may not be accommodated', ja:'※同姓同名やニックネームの取り違えを防ぐため、お相手のお名前と Instagram アカウントを必ずご記入ください。情報が不明確な場合はご希望に添えかねます', ko:'※동명이인이나 닉네임 혼동을 막기 위해 상대방의 이름과 Instagram 계정을 반드시 적어 주세요. 정보가 불명확하면 반영이 어렵습니다'},
    paymethod_label:{en:'Payment Method', ja:'お支払い方法', ko:'결제 방법'}, paymethod_online:{en:'Pay Online', ja:'事前振込', ko:'사전 계좌이체'}, paymethod_onsite:{en:'Pay On-site', ja:'当日現地払い', ko:'현장 결제'},
    paymethod_warn:{en:'On-site payment is not available for guests in Taiwan', ja:'台湾在住の方は現地払いをご利用いただけません', ko:'대만에 계신 분은 현장 결제를 이용하실 수 없습니다'},
    notice_recap_summary:{en:'📋 Review the notes again', ja:'📋 注意事項をもう一度確認する', ko:'📋 유의사항 다시 보기'},
    agree_label:{en:'I have read and agree to the notes on the Event Info page', ja:'「イベント情報」ページの注意事項を読み、同意します', ko:'‘행사 정보’ 페이지의 유의사항을 읽고 동의합니다'},
    signup_submit:{en:'Submit Registration', ja:'申し込む', ko:'신청하기'},
    signup_submitting:{en:'Submitting…'},
    signup_msg:{en:'🎉 Registration submitted! If you chose to pay online, please go to the Payment tab to complete payment and report your transfer.', ja:'🎉 お申込みを受け付けました！オンラインでお支払いの方は「お振込み」タブでお振込みとご報告をお願いします。', ko:'🎉 신청이 접수되었습니다! 온라인 결제를 선택하신 분은 ‘송금 안내’ 탭에서 송금 후 보고해 주세요.'},
    signup_error:{en:'Please fill in all required fields (name, country, email, phone) and check the agreement box before submitting', ja:'必須項目（お名前・国籍・メールアドレス・電話番号）をご記入のうえ、注意事項への同意にチェックを入れてください', ko:'필수 항목(이름·국적·이메일·연락처)을 입력하고 유의사항 동의에 체크해 주세요'},
    lookup_field:{en:'Phone Number', ja:'電話番号', ko:'연락처'}, lookup_hint:{en:'Enter the phone number you used when registering', ja:'お申込み時にご記入いただいた電話番号を入力してください', ko:'신청 시 입력하신 전화번호를 입력해 주세요'},
    lookup_submit:{en:'Check Status', ja:'状況を確認', ko:'상태 조회'},
    lookup_submitting:{en:'Checking…'},
    lookup_msg:{en:'No record found — please double check your phone number, or contact the organizer for help.', ja:'データが見つかりません。電話番号をご確認いただくか、主催者までお問い合わせください。', ko:'조회된 정보가 없습니다. 전화번호를 확인하시거나 주최 측에 문의해 주세요.'},
    payment_title:{en:'Payment', ja:'銀行振込', ko:'송금 안내'}, payment_desc:{en:'After registering, please transfer using the details below and report your transfer for verification.', ja:'お申込み後、下記の口座へお振込みのうえ、振込内容をご報告ください。照合に使用します。', ko:'신청 후 아래 계좌로 송금하시고, 송금 내용을 보고해 주세요. 확인에 사용됩니다.'},
    qr_caption:{en:'Sample payment QR code — replace with your actual receiving QR code', ja:'決済コードのサンプルです。実際の QR コードに差し替えてください', ko:'결제 코드 예시입니다. 실제 QR 코드로 교체해 주세요'},
    bank_name_label:{en:'Bank', ja:'銀行名', ko:'은행'}, bank_branch_label:{en:'Branch', ja:'支店', ko:'지점'}, bank_branch_value:{en:'Head Office', ja:'本店', ko:'본점'},
    bank_holder_label:{en:'Account Name', ja:'口座名義', ko:'예금주'}, bank_acct_label:{en:'Account No.', ja:'口座番号', ko:'계좌번호'}, copy_btn:{en:'Copy', ja:'口座番号をコピー', ko:'계좌번호 복사'},
    pay_name_label:{en:'Payer Name', ja:'振込人のお名前', ko:'송금인 이름'}, pay_phone_label:{en:'Phone', ja:'電話番号', ko:'연락처'},
    pay_phone_hint:{en:'※ Please use the same phone number you registered with', ja:'※お申込み時と同じ電話番号をご入力ください', ko:'※신청 시 사용한 전화번호를 입력해 주세요'},
    pay_last5_label:{en:'Last 5 Digits', ja:'振込元口座番号の下5桁', ko:'계좌번호 뒤 5자리'}, pay_amount_label:{en:'Amount', ja:'振込金額', ko:'송금 금액'}, pay_date_label:{en:'Transfer Date', ja:'振込日', ko:'송금일'},
    pay_submit:{en:'Report Transfer', ja:'振込情報を送信', ko:'송금 정보 제출'},
    pay_submitting:{en:'Submitting…'},
    pay_msg:{en:'✅ Your transfer report has been received — we\'ll verify it and update your status soon.', ja:'✅ 振込のご報告を受け付けました。確認のうえ、お申込み状況を更新いたします。', ko:'✅ 송금 보고를 접수했습니다. 확인 후 신청 상태를 업데이트하겠습니다.'},
    gallery_title:{en:'Gallery', ja:'フォトギャラリー', ko:'사진첩'}, gallery_desc:{en:'Event photos will be posted here after the event.', ja:'イベント終了後、写真を順次こちらに掲載します。', ko:'행사 종료 후 사진을 순차적으로 게시합니다.'},
    gallery_empty:{en:'The event hasn\'t happened yet — photo slots are reserved here for later', ja:'イベントはまだ開催前です。写真はこちらに掲載予定です', ko:'행사는 아직 시작 전입니다. 사진은 이곳에 게시될 예정입니다'},
    countdown_label:{en:'Countdown to Taiwan Pride', ja:'TAIWAN PRIDE まであと', ko:'TAIWAN PRIDE까지'},
    countdown_days:{en:'Days', ja:'日', ko:'일'}, countdown_hours:{en:'Hours', ja:'時間', ko:'시간'}, countdown_mins:{en:'Minutes', ja:'分', ko:'분'}, countdown_secs:{en:'Seconds', ja:'秒', ko:'초'},
    admin_title:{en:'Admin'}, admin_desc:{en:'Staff only — view and manage registrations, payments and change history.'},
    admin_gate_title:{en:'Staff Login'}, admin_gate_desc:{en:'Enter the password to view backend data'},
    admin_gate_ph:{en:'Enter password', ja:'パスワードを入力', ko:'비밀번호 입력'}, admin_gate_btn:{en:'Log In'},
    admin_gate_error:{en:'Incorrect password — please try again'},
    admin_refresh_btn:{en:'🔄 Refresh Data'},
    admin_loading:{en:'Loading…'},
    admin_banner_text:{en:'The payment status column is the single source of truth — the system never compares amounts. A transfer report automatically moves a group to \"Verifying\"; once you see the money in the bank, press \"Paid\". Every change is recorded in the 異動紀錄 tab with the operator name. One phone number always maps to exactly one registration.'},
    admin_logic_title:{en:'Reconciliation & Actions'},
    admin_logic_1:{en:'Four payment statuses: Unpaid → Verifying (set automatically when the guest reports a transfer) → Paid, plus Top-up due (people added after payment)'},
    admin_logic_2:{en:'The system does not compare amounts. When you see the money in the 匯款回報 tab, press \"Paid\" — whether the amount is right is your call'},
    admin_logic_3:{en:'Attendance (registered / cancelled) is per person — the main registrant and each plus-one can be cancelled individually, and headcount and amount due are recalculated automatically'},
    admin_logic_4:{en:'If the main registrant cancels, the group stays under their original phone number — everyone else still looks it up with the same number'},
    admin_logic_5:{en:'If a paid group adds people later, the status automatically becomes Top-up due; the amount owed is (new people) × NT$1,200'},
    admin_logic_6:{en:'Refund decisions are yours — the system never processes them automatically. Record what you decided in that group\'s staff note'},
    admin_logic_7:{en:'Full phone numbers are not shown in the admin panel. Check the spreadsheet directly when you need to contact someone'},
    stat_groups:{en:'Active Groups'}, stat_people:{en:'Total People'}, stat_paid:{en:'Paid Groups'},
    stat_outstanding:{en:'Outstanding'}, stat_topup:{en:'Top-up Due'}, stat_pending:{en:'Cancel Requests'},
    filter_all:{en:'All'}, filter_cancelreq:{en:'⚠ Cancel Requests'}, filter_unpaid:{en:'Unpaid'},
    filter_checking:{en:'Verifying'}, filter_topup:{en:'Top-up Due'}, filter_success:{en:'Paid'}, filter_cancelled:{en:'Cancelled'},
    filter_country_label:{en:'Filter by country'},
    lr_regid:{en:'Registration No.', ja:'申込番号', ko:'신청 번호'}, lr_count:{en:'Attending', ja:'参加人数', ko:'참석 인원'}, lr_due:{en:'Amount Due', ja:'お支払い金額', ko:'결제 금액'}, lr_method:{en:'Payment Method', ja:'お支払い方法', ko:'결제 方法'},
    lr_edit_btn:{en:'✏️ Edit registration / add people', ja:'✏️ 申込内容の変更 / 同伴者の追加', ko:'✏️ 신청 내용 수정 / 인원 추가'},
    edit_cancel_btn:{en:'Discard changes', ja:'編集をやめる', ko:'수정 취소'},
    existing_hint:{en:'※ People already registered cannot be removed here. If someone can no longer attend, go back to your lookup result and submit a cancellation request for that person.', ja:'※ すでにお申込み済みの方はここでは削除できません。ご欠席の場合は照会画面に戻り、その方のキャンセル申請を送信してください。主催者が確認いたします。', ko:'※ 이미 신청된 분은 여기서 삭제할 수 없습니다. 참석이 어려우시면 조회 화면으로 돌아가 해당 인원의 취소를 신청해 주세요. 주최 측에서 확인합니다.'},
    footer_text:{en:'Taiwan Pride — Proud Together · Contact the organizer with any questions', ja:'Taiwan Pride — Proud Together ・ ご不明な点は主催者までお問い合わせください', ko:'Taiwan Pride — Proud Together ・ 문의 사항은 주최 측에 연락해 주세요'},
    line_modal_title:{en:'Welcome to Taiwan Pride!', ja:'TAIWAN PRIDE へようこそ！', ko:'TAIWAN PRIDE에 오신 것을 환영합니다!'},
    line_modal_desc:{en:'Scan the QR code below to join our LINE group and get event updates', ja:'下の QR コードから LINE コミュニティに参加して、最新情報を受け取ってください', ko:'아래 QR 코드로 LINE 커뮤니티에 참여해 최신 소식을 받아보세요'},
    line_modal_ph:{en:'LINE group QR code placeholder — replace with the real image', ja:'LINE グループの QR コードエリア（実際の画像に差し替えてください）', ko:'LINE 그룹 QR 코드 영역 (실제 이미지로 교체해 주세요)'},
    line_modal_note:{en:'Be sure to join the event group for the latest announcements or to ask questions', ja:'最新のお知らせやお問い合わせのため、必ずグループにご参加ください', ko:'최신 공지와 문의를 위해 반드시 그룹에 참여해 주세요'},
    line_modal_regid_hint:{en:'Enter this number when you report your payment — it helps us match things up accurately', ja:'お振込みのご報告時にこの番号をご記入いただくと、照合がスムーズです', ko:'송금 보고 시 이 번호를 입력하시면 확인이 수월합니다'},
    admin_view_list:{en:'📋 Registrations'}, admin_view_log:{en:'🕓 Change Log'},
    admin_log_refresh:{en:'🔄 Reload log'},
    admin_log_hint:{en:'Showing the latest 300 changes. Full details (including before/after JSON) are kept in the 異動紀錄 tab of the spreadsheet.'},
    line_modal_close_btn:{en:'Got it', ja:'閉じる', ko:'확인'}
  };

  const GAS_URL = 'https://script.google.com/macros/s/AKfycbwSiXOtHJEtzvmmgqTRoNXPLfwNFa_MZ1mnFjZzRf0XwphOG86BSwTj3QcaHhB__VR0Og/exec';

  let currentLang = 'zh';

  function T(keyOrMap){
    const m = (typeof keyOrMap === 'string') ? I18N[keyOrMap] : keyOrMap;
    if(!m) return (typeof keyOrMap === 'string') ? keyOrMap : '';
    if(currentLang === 'zh') return m.zh || m.en || '';
    return m[currentLang] || m.en || m.zh || '';
  }

  function isEn(){ return currentLang !== 'zh'; }

  const TXT = {
    cancelled:        { zh:'已取消', en:'Cancelled', ja:'キャンセル済み', ko:'취소됨' },
    cancelPending:    { zh:'取消申請中', en:'Cancel requested', ja:'キャンセル申請中', ko:'취소 신청 중' },
    cancelPendingLong:{ zh:'取消申請處理中', en:'Cancel requested', ja:'キャンセル申請を確認中', ko:'취소 신청 확인 중' },
    requestCancel:    { zh:'申請取消', en:'Request cancel', ja:'キャンセルを申請', ko:'취소 신청' },
    undoRequest:      { zh:'撤回申請', en:'Undo request', ja:'申請を取り消す', ko:'신청 철회' }
  };
  const zhCache = new Map();

  const LANG_LABEL = { zh:'中文', en:'English', ja:'日本語', ko:'한국어' };
  const HTML_LANG = { zh:'zh-Hant', en:'en', ja:'ja', ko:'ko' };

  function pickLang(entry, lang){
    if(!entry) return null;
    if(lang === 'zh') return null;
    if(entry[lang]) return entry[lang];
    if(lang !== 'en' && entry.en) return entry.en;
    return null;
  }

  function applyLang(lang){
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(!zhCache.has(el)) zhCache.set(el, el.textContent);
      const txt = pickLang(I18N[key], lang);
      el.textContent = txt !== null ? txt : zhCache.get(el);
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
      const key = el.getAttribute('data-i18n-ph');
      if(!el.hasAttribute('data-zh-ph')) el.setAttribute('data-zh-ph', el.getAttribute('placeholder') || '');
      const txt = pickLang(I18N[key], lang);
      el.setAttribute('placeholder', txt !== null ? txt : el.getAttribute('data-zh-ph'));
    });
    document.getElementById('lang-toggle-btn').innerHTML = '<span class="lang-emoji">🌐</span> ' + LANG_LABEL[lang];
    document.querySelectorAll('.lang-opt').forEach(function(b){
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });
    const slotWord = T({ zh:'照片位', en:'Photo', ja:'写真', ko:'사진' });
    document.querySelectorAll('.gallery-slot[data-slot]').forEach(function(el){
      el.textContent = slotWord + ' ' + el.dataset.slot;
    });
    document.documentElement.lang = HTML_LANG[lang] || 'zh-Hant';
    renumberGuests();
    updateGuestHint();
    refreshCountryPickers();
    if(typeof adminData !== 'undefined' && adminData.length){
      populateAdminCountryFilter();
      renderAdminStats();
      renderAdminList();
    }
    document.querySelectorAll('.country-input').forEach(function(inp){
      if(inp._countryUpdate) inp._countryUpdate(false);
    });
  }

  (function initLangPicker(){
    const btn = document.getElementById('lang-toggle-btn');
    const menu = document.getElementById('lang-menu');

    btn.addEventListener('click', function(e){
      e.stopPropagation();
      const willOpen = menu.hidden;
      menu.hidden = !willOpen;
      btn.setAttribute('aria-expanded', String(willOpen));
    });

    menu.addEventListener('click', function(e){
      const opt = e.target.closest('.lang-opt');
      if(!opt) return;
      applyLang(opt.dataset.lang);
      menu.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('click', function(e){
      if(!menu.hidden && !menu.contains(e.target) && e.target !== btn){
        menu.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  })();

  // ---- tab switching ----
  const tabButtons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.panel');

  function setTab(name){
    tabButtons.forEach(b=>b.classList.toggle('active', b.dataset.tab===name));
    panels.forEach(p=>p.classList.toggle('active', p.id==='panel-'+name));
  }
  tabButtons.forEach(btn=>{
    btn.addEventListener('click', ()=> setTab(btn.dataset.tab));
  });

  // ---- signup / lookup form toggle ----
  const formToggleBtns = document.querySelectorAll('.form-toggle button');
  const signupForm = document.getElementById('signup-form');
  const lookupForm = document.getElementById('lookup-form');
  formToggleBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      formToggleBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const isSignup = btn.dataset.form === 'signup';
      signupForm.style.display = isSignup ? 'block' : 'none';
      lookupForm.style.display = isSignup ? 'none' : 'block';
    });
  });

  var editingGroup = null;

  const guestRowsContainer = document.getElementById('guest-rows');
  const addGuestBtn = document.getElementById('add-guest-btn');
  const guestCountHint = document.getElementById('guest-count-hint');
  const payOnlinePill = document.getElementById('pay-online-pill');
  const payOnsitePill = document.getElementById('pay-onsite-pill');
  const payOnsiteRadio = payOnsitePill.querySelector('input');
  const payOnlineRadio = payOnlinePill.querySelector('input');
  const paymethodWarn = document.getElementById('paymethod-warn');

  function syncPayPills(){
    document.querySelectorAll('input[name="paymethod"]').forEach(function(r){
      r.closest('.radio-pill').classList.toggle('is-checked', r.checked);
    });
  }
  document.querySelectorAll('input[name="paymethod"]').forEach(function(r){
    r.addEventListener('change', syncPayPills);
  });
  syncPayPills();

  let guestCount = 0;

  function guestLabelText(n){
    return T({ zh:`攜伴 ${n} 姓名`, en:`Plus-one ${n} name`,
               ja:`同伴者 ${n} のお名前`, ko:`동반자 ${n} 이름` });
  }
  function removeLabelText(){
    return T({ zh:'移除', en:'Remove', ja:'削除', ko:'삭제' });
  }
  function baseHeadcount(){
    return editingGroup ? (Number(editingGroup.activeCount) || 1) : 1;
  }
  function totalHeadcount(){
    return baseHeadcount() + guestCount;
  }
  function updateGuestHint(){
    const base = baseHeadcount();
    const total = totalHeadcount();
    if(guestCount === 0){
      guestCountHint.textContent = editingGroup
        ? T({ zh:`目前這組共 ${base} 人`, en:`${base} people currently registered`,
              ja:`現在このグループは ${base} 名です`, ko:`현재 이 그룹은 ${base}명입니다` })
        : T({ zh:'尚未新增攜伴（總人數：1人，含本人）', en:'No plus-ones added yet (total: 1 person, including you)',
              ja:'同伴者はまだ追加されていません（合計 1 名／ご本人のみ）', ko:'동반자가 아직 없습니다 (총 1명, 본인 포함)' });
    } else {
      guestCountHint.textContent = T({
        zh:`新增 ${guestCount} 位（總人數：${total}人）`, en:`${guestCount} more added (total: ${total} people)`,
        ja:`${guestCount} 名を追加（合計 ${total} 名）`, ko:`${guestCount}명 추가 (총 ${total}명)` });
    }
    addGuestBtn.disabled = false;
    updatePaymethodAvailability();
    const subtotalEl = document.getElementById('subtotal-amount');
    if(subtotalEl){
      subtotalEl.textContent = 'NT$' + (total * 1200).toLocaleString();
    }
  }

  function updatePaymethodAvailability(){
    const country = (document.getElementById('su-country').value || '').trim().toUpperCase();
    const mustPayOnline = (country === 'TW');

    payOnsiteRadio.disabled = mustPayOnline;
    payOnsitePill.classList.toggle('is-disabled', mustPayOnline);
    paymethodWarn.style.display = mustPayOnline ? 'block' : 'none';

    if(mustPayOnline && payOnsiteRadio.checked){
      payOnlineRadio.checked = true;
      if(typeof syncPayPills === 'function') syncPayPills();
    }
  }

  document.getElementById('su-country').addEventListener('change', updatePaymethodAvailability);

  function renumberGuests(){
    guestRowsContainer.querySelectorAll('.guest-row').forEach((row,i)=>{
      row.querySelector('.guest-row-top label').textContent = guestLabelText(i+1);
      row.querySelector('.remove-guest-btn').textContent = removeLabelText();
    });
  }
  function guestFieldPh(kind){
    if(kind === 'name') return T({ zh:'姓名', en:'Name', ja:'お名前', ko:'이름' });
    if(kind === 'country') return T({ zh:'國籍', en:'Country', ja:'国籍', ko:'국적' });
    return 'IG';
  }
  function addGuestRow(){
    guestCount++;
    const row = document.createElement('div');
    row.className = 'guest-row';
    row.innerHTML = `
      <div class="guest-row-top">
        <label>${guestLabelText(guestCount)}</label>
        <button type="button" class="btn-secondary remove-guest-btn">${removeLabelText()}</button>
      </div>
      <div class="guest-row-fields">
        <input type="text" class="guest-name-input" placeholder="${guestFieldPh('name')}" required>
        <div class="cpick guest-country-picker"></div>
        <input type="hidden" class="guest-country-input country-input" required>
        <input type="text" class="guest-ig-input" placeholder="${guestFieldPh('ig')}" required>
        <div class="country-hint idle guest-country-hint"></div>
      </div>
    `;
    guestRowsContainer.appendChild(row);

    const picker = createCountryPicker(
      row.querySelector('.guest-country-picker'),
      row.querySelector('.guest-country-input'),
      row.querySelector('.guest-country-hint')
    );
    countryPickers.push(picker);

    row.querySelector('.remove-guest-btn').addEventListener('click', ()=>{
      const i = countryPickers.indexOf(picker);
      if(i >= 0) countryPickers.splice(i, 1);
      row.remove();
      guestCount--;
      renumberGuests();
      updateGuestHint();
    });
    updateGuestHint();
  }
  addGuestBtn.addEventListener('click', addGuestRow);
  updateGuestHint();

  // ---- copy account number ----
  const copyBtn = document.getElementById('copy-acct-btn');
  const acctNumber = document.getElementById('acct-number');
  copyBtn.addEventListener('click', ()=>{
    const text = acctNumber.textContent.trim();
    const done = ()=>{
      copyBtn.textContent = T({ zh:'已複製', en:'Copied', ja:'コピーしました', ko:'복사했습니다' });
      copyBtn.classList.add('copied');
      setTimeout(()=>{
        copyBtn.textContent = T({ zh:'複製帳號', en:'Copy', ja:'口座番号をコピー', ko:'계좌번호 복사' });
        copyBtn.classList.remove('copied');
      }, 2000);
    };
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(done).catch(()=>{ fallbackCopy(text); done(); });
    } else {
      fallbackCopy(text); done();
    }
  });
  function fallbackCopy(text){
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    try{ document.execCommand('copy'); }catch(e){}
    document.body.removeChild(ta);
  }

  // ---- LINE group QR modal ----
  const lineModal = document.getElementById('line-modal');
  function openLineModal(regId){
    const regEl = document.getElementById('line-modal-regid');
    const hintEl = document.getElementById('line-modal-regid-hint');
    if(regId){
      const label = T({ zh:'你的報名編號：', en:'Your registration number: ',
                        ja:'お申込番号：', ko:'신청 번호: ' });
      regEl.textContent = label + regId;
      regEl.style.display = 'inline-block';
      hintEl.style.display = 'block';
    } else {
      regEl.style.display = 'none';
      hintEl.style.display = 'none';
    }
    lineModal.style.display = 'flex';
  }
  function closeLineModal(){ lineModal.style.display = 'none'; }
  document.getElementById('line-modal-close').addEventListener('click', closeLineModal);
  document.getElementById('line-modal-ok').addEventListener('click', closeLineModal);

  // ---- Backend Communication ----
  const REQUEST_TIMEOUT = 25000;

  function withTimeout(promise, ms){
    return new Promise((resolve, reject)=>{
      const timer = setTimeout(()=> reject(new Error('timeout')), ms);
      promise.then(v=>{ clearTimeout(timer); resolve(v); },
                    e=>{ clearTimeout(timer); reject(e); });
    });
  }

  let jsonpSeq = 0;
  function jsonpRequest(payload){
    return new Promise((resolve, reject)=>{
      const cbName = '__tpcb' + (++jsonpSeq) + '_' + Date.now();
      const script = document.createElement('script');
      let done = false;

      const cleanup = ()=>{
        done = true;
        try{ delete window[cbName]; }catch(e){ window[cbName] = undefined; }
        if(script.parentNode) script.parentNode.removeChild(script);
      };

      window[cbName] = (data)=>{ if(done) return; cleanup(); resolve(data); };

      const timer = setTimeout(()=>{
        if(done) return;
        cleanup();
        reject(new Error('jsonp-timeout'));
      }, REQUEST_TIMEOUT);

      script.onerror = ()=>{
        if(done) return;
        clearTimeout(timer); cleanup();
        reject(new Error('jsonp-error'));
      };

      const url = GAS_URL + '?callback=' + cbName
                + '&p=' + encodeURIComponent(JSON.stringify(payload))
                + '&_=' + Date.now();

      if(url.length > 7500){ clearTimeout(timer); cleanup(); reject(new Error('payload-too-large')); return; }

      script.src = url;
      document.head.appendChild(script);
    });
  }

  async function postToBackend(payload){
    if(!GAS_URL) return { ok:false, reason:'no-url' };

    try{
      const res = await withTimeout(fetch(GAS_URL, {
        method:'POST',
        headers:{ 'Content-Type':'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      }), REQUEST_TIMEOUT);
      const raw = await res.text();
      const body = JSON.parse(raw);
      return { ok:true, via:'post', status:res.status, body:body };
    }catch(err){
      console.warn('POST 失敗，改走 JSONP：', err);
    }

    try{
      const body = await jsonpRequest(payload);
      return { ok:true, via:'jsonp', body:body };
    }catch(err2){
      console.error('JSONP 也失敗：', err2);
      const msg = String(err2 && err2.message ? err2.message : err2);
      const reason = /timeout/i.test(msg) ? 'timeout' : 'network';
      return { ok:false, reason:reason, error:msg };
    }
  }

  // ---- Form Submission ----
  document.getElementById('signup-form').addEventListener('submit', async (e)=>{
    e.preventDefault();
    const form = e.target;
    const errorEl = document.getElementById('signup-error');
    const showError = (text, ms)=>{
      errorEl.textContent = text;
      errorEl.classList.add('show');
      setTimeout(()=> errorEl.classList.remove('show'), ms || 8000);
    };

    if(!form.checkValidity()){
      showError(T('signup_error'));
      if(form.reportValidity) form.reportValidity();
      return;
    }

    const twName = document.getElementById('su-tablewith-name');
    const twIg = document.getElementById('su-tablewith-ig');
    if(twName.value.trim() && !twIg.value.trim()){
      showError(T('tablewith_ig_required'));
      twIg.focus();
      return;
    }

    const badCountry = validateAllCountries();
    if(badCountry){
      showError(T({
        zh:'國籍「' + badCountry + '」不在清單中，請從下拉選單挑選正確的國家',
        en:'Country "' + badCountry + '" is not in our list — please pick one from the dropdown.',
        ja:'国籍「' + badCountry + '」は一覧にありません。プルダウンからお選びください。',
        ko:'국적 「' + badCountry + '」은(는) 목록에 없습니다. 드롭다운에서 선택해 주세요.' }));
      return;
    }
    errorEl.classList.remove('show');

    const submitBtn = document.getElementById('signup-submit-btn');
    const restoreBtn = ()=>{
      submitBtn.disabled = false;
      submitBtn.textContent = editingGroup
        ? T({ zh:'儲存修改', en:'Save changes', ja:'変更を保存', ko:'변경 사항 저장' })
        : T('signup_submit');
    };
    submitBtn.disabled = true;
    submitBtn.textContent = T('signup_submitting');

    const guests = Array.from(guestRowsContainer.querySelectorAll('.guest-row')).map(row=>({
      name: row.querySelector('.guest-name-input').value.trim(),
      country: readCountry(row.querySelector('.guest-country-input')),
      ig: row.querySelector('.guest-ig-input').value.trim()
    })).filter(g => g.name);

    const payload = {
      type: 'registration',
      name: document.getElementById('su-name').value.trim(),
      country: readCountry(document.getElementById('su-country')),
      email: document.getElementById('su-email').value.trim(),
      phone: document.getElementById('su-phone').value.trim(),
      ig: document.getElementById('su-ig').value.trim(),
      igPublic: false,
      guests: guests,
      notes: document.getElementById('su-notes').value.trim(),
      tableWithName: document.getElementById('su-tablewith-name').value.trim(),
      tableWithIg: document.getElementById('su-tablewith-ig').value.trim(),
      tableWithCountry: document.getElementById('su-tablewith-country').value.trim(),
      paymethod: document.querySelector('input[name="paymethod"]:checked').value
    };

    const r = await postToBackend(payload);
    const body = r.body || {};

    if(!r.ok || body.result !== 'success'){
      showError(body.message || T({
        zh:'連線失敗，請確認網路後再試一次',
        en:'Could not reach the server — please check your connection and try again.',
        ja:'サーバーに接続できませんでした。通信環境をご確認のうえ、もう一度お試しください。',
        ko:'서버에 연결할 수 없습니다. 네트워크를 확인한 뒤 다시 시도해 주세요.' }), 10000);
      restoreBtn();
      return;
    }

    if(body.mode === 'updated'){
      showToast(T({ zh:'✅ 報名資料已更新', en:'✅ Your registration has been updated',
                    ja:'✅ お申込内容を更新しました', ko:'✅ 신청 정보가 업데이트되었습니다' }));
      if(body.topup > 0){
        const topupAmt = Number(body.topup).toLocaleString();
        alert(T({
          zh:'已加入 ' + guests.length + ' 位，需補款 NT$' + topupAmt + '。\n請至「匯款轉帳」頁面完成補匯並回報。',
          en:'Added ' + guests.length + ' more people. Please transfer an additional NT$' + topupAmt + ' and report it on the Payment tab.',
          ja:guests.length + ' 名を追加しました。追加で NT$' + topupAmt + ' のお振込みが必要です。\n「銀行振込」ページよりお手続きとご報告をお願いします。',
          ko:guests.length + '명을 추가했습니다. 추가로 NT$' + topupAmt + '을 송금해 주세요.\n‘송금 안내’ 페이지에서 송금 후 보고해 주세요.' }));
      }
      exitEditMode();
      const phone = payload.phone;
      document.getElementById('lk-query').value = phone;
      await doLookup(phone);
      switchToLookupTab();
    } else {
      const msg = document.getElementById('signup-msg');
      msg.classList.add('show');
      setTimeout(()=> msg.classList.remove('show'), 6000);
      openLineModal(body.id || '');
      signupForm.reset();
      mainCountryPicker.set('');
      guestRowsContainer.innerHTML = '';
      guestCount = 0;
      updateGuestHint();
    }

    restoreBtn();
  });

  function switchToLookupTab(){
    formToggleBtns.forEach(b=> b.classList.toggle('active', b.dataset.form === 'lookup'));
    signupForm.style.display = 'none';
    lookupForm.style.display = 'block';
    document.getElementById('lookup-result').scrollIntoView({ behavior:'smooth', block:'start' });
  }

  function enterEditMode(g){
    editingGroup = g;

    document.getElementById('su-name').value = g.name || '';
    mainCountryPicker.set(g.country || '');
    document.getElementById('su-email').value = g.email || '';
    document.getElementById('su-phone').value = g.phone || '';
    document.getElementById('su-ig').value = g.ig || '';
    document.getElementById('su-notes').value = g.notes || '';
    document.getElementById('su-tablewith-name').value = g.tableWithName || '';
    document.getElementById('su-tablewith-ig').value = g.tableWithIg || '';
    tableWithCountryPicker.set(g.tableWithCountry || '');
    document.getElementById('su-agree').checked = true;
    const onsite = g.paymethod === '現場付款';
    (onsite ? payOnsiteRadio : payOnlineRadio).checked = true;

    const phoneInput = document.getElementById('su-phone');
    phoneInput.readOnly = true;
    phoneInput.style.opacity = '0.6';

    const box = document.getElementById('existing-members');
    box.innerHTML = (g.members || []).map(m=>{
      const tags = m.cancelled
        ? '<span class="st-badge st-void">' + T(TXT.cancelled) + '</span>'
        : (m.cancelPending
            ? '<span class="st-badge st-topup">' + T(TXT.cancelPending) + '</span>'
            : '');
      return '<div class="existing-mem' + (m.cancelled ? ' is-cancelled' : '') + '">'
        + '<span class="mem-role">' + escapeHtml(m.role) + '</span>'
        + '<span class="mem-name">' + flagOf(m.country) + ' ' + escapeHtml(m.name) + '</span>'
        + (m.ig ? '<span class="mem-ig">' + escapeHtml(m.ig) + '</span>' : '')
        + tags + '</div>';
    }).join('');
    box.style.display = 'block';
    document.getElementById('existing-members-hint').style.display = 'block';

    guestRowsContainer.innerHTML = '';
    guestCount = 0;
    updateGuestHint();

    document.getElementById('edit-banner-id').textContent = g.regId;
    document.getElementById('edit-banner').classList.add('show');
    document.getElementById('signup-submit-btn').textContent =
      T({ zh:'儲存修改', en:'Save changes', ja:'変更を保存', ko:'변경 사항 저장' });

    formToggleBtns.forEach(b=> b.classList.toggle('active', b.dataset.form === 'signup'));
    signupForm.style.display = 'block';
    lookupForm.style.display = 'none';
    document.getElementById('edit-banner').scrollIntoView({ behavior:'smooth', block:'start' });
  }

  function exitEditMode(){
    editingGroup = null;
    mainCountryPicker.set('');
    const phoneInput = document.getElementById('su-phone');
    phoneInput.readOnly = false;
    phoneInput.style.opacity = '';
    document.getElementById('existing-members').style.display = 'none';
    document.getElementById('existing-members').innerHTML = '';
    document.getElementById('existing-members-hint').style.display = 'none';
    document.getElementById('edit-banner').classList.remove('show');
    document.getElementById('signup-submit-btn').textContent = T('signup_submit');
    signupForm.reset();
    guestRowsContainer.innerHTML = '';
    guestCount = 0;
    updateGuestHint();
  }

  document.getElementById('edit-cancel-btn').addEventListener('click', ()=>{
    exitEditMode();
    switchToLookupTab();
  });

  // ---- payment form ----
  document.getElementById('payment-form').addEventListener('submit', async (e)=>{
    e.preventDefault();
    const submitBtn = document.getElementById('payment-submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = T('pay_submitting');

    const payload = {
      type: 'payment',
      id: 'pay-' + Date.now() + '-' + Math.random().toString(36).slice(2,7),
      name: document.getElementById('pay-name').value.trim(),
      phone: document.getElementById('pay-phone').value.trim(),
      last5: document.getElementById('pay-last5').value.trim(),
      amount: Number(document.getElementById('pay-amount').value) || 0,
      date: document.getElementById('pay-date').value
    };
    await postToBackend(payload);

    const msg = document.getElementById('payment-msg');
    msg.classList.add('show');
    setTimeout(()=> msg.classList.remove('show'), 6000);
    document.getElementById('payment-form').reset();

    submitBtn.disabled = false;
    submitBtn.textContent = T('pay_submit');
  });

  // ===================== Country Pickers Data =====================
  const COUNTRIES = [
    ['TW','台灣','Taiwan','TWN','ROC','中華民國','台湾','臺灣','CHINESE TAIPEI','FORMOSA'],
    ['HK','香港','Hong Kong','HKG','HONGKONG','香港特別行政區'],
    ['MO','澳門','Macau','MAC','MACAO','澳门'],
    ['CN','中國','China','CHN','PRC','中国','中國大陸','MAINLAND CHINA','PEOPLES REPUBLIC OF CHINA'],
    ['JP','日本','Japan','JPN','NIPPON','NIHON'],
    ['KR','韓國','South Korea','KOR','KOREA','韓国','南韓','大韓民國','REPUBLIC OF KOREA'],
    ['SG','新加坡','Singapore','SGP'],
    ['MY','馬來西亞','Malaysia','MYS','马来西亚'],
    ['TH','泰國','Thailand','THA','泰国'],
    ['VN','越南','Vietnam','VNM','VIET NAM'],
    ['PH','菲律賓','Philippines','PHL','菲律宾'],
    ['ID','印尼','Indonesia','IDN','印度尼西亞'],
    ['IN','印度','India','IND'],
    ['MN','蒙古','Mongolia','MNG'],
    ['NP','尼泊爾','Nepal','NPL'],
    ['LK','斯里蘭卡','Sri Lanka','LKA'],
    ['PK','巴基斯坦','Pakistan','PAK'],
    ['BD','孟加拉','Bangladesh','BGD'],
    ['KH','柬埔寨','Cambodia','KHM'],
    ['LA','寮國','Laos','LAO','老撾'],
    ['MM','緬甸','Myanmar','MMR','BURMA'],
    ['BN','汶萊','Brunei','BRN','文萊'],
    ['US','美國','United States','USA','AMERICA','UNITED STATES OF AMERICA','美国','U S A'],
    ['CA','加拿大','Canada','CAN'],
    ['MX','墨西哥','Mexico','MEX'],
    ['BR','巴西','Brazil','BRA'],
    ['AR','阿根廷','Argentina','ARG'],
    ['CL','智利','Chile','CHL'],
    ['PE','秘魯','Peru','PER'],
    ['CO','哥倫比亞','Colombia','COL'],
    ['UK','英國','United Kingdom','GB','GBR','BRITAIN','GREAT BRITAIN','ENGLAND','SCOTLAND','WALES','英国','大不列顛'],
    ['IE','愛爾蘭','Ireland','IRL'],
    ['FR','法國','France','FRA','法国'],
    ['DE','德國','Germany','DEU','GER','德国','DEUTSCHLAND'],
    ['NL','荷蘭','Netherlands','NLD','HOLLAND','荷兰'],
    ['BE','比利時','Belgium','BEL'],
    ['ES','西班牙','Spain','ESP'],
    ['PT','葡萄牙','Portugal','PRT'],
    ['IT','義大利','Italy','ITA','意大利'],
    ['CH','瑞士','Switzerland','CHE'],
    ['AT','奧地利','Austria','AUT'],
    ['SE','瑞典','Sweden','SWE'],
    ['NO','挪威','Norway','NOR'],
    ['DK','丹麥','Denmark','DNK'],
    ['FI','芬蘭','Finland','FIN'],
    ['IS','冰島','Iceland','ISL'],
    ['PL','波蘭','Poland','POL'],
    ['CZ','捷克','Czechia','CZE','CZECH REPUBLIC'],
    ['SK','斯洛伐克','Slovakia','SVK'],
    ['HU','匈牙利','Hungary','HUN'],
    ['RO','羅馬尼亞','Romania','ROU'],
    ['BG','保加利亞','Bulgaria','BGR'],
    ['HR','克羅埃西亞','Croatia','HRV'],
    ['SI','斯洛維尼亞','Slovenia','SVN'],
    ['RS','塞爾維亞','Serbia','SRB'],
    ['GR','希臘','Greece','GRC'],
    ['LT','立陶宛','Lithuania','LTU'],
    ['LV','拉脫維亞','Latvia','LVA'],
    ['EE','愛沙尼亞','Estonia','EST'],
    ['LU','盧森堡','Luxembourg','LUX'],
    ['MT','馬爾他','Malta','MLT'],
    ['CY','賽普勒斯','Cyprus','CYP'],
    ['RU','俄羅斯','Russia','RUS','俄罗斯'],
    ['UA','烏克蘭','Ukraine','UKR'],
    ['TR','土耳其','Turkey','TUR','TURKIYE','TÜRKIYE'],
    ['IL','以色列','Israel','ISR'],
    ['AE','阿聯','United Arab Emirates','ARE','UAE','DUBAI','杜拜','阿拉伯聯合大公國'],
    ['SA','沙烏地阿拉伯','Saudi Arabia','SAU'],
    ['EG','埃及','Egypt','EGY'],
    ['ZA','南非','South Africa','ZAF'],
    ['NG','奈及利亞','Nigeria','NGA'],
    ['KE','肯亞','Kenya','KEN'],
    ['MA','摩洛哥','Morocco','MAR'],
    ['AU','澳洲','Australia','AUS','澳大利亞'],
    ['NZ','紐西蘭','New Zealand','NZL','新西蘭','AOTEAROA']
  ];

  const COUNTRY_LOOKUP = {};
  const COUNTRY_NAME = {};
  function countryKey(s){
    return String(s || '').toUpperCase().replace(/[\s.\-_,()（）·'"]/g, '');
  }
  COUNTRIES.forEach(function(row){
    const code = row[0];
    COUNTRY_NAME[code] = { zh: row[1], en: row[2] };
    row.forEach(function(alias){
      const k = countryKey(alias);
      if(k && !COUNTRY_LOOKUP[k]) COUNTRY_LOOKUP[k] = code;
    });
  });

  const FLAG_FIX = { UK:'GB' };
  function flagOf(code){
    const c = String(code || '').trim().toUpperCase();
    if(!/^[A-Z]{2}$/.test(FLAG_FIX[c] || c)) return '🏳️‍🌈';
    const cc = FLAG_FIX[c] || c;
    return String.fromCodePoint(cc.charCodeAt(0) + 127397, cc.charCodeAt(1) + 127397);
  }

  function countryTag(code){
    const c = String(code || '').trim().toUpperCase();
    if(!c) return '';
    return flagOf(c) + ' ' + c;
  }

  // 後台清單只顯示國旗，不顯示國碼文字（如 TW / TH）
  function countryFlagOnly(code){
    const c = String(code || '').trim().toUpperCase();
    if(!c) return '';
    return flagOf(c);
  }

  let cpickSeq = 0;

  function createCountryPicker(mount, hiddenInput, hintEl, placeholderText){
    let value = '';
    let filtered = [];
    let activeIdx = -1;
    let open = false;

    const uid = 'cpick' + (++cpickSeq);

    mount.innerHTML =
      '<div class="cpick-toggle">'
        + '<div class="cpick-field">'
          + '<span class="cpick-value is-placeholder"></span>'
          + '<input type="text" class="cpick-search" id="' + uid + '-input"'
            + ' role="combobox" autocomplete="off" autocorrect="off" spellcheck="false"'
            + ' aria-expanded="false" aria-haspopup="listbox"'
            + ' aria-controls="' + uid + '-listbox" aria-autocomplete="list">'
        + '</div>'
        + '<span class="cpick-actions">'
          + '<button type="button" class="cpick-clear" tabindex="-1" aria-label="Clear selection">✕</button>'
          + '<span class="cpick-caret" aria-hidden="true"></span>'
        + '</span>'
      + '</div>'
      + '<div class="cpick-list" id="' + uid + '-listbox" role="listbox" hidden></div>';

    const toggle = mount.querySelector('.cpick-toggle');
    const valueEl = mount.querySelector('.cpick-value');
    const search = mount.querySelector('.cpick-search');
    const clearBtn = mount.querySelector('.cpick-clear');
    const list = mount.querySelector('.cpick-list');

    function labelOf(code){
      const n = COUNTRY_NAME[code];
      if(!n) return code;
      return flagOf(code) + '  ' + code + ' · ' + (isEn() ? n.en : n.zh + ' ' + n.en);
    }

    function renderValue(){
      if(value){
        valueEl.textContent = labelOf(value);
        valueEl.classList.remove('is-placeholder');
      } else {
        valueEl.textContent = placeholderText
          ? placeholderText()
          : T({ zh:'請選擇國籍…', en:'Select your country…',
                ja:'国籍を選択してください…', ko:'국적을 선택해 주세요…' });
        valueEl.classList.add('is-placeholder');
      }
      if(hintEl){ hintEl.textContent = ''; hintEl.className = 'country-hint idle'; }
    }

    function renderList(){
      const kw = countryKey(search.value || '');
      filtered = COUNTRIES.filter(function(row){
        if(!kw) return true;
        return countryKey(row.join('')).indexOf(kw) >= 0;
      });

      if(filtered.length === 0){
        list.innerHTML = '<div class="cpick-empty">'
          + T({ zh:'找不到符合的國家', en:'No matching country',
                ja:'該当する国が見つかりません', ko:'해당하는 국가가 없습니다' })
          + '</div>';
        activeIdx = -1;
        return;
      }
      list.innerHTML = filtered.map(function(row, i){
        return '<div class="cpick-opt' + (i === activeIdx ? ' active' : '') + '"'
          + ' role="option" id="' + uid + '-opt' + i + '"'
          + ' aria-selected="' + (row[0] === value) + '"'
          + ' data-code="' + row[0] + '">'
          + escapeHtml(labelOf(row[0])) + '</div>';
      }).join('');
      if(activeIdx >= 0) search.setAttribute('aria-activedescendant', uid + '-opt' + activeIdx);
      else search.removeAttribute('aria-activedescendant');
    }

    function scrollActiveIntoView(){
      const el = list.querySelector('.cpick-opt.active');
      if(el && typeof el.scrollIntoView === 'function') el.scrollIntoView({ block:'nearest' });
    }

    function openList(){
      if(open) return;
      open = true;
      mount.classList.add('is-open');
      list.hidden = false;
      search.setAttribute('aria-expanded', 'true');
      search.value = '';
      activeIdx = -1;
      renderList();
      search.focus();
      const sel = list.querySelector('.cpick-opt[aria-selected="true"]');
      if(sel) list.scrollTop = sel.offsetTop - 60;
    }

    function closeList(){
      if(!open) return;
      open = false;
      mount.classList.remove('is-open');
      list.hidden = true;
      search.setAttribute('aria-expanded', 'false');
      search.removeAttribute('aria-activedescendant');
      search.value = '';
    }

    function setValue(code){
      value = code || '';
      hiddenInput.value = value;
      mount.classList.toggle('has-value', !!value);
      renderValue();
      hiddenInput.dispatchEvent(new Event('change', { bubbles:true }));
    }

    toggle.addEventListener('mousedown', function(e){
      if(e.target.closest('.cpick-clear')) return;
      e.preventDefault();
      open ? closeList() : openList();
    });

    search.addEventListener('keydown', function(e){
      if(!open && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown')){
        e.preventDefault();
        openList();
      }
    });

    search.addEventListener('input', function(){ activeIdx = -1; renderList(); });

    search.addEventListener('keydown', function(e){
      if(e.key === 'ArrowDown'){
        e.preventDefault();
        activeIdx = Math.min(activeIdx + 1, filtered.length - 1);
        renderList();
        scrollActiveIntoView();
      } else if(e.key === 'ArrowUp'){
        e.preventDefault();
        activeIdx = Math.max(activeIdx - 1, 0);
        renderList();
        scrollActiveIntoView();
      } else if(e.key === 'Enter'){
        e.preventDefault();
        if(activeIdx < 0 && filtered.length === 1) activeIdx = 0;
        if(activeIdx >= 0){ setValue(filtered[activeIdx][0]); closeList(); }
      } else if(e.key === 'Escape'){
        closeList();
      }
    });

    list.addEventListener('mousedown', function(e){
      const opt = e.target.closest('.cpick-opt');
      if(!opt) return;
      e.preventDefault();
      setValue(opt.dataset.code);
      closeList();
    });

    clearBtn.addEventListener('click', function(e){
      e.stopPropagation();
      setValue('');
      closeList();
    });

    document.addEventListener('click', function(e){
      if(!mount.contains(e.target)) closeList();
    });

    renderValue();

    const api = {
      get: function(){ return value; },
      set: setValue,
      open: function(){ openList(); },
      refresh: function(){ renderValue(); if(open) renderList(); }
    };
    mount._picker = api;
    return api;
  }

  const countryPickers = [];
  const mainCountryPicker = createCountryPicker(
    document.getElementById('su-country-picker'),
    document.getElementById('su-country'),
    document.getElementById('su-country-hint')
  );
  countryPickers.push(mainCountryPicker);

  const tableWithCountryPicker = createCountryPicker(
    document.getElementById('su-tablewith-country-picker'),
    document.getElementById('su-tablewith-country'),
    null,
    function(){ return T({ zh:'國籍（選填）', en:'Country (optional)',
                           ja:'国籍（任意）', ko:'국적 (선택)' }); }
  );
  countryPickers.push(tableWithCountryPicker);

  function refreshCountryPickers(){
    countryPickers.forEach(function(p){ p.refresh(); });
  }

  function readCountry(input){
    return String((input && input.value) || '').trim();
  }

  function validateAllCountries(){
    if(!document.getElementById('su-country').value.trim()){
      document.getElementById('su-country-picker')._picker.open();
      return T({ zh:'（尚未選擇你的國籍）', en:'(your country is not selected)',
                 ja:'（国籍が選択されていません）', ko:'(국적이 선택되지 않았습니다)' });
    }
    const rows = Array.from(guestRowsContainer.querySelectorAll('.guest-row'));
    for(let i = 0; i < rows.length; i++){
      const hidden = rows[i].querySelector('.guest-country-input');
      if(!hidden.value.trim()){
        rows[i].querySelector('.cpick')._picker.open();
        return T({
          zh:'（第 ' + (i + 1) + ' 位攜伴尚未選擇國籍）',
          en:'(plus-one #' + (i + 1) + ' has no country selected)',
          ja:'（同伴者 ' + (i + 1) + ' 名目の国籍が未選択です）',
          ko:'(동반자 ' + (i + 1) + '번째의 국적이 선택되지 않았습니다)' });
      }
    }
    return '';
  }

  // ---- Instagram Suggestion List ----
  let igDirectory = [];

  function igKey(v){
    return String(v || '').trim().toLowerCase().replace(/^@/, '').replace(/[._\s-]/g, '');
  }

  async function loadIgDirectory(){
    const r = await postToBackend({ type:'igList' });
    const body = r.body || {};
    if(body.result !== 'success') return;
    igDirectory = body.igs || [];
  }

  function filterIgs(input){
    const k = igKey(input);
    if(!k) return igDirectory.slice(0, 80);
    return igDirectory.filter(function(ig){
      const t = igKey(ig);
      return t.indexOf(k) >= 0 || k.indexOf(t) >= 0;
    }).slice(0, 80);
  }

  (function initIgPicker(){
    const input = document.getElementById('su-tablewith-ig');
    const box = document.getElementById('ig-suggest');
    if(!input) return;

    let activeIdx = -1;
    let current = [];

    function close(){
      box.hidden = true;
      box.innerHTML = '';
      activeIdx = -1;
      input.setAttribute('aria-expanded', 'false');
    }

    function openBox(){
      box.hidden = false;
      input.setAttribute('aria-expanded', 'true');
    }

    function render(){
      current = filterIgs(input.value);

      if(igDirectory.length === 0){ close(); return; }

      if(current.length === 0){
        box.innerHTML = '<div class="ig-empty">'
          + T({ zh:'沒有相符的已報名帳號，你仍然可以直接手動輸入',
                en:'No registered IG matches — you can still type it in manually.',
                ja:'一致する登録済みアカウントがありません。手入力も可能です',
                ko:'일치하는 등록 계정이 없습니다. 직접 입력하셔도 됩니다' })
          + '</div>';
        openBox();
        activeIdx = -1;
        return;
      }

      box.innerHTML = current.map(function(ig, i){
        return '<div class="ig-opt' + (i === activeIdx ? ' active' : '') + '"'
          + ' role="option" aria-selected="' + (i === activeIdx) + '"'
          + ' data-ig="' + escapeHtml(ig) + '">' + escapeHtml(ig) + '</div>';
      }).join('');
      openBox();
    }

    function choose(ig){
      input.value = ig;
      close();
    }

    input.addEventListener('focus', render);
    input.addEventListener('input', function(){ activeIdx = -1; render(); });

    input.addEventListener('keydown', function(e){
      if(box.hidden || current.length === 0) return;
      if(e.key === 'ArrowDown'){ e.preventDefault(); activeIdx = Math.min(activeIdx + 1, current.length - 1); render(); }
      else if(e.key === 'ArrowUp'){ e.preventDefault(); activeIdx = Math.max(activeIdx - 1, 0); render(); }
      else if(e.key === 'Enter' && activeIdx >= 0){ e.preventDefault(); choose(current[activeIdx]); }
      else if(e.key === 'Escape'){ close(); }
    });

    box.addEventListener('mousedown', function(e){
      const opt = e.target.closest('.ig-opt');
      if(!opt) return;
      e.preventDefault();
      choose(opt.dataset.ig);
    });

    document.addEventListener('click', function(e){
      if(e.target !== input && !box.contains(e.target)) close();
    });
  })();

  // ---- Toast ----
  let toastTimer = null;
  function showToast(text){
    const el = document.getElementById('toast');
    el.textContent = text;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=> el.classList.remove('show'), 3400);
  }

  function escapeHtml(str){
    const div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  // ---- Status Definitions ----
  const PS = { NONE:'未收款', CHECKING:'帳款確認中', TOPUP:'待補款', DONE:'已收款' };
  const PS_META = {
    [PS.NONE]:     { cls:'st-none',     zh:'未收款',     en:'Unpaid',     ja:'未入金',       ko:'미입금' },
    [PS.CHECKING]: { cls:'st-checking', zh:'帳款確認中', en:'Verifying',  ja:'入金確認中',   ko:'입금 확인 중' },
    [PS.TOPUP]:    { cls:'st-topup',    zh:'待補款',     en:'Top-up due', ja:'追加入金待ち', ko:'추가 입금 대기' },
    [PS.DONE]:     { cls:'st-paid',     zh:'已收款',     en:'Paid',       ja:'入金済み',     ko:'입금 완료' }
  };
  const CANCELLED_META = { cls:'st-void', zh:'已取消', en:'Cancelled', ja:'キャンセル済み', ko:'취소됨' };
  const NA_META = { cls:'st-na', zh:'N/A', en:'N/A', ja:'N/A', ko:'N/A' };

  function psMeta(g){
    if(g && g.allCancelled) return CANCELLED_META;
    if(g && g.payStatus === 'N/A') return NA_META;
    return PS_META[g && g.payStatus] || PS_META[PS.NONE];
  }
  function psText(g){
    const m = psMeta(g);
    return T(m);
  }

  // ---- Lookup Logic ----
  const lookupResult = document.getElementById('lookup-result');
  let lastLookupPhone = '';
  let lastLookupData = null;

  document.getElementById('lookup-form').addEventListener('submit', async (e)=>{
    e.preventDefault();
    await doLookup(document.getElementById('lk-query').value.trim());
  });

  async function doLookup(phone){
    const msg = document.getElementById('lookup-msg');
    const btn = document.getElementById('lookup-submit-btn');
    msg.classList.remove('show');
    lookupResult.classList.remove('show');

    btn.disabled = true;
    btn.textContent = T('lookup_submitting');

    const notFound = (text)=>{
      msg.textContent = text || T('lookup_msg');
      msg.classList.add('show');
      setTimeout(()=> msg.classList.remove('show'), 8000);
    };

    const r = await postToBackend({ type:'lookup', phone: phone });
    const data = r.body || {};

    if(!r.ok){
      notFound(T({ zh:'連線失敗，請確認網路後再試一次。',
                   en:'Could not reach the server — please check your connection and try again.',
                   ja:'サーバーに接続できませんでした。通信環境をご確認ください。',
                   ko:'서버에 연결할 수 없습니다. 네트워크를 확인해 주세요.' }));
    } else if(data.found){
      lastLookupPhone = phone;
      lastLookupData = data;
      renderLookup(data);
    } else {
      notFound();
    }

    btn.disabled = false;
    btn.textContent = T('lookup_submit');
  }

  function renderLookup(d){
    const isOnline = d.paymethod !== '現場付款';

    document.getElementById('lr-name').textContent = d.name || '—';
    const badge = document.getElementById('lr-badge');
    badge.className = 'st-badge ' + psMeta(d).cls;
    badge.textContent = psText(d);

    document.getElementById('lr-regid').textContent = d.regId || '—';
    document.getElementById('lr-count').textContent = T({
      zh: d.activeCount + ' 人', en: d.activeCount + ' people',
      ja: d.activeCount + ' 名', ko: d.activeCount + '명' });
    document.getElementById('lr-due').textContent = 'NT$' + Number(d.due || 0).toLocaleString();
    document.getElementById('lr-method').textContent =
      isOnline ? T('paymethod_online') : T('paymethod_onsite');

    const NOTE = {
      [PS.DONE]: {
        zh:'已確認收到您的付款，我們活動現場見！',
        en:'Payment confirmed — see you at the event!',
        ja:'ご入金を確認しました。当日会場でお会いしましょう！',
        ko:'입금이 확인되었습니다. 행사 당일에 뵙겠습니다!' },
      [PS.CHECKING]: {
        zh:'已收到你的匯款回報，主辦單位正在核對中，確認後這裡會變成「已收款」。',
        en:'We have received your transfer report and are verifying it.',
        ja:'お振込みのご報告を受け取りました。確認が取れ次第「入金済み」に変わります。',
        ko:'송금 보고를 접수했습니다. 확인이 완료되면 ‘입금 완료’로 변경됩니다.' },
      [PS.TOPUP]: {
        zh:'報名後有新增人數，請補匯差額並至「匯款轉帳」頁面回報。',
        en:'People were added after payment — please transfer the difference and report it on the Payment tab.',
        ja:'お申込み後に人数が追加されました。差額をお振込みのうえ「銀行振込」ページよりご報告ください。',
        ko:'신청 후 인원이 추가되었습니다. 차액을 송금하신 뒤 ‘송금 안내’ 페이지에서 보고해 주세요.' },
      [PS.NONE]: {
        zh:'尚未收到您的匯款回報，請至「匯款轉帳」頁面完成轉帳並回報。',
        en:'We have not received your transfer report yet — please complete it on the Payment tab.',
        ja:'お振込みのご報告がまだ届いていません。「銀行振込」ページよりお手続きとご報告をお願いします。',
        ko:'아직 송금 보고가 접수되지 않았습니다. ‘송금 안내’ 페이지에서 송금 후 보고해 주세요.' }
    };
    const onsiteNote = {
      zh:'請於活動當天現場付款，工作人員會協助收款。',
      en:'Please pay on-site on the day; staff will assist you.',
      ja:'当日会場にてお支払いください。スタッフがご案内いたします。',
      ko:'행사 당일 현장에서 결제해 주세요. 스태프가 안내해 드립니다.' };
    const cancelledNote = {
      zh:'這組報名的成員都已取消。',
      en:'Everyone in this registration has been cancelled.',
      ja:'このお申込みの参加者は全員キャンセル済みです。',
      ko:'이 신청의 참가자가 모두 취소되었습니다.' };

    let note;
    if(d.allCancelled) note = cancelledNote;
    else if(!isOnline && d.payStatus === PS.NONE) note = onsiteNote;
    else note = NOTE[d.payStatus] || NOTE[PS.NONE];
    document.getElementById('lr-note').textContent = T(note);

    const box = document.getElementById('lr-members');
    box.innerHTML = (d.members || []).map(m=>{
      let right = '';
      if(m.cancelled){
        right = '<span class="st-badge st-void">' + T(TXT.cancelled) + '</span>';
      } else if(m.cancelPending){
        right = '<span class="st-badge st-topup">' + T(TXT.cancelPendingLong) + '</span>'
              + '<button type="button" class="mini-btn" data-withdraw-member="' + m.index + '">'
              + T(TXT.undoRequest) + '</button>';
      } else {
        right = '<button type="button" class="mini-btn danger" data-cancel-member="' + m.index + '">'
              + T(TXT.requestCancel) + '</button>';
      }
      return '<div class="lr-mem' + (m.cancelled?' is-cancelled':'') + (m.cancelPending?' is-pending':'') + '">'
        + '<span class="mem-role">' + escapeHtml(m.role) + '</span>'
        + '<span class="mem-name">' + countryTag(m.country) + ' ' + escapeHtml(m.name) + '</span>'
        + right + '</div>';
    }).join('');

    document.getElementById('lr-edit-btn').style.display = d.allCancelled ? 'none' : 'inline-block';
    lookupResult.classList.add('show');
  }

  // ---- Cancellation Requests ----
  document.getElementById('lr-members').addEventListener('click', async (e)=>{
    const btn = e.target.closest('[data-cancel-member]');
    if(!btn || !lastLookupPhone) return;

    const idx = btn.dataset.cancelMember;
    const member = (lastLookupData.members || []).filter(m=> String(m.index) === String(idx))[0];
    const who = member ? member.name : '';

    const ok = confirm(T({
      zh:'確定要為「' + who + '」送出取消申請嗎？\n送出後由主辦單位確認。退費依「活動訊息」頁面的注意事項辦理。',
      en:'Submit a cancellation request for "' + who + '"?\nThe organizer will confirm it. Refunds follow the policy on the Event Info page.',
      ja:'「' + who + '」さんのキャンセルを申請しますか？\n主催者が確認いたします。返金は「イベント情報」ページの注意事項に従います。',
      ko:'「' + who + '」님의 취소를 신청하시겠습니까?\n주최 측에서 확인합니다. 환불은 ‘행사 정보’ 페이지의 유의사항에 따릅니다.' }));
    if(!ok) return;

    const reason = prompt(T({ zh:'取消原因（選填）', en:'Reason (optional)',
                              ja:'キャンセル理由（任意）', ko:'취소 사유 (선택)' }), '') || '';

    btn.disabled = true;
    btn.textContent = T({ zh:'送出中…', en:'Submitting…', ja:'送信中…', ko:'전송 중…' });

    const r = await postToBackend({
      type:'cancelRequest', phone: lastLookupPhone, memberIndex: idx, reason: reason
    });
    const body = r.body || {};

    if(body.result === 'success'){
      showToast(T({ zh:'✅ 已送出取消申請', en:'✅ Cancellation request submitted',
                    ja:'✅ キャンセル申請を送信しました', ko:'✅ 취소 신청을 접수했습니다' }));
      await doLookup(lastLookupPhone);
    } else {
      showToast(body.message || T({ zh:'⚠️ 申請失敗，請稍後再試', en:'⚠️ Request failed',
                                    ja:'⚠️ 申請に失敗しました。時間をおいてお試しください', ko:'⚠️ 신청에 실패했습니다. 잠시 후 다시 시도해 주세요' }));
      btn.disabled = false;
      btn.textContent = T(TXT.requestCancel);
    }
  });

  // ---- Withdraw Cancellation ----
  document.getElementById('lr-members').addEventListener('click', async (e)=>{
    const btn = e.target.closest('[data-withdraw-member]');
    if(!btn || !lastLookupPhone) return;

    const idx = btn.dataset.withdrawMember;
    const member = (lastLookupData.members || []).filter(m=> String(m.index) === String(idx))[0];
    const who = member ? member.name : '';

    const ok = confirm(T({
      zh:'確定要撤回「' + who + '」的取消申請嗎？\n撤回後這位維持出席，費用照原本計算。',
      en:'Undo the cancellation request for "' + who + '"? They will stay registered.',
      ja:'「' + who + '」さんのキャンセル申請を取り消しますか？\n取り消すとご参加のままとなり、料金も元のままです。',
      ko:'「' + who + '」님의 취소 신청을 철회하시겠습니까?\n철회하면 참석이 유지되며 금액도 그대로입니다.' }));
    if(!ok) return;

    btn.disabled = true;
    btn.textContent = T({ zh:'處理中…', en:'Undoing…', ja:'処理中…', ko:'처리 중…' });

    const r = await postToBackend({
      type:'withdrawCancel', phone: lastLookupPhone, memberIndex: idx
    });
    const body = r.body || {};

    if(body.result === 'success'){
      showToast(T({ zh:'✅ 已撤回取消申請', en:'✅ Request withdrawn',
                    ja:'✅ キャンセル申請を取り消しました', ko:'✅ 취소 신청을 철회했습니다' }));
      await doLookup(lastLookupPhone);
    } else {
      showToast(body.message || T({ zh:'⚠️ 撤回失敗，請稍後再試', en:'⚠️ Failed',
                                    ja:'⚠️ 取り消しに失敗しました。時間をおいてお試しください', ko:'⚠️ 철회에 실패했습니다. 잠시 후 다시 시도해 주세요' }));
      btn.disabled = false;
      btn.textContent = T(TXT.undoRequest);
    }
  });

  document.getElementById('lr-edit-btn').addEventListener('click', ()=>{
    if(!lastLookupData) return;
    enterEditMode(Object.assign({}, lastLookupData, { phone: lastLookupPhone }));
  });

  // ---- Admin Panel ----
  let adminPassword = '';
  let adminOperator = '';
  let adminData = [];
  let adminLogs = [];
  let adminFilter = 'all';
  let adminView = 'list';

  async function tryUnlockAdmin(){
    const input = document.getElementById('admin-pw');
    const errEl = document.getElementById('admin-gate-error');
    const btn = document.getElementById('admin-unlock-btn');
    const pw = input.value.trim();

    if(!pw){
      errEl.textContent = isEn() ? 'Please enter a password' : '請輸入密碼';
      errEl.style.display = 'block';
      return;
    }

    btn.disabled = true;
    btn.textContent = isEn() ? 'Signing in…' : '登入中…';
    errEl.style.display = 'none';

    const r = await postToBackend({ type:'adminLogin', password: pw });
    const body = r.body || {};

    btn.disabled = false;
    btn.textContent = isEn() ? 'Sign in' : '登入';

    if(!r.ok){
      errEl.textContent = isEn()
        ? 'Could not reach the server — please check your connection.'
        : '連線失敗，請確認網路後再試一次';
      errEl.style.display = 'block';
      return;
    }

    if(body.result !== 'success'){
      errEl.textContent = body.reason === 'not-configured'
        ? (body.message || '後台密碼尚未設定')
        : (isEn() ? 'Incorrect password — please try again' : '密碼錯誤，請再試一次');
      errEl.style.display = 'block';
      input.select();
      return;
    }

    adminPassword = pw;
    adminOperator = body.operator || '';
    input.value = '';

    document.getElementById('admin-gate').style.display = 'none';
    document.getElementById('admin-content').style.display = 'block';
    document.getElementById('admin-list').innerHTML =
      '<div class="adm-empty">' + (isEn() ? 'Loading…' : '載入中…') + '</div>';
    showToast((isEn() ? 'Welcome, ' : '歡迎，') + adminOperator);
    loadAdminList();
  }
  document.getElementById('admin-unlock-btn').addEventListener('click', tryUnlockAdmin);
  document.getElementById('admin-pw').addEventListener('keydown', (e)=>{
    if(e.key === 'Enter') tryUnlockAdmin();
  });

  async function loadAdminList(){
    const btn = document.getElementById('admin-refresh-btn');
    btn.disabled = true;
    const r = await postToBackend({ type:'adminList', password: adminPassword });
    const body = r.body || {};
    showWarnings(body);
    if(body.result === 'success'){
      applyAdminData(body.results || []);
    } else if(!r.ok){
      const reasonTxt = (r.reason === 'timeout')
        ? (isEn()
            ? 'The server took too long to respond (large data or a cold start right after redeploying). Press "Refresh Data" again — the second try is usually much faster.'
            : '伺服器回應逾時：可能是資料較多，或剛重新部署造成「冷啟動」。請再按一次「更新資料」，通常第二次就會快很多。這不是網址或權限問題（登入已經成功，代表連線正常）。')
        : (isEn()
            ? 'The request did not complete (network, or an in-app browser such as LINE/Instagram blocking it). Try opening the page in a normal browser.'
            : '請求沒有完成：可能是網路問題，或你正用 LINE／Instagram 內建瀏覽器（會擋掉部分連線）。請改用系統瀏覽器（Safari／Chrome）再試一次。');
      document.getElementById('admin-list').innerHTML =
        '<div class="adm-empty">' + escapeHtml(reasonTxt) + '</div>';
    } else {
      document.getElementById('admin-list').innerHTML =
        '<div class="adm-empty">' + escapeHtml(body.message || (isEn()
          ? 'Could not load data.'
          : '讀取失敗，後端回報了錯誤，請看上方黃色警告或試算表的「異動紀錄」。')) + '</div>';
    }
    btn.disabled = false;
  }

  async function loadAdminLog(){
    const btn = document.getElementById('admin-log-refresh-btn');
    btn.disabled = true;
    document.getElementById('admin-log-list').innerHTML =
      '<div class="adm-empty">' + (isEn() ? 'Loading…' : '載入中…') + '</div>';
    const r = await postToBackend({ type:'adminLog', password: adminPassword, limit: 300 });
    const body = r.body || {};
    adminLogs = (body.result === 'success') ? (body.logs || []) : [];
    renderAdminLog();
    btn.disabled = false;
  }

  document.getElementById('admin-refresh-btn').addEventListener('click', async ()=>{
    await loadAdminList();
    showToast(isEn() ? '✅ Updated' : '✅ 資料已更新');
  });
  document.getElementById('admin-log-refresh-btn').addEventListener('click', loadAdminLog);

  document.querySelectorAll('.adm-viewtab').forEach(b=>{
    b.addEventListener('click', ()=>{
      document.querySelectorAll('.adm-viewtab').forEach(x=> x.classList.remove('active'));
      b.classList.add('active');
      adminView = b.dataset.view;
      document.getElementById('admin-view-list').style.display = adminView === 'list' ? 'block' : 'none';
      document.getElementById('admin-view-log').style.display = adminView === 'log' ? 'block' : 'none';
      if(adminView === 'log' && adminLogs.length === 0) loadAdminLog();
    });
  });

  document.querySelectorAll('#admin-filters .filter-btn').forEach(b=>{
    b.addEventListener('click', ()=>{
      document.querySelectorAll('#admin-filters .filter-btn').forEach(x=> x.classList.remove('active'));
      b.classList.add('active');
      adminFilter = b.dataset.filter;
      renderAdminList();
    });
  });

  document.getElementById('admin-country-filter').addEventListener('change', renderAdminList);

  function showWarnings(body){
    const box = document.getElementById('warn-banner');
    const list = (body && body.warnings) || [];
    if(list.length === 0){ box.style.display = 'none'; box.innerHTML = ''; return; }
    box.innerHTML = '<b>⚠️ ' + (isEn()
        ? 'Spreadsheet column issues detected'
        : '試算表欄位有問題') + '</b><ul>'
      + list.map(function(t){ return '<li>' + escapeHtml(t) + '</li>'; }).join('')
      + '</ul>';
    box.style.display = 'block';
  }

  function applyAdminData(results){
    adminData = Array.isArray(results) ? results : [];
    populateAdminCountryFilter();
    renderAdminStats();
    renderAdminList();
    const t = new Date().toLocaleTimeString(isEn() ? 'en-US' : 'zh-TW',
      { hour:'2-digit', minute:'2-digit', second:'2-digit' });
    document.getElementById('admin-last-updated').textContent =
      (isEn() ? 'Last updated: ' : '最後更新：') + t;
  }

  function renderAdminStats(){
    const active = adminData.filter(g=> !g.allCancelled);
    const people = active.reduce((s,g)=> s + (Number(g.activeCount)||0), 0);
    const done = active.filter(g=> g.payStatus === PS.DONE);
    const outstanding = active.filter(g=> g.payStatus !== PS.DONE)
                              .reduce((s,g)=> s + (Number(g.due)||0), 0);
    const topup = active.filter(g=> g.payStatus === PS.TOPUP);
    const pending = adminData.reduce((s,g)=> s + (Number(g.cancelPendingCount)||0), 0);

    document.getElementById('stat-groups').textContent = active.length;
    document.getElementById('stat-people').textContent = people;
    document.getElementById('stat-paid').textContent = done.length;
    document.getElementById('stat-outstanding').textContent = 'NT$' + outstanding.toLocaleString();
    document.getElementById('stat-topup').textContent = topup.length;
    document.getElementById('stat-pending').textContent = pending;
  }

  function populateAdminCountryFilter(){
    const sel = document.getElementById('admin-country-filter');
    if(!sel) return;
    const prev = sel.value || 'all';
    const codes = new Set();
    adminData.forEach(function(g){
      if(g.country) codes.add(String(g.country).trim().toUpperCase());
      (g.members || []).forEach(function(m){
        if(m.country) codes.add(String(m.country).trim().toUpperCase());
      });
    });
    const sorted = Array.from(codes).filter(Boolean).sort();
    const allLabel = isEn() ? 'All countries' : '全部國籍';
    let html = '<option value="all">' + allLabel + '</option>';
    html += sorted.map(function(code){
      const n = COUNTRY_NAME[code];
      const label = flagOf(code) + ' ' + code + (n ? ' · ' + (isEn() ? n.en : n.zh) : '');
      return '<option value="' + escapeHtml(code) + '">' + escapeHtml(label) + '</option>';
    }).join('');
    sel.innerHTML = html;
    sel.value = (prev === 'all' || sorted.indexOf(prev) >= 0) ? prev : 'all';
  }

  function matchesCountry(g){
    const sel = document.getElementById('admin-country-filter');
    const country = sel ? sel.value : 'all';
    if(!country || country === 'all') return true;
    const c = country.toUpperCase();
    if(String(g.country||'').trim().toUpperCase() === c) return true;
    return (g.members||[]).some(function(m){
      return String(m.country||'').trim().toUpperCase() === c;
    });
  }

  function matchesFilter(g){
    switch(adminFilter){
      case 'all':       return !g.allCancelled;
      case 'cancelreq': return (Number(g.cancelPendingCount)||0) > 0;
      case 'cancelled': return !!g.allCancelled;
      case 'none':      return !g.allCancelled && g.payStatus === PS.NONE;
      case 'checking':  return !g.allCancelled && g.payStatus === PS.CHECKING;
      case 'topup':     return !g.allCancelled && g.payStatus === PS.TOPUP;
      case 'done':      return !g.allCancelled && g.payStatus === PS.DONE;
      default:          return true;
    }
  }

  const L = (zh, en)=> isEn() ? en : zh;

  function renderAdminList(){
    const box = document.getElementById('admin-list');
    const rows = adminData.filter(function(g){ return matchesFilter(g) && matchesCountry(g); });

    if(rows.length === 0){
      box.innerHTML = '<div class="adm-empty">' + L('沒有符合條件的資料','No matching records') + '</div>';
      return;
    }
    box.innerHTML = rows.map(cardHtml).join('');
  }

  function cardHtml(g){
    const meta = psMeta(g);
    const members = g.members || [];
    const extra = members.filter(m=> m.role !== '本人' && !m.cancelled).length;
    const req = Number(g.cancelPendingCount) || 0;

    const memHtml = members.map(m=>{
      let right = '';
      if(m.cancelPending){
        right = '<span class="st-badge st-topup">' + L('取消申請中','Cancel requested') + '</span>'
              + '<button class="mini-btn danger" data-act="approve" data-idx="' + m.index + '">' + L('核准取消','Approve') + '</button>'
              + '<button class="mini-btn" data-act="reject" data-idx="' + m.index + '">' + L('駁回','Reject') + '</button>';
      } else if(m.cancelled){
        right = '<span class="st-badge st-void">' + L('已取消','Cancelled') + '</span>'
              + '<button class="mini-btn" data-act="restore" data-idx="' + m.index + '">' + L('恢復出席','Restore') + '</button>';
      } else {
        right = '<button class="mini-btn danger" data-act="kick" data-idx="' + m.index + '">' + L('取消這位','Cancel') + '</button>';
      }
      return '<div class="mem-row' + (m.cancelled?' is-cancelled':'') + (m.cancelPending?' is-pending':'') + '">'
        + '<span class="mem-role">' + escapeHtml(m.role) + '</span>'
        + '<span class="mem-name">' + countryFlagOnly(m.country) + ' ' + escapeHtml(m.name) + '</span>'
        + (m.ig ? '<span class="mem-ig">' + escapeHtml(m.ig) + '</span>' : '')
        + '<span class="adm-spacer"></span>' + right
        + (m.cancelReason ? '<div style="width:100%; font-size:0.74rem; color:var(--orange);">' + escapeHtml(m.cancelReason) + '</div>' : '')
        + (m.staffNote ? '<div style="width:100%; font-size:0.74rem; color:var(--text-muted);">' + escapeHtml(m.staffNote) + '</div>' : '')
        + '</div>';
    }).join('');

    const payHtml = (g.payments || []).length
      ? g.payments.map(p=> '<div class="pay-line"><b>' + escapeHtml(p.date || '—') + '</b>'
          + '<span>NT$' + Number(p.amount||0).toLocaleString() + '</span>'
          + '<span>' + L('後五碼','Last 5') + ' ' + escapeHtml(p.last5 || '—') + '</span></div>').join('')
      : '<div class="adm-sub" style="padding:0;">' + L('尚無匯款回報','No transfer reported yet') + '</div>';

    const CUR_CLS = {
      [PS.NONE]:'cur-none', [PS.CHECKING]:'cur-checking',
      [PS.TOPUP]:'cur-topup', [PS.DONE]:'cur-done'
    };
    const statusBtns = [PS.NONE, PS.CHECKING, PS.TOPUP, PS.DONE].map(st=>{
      const on = (g.payStatus === st);
      const cls = 'mini-btn' + (on ? ' is-current ' + CUR_CLS[st] : '');
      return '<button class="' + cls + '" data-act="pay" data-status="' + st + '"' + (on ? ' disabled' : '') + '>'
        + (on ? '● ' : '') + (isEn() ? PS_META[st].en : st) + '</button>';
    }).join('');

    const f = (label, key, val)=>
      '<div><label>' + label + '</label><input data-edit="' + key + '" value="' + escapeHtml(val || '') + '"></div>';
    const memEdit = members.map(m=>
      '<div class="adm-edit-grid" data-member="' + m.index + '">'
      + f(L('姓名','Name'), 'name', m.name)
      + f(L('國籍','Country'), 'country', m.country)
      + f('IG', 'ig', m.ig)
      + '</div>').join('');

    const editHtml = '<div class="adm-editor">'
      + '<div class="adm-edit-grid">'
      + f(L('姓名','Name'), 'name', g.name)
      + f(L('國籍','Country'), 'country', g.country)
      + f('IG', 'ig', g.ig)
      + f(L('付款方式','Method'), 'paymethod', g.paymethod)
      + f(L('桌次','Table'), 'seatNo', g.seatNo)
      + '</div>'
      + '<div><label>' + L('備註','Notes') + '</label><input data-edit="notes" value="' + escapeHtml(g.notes || '') + '"></div>'
      + '<div class="adm-edit-grid">'
      + f(L('同桌姓名','With (name)'), 'tableWithName', g.tableWithName)
      + f(L('同桌IG','With (IG)'), 'tableWithIg', g.tableWithIg)
      + f(L('同桌國籍','With (country)'), 'tableWithCountry', g.tableWithCountry)
      + '</div>'
      + '<div><label>' + L('後台備註（退款決定等，只有工作人員看得到）','Staff note') + '</label>'
      + '<input data-edit="staffNote" value="' + escapeHtml(g.staffNote || '') + '"></div>'
      + '<h5 style="margin-top:12px;">' + L('成員資料','Members') + '</h5>' + memEdit
      + '<div class="adm-actions"><button class="mini-btn ok" data-act="save-edit">' + L('儲存修改','Save') + '</button>'
      + '<button class="mini-btn" data-act="close-edit">' + L('取消','Discard') + '</button></div>'
      + '</div>';

    return '<div class="adm-card' + (g.allCancelled?' is-void':'') + (req?' has-req':'') + '" data-id="' + escapeHtml(g.regId) + '">'
      + '<div class="adm-head">'
        + '<span class="adm-name">' + countryFlagOnly(g.country) + ' ' + escapeHtml(g.name) + '</span>'
        + (extra ? '<span class="adm-plus">+' + extra + '</span>' : '')
        + '<span class="adm-spacer"></span>'
        + (req ? '<span class="adm-req">⚠ ' + req + '</span>' : '')
        + '<span class="adm-head-amount">NT$' + Number(g.due||0).toLocaleString() + '</span>'
        + '<span class="st-badge ' + meta.cls + '">' + psText(g) + '</span>'
        + '<span class="adm-caret">▶</span>'
      + '</div>'
      + '<div class="adm-detail">'
        + '<div class="adm-sub" style="padding:0 0 12px;">'
          + '<span>' + L('應付','Due') + ' <b>NT$' + Number(g.due||0).toLocaleString() + '</b></span>'
          + '<span>' + L('已回報','Reported') + ' <b>NT$' + Number(g.reportedSum||0).toLocaleString() + '</b></span>'
          + '<span>' + escapeHtml(g.paymethod || '') + '</span>'
          + '<span>' + L('出席','Attending') + ' <b>' + g.activeCount + '</b> ' + L('人','') + '</span>'
          + (g.seatNo ? '<span>' + L('桌次','Table') + ' <b>' + escapeHtml(String(g.seatNo)) + '</b></span>' : '')
          + (g.editCount ? '<span>' + L('已修改','Edited') + ' ' + g.editCount + ' ' + L('次','times') + '</span>' : '')
        + '</div>'
        + '<div class="adm-sec"><h5>' + L('成員','Members') + '</h5>' + memHtml + '</div>'
        + '<div class="adm-sec"><h5>' + L('匯款回報','Transfer reports') + '</h5>' + payHtml + '</div>'
        + '<div class="adm-sec"><h5>' + L('其他資料','Details') + '</h5><dl class="kv">'
          + '<dt>IG</dt><dd>' + escapeHtml(g.ig || '—') + '</dd>'
          + '<dt>' + L('同桌需求','Table request') + '</dt><dd>' + escapeHtml(g.tableWith || '—') + '</dd>'
          + '<dt>' + L('備註','Notes') + '</dt><dd>' + escapeHtml(g.notes || '—') + '</dd>'
          + '<dt>' + L('最後修改','Last edited') + '</dt><dd>' + escapeHtml(g.lastEdited || '—') + '</dd>'
        + '</dl></div>'
        + '<div class="adm-sec"><h5>' + L('款項狀態','Payment status') + '</h5>'
          + '<div class="adm-actions">'
            + '<span class="adm-due-amount">NT$' + Number(g.due||0).toLocaleString() + '</span>'
            + statusBtns + '</div></div>'
        + '<div class="adm-actions"><button class="mini-btn" data-act="open-edit">✏️ ' + L('編輯資料','Edit') + '</button></div>'
        + editHtml
      + '</div></div>';
  }

  function renderAdminLog(){
    const box = document.getElementById('admin-log-list');
    if(adminLogs.length === 0){
      box.innerHTML = '<div class="adm-empty">' + L('目前沒有異動紀錄','No changes recorded yet') + '</div>';
      return;
    }
    box.innerHTML = adminLogs.map(x=>
      '<div class="log-item">'
      + '<div class="log-top">'
        + '<span class="log-act">' + escapeHtml(x.action || '') + '</span>'
        + '<span class="log-src">' + escapeHtml(x.source || '') + ' · ' + escapeHtml(x.operator || '') + '</span>'
        + '<span class="adm-spacer"></span>'
        + '<span class="log-time">' + escapeHtml(x.timestamp || '') + '</span>'
      + '</div>'
      + '<div class="log-sum"><b>' + escapeHtml(x.regId || '') + '</b> '
        + escapeHtml(x.name || '') + (x.target ? '（' + escapeHtml(x.target) + '）' : '') + '<br>'
        + escapeHtml(x.summary || '') + '</div>'
      + '</div>').join('');
  }

  document.getElementById('admin-list').addEventListener('click', async (e)=>{
    const card = e.target.closest('.adm-card');
    if(!card) return;
    const regId = card.dataset.id;

    if(e.target.closest('.adm-head')){
      card.classList.toggle('is-open');
      return;
    }

    const btn = e.target.closest('.mini-btn');
    if(!btn) return;
    const act = btn.dataset.act;

    if(act === 'open-edit'){ card.querySelector('.adm-editor').classList.add('is-open'); return; }
    if(act === 'close-edit'){ card.querySelector('.adm-editor').classList.remove('is-open'); return; }

    let payload = null;

    if(act === 'pay'){
      const status = btn.dataset.status;
      if(!confirm(L('確定把「' + regId + '」的款項狀態改成「' + status + '」？',
                    'Change payment status of ' + regId + ' to "' + status + '"?'))) return;
      payload = { type:'adminSetPayStatus', regId: regId, status: status };

    } else if(act === 'approve' || act === 'reject'){
      const approve = (act === 'approve');
      if(!confirm(approve
        ? L('核准這位的取消申請？\n他將不列入出席人數，應付金額會自動重算。', 'Approve this cancellation request?')
        : L('駁回這位的取消申請？\n申請標記會被清除，維持出席。', 'Reject this cancellation request?'))) return;
      const note = prompt(L('備註（選填，會留在後台備註欄）','Note (optional)'), '') || '';
      payload = { type:'adminResolveCancel', memberIndex: btn.dataset.idx, approve: approve, note: note };

    } else if(act === 'kick' || act === 'restore'){
      const restore = (act === 'restore');
      if(!confirm(restore
        ? L('確定恢復這位的出席？應付金額會自動重算。', 'Restore this person?')
        : L('確定直接取消這位？\n資料會保留，但不列入出席人數，應付金額會自動重算。', 'Cancel this person?'))) return;
      const note = prompt(L('備註（選填）','Note (optional)'), '') || '';
      payload = { type:'adminCancelPerson', memberIndex: btn.dataset.idx, restore: restore, note: note };

    } else if(act === 'save-edit'){
      const editor = card.querySelector('.adm-editor');
      const fields = {};
      editor.querySelectorAll(':scope > div > [data-edit], :scope > .adm-edit-grid > div > [data-edit]')
        .forEach(el=>{ fields[el.dataset.edit] = el.value.trim(); });
      const members = Array.from(editor.querySelectorAll('[data-member]')).map(row=>{
        const o = { index: row.dataset.member };
        row.querySelectorAll('[data-edit]').forEach(el=>{ o[el.dataset.edit] = el.value.trim(); });
        return o;
      });
      payload = { type:'adminEdit', regId: regId, fields: fields, members: members };
    }

    if(!payload) return;
    payload.password = adminPassword;

    card.querySelectorAll('.mini-btn').forEach(b=> b.disabled = true);
    const r = await postToBackend(payload);
    const body = r.body || {};
    showWarnings(body);

    if(body.result === 'success'){
      applyAdminData(body.results || []);
      showToast(isEn() ? '✅ Updated' : '✅ 已更新');
      if(adminView === 'log') loadAdminLog();
      else adminLogs = [];
    } else {
      showToast(body.message || (isEn() ? '⚠️ Update failed' : '⚠️ 更新失敗'));
      card.querySelectorAll('.mini-btn').forEach(b=> b.disabled = false);
    }
  });

  loadIgDirectory().catch(function(){});

  // ---- Countdown ----
  const EVENT_TIME = new Date('2026-10-30T19:00:00+08:00').getTime();
  function updateCountdown(){
    const cdDays = document.getElementById('cd-days');
    if(!cdDays) return;
    const diff = EVENT_TIME - Date.now();
    if(diff <= 0){
      document.getElementById('cd-days').textContent = '00';
      document.getElementById('cd-hours').textContent = '00';
      document.getElementById('cd-mins').textContent = '00';
      document.getElementById('cd-secs').textContent = '00';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cd-days').textContent = String(d).padStart(2,'0');
    document.getElementById('cd-hours').textContent = String(h).padStart(2,'0');
    document.getElementById('cd-mins').textContent = String(m).padStart(2,'0');
    document.getElementById('cd-secs').textContent = String(s).padStart(2,'0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);