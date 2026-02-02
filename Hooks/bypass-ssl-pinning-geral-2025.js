Java.perform(function () {
    console.log("[*] Starting comprehensive SSL pinning bypass...");

    try {
        var SSLContext = Java.use("javax.net.ssl.SSLContext");
        SSLContext.init.overload(
            "[Ljavax.net.ssl.KeyManager;",
            "[Ljavax.net.ssl.TrustManager;",
            "java.security.SecureRandom"
        ).implementation = function (km, tm, sr) {
            console.log("[+] SSLContext.init() bypass");
            this.init(km, tm, sr);
        };
    } catch (err) {
        console.log("[-] SSLContext.init() hook failed: " + err);
    }

    try {
        var CertPinner = Java.use("okhttp3.CertificatePinner");
        CertPinner.check.overload("java.lang.String", "java.util.List").implementation = function (host, certs) {
            console.log("[+] Bypassing okhttp3.CertificatePinner.check() for host: " + host);
            return;
        };
    } catch (err) {
        console.log("[-] okhttp3.CertificatePinner.check() hook failed: " + err);
    }

    try {
        if (Java.use("okhttp3.CertificatePinner").check$okhttp) {
            Java.use("okhttp3.CertificatePinner").check$okhttp
                .overload("java.lang.String", "java.util.List")
                .implementation = function (host, certs) {
                    console.log("[+] Bypassing okhttp3.CertificatePinner.check$okhttp() for host: " + host);
                    return;
                };
        }
    } catch (err) {
        console.log("[-] okhttp3.CertificatePinner.check$okhttp() hook failed: " + err);
    }

    try {
        var TrustManagerImpl = Java.use("com.android.org.conscrypt.TrustManagerImpl");
        TrustManagerImpl.verifyChain.implementation = function (untrustedChain, trustAnchorChain, host, clientAuth, ocspData, tlsSctData) {
            console.log("[+] TrustManagerImpl.verifyChain() called for host: " + host);
            return untrustedChain;
        };
    } catch (err) {
        console.log("[-] TrustManagerImpl.verifyChain() hook failed: " + err);
    }

    try {
        TrustManagerImpl.checkTrustedRecursive.implementation = function (certs, ocspData, tlsSctData, host, clientAuth) {
            console.log("[+] TrustManagerImpl.checkTrustedRecursive() bypassed for host: " + host);
            var ArrayList = Java.use("java.util.ArrayList");
            var certList = ArrayList.$new();
            for (var i = 0; i < certs.length; i++) {
                certList.add(certs[i]);
            }
            return certList;
        };
    } catch (err) {
        console.log("[-] TrustManagerImpl.checkTrustedRecursive() hook failed: " + err);
    }

    console.log("[*] All SSL pinning hooks deployed successfully.");
});