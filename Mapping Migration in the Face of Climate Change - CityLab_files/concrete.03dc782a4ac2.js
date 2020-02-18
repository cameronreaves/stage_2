SystemJS.config({
  paths: {
    'github:': 'jspm_packages/github/',
    'npm:': 'jspm_packages/npm/',
    'adsjs': 'https://www.theatlantic.com/packages/adsjs/ads.min.js',
    'disqus_embed': 'https://theatlanticcities.disqus.com/embed.js',
    'twitter': 'https://platform.twitter.com/widgets.js',
    'scrolljs': 'https://static.scroll.com/js/scroll.js'
  },
  sassPluginOptions: {
    'autoprefixer': true,
    'sassOptions': {
      'includePaths': [
        'node_modules/support-for/sass',
        'node_modules/normalize-scss/sass',
        'node_modules/breakpoint-sass/stylesheets'
      ]
    }
  },
  devConfig: {
    'map': {
      'babel-runtime': 'npm:babel-runtime@5.8.38',
      'core-js': 'npm:core-js@1.2.7',
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.25',
      'babel-plugin-syntax-dynamic-import': 'npm:babel-plugin-syntax-dynamic-import@6.18.0',
      'babel-plugin-transform-es2015-modules-systemjs': 'npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1'
    },
    'packages': {
      'npm:babel-runtime@5.8.38': {
        'map': {}
      },
      'npm:core-js@1.2.7': {
        'map': {
          'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
        }
      },
      'npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1': {
        'map': {
          'babel-template': 'npm:babel-template@6.26.0',
          'babel-helper-hoist-variables': 'npm:babel-helper-hoist-variables@6.24.1',
          'babel-runtime': 'npm:babel-runtime@6.26.0'
        }
      },
      'npm:babel-template@6.26.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'lodash': 'npm:lodash@4.17.11',
          'babylon': 'npm:babylon@6.18.0',
          'babel-types': 'npm:babel-types@6.26.0',
          'babel-traverse': 'npm:babel-traverse@6.26.0'
        }
      },
      'npm:babel-helper-hoist-variables@6.24.1': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-types': 'npm:babel-types@6.26.0'
        }
      },
      'npm:babel-types@6.26.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'lodash': 'npm:lodash@4.17.11',
          'to-fast-properties': 'npm:to-fast-properties@1.0.3',
          'esutils': 'npm:esutils@2.0.2'
        }
      },
      'npm:babel-traverse@6.26.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-types': 'npm:babel-types@6.26.0',
          'babylon': 'npm:babylon@6.18.0',
          'lodash': 'npm:lodash@4.17.11',
          'invariant': 'npm:invariant@2.2.4',
          'babel-code-frame': 'npm:babel-code-frame@6.26.0',
          'globals': 'npm:globals@9.18.0',
          'babel-messages': 'npm:babel-messages@6.23.0',
          'debug': 'npm:debug@2.6.9'
        }
      },
      'npm:babel-code-frame@6.26.0': {
        'map': {
          'esutils': 'npm:esutils@2.0.2',
          'chalk': 'npm:chalk@1.1.3',
          'js-tokens': 'npm:js-tokens@3.0.2'
        }
      },
      'npm:babel-messages@6.23.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0'
        }
      },
      'npm:invariant@2.2.4': {
        'map': {
          'loose-envify': 'npm:loose-envify@1.4.0'
        }
      },
      'npm:loose-envify@1.4.0': {
        'map': {
          'js-tokens': 'npm:js-tokens@4.0.0'
        }
      }
    }
  },
  transpiler: 'plugin-babel',
  bundles: {
    'dist/citylab/js/bundle.js': [
      'citylab/js/main.js'
    ],
    'dist/citylab/js/bundle/ads.js': [
      'citylab/js/ads.js'
    ],
    'dist/citylab/js/bundle/lib/action-bar.js': [
      'citylab/js/lib/action-bar.js'
    ],
    'dist/citylab/js/bundle/lib/bottom-persistent.js': [
      'citylab/js/lib/bottom-persistent.js'
    ],
    'dist/citylab/js/bundle/lib/child-load.js': [
      'citylab/js/lib/child-load.js'
    ],
    'dist/citylab/js/bundle/lib/debug.js': [
      'citylab/js/lib/debug.js'
    ],
    'dist/citylab/js/bundle/lib/disqus.js': [
      'citylab/js/lib/disqus.js'
    ],
    'dist/citylab/js/bundle/lib/newsletter.js': [
      'citylab/js/lib/newsletter.js'
    ],
    'dist/citylab/js/bundle/lib/share.js': [
      'citylab/js/lib/share.js'
    ],
    'dist/theatlantic/js/bundle.js': [
      'theatlantic/js/main.js'
    ],
    'dist/theatlantic/js/legacy.js': [
      'theatlantic/js/legacy.js'
    ],
    'dist/theatlantic/js/polyfill.js': [
      'theatlantic/js/polyfill.js'
    ],
    'dist/theatlantic/js/bundle/homepage.js': [
      'theatlantic/js/homepage.js'
    ],
    'dist/theatlantic/js/bundle/editorial-projects.js': [
      'theatlantic/js/editorial-projects.js'
    ],
    'dist/theatlantic/js/bundle/components/crossword.js': [
      'theatlantic/js/components/crossword.js'
    ],
    'dist/theatlantic/js/bundle/components/recirc-content.js': [
      'theatlantic/js/components/recirc-content.js'
    ],
    'dist/theatlantic/js/bundle/lacroix/components/recirc-content.js': [
      'theatlantic/js/lacroix/components/recirc-content.js'
    ],
    'dist/theatlantic/js/bundle/components/most-popular.js': [
      'theatlantic/js/components/most-popular.js'
    ],
    'dist/theatlantic/js/bundle/lacroix/components/most-popular.js': [
      'theatlantic/js/lacroix/components/most-popular.js'
    ],
    'dist/theatlantic/js/bundle/components/navigation.js': [
      'theatlantic/js/components/navigation.js'
    ],
    'dist/theatlantic/js/bundle/components/article-video.js': [
      'theatlantic/js/components/article-video.js'
    ],
    'dist/theatlantic/js/bundle/lacroix/components/article-video.js': [
      'theatlantic/js/lacroix/components/article-video.js'
    ],
    'dist/theatlantic/js/bundle/components/footer.js': [
      'theatlantic/js/components/footer.js'
    ],
    'dist/theatlantic/js/bundle/lacroix/components/footer.js': [
      'theatlantic/js/lacroix/components/footer.js'
    ],
    'dist/theatlantic/js/bundle/components/share-social.js': [
      'theatlantic/js/components/share-social.js'
    ],
    'dist/theatlantic/js/bundle/components/leaflet.js': [
      'theatlantic/js/components/leaflet.js'
    ],
    'dist/theatlantic/js/bundle/lacroix/components/leaflet.js': [
      'theatlantic/js/lacroix/components/leaflet.js'
    ],
    'dist/theatlantic/js/bundle/components/related-video.js': [
      'theatlantic/js/components/related-video.js'
    ],
    'dist/theatlantic/js/bundle/utils/debug.js': [
      'theatlantic/js/utils/debug.js'
    ],
    'dist/theatlantic/js/bundle/utils/iframe-resizer.js': [
      'theatlantic/js/utils/iframe-resizer.js'
    ],
    'dist/theatlantic/js/bundle/pages/year-in-review.js': [
      'theatlantic/js/pages/year-in-review.js'
    ]
  },
  packages: {
    'citylab': {
      'main': 'js/main.js',
      'defaultExtension': 'js',
      'format': 'esm'
    },
    'theatlantic': {
      'main': 'js/main.js',
      'defaultExtension': 'js',
      'format': 'esm'
    },
    'systemjs-nunjucks-loader': {
      'defaultExtension': 'js',
      'main': 'index.js'
    },
    'hippo': {
      'main': 'base.html',
      'defaultExtension': 'html'
    },
    'concrete': {
      'main': 'base.html',
      'defaultExtension': 'html'
    },
    'npm:systemjs-plugin-babel@0.0.25': {
      'meta': {
        '*.js': {
          'loader': false
        }
      }
    }
  },
  meta: {
    '*.html': {
      'loader': 'systemjs-nunjucks-loader'
    },
    '*.js': {
      'babelOptions': {
        'optional': [
          'runtime',
          'optimisation.modules.system'
        ]
      }
    },
    '*.scss': {
      'loader': 'sass'
    },
    'pageInfo': {
      'build': false
    },
    'profilesConfig': {
      'build': false
    },
    'accountsConfig': {
      'build': false
    },
    'adsConfig': {
      'build': false
    },
    'vendorConfig': {
      'build': false
    },
    'adsjs': {
      'build': false,
      'format': 'global',
      'scriptLoad': true,
      'exports': 'ads'
    },
    'disqus_embed': {
      'build': false,
      'format': 'global',
      'scriptLoad': true,
      'exports': 'DISQUS'
    },
    'twitter': {
      'build': false,
      'format': 'global',
      'scriptLoad': true,
      'exports': 'twttr'
    },
    'gtm': {
      'build': false,
      'format': 'global',
      'scriptLoad': true,
      'exports': 'google_tag_manager'
    },
    'scrolljs': {
      'build': false,
      'format': 'global',
      'scriptLoad': true,
      'exports': 'Scroll'
    }
  },
  map: {
    'babel': 'npm:babel-core@5.8.38',
    'hippo': 'theatlantic/templates/hippo',
    'concrete': 'citylab/templates/concrete',
    'fromEntries': 'npm:object.fromentries@2.0.0'
  },
  nodeConfig: {
    'map': {}
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'clipboard': 'npm:clipboard@2.0.4',
    '@theatlantic/paywall-utils': 'github:theatlantic/paywall-utils@0.5.0',
    'babel-polyfill': 'npm:babel-polyfill@6.26.0',
    'es6-object-assign': 'npm:es6-object-assign@1.1.0',
    'breakpoint': 'npm:breakpoint-sass@2.7.1',
    'jwt-decode': 'npm:jwt-decode@2.2.0',
    'nunjucks': 'npm:nunjucks@3.1.7',
    'a-sync-waterfall': 'npm:a-sync-waterfall@1.0.1',
    'asap': 'npm:asap@2.0.6',
    'graceful-fs': 'npm:graceful-fs@4.1.15',
    'accessibilityjs': 'npm:accessibilityjs@1.0.1',
    'assert': 'npm:jspm-nodelibs-assert@0.2.1',
    'bcrypt-pbkdf': 'npm:bcrypt-pbkdf@1.0.1',
    'buffer': 'npm:jspm-nodelibs-buffer@0.2.3',
    'child_process': 'npm:jspm-nodelibs-child_process@0.2.1',
    'constants': 'npm:jspm-nodelibs-constants@0.2.1',
    'crypto': 'npm:jspm-nodelibs-crypto@0.2.1',
    'css': 'github:systemjs/plugin-css@0.1.35',
    'debug': 'npm:debug@2.6.9',
    'dgram': 'npm:jspm-nodelibs-dgram@0.2.1',
    'dns': 'npm:jspm-nodelibs-dns@0.2.1',
    'domain': 'npm:jspm-nodelibs-domain@0.2.1',
    'ecc-jsbn': 'npm:ecc-jsbn@0.1.1',
    'events': 'npm:jspm-nodelibs-events@0.2.2',
    'fontfaceobserver': 'npm:fontfaceobserver@2.0.13',
    'fs': 'npm:jspm-nodelibs-fs@0.2.1',
    'fsevents': 'npm:fsevents@1.2.7',
    'http': 'npm:jspm-nodelibs-http@0.2.0',
    'https': 'npm:jspm-nodelibs-https@0.2.2',
    'iframe-resizer': 'npm:iframe-resizer@3.6.2',
    'intersection-observer': 'npm:intersection-observer@0.5.1',
    'jquery': 'npm:jquery@3.3.1',
    'js-cookie': 'npm:js-cookie@2.1.4',
    'jsbn': 'npm:jsbn@0.1.1',
    'json': 'github:systemjs/plugin-json@0.3.0',
    'lazysizes': 'github:theatlantic/lazysizes@4.0.5',
    'module': 'npm:jspm-nodelibs-module@0.2.1',
    'net': 'npm:jspm-nodelibs-net@0.2.1',
    'object.fromentries': 'npm:object.fromentries@2.0.0',
    'os': 'npm:jspm-nodelibs-os@0.2.2',
    'path': 'npm:jspm-nodelibs-path@0.2.3',
    'picturefill': 'npm:picturefill@3.0.2',
    'process': 'npm:jspm-nodelibs-process@0.2.1',
    'promise-polyfill': 'npm:promise-polyfill@7.1.2',
    'querystring': 'npm:jspm-nodelibs-querystring@0.2.2',
    'regenerator-runtime': 'npm:regenerator-runtime@0.13.2',
    'sass': 'github:fdintino/plugin-sass@0.7.0',
    'stream': 'npm:jspm-nodelibs-stream@0.2.1',
    'string_decoder': 'npm:jspm-nodelibs-string_decoder@0.2.2',
    'system-image': 'npm:system-image@0.1.0',
    'system-script': 'npm:system-script@0.1.9',
    'theatlantic-nunjucks-helpers': 'github:theatlantic/theatlantic-nunjucks-helpers@1.6.1',
    'theatlantic/paywall-utils': 'github:theatlantic/paywall-utils@0.4.0',
    'tls': 'npm:jspm-nodelibs-tls@0.2.1',
    'tti-polyfill': 'npm:tti-polyfill@0.2.2',
    'tty': 'npm:jspm-nodelibs-tty@0.2.1',
    'tweetnacl': 'npm:tweetnacl@0.14.5',
    'url': 'npm:jspm-nodelibs-url@0.2.1',
    'usertiming': 'npm:usertiming@0.1.8',
    'util': 'npm:jspm-nodelibs-util@0.2.2',
    'uuid': 'npm:uuid@3.0.1',
    'vm': 'npm:jspm-nodelibs-vm@0.2.1',
    'waypoints': 'npm:waypoints@4.0.1',
    'whatwg-fetch': 'npm:whatwg-fetch@2.0.3',
    'zlib': 'npm:jspm-nodelibs-zlib@0.2.3'
  },
  packages: {
    'npm:bcrypt-pbkdf@1.0.1': {
      'map': {
        'tweetnacl': 'npm:tweetnacl@0.14.5'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'randombytes': 'npm:randombytes@2.0.6'
      }
    },
    'npm:browserify-sign@4.0.4': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'create-hash': 'npm:create-hash@1.2.0',
        'create-hmac': 'npm:create-hmac@1.1.7',
        'elliptic': 'npm:elliptic@6.4.1',
        'inherits': 'npm:inherits@2.0.3',
        'parse-asn1': 'npm:parse-asn1@5.1.3',
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:browserify-zlib@0.1.4': {
      'map': {
        'pako': 'npm:pako@0.2.9',
        'readable-stream': 'npm:readable-stream@2.3.6'
      }
    },
    'npm:buffer-xor@1.0.3': {
      'map': {
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:core-util-is@1.0.2': {
      'map': {}
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.1'
      }
    },
    'npm:ecc-jsbn@0.1.1': {
      'map': {
        'jsbn': 'npm:jsbn@0.1.1'
      }
    },
    'npm:fs.realpath@1.0.0': {
      'map': {}
    },
    'npm:gauge@2.7.4': {
      'map': {
        'aproba': 'npm:aproba@1.2.0',
        'console-control-strings': 'npm:console-control-strings@1.1.0',
        'has-unicode': 'npm:has-unicode@2.0.1',
        'object-assign': 'npm:object-assign@4.1.1',
        'signal-exit': 'npm:signal-exit@3.0.2',
        'string-width': 'npm:string-width@1.0.2',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'wide-align': 'npm:wide-align@1.1.3'
      }
    },
    'npm:has-unicode@2.0.1': {
      'map': {}
    },
    'npm:hmac-drbg@1.0.1': {
      'map': {
        'hash.js': 'npm:hash.js@1.1.7',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.1',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1',
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:iframe-resizer@3.6.2': {
      'map': {}
    },
    'npm:inflight@1.0.6': {
      'map': {
        'once': 'npm:once@1.4.0',
        'wrappy': 'npm:wrappy@1.0.2'
      }
    },
    'npm:inherits@2.0.3': {
      'map': {}
    },
    'npm:is-fullwidth-code-point@1.0.0': {
      'map': {
        'number-is-nan': 'npm:number-is-nan@1.0.1'
      }
    },
    'npm:isarray@1.0.0': {
      'map': {
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:js-cookie@2.1.4': {
      'map': {}
    },
    'npm:minimatch@3.0.4': {
      'map': {
        'brace-expansion': 'npm:brace-expansion@1.1.11'
      }
    },
    'npm:mkdirp@0.5.1': {
      'map': {
        'minimist': 'npm:minimist@0.0.8'
      }
    },
    'npm:nopt@4.0.1': {
      'map': {
        'abbrev': 'npm:abbrev@1.1.1',
        'osenv': 'npm:osenv@0.1.5'
      }
    },
    'npm:npmlog@4.1.2': {
      'map': {
        'are-we-there-yet': 'npm:are-we-there-yet@1.1.5',
        'console-control-strings': 'npm:console-control-strings@1.1.0',
        'gauge': 'npm:gauge@2.7.4',
        'set-blocking': 'npm:set-blocking@2.0.0'
      }
    },
    'npm:once@1.4.0': {
      'map': {
        'wrappy': 'npm:wrappy@1.0.2'
      }
    },
    'npm:os-homedir@1.0.2': {
      'map': {}
    },
    'npm:os-tmpdir@1.0.2': {
      'map': {}
    },
    'npm:pako@0.2.9': {
      'map': {}
    },
    'npm:path-is-absolute@1.0.1': {
      'map': {}
    },
    'npm:picturefill@3.0.2': {
      'map': {}
    },
    'npm:punycode@1.3.2': {
      'map': {}
    },
    'npm:set-blocking@2.0.0': {
      'map': {}
    },
    'npm:signal-exit@3.0.2': {
      'map': {}
    },
    'npm:string-width@1.0.2': {
      'map': {
        'code-point-at': 'npm:code-point-at@1.1.0',
        'is-fullwidth-code-point': 'npm:is-fullwidth-code-point@1.0.0',
        'strip-ansi': 'npm:strip-ansi@3.0.1'
      }
    },
    'npm:string_decoder@0.10.31': {
      'map': {}
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.1.1'
      }
    },
    'npm:tti-polyfill@0.2.2': {
      'map': {}
    },
    'npm:url@0.11.0': {
      'map': {
        'punycode': 'npm:punycode@1.3.2',
        'querystring': 'npm:querystring@0.2.0'
      }
    },
    'npm:usertiming@0.1.8': {
      'map': {}
    },
    'npm:util-deprecate@1.0.2': {
      'map': {}
    },
    'npm:uuid@3.0.1': {
      'map': {}
    },
    'npm:waypoints@4.0.1': {
      'map': {
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:jspm-nodelibs-crypto@0.2.1': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.12.0'
      }
    },
    'npm:jspm-nodelibs-domain@0.2.1': {
      'map': {
        'domain-browser': 'npm:domain-browser@1.2.0'
      }
    },
    'npm:jspm-nodelibs-buffer@0.2.3': {
      'map': {
        'buffer': 'npm:buffer@5.2.1'
      }
    },
    'npm:jspm-nodelibs-stream@0.2.1': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.2'
      }
    },
    'npm:jspm-nodelibs-os@0.2.2': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.3.0'
      }
    },
    'npm:jspm-nodelibs-http@0.2.0': {
      'map': {
        'http-browserify': 'npm:stream-http@2.8.3'
      }
    },
    'npm:stream-http@2.8.3': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.3.6',
        'inherits': 'npm:inherits@2.0.3',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1',
        'builtin-status-codes': 'npm:builtin-status-codes@3.0.0',
        'xtend': 'npm:xtend@4.0.1'
      }
    },
    'npm:jspm-nodelibs-string_decoder@0.2.2': {
      'map': {
        'string_decoder': 'npm:string_decoder@0.10.31'
      }
    },
    'npm:readable-stream@2.3.6': {
      'map': {
        'process-nextick-args': 'npm:process-nextick-args@2.0.0',
        'string_decoder': 'npm:string_decoder@1.1.1',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'inherits': 'npm:inherits@2.0.3',
        'isarray': 'npm:isarray@1.0.0',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'util-deprecate': 'npm:util-deprecate@1.0.2'
      }
    },
    'npm:string_decoder@1.1.1': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2'
      }
    },
    'npm:jspm-nodelibs-zlib@0.2.3': {
      'map': {
        'browserify-zlib': 'npm:browserify-zlib@0.1.4'
      }
    },
    'npm:debug@2.6.9': {
      'map': {
        'ms': 'npm:ms@2.0.0'
      }
    },
    'npm:buffer@5.2.1': {
      'map': {
        'base64-js': 'npm:base64-js@1.3.0',
        'ieee754': 'npm:ieee754@1.1.12'
      }
    },
    'npm:crypto-browserify@3.12.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'randomfill': 'npm:randomfill@1.0.4',
        'browserify-cipher': 'npm:browserify-cipher@1.0.1',
        'create-hash': 'npm:create-hash@1.2.0',
        'randombytes': 'npm:randombytes@2.0.6',
        'create-ecdh': 'npm:create-ecdh@4.0.3',
        'create-hmac': 'npm:create-hmac@1.1.7',
        'pbkdf2': 'npm:pbkdf2@3.0.17',
        'diffie-hellman': 'npm:diffie-hellman@5.0.3',
        'browserify-sign': 'npm:browserify-sign@4.0.4',
        'public-encrypt': 'npm:public-encrypt@4.0.3'
      }
    },
    'npm:randomfill@1.0.4': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'randombytes': 'npm:randombytes@2.0.6'
      }
    },
    'npm:create-hash@1.2.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'ripemd160': 'npm:ripemd160@2.0.2',
        'sha.js': 'npm:sha.js@2.4.11',
        'md5.js': 'npm:md5.js@1.3.5',
        'cipher-base': 'npm:cipher-base@1.0.4'
      }
    },
    'npm:randombytes@2.0.6': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2'
      }
    },
    'npm:create-hmac@1.1.7': {
      'map': {
        'create-hash': 'npm:create-hash@1.2.0',
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'ripemd160': 'npm:ripemd160@2.0.2',
        'sha.js': 'npm:sha.js@2.4.11',
        'cipher-base': 'npm:cipher-base@1.0.4'
      }
    },
    'npm:browserify-cipher@1.0.1': {
      'map': {
        'browserify-des': 'npm:browserify-des@1.0.2',
        'browserify-aes': 'npm:browserify-aes@1.2.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3'
      }
    },
    'npm:pbkdf2@3.0.17': {
      'map': {
        'create-hash': 'npm:create-hash@1.2.0',
        'create-hmac': 'npm:create-hmac@1.1.7',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'ripemd160': 'npm:ripemd160@2.0.2',
        'sha.js': 'npm:sha.js@2.4.11'
      }
    },
    'npm:browserify-des@1.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:evp_bytestokey@1.0.3': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'md5.js': 'npm:md5.js@1.3.5'
      }
    },
    'npm:browserify-aes@1.2.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.2.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'inherits': 'npm:inherits@2.0.3',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:md5.js@1.3.5': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'inherits': 'npm:inherits@2.0.3',
        'hash-base': 'npm:hash-base@3.0.4'
      }
    },
    'npm:ripemd160@2.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'hash-base': 'npm:hash-base@3.0.4'
      }
    },
    'npm:sha.js@2.4.11': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2'
      }
    },
    'npm:cipher-base@1.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2'
      }
    },
    'npm:create-ecdh@4.0.3': {
      'map': {
        'elliptic': 'npm:elliptic@6.4.1',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:public-encrypt@4.0.3': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'create-hash': 'npm:create-hash@1.2.0',
        'randombytes': 'npm:randombytes@2.0.6',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.1.3'
      }
    },
    'npm:diffie-hellman@5.0.3': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.6',
        'bn.js': 'npm:bn.js@4.11.8',
        'miller-rabin': 'npm:miller-rabin@4.0.1'
      }
    },
    'npm:elliptic@6.4.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.8',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.1',
        'hmac-drbg': 'npm:hmac-drbg@1.0.1',
        'brorand': 'npm:brorand@1.1.0',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1',
        'hash.js': 'npm:hash.js@1.1.7'
      }
    },
    'npm:hash-base@3.0.4': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:rimraf@2.6.3': {
      'map': {
        'glob': 'npm:glob@7.1.3'
      }
    },
    'npm:parse-asn1@5.1.3': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.2.0',
        'create-hash': 'npm:create-hash@1.2.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'pbkdf2': 'npm:pbkdf2@3.0.17',
        'asn1.js': 'npm:asn1.js@4.10.1'
      }
    },
    'npm:hash.js@1.1.7': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.1'
      }
    },
    'npm:miller-rabin@4.0.1': {
      'map': {
        'brorand': 'npm:brorand@1.1.0',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:glob@7.1.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'path-is-absolute': 'npm:path-is-absolute@1.0.1',
        'fs.realpath': 'npm:fs.realpath@1.0.0',
        'inflight': 'npm:inflight@1.0.6',
        'once': 'npm:once@1.4.0',
        'minimatch': 'npm:minimatch@3.0.4'
      }
    },
    'npm:asn1.js@4.10.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.1'
      }
    },
    'npm:brace-expansion@1.1.11': {
      'map': {
        'balanced-match': 'npm:balanced-match@1.0.0',
        'concat-map': 'npm:concat-map@0.0.1'
      }
    },
    'npm:jspm-nodelibs-url@0.2.1': {
      'map': {
        'url': 'npm:url@0.11.0'
      }
    },
    'npm:stream-browserify@2.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.3.6'
      }
    },
    'npm:fsevents@1.2.7': {
      'map': {
        'nan': 'npm:nan@2.12.1',
        'node-pre-gyp': 'npm:node-pre-gyp@0.10.3'
      }
    },
    'npm:node-pre-gyp@0.10.3': {
      'map': {
        'detect-libc': 'npm:detect-libc@1.0.3',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'npmlog': 'npm:npmlog@4.1.2',
        'nopt': 'npm:nopt@4.0.1',
        'npm-packlist': 'npm:npm-packlist@1.2.0',
        'semver': 'npm:semver@5.6.0',
        'rimraf': 'npm:rimraf@2.6.3',
        'rc': 'npm:rc@1.2.8',
        'tar': 'npm:tar@4.4.8',
        'needle': 'npm:needle@2.2.4'
      }
    },
    'npm:tar@4.4.8': {
      'map': {
        'mkdirp': 'npm:mkdirp@0.5.1',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'fs-minipass': 'npm:fs-minipass@1.2.5',
        'chownr': 'npm:chownr@1.1.1',
        'minizlib': 'npm:minizlib@1.2.1',
        'yallist': 'npm:yallist@3.0.3',
        'minipass': 'npm:minipass@2.3.5'
      }
    },
    'npm:rc@1.2.8': {
      'map': {
        'minimist': 'npm:minimist@1.2.0',
        'deep-extend': 'npm:deep-extend@0.6.0',
        'strip-json-comments': 'npm:strip-json-comments@2.0.1',
        'ini': 'npm:ini@1.3.5'
      }
    },
    'npm:needle@2.2.4': {
      'map': {
        'debug': 'npm:debug@2.6.9',
        'sax': 'npm:sax@1.2.4',
        'iconv-lite': 'npm:iconv-lite@0.4.24'
      }
    },
    'npm:npm-packlist@1.2.0': {
      'map': {
        'npm-bundled': 'npm:npm-bundled@1.0.5',
        'ignore-walk': 'npm:ignore-walk@3.0.1'
      }
    },
    'npm:are-we-there-yet@1.1.5': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.3.6',
        'delegates': 'npm:delegates@1.0.0'
      }
    },
    'npm:fs-minipass@1.2.5': {
      'map': {
        'minipass': 'npm:minipass@2.3.5'
      }
    },
    'npm:minizlib@1.2.1': {
      'map': {
        'minipass': 'npm:minipass@2.3.5'
      }
    },
    'npm:osenv@0.1.5': {
      'map': {
        'os-homedir': 'npm:os-homedir@1.0.2',
        'os-tmpdir': 'npm:os-tmpdir@1.0.2'
      }
    },
    'npm:minipass@2.3.5': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'yallist': 'npm:yallist@3.0.3'
      }
    },
    'npm:ignore-walk@3.0.1': {
      'map': {
        'minimatch': 'npm:minimatch@3.0.4'
      }
    },
    'npm:wide-align@1.1.3': {
      'map': {
        'string-width': 'npm:string-width@2.1.1'
      }
    },
    'npm:string-width@2.1.1': {
      'map': {
        'strip-ansi': 'npm:strip-ansi@4.0.0',
        'is-fullwidth-code-point': 'npm:is-fullwidth-code-point@2.0.0'
      }
    },
    'npm:iconv-lite@0.4.24': {
      'map': {
        'safer-buffer': 'npm:safer-buffer@2.1.2'
      }
    },
    'npm:strip-ansi@4.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@3.0.0'
      }
    },
    'npm:asap@2.0.6': {
      'map': {
        'a-sync-waterfall': 'npm:a-sync-waterfall@1.0.1',
        'asap': 'npm:asap@2.0.6'
      }
    },
    'npm:a-sync-waterfall@1.0.1': {
      'map': {
        'a-sync-waterfall': 'npm:a-sync-waterfall@1.0.1',
        'asap': 'npm:asap@2.0.6'
      }
    },
    'npm:nunjucks@3.1.7': {
      'map': {
        'a-sync-waterfall': 'npm:a-sync-waterfall@1.0.1',
        'asap': 'npm:asap@2.0.6'
      }
    },
    'npm:babel-runtime@6.26.0': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.11.1',
        'core-js': 'npm:core-js@2.6.5'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'ansi-styles': 'npm:ansi-styles@2.2.1',
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'has-ansi': 'npm:has-ansi@2.0.0',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'supports-color': 'npm:supports-color@2.0.0'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.1.1'
      }
    },
    'github:fdintino/plugin-sass@0.7.0': {
      'map': {
        'postcss': 'npm:postcss@5.2.18',
        'autoprefixer': 'npm:autoprefixer@6.7.7',
        'css-asset-copier': 'npm:css-asset-copier@1.0.2',
        'css-url-rewriter-ex': 'npm:css-url-rewriter-ex@1.0.6',
        'sass.js': 'npm:sass.js@0.9.13',
        'reqwest': 'github:ded/reqwest@2.0.5'
      }
    },
    'npm:autoprefixer@6.7.7': {
      'map': {
        'postcss': 'npm:postcss@5.2.18',
        'normalize-range': 'npm:normalize-range@0.1.2',
        'num2fraction': 'npm:num2fraction@1.2.2',
        'postcss-value-parser': 'npm:postcss-value-parser@3.3.1',
        'browserslist': 'npm:browserslist@1.7.7',
        'caniuse-db': 'npm:caniuse-db@1.0.30000932'
      }
    },
    'npm:postcss@5.2.18': {
      'map': {
        'js-base64': 'npm:js-base64@2.5.1',
        'supports-color': 'npm:supports-color@3.2.3',
        'chalk': 'npm:chalk@1.1.3',
        'source-map': 'npm:source-map@0.5.7'
      }
    },
    'npm:supports-color@3.2.3': {
      'map': {
        'has-flag': 'npm:has-flag@1.0.0'
      }
    },
    'npm:css-asset-copier@1.0.2': {
      'map': {
        'fs-extra': 'npm:fs-extra@0.30.0',
        'babel-runtime': 'npm:babel-runtime@6.26.0'
      }
    },
    'npm:css-url-rewriter-ex@1.0.6': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.26.0'
      }
    },
    'npm:fs-extra@0.30.0': {
      'map': {
        'graceful-fs': 'npm:graceful-fs@4.1.15',
        'path-is-absolute': 'npm:path-is-absolute@1.0.1',
        'klaw': 'npm:klaw@1.3.1',
        'jsonfile': 'npm:jsonfile@2.4.0',
        'rimraf': 'npm:rimraf@2.6.3'
      }
    },
    'npm:browserslist@1.7.7': {
      'map': {
        'electron-to-chromium': 'npm:electron-to-chromium@1.3.108',
        'caniuse-db': 'npm:caniuse-db@1.0.30000932'
      }
    },
    'npm:babel-polyfill@6.26.0': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.10.5',
        'core-js': 'npm:core-js@2.6.5',
        'babel-runtime': 'npm:babel-runtime@6.26.0'
      }
    },
    'npm:object.fromentries@2.0.0': {
      'map': {
        'has': 'npm:has@1.0.3',
        'define-properties': 'npm:define-properties@1.1.3',
        'es-abstract': 'npm:es-abstract@1.13.0',
        'function-bind': 'npm:function-bind@1.1.1'
      }
    },
    'npm:has@1.0.3': {
      'map': {
        'function-bind': 'npm:function-bind@1.1.1'
      }
    },
    'npm:es-abstract@1.13.0': {
      'map': {
        'function-bind': 'npm:function-bind@1.1.1',
        'has': 'npm:has@1.0.3',
        'is-callable': 'npm:is-callable@1.1.4',
        'is-regex': 'npm:is-regex@1.0.4',
        'es-to-primitive': 'npm:es-to-primitive@1.2.0',
        'object-keys': 'npm:object-keys@1.1.1'
      }
    },
    'npm:es-to-primitive@1.2.0': {
      'map': {
        'is-callable': 'npm:is-callable@1.1.4',
        'is-symbol': 'npm:is-symbol@1.0.2',
        'is-date-object': 'npm:is-date-object@1.0.1'
      }
    },
    'npm:is-regex@1.0.4': {
      'map': {
        'has': 'npm:has@1.0.3'
      }
    },
    'npm:define-properties@1.1.3': {
      'map': {
        'object-keys': 'npm:object-keys@1.1.1'
      }
    },
    'npm:is-symbol@1.0.2': {
      'map': {
        'has-symbols': 'npm:has-symbols@1.0.0'
      }
    },
    'npm:clipboard@2.0.4': {
      'map': {
        'good-listener': 'npm:good-listener@1.2.2',
        'select': 'npm:select@1.1.2',
        'tiny-emitter': 'npm:tiny-emitter@2.1.0'
      }
    },
    'npm:good-listener@1.2.2': {
      'map': {
        'delegate': 'npm:delegate@3.2.0'
      }
    }
  }
});

