Java.perform(function () {
    console.log("[*] Starting Anti-Root Detection Bypass...");
    try {
        console.log("[*] Hooking a.ga1 (Root Detection Class)...");
        var ga1Class = Java.use('a.ga1');
        try {
            ga1Class.detectRootManagementApps.overload().implementation = function () {
                console.log("[+] a.ga1.detectRootManagementApps() bypassed");
                return false;
            };
        } catch (e) {
            console.log("[-] detectRootManagementApps() overload error: " + e);
        }

        try {
            ga1Class.detectRootManagementApps.overload('[Ljava.lang.String;').implementation = function (paths) {
                console.log("[+] a.ga1.detectRootManagementApps(String[]) bypassed");
                return false;
            };
        } catch (e) {
            console.log("[-] detectRootManagementApps(String[]) overload error: " + e);
        }

        try {
            ga1Class.isRooted.implementation = function () {
                console.log("[+] a.ga1.isRooted() bypassed");
                return false;
            };
        } catch (e) {
            console.log("[-] isRooted overload error: " + e);
        }

        try {
            var ArrayList = Java.use('java.util.ArrayList');
            ga1Class.a.overload('java.util.ArrayList').implementation = function (list) {
                console.log("[+] a.ga1.a(ArrayList) bypassed");
                return false;
            };
        } catch (e) {
            console.log("[-] a(ArrayList) overload error: " + e);
        }

        var methods = ga1Class.class.getDeclaredMethods();
        methods.forEach(function (method) {
            var methodName = method.getName();
            try {
                ga1Class[methodName].implementation = function () {
                    console.log("[+] a.ga1." + methodName + "() bypassed - returning false");
                    return false;
                };
            } catch (e) {
            }
        });

    } catch (e) {
        console.log("[-] a.ga1 class not found or error: " + e);
    }

    try {
        console.log("[*] Hooking a.ha1 (JailBreak Detection Class)...");
        var ha1Class = Java.use('a.ha1');

        try {
            ha1Class.isJailBroken.overload('android.content.Context').implementation = function (context) {
                console.log("[+] a.ha1.isJailBroken(Context) bypassed");
                return false;
            };
        } catch (e) {
            console.log("[-] isJailBroken(Context) overload error: " + e);
        }

        try {
            ha1Class.h.implementation = function () {
                console.log("[+] a.ha1.h() bypassed");
                return false;
            };
        } catch (e) {
            console.log("[-] h() overload error: " + e);
        }

        var methods = ha1Class.class.getDeclaredMethods();
        methods.forEach(function (method) {
            var methodName = method.getName();
            try {
                ha1Class[methodName].implementation = function () {
                    console.log("[+] a.ha1." + methodName + "() bypassed - returning false");
                    return false;
                };
            } catch (e) {
            }
        });

    } catch (e) {
        console.log("[-] a.ha1 class not found or error: " + e);
    }

    try {
        console.log("[*] Hooking RootBeer...");
        var RootBeer = Java.use('com.scottyab.rootbeer.RootBeer');

        RootBeer.isRooted.overload().implementation = function () {
            console.log("[+] RootBeer.isRooted() bypassed");
            return false;
        };

        RootBeer.isRootedWithoutBusyBoxCheck.overload().implementation = function () {
            console.log("[+] RootBeer.isRootedWithoutBusyBoxCheck() bypassed");
            return false;
        };

        RootBeer.detectRootManagementApps.overload().implementation = function () {
            console.log("[+] RootBeer.detectRootManagementApps() bypassed");
            return false;
        };

        RootBeer.detectPotentiallyDangerousApps.overload().implementation = function () {
            console.log("[+] RootBeer.detectPotentiallyDangerousApps() bypassed");
            return false;
        };

        RootBeer.detectTestKeys.overload().implementation = function () {
            console.log("[+] RootBeer.detectTestKeys() bypassed");
            return false;
        };

        RootBeer.checkForBinary.overload('java.lang.String').implementation = function (str) {
            console.log("[+] RootBeer.checkForBinary('" + str + "') bypassed");
            return false;
        };

        RootBeer.checkForDangerousProps.overload().implementation = function () {
            console.log("[+] RootBeer.checkForDangerousProps() bypassed");
            return false;
        };

        RootBeer.checkForRWPaths.overload().implementation = function () {
            console.log("[+] RootBeer.checkForRWPaths() bypassed");
            return false;
        };

        RootBeer.checkSuExists.overload().implementation = function () {
            console.log("[+] RootBeer.checkSuExists() bypassed");
            return false;
        };

        RootBeer.checkForRootNative.overload().implementation = function () {
            console.log("[+] RootBeer.checkForRootNative() bypassed");
            return false;
        };

        RootBeer.checkForMagiskBinary.overload().implementation = function () {
            console.log("[+] RootBeer.checkForMagiskBinary() bypassed");
            return false;
        };
    } catch (e) {
        console.log("[-] RootBeer not found: " + e);
    }

    try {
        console.log("[*] Hooking File.exists()...");
        var File = Java.use('java.io.File');

        File.exists.implementation = function () {
            var path = this.getAbsolutePath();

            var rootPaths = [
                '/system/app/Superuser.apk',
                '/sbin/su',
                '/system/bin/su',
                '/system/xbin/su',
                '/data/local/xbin/su',
                '/data/local/bin/su',
                '/system/sd/xbin/su',
                '/system/bin/failsafe/su',
                '/data/local/su',
                '/su/bin/su',
                '/system/xbin/which',
                '/system/bin/which',
                '/data/data/com.noshufou.android.su',
                '/data/data/com.thirdparty.superuser',
                '/data/data/eu.chainfire.supersu',
                '/data/data/com.koushikdutta.superuser',
                '/system/app/SuperSU.apk',
                '/system/etc/init.d/99SuperSUDaemon',
                '/dev/com.koushikdutta.superuser.daemon/',
                '/system/xbin/daemonsu',
                '/system/xbin/busybox',
                '/system/bin/busybox',
                '/data/adb/magisk',
                '/sbin/.magisk',
                '/cache/.disable_magisk',
                '/dev/.magisk.unblock',
                '/cache/magisk.log',
                '/data/adb/magisk.img',
                '/data/adb/magisk.db',
                '/data/adb/magisk_simple',
                '/init.magisk.rc',
                '/system/xbin/ku.sud',
                '/data/adb/ksud'
            ];

            for (var i = 0; i < rootPaths.length; i++) {
                if (path.indexOf(rootPaths[i]) >= 0) {
                    console.log("[+] File.exists('" + path + "') bypassed");
                    return false;
                }
            }

            return this.exists.call(this);
        };
    } catch (e) {
        console.log("[-] Error hooking File.exists: " + e);
    }

    try {
        console.log("[*] Hooking Runtime.exec()...");
        var Runtime = Java.use('java.lang.Runtime');

        Runtime.exec.overload('[Ljava.lang.String;').implementation = function (cmd) {
            var command = cmd.join(' ');

            if (command.indexOf('su') >= 0 ||
                command.indexOf('which') >= 0 ||
                command.indexOf('busybox') >= 0 ||
                command.indexOf('magisk') >= 0) {
                console.log("[+] Runtime.exec('" + command + "') bypassed");

                var ProcessBuilder = Java.use('java.lang.ProcessBuilder');
                var fakeProcess = ProcessBuilder.$new(['echo', 'fake']);
                return fakeProcess.start();
            }

            return this.exec.overload('[Ljava.lang.String;').call(this, cmd);
        };

        Runtime.exec.overload('java.lang.String').implementation = function (cmd) {
            if (cmd.indexOf('su') >= 0 ||
                cmd.indexOf('which') >= 0 ||
                cmd.indexOf('busybox') >= 0 ||
                cmd.indexOf('magisk') >= 0) {
                console.log("[+] Runtime.exec('" + cmd + "') bypassed");

                var ProcessBuilder = Java.use('java.lang.ProcessBuilder');
                var fakeProcess = ProcessBuilder.$new(['echo', 'fake']);
                return fakeProcess.start();
            }

            return this.exec.overload('java.lang.String').call(this, cmd);
        };
    } catch (e) {
        console.log("[-] Error hooking Runtime.exec: " + e);
    }

    try {
        console.log("[*] Hooking ProcessBuilder...");
        var ProcessBuilder = Java.use('java.lang.ProcessBuilder');

        ProcessBuilder.start.implementation = function () {
            var commands = this.command();
            var cmd = commands.toString();

            if (cmd.indexOf('su') >= 0 ||
                cmd.indexOf('which') >= 0 ||
                cmd.indexOf('busybox') >= 0 ||
                cmd.indexOf('magisk') >= 0) {
                console.log("[+] ProcessBuilder.start('" + cmd + "') bypassed");

                var ArrayList = Java.use('java.util.ArrayList');
                var fakeCmd = ArrayList.$new();
                fakeCmd.add('echo');
                fakeCmd.add('fake');
                this.command(fakeCmd);
            }

            return this.start.call(this);
        };
    } catch (e) {
        console.log("[-] Error hooking ProcessBuilder: " + e);
    }

    try {
        console.log("[*] Hooking System Properties...");
        var SystemProperties = Java.use('android.os.SystemProperties');

        SystemProperties.get.overload('java.lang.String').implementation = function (key) {
            var value = this.get.overload('java.lang.String').call(this, key);

            if (key === 'ro.debuggable' || key === 'ro.secure') {
                console.log("[+] SystemProperties.get('" + key + "') = '0'");
                return '0';
            }

            if (key === 'ro.build.tags' && value === 'test-keys') {
                console.log("[+] SystemProperties.get('" + key + "') = 'release-keys'");
                return 'release-keys';
            }

            if (key.indexOf('ro.build.selinux') >= 0) {
                console.log("[+] SystemProperties.get('" + key + "') = '1'");
                return '1';
            }

            return value;
        };

        SystemProperties.get.overload('java.lang.String', 'java.lang.String').implementation = function (key, def) {
            var value = this.get.overload('java.lang.String', 'java.lang.String').call(this, key, def);

            if (key === 'ro.debuggable' || key === 'ro.secure') {
                console.log("[+] SystemProperties.get('" + key + "', '" + def + "') = '0'");
                return '0';
            }

            if (key === 'ro.build.tags' && value === 'test-keys') {
                console.log("[+] SystemProperties.get('" + key + "', '" + def + "') = 'release-keys'");
                return 'release-keys';
            }

            return value;
        };
    } catch (e) {
        console.log("[-] Error hooking SystemProperties: " + e);
    }

    try {
        console.log("[*] Hooking PackageManager...");
        var PackageManager = Java.use('android.app.ApplicationPackageManager');

        PackageManager.getPackageInfo.overload('java.lang.String', 'int').implementation = function (pkgName, flags) {
            var rootApps = [
                'com.noshufou.android.su',
                'com.noshufou.android.su.elite',
                'eu.chainfire.supersu',
                'com.koushikdutta.superuser',
                'com.thirdparty.superuser',
                'com.yellowes.su',
                'com.topjohnwu.magisk',
                'com.kingroot.kinguser',
                'com.kingo.root',
                'com.smedialink.oneclickroot',
                'com.zhiqupk.root.global',
                'com.alephzain.framaroot'
            ];

            for (var i = 0; i < rootApps.length; i++) {
                if (pkgName === rootApps[i]) {
                    console.log("[+] PackageManager.getPackageInfo('" + pkgName + "') blocked");
                    var NameNotFoundException = Java.use('android.content.pm.PackageManager$NameNotFoundException');
                    throw NameNotFoundException.$new(pkgName);
                }
            }

            return this.getPackageInfo.overload('java.lang.String', 'int').call(this, pkgName, flags);
        };
    } catch (e) {
        console.log("[-] Error hooking PackageManager: " + e);
    }

    try {
        console.log("[*] Hooking Build.TAGS...");
        var Build = Java.use('android.os.Build');
        Build.TAGS.value = 'release-keys';
        console.log("[+] Build.TAGS set to 'release-keys'");
    } catch (e) {
        console.log("[-] Error hooking Build.TAGS: " + e);
    }

    try {
        console.log("[*] Hooking native functions...");

        var fopenPtr = Module.findExportByName('libc.so', 'fopen');
        if (fopenPtr) {
            Interceptor.attach(fopenPtr, {
                onEnter: function (args) {
                    var path = Memory.readUtf8String(args[0]);

                    if (path.indexOf('su') >= 0 ||
                        path.indexOf('magisk') >= 0 ||
                        path.indexOf('Superuser') >= 0) {
                        console.log('[+] fopen("' + path + '") bypassed');
                        args[0] = Memory.allocUtf8String('/system/fake');
                    }
                }
            });
        }

        var systemPtr = Module.findExportByName('libc.so', 'system');
        if (systemPtr) {
            Interceptor.attach(systemPtr, {
                onEnter: function (args) {
                    var cmd = Memory.readUtf8String(args[0]);

                    if (cmd.indexOf('su') >= 0 ||
                        cmd.indexOf('which') >= 0 ||
                        cmd.indexOf('magisk') >= 0) {
                        console.log('[+] system("' + cmd + '") bypassed');
                        args[0] = Memory.allocUtf8String('echo fake');
                    }
                }
            });
        }

        var accessPtr = Module.findExportByName('libc.so', 'access');
        if (accessPtr) {
            Interceptor.attach(accessPtr, {
                onEnter: function (args) {
                    var path = Memory.readUtf8String(args[0]);

                    if (path.indexOf('su') >= 0 ||
                        path.indexOf('magisk') >= 0 ||
                        path.indexOf('Superuser') >= 0) {
                        console.log('[+] access("' + path + '") bypassed');
                        args[0] = Memory.allocUtf8String('/system/fake');
                    }
                }
            });
        }

        var statPtr = Module.findExportByName('libc.so', 'stat');
        if (statPtr) {
            Interceptor.attach(statPtr, {
                onEnter: function (args) {
                    var path = Memory.readUtf8String(args[0]);

                    if (path.indexOf('su') >= 0 ||
                        path.indexOf('magisk') >= 0 ||
                        path.indexOf('Superuser') >= 0) {
                        console.log('[+] stat("' + path + '") bypassed');
                        args[0] = Memory.allocUtf8String('/system/fake');
                    }
                }
            });
        }

        console.log("[+] Native hooks loaded successfully");
    } catch (e) {
        console.log("[-] Error hooking native functions: " + e);
    }

    try {
        console.log("[*] Hooking System.exit() and Process.killProcess()...");

        var System = Java.use('java.lang.System');
        System.exit.implementation = function (code) {
            console.log('[!] System.exit(' + code + ') called - BLOCKED!');
        };

        var Runtime = Java.use('java.lang.Runtime');
        Runtime.exit.implementation = function (code) {
            console.log('[!] Runtime.exit(' + code + ') called - BLOCKED!');
        };

        var Process = Java.use('android.os.Process');
        Process.killProcess.implementation = function (pid) {
            console.log('[!] Process.killProcess(' + pid + ') called - BLOCKED!');
        };

        try {
            Activity.finish.overload().implementation = function () {
                console.log('[!] Activity.finish() called - BLOCKED!');
            };
        } catch (e) {
            console.log("[-] Activity.finish() error: " + e);
        }

        try {
            Activity.finish.overload('int').implementation = function (finishTask) {
                console.log('[!] Activity.finish(int) called - BLOCKED!');
            };
        } catch (e) {
            console.log("[-] Activity.finish(int) error: " + e);
        }

        try {
            Activity.finishAndRemoveTask.implementation = function () {
                console.log('[!] Activity.finishAndRemoveTask() called - BLOCKED!');
            };
        } catch (e) {
            console.log("[-] Activity.finishAndRemoveTask() error: " + e);
        }

        try {
            Activity.finishAffinity.implementation = function () {
                console.log('[!] Activity.finishAffinity() called - BLOCKED!');
            };
        } catch (e) {
            console.log("[-] Activity.finishAffinity() error: " + e);
        }

    } catch (e) {
        console.log("[-] Error hooking exit methods: " + e);
    }

    console.log("[*] Anti-Root Detection Bypass loaded successfully!");
    console.log("[*] Monitoring root detection attempts...");
});

Java.perform(function () {
    var TrustManagerImpl = Java.use('com.android.org.conscrypt.TrustManagerImpl');
    var ArrayList = Java.use("java.util.ArrayList");
    TrustManagerImpl.verifyChain.implementation = function (untrustedChain, trustAnchorChain,
        host, clientAuth, ocspData, tlsSctData) {
        console.log("[+] Bypassing TrustManagerImpl->verifyChain()");
        return untrustedChain;
    }
    TrustManagerImpl.checkTrustedRecursive.implementation = function (certs, host, clientAuth, untrustedChain,
        trustAnchorChain, used) {
        console.log("[+] Bypassing TrustManagerImpl->checkTrustedRecursive()");
        return ArrayList.$new();
    };
});