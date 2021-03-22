'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "21b60d415374031526ebe304809a0f7a",
"index.html": "033fae21a70d0d7a703c1b4d20232b05",
"/": "033fae21a70d0d7a703c1b4d20232b05",
"main.dart.js": "6c75160829e2dc1973351a5cfcdaa273",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ae2cd302018f56e943e384102d823826",
"Square_logo.png": "96033c7589d72335deb8208857f8087f",
".git/config": "8ca85ff0021aec3d14f3a7a7dd69c7c0",
".git/objects/3e/2d2c59316b85eda1fd396e036a6dc25229cb95": "b31165d174f1fb4effcedd5ad86fadc5",
".git/objects/3e/6b19ea30b5f1898abf155c6de91a2df70b7368": "3066fbb79f9b1a37710d90740b15c3bf",
".git/objects/50/47f5f3be49d03bcad9b386a6fa3f405663ca9e": "673036d61a49dbab92cc5f9c19cb616c",
".git/objects/9e/e5e909267c273c942aefc3c7b76643a4ca237c": "7534e43f47c341a112bc838f4d8de20c",
".git/objects/ac/b79b2c08b605400780b9c95e2b9b333e73099f": "1ca92313cd5455756bc7e40a29506f78",
".git/objects/bb/c3a19ae86ff986117cbad54fa67a7704a3bf95": "d70340d3e3e4a361f783056d34f4dadb",
".git/objects/d7/e597d4a0ca3cde86224fa34ed52636e5bcda0a": "358cbecba99d484ffec5513b020418fc",
".git/objects/d0/156eb2c5c64e16c161deb1e507173837d8fe39": "774c6c6775676f68399cc60d6d57b17f",
".git/objects/da/7150b06b29b5c2d39120cb42dc03f0bb4a6051": "9ce8c2217f62edf63c83e6f1592b48ad",
".git/objects/a5/250e9246e9dd17c3217ff3f92affcf2de033cf": "d04e2fdf52e09cc2e6b5da37b27adf2b",
".git/objects/d1/4ea3f701d7782b182b1a40a6785527ab71a203": "c4d38e97b29e7a17d62323aa04df6b15",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/4e/94bd870bdfe6a80c7752f58c78fe9523b9eacf": "e625ec51a7927c96cc63672cb598648b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/2bbfdcf6eaccbcbeff009d10101d14a2ae0d3f": "cc8c443f7ea9d24de5300b5ade37459f",
".git/objects/29/13e38f0b5d063c26377fbf8dfa828bda61b5c0": "c46f172ffbf9645e19950e8d01c4ac34",
".git/objects/73/9ef5e8c609ae4ea8f4911a2f69f36bb5b991ac": "4724a05cde9748d09e25a99b8bd3b056",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/180176a75b3a10b358783036059b7697425ac4": "9e6121dfa9cbd8298f40e3644756dd10",
".git/objects/26/49723635ea688800a2a079c3f52138e00c4faf": "bd916924792b70b624206ebc7188c7f7",
".git/objects/2a/7e63d7b8a9c873b3810740c8788b4a804501f5": "0768bc3475fa2f6243591ce230a04398",
".git/objects/43/7b1157cb4c32560095c6d40accde2956070c1c": "9e7e2f17a3467d973000e4231368942e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/079f6984098cc53f68a24390936a73a6dcd944": "9860083b26475cb02af305975737a70b",
".git/objects/9a/03a695ced22552d88cb48f47078ed14d994fbf": "f486ad5fb9344a8f156dafed12ed0aa5",
".git/objects/08/1ee62425f079056253c53a7d6370b8d0aff9de": "6d653a6af2453050907aeae5c28b44d9",
".git/objects/52/348354c2916fbecf10f9c17e08db7bccd96653": "be2053bfca3824391becd9ce3d15c455",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ce/2c2d22284b6455b811431730ab090d88f10e3d": "1ea10e6236bf1be0603f2e75a0a904cd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/052e8b428de4f7e3e18fbab42f81c356a563be": "e24e89575619fad03b584a006747cbf1",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/49/e4abd17222367a88f596139c3cb5ac756454e9": "43fad4d59c49ef917c7b424f211416e5",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "95d7bcf762679e697d80d62f4726a91b",
".git/logs/refs/heads/master": "95d7bcf762679e697d80d62f4726a91b",
".git/logs/refs/remotes/origin/master": "cc91cb2462aa35d2fec9ede80a8ed7a4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "579c295331eb879fe19d8983bbef9b47",
".git/refs/remotes/origin/master": "579c295331eb879fe19d8983bbef9b47",
".git/index": "70990591f80a0ff7fb8a70b63d2730d3",
".git/COMMIT_EDITMSG": "878fb274684a2db0a62b37b6ed3e23ad",
"assets/AssetManifest.json": "fca70b8154a139336e974f04662807fe",
"assets/NOTICES": "06e6ce3b983749fbd6bd46d0b875399e",
"assets/FontManifest.json": "ff8272fefa8615bfb37f03634428d61b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/lumeon_vertical.jpg": "f6f8514cb8eb8af3d5aedff882399d79",
"assets/assets/lumeon_transparent.png": "ba83ffdf930d3256bc12ad7677e60cf4",
"assets/assets/Square_logo.png": "96033c7589d72335deb8208857f8087f",
"assets/assets/fonts/montserrat/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/montserrat/Montserrat-BlackItalic.ttf": "d9b6ba595b059fc5d48e8f52c30f73b3",
"assets/assets/fonts/montserrat/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