"bundle";System.registerDynamic("github:theatlantic/lazysizes@4.0.5/lazysizes.js",[],!0,function(a,b,c){this||self;!function(a,b){var d=b(a,a.document);a.lazySizes=d,"object"==typeof c&&c.exports&&(c.exports=d)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d,e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("CustomEvent");return e||(e={}),e.instance=c,h.initCustomEvent(d,!f,!g,e),a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?e({reevaluate:!0,elements:[b]}):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=d.throttleDelay,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=!0===a)&&(g=33),b||(b=!0,d=e-(f.now()-c),d<0&&(d=0),a||d<9?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;a<d?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}};!function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b]);a.lazySizesConfig=d,k(function(){d.init&&F()})}();var D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/glebot/.test(navigator.userAgent),P=0,Q=0,R=0,S=-1,T=function(a){R--,a&&a.target&&u(a.target,T),(!a||R<0||!a.target)&&(R=0)},U=function(a,c){var d,f=a,g="hidden"==x(b.body,"visibility")||"hidden"!=x(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)(g=(x(f,"opacity")||1)>0)&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},V=function(){var a,f,h,j,k,m,n,p,q,r=c.elements;if((o=d.loadMode)&&R<8&&(a=r.length)){f=0,S++,null==K&&("expand"in d||(d.expand=e.clientHeight>500&&e.clientWidth>500?500:370),J=d.expand,K=J*d.expFactor),Q<K&&R<1&&S>2&&o>2&&!b.hidden?(Q=K,S=0):Q=o>1&&S>1&&R<6?J:P;for(;f<a;f++)if(r[f]&&!r[f]._lazyRace)if(O)if((p=r[f][i]("data-expand"))&&(m=1*p)||(m=Q),q!==m&&(y=innerWidth+m*L,D=innerHeight+m,n=-1*m,q=m),h=r[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*L&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||"hidden"!=x(r[f],"visibility"))&&(l&&R<3&&!p&&(o<3||S<4)||U(r[f],m))){if(ba(r[f]),k=!0,R>9)break}else!k&&l&&!j&&R<4&&S<4&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=r[f][i](d.sizesAttr)))&&(j=g[0]||r[f]);else ba(r[f]);j&&!k&&ba(j)}},W=B(V),X=function(a){s(a.target,d.loadedClass),t(a.target,d.loadingClass),u(a.target,Z),v(a.target,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},p&&(u(a,T,!0),clearTimeout(m),m=k(T,2500),s(a,d.loadingClass),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){(!p||a.complete&&a.naturalWidth>1)&&(p?T(o):R--,X(o))},!0)}),ba=function(a){var b,c=M.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,c))},ca=function(){if(!l){if(f.now()-p<999)return void k(ca,999);var a=C(function(){d.loadMode=3,W()});l=!0,d.loadMode=3,W(),j("scroll",function(){3==d.loadMode&&(d.loadMode=2),a()},!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),L=d.hFac,j("scroll",W,!0),j("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",W,!0),e[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(j("load",ca),b[h]("DOMContentLoaded",W),k(ca,2e4)),c.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;f<g;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&c(a,f,e,d))},f=function(){var b,c=a.length;if(c)for(b=0;b<c;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){F.i||(F.i=!0,E._(),D._())};return c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}}})}),System.registerDynamic("github:theatlantic/lazysizes@4.0.5.json",[],!0,function(){return{main:"lazysizes.js"}}),System.registerDynamic("github:theatlantic/lazysizes@4.0.5/plugins/include/ls.include.js",["lazysizes"],!0,function(a,b,c){this||self;!function(b,d){var e=function(){d(b.lazySizes),b.removeEventListener("lazyunveilread",e,!0)};d=d.bind(null,b,b.document),"object"==typeof c&&c.exports?d(a("lazysizes")):b.lazySizes?e():b.addEventListener("lazyunveilread",e,!0)}(window,function(a,b,c){"use strict";function d(a){var b;(b=a.match(B))?this.urls[b[1]]=v.map[b[2]]||b[2]:this.urls.include=v.map[a]||a}function e(a){var b,c,e;return a=a.trim(),a=v.map[a]||a,c=a.match(C),c?(e=c[1],b={condition:u.include.conditions[c[3]]||u.customMedia[c[3]]||c[2]||null,name:c[3]}):(e=a,b={condition:null,name:""}),b.urls={},(v.map[e]||e).split(A).forEach(d,b),!b.urls.include&&b.urls.amd&&(this.saved=!0,b.initial=this),b}function f(a){var b,d,f=a.getAttribute("data-include")||"",g=a.lazyInclude;return g&&g.str==f&&!v.allowReload||(d={saved:!1,content:null},g={str:f,candidates:(v.map[f]||f).split(y).map(e,d)},!(b=g.candidates.length)||g.candidates[b-1].condition?(d.saved=!0,g.candidates.push({urls:{},condition:null,name:"initial",content:d})):d.saved&&1==g.candidates.length&&(d.saved=!1),g.initialContent=d,d.saved&&(d.content=a.innerHTML),a.lazyInclude=g,g.candidates.length>1?c.aC(a,"lazyconditionalinclude"):c.rC(a,"lazyconditionalinclude")),g}function g(b,c){var d=!c.condition;return c.condition&&(h(),x[c.name]?d=!0:a.matchMedia&&"string"==typeof c.condition?d=(matchMedia(c.condition)||{}).matches:"function"==typeof c.condition&&(d=c.condition(b,c))),d}function h(){var a;x||(w||(w=b.querySelector(v.contentElement)),w?(a=(G(w,":after").getPropertyValue("content")||"none").replace(D,""),x={},a&&(x[a]=1),(a=(G(w,":before").getPropertyValue("content")||"none").replace(D,""))&&(x[a]=1)):x={})}function i(a){var b,c,d=a.lazyInclude;if(d&&d.candidates)for(b=0;b<d.candidates.length&&(c=d.candidates[b],!g(a,c));b++);return c&&c!=d.current||(c=null),c}function j(a,b){var c=new XMLHttpRequest;c.addEventListener("readystatechange",function(){var a=this.DONE||4;this.readyState===a&&(b(c),c=null)},!1),c.open.apply(c,a.openArgs),c.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.xhrModifier&&a.xhrModifier(c,a.candidate),c.send(a.sendData)}function k(a,b){a=a.split("|,|");var d=a.length-1;c.cfg.requireJs?c.cfg.requireJs(a,b):a.forEach(function(a,c){m(a,c==d?b:null)})}function l(a,b){c.cfg.systemJs?c.cfg.systemJs(a,b):m(a,b)}function m(a,c,d){if(!z[a]){var e=b.createElement(!0===c?"script":"link"),f=b.getElementsByTagName("script")[0];c?(e.src=a,e.async=!1):(e.rel="stylesheet",e.href=a),f.parentNode.insertBefore(e,f),z[a]=!0,z[e.href]=!0}}function n(a){a=a.split("|,|"),a.forEach(m)}function o(a){a&&"function"==typeof a.lazytransform&&a.lazytransform(this)}function p(a){a&&"function"==typeof a.lazyunload&&a.lazyunload(this)}function q(a){a&&"function"==typeof a.lazyload&&a.lazyload(this)}function r(a,b){var d,e,f,g=a.lazyInclude.current||null,h={candidate:b,openArgs:["GET",b.urls.include,!0],sendData:null,xhrModifier:null,content:b.content&&b.content.content||b.content,oldCandidate:g};if(c.fire(a,"lazyincludeload",h).defaultPrevented)return void H.d();if(d=function(){var d,h=e.status,i=e.content||e.responseText,j=!(null!=i||!g||!g.urls.include),k=!0;"false"===a.dataset.insert&&(k=!1);var l={candidate:b,content:i,text:e.responseText||e.content,response:e.response,xml:e.responseXML,isSuccess:!("status"in e)||(h>=200&&h<300||304===h),oldCandidate:g,insert:k,resetHTML:j},m={target:a,details:l,detail:l};b.modules=f,g&&g.modules&&(g.modules.forEach(p,m),g.modules=null,l.resetHTML&&null==l.content&&b.initial&&b.initial.saved&&(l.content=b.initial.content)),f.forEach(o,m),d=c.fire(a,"lazyincludeloaded",l),l.insert&&l.isSuccess&&!d.defaultPrevented&&null!=l.content&&l.content!=a.innerHTML&&(a.innerHTML=l.content),H.d(),f.forEach(q,m),setTimeout(function(){c.fire(a,"lazyincluded",l)}),e=null,f=null},a.lazyInclude.current=b,a.setAttribute("data-currentinclude",b.name),b.urls.css&&n(b.urls.css),null==h.content&&b.urls.include?j(h,function(a){e=a,f&&d()}):e=h,b.urls.amd||b.urls.module){var i=function(){f=Array.prototype.slice.call(arguments),e&&d()};b.urls.amd?k(b.urls.amd,i):l(b.urls.module,i)}else f=[];e&&f&&d()}function s(a){var b;if(f(a).candidates.length&&E.contains(a))return b=i(a),b&&r(a,b),!0}function t(a){a.detail.instance==c&&!a.defaultPrevented&&a.target.getAttribute("data-include")&&(H.q(a.target),a.detail.firesLoad=!0)}if(b.getElementsByClassName){var u,v,w,x,y=/\s*,+\s+/,z={},A=/\s+/,B=/^(amd|css|module)\:(.+)/i,C=/(.+)\s+(\(\s*(.+)\s*\))/,D=/['"]/g,E=b.documentElement,F=b.getElementsByClassName("lazyconditionalinclude"),G=function(b,c){var d=b.ownerDocument.defaultView;return d.opener||(d=a),d.getComputedStyle(b,c||null)||{getPropertyValue:function(){},isNull:!0}},H=function(){var a=2,b=a,c=0,d=0,e=[],f=function(){var a,b=function(){e.length&&(c=0,e.d())};return function(){clearTimeout(a),a=setTimeout(b,999)}}();return{q:function(a){var g=null==a.getAttribute("data-lazyqueue");g&&(d++,b=3),c>b?e[g?"unshift":"push"](a):s(a)&&(c++,f())},d:function(){if(c&&c--,d>0&&(--d||(b=a)),!(c>b)){for(;e.length;)if(s(e.shift())){c++;break}f()}}}}(),I=function(){var a,b=function(){for(var a=0,b=F.length;a<b;a++)!c.hC(F[a],u.lazyClass)&&i(F[a])&&c.aC(F[a],u.lazyClass)};return function(c){clearTimeout(a),x=null,a=setTimeout(b,"resize"==c.type?31:0)}}();u=c&&c.cfg||a.lazySizesConfig,u||(u={},a.lazySizesConfig=u),u.include||(u.include={}),v=u.include,v.contentElement||(v.contentElement="html"),v.conditions||(v.conditions={}),v.map||(v.map={}),addEventListener("lazybeforeunveil",t,!1),addEventListener("resize",I,!1),addEventListener("lazyrefreshincludes",I,!1)}})}),System.registerDynamic("npm:waypoints@4.0.1.json",[],!0,function(){return{main:"lib/jquery.waypoints.min.js",meta:{"lib/noframework.waypoints.min.js":{exports:"Waypoint",format:"global"},"lib/jquery.waypoints.min.js.js":{deps:["jquery"],format:"global"}},format:"cjs"}}),System.registerDynamic("npm:waypoints@4.0.1/lib/jquery.waypoints.min.js",[],!0,function(a,b,c){this||self;!function(){"use strict";function a(d){if(!d)throw new Error("No options passed to Waypoint constructor");if(!d.element)throw new Error("No element option passed to Waypoint constructor");if(!d.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+b,this.options=a.Adapter.extend({},a.defaults,d),this.element=this.options.element,this.adapter=new a.Adapter(this.element),this.callback=d.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=a.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=a.Context.findOrCreateByElement(this.options.context),a.offsetAliases[this.options.offset]&&(this.options.offset=a.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),c[this.key]=this,b+=1}var b=0,c={};a.prototype.queueTrigger=function(a){this.group.queueTrigger(this,a)},a.prototype.trigger=function(a){this.enabled&&this.callback&&this.callback.apply(this,a)},a.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete c[this.key]},a.prototype.disable=function(){return this.enabled=!1,this},a.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},a.prototype.next=function(){return this.group.next(this)},a.prototype.previous=function(){return this.group.previous(this)},a.invokeAll=function(a){var b=[];for(var d in c)b.push(c[d]);for(var e=0,f=b.length;f>e;e++)b[e][a]()},a.destroyAll=function(){a.invokeAll("destroy")},a.disableAll=function(){a.invokeAll("disable")},a.enableAll=function(){a.Context.refreshAll();for(var b in c)c[b].enabled=!0;return this},a.refreshAll=function(){a.Context.refreshAll()},a.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},a.viewportWidth=function(){return document.documentElement.clientWidth},a.adapters=[],a.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},a.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=a}(),function(){"use strict";function a(a){window.setTimeout(a,1e3/60)}function b(a){this.element=a,this.Adapter=e.Adapter,this.adapter=new this.Adapter(a),this.key="waypoint-context-"+c,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},a.waypointContextKey=this.key,d[a.waypointContextKey]=this,c+=1,e.windowContext||(e.windowContext=!0,e.windowContext=new b(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var c=0,d={},e=window.Waypoint,f=window.onload;b.prototype.add=function(a){var b=a.options.horizontal?"horizontal":"vertical";this.waypoints[b][a.key]=a,this.refresh()},b.prototype.checkEmpty=function(){var a=this.Adapter.isEmptyObject(this.waypoints.horizontal),b=this.Adapter.isEmptyObject(this.waypoints.vertical),c=this.element==this.element.window;a&&b&&!c&&(this.adapter.off(".waypoints"),delete d[this.key])},b.prototype.createThrottledResizeHandler=function(){function a(){b.handleResize(),b.didResize=!1}var b=this;this.adapter.on("resize.waypoints",function(){b.didResize||(b.didResize=!0,e.requestAnimationFrame(a))})},b.prototype.createThrottledScrollHandler=function(){function a(){b.handleScroll(),b.didScroll=!1}var b=this;this.adapter.on("scroll.waypoints",function(){(!b.didScroll||e.isTouch)&&(b.didScroll=!0,e.requestAnimationFrame(a))})},b.prototype.handleResize=function(){e.Context.refreshAll()},b.prototype.handleScroll=function(){var a={},b={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var c in b){var d=b[c],e=d.newScroll>d.oldScroll,f=e?d.forward:d.backward;for(var g in this.waypoints[c]){var h=this.waypoints[c][g];if(null!==h.triggerPoint){var i=d.oldScroll<h.triggerPoint,j=d.newScroll>=h.triggerPoint,k=i&&j,l=!i&&!j;(k||l)&&(h.queueTrigger(f),a[h.group.id]=h.group)}}}for(var m in a)a[m].flushTriggers();this.oldScroll={x:b.horizontal.newScroll,y:b.vertical.newScroll}},b.prototype.innerHeight=function(){return this.element==this.element.window?e.viewportHeight():this.adapter.innerHeight()},b.prototype.remove=function(a){delete this.waypoints[a.axis][a.key],this.checkEmpty()},b.prototype.innerWidth=function(){return this.element==this.element.window?e.viewportWidth():this.adapter.innerWidth()},b.prototype.destroy=function(){var a=[];for(var b in this.waypoints)for(var c in this.waypoints[b])a.push(this.waypoints[b][c]);for(var d=0,e=a.length;e>d;d++)a[d].destroy()},b.prototype.refresh=function(){var a,b=this.element==this.element.window,c=b?void 0:this.adapter.offset(),d={};this.handleScroll(),a={horizontal:{contextOffset:b?0:c.left,contextScroll:b?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:b?0:c.top,contextScroll:b?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var f in a){var g=a[f];for(var h in this.waypoints[f]){var i,j,k,l,m,n=this.waypoints[f][h],o=n.options.offset,p=n.triggerPoint,q=0,r=null==p;n.element!==n.element.window&&(q=n.adapter.offset()[g.offsetProp]),"function"==typeof o?o=o.apply(n):"string"==typeof o&&(o=parseFloat(o),n.options.offset.indexOf("%")>-1&&(o=Math.ceil(g.contextDimension*o/100))),i=g.contextScroll-g.contextOffset,n.triggerPoint=Math.floor(q+i-o),j=p<g.oldScroll,k=n.triggerPoint>=g.oldScroll,l=j&&k,m=!j&&!k,!r&&l?(n.queueTrigger(g.backward),d[n.group.id]=n.group):!r&&m?(n.queueTrigger(g.forward),d[n.group.id]=n.group):r&&g.oldScroll>=n.triggerPoint&&(n.queueTrigger(g.forward),d[n.group.id]=n.group)}}return e.requestAnimationFrame(function(){for(var a in d)d[a].flushTriggers()}),this},b.findOrCreateByElement=function(a){return b.findByElement(a)||new b(a)},b.refreshAll=function(){for(var a in d)d[a].refresh()},b.findByElement=function(a){return d[a.waypointContextKey]},window.onload=function(){f&&f(),b.refreshAll()},e.requestAnimationFrame=function(b){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||a).call(window,b)},e.Context=b}(),function(){"use strict";function a(a,b){return a.triggerPoint-b.triggerPoint}function b(a,b){return b.triggerPoint-a.triggerPoint}function c(a){this.name=a.name,this.axis=a.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),d[this.axis][this.name]=this}var d={vertical:{},horizontal:{}},e=window.Waypoint;c.prototype.add=function(a){this.waypoints.push(a)},c.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},c.prototype.flushTriggers=function(){for(var c in this.triggerQueues){var d=this.triggerQueues[c],e="up"===c||"left"===c;d.sort(e?b:a);for(var f=0,g=d.length;g>f;f+=1){var h=d[f];(h.options.continuous||f===d.length-1)&&h.trigger([c])}}this.clearTriggerQueues()},c.prototype.next=function(b){this.waypoints.sort(a);var c=e.Adapter.inArray(b,this.waypoints);return c===this.waypoints.length-1?null:this.waypoints[c+1]},c.prototype.previous=function(b){this.waypoints.sort(a);var c=e.Adapter.inArray(b,this.waypoints);return c?this.waypoints[c-1]:null},c.prototype.queueTrigger=function(a,b){this.triggerQueues[b].push(a)},c.prototype.remove=function(a){var b=e.Adapter.inArray(a,this.waypoints);b>-1&&this.waypoints.splice(b,1)},c.prototype.first=function(){return this.waypoints[0]},c.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},c.findOrCreate=function(a){return d[a.axis][a.name]||new c(a)},e.Group=c}(),function(){"use strict";function a(a){this.$element=b(a)}var b=window.jQuery,c=window.Waypoint;b.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(b,c){a.prototype[c]=function(){var a=Array.prototype.slice.call(arguments);return this.$element[c].apply(this.$element,a)}}),b.each(["extend","inArray","isEmptyObject"],function(c,d){a[d]=b[d]}),c.adapters.push({name:"jquery",Adapter:a}),c.Adapter=a}(),function(){"use strict";function a(a){return function(){var c=[],d=arguments[0];return a.isFunction(arguments[0])&&(d=a.extend({},arguments[1]),d.handler=arguments[0]),this.each(function(){var e=a.extend({},d,{element:this});"string"==typeof e.context&&(e.context=a(this).closest(e.context)[0]),c.push(new b(e))}),c}}var b=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=a(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=a(window.Zepto))}()}),System.register("citylab/js/lib/namespace.js",["uuid"],function(a,b){"use strict";var c,d;return{setters:[function(a){c=a.default}],execute:function(){d=Object.defineProperties({},{page_view_id:{value:c.v4(),writable:!1}}),window.CityLab=Object.assign(d,window.CityLab)}}}),System.registerDynamic("npm:jquery@3.3.1.json",[],!0,function(){return{main:"dist/jquery.js",format:"amd",meta:{"*.json":{format:"json"}}}}),function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";function c(a,b,c){b=b||ga;var d,e=b.createElement("script");if(e.text=a,c)for(d in ua)c[d]&&(e[d]=c[d]);b.head.appendChild(e).parentNode.removeChild(e)}function d(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?ma[na.call(a)]||"object":typeof a}function e(a){var b=!!a&&"length"in a&&a.length,c=d(a);return!sa(a)&&!ta(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}function f(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}function g(a,b,c){return sa(b)?wa.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?wa.grep(a,function(a){return a===b!==c}):"string"!=typeof b?wa.grep(a,function(a){return la.call(b,a)>-1!==c}):wa.filter(b,a,c)}function h(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}function i(a){var b={};return wa.each(a.match(Ha)||[],function(a,c){b[c]=!0}),b}function j(a){return a}function k(a){throw a}function l(a,b,c,d){var e;try{a&&sa(e=a.promise)?e.call(a).done(b).fail(c):a&&sa(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}function m(){ga.removeEventListener("DOMContentLoaded",m),a.removeEventListener("load",m),wa.ready()}function n(a,b){return b.toUpperCase()}function o(a){return a.replace(La,"ms-").replace(Ma,n)}function p(){this.expando=wa.expando+p.uid++}function q(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Qa.test(a)?JSON.parse(a):a)}function r(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Ra,"-$&").toLowerCase(),"string"==typeof(c=a.getAttribute(d))){try{c=q(c)}catch(a){}Pa.set(a,b,c)}else c=void 0;return c}function s(a,b,c,d){var e,f,g=20,h=d?function(){return d.cur()}:function(){return wa.css(a,b,"")},i=h(),j=c&&c[3]||(wa.cssNumber[b]?"":"px"),k=(wa.cssNumber[b]||"px"!==j&&+i)&&Ta.exec(wa.css(a,b));if(k&&k[3]!==j){for(i/=2,j=j||k[3],k=+i||1;g--;)wa.style(a,b,k+j),(1-f)*(1-(f=h()/i||.5))<=0&&(g=0),k/=f;k*=2,wa.style(a,b,k+j),c=c||[]}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}function t(a){var b,c=a.ownerDocument,d=a.nodeName,e=Xa[d];return e||(b=c.body.appendChild(c.createElement(d)),e=wa.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),Xa[d]=e,e)}function u(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=Oa.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&Va(d)&&(e[f]=t(d))):"none"!==c&&(e[f]="none",Oa.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}function v(a,b){var c;return c=void 0!==a.getElementsByTagName?a.getElementsByTagName(b||"*"):void 0!==a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&f(a,b)?wa.merge([a],c):c}function w(a,b){for(var c=0,d=a.length;c<d;c++)Oa.set(a[c],"globalEval",!b||Oa.get(b[c],"globalEval"))}function x(a,b,c,e,f){for(var g,h,i,j,k,l,m=b.createDocumentFragment(),n=[],o=0,p=a.length;o<p;o++)if((g=a[o])||0===g)if("object"===d(g))wa.merge(n,g.nodeType?[g]:g);else if(ab.test(g)){for(h=h||m.appendChild(b.createElement("div")),i=(Za.exec(g)||["",""])[1].toLowerCase(),j=_a[i]||_a._default,h.innerHTML=j[1]+wa.htmlPrefilter(g)+j[2],l=j[0];l--;)h=h.lastChild;wa.merge(n,h.childNodes),h=m.firstChild,h.textContent=""}else n.push(b.createTextNode(g));for(m.textContent="",o=0;g=n[o++];)if(e&&wa.inArray(g,e)>-1)f&&f.push(g);else if(k=wa.contains(g.ownerDocument,g),h=v(m.appendChild(g),"script"),k&&w(h),c)for(l=0;g=h[l++];)$a.test(g.type||"")&&c.push(g);return m}function y(){return!0}function z(){return!1}function A(){try{return ga.activeElement}catch(a){}}function B(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)B(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),!1===e)e=z;else if(!e)return a;return 1===f&&(g=e,e=function(a){return wa().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=wa.guid++)),a.each(function(){wa.event.add(this,b,e,d,c)})}function C(a,b){return f(a,"table")&&f(11!==b.nodeType?b:b.firstChild,"tr")?wa(a).children("tbody")[0]||a:a}function D(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function E(a){return"true/"===(a.type||"").slice(0,5)?a.type=a.type.slice(5):a.removeAttribute("type"),a}function F(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(Oa.hasData(a)&&(f=Oa.access(a),g=Oa.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)wa.event.add(b,e,j[e][c])}Pa.hasData(a)&&(h=Pa.access(a),i=wa.extend({},h),Pa.set(b,i))}}function G(a,b){var c=b.nodeName.toLowerCase();"input"===c&&Ya.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function H(a,b,d,e){b=ja.apply([],b);var f,g,h,i,j,k,l=0,m=a.length,n=m-1,o=b[0],p=sa(o);if(p||m>1&&"string"==typeof o&&!ra.checkClone&&hb.test(o))return a.each(function(c){var f=a.eq(c);p&&(b[0]=o.call(this,c,f.html())),H(f,b,d,e)});if(m&&(f=x(b,a[0].ownerDocument,!1,a,e),g=f.firstChild,1===f.childNodes.length&&(f=g),g||e)){for(h=wa.map(v(f,"script"),D),i=h.length;l<m;l++)j=f,l!==n&&(j=wa.clone(j,!0,!0),i&&wa.merge(h,v(j,"script"))),d.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,wa.map(h,E),l=0;l<i;l++)j=h[l],$a.test(j.type||"")&&!Oa.access(j,"globalEval")&&wa.contains(k,j)&&(j.src&&"module"!==(j.type||"").toLowerCase()?wa._evalUrl&&wa._evalUrl(j.src):c(j.textContent.replace(ib,""),k,j))}return a}function I(a,b,c){for(var d,e=b?wa.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||wa.cleanData(v(d)),d.parentNode&&(c&&wa.contains(d.ownerDocument,d)&&w(v(d,"script")),d.parentNode.removeChild(d));return a}function J(a,b,c){var d,e,f,g,h=a.style;return c=c||kb(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||wa.contains(a.ownerDocument,a)||(g=wa.style(a,b)),!ra.pixelBoxStyles()&&jb.test(g)&&lb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function K(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function L(a){if(a in rb)return a;for(var b=a[0].toUpperCase()+a.slice(1),c=qb.length;c--;)if((a=qb[c]+b)in rb)return a}function M(a){var b=wa.cssProps[a];return b||(b=wa.cssProps[a]=L(a)||a),b}function N(a,b,c){var d=Ta.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function O(a,b,c,d,e,f){var g="width"===b?1:0,h=0,i=0;if(c===(d?"border":"content"))return 0;for(;g<4;g+=2)"margin"===c&&(i+=wa.css(a,c+Ua[g],!0,e)),d?("content"===c&&(i-=wa.css(a,"padding"+Ua[g],!0,e)),"margin"!==c&&(i-=wa.css(a,"border"+Ua[g]+"Width",!0,e))):(i+=wa.css(a,"padding"+Ua[g],!0,e),"padding"!==c?i+=wa.css(a,"border"+Ua[g]+"Width",!0,e):h+=wa.css(a,"border"+Ua[g]+"Width",!0,e));return!d&&f>=0&&(i+=Math.max(0,Math.ceil(a["offset"+b[0].toUpperCase()+b.slice(1)]-f-i-h-.5))),i}function P(a,b,c){var d=kb(a),e=J(a,b,d),f="border-box"===wa.css(a,"boxSizing",!1,d),g=f;if(jb.test(e)){if(!c)return e;e="auto"}return g=g&&(ra.boxSizingReliable()||e===a.style[b]),("auto"===e||!parseFloat(e)&&"inline"===wa.css(a,"display",!1,d))&&(e=a["offset"+b[0].toUpperCase()+b.slice(1)],g=!0),(e=parseFloat(e)||0)+O(a,b,c||(f?"border":"content"),g,d,e)+"px"}function Q(a,b,c,d,e){return new Q.prototype.init(a,b,c,d,e)}function R(){tb&&(!1===ga.hidden&&a.requestAnimationFrame?a.requestAnimationFrame(R):a.setTimeout(R,wa.fx.interval),wa.fx.tick())}function S(){return a.setTimeout(function(){sb=void 0}),sb=Date.now()}function T(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=Ua[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function U(a,b,c){for(var d,e=(X.tweeners[b]||[]).concat(X.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function V(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&Va(a),q=Oa.get(a,"fxshow");c.queue||(g=wa._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,wa.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],ub.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||wa.style(a,d)}if((i=!wa.isEmptyObject(b))||!wa.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=Oa.get(a,"display")),k=wa.css(a,"display"),"none"===k&&(j?k=j:(u([a],!0),j=a.style.display||j,k=wa.css(a,"display"),u([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===wa.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=Oa.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&u([a],!0),m.done(function(){p||u([a]),Oa.remove(a,"fxshow");for(d in n)wa.style(a,d,n[d])})),i=U(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function W(a,b){var c,d,e,f,g;for(c in a)if(d=o(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),(g=wa.cssHooks[d])&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function X(a,b,c){var d,e,f=0,g=X.prefilters.length,h=wa.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=sb||S(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:wa.extend({},b),opts:wa.extend(!0,{specialEasing:{},easing:wa.easing._default},c),originalProperties:b,originalOptions:c,startTime:sb||S(),duration:c.duration,tweens:[],createTween:function(b,c){var d=wa.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(W(k,j.opts.specialEasing);f<g;f++)if(d=X.prefilters[f].call(j,a,k,j.opts))return sa(d.stop)&&(wa._queueHooks(j.elem,j.opts.queue).stop=d.stop.bind(d)),d;return wa.map(k,U,j),sa(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),wa.fx.timer(wa.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}function Y(a){return(a.match(Ha)||[]).join(" ")}function Z(a){return a.getAttribute&&a.getAttribute("class")||""}function $(a){return Array.isArray(a)?a:"string"==typeof a?a.match(Ha)||[]:[]}function _(a,b,c,e){var f;if(Array.isArray(b))wa.each(b,function(b,d){c||Gb.test(a)?e(a,d):_(a+"["+("object"==typeof d&&null!=d?b:"")+"]",d,c,e)});else if(c||"object"!==d(b))e(a,b);else for(f in b)_(a+"["+f+"]",b[f],c,e)}function aa(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(Ha)||[];if(sa(c))for(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function ba(a,b,c,d){function e(h){var i;return f[h]=!0,wa.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===Sb;return e(b.dataTypes[0])||!f["*"]&&e("*")}function ca(a,b){var c,d,e=wa.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&wa.extend(!0,a,d),a}function da(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function ea(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(!(g=j[i+" "+f]||j["* "+f]))for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){!0===g?g=j[e]:!0!==j[e]&&(f=h[0],k.unshift(h[1]));break}if(!0!==g)if(g&&a.throws)b=g(b);else try{b=g(b)}catch(a){return{state:"parsererror",error:g?a:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}var fa=[],ga=a.document,ha=Object.getPrototypeOf,ia=fa.slice,ja=fa.concat,ka=fa.push,la=fa.indexOf,ma={},na=ma.toString,oa=ma.hasOwnProperty,pa=oa.toString,qa=pa.call(Object),ra={},sa=function(a){return"function"==typeof a&&"number"!=typeof a.nodeType},ta=function(a){return null!=a&&a===a.window},ua={type:!0,src:!0,noModule:!0},va="3.3.1",wa=function(a,b){return new wa.fn.init(a,b)},xa=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;wa.fn=wa.prototype={jquery:va,constructor:wa,length:0,toArray:function(){return ia.call(this)},get:function(a){return null==a?ia.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=wa.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return wa.each(this,a)},map:function(a){return this.pushStack(wa.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(ia.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:ka,sort:fa.sort,splice:fa.splice},wa.extend=wa.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||sa(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(wa.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&wa.isPlainObject(c)?c:{},g[b]=wa.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},wa.extend({expando:"jQuery"+(va+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==na.call(a))&&(!(b=ha(a))||"function"==typeof(c=oa.call(b,"constructor")&&b.constructor)&&pa.call(c)===qa)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},globalEval:function(a){c(a)},each:function(a,b){var c,d=0;if(e(a))for(c=a.length;d<c&&!1!==b.call(a[d],d,a[d]);d++);else for(d in a)if(!1===b.call(a[d],d,a[d]))break;return a},trim:function(a){return null==a?"":(a+"").replace(xa,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(e(Object(a))?wa.merge(c,"string"==typeof a?[a]:a):ka.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:la.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d=[],e=0,f=a.length,g=!c;e<f;e++)!b(a[e],e)!==g&&d.push(a[e]);return d},map:function(a,b,c){var d,f,g=0,h=[];if(e(a))for(d=a.length;g<d;g++)null!=(f=b(a[g],g,c))&&h.push(f);else for(g in a)null!=(f=b(a[g],g,c))&&h.push(f);return ja.apply([],h)},guid:1,support:ra}),"function"==typeof Symbol&&(wa.fn[Symbol.iterator]=fa[Symbol.iterator]),wa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){ma["[object "+b+"]"]=b.toLowerCase()});var ya=function(a){function b(a,b,c,d){var e,f,g,h,i,j,k,m=b&&b.ownerDocument,o=b?b.nodeType:9;if(c=c||[],"string"!=typeof a||!a||1!==o&&9!==o&&11!==o)return c;if(!d&&((b?b.ownerDocument||b:P)!==H&&G(b),b=b||H,J)){if(11!==o&&(i=ra.exec(a)))if(e=i[1]){if(9===o){if(!(g=b.getElementById(e)))return c;if(g.id===e)return c.push(g),c}else if(m&&(g=m.getElementById(e))&&N(b,g)&&g.id===e)return c.push(g),c}else{if(i[2])return $.apply(c,b.getElementsByTagName(a)),c;if((e=i[3])&&w.getElementsByClassName&&b.getElementsByClassName)return $.apply(c,b.getElementsByClassName(e)),c}if(w.qsa&&!U[a+" "]&&(!K||!K.test(a))){if(1!==o)m=b,k=a;else if("object"!==b.nodeName.toLowerCase()){for((h=b.getAttribute("id"))?h=h.replace(va,wa):b.setAttribute("id",h=O),j=A(a),f=j.length;f--;)j[f]="#"+h+" "+n(j[f]);k=j.join(","),m=sa.test(a)&&l(b.parentNode)||b}if(k)try{return $.apply(c,m.querySelectorAll(k)),c}catch(a){}finally{h===O&&b.removeAttribute("id")}}}return C(a.replace(ha,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>x.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[O]=!0,a}function e(a){var b=H.createElement("fieldset");try{return!!a(b)}catch(a){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=c.length;d--;)x.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return function(b){return"form"in b?b.parentNode&&!1===b.disabled?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ya(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function k(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function l(a){return a&&void 0!==a.getElementsByTagName&&a}function m(){}function n(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function o(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=R++;return b.first?function(b,c,e){for(;b=b[d];)if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[Q,h];if(i){for(;b=b[d];)if((1===b.nodeType||g)&&a(b,c,i))return!0}else for(;b=b[d];)if(1===b.nodeType||g)if(l=b[O]||(b[O]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===Q&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function p(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function q(a,c,d){for(var e=0,f=c.length;e<f;e++)b(a,c[e],d);return d}function r(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function s(a,b,c,e,f,g){return e&&!e[O]&&(e=s(e)),f&&!f[O]&&(f=s(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=d||q(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?p:r(p,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=r(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?aa(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=r(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):$.apply(g,t)})}function t(a){for(var b,c,d,e=a.length,f=x.relative[a[0].type],g=f||x.relative[" "],h=f?1:0,i=o(function(a){return a===b},g,!0),j=o(function(a){return aa(b,a)>-1},g,!0),k=[function(a,c,d){var e=!f&&(d||c!==D)||((b=c).nodeType?i(a,c,d):j(a,c,d));return b=null,e}];h<e;h++)if(c=x.relative[a[h].type])k=[o(p(k),c)];else{if(c=x.filter[a[h].type].apply(null,a[h].matches),c[O]){for(d=++h;d<e&&!x.relative[a[d].type];d++);return s(h>1&&p(k),h>1&&n(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ha,"$1"),c,h<d&&t(a.slice(h,d)),d<e&&t(a=a.slice(d)),d<e&&n(a))}k.push(c)}return p(k)}function u(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],q=[],s=D,t=d||f&&x.find.TAG("*",j),u=Q+=null==s?1:Math.random()||.1,v=t.length;for(j&&(D=g===H||g||j);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0,g||k.ownerDocument===H||(G(k),h=!J);m=a[l++];)if(m(k,g||H,h)){i.push(k);break}j&&(Q=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,q,g,h);if(d){if(n>0)for(;o--;)p[o]||q[o]||(q[o]=Y.call(i));q=r(q)}$.apply(i,q),j&&!d&&q.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(Q=u,D=s),p};return e?d(g):g}var v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O="sizzle"+1*new Date,P=a.document,Q=0,R=0,S=c(),T=c(),U=c(),V=function(a,b){return a===b&&(F=!0),0},W={}.hasOwnProperty,X=[],Y=X.pop,Z=X.push,$=X.push,_=X.slice,aa=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},ba="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ca="[\\x20\\t\\r\\n\\f]",da="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",ea="\\["+ca+"*("+da+")(?:"+ca+"*([*^$|!~]?=)"+ca+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+da+"))|)"+ca+"*\\]",fa=":("+da+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ea+")*)|.*)\\)|)",ga=new RegExp(ca+"+","g"),ha=new RegExp("^"+ca+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ca+"+$","g"),ia=new RegExp("^"+ca+"*,"+ca+"*"),ja=new RegExp("^"+ca+"*([>+~]|"+ca+")"+ca+"*"),ka=new RegExp("="+ca+"*([^\\]'\"]*?)"+ca+"*\\]","g"),la=new RegExp(fa),ma=new RegExp("^"+da+"$"),na={ID:new RegExp("^#("+da+")"),CLASS:new RegExp("^\\.("+da+")"),TAG:new RegExp("^("+da+"|[*])"),ATTR:new RegExp("^"+ea),PSEUDO:new RegExp("^"+fa),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ca+"*(even|odd|(([+-]|)(\\d*)n|)"+ca+"*(?:([+-]|)"+ca+"*(\\d+)|))"+ca+"*\\)|)","i"),bool:new RegExp("^(?:"+ba+")$","i"),needsContext:new RegExp("^"+ca+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ca+"*((?:-\\d)?\\d*)"+ca+"*\\)|)(?=[^-]|$)","i")},oa=/^(?:input|select|textarea|button)$/i,pa=/^h\d$/i,qa=/^[^{]+\{\s*\[native \w/,ra=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,sa=/[+~]/,ta=new RegExp("\\\\([\\da-f]{1,6}"+ca+"?|("+ca+")|.)","ig"),ua=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},va=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,wa=function(a,b){return b?"\0"===a?"�":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},xa=function(){G()},ya=o(function(a){return!0===a.disabled&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{$.apply(X=_.call(P.childNodes),P.childNodes),X[P.childNodes.length].nodeType}catch(a){$={apply:X.length?function(a,b){Z.apply(a,_.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}w=b.support={},z=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},G=b.setDocument=function(a){var b,c,d=a?a.ownerDocument||a:P;return d!==H&&9===d.nodeType&&d.documentElement?(H=d,I=H.documentElement,J=!z(H),P!==H&&(c=H.defaultView)&&c.top!==c&&(c.addEventListener?c.addEventListener("unload",xa,!1):c.attachEvent&&c.attachEvent("onunload",xa)),w.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),w.getElementsByTagName=e(function(a){return a.appendChild(H.createComment("")),!a.getElementsByTagName("*").length}),w.getElementsByClassName=qa.test(H.getElementsByClassName),w.getById=e(function(a){return I.appendChild(a).id=O,!H.getElementsByName||!H.getElementsByName(O).length}),w.getById?(x.filter.ID=function(a){var b=a.replace(ta,ua);return function(a){return a.getAttribute("id")===b}},x.find.ID=function(a,b){if(void 0!==b.getElementById&&J){var c=b.getElementById(a);return c?[c]:[]}}):(x.filter.ID=function(a){var b=a.replace(ta,ua);return function(a){var c=void 0!==a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},x.find.ID=function(a,b){if(void 0!==b.getElementById&&J){var c,d,e,f=b.getElementById(a);if(f){if((c=f.getAttributeNode("id"))&&c.value===a)return[f];for(e=b.getElementsByName(a),d=0;f=e[d++];)if((c=f.getAttributeNode("id"))&&c.value===a)return[f]}return[]}}),x.find.TAG=w.getElementsByTagName?function(a,b){return void 0!==b.getElementsByTagName?b.getElementsByTagName(a):w.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},x.find.CLASS=w.getElementsByClassName&&function(a,b){if(void 0!==b.getElementsByClassName&&J)return b.getElementsByClassName(a)},L=[],K=[],(w.qsa=qa.test(H.querySelectorAll))&&(e(function(a){I.appendChild(a).innerHTML="<a id='"+O+"'></a><select id='"+O+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&K.push("[*^$]="+ca+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||K.push("\\["+ca+"*(?:value|"+ba+")"),a.querySelectorAll("[id~="+O+"-]").length||K.push("~="),a.querySelectorAll(":checked").length||K.push(":checked"),a.querySelectorAll("a#"+O+"+*").length||K.push(".#.+[+~]")}),e(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=H.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&K.push("name"+ca+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&K.push(":enabled",":disabled"),I.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&K.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),K.push(",.*:")})),(w.matchesSelector=qa.test(M=I.matches||I.webkitMatchesSelector||I.mozMatchesSelector||I.oMatchesSelector||I.msMatchesSelector))&&e(function(a){w.disconnectedMatch=M.call(a,"*"),M.call(a,"[s!='']:x"),L.push("!=",fa)}),K=K.length&&new RegExp(K.join("|")),L=L.length&&new RegExp(L.join("|")),b=qa.test(I.compareDocumentPosition),N=b||qa.test(I.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},V=b?function(a,b){if(a===b)return F=!0,0;var c=!a.compareDocumentPosition-!b.compareDocumentPosition;return c||(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&c||!w.sortDetached&&b.compareDocumentPosition(a)===c?a===H||a.ownerDocument===P&&N(P,a)?-1:b===H||b.ownerDocument===P&&N(P,b)?1:E?aa(E,a)-aa(E,b):0:4&c?-1:1)}:function(a,b){if(a===b)return F=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===H?-1:b===H?1:e?-1:f?1:E?aa(E,a)-aa(E,b):0;if(e===f)return g(a,b);for(c=a;c=c.parentNode;)h.unshift(c);for(c=b;c=c.parentNode;)i.unshift(c);for(;h[d]===i[d];)d++;return d?g(h[d],i[d]):h[d]===P?-1:i[d]===P?1:0},H):H},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==H&&G(a),c=c.replace(ka,"='$1']"),w.matchesSelector&&J&&!U[c+" "]&&(!L||!L.test(c))&&(!K||!K.test(c)))try{var d=M.call(a,c);if(d||w.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(a){}return b(c,H,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==H&&G(a),N(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==H&&G(a);var c=x.attrHandle[b.toLowerCase()],d=c&&W.call(x.attrHandle,b.toLowerCase())?c(a,b,!J):void 0;return void 0!==d?d:w.attributes||!J?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.escape=function(a){return(a+"").replace(va,wa)},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(F=!w.detectDuplicates,E=!w.sortStable&&a.slice(0),a.sort(V),F){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return E=null,a},y=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=y(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=y(b);return c},x=b.selectors={cacheLength:50,createPseudo:d,match:na,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ta,ua),a[3]=(a[3]||a[4]||a[5]||"").replace(ta,ua),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return na.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&la.test(c)&&(b=A(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ta,ua).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=S[a+" "];return b||(b=new RegExp("(^|"+ca+")"+a+"("+ca+"|$)"))&&S(a,function(a){return b.test("string"==typeof a.className&&a.className||void 0!==a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:!c||(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f.replace(ga," ")+" ").indexOf(d)>-1:"|="===c&&(f===d||f.slice(0,d.length+1)===d+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){for(;p;){for(m=b;m=m[p];)if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(m=q,l=m[O]||(m[O]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===Q&&j[1],t=n&&j[2],m=n&&q.childNodes[n];m=++n&&m&&m[p]||(t=n=0)||o.pop();)if(1===m.nodeType&&++t&&m===b){k[a]=[Q,n,t];break}}else if(s&&(m=b,l=m[O]||(m[O]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===Q&&j[1],t=n),!1===t)for(;(m=++n&&m&&m[p]||(t=n=0)||o.pop())&&((h?m.nodeName.toLowerCase()!==r:1!==m.nodeType)||!++t||(s&&(l=m[O]||(m[O]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[Q,t]),m!==b)););return(t-=e)===d||t%d==0&&t/d>=0}}},PSEUDO:function(a,c){var e,f=x.pseudos[a]||x.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[O]?f(c):f.length>1?(e=[a,a,"",c],x.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=aa(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=B(a.replace(ha,"$1"));return e[O]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),b[0]=null,!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return a=a.replace(ta,ua),function(b){return(b.textContent||b.innerText||y(b)).indexOf(a)>-1}}),lang:d(function(a){return ma.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(ta,ua).toLowerCase(),function(b){var c;do{if(c=J?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return(c=c.toLowerCase())===a||0===c.indexOf(a+"-")}while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===I},focus:function(a){return a===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:j(!1),disabled:j(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,!0===a.selected},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!x.pseudos.empty(a)},header:function(a){return pa.test(a.nodeName)},input:function(a){return oa.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:k(function(){return[0]}),last:k(function(a,b){return[b-1]}),eq:k(function(a,b,c){return[c<0?c+b:c]}),even:k(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:k(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:k(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:k(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},x.pseudos.nth=x.pseudos.eq;for(v in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[v]=h(v);for(v in{submit:!0,reset:!0})x.pseudos[v]=i(v);return m.prototype=x.filters=x.pseudos,x.setFilters=new m,A=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=T[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=x.preFilter;h;){d&&!(e=ia.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=ja.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ha," ")}),h=h.slice(d.length));for(g in x.filter)!(e=na[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):T(a,i).slice(0)},B=b.compile=function(a,b){var c,d=[],e=[],f=U[a+" "];if(!f){for(b||(b=A(a)),c=b.length;c--;)f=t(b[c]),f[O]?d.push(f):e.push(f);f=U(a,u(e,d)),f.selector=a}return f},C=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,k=!d&&A(a=j.selector||a);if(c=c||[],1===k.length){if(f=k[0]=k[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&9===b.nodeType&&J&&x.relative[f[1].type]){if(!(b=(x.find.ID(g.matches[0].replace(ta,ua),b)||[])[0]))return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=na.needsContext.test(a)?0:f.length;e--&&(g=f[e],!x.relative[h=g.type]);)if((i=x.find[h])&&(d=i(g.matches[0].replace(ta,ua),sa.test(f[0].type)&&l(b.parentNode)||b))){if(f.splice(e,1),!(a=d.length&&n(f)))return $.apply(c,d),c;break}}return(j||B(a,k))(d,b,!J,c,!b||sa.test(a)&&l(b.parentNode)||b),c},w.sortStable=O.split("").sort(V).join("")===O,w.detectDuplicates=!!F,G(),w.sortDetached=e(function(a){return 1&a.compareDocumentPosition(H.createElement("fieldset"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),w.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(ba,function(a,b,c){var d;if(!c)return!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);wa.find=ya,wa.expr=ya.selectors,wa.expr[":"]=wa.expr.pseudos,wa.uniqueSort=wa.unique=ya.uniqueSort,wa.text=ya.getText,wa.isXMLDoc=ya.isXML,wa.contains=ya.contains,wa.escapeSelector=ya.escape;var za=function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&wa(a).is(c))break;d.push(a)}return d},Aa=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},Ba=wa.expr.match.needsContext,Ca=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;wa.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?wa.find.matchesSelector(d,a)?[d]:[]:wa.find.matches(a,wa.grep(b,function(a){return 1===a.nodeType}))},wa.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(wa(a).filter(function(){for(b=0;b<d;b++)if(wa.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)wa.find(a,e[b],c);return d>1?wa.uniqueSort(c):c},filter:function(a){return this.pushStack(g(this,a||[],!1))},not:function(a){return this.pushStack(g(this,a||[],!0))},is:function(a){return!!g(this,"string"==typeof a&&Ba.test(a)?wa(a):a||[],!1).length}});var Da,Ea=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(wa.fn.init=function(a,b,c){var d,e;if(!a)return this;if(c=c||Da,"string"==typeof a){if(!(d="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:Ea.exec(a))||!d[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(d[1]){if(b=b instanceof wa?b[0]:b,wa.merge(this,wa.parseHTML(d[1],b&&b.nodeType?b.ownerDocument||b:ga,!0)),Ca.test(d[1])&&wa.isPlainObject(b))for(d in b)sa(this[d])?this[d](b[d]):this.attr(d,b[d]);return this}return e=ga.getElementById(d[2]),e&&(this[0]=e,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):sa(a)?void 0!==c.ready?c.ready(a):a(wa):wa.makeArray(a,this)}).prototype=wa.fn,Da=wa(ga);var Fa=/^(?:parents|prev(?:Until|All))/,Ga={children:!0,contents:!0,next:!0,prev:!0};wa.fn.extend({has:function(a){var b=wa(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(wa.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&wa(a);if(!Ba.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&wa.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?wa.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?la.call(wa(a),this[0]):la.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(wa.uniqueSort(wa.merge(this.get(),wa(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),wa.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return za(a,"parentNode")},parentsUntil:function(a,b,c){return za(a,"parentNode",c)},next:function(a){return h(a,"nextSibling")},prev:function(a){return h(a,"previousSibling")},nextAll:function(a){return za(a,"nextSibling")},prevAll:function(a){return za(a,"previousSibling")},nextUntil:function(a,b,c){return za(a,"nextSibling",c)},prevUntil:function(a,b,c){return za(a,"previousSibling",c)},siblings:function(a){return Aa((a.parentNode||{}).firstChild,a)},children:function(a){return Aa(a.firstChild)},contents:function(a){return f(a,"iframe")?a.contentDocument:(f(a,"template")&&(a=a.content||a),wa.merge([],a.childNodes))}},function(a,b){wa.fn[a]=function(c,d){var e=wa.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=wa.filter(d,e)),this.length>1&&(Ga[a]||wa.uniqueSort(e),Fa.test(a)&&e.reverse()),this.pushStack(e)}});var Ha=/[^\x20\t\r\n\f]+/g;wa.Callbacks=function(a){a="string"==typeof a?i(a):wa.extend({},a);var b,c,e,f,g=[],h=[],j=-1,k=function(){for(f=f||a.once,e=b=!0;h.length;j=-1)for(c=h.shift();++j<g.length;)!1===g[j].apply(c[0],c[1])&&a.stopOnFalse&&(j=g.length,c=!1);a.memory||(c=!1),b=!1,f&&(g=c?[]:"")},l={add:function(){return g&&(c&&!b&&(j=g.length-1,h.push(c)),function b(c){wa.each(c,function(c,e){sa(e)?a.unique&&l.has(e)||g.push(e):e&&e.length&&"string"!==d(e)&&b(e)})}(arguments),c&&!b&&k()),this},remove:function(){return wa.each(arguments,function(a,b){for(var c;(c=wa.inArray(b,g,c))>-1;)g.splice(c,1),c<=j&&j--}),this},has:function(a){return a?wa.inArray(a,g)>-1:g.length>0},empty:function(){return g&&(g=[]),this},disable:function(){return f=h=[],g=c="",this},disabled:function(){return!g},lock:function(){return f=h=[],c||b||(g=c=""),this},locked:function(){return!!f},fireWith:function(a,c){return f||(c=c||[],c=[a,c.slice?c.slice():c],h.push(c),b||k()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!e}};return l},wa.extend({Deferred:function(b){var c=[["notify","progress",wa.Callbacks("memory"),wa.Callbacks("memory"),2],["resolve","done",wa.Callbacks("once memory"),wa.Callbacks("once memory"),0,"resolved"],["reject","fail",wa.Callbacks("once memory"),wa.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},catch:function(a){return e.then(null,a)},pipe:function(){var a=arguments;return wa.Deferred(function(b){wa.each(c,function(c,d){var e=sa(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&sa(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){function f(b,c,d,e){return function(){var h=this,i=arguments,l=function(){var a,l;if(!(b<g)){if((a=d.apply(h,i))===c.promise())throw new TypeError("Thenable self-resolution");l=a&&("object"==typeof a||"function"==typeof a)&&a.then,sa(l)?e?l.call(a,f(g,c,j,e),f(g,c,k,e)):(g++,l.call(a,f(g,c,j,e),f(g,c,k,e),f(g,c,j,c.notifyWith))):(d!==j&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},m=e?l:function(){try{l()}catch(a){wa.Deferred.exceptionHook&&wa.Deferred.exceptionHook(a,m.stackTrace),b+1>=g&&(d!==k&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?m():(wa.Deferred.getStackHook&&(m.stackTrace=wa.Deferred.getStackHook()),a.setTimeout(m))}}var g=0;return wa.Deferred(function(a){c[0][3].add(f(0,a,sa(e)?e:j,a.notifyWith)),c[1][3].add(f(0,a,sa(b)?b:j)),c[2][3].add(f(0,a,sa(d)?d:k))}).promise()},promise:function(a){return null!=a?wa.extend(a,e):e}},f={};return wa.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[3-a][3].disable,c[0][2].lock,c[0][3].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=ia.call(arguments),f=wa.Deferred(),g=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?ia.call(arguments):c,--b||f.resolveWith(d,e)}};if(b<=1&&(l(a,f.done(g(c)).resolve,f.reject,!b),"pending"===f.state()||sa(e[c]&&e[c].then)))return f.then();for(;c--;)l(e[c],g(c),f.reject);return f.promise()}});var Ia=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;wa.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Ia.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},wa.readyException=function(b){a.setTimeout(function(){throw b})};var Ja=wa.Deferred();wa.fn.ready=function(a){return Ja.then(a).catch(function(a){wa.readyException(a)}),this},wa.extend({isReady:!1,readyWait:1,ready:function(a){(!0===a?--wa.readyWait:wa.isReady)||(wa.isReady=!0,!0!==a&&--wa.readyWait>0||Ja.resolveWith(ga,[wa]))}}),wa.ready.then=Ja.then,"complete"===ga.readyState||"loading"!==ga.readyState&&!ga.documentElement.doScroll?a.setTimeout(wa.ready):(ga.addEventListener("DOMContentLoaded",m),a.addEventListener("load",m));var Ka=function(a,b,c,e,f,g,h){var i=0,j=a.length,k=null==c;if("object"===d(c)){f=!0;for(i in c)Ka(a,b,i,c[i],!0,g,h)}else if(void 0!==e&&(f=!0,sa(e)||(h=!0),k&&(h?(b.call(a,e),b=null):(k=b,b=function(a,b,c){return k.call(wa(a),c)})),b))for(;i<j;i++)b(a[i],c,h?e:e.call(a[i],i,b(a[i],c)));return f?a:k?b.call(a):j?b(a[0],c):g},La=/^-ms-/,Ma=/-([a-z])/g,Na=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};p.uid=1,p.prototype={cache:function(a){var b=a[this.expando];return b||(b={},Na(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[o(b)]=c;else for(d in b)e[o(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][o(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(o):(b=o(b),b=b in d?[b]:b.match(Ha)||[]),c=b.length;for(;c--;)delete d[b[c]]}(void 0===b||wa.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!wa.isEmptyObject(b)}};var Oa=new p,Pa=new p,Qa=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ra=/[A-Z]/g;wa.extend({hasData:function(a){return Pa.hasData(a)||Oa.hasData(a)},data:function(a,b,c){return Pa.access(a,b,c)},removeData:function(a,b){Pa.remove(a,b)},_data:function(a,b,c){return Oa.access(a,b,c)},_removeData:function(a,b){Oa.remove(a,b)}}),wa.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=Pa.get(f),1===f.nodeType&&!Oa.get(f,"hasDataAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=o(d.slice(5)),r(f,d,e[d])));Oa.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){Pa.set(this,a)}):Ka(this,function(b){var c;if(f&&void 0===b){if(void 0!==(c=Pa.get(f,a)))return c;if(void 0!==(c=r(f,a)))return c}else this.each(function(){Pa.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){Pa.remove(this,a)})}}),wa.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=Oa.get(a,b),c&&(!d||Array.isArray(c)?d=Oa.access(a,b,wa.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=wa.queue(a,b),d=c.length,e=c.shift(),f=wa._queueHooks(a,b),g=function(){wa.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return Oa.get(a,c)||Oa.access(a,c,{empty:wa.Callbacks("once memory").add(function(){Oa.remove(a,[b+"queue",c])})})}}),wa.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?wa.queue(this[0],a):void 0===b?this:this.each(function(){var c=wa.queue(this,a,b);wa._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&wa.dequeue(this,a)})},dequeue:function(a){return this.each(function(){wa.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=wa.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)(c=Oa.get(f[g],a+"queueHooks"))&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Sa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ta=new RegExp("^(?:([+-])=|)("+Sa+")([a-z%]*)$","i"),Ua=["Top","Right","Bottom","Left"],Va=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&wa.contains(a.ownerDocument,a)&&"none"===wa.css(a,"display")},Wa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Xa={};wa.fn.extend({show:function(){return u(this,!0)},hide:function(){return u(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){Va(this)?wa(this).show():wa(this).hide()})}});var Ya=/^(?:checkbox|radio)$/i,Za=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,$a=/^$|^module$|\/(?:java|ecma)script/i,_a={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};_a.optgroup=_a.option,_a.tbody=_a.tfoot=_a.colgroup=_a.caption=_a.thead,_a.th=_a.td;var ab=/<|&#?\w+;/;!function(){var a=ga.createDocumentFragment(),b=a.appendChild(ga.createElement("div")),c=ga.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),ra.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",ra.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var bb=ga.documentElement,cb=/^key/,db=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,eb=/^([^.]*)(?:\.(.+)|)/;wa.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=Oa.get(a);if(q)for(c.handler&&(f=c,c=f.handler,e=f.selector),e&&wa.find.matchesSelector(bb,e),c.guid||(c.guid=wa.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return void 0!==wa&&wa.event.triggered!==b.type?wa.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(Ha)||[""],j=b.length;j--;)h=eb.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=wa.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=wa.event.special[n]||{},k=wa.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&wa.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&!1!==l.setup.call(a,d,o,g)||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),wa.event.global[n]=!0)},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=Oa.hasData(a)&&Oa.get(a);if(q&&(i=q.events)){for(b=(b||"").match(Ha)||[""],j=b.length;j--;)if(h=eb.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=wa.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&!1!==l.teardown.call(a,o,q.handle)||wa.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)wa.event.remove(a,n+b[j],c,d,!0);wa.isEmptyObject(i)&&Oa.remove(a,"handle events")}},dispatch:function(a){var b,c,d,e,f,g,h=wa.event.fix(a),i=new Array(arguments.length),j=(Oa.get(this,"events")||{})[h.type]||[],k=wa.event.special[h.type]||{};for(i[0]=h,b=1;b<arguments.length;b++)i[b]=arguments[b];if(h.delegateTarget=this,!k.preDispatch||!1!==k.preDispatch.call(this,h)){for(g=wa.event.handlers.call(this,h,j),b=0;(e=g[b++])&&!h.isPropagationStopped();)for(h.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!h.isImmediatePropagationStopped();)h.rnamespace&&!h.rnamespace.test(f.namespace)||(h.handleObj=f,h.data=f.data,void 0!==(d=((wa.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,i))&&!1===(h.result=d)&&(h.preventDefault(),h.stopPropagation()));return k.postDispatch&&k.postDispatch.call(this,h),h.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||!0!==j.disabled)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?wa(e,this).index(j)>-1:wa.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(wa.Event.prototype,a,{enumerable:!0,configurable:!0,get:sa(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[wa.expando]?a:new wa.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==A()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===A()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&f(this,"input"))return this.click(),!1},_default:function(a){return f(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},wa.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},wa.Event=function(a,b){if(!(this instanceof wa.Event))return new wa.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&!1===a.returnValue?y:z,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&wa.extend(this,b),this.timeStamp=a&&a.timeStamp||Date.now(),this[wa.expando]=!0},wa.Event.prototype={constructor:wa.Event,isDefaultPrevented:z,isPropagationStopped:z,isImmediatePropagationStopped:z,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=y,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=y,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=y,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},wa.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&cb.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&db.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},wa.event.addProp),wa.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){wa.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||wa.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),wa.fn.extend({on:function(a,b,c,d){return B(this,a,b,c,d)},one:function(a,b,c,d){return B(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,wa(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return!1!==b&&"function"!=typeof b||(c=b,b=void 0),!1===c&&(c=z),this.each(function(){wa.event.remove(this,a,c,b)})}});var fb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,gb=/<script|<style|<link/i,hb=/checked\s*(?:[^=]|=\s*.checked.)/i,ib=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;wa.extend({htmlPrefilter:function(a){return a.replace(fb,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=wa.contains(a.ownerDocument,a);if(!(ra.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||wa.isXMLDoc(a)))for(g=v(h),f=v(a),d=0,e=f.length;d<e;d++)G(f[d],g[d]);if(b)if(c)for(f=f||v(a),g=g||v(h),d=0,e=f.length;d<e;d++)F(f[d],g[d]);else F(a,h);return g=v(h,"script"),g.length>0&&w(g,!i&&v(a,"script")),h},cleanData:function(a){for(var b,c,d,e=wa.event.special,f=0;void 0!==(c=a[f]);f++)if(Na(c)){if(b=c[Oa.expando]){if(b.events)for(d in b.events)e[d]?wa.event.remove(c,d):wa.removeEvent(c,d,b.handle);c[Oa.expando]=void 0}c[Pa.expando]&&(c[Pa.expando]=void 0)}}}),wa.fn.extend({detach:function(a){return I(this,a,!0)},remove:function(a){return I(this,a)},text:function(a){return Ka(this,function(a){return void 0===a?wa.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return H(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){C(this,a).appendChild(a)}})},prepend:function(){return H(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=C(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return H(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return H(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(wa.cleanData(v(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return wa.clone(this,a,b)})},html:function(a){return Ka(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!gb.test(a)&&!_a[(Za.exec(a)||["",""])[1].toLowerCase()]){a=wa.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(wa.cleanData(v(b,!1)),b.innerHTML=a);b=0}catch(a){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return H(this,arguments,function(b){var c=this.parentNode;wa.inArray(this,a)<0&&(wa.cleanData(v(this)),c&&c.replaceChild(b,this))},a)}}),wa.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){wa.fn[a]=function(a){for(var c,d=[],e=wa(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),wa(e[g])[b](c),ka.apply(d,c.get());return this.pushStack(d)}});var jb=new RegExp("^("+Sa+")(?!px)[a-z%]+$","i"),kb=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},lb=new RegExp(Ua.join("|"),"i");!function(){function b(){if(j){i.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",j.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",bb.appendChild(i).appendChild(j);var b=a.getComputedStyle(j);d="1%"!==b.top,h=12===c(b.marginLeft),j.style.right="60%",g=36===c(b.right),e=36===c(b.width),j.style.position="absolute",f=36===j.offsetWidth||"absolute",bb.removeChild(i),j=null}}function c(a){return Math.round(parseFloat(a))}var d,e,f,g,h,i=ga.createElement("div"),j=ga.createElement("div");j.style&&(j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",ra.clearCloneStyle="content-box"===j.style.backgroundClip,wa.extend(ra,{boxSizingReliable:function(){return b(),e},pixelBoxStyles:function(){return b(),g},pixelPosition:function(){return b(),d},reliableMarginLeft:function(){return b(),h},scrollboxSize:function(){return b(),f}}))}();var mb=/^(none|table(?!-c[ea]).+)/,nb=/^--/,ob={position:"absolute",visibility:"hidden",display:"block"},pb={letterSpacing:"0",fontWeight:"400"},qb=["Webkit","Moz","ms"],rb=ga.createElement("div").style;wa.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=J(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o(b),i=nb.test(b),j=a.style;if(i||(b=M(h)),g=wa.cssHooks[b]||wa.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b];f=typeof c,"string"===f&&(e=Ta.exec(c))&&e[1]&&(c=s(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(wa.cssNumber[h]?"":"px")),ra.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c))}},css:function(a,b,c,d){var e,f,g,h=o(b);return nb.test(b)||(b=M(h)),g=wa.cssHooks[b]||wa.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=J(a,b,d)),"normal"===e&&b in pb&&(e=pb[b]),""===c||c?(f=parseFloat(e),!0===c||isFinite(f)?f||0:e):e}}),wa.each(["height","width"],function(a,b){wa.cssHooks[b]={get:function(a,c,d){if(c)return!mb.test(wa.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?P(a,b,d):Wa(a,ob,function(){return P(a,b,d)})},set:function(a,c,d){var e,f=kb(a),g="border-box"===wa.css(a,"boxSizing",!1,f),h=d&&O(a,b,d,g,f);return g&&ra.scrollboxSize()===f.position&&(h-=Math.ceil(a["offset"+b[0].toUpperCase()+b.slice(1)]-parseFloat(f[b])-O(a,b,"border",!1,f)-.5)),h&&(e=Ta.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=wa.css(a,b)),N(a,c,h)}}}),wa.cssHooks.marginLeft=K(ra.reliableMarginLeft,function(a,b){if(b)return(parseFloat(J(a,"marginLeft"))||a.getBoundingClientRect().left-Wa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),wa.each({margin:"",padding:"",border:"Width"},function(a,b){wa.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+Ua[d]+b]=f[d]||f[d-2]||f[0];return e}},"margin"!==a&&(wa.cssHooks[a+b].set=N)}),wa.fn.extend({css:function(a,b){return Ka(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=kb(a),e=b.length;g<e;g++)f[b[g]]=wa.css(a,b[g],!1,d);return f}return void 0!==c?wa.style(a,b,c):wa.css(a,b)},a,b,arguments.length>1)}}),wa.Tween=Q,Q.prototype={constructor:Q,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||wa.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(wa.cssNumber[c]?"":"px")},cur:function(){var a=Q.propHooks[this.prop];return a&&a.get?a.get(this):Q.propHooks._default.get(this)},run:function(a){var b,c=Q.propHooks[this.prop];return this.options.duration?this.pos=b=wa.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Q.propHooks._default.set(this),this}},Q.prototype.init.prototype=Q.prototype,Q.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=wa.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){wa.fx.step[a.prop]?wa.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[wa.cssProps[a.prop]]&&!wa.cssHooks[a.prop]?a.elem[a.prop]=a.now:wa.style(a.elem,a.prop,a.now+a.unit)}}},Q.propHooks.scrollTop=Q.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},wa.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},wa.fx=Q.prototype.init,wa.fx.step={};var sb,tb,ub=/^(?:toggle|show|hide)$/,vb=/queueHooks$/;wa.Animation=wa.extend(X,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return s(c.elem,a,Ta.exec(b),c),c}]},tweener:function(a,b){sa(a)?(b=a,a=["*"]):a=a.match(Ha);for(var c,d=0,e=a.length;d<e;d++)c=a[d],X.tweeners[c]=X.tweeners[c]||[],X.tweeners[c].unshift(b)},prefilters:[V],prefilter:function(a,b){b?X.prefilters.unshift(a):X.prefilters.push(a)}}),wa.speed=function(a,b,c){var d=a&&"object"==typeof a?wa.extend({},a):{complete:c||!c&&b||sa(a)&&a,duration:a,easing:c&&b||b&&!sa(b)&&b};return wa.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in wa.fx.speeds?d.duration=wa.fx.speeds[d.duration]:d.duration=wa.fx.speeds._default),null!=d.queue&&!0!==d.queue||(d.queue="fx"),d.old=d.complete,d.complete=function(){sa(d.old)&&d.old.call(this),d.queue&&wa.dequeue(this,d.queue)},d},wa.fn.extend({fadeTo:function(a,b,c,d){return this.filter(Va).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=wa.isEmptyObject(a),f=wa.speed(b,c,d),g=function(){var b=X(this,wa.extend({},a),f);(e||Oa.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||!1===f.queue?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&!1!==a&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=wa.timers,g=Oa.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&vb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||wa.dequeue(this,a)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var b,c=Oa.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=wa.timers,g=d?d.length:0;for(c.finish=!0,wa.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),wa.each(["toggle","show","hide"],function(a,b){var c=wa.fn[b];wa.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(T(b,!0),a,d,e)}}),wa.each({slideDown:T("show"),slideUp:T("hide"),slideToggle:T("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){wa.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),wa.timers=[],wa.fx.tick=function(){var a,b=0,c=wa.timers;for(sb=Date.now();b<c.length;b++)(a=c[b])()||c[b]!==a||c.splice(b--,1);c.length||wa.fx.stop(),sb=void 0},wa.fx.timer=function(a){wa.timers.push(a),wa.fx.start()},wa.fx.interval=13,wa.fx.start=function(){tb||(tb=!0,R())},wa.fx.stop=function(){tb=null},wa.fx.speeds={slow:600,fast:200,_default:400},wa.fn.delay=function(b,c){return b=wa.fx?wa.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=ga.createElement("input"),b=ga.createElement("select"),c=b.appendChild(ga.createElement("option"));a.type="checkbox",ra.checkOn=""!==a.value,ra.optSelected=c.selected,a=ga.createElement("input"),a.value="t",a.type="radio",ra.radioValue="t"===a.value}();var wb,xb=wa.expr.attrHandle;wa.fn.extend({attr:function(a,b){return Ka(this,wa.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){wa.removeAttr(this,a)})}}),wa.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return void 0===a.getAttribute?wa.prop(a,b,c):(1===f&&wa.isXMLDoc(a)||(e=wa.attrHooks[b.toLowerCase()]||(wa.expr.match.bool.test(b)?wb:void 0)),void 0!==c?null===c?void wa.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=wa.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!ra.radioValue&&"radio"===b&&f(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(Ha);if(e&&1===a.nodeType)for(;c=e[d++];)a.removeAttribute(c)}}),wb={set:function(a,b,c){return!1===b?wa.removeAttr(a,c):a.setAttribute(c,c),c}},wa.each(wa.expr.match.bool.source.match(/\w+/g),function(a,b){var c=xb[b]||wa.find.attr;xb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=xb[g],xb[g]=e,e=null!=c(a,b,d)?g:null,xb[g]=f),e}});var yb=/^(?:input|select|textarea|button)$/i,zb=/^(?:a|area)$/i;wa.fn.extend({prop:function(a,b){return Ka(this,wa.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[wa.propFix[a]||a]})}}),wa.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&wa.isXMLDoc(a)||(b=wa.propFix[b]||b,e=wa.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=wa.find.attr(a,"tabindex");return b?parseInt(b,10):yb.test(a.nodeName)||zb.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),ra.optSelected||(wa.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),wa.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){wa.propFix[this.toLowerCase()]=this}),wa.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(sa(a))return this.each(function(b){wa(this).addClass(a.call(this,b,Z(this)))});if(b=$(a),b.length)for(;c=this[i++];)if(e=Z(c),d=1===c.nodeType&&" "+Y(e)+" "){for(g=0;f=b[g++];)d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=Y(d),e!==h&&c.setAttribute("class",h)}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(sa(a))return this.each(function(b){wa(this).removeClass(a.call(this,b,Z(this)))});if(!arguments.length)return this.attr("class","");if(b=$(a),b.length)for(;c=this[i++];)if(e=Z(c),d=1===c.nodeType&&" "+Y(e)+" "){for(g=0;f=b[g++];)for(;d.indexOf(" "+f+" ")>-1;)d=d.replace(" "+f+" "," ");h=Y(d),e!==h&&c.setAttribute("class",h)}return this},toggleClass:function(a,b){var c=typeof a,d="string"===c||Array.isArray(a);return"boolean"==typeof b&&d?b?this.addClass(a):this.removeClass(a):sa(a)?this.each(function(c){wa(this).toggleClass(a.call(this,c,Z(this),b),b)}):this.each(function(){var b,e,f,g;if(d)for(e=0,f=wa(this),g=$(a);b=g[e++];)f.hasClass(b)?f.removeClass(b):f.addClass(b);else void 0!==a&&"boolean"!==c||(b=Z(this),b&&Oa.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||!1===a?"":Oa.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;for(b=" "+a+" ";c=this[d++];)if(1===c.nodeType&&(" "+Y(Z(c))+" ").indexOf(b)>-1)return!0;return!1}});var Ab=/\r/g;wa.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=sa(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,wa(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=wa.map(e,function(a){return null==a?"":a+""})),(b=wa.valHooks[this.type]||wa.valHooks[this.nodeName.toLowerCase()])&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return(b=wa.valHooks[e.type]||wa.valHooks[e.nodeName.toLowerCase()])&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(Ab,""):null==c?"":c)}}}),wa.extend({valHooks:{option:{get:function(a){var b=wa.find.attr(a,"value");return null!=b?b:Y(wa.text(a))}},select:{get:function(a){var b,c,d,e=a.options,g=a.selectedIndex,h="select-one"===a.type,i=h?null:[],j=h?g+1:e.length;for(d=g<0?j:h?g:0;d<j;d++)if(c=e[d],(c.selected||d===g)&&!c.disabled&&(!c.parentNode.disabled||!f(c.parentNode,"optgroup"))){if(b=wa(c).val(),h)return b;i.push(b)}return i},set:function(a,b){for(var c,d,e=a.options,f=wa.makeArray(b),g=e.length;g--;)d=e[g],(d.selected=wa.inArray(wa.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),wa.each(["radio","checkbox"],function(){wa.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=wa.inArray(wa(a).val(),b)>-1}},ra.checkOn||(wa.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),ra.focusin="onfocusin"in a;var Bb=/^(?:focusinfocus|focusoutblur)$/,Cb=function(a){a.stopPropagation()};wa.extend(wa.event,{trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m,n=[d||ga],o=oa.call(b,"type")?b.type:b,p=oa.call(b,"namespace")?b.namespace.split("."):[];if(g=m=h=d=d||ga,3!==d.nodeType&&8!==d.nodeType&&!Bb.test(o+wa.event.triggered)&&(o.indexOf(".")>-1&&(p=o.split("."),o=p.shift(),p.sort()),j=o.indexOf(":")<0&&"on"+o,b=b[wa.expando]?b:new wa.Event(o,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=p.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:wa.makeArray(c,[b]),l=wa.event.special[o]||{},e||!l.trigger||!1!==l.trigger.apply(d,c))){if(!e&&!l.noBubble&&!ta(d)){for(i=l.delegateType||o,Bb.test(i+o)||(g=g.parentNode);g;g=g.parentNode)n.push(g),h=g;h===(d.ownerDocument||ga)&&n.push(h.defaultView||h.parentWindow||a)}for(f=0;(g=n[f++])&&!b.isPropagationStopped();)m=g,b.type=f>1?i:l.bindType||o,k=(Oa.get(g,"events")||{})[b.type]&&Oa.get(g,"handle"),k&&k.apply(g,c),(k=j&&g[j])&&k.apply&&Na(g)&&(b.result=k.apply(g,c),!1===b.result&&b.preventDefault());return b.type=o,e||b.isDefaultPrevented()||l._default&&!1!==l._default.apply(n.pop(),c)||!Na(d)||j&&sa(d[o])&&!ta(d)&&(h=d[j],h&&(d[j]=null),wa.event.triggered=o,b.isPropagationStopped()&&m.addEventListener(o,Cb),d[o](),b.isPropagationStopped()&&m.removeEventListener(o,Cb),wa.event.triggered=void 0,h&&(d[j]=h)),b.result}},simulate:function(a,b,c){var d=wa.extend(new wa.Event,c,{type:a,isSimulated:!0});wa.event.trigger(d,null,b)}}),wa.fn.extend({trigger:function(a,b){return this.each(function(){wa.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return wa.event.trigger(a,b,c,!0)}}),ra.focusin||wa.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){wa.event.simulate(b,a.target,wa.event.fix(a))};wa.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=Oa.access(d,b);e||d.addEventListener(a,c,!0),Oa.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=Oa.access(d,b)-1;e?Oa.access(d,b,e):(d.removeEventListener(a,c,!0),Oa.remove(d,b))}}});var Db=a.location,Eb=Date.now(),Fb=/\?/;wa.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(a){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||wa.error("Invalid XML: "+b),c};var Gb=/\[\]$/,Hb=/\r?\n/g,Ib=/^(?:submit|button|image|reset|file)$/i,Jb=/^(?:input|select|textarea|keygen)/i;wa.param=function(a,b){var c,d=[],e=function(a,b){var c=sa(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!wa.isPlainObject(a))wa.each(a,function(){e(this.name,this.value)});else for(c in a)_(c,a[c],b,e);return d.join("&")},wa.fn.extend({serialize:function(){return wa.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=wa.prop(this,"elements");return a?wa.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!wa(this).is(":disabled")&&Jb.test(this.nodeName)&&!Ib.test(a)&&(this.checked||!Ya.test(a))}).map(function(a,b){var c=wa(this).val();return null==c?null:Array.isArray(c)?wa.map(c,function(a){return{name:b.name,value:a.replace(Hb,"\r\n")}}):{name:b.name,value:c.replace(Hb,"\r\n")}}).get()}});var Kb=/%20/g,Lb=/#.*$/,Mb=/([?&])_=[^&]*/,Nb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Pb=/^(?:GET|HEAD)$/,Qb=/^\/\//,Rb={},Sb={},Tb="*/".concat("*"),Ub=ga.createElement("a");Ub.href=Db.href,wa.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Db.href,type:"GET",isLocal:Ob.test(Db.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Tb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":wa.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?ca(ca(a,wa.ajaxSettings),b):ca(wa.ajaxSettings,a)},ajaxPrefilter:aa(Rb),ajaxTransport:aa(Sb),ajax:function(b,c){function d(b,c,d,h){var j,m,n,u,v,w=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(u=da(o,x,d)),u=ea(o,u,x,j),j?(o.ifModified&&(v=x.getResponseHeader("Last-Modified"),v&&(wa.lastModified[f]=v),(v=x.getResponseHeader("etag"))&&(wa.etag[f]=v)),204===b||"HEAD"===o.type?w="nocontent":304===b?w="notmodified":(w=u.state,m=u.data,n=u.error,j=!n)):(n=w,!b&&w||(w="error",b<0&&(b=0))),x.status=b,x.statusText=(c||w)+"",j?r.resolveWith(p,[m,w,x]):r.rejectWith(p,[x,w,n]),x.statusCode(t),t=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[x,o,j?m:n]),s.fireWith(p,[x,w]),l&&(q.trigger("ajaxComplete",[x,o]),--wa.active||wa.event.trigger("ajaxStop")))}"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=wa.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?wa(p):wa.event,r=wa.Deferred(),s=wa.Callbacks("once memory"),t=o.statusCode||{},u={},v={},w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h)for(h={};b=Nb.exec(g);)h[b[1].toLowerCase()]=b[2];b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=v[a.toLowerCase()]=v[a.toLowerCase()]||a,u[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)x.always(a[x.status]);else for(b in a)t[b]=[t[b],a[b]];return this},abort:function(a){var b=a||w;return e&&e.abort(b),d(0,b),this}};if(r.promise(x),o.url=((b||o.url||Db.href)+"").replace(Qb,Db.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(Ha)||[""],null==o.crossDomain){j=ga.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ub.protocol+"//"+Ub.host!=j.protocol+"//"+j.host}catch(a){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=wa.param(o.data,o.traditional)),ba(Rb,o,c,x),k)return x;l=wa.event&&o.global,l&&0==wa.active++&&wa.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Pb.test(o.type),f=o.url.replace(Lb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Kb,"+")):(n=o.url.slice(f.length),o.data&&(o.processData||"string"==typeof o.data)&&(f+=(Fb.test(f)?"&":"?")+o.data,delete o.data),!1===o.cache&&(f=f.replace(Mb,"$1"),n=(Fb.test(f)?"&":"?")+"_="+Eb+++n),o.url=f+n),o.ifModified&&(wa.lastModified[f]&&x.setRequestHeader("If-Modified-Since",wa.lastModified[f]),wa.etag[f]&&x.setRequestHeader("If-None-Match",wa.etag[f])),(o.data&&o.hasContent&&!1!==o.contentType||c.contentType)&&x.setRequestHeader("Content-Type",o.contentType),x.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Tb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)x.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(!1===o.beforeSend.call(p,x,o)||k))return x.abort();if(w="abort",s.add(o.complete),x.done(o.success),x.fail(o.error),e=ba(Sb,o,c,x)){if(x.readyState=1,l&&q.trigger("ajaxSend",[x,o]),k)return x;o.async&&o.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},o.timeout));try{k=!1,e.send(u,d)}catch(a){if(k)throw a;d(-1,a)}}else d(-1,"No Transport");return x},getJSON:function(a,b,c){return wa.get(a,b,c,"json")},getScript:function(a,b){return wa.get(a,void 0,b,"script")}}),wa.each(["get","post"],function(a,b){wa[b]=function(a,c,d,e){return sa(c)&&(e=e||d,d=c,c=void 0),wa.ajax(wa.extend({url:a,type:b,dataType:e,data:c,success:d},wa.isPlainObject(a)&&a))}}),wa._evalUrl=function(a){return wa.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},wa.fn.extend({wrapAll:function(a){var b;return this[0]&&(sa(a)&&(a=a.call(this[0])),b=wa(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return sa(a)?this.each(function(b){wa(this).wrapInner(a.call(this,b))}):this.each(function(){var b=wa(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=sa(a);return this.each(function(c){wa(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){wa(this).replaceWith(this.childNodes)}),this}}),wa.expr.pseudos.hidden=function(a){return!wa.expr.pseudos.visible(a)},wa.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},wa.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(a){}};var Vb={0:200,1223:204},Wb=wa.ajaxSettings.xhr();ra.cors=!!Wb&&"withCredentials"in Wb,ra.ajax=Wb=!!Wb,wa.ajaxTransport(function(b){var c,d;if(ra.cors||Wb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.ontimeout=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Vb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=h.ontimeout=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(a){if(c)throw a}},abort:function(){c&&c()}}}),wa.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),wa.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return wa.globalEval(a),a}}}),wa.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),wa.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=wa("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),ga.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Xb=[],Yb=/(=)\?(?=&|$)|\?\?/;wa.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Xb.pop()||wa.expando+"_"+Eb++;return this[a]=!0,a}}),wa.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=!1!==b.jsonp&&(Yb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=sa(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Yb,"$1"+e):!1!==b.jsonp&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||wa.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?wa(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Xb.push(e)),g&&sa(f)&&f(g[0]),g=f=void 0}),"script"}),ra.createHTMLDocument=function(){var a=ga.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),wa.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var d,e,f;return b||(ra.createHTMLDocument?(b=ga.implementation.createHTMLDocument(""),d=b.createElement("base"),d.href=ga.location.href,b.head.appendChild(d)):b=ga),e=Ca.exec(a),f=!c&&[],e?[b.createElement(e[1])]:(e=x([a],b,f),f&&f.length&&wa(f).remove(),wa.merge([],e.childNodes))},wa.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=Y(a.slice(h)),a=a.slice(0,h)),sa(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&wa.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?wa("<div>").append(wa.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},wa.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){wa.fn[b]=function(a){return this.on(b,a)}}),wa.expr.pseudos.animated=function(a){return wa.grep(wa.timers,function(b){return a===b.elem}).length},wa.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=wa.css(a,"position"),l=wa(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=wa.css(a,"top"),i=wa.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),sa(b)&&(b=b.call(a,c,wa.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},wa.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){wa.offset.setOffset(this,a,b)});var b,c,d=this[0];if(d)return d.getClientRects().length?(b=d.getBoundingClientRect(),c=d.ownerDocument.defaultView,{top:b.top+c.pageYOffset,left:b.left+c.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c,d=this[0],e={top:0,left:0};if("fixed"===wa.css(d,"position"))b=d.getBoundingClientRect();else{for(b=this.offset(),c=d.ownerDocument,a=d.offsetParent||c.documentElement;a&&(a===c.body||a===c.documentElement)&&"static"===wa.css(a,"position");)a=a.parentNode;a&&a!==d&&1===a.nodeType&&(e=wa(a).offset(),e.top+=wa.css(a,"borderTopWidth",!0),e.left+=wa.css(a,"borderLeftWidth",!0))}return{top:b.top-e.top-wa.css(d,"marginTop",!0),left:b.left-e.left-wa.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&"static"===wa.css(a,"position");)a=a.offsetParent;return a||bb})}}),wa.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;wa.fn[a]=function(d){return Ka(this,function(a,d,e){var f;if(ta(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e)return f?f[b]:a[d];f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e},a,d,arguments.length)}}),wa.each(["top","left"],function(a,b){wa.cssHooks[b]=K(ra.pixelPosition,function(a,c){if(c)return c=J(a,b),jb.test(c)?wa(a).position()[b]+"px":c})}),wa.each({Height:"height",Width:"width"},function(a,b){wa.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){wa.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(!0===e||!0===f?"margin":"border");return Ka(this,function(b,c,e){var f;return ta(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?wa.css(b,c,h):wa.style(b,c,e,h)},b,g?e:void 0,g)}})}),wa.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){wa.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),wa.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),wa.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),wa.proxy=function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),sa(a))return d=ia.call(arguments,2),e=function(){return a.apply(b||this,d.concat(ia.call(arguments)))},e.guid=a.guid=a.guid||wa.guid++,e},wa.holdReady=function(a){a?wa.readyWait++:wa.ready(!0)},wa.isArray=Array.isArray,wa.parseJSON=JSON.parse,wa.nodeName=f,wa.isFunction=sa,wa.isWindow=ta,wa.camelCase=o,wa.type=d,wa.now=Date.now,wa.isNumeric=function(a){var b=wa.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},System.registerDynamic("npm:jquery@3.3.1/dist/jquery.js",[],!1,function(a,b,c){return function(){return wa}.call(this)});var Zb=a.jQuery,$b=a.$;return wa.noConflict=function(b){return a.$===wa&&(a.$=$b),b&&a.jQuery===wa&&(a.jQuery=Zb),wa},b||(a.jQuery=a.$=wa),wa}),System.register("citylab/js/lib/globals.js",["jquery","./utils"],function(a,b){"use strict";var c,d,e,f,g,h,i,j,k,l,m;return{setters:[function(a){c=a.default},function(a){d=a.urlParse}],execute:function(){e=function(a){return Array.isArray(a)?a:[].concat(a).filter(function(a){return void 0!==a})},a("$window",f=c(window)),a("$window",f),a("$document",g=c(document)),a("$document",g),a("$html",h=c(document.documentElement)),a("$html",h),a("$head",i=c("head")),a("$head",i),a("$body",j=c("body")),a("$body",j),a("parsedUrl",k=d(window.location.href,!0)),a("parsedUrl",k),a("debug",l=e(k.query.debug)),a("debug",l),a("disable",m=e(k.query.disable)),a("disable",m),a("$",c)}}}),System.registerDynamic("npm:jspm-nodelibs-process@0.2.1.json",[],!0,function(){return{main:"./process.js"}}),System.registerDynamic("npm:jspm-nodelibs-process@0.2.1/process.js",["@system-env"],!0,function(a,b,c){function d(){l=!1,h.length?k=h.concat(k):m=-1,k.length&&e()}function e(){if(!l){var a=setTimeout(d);l=!0;for(var b=k.length;b;){for(h=k,k=[];++m<b;)h&&h[m].run();m=-1,b=k.length}h=null,l=!1,clearTimeout(a)}}function f(a,b){this.fun=a,this.array=b}function g(){}var h,i=(this||self,a("@system-env").production),j=c.exports={},k=[],l=!1,m=-1;j.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];k.push(new f(a,b)),1!==k.length||l||setTimeout(e,0)},f.prototype.run=function(){this.fun.apply(null,this.array)},j.title="browser",j.browser=!0,j.env={NODE_ENV:i?"production":"development"},j.argv=[],j.version="",j.versions={},j.on=g,j.addListener=g,j.once=g,j.off=g,j.removeListener=g,j.removeAllListeners=g,j.emit=g,j.binding=function(a){throw new Error("process.binding is not supported")},j.cwd=function(){return"/"},j.chdir=function(a){throw new Error("process.chdir is not supported")},j.umask=function(){return 0}}),System.registerDynamic("npm:js-cookie@2.1.4.json",[],!0,function(){return{main:"src/js.cookie.js",format:"cjs",meta:{"*":{globals:{process:"process"}},"*.json":{format:"json"}}}}),System.registerDynamic("npm:js-cookie@2.1.4/src/js.cookie.js",["process"],!0,function(a,b,c){a("process"),this||self;!function(a){var d=!1;if("object"==typeof b&&(c.exports=a(),d=!0),!d){var e=window.Cookies,f=window.Cookies=a();f.noConflict=function(){return window.Cookies=e,f}}}(function(){function a(){for(var a=0,b={};a<arguments.length;a++){var c=arguments[a];for(var d in c)b[d]=c[d]}return b}function b(c){function d(b,e,f){var g;if("undefined"!=typeof document){if(arguments.length>1){if(f=a({path:"/"},d.defaults,f),"number"==typeof f.expires){var h=new Date;h.setMilliseconds(h.getMilliseconds()+864e5*f.expires),f.expires=h}f.expires=f.expires?f.expires.toUTCString():"";try{g=JSON.stringify(e),/^[\{\[]/.test(g)&&(e=g)}catch(a){}e=c.write?c.write(e,b):encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),b=encodeURIComponent(String(b)),b=b.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),b=b.replace(/[\(\)]/g,escape);var i="";for(var j in f)f[j]&&(i+="; "+j,!0!==f[j]&&(i+="="+f[j]));return document.cookie=b+"="+e+i}b||(g={});for(var k=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,m=0;m<k.length;m++){var n=k[m].split("="),o=n.slice(1).join("=");'"'===o.charAt(0)&&(o=o.slice(1,-1));try{var p=n[0].replace(l,decodeURIComponent);if(o=c.read?c.read(o,p):c(o,p)||o.replace(l,decodeURIComponent),this.json)try{o=JSON.parse(o)}catch(a){}if(b===p){g=o;break}b||(g[p]=o)}catch(a){}}return g}}return d.set=d,d.get=function(a){return d.call(d,a)},d.getJSON=function(){return d.apply({json:!0},[].slice.call(arguments))},d.defaults={},d.remove=function(b,c){d(b,"",a(c,{expires:-1}))},d.withConverter=b,d}return b(function(){})})}),System.registerDynamic("npm:jspm-nodelibs-url@0.2.1.json",[],!0,function(){return{main:"./url.js",map:{"./url.js":{browser:"url"}}}}),System.registerDynamic("npm:punycode@1.3.2.json",[],!0,function(){return{main:"punycode.js",format:"cjs",meta:{"*.json":{format:"json"}}}}),System.registerDynamic("npm:punycode@1.3.2/punycode.js",[],!0,function(a,b,c){var d=this||self;!function(a){function e(a){throw RangeError(H[a])}function f(a,b){for(var c=a.length,d=[];c--;)d[c]=b(a[c]);return d}function g(a,b){var c=a.split("@"),d="";return c.length>1&&(d=c[0]+"@",a=c[1]),a=a.replace(G,"."),d+f(a.split("."),b).join(".")}function h(a){for(var b,c,d=[],e=0,f=a.length;e<f;)b=a.charCodeAt(e++),b>=55296&&b<=56319&&e<f?(c=a.charCodeAt(e++),56320==(64512&c)?d.push(((1023&b)<<10)+(1023&c)+65536):(d.push(b),e--)):d.push(b);return d}function i(a){return f(a,function(a){var b="";return a>65535&&(a-=65536,b+=K(a>>>10&1023|55296),a=56320|1023&a),b+=K(a)}).join("")}function j(a){return a-48<10?a-22:a-65<26?a-65:a-97<26?a-97:w}function k(a,b){return a+22+75*(a<26)-((0!=b)<<5)}function l(a,b,c){var d=0;for(a=c?J(a/A):a>>1,a+=J(a/b);a>I*y>>1;d+=w)a=J(a/I);return J(d+(I+1)*a/(a+z))}function m(a){var b,c,d,f,g,h,k,m,n,o,p=[],q=a.length,r=0,s=C,t=B;for(c=a.lastIndexOf(D),c<0&&(c=0),d=0;d<c;++d)a.charCodeAt(d)>=128&&e("not-basic"),p.push(a.charCodeAt(d));for(f=c>0?c+1:0;f<q;){for(g=r,h=1,k=w;f>=q&&e("invalid-input"),m=j(a.charCodeAt(f++)),(m>=w||m>J((v-r)/h))&&e("overflow"),r+=m*h,n=k<=t?x:k>=t+y?y:k-t,!(m<n);k+=w)o=w-n,h>J(v/o)&&e("overflow"),h*=o;b=p.length+1,t=l(r-g,b,0==g),J(r/b)>v-s&&e("overflow"),s+=J(r/b),r%=b,p.splice(r++,0,s)}return i(p)}function n(a){var b,c,d,f,g,i,j,m,n,o,p,q,r,s,t,u=[];for(a=h(a),q=a.length,b=C,c=0,g=B,i=0;i<q;++i)(p=a[i])<128&&u.push(K(p));for(d=f=u.length,f&&u.push(D);d<q;){for(j=v,i=0;i<q;++i)(p=a[i])>=b&&p<j&&(j=p);for(r=d+1,j-b>J((v-c)/r)&&e("overflow"),c+=(j-b)*r,b=j,i=0;i<q;++i)if(p=a[i],p<b&&++c>v&&e("overflow"),p==b){for(m=c,n=w;o=n<=g?x:n>=g+y?y:n-g,!(m<o);n+=w)t=m-o,s=w-o,u.push(K(k(o+t%s,0))),m=J(t/s);u.push(K(k(m,0))),g=l(c,r,d==f),c=0,++d}++c,++b}return u.join("")}function o(a){return g(a,function(a){return E.test(a)?m(a.slice(4).toLowerCase()):a})}function p(a){return g(a,function(a){return F.test(a)?"xn--"+n(a):a})}var q="object"==typeof b&&b&&!b.nodeType&&b,r="object"==typeof c&&c&&!c.nodeType&&c,s="object"==typeof d&&d;s.global!==s&&s.window!==s&&s.self!==s||(a=s);var t,u,v=2147483647,w=36,x=1,y=26,z=38,A=700,B=72,C=128,D="-",E=/^xn--/,F=/[^\x20-\x7E]/,G=/[\x2E\u3002\uFF0E\uFF61]/g,H={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},I=w-x,J=Math.floor,K=String.fromCharCode;if(t={version:"1.3.2",ucs2:{decode:h,encode:i},decode:m,encode:n,toASCII:p,toUnicode:o},q&&r)if(c.exports==q)r.exports=t;else for(u in t)t.hasOwnProperty(u)&&(q[u]=t[u]);else a.punycode=t}(b)}),System.registerDynamic("npm:url@0.11.0/util.js",[],!0,function(a,b,c){"use strict";this||self;c.exports={isString:function(a){return"string"==typeof a},isObject:function(a){return"object"==typeof a&&null!==a},isNull:function(a){return null===a},isNullOrUndefined:function(a){return null==a}}}),System.registerDynamic("npm:querystring@0.2.0/decode.js",[],!0,function(a,b,c){"use strict";function d(a,b){return Object.prototype.hasOwnProperty.call(a,b)}this||self;c.exports=function(a,b,c,e){b=b||"&",c=c||"=";var f={};if("string"!=typeof a||0===a.length)return f;var g=/\+/g;a=a.split(b);var h=1e3;e&&"number"==typeof e.maxKeys&&(h=e.maxKeys);var i=a.length;h>0&&i>h&&(i=h);for(var j=0;j<i;++j){var k,l,m,n,o=a[j].replace(g,"%20"),p=o.indexOf(c);p>=0?(k=o.substr(0,p),l=o.substr(p+1)):(k=o,l=""),m=decodeURIComponent(k),n=decodeURIComponent(l),d(f,m)?Array.isArray(f[m])?f[m].push(n):f[m]=[f[m],n]:f[m]=n}return f}}),System.registerDynamic("npm:querystring@0.2.0/encode.js",[],!0,function(a,b,c){"use strict";var d=(this||self,function(a){switch(typeof a){case"string":return a;case"boolean":return a?"true":"false";case"number":return isFinite(a)?a:"";default:return""}});c.exports=function(a,b,c,e){return b=b||"&",c=c||"=",null===a&&(a=void 0),"object"==typeof a?Object.keys(a).map(function(e){var f=encodeURIComponent(d(e))+c;return Array.isArray(a[e])?a[e].map(function(a){return f+encodeURIComponent(d(a))}).join(b):f+encodeURIComponent(d(a[e]))}).join(b):e?encodeURIComponent(d(e))+c+encodeURIComponent(d(a)):""}}),System.registerDynamic("npm:querystring@0.2.0.json",[],!0,function(){return{main:"index.js",format:"cjs",meta:{"*.json":{format:"json"}},map:{"./test":"./test/index.js"}}}),System.registerDynamic("npm:querystring@0.2.0/index.js",["./decode","./encode"],!0,function(a,b,c){"use strict";this||self;b.decode=b.parse=a("./decode"),b.encode=b.stringify=a("./encode")}),System.registerDynamic("npm:url@0.11.0.json",[],!0,function(){return{main:"url.js",format:"cjs",meta:{"*.json":{format:"json"}}}}),System.registerDynamic("npm:url@0.11.0/url.js",["punycode","./util","querystring"],!0,function(a,b,c){"use strict";function d(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function e(a,b,c){if(a&&j.isObject(a)&&a instanceof d)return a;var e=new d;return e.parse(a,b,c),e}function f(a){return j.isString(a)&&(a=e(a)),a instanceof d?a.format():d.prototype.format.call(a)}function g(a,b){return e(a,!1,!0).resolve(b)}function h(a,b){return a?e(a,!1,!0).resolveObject(b):b}var i=(this||self,a("punycode")),j=a("./util");b.parse=e,b.resolve=g,b.resolveObject=h,b.format=f,b.Url=d;var k=/^([a-z0-9.+-]+:)/i,l=/:[0-9]*$/,m=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,n=["<",">",'"',"`"," ","\r","\n","\t"],o=["{","}","|","\\","^","`"].concat(n),p=["'"].concat(o),q=["%","/","?",";","#"].concat(p),r=["/","?","#"],s=/^[+a-z0-9A-Z_-]{0,63}$/,t=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,u={javascript:!0,"javascript:":!0},v={javascript:!0,"javascript:":!0},w={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},x=a("querystring");d.prototype.parse=function(a,b,c){if(!j.isString(a))throw new TypeError("Parameter 'url' must be a string, not "+typeof a);var d=a.indexOf("?"),e=-1!==d&&d<a.indexOf("#")?"?":"#",f=a.split(e),g=/\\/g;f[0]=f[0].replace(g,"/"),a=f.join(e);var h=a;if(h=h.trim(),!c&&1===a.split("#").length){var l=m.exec(h);if(l)return this.path=h,this.href=h,this.pathname=l[1],l[2]?(this.search=l[2],this.query=b?x.parse(this.search.substr(1)):this.search.substr(1)):b&&(this.search="",this.query={}),this}var n=k.exec(h);if(n){n=n[0];var o=n.toLowerCase();this.protocol=o,h=h.substr(n.length)}if(c||n||h.match(/^\/\/[^@\/]+@[^@\/]+/)){var y="//"===h.substr(0,2);!y||n&&v[n]||(h=h.substr(2),this.slashes=!0)}if(!v[n]&&(y||n&&!w[n])){for(var z=-1,A=0;A<r.length;A++){var B=h.indexOf(r[A]);-1!==B&&(-1===z||B<z)&&(z=B)}var C,D;D=-1===z?h.lastIndexOf("@"):h.lastIndexOf("@",z),-1!==D&&(C=h.slice(0,D),h=h.slice(D+1),this.auth=decodeURIComponent(C)),z=-1;for(var A=0;A<q.length;A++){var B=h.indexOf(q[A]);-1!==B&&(-1===z||B<z)&&(z=B)}-1===z&&(z=h.length),this.host=h.slice(0,z),h=h.slice(z),this.parseHost(),this.hostname=this.hostname||"";var E="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!E)for(var F=this.hostname.split(/\./),A=0,G=F.length;A<G;A++){var H=F[A];if(H&&!H.match(s)){for(var I="",J=0,K=H.length;J<K;J++)H.charCodeAt(J)>127?I+="x":I+=H[J];if(!I.match(s)){var L=F.slice(0,A),M=F.slice(A+1),N=H.match(t);N&&(L.push(N[1]),M.unshift(N[2])),M.length&&(h="/"+M.join(".")+h),this.hostname=L.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),E||(this.hostname=i.toASCII(this.hostname));var O=this.port?":"+this.port:"",P=this.hostname||"";this.host=P+O,this.href+=this.host,E&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==h[0]&&(h="/"+h))}if(!u[o])for(var A=0,G=p.length;A<G;A++){var Q=p[A];if(-1!==h.indexOf(Q)){var R=encodeURIComponent(Q);R===Q&&(R=escape(Q)),h=h.split(Q).join(R)}}var S=h.indexOf("#");-1!==S&&(this.hash=h.substr(S),h=h.slice(0,S));var T=h.indexOf("?");if(-1!==T?(this.search=h.substr(T),this.query=h.substr(T+1),b&&(this.query=x.parse(this.query)),h=h.slice(0,T)):b&&(this.search="",this.query={}),h&&(this.pathname=h),w[o]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var O=this.pathname||"",U=this.search||"";this.path=O+U}return this.href=this.format(),this},d.prototype.format=function(){var a=this.auth||"";a&&(a=encodeURIComponent(a),a=a.replace(/%3A/i,":"),a+="@");var b=this.protocol||"",c=this.pathname||"",d=this.hash||"",e=!1,f="";this.host?e=a+this.host:this.hostname&&(e=a+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(e+=":"+this.port)),this.query&&j.isObject(this.query)&&Object.keys(this.query).length&&(f=x.stringify(this.query));var g=this.search||f&&"?"+f||"";return b&&":"!==b.substr(-1)&&(b+=":"),this.slashes||(!b||w[b])&&!1!==e?(e="//"+(e||""),c&&"/"!==c.charAt(0)&&(c="/"+c)):e||(e=""),d&&"#"!==d.charAt(0)&&(d="#"+d),g&&"?"!==g.charAt(0)&&(g="?"+g),c=c.replace(/[?#]/g,function(a){return encodeURIComponent(a)}),g=g.replace("#","%23"),b+e+c+g+d},d.prototype.resolve=function(a){return this.resolveObject(e(a,!1,!0)).format()},d.prototype.resolveObject=function(a){if(j.isString(a)){var b=new d;b.parse(a,!1,!0),a=b}for(var c=new d,e=Object.keys(this),f=0;f<e.length;f++){var g=e[f];c[g]=this[g]}if(c.hash=a.hash,""===a.href)return c.href=c.format(),c;if(a.slashes&&!a.protocol){for(var h=Object.keys(a),i=0;i<h.length;i++){var k=h[i];"protocol"!==k&&(c[k]=a[k])}return w[c.protocol]&&c.hostname&&!c.pathname&&(c.path=c.pathname="/"),c.href=c.format(),c}if(a.protocol&&a.protocol!==c.protocol){if(!w[a.protocol]){for(var l=Object.keys(a),m=0;m<l.length;m++){var n=l[m];c[n]=a[n]}return c.href=c.format(),c}if(c.protocol=a.protocol,a.host||v[a.protocol])c.pathname=a.pathname;else{for(var o=(a.pathname||"").split("/");o.length&&!(a.host=o.shift()););a.host||(a.host=""),a.hostname||(a.hostname=""),""!==o[0]&&o.unshift(""),o.length<2&&o.unshift(""),c.pathname=o.join("/")}if(c.search=a.search,c.query=a.query,c.host=a.host||"",c.auth=a.auth,c.hostname=a.hostname||a.host,c.port=a.port,c.pathname||c.search){var p=c.pathname||"",q=c.search||"";c.path=p+q}return c.slashes=c.slashes||a.slashes,c.href=c.format(),c}var r=c.pathname&&"/"===c.pathname.charAt(0),s=a.host||a.pathname&&"/"===a.pathname.charAt(0),t=s||r||c.host&&a.pathname,u=t,x=c.pathname&&c.pathname.split("/")||[],o=a.pathname&&a.pathname.split("/")||[],y=c.protocol&&!w[c.protocol];if(y&&(c.hostname="",c.port=null,c.host&&(""===x[0]?x[0]=c.host:x.unshift(c.host)),c.host="",a.protocol&&(a.hostname=null,a.port=null,a.host&&(""===o[0]?o[0]=a.host:o.unshift(a.host)),a.host=null),t=t&&(""===o[0]||""===x[0])),s)c.host=a.host||""===a.host?a.host:c.host,c.hostname=a.hostname||""===a.hostname?a.hostname:c.hostname,c.search=a.search,c.query=a.query,x=o;else if(o.length)x||(x=[]),x.pop(),x=x.concat(o),c.search=a.search,c.query=a.query;else if(!j.isNullOrUndefined(a.search)){if(y){c.hostname=c.host=x.shift();var z=!!(c.host&&c.host.indexOf("@")>0)&&c.host.split("@");z&&(c.auth=z.shift(),c.host=c.hostname=z.shift())}return c.search=a.search,c.query=a.query,j.isNull(c.pathname)&&j.isNull(c.search)||(c.path=(c.pathname?c.pathname:"")+(c.search?c.search:"")),c.href=c.format(),c}if(!x.length)return c.pathname=null,c.search?c.path="/"+c.search:c.path=null,c.href=c.format(),c;for(var A=x.slice(-1)[0],B=(c.host||a.host||x.length>1)&&("."===A||".."===A)||""===A,C=0,D=x.length;D>=0;D--)A=x[D],"."===A?x.splice(D,1):".."===A?(x.splice(D,1),C++):C&&(x.splice(D,1),C--);if(!t&&!u)for(;C--;C)x.unshift("..");!t||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),B&&"/"!==x.join("/").substr(-1)&&x.push("");var E=""===x[0]||x[0]&&"/"===x[0].charAt(0);if(y){c.hostname=c.host=E?"":x.length?x.shift():"";var z=!!(c.host&&c.host.indexOf("@")>0)&&c.host.split("@");z&&(c.auth=z.shift(),c.host=c.hostname=z.shift())}return t=t||c.host&&x.length,t&&!E&&x.unshift(""),x.length?c.pathname=x.join("/"):(c.pathname=null,c.path=null),j.isNull(c.pathname)&&j.isNull(c.search)||(c.path=(c.pathname?c.pathname:"")+(c.search?c.search:"")),c.auth=a.auth||c.auth,c.slashes=c.slashes||a.slashes,c.href=c.format(),c},d.prototype.parseHost=function(){var a=this.host,b=l.exec(a);b&&(b=b[0],":"!==b&&(this.port=b.substr(1)),a=a.substr(0,a.length-b.length)),a&&(this.hostname=a)}}),System.registerDynamic("npm:uuid@3.0.1/v1.js",["./lib/rng","./lib/bytesToUuid"],!0,function(a,b,c){function d(a,b,c){var d=b&&c||0,e=b||[];a=a||{};var g=void 0!==a.clockseq?a.clockseq:i,l=void 0!==a.msecs?a.msecs:(new Date).getTime(),m=void 0!==a.nsecs?a.nsecs:k+1,n=l-j+(m-k)/1e4;if(n<0&&void 0===a.clockseq&&(g=g+1&16383),(n<0||l>j)&&void 0===a.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");j=l,k=m,i=g,l+=122192928e5;var o=(1e4*(268435455&l)+m)%4294967296;e[d++]=o>>>24&255,e[d++]=o>>>16&255,e[d++]=o>>>8&255,e[d++]=255&o;var p=l/4294967296*1e4&268435455;e[d++]=p>>>8&255,e[d++]=255&p,e[d++]=p>>>24&15|16,e[d++]=p>>>16&255,e[d++]=g>>>8|128,e[d++]=255&g;for(var q=a.node||h,r=0;r<6;++r)e[d+r]=q[r];return b||f(e)}var e=(this||self,a("./lib/rng")),f=a("./lib/bytesToUuid"),g=e(),h=[1|g[0],g[1],g[2],g[3],g[4],g[5]],i=16383&(g[6]<<8|g[7]),j=0,k=0;c.exports=d}),System.registerDynamic("npm:uuid@3.0.1/lib/rng-browser.js",[],!0,function(a,b,c){var d,e=this||self,f=e.crypto||e.msCrypto;if(f&&f.getRandomValues){var g=new Uint8Array(16);d=function(){return f.getRandomValues(g),g}}if(!d){var h=new Array(16);d=function(){for(var a,b=0;b<16;b++)0==(3&b)&&(a=4294967296*Math.random()),h[b]=a>>>((3&b)<<3)&255;return h}}c.exports=d}),System.registerDynamic("npm:uuid@3.0.1/lib/bytesToUuid.js",[],!0,function(a,b,c){function d(a,b){var c=b||0,d=e;return d[a[c++]]+d[a[c++]]+d[a[c++]]+d[a[c++]]+"-"+d[a[c++]]+d[a[c++]]+"-"+d[a[c++]]+d[a[c++]]+"-"+d[a[c++]]+d[a[c++]]+"-"+d[a[c++]]+d[a[c++]]+d[a[c++]]+d[a[c++]]+d[a[c++]]+d[a[c++]]}for(var e=(this||self,[]),f=0;f<256;++f)e[f]=(f+256).toString(16).substr(1);c.exports=d}),System.registerDynamic("npm:uuid@3.0.1/v4.js",["./lib/rng","./lib/bytesToUuid"],!0,function(a,b,c){function d(a,b,c){var d=b&&c||0;"string"==typeof a&&(b="binary"==a?new Array(16):null,a=null),a=a||{};var g=a.random||(a.rng||e)();if(g[6]=15&g[6]|64,g[8]=63&g[8]|128,b)for(var h=0;h<16;++h)b[d+h]=g[h];return b||f(g)}var e=(this||self,a("./lib/rng")),f=a("./lib/bytesToUuid");c.exports=d}),System.registerDynamic("npm:uuid@3.0.1.json",[],!0,function(){return{main:"index.js",format:"cjs",meta:{"*.json":{format:"json"}},map:{"./lib/rng.js":{browser:"./lib/rng-browser.js"}}}}),System.registerDynamic("npm:uuid@3.0.1/index.js",["./v1","./v4"],!0,function(a,b,c){var d=(this||self,a("./v1")),e=a("./v4"),f=e;f.v1=d,f.v4=e,c.exports=f}),System.registerDynamic("npm:ms@2.0.0.json",[],!0,function(){return{main:"index.js",format:"cjs",meta:{"*.json":{format:"json"}}}}),System.registerDynamic("npm:ms@2.0.0/index.js",[],!0,function(a,b,c){function d(a){if(a=String(a),!(a.length>100)){var b=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(a);if(b){var c=parseFloat(b[1]);switch((b[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*l;case"days":case"day":case"d":return c*k;case"hours":case"hour":case"hrs":case"hr":case"h":return c*j;case"minutes":case"minute":case"mins":case"min":case"m":return c*i;case"seconds":case"second":case"secs":case"sec":case"s":return c*h;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}}}function e(a){return a>=k?Math.round(a/k)+"d":a>=j?Math.round(a/j)+"h":a>=i?Math.round(a/i)+"m":a>=h?Math.round(a/h)+"s":a+"ms"}function f(a){return g(a,k,"day")||g(a,j,"hour")||g(a,i,"minute")||g(a,h,"second")||a+" ms"}function g(a,b,c){if(!(a<b))return a<1.5*b?Math.floor(a/b)+" "+c:Math.ceil(a/b)+" "+c+"s"}var h=(this||self,1e3),i=60*h,j=60*i,k=24*j,l=365.25*k;c.exports=function(a,b){b=b||{};var c=typeof a;if("string"===c&&a.length>0)return d(a);if("number"===c&&!1===isNaN(a))return b.long?f(a):e(a);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(a))}}),System.registerDynamic("npm:debug@2.6.9/src/debug.js",["ms"],!0,function(a,b,c){function d(a){var c,d=0;for(c in a)d=(d<<5)-d+a.charCodeAt(c),d|=0;return b.colors[Math.abs(d)%b.colors.length]}function e(a){function c(){if(c.enabled){var a=c,d=+new Date,e=d-(j||d);a.diff=e,a.prev=j,a.curr=d,j=d;for(var f=new Array(arguments.length),g=0;g<f.length;g++)f[g]=arguments[g];f[0]=b.coerce(f[0]),"string"!=typeof f[0]&&f.unshift("%O");var h=0;f[0]=f[0].replace(/%([a-zA-Z%])/g,function(c,d){if("%%"===c)return c;h++;var e=b.formatters[d];if("function"==typeof e){var g=f[h];c=e.call(a,g),f.splice(h,1),h--}return c}),b.formatArgs.call(a,f);(c.log||b.log||console.log.bind(console)).apply(a,f)}}return c.namespace=a,c.enabled=b.enabled(a),c.useColors=b.useColors(),c.color=d(a),"function"==typeof b.init&&b.init(c),c}function f(a){b.save(a),b.names=[],b.skips=[];for(var c=("string"==typeof a?a:"").split(/[\s,]+/),d=c.length,e=0;e<d;e++)c[e]&&(a=c[e].replace(/\*/g,".*?"),"-"===a[0]?b.skips.push(new RegExp("^"+a.substr(1)+"$")):b.names.push(new RegExp("^"+a+"$")))}function g(){b.enable("")}function h(a){var c,d;for(c=0,d=b.skips.length;c<d;c++)if(b.skips[c].test(a))return!1;for(c=0,d=b.names.length;c<d;c++)if(b.names[c].test(a))return!0;return!1}function i(a){return a instanceof Error?a.stack||a.message:a}this||self;b=c.exports=e.debug=e.default=e,b.coerce=i,b.disable=g,b.enable=f,b.enabled=h,b.humanize=a("ms"),b.names=[],b.skips=[],b.formatters={};var j}),System.registerDynamic("npm:debug@2.6.9.json",[],!0,function(){return{main:"src/browser.js",format:"cjs",map:{"./node.js":{browser:"./src/browser.js"}}}}),System.registerDynamic("npm:debug@2.6.9/src/browser.js",["./debug"],!0,function(a,b,c){function d(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function e(a){var c=this.useColors;if(a[0]=(c?"%c":"")+this.namespace+(c?" %c":" ")+a[0]+(c?"%c ":" ")+"+"+b.humanize(this.diff),c){var d="color: "+this.color;a.splice(1,0,d,"color: inherit");var e=0,f=0;a[0].replace(/%[a-zA-Z%]/g,function(a){"%%"!==a&&(e++,"%c"===a&&(f=e))}),a.splice(f,0,d)}}function f(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function g(a){try{null==a?b.storage.removeItem("debug"):b.storage.debug=a}catch(a){}}function h(){var a;try{a=b.storage.debug}catch(a){}return!a&&"undefined"!=typeof process&&"env"in process&&(a=process.env.DEBUG),a}function i(){try{return window.localStorage}catch(a){}}this||self;b=c.exports=a("./debug"),b.log=f,b.formatArgs=e,b.save=g,b.load=h,b.useColors=d,b.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:i(),b.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],b.formatters.j=function(a){try{return JSON.stringify(a)}catch(a){return"[UnexpectedJSONParseError]: "+a.message}},b.enable(h())}),System.register("citylab/js/lib/custom-debug.js",["debug"],function(a,b){"use strict";var c,d,e,f,g,h,i;return{setters:[function(a){c=a.default}],execute:function(){d=function(a){var b=c(a);b.color="cornflowerblue",b.log=console.info.bind(console);var d=c(a);d.color="goldenrod",d.log=console.warn.bind(console);var e=c(a);e.color="crimson",e.log=console.error.bind(console);var f=c(a);return f.color="limegreen",f.info=b,f.warn=d,f.error=e,f.attachToWindow=!0,f},e=d("app:"),f=d("FirstParty:"),g=d("ThirdParty:ads"),h=d("ThirdParty:analytics"),i=d("ThirdParty:lib"),a("default",{log:e,fpLog:f,tpAdLog:g,tpAnLog:h,tpLibLog:i})}}}),System.registerDynamic("github:systemjs/plugin-json@0.3.0.json",[],!0,function(){return{main:"json"}}),System.register("citylab/js/lib/breakpoints.json!github:systemjs/plugin-json@0.3.0/json.js",[],function(a,b){"use strict";var c,d,e,f,g,h,i,j,k,l,m;return{setters:[],execute:function(){a("__useDefault",c=!0),a("__useDefault",c),a("xsmall",d="(max-width: 575px)"),a("xsmall",d),a("small",e="(min-width: 576px)"),a("small",e),a("smallish",f="(min-width: 684px)"),a("smallish",f),a("medium",g="(min-width: 784px)"),a("medium",g),a("sponsored",h="(min-width: 884px)"),a("sponsored",h),a("large",i="(min-width: 1024px)"),a("large",i),a("xlarge",j="(min-width: 1200px)"),a("xlarge",j),a("standard",k="(min-resolution: 1dppx)"),a("standard",k),a("hd",l="(min-resolution: 1.5dppx)"),a("hd",l),a("retina",m="(min-resolution: 2dppx)"),a("retina",m),a("default",{xsmall:d,small:e,smallish:f,medium:g,sponsored:h,"pair-sponsored-large":"(884px1024px)",large:i,xlarge:j,standard:k,hd:l,retina:m})}}}),System.register("citylab/js/lib/utils.js",["js-cookie","url","uuid","./custom-debug","./breakpoints.json!"],function(a,b){"use strict";function c(a){return new Promise(function(b,c){var d=document.createElement("script");d.addEventListener("load",function a(c){d.removeEventListener("load",a),b(c)}),d.addEventListener("error",function a(b){d.removeEventListener("error",a),c(b)}),d.src=a,document.body.appendChild(d)})}var d,e,f,g,h,i,j,k,l,m,n,o;return a("script",c),{setters:[function(a){d=a.default},function(a){e=a.default},function(a){f=a.default},function(a){g=a.default},function(a){h=a.default}],execute:function(){a("urlParse",i=e.parse),a("urlFormat",j=e.format),a("uuid",k=f.v4),a("getDeviceType",l=function(){var a="mobile";return window.matchMedia(h.xlarge).matches?a="desktop":window.matchMedia(h.large).matches?a="desktop":window.matchMedia(h.medium).matches?a="tablet":window.matchMedia(h.small).matches&&(a="tablet"),a}),a("getDeviceOrientation",m=function(){var a="portrait";return window.matchMedia("(orientation: landscape)").matches&&(a="landscape"),a}),a("link",n=function(a){var b=document.createElement("link");Object.keys(a).map(function(c){return b[c]=a[c]}),document.head.appendChild(b)}),a("customEvent",o=function(a,b,c){var d=new window.CustomEvent(b,c);a.dispatchEvent(d)}),a("cookie",d),a("breakpoints",h),a("customDebug",g),a("customEvent",o),a("getDeviceType",l),a("getDeviceOrientation",m),a("urlParse",i),a("urlFormat",j),a("uuid",k),a("link",n)}}}),System.register("citylab/js/analytics.js",["vendorConfig","./lib/globals","./lib/utils"],function(a,b){"use strict";function c(){window.dataLayer=window.dataLayer||[],window.dataLayer.push({"gtm.start":Date.now(),event:"gtm.js"});var a="gtm";performance.mark(a+":requested"),f("https://www.googletagmanager.com/gtm.js?id="+d).then(function(){return performance.mark(a+":loaded")})}var d,e,f;return{setters:[function(a){d=a.gtm},function(a){e=a.disable},function(a){f=a.script}],execute:function(){-1===e.indexOf("analytics")&&c()}}}),System.register("npm:systemjs-plugin-babel@0.0.25/regenerator-runtime.js",[],function(a,b){"use strict";return{setters:[],execute:function(){a("default",function(a){return function(b){function c(a,b,c,d){var f=b&&b.prototype instanceof e?b:e,g=Object.create(f.prototype),h=new m(d||[]);return g._invoke=j(a,c,h),g}function d(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(a){return{type:"throw",arg:a}}}function e(){}function f(){}function g(){}function h(a){["next","throw","return"].forEach(function(b){a[b]=function(a){return this._invoke(b,a)}})}function i(a){function b(c,e,f,g){var h=d(a[c],a,e);if("throw"!==h.type){var i=h.arg,j=i.value;return j&&"object"==typeof j&&r.call(j,"__await")?Promise.resolve(j.__await).then(function(a){b("next",a,f,g)},function(a){b("throw",a,f,g)}):Promise.resolve(j).then(function(a){i.value=a,f(i)},g)}g(h.arg)}function c(a,c){function d(){return new Promise(function(d,e){b(a,c,d,e)})}return e=e?e.then(d,d):d()}"object"==typeof process&&process.domain&&(b=process.domain.bind(b));var e;this._invoke=c}function j(a,b,c){var e=x;return function(f,g){if(e===z)throw new Error("Generator is already running");if(e===A){if("throw"===f)throw g;return o()}for(;;){var h=c.delegate;if(h){if("return"===f||"throw"===f&&h.iterator[f]===p){c.delegate=null;var i=h.iterator.return;if(i){var j=d(i,h.iterator,g);if("throw"===j.type){f="throw",g=j.arg;continue}}if("return"===f)continue}var j=d(h.iterator[f],h.iterator,g);if("throw"===j.type){c.delegate=null,f="throw",g=j.arg;continue}f="next",g=p;var k=j.arg;if(!k.done)return e=y,k;c[h.resultName]=k.value,c.next=h.nextLoc,c.delegate=null}if("next"===f)c.sent=c._sent=g;else if("throw"===f){if(e===x)throw e=A,g;c.dispatchException(g)&&(f="next",g=p)}else"return"===f&&c.abrupt("return",g);e=z;var j=d(a,b,c);if("normal"===j.type){e=c.done?A:y;var k={value:j.arg,done:c.done};if(j.arg!==B)return k;c.delegate&&"next"===f&&(g=p)}else"throw"===j.type&&(e=A,f="throw",g=j.arg)}}}function k(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function l(a){var b=a.completion||{};b.type="normal",delete b.arg,a.completion=b}function m(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(k,this),this.reset(!0)}function n(a){if(a){var b=a[t];if(b)return b.call(a);if("function"==typeof a.next)return a;if(!isNaN(a.length)){var c=-1,d=function b(){for(;++c<a.length;)if(r.call(a,c))return b.value=a[c],b.done=!1,b;return b.value=p,b.done=!0,b};return d.next=d}}return{next:o}}function o(){return{value:p,done:!0}}var p,q=Object.prototype,r=q.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},t=s.iterator||"@@iterator",u=s.toStringTag||"@@toStringTag",v="object"==typeof a,w=b.regeneratorRuntime;if(w)return void(v&&(a.exports=w));w=b.regeneratorRuntime=v?a.exports:{},w.wrap=c;var x="suspendedStart",y="suspendedYield",z="executing",A="completed",B={},C={};C[t]=function(){return this};var D=Object.getPrototypeOf,E=D&&D(D(n([])));E&&E!==q&&r.call(E,t)&&(C=E);var F=g.prototype=e.prototype=Object.create(C);f.prototype=F.constructor=g,g.constructor=f,g[u]=f.displayName="GeneratorFunction",w.isGeneratorFunction=function(a){var b="function"==typeof a&&a.constructor;return!!b&&(b===f||"GeneratorFunction"===(b.displayName||b.name))},w.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,g):(a.__proto__=g,u in a||(a[u]="GeneratorFunction")),a.prototype=Object.create(F),a},w.awrap=function(a){return{__await:a}},h(i.prototype),w.AsyncIterator=i,w.async=function(a,b,d,e){var f=new i(c(a,b,d,e));return w.isGeneratorFunction(b)?f:f.next().then(function(a){return a.done?a.value:f.next()})},h(F),F[u]="Generator",F.toString=function(){return"[object Generator]"},w.keys=function(a){var b=[];for(var c in a)b.push(c);return b.reverse(),function c(){for(;b.length;){var d=b.pop();if(d in a)return c.value=d,c.done=!1,c}return c.done=!0,c}},w.values=n,m.prototype={constructor:m,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=p,this.done=!1,this.delegate=null,this.tryEntries.forEach(l),!a)for(var b in this)"t"===b.charAt(0)&&r.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=p)},stop:function(){this.done=!0;var a=this.tryEntries[0],b=a.completion;if("throw"===b.type)throw b.arg;return this.rval},dispatchException:function(a){function b(b,d){return f.type="throw",f.arg=a,c.next=b,!!d}if(this.done)throw a;for(var c=this,d=this.tryEntries.length-1;d>=0;--d){var e=this.tryEntries[d],f=e.completion;if("root"===e.tryLoc)return b("end");if(e.tryLoc<=this.prev){var g=r.call(e,"catchLoc"),h=r.call(e,"finallyLoc");if(g&&h){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);if(this.prev<e.finallyLoc)return b(e.finallyLoc)}else if(g){if(this.prev<e.catchLoc)return b(e.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<e.finallyLoc)return b(e.finallyLoc)}}}},abrupt:function(a,b){for(var c=this.tryEntries.length-1;c>=0;--c){var d=this.tryEntries[c];if(d.tryLoc<=this.prev&&r.call(d,"finallyLoc")&&this.prev<d.finallyLoc){var e=d;break}}e&&("break"===a||"continue"===a)&&e.tryLoc<=b&&b<=e.finallyLoc&&(e=null);var f=e?e.completion:{};return f.type=a,f.arg=b,e?this.next=e.finallyLoc:this.complete(f),B},complete:function(a,b){if("throw"===a.type)throw a.arg;"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=a.arg,this.next="end"):"normal"===a.type&&b&&(this.next=b)},finish:function(a){for(var b=this.tryEntries.length-1;b>=0;--b){var c=this.tryEntries[b];if(c.finallyLoc===a)return this.complete(c.completion,c.afterLoc),l(c),B}},catch:function(a){for(var b=this.tryEntries.length-1;b>=0;--b){var c=this.tryEntries[b];if(c.tryLoc===a){var d=c.completion;if("throw"===d.type){var e=d.arg;l(c)}return e}}throw new Error("illegal catch attempt")},delegateYield:function(a,b,c){return this.delegate={iterator:n(a),resultName:b,nextLoc:c},B}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this),a.exports}({exports:{}}))}}}),System.registerDynamic("npm:systemjs-plugin-babel@0.0.25.json",[],!0,function(){return{main:"plugin-babel.js",map:{"systemjs-babel-build":{browser:"./systemjs-babel-browser.js",default:"./systemjs-babel-browser.js"}},meta:{"./plugin-babel.js":{format:"cjs"}}}}),System.register("npm:systemjs-plugin-babel@0.0.25/babel-helpers/asyncToGenerator.js",[],function(a,b){"use strict";return{setters:[],execute:function(){a("default",function(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}if(!g.done)return Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)});a(h)}return d("next")})}})}}}),System.register("citylab/js/ads.js",["npm:systemjs-plugin-babel@0.0.25/regenerator-runtime.js","npm:systemjs-plugin-babel@0.0.25/babel-helpers/asyncToGenerator.js","adsConfig"],function(a,b){"use strict";var c,d,e,f;return{setters:[function(a){c=a.default},function(a){d=a.default},function(a){e=a}],execute:function(){f=function(){var a=d(c.mark(function a(){var b,d,f;return c.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=Object.assign({},e),a.next=3,System.import("adsjs");case 3:d=a.sent,f=d.Controller,new f(b);case 6:case"end":return a.stop()}},a,this)}));return function(){return a.apply(this,arguments)}}(),performance.mark("citylab_ads_loaded"),f()}}}),System.register("citylab/js/main.js",["lazysizes","lazysizes/plugins/include/ls.include","waypoints","./lib/globals","./lib/namespace","./analytics","./ads"],function(a,b){"use strict";return{setters:[function(a){},function(a){},function(a){},function(a){},function(a){},function(a){},function(a){}],execute:function(){window.lazySizesConfig=window.lazySizesConfig||{},window.lazySizesConfig.systemJs=function(a,b){window.System.import(a).then(b)}}}});