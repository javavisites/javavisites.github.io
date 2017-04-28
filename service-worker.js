/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["docs/about-amp/index.html","a2e1dd08c5d32720bac0acfef122779c"],["docs/amp-a4a/index.html","dd96a17fa0d3b6d92d7e232406b8883b"],["docs/amp-access/index.html","9b4d3c3690b095096c935f9b0ee09356"],["docs/amp-accordion/index.html","ad42cdfe458140a397195f69b28764f4"],["docs/amp-ad-network-adsense-impl/index.html","6dcf456b480817713bf70dcb9b47ffa8"],["docs/amp-ad-network-doubleclick-impl/index.html","1ac5c3f59b2efa36e06fb4d516ef3928"],["docs/amp-ad-network-fake-impl/index.html","fd112a8df36d1534cd763deffefce99a"],["docs/amp-ad/index.html","8b74c145193c6b68b835324b6828eff0"],["docs/amp-analytics/index.html","d5ce7628a3d510693be47c64539d391e"],["docs/amp-anim/index.html","780b06131e71d54e1870a60332d71240"],["docs/amp-app-banner/index.html","daa96da50730f293f9a003bd5abd8c81"],["docs/amp-audio/index.html","ea8740cc644693ddef9b0e3cae2e6e37"],["docs/amp-brid-player/index.html","83300108720d056cd0e44d7a4b148ad9"],["docs/amp-brightcove/index.html","a663945e4c72a57548a688e1408f297c"],["docs/amp-carousel/index.html","dcc114026d96d3eca9cd84111faed01b"],["docs/amp-dailymotion/index.html","aa020642cd0adc4cd02d441b997e390e"],["docs/amp-dynamic-css-classes/index.html","2df8f86e8179a8cae0b896e6f3ff7e80"],["docs/amp-embed/index.html","4cb6bc4eea6158020c422b8021ae2015"],["docs/amp-experiment/index.html","3c6f54a980c496152d24f57ab16bf4ea"],["docs/amp-facebook/index.html","a468602fa44771b7199f587f8e8eb3af"],["docs/amp-fit-text/index.html","153d9f1d1d0cb54c7af9a87f9a51545a"],["docs/amp-font/index.html","7300cc76e63dd99c77d1dd0966f2cb58"],["docs/amp-form/index.html","d863cbea6eb2232941eee0fe25bd5281"],["docs/amp-fx-flying-carpet/index.html","c30ecbf0b721b01e1fd7cb86a554a32d"],["docs/amp-google-vrview-image/index.html","630cd0a58df62b42fd45314db734a288"],["docs/amp-iframe/index.html","b9809ed6cadfcbd372cda21bf818999d"],["docs/amp-image-lightbox/index.html","a784fc69975c0139b743330315622c88"],["docs/amp-img/index.html","be8bb6d3491e50595011f86a8167ca1f"],["docs/amp-instagram/index.html","d67fbf33651c1852ae9f5d5a6c0f9ea9"],["docs/amp-install-serviceworker/index.html","8c98b0e1819c0fff045ad6bb3723d8c0"],["docs/amp-jwplayer/index.html","a45a63a587afc58eb820078c3868acef"],["docs/amp-kaltura-player/index.html","99afc7d820c3b2c2ef4df1b76c0222c3"],["docs/amp-lightbox/index.html","d2aab73be584e95888f09cad7fb16138"],["docs/amp-list/index.html","b022c3a6bd00e0a440b20b768a43a5e2"],["docs/amp-live-list/index.html","b4d5616db86317f8c52746a748fb988f"],["docs/amp-mustache/index.html","413039c36443b0e293d39a82d6979523"],["docs/amp-o2-player/index.html","d193693aa3235b4e7e117512027dd774"],["docs/amp-pinterest/index.html","6a696bd67e4eec29ec9f58884a865455"],["docs/amp-pixel/index.html","9c72ca2e9075098557c3d1b49833bf11"],["docs/amp-reach-player/index.html","24d14e3057d12e5d19ae5bab66d8e594"],["docs/amp-share-tracking/index.html","34acf77420cb04a964022d065cb515ba"],["docs/amp-sidebar/index.html","d2c1673f2b6bf9698cdc0caf888178ed"],["docs/amp-slides/index.html","f3ae5bed7fad538442d0e2ed361b4303"],["docs/amp-social-share/index.html","06ce9a87638fa3a0c9bd63fbfe28a5bd"],["docs/amp-soundcloud/index.html","ae9d6d010be29a35c4b426185bb7cc6a"],["docs/amp-springboard-player/index.html","3661d58736c7d5ddba9db43cd7d4c249"],["docs/amp-sticky-ad/index.html","05464beb6ca8851fb29b468832e4a57a"],["docs/amp-twitter/index.html","266c91f045f42bb7b6637b056ebfafd0"],["docs/amp-user-notification/index.html","ff20065fbce3431f91cb5d5736e28dc1"],["docs/amp-video/index.html","a868428516130003468facd24a68423d"],["docs/amp-vimeo/index.html","fca90097cc1b99fc36052a79a248dbaa"],["docs/amp-vine/index.html","8b13ae2ed96290b207fc236cbae9a757"],["docs/amp-viz-vega/index.html","3356a5f7e278e0a5161017b3072e7465"],["docs/amp-youtube/index.html","e6b725830450be727f14b40fe2482951"],["docs/amp_replacements/index.html","a24b8a50556d4725aecfd98e73586247"],["docs/analytics_amp/index.html","6cb2d91595f8065a29f607244303ac73"],["docs/analytics_basics/index.html","7fc78d14aacdbf7188fc9224ccd4362f"],["docs/basic_markup/index.html","28b7d2a3acd6666c8566e49fa3d96581"],["docs/blog/index.html","4446f531823dfd27f9c5efba27387172"],["docs/contribute/index.html","f4df2695864d954e7e1aa40b2129561d"],["docs/control_layout/index.html","e3abc01dfb167bf34c439d066b9991b3"],["docs/create/index.html","628dd94a8e57463c4a015bcd4c4bbd1f"],["docs/deep_dive_analytics/index.html","0a34204cbad1943b5d44e470a23d8f5c"],["docs/discovery/index.html","03227e181c7d36b9c0d92063288a9f51"],["docs/experimental/index.html","9bd2117eebaae327e6810a3221ebea9f"],["docs/extended/index.html","a34251bb964827e3b4dc0adff8e87fd2"],["docs/faqs/index.html","42c34d14c88b922d8185efdb3d50faa3"],["docs/get_started/about-amp.html","61dc5abffc3335adf4b98e04d2abd0d7"],["docs/get_started/basic_markup.html","165ce0f665d2acafba94b1c1cee2398d"],["docs/get_started/create.html","cfb0d2cfc3be218ac8d41214f542ce83"],["docs/get_started/create/basic_markup.html","337a2b1a4cc339ba3a6d91d962d9af4e"],["docs/get_started/create/include_image.html","0df6d50cc6409be8df6c430cfedb7cf2"],["docs/get_started/create/prepare_for_discovery.html","d00482af2375b1acad63bf8b22805e4e"],["docs/get_started/create/presentation_layout.html","7d72f76ddb79a683fe98adb4454e88cc"],["docs/get_started/create/preview_and_validate.html","7eb794b16dcf88ac85d3af2336aa5b5c"],["docs/get_started/create/publish.html","ecb22772d1c94ba1dbabeb6b6891dac6"],["docs/get_started/include_image.html","ee8d656158294a0e7e2d3af41b18b126"],["docs/get_started/prepare_for_discovery.html","609e0419bd0c8d2a5abfe4e1f6270e85"],["docs/get_started/presentation_layout.html","7c740948451512767597fe8bdef20f2f"],["docs/get_started/preview_and_validate.html","6d562619a89a12d0b72578556ed1f7dc"],["docs/get_started/publish.html","114f93156b53de5e59a3e1719af46fc6"],["docs/get_started/technical_overview.html","aa270d5a821d7001128d0feadaa6d950"],["docs/guides/amp_replacements.html","f91e20e7b890e03103ee7111a6ff4a54"],["docs/guides/analytics/analytics_basics.html","b2ea564d7a48ee3dc688bf012fbd18db"],["docs/guides/analytics/deep_dive_analytics.html","819f331586acc97a1e3605a1adcf1e4b"],["docs/guides/analytics/use_cases.html","a61677286e6610ac609f8b9a3f20ad38"],["docs/guides/analytics_amp.html","af35e6701615d08079dac2ce903e9509"],["docs/guides/analytics_basics.html","9ebb1f61396974c1a6ff58588ccc3eae"],["docs/guides/control_layout.html","2cf809a981d7f58519f383ff3db62f7a"],["docs/guides/deep_dive_analytics.html","f8fcefdc00e1b51d5e08a64ef79199c9"],["docs/guides/discovery.html","1ceba8789d1a040dd7f6773e2992e7b6"],["docs/guides/responsive/control_layout.html","900e5cddbca83a068cb5236a45788e9a"],["docs/guides/responsive/style_pages.html","9ed283b54f4ae4974d46c49ef636eca6"],["docs/guides/responsive_amp.html","b7b931d1a79c424ffc14f96f4ff0f052"],["docs/guides/style_pages.html","b297918af6a484aba7b0041b6671d327"],["docs/guides/third_party_components.html","d0a3332a6932d4af5adbfef4ae3212c6"],["docs/guides/use_cases.html","a269fe4202e8e45fde2091c7b8572676"],["docs/guides/validate.html","a35f0d05863ef919d737f67df3713057"],["docs/include_image/index.html","90abf7e7e08a95fbc958231cf12eb06e"],["docs/prepare_for_discovery/index.html","96fd85ce81109d6bced6f0a8c7d166f2"],["docs/presentation_layout/index.html","21680f8e20755788a22992c92b0a3b69"],["docs/preview_and_validate/index.html","7fe90ed0f3e16fc41bb66bdf8d214133"],["docs/publish/index.html","21d6cb73058324c90771c703eadf3d52"],["docs/reference/amp-a4a.html","7db020e6555b834f63bd1a22becfa51a"],["docs/reference/amp-access.html","58dbe635e4b90a694ac170628c932929"],["docs/reference/amp-accordion.html","7f8b9773635db6e871a41147a7674fe0"],["docs/reference/amp-ad-network-adsense-impl.html","7f6b29088fe9be9e81e92df7755089fc"],["docs/reference/amp-ad-network-doubleclick-impl.html","6fb6c063b4c1fc74677568e582dbf3f4"],["docs/reference/amp-ad-network-fake-impl.html","e899336f1557133cdf572a3ad2e7c16c"],["docs/reference/amp-ad.html","31bf026fbb1fa9897ff41a76413a3986"],["docs/reference/amp-analytics.html","66baf06b3b1d96d324b465671dc5d463"],["docs/reference/amp-anim.html","b50fafd26701b5fa58ba5c8a529347a9"],["docs/reference/amp-app-banner.html","c84d9ed6d155115bdc2be2205c7eae5c"],["docs/reference/amp-audio.html","74af852ec22ab0d3b174354e09446b7e"],["docs/reference/amp-brid-player.html","36b89698cfc141ac17fd997e96d82845"],["docs/reference/amp-brightcove.html","6de5e4c09d8cfd11f591c16148742f5f"],["docs/reference/amp-carousel.html","16bb95da6c7461f732e886892cfd4047"],["docs/reference/amp-dailymotion.html","16545a2fe64e3adf6336b2bce21ca318"],["docs/reference/amp-dynamic-css-classes.html","922c98e72011f4f312e01938ae2ca802"],["docs/reference/amp-embed.html","6583a7026b0ea030a51b1b73d3aa0f8f"],["docs/reference/amp-experiment.html","8d7e3e72226f6676c4382c3efcc52983"],["docs/reference/amp-facebook.html","35023294c1cc35876e6342018576bc31"],["docs/reference/amp-fit-text.html","94e954ea67add006a61d59ef07289777"],["docs/reference/amp-font.html","801fadccc1761c78702187d9656a398c"],["docs/reference/amp-form.html","ba4a15b8c6309d886765e94df7244d4d"],["docs/reference/amp-fx-flying-carpet.html","3779b2835ad9e7995ebd19a2a69d27e8"],["docs/reference/amp-google-vrview-image.html","6151db98c2b08ee4eff9cf87e1da65e6"],["docs/reference/amp-iframe.html","06498d16bcf39887386608f287daa31b"],["docs/reference/amp-image-lightbox.html","20b378b4bfe42093e0477e1fd01080d1"],["docs/reference/amp-img.html","d250f468a62fca5da8add3229d4df326"],["docs/reference/amp-instagram.html","74191254e2f3d205ab4ca81c2c88fd58"],["docs/reference/amp-install-serviceworker.html","36aa53c348059ef27cee887ee5e3fae6"],["docs/reference/amp-jwplayer.html","25546513509d8914162ef774542b605d"],["docs/reference/amp-kaltura-player.html","17b4ff47b809431e7183c4909b98ed1f"],["docs/reference/amp-lightbox.html","bbae2138052c5a0d16f80c852aff1fc8"],["docs/reference/amp-list.html","6b38364bc36d1f2c6408cea2745a5e1a"],["docs/reference/amp-live-list.html","844f8f6ef33cf39d4553f15dd3de7d4d"],["docs/reference/amp-mustache.html","36c4c270bcdcc2642fea7f35dc3dc47c"],["docs/reference/amp-o2-player.html","31f1c465fa3dd0a709988d7e6a60e66c"],["docs/reference/amp-pinterest.html","3a215897d181d4d4ee7897b7eae7be32"],["docs/reference/amp-pixel.html","1bb374e9140e61479757411ce9e54ae6"],["docs/reference/amp-reach-player.html","7ad505ca2e667434d1790cbd44ec1624"],["docs/reference/amp-share-tracking.html","f9e0f075fbf5bb29107d89f161106bc8"],["docs/reference/amp-sidebar.html","fe975ca41330b2212a0bde5b4a9437bc"],["docs/reference/amp-slides.html","17ef8260d1b07fdeecf80b72b331a8c7"],["docs/reference/amp-social-share.html","12335aee2ef707408fe10f63de42e71e"],["docs/reference/amp-soundcloud.html","c6cd70581d2a73330ca47cc70c24fd3c"],["docs/reference/amp-springboard-player.html","cc15b3798262085bafc036f22b4823a4"],["docs/reference/amp-sticky-ad.html","4dcffb2c13b5413bc26f8f856f7561b3"],["docs/reference/amp-twitter.html","cce030ca789fd1ce4e3024c88ed6bc46"],["docs/reference/amp-user-notification.html","f47a2e8249bcecf6c26bcc8d3ca93f53"],["docs/reference/amp-video.html","bd13a3226b331f19de565d4d086ab7a1"],["docs/reference/amp-vimeo.html","b7058985ef138f84ceede5fbd2cceb4a"],["docs/reference/amp-vine.html","d13c22536e7f2bbba340ec08330c0395"],["docs/reference/amp-viz-vega.html","99868b50f97033241904d3851a14a714"],["docs/reference/amp-youtube.html","1f614ca406a6aa91c5ee1f299d25ee4a"],["docs/reference/experimental.html","80dc05962950956abe90c8233dc83f94"],["docs/reference/extended.html","7f735517cc33ba22cf1401afa801ac88"],["docs/reference/extended/amp-a4a.html","d54887477f9a6bd8fb84427dcb95b37d"],["docs/reference/extended/amp-access.html","cbf5b1da13c7f2603002e248ddee14a5"],["docs/reference/extended/amp-accordion.html","f62125361be4e52635111e9fac5fb0d8"],["docs/reference/extended/amp-ad-network-adsense-impl.html","a42396cf9dd58e3cba835f228aefb62b"],["docs/reference/extended/amp-ad-network-doubleclick-impl.html","903bd748f588205aa86c31e0406b55a7"],["docs/reference/extended/amp-ad-network-fake-impl.html","459a9cdb6e2ecbf41495398bf112ef7e"],["docs/reference/extended/amp-ad.html","c4a750332e424595444415d7cb0ba16f"],["docs/reference/extended/amp-analytics.html","ab5f87f6bf4e04ab41e8ccfa3e23bbaf"],["docs/reference/extended/amp-anim.html","c42bc78992d77f8b9c5222c627eef3c3"],["docs/reference/extended/amp-app-banner.html","bd7c2328477822c691f37421a2897d0c"],["docs/reference/extended/amp-audio.html","5859c834816af0f3bf2a0c5832b7b24d"],["docs/reference/extended/amp-brid-player.html","f317b6e3063c73cb6fd60b1b8c4513e8"],["docs/reference/extended/amp-brightcove.html","6c97e0467704edbe9fd33e8a7e89d13a"],["docs/reference/extended/amp-carousel.html","e3b208f7e8f1d6c1a37ee4f6138f68cd"],["docs/reference/extended/amp-dailymotion.html","edc27f1a2cb701aad7b50620d3751b08"],["docs/reference/extended/amp-dynamic-css-classes.html","18e397bf54a2b97306ce4245b1e689ef"],["docs/reference/extended/amp-experiment.html","3b2843c68ca4df34f5a40c0c26e2c175"],["docs/reference/extended/amp-facebook.html","0acf6bc9aeb620b6cd7fce6f2f2e3920"],["docs/reference/extended/amp-fit-text.html","e1ed307128e592345e08a066d8922d65"],["docs/reference/extended/amp-font.html","26ac3c1209809ccf2f291f732dba9d6b"],["docs/reference/extended/amp-form.html","27172b5b1f3cee589d1994cf8d6e7c0f"],["docs/reference/extended/amp-fx-flying-carpet.html","1d0ce9823180b23220ed9d6bc1b6b28e"],["docs/reference/extended/amp-google-vrview-image.html","5bf2521fe6b98bade914c4f2639cb74c"],["docs/reference/extended/amp-iframe.html","f282e6eb3c053795916d3c456868d37b"],["docs/reference/extended/amp-image-lightbox.html","1588c899458db7822583354f8414ea2b"],["docs/reference/extended/amp-instagram.html","ec5146cfa9f699b599a19482be6c1022"],["docs/reference/extended/amp-install-serviceworker.html","2c21a4ac56462347fc156b298be41a01"],["docs/reference/extended/amp-jwplayer.html","babbbf7f6ae04e71e72b6376a04aff20"],["docs/reference/extended/amp-kaltura-player.html","1a593ec61a52d744a3cb621796542eac"],["docs/reference/extended/amp-lightbox.html","eda17a26560639f6747994f0b51068fd"],["docs/reference/extended/amp-list.html","0c64d87867a1a9d689a898feba97e177"],["docs/reference/extended/amp-live-list.html","78a81b6081f877893f7991ec4520f90f"],["docs/reference/extended/amp-mustache.html","86c5231e83ef908f36fb38fcfa0947c6"],["docs/reference/extended/amp-o2-player.html","3c465ce28a577421df935ea08917d1f5"],["docs/reference/extended/amp-pinterest.html","97887bb235a2684984105f81ef7d42e0"],["docs/reference/extended/amp-reach-player.html","35c269222a201c518d848124687f4638"],["docs/reference/extended/amp-share-tracking.html","ffa85065343408804a93962db37b0ee4"],["docs/reference/extended/amp-sidebar.html","6422b9c0c3e991ff43000e175f8a1547"],["docs/reference/extended/amp-slides.html","5e90ab695436629fb6757fc05e4d6bf9"],["docs/reference/extended/amp-social-share.html","a6e87faa92ec92298b23335c2a331596"],["docs/reference/extended/amp-soundcloud.html","2a37a339d506c84dda4ecb603c1a901e"],["docs/reference/extended/amp-springboard-player.html","267dfcbc6fd464aeb2c4974f2ff2a75c"],["docs/reference/extended/amp-sticky-ad.html","5aa42ac2f1b9126f264d97a18ef784b0"],["docs/reference/extended/amp-twitter.html","b1f629ef30a99f3011e14bba3e4f1531"],["docs/reference/extended/amp-user-notification.html","6aaac90c7329711d0189eb13fd56e7a8"],["docs/reference/extended/amp-vimeo.html","db46641cf302fc65e1c3e5cb7418406c"],["docs/reference/extended/amp-vine.html","fe44bc8f41882c1d938062dae2c63fab"],["docs/reference/extended/amp-viz-vega.html","ca4c03606214354b102963013aa3711e"],["docs/reference/extended/amp-youtube.html","5b6d781b6c3f5186ffcbf7edace034c5"],["docs/reference/spec.html","0688ad31d695464c19998a277d348514"],["docs/reference/validation_errors.html","bb8a4e33082e1c11b7637234477d000e"],["docs/responsive_amp/index.html","725079eca8074a341fad48552c3d6c3d"],["docs/spec/index.html","8c83d1ebf094927643efb7575d8f22c8"],["docs/stack_overflow/index.html","006cad009b338fef7a00a19ddf8e9395"],["docs/style_pages/index.html","5a57204a67c4e11268492937fee97c50"],["docs/support/blog.html","b3412bcdf2b1b194d677ed9639b7b451"],["docs/support/contribute.html","22a525126f07609151e53618a6343958"],["docs/support/faqs.html","4fe51624c41abe89af459c2adc7cc02c"],["docs/support/stack_overflow.html","3740bc8e94bce1f6c218cc299e11a66e"],["docs/technical_overview/index.html","ee68a21dfd371352fe756525f85862c7"],["docs/third_party_components/index.html","b19955f80aca72e134960ef693fb25bb"],["docs/use_cases/index.html","26132924fc297b8b9b714c26252b5386"],["docs/validate/index.html","9bf5ea4024cc8f06cc7a5d5cde824ba9"],["docs/validation_errors/index.html","50b152ef2970a26b5f0943760e1e9ad9"],["how-it-works/index.html","dc1182bdf87d4609df218a6a3c1654e5"],["index.html","76b72324ce637d1566bb88024ae1bf73"],["metrics/index.html","ec2367129b6bdb102bdd3122795c7e57"],["metrics_chart.html","3497adbf84550c953618c65f9e3f4508"],["roadmap/index.html","5aeec55b0288cc0e60f951626b6f6757"],["static/img/amp.jpg","37ed9baa23ea465d825fb5f84ed76d5b"],["static/img/amp_favicon.png","880593cdcfa3af4eefee7643a3fcc70f"],["static/img/background-mobile.jpg","fc5fa39c8a034fee0ecd90a59ff8c795"],["static/img/background.jpg","a9540a85f5a325c214e7acc7886ffffb"],["static/img/blog-icon.svg","52069b075f99fa3e8fb0c0dd6dd5818f"],["static/img/case-studies/wapo_framed.gif","ec7d13d83ca23169ebee9ccf5c47926d"],["static/img/cheveron-down.svg","db8205481910116f1bd30a958c623b56"],["static/img/close.svg","e2c01bb46e2dfc13ba65497cf7b76dca"],["static/img/code.jpg","a9ecb7a24dc1233e9e5ab2ab802e3a71"],["static/img/docs/responsive_amp_img.png","0584ab6464f8df5e9d3f8042dd1caa28"],["static/img/docs/too_much_css.png","38a4fde743910abb033a1014f2eba255"],["static/img/docs/validator_console_imgerror.png","db942ed88c55069e6877d2fd95d1c8fc"],["static/img/docs/validator_errors.png","21bdff5e54163c545200bede2695a67d"],["static/img/docs/validator_extension_imgerror.png","8466ab31d0b6d24d515b2bcd611e0082"],["static/img/docs/validator_icon_invalid.png","c0a307171fcd38e35ffbdff10a778b2b"],["static/img/docs/validator_icon_link.png","f499ab0c82727182b1d2f0e613aa20d3"],["static/img/docs/validator_icon_valid.png","9142d398ab7c0b740b43ea187fcc695d"],["static/img/docs/validator_mandatory_error.png","cabe1290b82115a5ab5d94410b55c973"],["static/img/docs/validator_web_ui.png","fc0e4d0428a9795e843231c0a02539ff"],["static/img/docs/validator_webui_imgerror.png","1ff186ba6403436659574ef4e2c3380d"],["static/img/github.png","0f101d83a8e372272757124af24b6281"],["static/img/hamburger.svg","c6fff1d1a0b0280e1fa3067c566a2209"],["static/img/icons/120.png","03ca8d5de678159643a3872f95d66e43"],["static/img/icons/144.png","669a8f75558b538387de54a05b5a06b7"],["static/img/icons/152.png","65990ccf97578da221e484d323e47024"],["static/img/icons/167.png","069ac1a18bce95e9df5d3727f0eb2145"],["static/img/icons/168.png","c6feaa3373c40c3ba97b4e2afe9e7768"],["static/img/icons/180.png","87431b45fe7b58def0cc402ecd20fdea"],["static/img/icons/192.png","859c25d6a30ca38b45366ff5e796718a"],["static/img/icons/48.png","ae4aef7e677d0377c2c5bc735f4e7e3c"],["static/img/icons/512.png","a5651ae31e006c3001de68a209b0dc6b"],["static/img/icons/72.png","cddcab8f6900188146a344dbd43024d5"],["static/img/icons/96.png","0b594281b953a01802dfe5fccf17d2fe"],["static/img/icons/any.svg","52e73bb66982fa56dde27dbe61b26e29"],["static/img/lang-icon-inverted.svg","89a46fa752cc99222465533c2addaba7"],["static/img/lang-icon.svg","3c4bf4ca2bce63cb14cfbe77632fe076"],["static/img/logo-blue.svg","409d841519c8373df14c1bdeaf8ca61d"],["static/img/logo.svg","8f36b758933bce2b742779f406e2db16"],["static/img/malte.jpg","7b23d38c5a0795ca25909780a0ccdb0b"],["static/img/man.jpg","2eb7b9fad8623b55d3bcd2a7050032ba"],["static/img/partners/adobe_analytics.png","2bf8b6e4cbcc3ae375ec4c3a26fae40f"],["static/img/partners/chartbeat.png","8e347d76bc8c25684b34e4272d2530e3"],["static/img/partners/comscore.png","fcaeccd587643178f51b2bc0b646b314"],["static/img/partners/ggl.png","06aaa9508863720db98386567973b9b0"],["static/img/partners/ggl_bw.png","99335aa147b4018c9b881070190dd48b"],["static/img/partners/li.png","5f171bbe67af448abafe018d97926499"],["static/img/partners/nuzzel.png","b22e916e0fbefee826db3072ab6491d5"],["static/img/partners/parsely.png","ce37d77f995a44aea65b1fa786b9ee6a"],["static/img/partners/pinterest.png","e42ebc740f7f279ada8ccfe4e8a2b1e7"],["static/img/partners/tw.png","f22fcae35e9aaf4d8acde667f2d74464"],["static/img/partners/wp.png","20cf4d5149d9de5fbe7a1c7daa5bc1eb"],["static/img/publishers/abril.png","7f617aa242120c2d97e943b90368c8cc"],["static/img/publishers/asahi.png","8913e06d65cf1ad6eb67aadcf6f62c8e"],["static/img/publishers/atlantic_media.png","edba0d37c459e908aef05fa794337caa"],["static/img/publishers/bbc_news.png","e1b52bf8b03b219ccaa47ccb7f600b92"],["static/img/publishers/buzzfeed.png","27fc06ecc1c24ef7cf316ab6e851fa2e"],["static/img/publishers/condenast.png","2fb12410f75647861566c9c73e0ab912"],["static/img/publishers/daily_mail.png","411d40c3edbe58958d3aeb1ba9851e0c"],["static/img/publishers/economist.png","d346b1e4d1826e57fcb9f87437838815"],["static/img/publishers/editora_globo.png","3e77e1c78d7f79130d92a7b7531e04d0"],["static/img/publishers/el_pais.png","4af44581b5e85fc375e1ec000c59d78f"],["static/img/publishers/fairfax_media.png","40d0b9c767b7ba00e81ed934d382c7c3"],["static/img/publishers/folha_de_s.paulo.png","e8b38af2b6ebcf31e0aa2a66ed428066"],["static/img/publishers/franzfurter_allgemeine.png","3e477f76ef9d44c777bf1fe072f544c4"],["static/img/publishers/ft.png","809de3251fa754d914cc013735f77fe7"],["static/img/publishers/gannett.png","cd9416cb8551a135d23eebdeaab47fbb"],["static/img/publishers/guardian.png","bd1ca684fc383ed1a4d90ad9a4f99614"],["static/img/publishers/hearst.png","7cc7480827a836d9d3e2b786cd6b363e"],["static/img/publishers/huffington_post.png","2d65a336989c1c4398cfcabcb016d9b1"],["static/img/publishers/la_stampa.png","ac0ea9a164b7982cb4881dbc1c198709"],["static/img/publishers/les_echos.png","c0b26ada4731334c791953458b5519d3"],["static/img/publishers/mainichi.png","4245d9db47a7c817e32793f063612f3b"],["static/img/publishers/mashable.png","25036544dd65a79dd654b432751a45e8"],["static/img/publishers/mcclatchy.png","c30ced9947098a4de5762e21c0fbbfe9"],["static/img/publishers/new_york_times.png","faf8e7767dcd76f0d11deee7bd4033fd"],["static/img/publishers/newscorp_australia.png","39d2e5faa0b7a256dd9f6ed9c337768d"],["static/img/publishers/nine_msn.png","f4a18da26f66ab00ab1c12f47da1cb82"],["static/img/publishers/nrc.png","b64dad582a51201014544477852490d1"],["static/img/publishers/ny_daily_news.png","f47e63d2c98ef61c91d1fb34e9d3d929"],["static/img/publishers/nypost.png","9e4612d9e705d8c5cc71a20a51184003"],["static/img/publishers/pearson.png","dbdc5a668cc333666e8a7a0efb1df8e7"],["static/img/publishers/sankei.png","c50933d21a41f237d84d7fc6b63a3f70"],["static/img/publishers/telegraph.png","5b11a62f89446624718bdd52074a4b9e"],["static/img/publishers/time.png","40d77a303897bea0597bd91f6591b084"],["static/img/publishers/uol.png","cbe9709c187bdcf80ed8125a909f6f8d"],["static/img/publishers/us_news.png","8aea1db4369fc770cd50715eefd90ddb"],["static/img/publishers/vox_media.png","c70fb4525f799235f68ef3a968dfd389"],["static/img/publishers/wallstreetjournal.png","16b4adba98ff8485231da728261f7c93"],["static/img/publishers/washington_post.png","430f7ba947867617b1ce5cae1115a32b"],["static/img/publishers/zeit_online.png","35bbb22e3b1849238a626fc6f96aee6c"],["static/img/quotes/chartbeat.jpg","890cba4ddb44454ca75b576aa8952999"],["static/img/quotes/ebay.jpg","3b18de59741e1c37e4ceb0d04ce191a2"],["static/img/quotes/faz.jpg","1c186b647311e070f1e77cd9abb8a72d"],["static/img/quotes/folha.jpg","82a7f6fd13893a3762338d8adda757ec"],["static/img/quotes/google.jpg","19c23d9d45ccb40193c22dfe6bcbc500"],["static/img/quotes/guardian.jpg","bb3b2f4f6e97f17279a405455ba38349"],["static/img/quotes/hearst.jpg","3882053b669b98bd496685e8442402fa"],["static/img/quotes/lastampa.jpg","2963d4a506a02519fbff0f25220edca0"],["static/img/quotes/twitter.jpg","12e11dff5555f136dad59e8160b15386"],["static/img/quotes/vox.jpg","0161bcf57ec0880a5f41bf3c09d6f158"],["static/img/twitter.png","c073b0d05f4dee6dceb910848444a81a"],["static/img/video-play.svg","2e50e656febc6177b1eaec3cc60c8c4f"],["static/manifest.json","551b315d25f8fdfe7ed42d3cd7546fa5"],["who/index.html","bad0a0a2475bf7dd5539c4ea2d2f2c33"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      return self.clients.claim();
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url));
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/*
  Copyright 2014 Google Inc. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.toolbox = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function debug(e,n){n=n||{};var t=n.debug||globalOptions.debug;t&&console.log("[sw-toolbox] "+e)}function openCache(e){var n;return e&&e.cache&&(n=e.cache.name),n=n||globalOptions.cache.name,caches.open(n)}function fetchAndCache(e,n){n=n||{};var t=n.successResponses||globalOptions.successResponses;return fetch(e.clone()).then(function(c){return"GET"===e.method&&t.test(c.status)&&openCache(n).then(function(t){t.put(e,c).then(function(){var c=n.cache||globalOptions.cache;(c.maxEntries||c.maxAgeSeconds)&&c.name&&queueCacheExpiration(e,t,c)})}),c.clone()})}function queueCacheExpiration(e,n,t){var c=cleanupCache.bind(null,e,n,t);cleanupQueue=cleanupQueue?cleanupQueue.then(c):c()}function cleanupCache(e,n,t){var c=e.url,a=t.maxAgeSeconds,u=t.maxEntries,o=t.name,r=Date.now();return debug("Updating LRU order for "+c+". Max entries is "+u+", max age is "+a),idbCacheExpiration.getDb(o).then(function(e){return idbCacheExpiration.setTimestampForUrl(e,c,r)}).then(function(e){return idbCacheExpiration.expireEntries(e,u,a,r)}).then(function(e){debug("Successfully updated IDB.");var t=e.map(function(e){return n["delete"](e)});return Promise.all(t).then(function(){debug("Done with cache cleanup.")})})["catch"](function(e){debug(e)})}function renameCache(e,n,t){return debug("Renaming cache: ["+e+"] to ["+n+"]",t),caches["delete"](n).then(function(){return Promise.all([caches.open(e),caches.open(n)]).then(function(n){var t=n[0],c=n[1];return t.keys().then(function(e){return Promise.all(e.map(function(e){return t.match(e).then(function(n){return c.put(e,n)})}))}).then(function(){return caches["delete"](e)})})})}var globalOptions=require("./options"),idbCacheExpiration=require("./idb-cache-expiration"),cleanupQueue;module.exports={debug:debug,fetchAndCache:fetchAndCache,openCache:openCache,renameCache:renameCache};
},{"./idb-cache-expiration":2,"./options":3}],2:[function(require,module,exports){
"use strict";function openDb(e){return new Promise(function(r,n){var t=indexedDB.open(DB_PREFIX+e,DB_VERSION);t.onupgradeneeded=function(){var e=t.result.createObjectStore(STORE_NAME,{keyPath:URL_PROPERTY});e.createIndex(TIMESTAMP_PROPERTY,TIMESTAMP_PROPERTY,{unique:!1})},t.onsuccess=function(){r(t.result)},t.onerror=function(){n(t.error)}})}function getDb(e){return e in cacheNameToDbPromise||(cacheNameToDbPromise[e]=openDb(e)),cacheNameToDbPromise[e]}function setTimestampForUrl(e,r,n){return new Promise(function(t,o){var i=e.transaction(STORE_NAME,"readwrite"),u=i.objectStore(STORE_NAME);u.put({url:r,timestamp:n}),i.oncomplete=function(){t(e)},i.onabort=function(){o(i.error)}})}function expireOldEntries(e,r,n){return r?new Promise(function(t,o){var i=1e3*r,u=[],c=e.transaction(STORE_NAME,"readwrite"),s=c.objectStore(STORE_NAME),a=s.index(TIMESTAMP_PROPERTY);a.openCursor().onsuccess=function(e){var r=e.target.result;if(r&&n-i>r.value[TIMESTAMP_PROPERTY]){var t=r.value[URL_PROPERTY];u.push(t),s["delete"](t),r["continue"]()}},c.oncomplete=function(){t(u)},c.onabort=o}):Promise.resolve([])}function expireExtraEntries(e,r){return r?new Promise(function(n,t){var o=[],i=e.transaction(STORE_NAME,"readwrite"),u=i.objectStore(STORE_NAME),c=u.index(TIMESTAMP_PROPERTY),s=c.count();c.count().onsuccess=function(){var e=s.result;e>r&&(c.openCursor().onsuccess=function(n){var t=n.target.result;if(t){var i=t.value[URL_PROPERTY];o.push(i),u["delete"](i),e-o.length>r&&t["continue"]()}})},i.oncomplete=function(){n(o)},i.onabort=t}):Promise.resolve([])}function expireEntries(e,r,n,t){return expireOldEntries(e,n,t).then(function(n){return expireExtraEntries(e,r).then(function(e){return n.concat(e)})})}var DB_PREFIX="sw-toolbox-",DB_VERSION=1,STORE_NAME="store",URL_PROPERTY="url",TIMESTAMP_PROPERTY="timestamp",cacheNameToDbPromise={};module.exports={getDb:getDb,setTimestampForUrl:setTimestampForUrl,expireEntries:expireEntries};
},{}],3:[function(require,module,exports){
"use strict";var scope;scope=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,module.exports={cache:{name:"$$$toolbox-cache$$$"+scope+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/};
},{}],4:[function(require,module,exports){
"use strict";var url=new URL("./",self.location),basePath=url.pathname,pathRegexp=require("path-to-regexp"),Route=function(e,t,i,s){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=basePath+t),this.keys=[],this.regexp=pathRegexp(t,this.keys)),this.method=e,this.options=s,this.handler=i};Route.prototype.makeHandler=function(e){var t;if(this.regexp){var i=this.regexp.exec(e);t={},this.keys.forEach(function(e,s){t[e.name]=i[s+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},module.exports=Route;
},{"path-to-regexp":14}],5:[function(require,module,exports){
"use strict";function regexEscape(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Route=require("./route"),keyMatch=function(e,t){for(var r=e.entries(),o=r.next(),n=[];!o.done;){var u=new RegExp(o.value[0]);u.test(t)&&n.push(o.value[1]),o=r.next()}return n},Router=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this["default"]=null};["get","post","put","delete","head","any"].forEach(function(e){Router.prototype[e]=function(t,r,o){return this.add(e,t,r,o)}}),Router.prototype.add=function(e,t,r,o){o=o||{};var n;t instanceof RegExp?n=RegExp:(n=o.origin||self.location.origin,n=n instanceof RegExp?n.source:regexEscape(n)),e=e.toLowerCase();var u=new Route(e,t,r,o);this.routes.has(n)||this.routes.set(n,new Map);var a=this.routes.get(n);a.has(e)||a.set(e,new Map);var s=a.get(e),i=u.regexp||u.fullUrlRegExp;s.set(i.source,u)},Router.prototype.matchMethod=function(e,t){var r=new URL(t),o=r.origin,n=r.pathname;return this._match(e,keyMatch(this.routes,o),n)||this._match(e,[this.routes.get(RegExp)],t)},Router.prototype._match=function(e,t,r){if(0===t.length)return null;for(var o=0;o<t.length;o++){var n=t[o],u=n&&n.get(e.toLowerCase());if(u){var a=keyMatch(u,r);if(a.length>0)return a[0].makeHandler(r)}}return null},Router.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},module.exports=new Router;
},{"./route":4}],6:[function(require,module,exports){
"use strict";function cacheFirst(e,r,t){return helpers.debug("Strategy: cache first ["+e.url+"]",t),helpers.openCache(t).then(function(r){return r.match(e).then(function(r){return r?r:helpers.fetchAndCache(e,t)})})}var helpers=require("../helpers");module.exports=cacheFirst;
},{"../helpers":1}],7:[function(require,module,exports){
"use strict";function cacheOnly(e,r,c){return helpers.debug("Strategy: cache only ["+e.url+"]",c),helpers.openCache(c).then(function(r){return r.match(e)})}var helpers=require("../helpers");module.exports=cacheOnly;
},{"../helpers":1}],8:[function(require,module,exports){
"use strict";function fastest(e,n,t){return helpers.debug("Strategy: fastest ["+e.url+"]",t),new Promise(function(r,s){var c=!1,o=[],a=function(e){o.push(e.toString()),c?s(new Error('Both cache and network failed: "'+o.join('", "')+'"')):c=!0},h=function(e){e instanceof Response?r(e):a("No result returned")};helpers.fetchAndCache(e.clone(),t).then(h,a),cacheOnly(e,n,t).then(h,a)})}var helpers=require("../helpers"),cacheOnly=require("./cacheOnly");module.exports=fastest;
},{"../helpers":1,"./cacheOnly":7}],9:[function(require,module,exports){
module.exports={networkOnly:require("./networkOnly"),networkFirst:require("./networkFirst"),cacheOnly:require("./cacheOnly"),cacheFirst:require("./cacheFirst"),fastest:require("./fastest")};
},{"./cacheFirst":6,"./cacheOnly":7,"./fastest":8,"./networkFirst":10,"./networkOnly":11}],10:[function(require,module,exports){
"use strict";function networkFirst(e,r,t){t=t||{};var s=t.successResponses||globalOptions.successResponses,n=t.networkTimeoutSeconds||globalOptions.networkTimeoutSeconds;return helpers.debug("Strategy: network first ["+e.url+"]",t),helpers.openCache(t).then(function(r){var o,u,i=[];if(n){var c=new Promise(function(t){o=setTimeout(function(){r.match(e).then(function(e){e&&t(e)})},1e3*n)});i.push(c)}var a=helpers.fetchAndCache(e,t).then(function(e){if(o&&clearTimeout(o),s.test(e.status))return e;throw helpers.debug("Response was an HTTP error: "+e.statusText,t),u=e,new Error("Bad response")})["catch"](function(s){return helpers.debug("Network or response error, fallback to cache ["+e.url+"]",t),r.match(e).then(function(e){if(e)return e;if(u)return u;throw s})});return i.push(a),Promise.race(i)})}var globalOptions=require("../options"),helpers=require("../helpers");module.exports=networkFirst;
},{"../helpers":1,"../options":3}],11:[function(require,module,exports){
"use strict";function networkOnly(e,r,t){return helpers.debug("Strategy: network only ["+e.url+"]",t),fetch(e)}var helpers=require("../helpers");module.exports=networkOnly;
},{"../helpers":1}],12:[function(require,module,exports){
"use strict";function cache(e,t){return helpers.openCache(t).then(function(t){return t.add(e)})}function uncache(e,t){return helpers.openCache(t).then(function(t){return t["delete"](e)})}function precache(e){e instanceof Promise||validatePrecacheInput(e),options.preCacheItems=options.preCacheItems.concat(e)}require("serviceworker-cache-polyfill");var options=require("./options"),router=require("./router"),helpers=require("./helpers"),strategies=require("./strategies");helpers.debug("Service Worker Toolbox is loading");var flatten=function(e){return e.reduce(function(e,t){return e.concat(t)},[])},validatePrecacheInput=function(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e};self.addEventListener("install",function(e){var t=options.cache.name+"$$$inactive$$$";helpers.debug("install event fired"),helpers.debug("creating cache ["+t+"]"),e.waitUntil(helpers.openCache({cache:{name:t}}).then(function(e){return Promise.all(options.preCacheItems).then(flatten).then(validatePrecacheInput).then(function(t){return helpers.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}),self.addEventListener("activate",function(e){helpers.debug("activate event fired");var t=options.cache.name+"$$$inactive$$$";e.waitUntil(helpers.renameCache(t,options.cache.name))}),self.addEventListener("fetch",function(e){var t=router.match(e.request);t?e.respondWith(t(e.request)):router["default"]&&"GET"===e.request.method&&e.respondWith(router["default"](e.request))}),module.exports={networkOnly:strategies.networkOnly,networkFirst:strategies.networkFirst,cacheOnly:strategies.cacheOnly,cacheFirst:strategies.cacheFirst,fastest:strategies.fastest,router:router,options:options,cache:cache,uncache:uncache,precache:precache};
},{"./helpers":1,"./options":3,"./router":5,"./strategies":9,"serviceworker-cache-polyfill":15}],13:[function(require,module,exports){
module.exports=Array.isArray||function(r){return"[object Array]"==Object.prototype.toString.call(r)};
},{}],14:[function(require,module,exports){
function parse(e){for(var t,r=[],n=0,o=0,a="";null!=(t=PATH_REGEXP.exec(e));){var p=t[0],i=t[1],s=t.index;if(a+=e.slice(o,s),o=s+p.length,i)a+=i[1];else{var c=e[o],u=t[2],l=t[3],f=t[4],g=t[5],x=t[6],h=t[7];a&&(r.push(a),a="");var d=null!=u&&null!=c&&c!==u,y="+"===x||"*"===x,m="?"===x||"*"===x,R=t[2]||"/",T=f||g||(h?".*":"[^"+R+"]+?");r.push({name:l||n++,prefix:u||"",delimiter:R,optional:m,repeat:y,partial:d,asterisk:!!h,pattern:escapeGroup(T)})}}return o<e.length&&(a+=e.substr(o)),a&&r.push(a),r}function compile(e){return tokensToFunction(parse(e))}function encodeURIComponentPretty(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function encodeAsterisk(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function tokensToFunction(e){for(var t=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(r,n){for(var o="",a=r||{},p=n||{},i=p.pretty?encodeURIComponentPretty:encodeURIComponent,s=0;s<e.length;s++){var c=e[s];if("string"!=typeof c){var u,l=a[c.name];if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(isarray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<l.length;f++){if(u=i(l[f]),!t[s].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(u)+"`");o+=(0===f?c.prefix:c.delimiter)+u}}else{if(u=c.asterisk?encodeAsterisk(l):i(l),!t[s].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+u+'"');o+=c.prefix+u}}else o+=c}return o}}function escapeString(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function escapeGroup(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function attachKeys(e,t){return e.keys=t,e}function flags(e){return e.sensitive?"":"i"}function regexpToRegexp(e,t){var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return attachKeys(e,t)}function arrayToRegexp(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(pathToRegexp(e[o],t,r).source);var a=new RegExp("(?:"+n.join("|")+")",flags(r));return attachKeys(a,t)}function stringToRegexp(e,t,r){for(var n=parse(e),o=tokensToRegExp(n,r),a=0;a<n.length;a++)"string"!=typeof n[a]&&t.push(n[a]);return attachKeys(o,t)}function tokensToRegExp(e,t){t=t||{};for(var r=t.strict,n=t.end!==!1,o="",a=e[e.length-1],p="string"==typeof a&&/\/$/.test(a),i=0;i<e.length;i++){var s=e[i];if("string"==typeof s)o+=escapeString(s);else{var c=escapeString(s.prefix),u="(?:"+s.pattern+")";s.repeat&&(u+="(?:"+c+u+")*"),u=s.optional?s.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}return r||(o=(p?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=n?"$":r&&p?"":"(?=\\/|$)",new RegExp("^"+o,flags(t))}function pathToRegexp(e,t,r){return t=t||[],isarray(t)?r||(r={}):(r=t,t=[]),e instanceof RegExp?regexpToRegexp(e,t):isarray(e)?arrayToRegexp(e,t,r):stringToRegexp(e,t,r)}var isarray=require("isarray");module.exports=pathToRegexp,module.exports.parse=parse,module.exports.compile=compile,module.exports.tokensToFunction=tokensToFunction,module.exports.tokensToRegExp=tokensToRegExp;var PATH_REGEXP=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
},{"isarray":13}],15:[function(require,module,exports){
!function(){var t=Cache.prototype.addAll,e=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(e)var r=e[1],n=parseInt(e[2]);t&&(!e||"Firefox"===r&&n>=46||"Chrome"===r&&n>=50)||(Cache.prototype.addAll=function(t){function e(t){this.name="NetworkError",this.code=19,this.message=t}var r=this;return e.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return t=t.map(function(t){return t instanceof Request?t:String(t)}),Promise.all(t.map(function(t){"string"==typeof t&&(t=new Request(t));var r=new URL(t.url).protocol;if("http:"!==r&&"https:"!==r)throw new e("Invalid scheme");return fetch(t.clone())}))}).then(function(n){if(n.some(function(t){return!t.ok}))throw new e("Incorrect response status");return Promise.all(n.map(function(e,n){return r.put(t[n],e)}))}).then(function(){})},Cache.prototype.add=function(t){return this.addAll([t])})}();
},{}]},{},[12])(12)
});


//# sourceMappingURL=./build/sw-toolbox.map.json
// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/^https:\/\/cdn\.ampproject\.org/, toolbox.fastest, {});