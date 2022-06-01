function yksHesap() {
    var e = document.getElementById("tyt_turkce_dogru").value
      , s = document.getElementById("tyt_turkce_yanlis").value
      , t = document.getElementById("tyt_sos_dogru").value
      , r = document.getElementById("tyt_sos_yanlis").value
      , i = document.getElementById("tyt_fen_dogru").value
      , y = document.getElementById("tyt_fen_yanlis").value
      , o = document.getElementById("tyt_mat_dogru").value
      , l = document.getElementById("tyt_mat_yanlis").value
      , Y = document.getElementById("diploma_puan").value
      , d = Y.replace(",", ".");
    document.getElementById("chbM");
    if (parseInt(e) + parseInt(s) > 40 ? (s.value = "",
    alert("TYT Türkçe doğru ve yanlış toplamın 40'ı geçemez")) : parseInt(o) + parseInt(l) > 40 && (alert("TYT Matematik doğru ve yanlış toplamın 40'ı geçemez"),
    l.value = ""),
    parseInt(t) + parseInt(r) > 20 && (alert("TYT Sosyal doğru ve yanlış toplamın 20'yi geçemez"),
    t.value = ""),
    parseInt(i) + parseInt(y) > 20 && (alert("TYT Fen doğru ve yanlış toplamın 20'yi geçemez"),
    i.value = ""),
    parseInt(e) > 40 && (e.value = "",
    alert("TYT Türkçe doğruların 40'ı geçemez")),
    parseInt(s) > 40 && (e.value = "",
    alert("TYT Türkçe yanlışların 40'ı geçemez")),
    parseInt(t) > 20 && (t.value = "",
    alert("TYT Sosyal  doğruların 20'yi geçemez")),
    parseInt(r) > 20 && (r.value = "",
    alert("TYT Sosyal  yanlışların 20'yi geçemez")),
    parseInt(o) > 40 && (o.value = "",
    alert("TYT Matematik  doğruların 40'ı geçemez")),
    parseInt(l) > 40 && (l.value = "",
    alert("TYT Matematik  yanlışların 40'ı geçemez")),
    parseInt(i) > 20 && (i.value = "",
    alert("TYT Fen  doğruların 20'yi geçemez")),
    parseInt(y) > 20)
        e.value = "",
        alert("TYT Fen  yanlışların 20'yi geçemez");
    else {
        var a = document.getElementById("yks_mat_dogru").value
          , f = document.getElementById("yks_mat_yanlis").value
          , m = document.getElementById("yks_edb_dogru").value
          , F = document.getElementById("yks_edb_yanlis").value
          , z = document.getElementById("yks_cog1_dogru").value
          , x = document.getElementById("yks_cog1_yanlis").value
          , n = document.getElementById("yks_tarih1_dogru").value
          , u = document.getElementById("yks_tarih1_yanlis").value
          , _ = document.getElementById("yks_tarih2_dogru").value
          , v = document.getElementById("yks_tarih2_yanlis").value
          , I = document.getElementById("yks_cog2_dogru").value
          , g = document.getElementById("yks_cog2_yanlis").value
          , c = document.getElementById("yks_felsefe_dogru").value
          , B = document.getElementById("yks_felsefe_yanlis").value
          , E = document.getElementById("yks_ilave_dogru").value
          , p = document.getElementById("yks_ilave_yanlis").value
          , k = document.getElementById("yks_fizik_dogru").value
          , T = document.getElementById("yks_fizik_yanlis").value
          , h = document.getElementById("yks_kimya_dogru").value
          , N = document.getElementById("yks_kimya_yanlis").value
          , A = document.getElementById("yks_biyoloji_dogru").value
          , D = document.getElementById("yks_biyoloji_yanlis").value
          , b = document.getElementById("yks_dil_dogru").value
          , M = document.getElementById("yks_dil_yanlis").value;
        if (parseInt(a) + parseInt(f) > 40)
            a.value = "",
            f.value = "",
            alert("AYT Matematik Doğru ve Yanlış toplamı 40'tan fazla olamaz");
        else if (parseInt(a) > 40)
            a.value = "",
            alert("AYT Matematik doğru sayısı 40'tan fazla olamaz.");
        else if (parseInt(f) > 40)
            f.value = "",
            alert("AYT Matematik yanlış sayısı 40'tan fazla olamaz.");
        else if (parseInt(k) + parseInt(T) > 14)
            k.value = "",
            T.value = "",
            alert("AYT Fizik Doğru ve Yanlış toplamı 14'den fazla olamaz");
        else if (parseInt(k) > 14)
            k.value = "",
            alert("AYT Fizik doğru sayısı 14'den fazla olamaz.");
        else if (parseInt(T) > 14)
            T.value = "",
            alert("AYT Fizik yanlış sayısı 14'den fazla olamaz.");
        else if (parseInt(m) + parseInt(F) > 24)
            m.value = "",
            F.value = "",
            alert("AYT Edebiyat Doğru ve Yanlış toplamı 24'den fazla olamaz");
        else if (parseInt(m) > 24)
            m.value = "",
            alert("AYT Edebiyat doğru sayısı 24'den fazla olamaz.");
        else if (parseInt(F) > 24)
            F.value = "",
            alert("AYT Edebiyat yanlış sayısı 24'den fazla olamaz.");
        else if (parseInt(z) + parseInt(x) > 6)
            z.value = "",
            x.value = "",
            alert("Coğrafya-1 Doğru ve Yanlış toplamı 6'dan fazla olamaz");
        else if (parseInt(z) > 6)
            z.value = "",
            alert("AYT Coğrafya-1 doğru sayısı 6'dan fazla olamaz.");
        else if (parseInt(x) > 6)
            x.value = "",
            alert("AYT Coğrafya-1 yanlış sayısı 6'dan fazla olamaz.");
        else if (parseInt(_) + parseInt(v) > 11)
            _.value = "",
            v.value = "",
            alert("Tarih-2 Doğru ve Yanlış toplamı 11'den fazla olamaz");
        else if (parseInt(_) > 11)
            _.value = "",
            alert("AYT Tarih-2 doğru sayısı 11'den fazla olamaz.");
        else if (parseInt(v) > 11)
            v.value = "",
            alert("AYT Tarih-2 yanlış sayısı 11'den fazla olamaz.");
        else if (parseInt(n) + parseInt(u) > 10)
            n.value = "",
            u.value = "",
            alert("Tarih-1 Doğru ve Yanlış toplamı 10'dan fazla olamaz");
        else if (parseInt(n) > 10)
            n.value = "",
            alert("AYT Tarih-1 doğru sayısı 10'dan fazla olamaz.");
        else if (parseInt(u) > 10)
            u.value = "",
            alert("AYT Tarih-1 yanlış sayısı 10'dan fazla olamaz.");
        else if (parseInt(I) + parseInt(g) > 11)
            I.value = "",
            g.value = "",
            alert("Coğrafya-2 Doğru ve Yanlış toplamı 11'den fazla olamaz");
        else if (parseInt(I) > 11)
            I.value = "",
            alert("AYT Coğrafya-2 doğru sayısı 11'den fazla olamaz.");
        else if (parseInt(g) > 11)
            g.value = "",
            alert("AYT Coğrafya-2 yanlış sayısı 11'den fazla olamaz.");
        else if (parseInt(c) + parseInt(B) > 12)
            c.value = "",
            B.value = "",
            alert("Felsefe Doğru ve Yanlış toplamı 12'den fazla olamaz");
        else if (parseInt(c) > 12)
            c.value = "",
            alert("AYT Felsefe doğru sayısı 12'den fazla olamaz.");
        else if (parseInt(B) > 12)
            B.value = "",
            alert("AYT Felsefe yanlış sayısı 12'den fazla olamaz.");
        else if (parseInt(E) + parseInt(p) > 6)
            E.value = "",
            p.value = "",
            alert("AYT İlave Grup Doğru ve Yanlış toplamı 6'dan fazla olamaz");
        else if (parseInt(E) > 6)
            E.value = "",
            alert("AYT İlave Grup doğru sayısı 6'dan fazla olamaz.");
        else if (parseInt(p) > 6)
            p.value = "",
            alert("AYT İlave Grup yanlış sayısı 6'dan fazla olamaz.");
        else if (parseInt(h) + parseInt(N) > 13)
            h.value = "",
            N.value = "",
            alert("AYT Kimya Doğru ve Yanlış toplamı 13'den fazla olamaz");
        else if (parseInt(h) > 13)
            h.value = "",
            alert("AYT Kimya doğru sayısı 13'den fazla olamaz.");
        else if (parseInt(N) > 13)
            N.value = "",
            alert("AYT Felsefe yanlış sayısı 13'den fazla olamaz.");
        else if (parseInt(A) + parseInt(D) > 13)
            A.value = "",
            D.value = "",
            alert("AYT Biyoloji Doğru ve Yanlış toplamı 13'den fazla olamaz");
        else if (parseInt(A) > 13)
            A.value = "",
            alert("AYT Biyoloji doğru sayısı 13'den fazla olamaz.");
        else if (parseInt(D) > 13)
            D.value = "",
            alert("AYT Biyoloji yanlış sayısı 13'den fazla olamaz.");
        else if (parseInt(Y) > 100)
            Y.value = "",
            alert("Diploma Puanı 100'den fazla olamaz!");
        else if (parseInt(b) + parseInt(M) > 80)
            b.value = "",
            M.value = "",
            alert("Yabancı Dil Doğru ve Yanlış toplamı 80'den fazla olamaz");
        else if (parseInt(b) > 80)
            b.value = "",
            alert("Yabancı Dil doğru sayısı 80'den fazla olamaz.");
        else if (parseInt(M) > 80)
            M.value = "",
            alert("Yabancı Dil yanlış sayısı 80'den fazla olamaz.");
        else if (parseInt(Y) > 100)
            Y.value = "",
            alert("Diploma Puanı 100'den fazla olamaz!");
        else {
            var j, C, G, S, K, P, H, q, w, J, L, O, Q = 0, R = 0, U = 0, V = 0;
            dilNet = 0,
            S = e - .25 * s,
            tsosNet = t - .25 * r,
            O = o - .25 * l,
            G = i - .25 * y,
            j = m - .25 * F,
            C = a - .25 * f,
            K = z - .25 * x,
            H = _ - .25 * v,
            P = n - .25 * u,
            cog2Net = I - .25 * g,
            felsefeNet = c - .25 * B,
            q = E - .25 * p,
            w = k - .25 * T,
            J = h - .25 * N,
            L = A - .25 * D,
            dilNet = b - .25 * M,
            Q = 1 == chbM.checked ? 6 * d / 10 / 2 : 6 * d / 10,
            document.getElementById("tyt_turkce_net").value = S,
            document.getElementById("tyt_sos_net").value = tsosNet,
            document.getElementById("tyt_mat_net").value = O,
            document.getElementById("tyt_fen_net").value = G,
            document.getElementById("yks_edb_net").value = j,
            document.getElementById("yks_cog1_net").value = K,
            document.getElementById("yks_cog2_net").value = cog2Net,
            document.getElementById("yks_tarih2_net").value = H,
            document.getElementById("yks_tarih1_net").value = P,
            document.getElementById("yks_felsefe_net").value = felsefeNet,
            document.getElementById("yks_ilave_net").value = q,
            document.getElementById("yks_fizik_net").value = w,
            document.getElementById("yks_mat_net").value = C,
            document.getElementById("yks_kimya_net").value = J,
            document.getElementById("yks_biyoloji_net").value = L,
            document.getElementById("yks_dil_net").value = dilNet,
            tyt2021 = 2.92085 * S + 2.979017 * tsosNet + 4.52956 * O + 3.184504 * G + 97.339196,
            tyt2020 = 3.24011 * S + 3.65789 * tsosNet + 3.34392 * O + 3.40551 * G + 99.4209,
            tyt2019 = 3.10474 * S + 3.02917 * tsosNet + 3.72544 * O + 3.49299 * G + 100.069,
            mf2021 = 98.19315 + 1.133355 * S + 1.155924 * tsosNet + 1.757563 * O + 1.235649 * G + 3.404476 * C + 3.476795 * w + 2.464302 * J + 2.205834 * L,
            mf2020 = 99.1347 + 1.38438 * S + 1.56288 * tsosNet + 1.42871 * O + 1.45503 * G + 2.70774 * C + 3.15077 * w + 2.77012 * J + 3.30867 * L,
            mf2019 = 99.6215 + 1.23019 * S + 1.1989 * tsosNet + 1.47593 * O + 1.38159 * G + 2.97953 * C + 3.11025 * w + 3.13069 * J + 3.08266 * L,
            tm2021 = 92.492812 + 1.199974 * S + 1.223872 * tsosNet + 1.860876 * O + 1.308286 * G + 3.604599 * C + 3.02628 * j + 3.345315 * P + 2.365138 * K,
            tm2020 = 98.19169 + 1.37684 * S + 1.55435 * tsosNet + 1.420936 * O + 1.44713 * G + 2.692996 * C + 3.177306 * j + 3.53504 * P + 2.962547 * K,
            tm2019 = 98.236 + 1.30985 * S + 1.27656 * tsosNet + 1.57122 * O + 1.47175 * G + 3.1716 * C + 3.00307 * j + 2.98814 * P + 2.39543 * K,
            soz2021 = 92.896171 + 1.193644 * S + 1.217418 * tsosNet + 1.851063 * O + 1.301386 * G + 3.327671 * P + 2.35266 * K + 4.984242 * H + 2.606521 * cog2Net + 3.647563 * felsefeNet + 2.740903 * q + 3.01032 * j,
            soz2020 = 94.45322 + 1.3534 * S + 1.52787 * tsosNet + 1.396737 * O + 1.422487 * G + 3.474835 * P + 2.912098 * K + 3.695031 * H + 2.599469 * cog2Net + 3.2201 * felsefeNet + 3.943899 * q + 3.123195 * j,
            soz2019 = 95.1079 + 1.39288 * S + 1.35786 * tsosNet + 1.67094 * O + 1.56475 * G + 3.17738 * P + 2.54792 * K + 3.34376 * H + 2.74658 * cog2Net + 3.13825 * felsefeNet + 3.32143 * q + 3.19362 * j,
            dil2021 = 95.370388 + 1.536536 * S + 1.567139 * tsosNet + 2.38281 * O + 1.67526 * G + 2.519099 * dilNet,
            dil2020 = 99.02159 + 1.565458 * S + 1.767275 * tsosNet + 1.615589 * O + 1.64537 * G + 2.617466 * dilNet,
            tytYer2021 = tyt2021 + Q,
            tytYer2020 = tyt2020 + Q,
            tytYer2019 = tyt2019 + Q,
            tmYer2021 = tm2021 + Q,
            tmYer2020 = tm2020 + Q,
            U = tm2019 + Q,
            mfYer2021 = mf2021 + Q,
            mfYer2020 = mf2020 + Q,
            V = mf2019 + Q,
            sozYer2021 = soz2021 + Q,
            sozYer2020 = soz2020 + Q,
            R = soz2019 + Q,
            dilYer2021 = dil2021 + Q,
            dilYer2020 = dil2020 + Q,
            tyt2021 = tyt2021.toFixed(3),
            tyt2020 = tyt2020.toFixed(3),
            tyt2019 = tyt2019.toFixed(3),
            tm2021 = tm2021.toFixed(3),
            tm2020 = tm2020.toFixed(3),
            tm2019 = tm2019.toFixed(3),
            mf2021 = mf2021.toFixed(3),
            mf2020 = mf2020.toFixed(3),
            mf2019 = mf2019.toFixed(3),
            soz2021 = soz2021.toFixed(3),
            soz2020 = soz2020.toFixed(3),
            soz2019 = soz2019.toFixed(3),
            dil2021 = dil2021.toFixed(3),
            dil2020 = dil2020.toFixed(3),
            tytYer2021 = tytYer2021.toFixed(3),
            tytYer2020 = tytYer2020.toFixed(3),
            tytYer2019 = tytYer2019.toFixed(3),
            tmYer2021 = tmYer2021.toFixed(3),
            tmYer2020 = tmYer2020.toFixed(3),
            U = U.toFixed(3),
            mfYer2021 = mfYer2021.toFixed(3),
            mfYer2020 = mfYer2020.toFixed(3),
            V = V.toFixed(3),
            sozYer2021 = sozYer2021.toFixed(3),
            sozYer2020 = sozYer2020.toFixed(3),
            R = R.toFixed(3),
            dilYer2021 = dilYer2021.toFixed(3),
            dilYer2020 = dilYer2020.toFixed(3);
            var W = 0
              , X = 0
              , Z = 0
              , $ = 0
              , ee = 0
              , se = 0
              , te = 0
              , re = 0
              , ie = 0
              , ye = 0;
            if (tyt2021 >= 500)
                ee = (ee = 1).toFixed(0);
            else if (tyt2021 >= 496.83147 & tyt2021 < 500) {
                ee = (ee = (le = 1) + (X = (5 - le) / ((oe = 500) - 496.83147)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 490.65541 & tyt2021 < 496.83147) {
                ee = (ee = (le = 5) + (X = (23 - le) / ((oe = 496.83147) - 490.65541)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 486.01567 & tyt2021 < 490.65541) {
                ee = (ee = (le = 23) + (X = (42 - le) / ((oe = 490.65541) - 486.01567)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 483.49332 & tyt2021 < 486.01567) {
                ee = (ee = (le = 42) + (X = (59 - le) / ((oe = 486.01567) - 483.49332)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 480 & tyt2021 < 483.49332) {
                ee = (ee = (le = 59) + (X = (88 - le) / ((oe = 483.49332) - 480)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 478.751 & tyt2021 < 480) {
                ee = (ee = (le = 88) + (X = (106 - le) / ((oe = 480) - 478.751)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 474.06352 & tyt2021 < 478.751) {
                ee = (ee = (le = 106) + (X = (142 - le) / ((oe = 478.751) - 474.06352)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 460 & tyt2021 < 474.06352) {
                ee = (ee = (le = 142) + (X = (568 - le) / ((oe = 474.06352) - 460)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 458.6219 & tyt2021 < 460) {
                ee = (ee = (le = 568) + (X = (618 - le) / ((oe = 460) - 458.6219)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 455.40591 & tyt2021 < 458.6219) {
                ee = (ee = (le = 618) + (X = (781 - le) / ((oe = 458.6219) - 455.40591)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 450.65394 & tyt2021 < 455.40591) {
                ee = (ee = (le = 781) + (X = (1082 - le) / ((oe = 455.40591) - 450.65394)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 445.0773 & tyt2021 < 450.65394) {
                ee = (ee = (le = 1082) + (X = (1511 - le) / ((oe = 450.65394) - 445.0773)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 442.69573 & tyt2021 < 445.0773) {
                ee = (ee = (le = 1511) + (X = (1708 - le) / ((oe = 445.0773) - 442.69573)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 440 & tyt2021 < 442.69573) {
                ee = (ee = (le = 1708) + (X = (1926 - le) / ((oe = 442.69573) - 440)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 436.15235 & tyt2021 < 440) {
                ee = (ee = (le = 1926) + (X = (2345 - le) / ((oe = 440) - 436.15235)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 433.23596 & tyt2021 < 436.15235) {
                ee = (ee = (le = 2345) + (X = (2759 - le) / ((oe = 436.15235) - 433.23596)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 429.33454 & tyt2021 < 433.23596) {
                ee = (ee = (le = 2759) + (X = (3312 - le) / ((oe = 433.23596) - 429.33454)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 423.74549 & tyt2021 < 429.33454) {
                ee = (ee = (le = 3312) + (X = (4264 - le) / ((oe = 429.33454) - 423.74549)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 420.95792 & tyt2021 < 423.74549) {
                ee = (ee = (le = 4264) + (X = (4907 - le) / ((oe = 423.74549) - 420.95792)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 420 & tyt2021 < 420.95792) {
                ee = (ee = (le = 4907) + (X = (5117 - le) / ((oe = 420.95792) - 420)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 412.24169 & tyt2021 < 420) {
                ee = (ee = (le = 5117) + (X = (7233 - le) / ((oe = 420) - 412.24169)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 409.74921 & tyt2021 < 412.24169) {
                ee = (ee = (le = 7233) + (X = (8037 - le) / ((oe = 412.24169) - 409.74921)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 409.31574 & tyt2021 < 409.74921) {
                ee = (ee = (le = 8037) + (X = (8187 - le) / ((oe = 409.74921) - 409.31574)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 407.93078 & tyt2021 < 409.31574) {
                ee = (ee = (le = 8187) + (X = (8733 - le) / ((oe = 409.31574) - 407.93078)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 404.56412 & tyt2021 < 407.93078) {
                ee = (ee = (le = 8733) + (X = (10142 - le) / ((oe = 407.93078) - 404.56412)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 403.36546 & tyt2021 < 404.56412) {
                ee = (ee = (le = 10142) + (X = (10670 - le) / ((oe = 404.56412) - 403.36546)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 402.55079 & tyt2021 < 403.36546) {
                ee = (ee = (le = 10670) + (X = (11066 - le) / ((oe = 403.36546) - 402.55079)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 400 & tyt2021 < 402.55079) {
                ee = (ee = (le = 11066) + (X = (12291 - le) / ((oe = 402.55079) - 400)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 399.23404 & tyt2021 < 400) {
                ee = (ee = (le = 12291) + (X = (12659 - le) / ((oe = 400) - 399.23404)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 396.8936 & tyt2021 < 399.23404) {
                ee = (ee = (le = 12659) + (X = (13915 - le) / ((oe = 399.23404) - 396.8936)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 396.65252 & tyt2021 < 396.8936) {
                ee = (ee = (le = 13915) + (X = (14032 - le) / ((oe = 396.8936) - 396.65252)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 393.46566 & tyt2021 < 396.65252) {
                ee = (ee = (le = 14032) + (X = (15975 - le) / ((oe = 396.65252) - 393.46566)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 391.13568 & tyt2021 < 393.46566) {
                ee = (ee = (le = 15975) + (X = (17425 - le) / ((oe = 393.46566) - 391.13568)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 389.2109 & tyt2021 < 391.13568) {
                ee = (ee = (le = 17425) + (X = (18766 - le) / ((oe = 391.13568) - 389.2109)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 387.14541 & tyt2021 < 389.2109) {
                ee = (ee = (le = 18766) + (X = (20261 - le) / ((oe = 389.2109) - 387.14541)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 385.30537 & tyt2021 < 387.14541) {
                ee = (ee = (le = 20261) + (X = (21646 - le) / ((oe = 387.14541) - 385.30537)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 384.54512 & tyt2021 < 385.30537) {
                ee = (ee = (le = 21646) + (X = (22267 - le) / ((oe = 385.30537) - 384.54512)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 383.19352 & tyt2021 < 384.54512) {
                ee = (ee = (le = 22267) + (X = (23413 - le) / ((oe = 384.54512) - 383.19352)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 381.29272 & tyt2021 < 383.19352) {
                ee = (ee = (le = 23413) + (X = (25058 - le) / ((oe = 383.19352) - 381.29272)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 380.15881 & tyt2021 < 381.29272) {
                ee = (ee = (le = 25058) + (X = (26037 - le) / ((oe = 381.29272) - 380.15881)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 380 & tyt2021 < 380.15881) {
                ee = (ee = (le = 26037) + (X = (26196 - le) / ((oe = 380.15881) - 380)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 377.79126 & tyt2021 < 380) {
                ee = (ee = (le = 26196) + (X = (28280 - le) / ((oe = 380) - 377.79126)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 376.48743 & tyt2021 < 377.79126) {
                ee = (ee = (le = 28280) + (X = (29438 - le) / ((oe = 377.79126) - 376.48743)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 375.05463 & tyt2021 < 376.48743) {
                ee = (ee = (le = 29438) + (X = (30764 - le) / ((oe = 376.48743) - 375.05463)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 373.11582 & tyt2021 < 375.05463) {
                ee = (ee = (le = 30764) + (X = (32761 - le) / ((oe = 375.05463) - 373.11582)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 370.48163 & tyt2021 < 373.11582) {
                ee = (ee = (le = 32761) + (X = (35510 - le) / ((oe = 373.11582) - 370.48163)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 368.96382 & tyt2021 < 370.48163) {
                ee = (ee = (le = 35510) + (X = (37206 - le) / ((oe = 370.48163) - 368.96382)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 366.60985 & tyt2021 < 368.96382) {
                ee = (ee = (le = 37206) + (X = (39839 - le) / ((oe = 368.96382) - 366.60985)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 365.08108 & tyt2021 < 366.60985) {
                ee = (ee = (le = 39839) + (X = (41642 - le) / ((oe = 366.60985) - 365.08108)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 360.63085 & tyt2021 < 365.08108) {
                ee = (ee = (le = 41642) + (X = (47105 - le) / ((oe = 365.08108) - 360.63085)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 360 & tyt2021 < 360.63085) {
                ee = (ee = (le = 47105) + (X = (47943 - le) / ((oe = 360.63085) - 360)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 359.72974 & tyt2021 < 360) {
                ee = (ee = (le = 47943) + (X = (48287 - le) / ((oe = 360) - 359.72974)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 357.34583 & tyt2021 < 359.72974) {
                ee = (ee = (le = 48287) + (X = (51346 - le) / ((oe = 359.72974) - 357.34583)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 356.59251 & tyt2021 < 357.34583) {
                ee = (ee = (le = 51346) + (X = (52532 - le) / ((oe = 357.34583) - 356.59251)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 354.84256 & tyt2021 < 356.59251) {
                ee = (ee = (le = 52532) + (X = (54876 - le) / ((oe = 356.59251) - 354.84256)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 353.86487 & tyt2021 < 354.84256) {
                ee = (ee = (le = 54876) + (X = (56274 - le) / ((oe = 354.84256) - 353.86487)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 350.15752 & tyt2021 < 353.86487) {
                ee = (ee = (le = 56274) + (X = (61544 - le) / ((oe = 353.86487) - 350.15752)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 349.30908 & tyt2021 < 350.15752) {
                ee = (ee = (le = 61544) + (X = (62811 - le) / ((oe = 350.15752) - 349.30908)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 346.85455 & tyt2021 < 349.30908) {
                ee = (ee = (le = 62811) + (X = (66492 - le) / ((oe = 349.30908) - 346.85455)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 344.56556 & tyt2021 < 346.85455) {
                ee = (ee = (le = 66492) + (X = (70064 - le) / ((oe = 346.85455) - 344.56556)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 343.07014 & tyt2021 < 344.56556) {
                ee = (ee = (le = 70064) + (X = (72499 - le) / ((oe = 344.56556) - 343.07014)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 341.08529 & tyt2021 < 343.07014) {
                ee = (ee = (le = 72499) + (X = (75690 - le) / ((oe = 343.07014) - 341.08529)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 340 & tyt2021 < 341.08529) {
                ee = (ee = (le = 75690) + (X = (77545 - le) / ((oe = 341.08529) - 340)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 339.78907 & tyt2021 < 340) {
                ee = (ee = (le = 77545) + (X = (77921 - le) / ((oe = 340) - 339.78907)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 336.70069 & tyt2021 < 339.78907) {
                ee = (ee = (le = 77921) + (X = (83245 - le) / ((oe = 339.78907) - 336.70069)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 335.05198 & tyt2021 < 336.70069) {
                ee = (ee = (le = 83245) + (X = (86125 - le) / ((oe = 336.70069) - 335.05198)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 334.09127 & tyt2021 < 335.05198) {
                ee = (ee = (le = 86125) + (X = (87853 - le) / ((oe = 335.05198) - 334.09127)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 324.06411 & tyt2021 < 334.09127) {
                ee = (ee = (le = 87853) + (X = (106710 - le) / ((oe = 334.09127) - 324.06411)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 320 & tyt2021 < 324.06411) {
                ee = (ee = (le = 106710) + (X = (115089 - le) / ((oe = 324.06411) - 320)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 318.80806 & tyt2021 < 320) {
                ee = (ee = (le = 115089) + (X = (117731 - le) / ((oe = 320) - 318.80806)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 317.33866 & tyt2021 < 318.80806) {
                ee = (ee = (le = 117731) + (X = (120925 - le) / ((oe = 318.80806) - 317.33866)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 313.35429 & tyt2021 < 317.33866) {
                ee = (ee = (le = 120925) + (X = (129833 - le) / ((oe = 317.33866) - 313.35429)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 311.22818 & tyt2021 < 313.35429) {
                ee = (ee = (le = 129833) + (X = (134684 - le) / ((oe = 313.35429) - 311.22818)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 305.9804 & tyt2021 < 311.22818) {
                ee = (ee = (le = 134684) + (X = (147490 - le) / ((oe = 311.22818) - 305.9804)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 301.84867 & tyt2021 < 305.9804) {
                ee = (ee = (le = 147490) + (X = (158345 - le) / ((oe = 305.9804) - 301.84867)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 300 & tyt2021 < 301.84867) {
                ee = (ee = (le = 158345) + (X = (163412 - le) / ((oe = 301.84867) - 300)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 291.40874 & tyt2021 < 300) {
                ee = (ee = (le = 163412) + (X = (189074 - le) / ((oe = 300) - 291.40874)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 287.20242 & tyt2021 < 291.40874) {
                ee = (ee = (le = 189074) + (X = (202749 - le) / ((oe = 291.40874) - 287.20242)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 284.83302 & tyt2021 < 287.20242) {
                ee = (ee = (le = 202749) + (X = (210846 - le) / ((oe = 287.20242) - 284.83302)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 280 & tyt2021 < 284.83302) {
                ee = (ee = (le = 210846) + (X = (228815 - le) / ((oe = 284.83302) - 280)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 278.87495 & tyt2021 < 280) {
                ee = (ee = (le = 228815) + (X = (233098 - le) / ((oe = 280) - 278.87495)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 275.7331 & tyt2021 < 278.87495) {
                ee = (ee = (le = 233098) + (X = (245731 - le) / ((oe = 278.87495) - 275.7331)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 270.90765 & tyt2021 < 275.7331) {
                ee = (ee = (le = 245731) + (X = (266233 - le) / ((oe = 275.7331) - 270.90765)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 265.92537 & tyt2021 < 270.90765) {
                ee = (ee = (le = 266233) + (X = (289811 - le) / ((oe = 270.90765) - 265.92537)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 262.28943 & tyt2021 < 265.92537) {
                ee = (ee = (le = 289811) + (X = (308480 - le) / ((oe = 265.92537) - 262.28943)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 260 & tyt2021 < 262.28943) {
                ee = (ee = (le = 308480) + (X = (320536 - le) / ((oe = 262.28943) - 260)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 255.26293 & tyt2021 < 260) {
                ee = (ee = (le = 320536) + (X = (347430 - le) / ((oe = 260) - 255.26293)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 253.99235 & tyt2021 < 255.26293) {
                ee = (ee = (le = 347430) + (X = (354928 - le) / ((oe = 255.26293) - 253.99235)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 249.72533 & tyt2021 < 253.99235) {
                ee = (ee = (le = 354928) + (X = (382096 - le) / ((oe = 253.99235) - 249.72533)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 246.48069 & tyt2021 < 249.72533) {
                ee = (ee = (le = 382096) + (X = (404344 - le) / ((oe = 249.72533) - 246.48069)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 242.22657 & tyt2021 < 246.48069) {
                ee = (ee = (le = 404344) + (X = (435404 - le) / ((oe = 246.48069) - 242.22657)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 240 & tyt2021 < 242.22657) {
                ee = (ee = (le = 435404) + (X = (452562 - le) / ((oe = 242.22657) - 240)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 238.9223 & tyt2021 < 240) {
                ee = (ee = (le = 452562) + (X = (461162 - le) / ((oe = 240) - 238.9223)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 234.37488 & tyt2021 < 238.9223) {
                ee = (ee = (le = 461162) + (X = (499349 - le) / ((oe = 238.9223) - 234.37488)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 231.37268 & tyt2021 < 234.37488) {
                ee = (ee = (le = 499349) + (X = (526109 - le) / ((oe = 234.37488) - 231.37268)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 227.4711 & tyt2021 < 231.37268) {
                ee = (ee = (le = 526109) + (X = (563184 - le) / ((oe = 231.37268) - 227.4711)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 224.61571 & tyt2021 < 227.4711) {
                ee = (ee = (le = 563184) + (X = (591901 - le) / ((oe = 227.4711) - 224.61571)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 222.22402 & tyt2021 < 224.61571) {
                ee = (ee = (le = 591901) + (X = (617043 - le) / ((oe = 224.61571) - 222.22402)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 220 & tyt2021 < 222.22402) {
                ee = (ee = (le = 617043) + (X = (640586 - le) / ((oe = 222.22402) - 220)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 215.77697 & tyt2021 < 220) {
                ee = (ee = (le = 640586) + (X = (688790 - le) / ((oe = 220) - 215.77697)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 211.32207 & tyt2021 < 215.77697) {
                ee = (ee = (le = 688790) + (X = (742573 - le) / ((oe = 215.77697) - 211.32207)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 207.97477 & tyt2021 < 211.32207) {
                ee = (ee = (le = 742573) + (X = (785372 - le) / ((oe = 211.32207) - 207.97477)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 206.23822 & tyt2021 < 207.97477) {
                ee = (ee = (le = 785372) + (X = (808136 - le) / ((oe = 207.97477) - 206.23822)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 202.07293 & tyt2021 < 206.23822) {
                ee = (ee = (le = 808136) + (X = (865006 - le) / ((oe = 206.23822) - 202.07293)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 200.48759 & tyt2021 < 202.07293) {
                ee = (ee = (le = 865006) + (X = (887385 - le) / ((oe = 202.07293) - 200.48759)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 200.36887 & tyt2021 < 200.48759) {
                ee = (ee = (le = 887385) + (X = (889070 - le) / ((oe = 200.48759) - 200.36887)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 197.38447 & tyt2021 < 200.36887) {
                ee = (ee = (le = 889070) + (X = (920986 - le) / ((oe = 200.36887) - 197.38447)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 191.83238 & tyt2021 < 197.38447) {
                ee = (ee = (le = 920986) + (X = (981339 - le) / ((oe = 197.38447) - 191.83238)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 189.78231 & tyt2021 < 191.83238) {
                ee = (ee = (le = 981339) + (X = (1005315 - le) / ((oe = 191.83238) - 189.78231)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 179.94555 & tyt2021 < 189.78231) {
                ee = (ee = (le = 1005315) + (X = (1131947 - le) / ((oe = 189.78231) - 179.94555)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 175.39606 & tyt2021 < 179.94555) {
                ee = (ee = (le = 1131947) + (X = (1197313 - le) / ((oe = 179.94555) - 175.39606)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 172.81201 & tyt2021 < 175.39606) {
                ee = (ee = (le = 1197313) + (X = (1236343 - le) / ((oe = 175.39606) - 172.81201)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 164.97148 & tyt2021 < 172.81201) {
                ee = (ee = (le = 1236343) + (X = (1361109 - le) / ((oe = 172.81201) - 164.97148)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 158.98247 & tyt2021 < 164.97148) {
                ee = (ee = (le = 1361109) + (X = (1463812 - le) / ((oe = 164.97148) - 158.98247)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 157.73148 & tyt2021 < 158.98247) {
                ee = (ee = (le = 1463812) + (X = (1485690 - le) / ((oe = 158.98247) - 157.73148)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 151.23025 & tyt2021 < 157.73148) {
                ee = (ee = (le = 1485690) + (X = (1604399 - le) / ((oe = 157.73148) - 151.23025)) * (W = oe - tyt2021)).toFixed(0)
            } else if (tyt2021 >= 123.94921 & tyt2021 < 151.23025) {
                ee = (ee = (le = 1604399) + (X = (2373970 - le) / ((oe = 151.23025) - 123.94921)) * (W = oe - tyt2021)).toFixed(0)
            }
            if (mf2021 >= 500)
                says2021 = 1,
                says2021 = says2021.toFixed(0);
            else if (mf2021 >= 487.57961 & mf2021 < 500) {
                X = (9 - (le = 1)) / ((oe = 500) - 487.57961),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 482.76422 & mf2021 < 487.57961) {
                X = (22 - (le = 9)) / ((oe = 487.57961) - 482.76422),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 480 & mf2021 < 482.76422) {
                X = (39 - (le = 22)) / ((oe = 482.76422) - 480),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 477.44657 & mf2021 < 480) {
                X = (48 - (le = 39)) / ((oe = 480) - 477.44657),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 473.11358 & mf2021 < 477.44657) {
                X = (97 - (le = 48)) / ((oe = 477.44657) - 473.11358),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 461.65228 & mf2021 < 473.11358) {
                X = (357 - (le = 97)) / ((oe = 473.11358) - 461.65228),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 460 & mf2021 < 461.65228) {
                X = (410 - (le = 357)) / ((oe = 461.65228) - 460),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 457.97991 & mf2021 < 460) {
                X = (483 - (le = 410)) / ((oe = 460) - 457.97991),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 443.75548 & mf2021 < 457.97991) {
                X = (1306 - (le = 483)) / ((oe = 457.97991) - 443.75548),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 440 & mf2021 < 443.75548) {
                X = (1621 - (le = 1306)) / ((oe = 443.75548) - 440),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 437.90545 & mf2021 < 440) {
                X = (1783 - (le = 1621)) / ((oe = 440) - 437.90545),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 435.71271 & mf2021 < 437.90545) {
                X = (2014 - (le = 1783)) / ((oe = 437.90545) - 435.71271),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 429.95702 & mf2021 < 435.71271) {
                X = (2712 - (le = 2014)) / ((oe = 435.71271) - 429.95702),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 427.96695 & mf2021 < 429.95702) {
                X = (2993 - (le = 2712)) / ((oe = 429.95702) - 427.96695),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 425.11543 & mf2021 < 427.96695) {
                X = (3386 - (le = 2993)) / ((oe = 427.96695) - 425.11543),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 423.48478 & mf2021 < 425.11543) {
                X = (3626 - (le = 3386)) / ((oe = 425.11543) - 423.48478),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 421.17571 & mf2021 < 423.48478) {
                X = (4015 - (le = 3626)) / ((oe = 423.48478) - 421.17571),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 420 & mf2021 < 421.17571) {
                X = (4259 - (le = 4015)) / ((oe = 421.17571) - 420),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 413.58676 & mf2021 < 420) {
                X = (5675 - (le = 4259)) / ((oe = 420) - 413.58676),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 412.63926 & mf2021 < 413.58676) {
                X = (5909 - (le = 5675)) / ((oe = 413.58676) - 412.63926),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 406.49797 & mf2021 < 412.63926) {
                X = (7579 - (le = 5909)) / ((oe = 412.63926) - 406.49797),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 401.48696 & mf2021 < 406.49797) {
                X = (9221 - (le = 7579)) / ((oe = 406.49797) - 401.48696),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 400.45094 & mf2021 < 401.48696) {
                X = (9580 - (le = 9221)) / ((oe = 401.48696) - 400.45094),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 399.49462 & mf2021 < 400.45094) {
                X = (9899 - (le = 9580)) / ((oe = 400.45094) - 399.49462),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 397.28985 & mf2021 < 399.49462) {
                X = (10744 - (le = 9899)) / ((oe = 399.49462) - 397.28985),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 395.64074 & mf2021 < 397.28985) {
                X = (11363 - (le = 10744)) / ((oe = 397.28985) - 395.64074),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 393.97124 & mf2021 < 395.64074) {
                X = (12038 - (le = 11363)) / ((oe = 395.64074) - 393.97124),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 391.28093 & mf2021 < 393.97124) {
                X = (13203 - (le = 12038)) / ((oe = 393.97124) - 391.28093),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 389.55532 & mf2021 < 391.28093) {
                X = (14066 - (le = 13203)) / ((oe = 391.28093) - 389.55532),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 387.08359 & mf2021 < 389.55532) {
                X = (15215 - (le = 14066)) / ((oe = 389.55532) - 387.08359),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 385.46114 & mf2021 < 387.08359) {
                X = (16067 - (le = 15215)) / ((oe = 387.08359) - 385.46114),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 381.98215 & mf2021 < 385.46114) {
                X = (17892 - (le = 16067)) / ((oe = 385.46114) - 381.98215),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 380.93134 & mf2021 < 381.98215) {
                X = (18493 - (le = 17892)) / ((oe = 381.98215) - 380.93134),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 378.81846 & mf2021 < 380.93134) {
                X = (19972 - (le = 18493)) / ((oe = 380.93134) - 378.81846),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 376.62021 & mf2021 < 378.81846) {
                X = (21e3 - (le = 19972)) / ((oe = 378.81846) - 376.62021),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 374.72195 & mf2021 < 376.62021) {
                X = (22202 - (le = 21e3)) / ((oe = 376.62021) - 374.72195),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 370.02464 & mf2021 < 374.72195) {
                X = (25287 - (le = 22202)) / ((oe = 374.72195) - 370.02464),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 366.83367 & mf2021 < 370.02464) {
                X = (27384 - (le = 25287)) / ((oe = 370.02464) - 366.83367),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 363.05319 & mf2021 < 366.83367) {
                X = (29975 - (le = 27384)) / ((oe = 366.83367) - 363.05319),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 361.20894 & mf2021 < 363.05319) {
                X = (31333 - (le = 29975)) / ((oe = 363.05319) - 361.20894),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 359.23806 & mf2021 < 361.20894) {
                X = (32799 - (le = 31333)) / ((oe = 361.20894) - 359.23806),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 356.67328 & mf2021 < 359.23806) {
                X = (34770 - (le = 32799)) / ((oe = 359.23806) - 356.67328),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 351.44948 & mf2021 < 356.67328) {
                X = (38925 - (le = 34770)) / ((oe = 356.67328) - 351.44948),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 347.84657 & mf2021 < 351.44948) {
                X = (41919 - (le = 38925)) / ((oe = 351.44948) - 347.84657),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 340 & mf2021 < 347.84657) {
                X = (48828 - (le = 41919)) / ((oe = 347.84657) - 340),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 333.67564 & mf2021 < 340) {
                X = (54506 - (le = 48828)) / ((oe = 340) - 333.67564),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 332.30893 & mf2021 < 333.67564) {
                X = (55728 - (le = 54506)) / ((oe = 333.67564) - 332.30893),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 329.09623 & mf2021 < 332.30893) {
                X = (58755 - (le = 55728)) / ((oe = 332.30893) - 329.09623),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 325.45621 & mf2021 < 329.09623) {
                X = (62302 - (le = 58755)) / ((oe = 329.09623) - 325.45621),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 323.17745 & mf2021 < 325.45621) {
                X = (64519 - (le = 62302)) / ((oe = 325.45621) - 323.17745),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 321.97285 & mf2021 < 323.17745) {
                X = (65724 - (le = 64519)) / ((oe = 323.17745) - 321.97285),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 320 & mf2021 < 321.97285) {
                X = (67698 - (le = 65724)) / ((oe = 321.97285) - 320),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 315.63073 & mf2021 < 320) {
                X = (72266 - (le = 67698)) / ((oe = 320) - 315.63073),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 314.5243 & mf2021 < 315.63073) {
                X = (73403 - (le = 72266)) / ((oe = 315.63073) - 314.5243),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 310.43283 & mf2021 < 314.5243) {
                X = (77784 - (le = 73403)) / ((oe = 314.5243) - 310.43283),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 306.53953 & mf2021 < 310.43283) {
                X = (82012 - (le = 77784)) / ((oe = 310.43283) - 306.53953),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 304.22299 & mf2021 < 306.53953) {
                X = (84552 - (le = 82012)) / ((oe = 306.53953) - 304.22299),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 300 & mf2021 < 304.22299) {
                X = (89388 - (le = 84552)) / ((oe = 304.22299) - 300),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 298.14176 & mf2021 < 300) {
                X = (91642 - (le = 89388)) / ((oe = 300) - 298.14176),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 294.56769 & mf2021 < 298.14176) {
                X = (95957 - (le = 91642)) / ((oe = 298.14176) - 294.56769),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 289.73731 & mf2021 < 294.56769) {
                X = (101974 - (le = 95957)) / ((oe = 294.56769) - 289.73731),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 286.07501 & mf2021 < 289.73731) {
                X = (106652 - (le = 101974)) / ((oe = 289.73731) - 286.07501),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 280 & mf2021 < 286.07501) {
                X = (114752 - (le = 106652)) / ((oe = 286.07501) - 280),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 274.006 & mf2021 < 280) {
                X = (123081 - (le = 114752)) / ((oe = 280) - 274.006),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 267.31849 & mf2021 < 274.006) {
                X = (133049 - (le = 123081)) / ((oe = 274.006) - 267.31849),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 264.30852 & mf2021 < 267.31849) {
                X = (137771 - (le = 133049)) / ((oe = 267.31849) - 264.30852),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 261.21355 & mf2021 < 264.30852) {
                X = (142882 - (le = 137771)) / ((oe = 264.30852) - 261.21355),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 259.05127 & mf2021 < 261.21355) {
                X = (146489 - (le = 142882)) / ((oe = 261.21355) - 259.05127),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 257.79873 & mf2021 < 259.05127) {
                X = (148702 - (le = 146489)) / ((oe = 259.05127) - 257.79873),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 254.26471 & mf2021 < 257.79873) {
                X = (154897 - (le = 148702)) / ((oe = 257.79873) - 254.26471),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 250.65782 & mf2021 < 254.26471) {
                X = (161606 - (le = 154897)) / ((oe = 254.26471) - 250.65782),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 243.94604 & mf2021 < 250.65782) {
                X = (174903 - (le = 161606)) / ((oe = 250.65782) - 243.94604),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 241.85782 & mf2021 < 243.94604) {
                X = (179108 - (le = 174903)) / ((oe = 243.94604) - 241.85782),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 234.77179 & mf2021 < 241.85782) {
                X = (194738 - (le = 179108)) / ((oe = 241.85782) - 234.77179),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 233.07462 & mf2021 < 234.77179) {
                X = (198649 - (le = 194738)) / ((oe = 234.77179) - 233.07462),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 230.62099 & mf2021 < 233.07462) {
                X = (204427 - (le = 198649)) / ((oe = 233.07462) - 230.62099),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 229.16419 & mf2021 < 230.62099) {
                X = (208019 - (le = 204427)) / ((oe = 230.62099) - 229.16419),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 224.20432 & mf2021 < 229.16419) {
                X = (220722 - (le = 208019)) / ((oe = 229.16419) - 224.20432),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 220 & mf2021 < 224.20432) {
                X = (232263 - (le = 220722)) / ((oe = 224.20432) - 220),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 210.81245 & mf2021 < 220) {
                X = (259898 - (le = 232263)) / ((oe = 220) - 210.81245),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 209.79067 & mf2021 < 210.81245) {
                X = (263246 - (le = 259898)) / ((oe = 210.81245) - 209.79067),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 203.6532 & mf2021 < 209.79067) {
                X = (284553 - (le = 263246)) / ((oe = 209.79067) - 203.6532),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 200 & mf2021 < 203.6532) {
                X = (298093 - (le = 284553)) / ((oe = 203.6532) - 200),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 194.62815 & mf2021 < 200) {
                X = (319619 - (le = 298093)) / ((oe = 200) - 194.62815),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 191.75286 & mf2021 < 194.62815) {
                X = (331873 - (le = 319619)) / ((oe = 194.62815) - 191.75286),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 184.94215 & mf2021 < 191.75286) {
                X = (363937 - (le = 331873)) / ((oe = 191.75286) - 184.94215),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 180 & mf2021 < 184.94215) {
                X = (390132 - (le = 363937)) / ((oe = 184.94215) - 180),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 175.9466 & mf2021 < 180) {
                X = (424517 - (le = 390132)) / ((oe = 180) - 175.9466),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 171.37579 & mf2021 < 175.9466) {
                X = (469106 - (le = 424517)) / ((oe = 175.9466) - 171.37579),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 170.19259 & mf2021 < 171.37579) {
                X = (481737 - (le = 469106)) / ((oe = 171.37579) - 170.19259),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 165.69786 & mf2021 < 170.19259) {
                X = (534359 - (le = 481737)) / ((oe = 170.19259) - 165.69786),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 162.08252 & mf2021 < 165.69786) {
                X = (582045 - (le = 534359)) / ((oe = 165.69786) - 162.08252),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 160.74252 & mf2021 < 162.08252) {
                X = (600858 - (le = 582045)) / ((oe = 162.08252) - 160.74252),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 156.65167 & mf2021 < 160.74252) {
                X = (660813 - (le = 600858)) / ((oe = 160.74252) - 156.65167),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 155.40882 & mf2021 < 156.65167) {
                X = (679588 - (le = 660813)) / ((oe = 156.65167) - 155.40882),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 154.92947 & mf2021 < 155.40882) {
                X = (686824 - (le = 679588)) / ((oe = 155.40882) - 154.92947),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 150.05673 & mf2021 < 154.92947) {
                X = (758592 - (le = 686824)) / ((oe = 154.92947) - 150.05673),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 148.36474 & mf2021 < 150.05673) {
                X = (783239 - (le = 758592)) / ((oe = 150.05673) - 148.36474),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 142.62322 & mf2021 < 148.36474) {
                X = (862615 - (le = 783239)) / ((oe = 148.36474) - 142.62322),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            } else if (mf2021 >= 134.43692 & mf2021 < 142.62322) {
                X = (908862 - (le = 862615)) / ((oe = 142.62322) - 134.43692),
                W = oe - mf2021,
                says2021 = le + X * W,
                says2021 = says2021.toFixed(0)
            }
            if (soz2021 >= 500)
                sozs2021 = 1,
                sozs2021 = sozs2021.toFixed(0);
            else if (soz2021 >= 480 & soz2021 < 500) {
                X = (5 - (le = 1)) / ((oe = 500) - 480),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 460 & soz2021 < 480) {
                X = (26 - (le = 5)) / ((oe = 480) - 460),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 444.68638 & soz2021 < 460) {
                X = (92 - (le = 26)) / ((oe = 460) - 444.68638),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 440 & soz2021 < 444.68638) {
                X = (109 - (le = 92)) / ((oe = 444.68638) - 440),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 423.82552 & soz2021 < 440) {
                X = (209 - (le = 109)) / ((oe = 440) - 423.82552),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 420 & soz2021 < 423.82552) {
                X = (250 - (le = 209)) / ((oe = 423.82552) - 420),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 404.92129 & soz2021 < 420) {
                X = (424 - (le = 250)) / ((oe = 420) - 404.92129),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 400 & soz2021 < 404.92129) {
                X = (496 - (le = 424)) / ((oe = 404.92129) - 400),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 397.09608 & soz2021 < 400) {
                X = (561 - (le = 496)) / ((oe = 400) - 397.09608),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 392.00649 & soz2021 < 397.09608) {
                X = (663 - (le = 561)) / ((oe = 397.09608) - 392.00649),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 380 & soz2021 < 392.00649) {
                X = (1011 - (le = 663)) / ((oe = 392.00649) - 380),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 378.11571 & soz2021 < 380) {
                X = (1093 - (le = 1011)) / ((oe = 380) - 378.11571),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 360 & soz2021 < 378.11571) {
                X = (2246 - (le = 1093)) / ((oe = 378.11571) - 360),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 346.60195 & soz2021 < 360) {
                X = (4112 - (le = 2246)) / ((oe = 360) - 346.60195),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 340 & soz2021 < 346.60195) {
                X = (5532 - (le = 4112)) / ((oe = 346.60195) - 340),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 336.12122 & soz2021 < 340) {
                X = (6579 - (le = 5532)) / ((oe = 340) - 336.12122),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 323.9846 & soz2021 < 336.12122) {
                X = (11144 - (le = 6579)) / ((oe = 336.12122) - 323.9846),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 321.19145 & soz2021 < 323.9846) {
                X = (12448 - (le = 11144)) / ((oe = 323.9846) - 321.19145),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 320 & soz2021 < 321.19145) {
                X = (13061 - (le = 12448)) / ((oe = 321.19145) - 320),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 316.30849 & soz2021 < 320) {
                X = (15074 - (le = 13061)) / ((oe = 320) - 316.30849),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 312.78385 & soz2021 < 316.30849) {
                X = (17272 - (le = 15074)) / ((oe = 316.30849) - 312.78385),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 309.56145 & soz2021 < 312.78385) {
                X = (19439 - (le = 17272)) / ((oe = 312.78385) - 309.56145),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 308.61349 & soz2021 < 309.56145) {
                X = (20145 - (le = 19439)) / ((oe = 309.56145) - 308.61349),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 304.06022 & soz2021 < 308.61349) {
                X = (23895 - (le = 20145)) / ((oe = 308.61349) - 304.06022),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 302.10806 & soz2021 < 304.06022) {
                X = (25538 - (le = 23895)) / ((oe = 304.06022) - 302.10806),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 300 & soz2021 < 302.10806) {
                X = (27492 - (le = 25538)) / ((oe = 302.10806) - 300),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 298.77939 & soz2021 < 300) {
                X = (28685 - (le = 27492)) / ((oe = 300) - 298.77939),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 297.24789 & soz2021 < 298.77939) {
                X = (30260 - (le = 28685)) / ((oe = 298.77939) - 297.24789),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 295.25868 & soz2021 < 297.24789) {
                X = (32441 - (le = 30260)) / ((oe = 297.24789) - 295.25868),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 294.1966 & soz2021 < 295.25868) {
                X = (33647 - (le = 32441)) / ((oe = 295.25868) - 294.1966),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 292.4905 & soz2021 < 294.1966) {
                X = (35635 - (le = 33647)) / ((oe = 294.1966) - 292.4905),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 289.98008 & soz2021 < 292.4905) {
                X = (36688 - (le = 35635)) / ((oe = 292.4905) - 289.98008),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 285.07878 & soz2021 < 289.98008) {
                X = (45345 - (le = 36688)) / ((oe = 289.98008) - 285.07878),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 283.49652 & soz2021 < 285.07878) {
                X = (47638 - (le = 45345)) / ((oe = 285.07878) - 283.49652),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 281.72789 & soz2021 < 283.49652) {
                X = (50279 - (le = 47638)) / ((oe = 283.49652) - 281.72789),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 280.41324 & soz2021 < 281.72789) {
                X = (52360 - (le = 50279)) / ((oe = 281.72789) - 280.41324),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 279.02082 & soz2021 < 280.41324) {
                X = (54645 - (le = 52360)) / ((oe = 280.41324) - 279.02082),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 277.8534 & soz2021 < 279.02082) {
                X = (56660 - (le = 54645)) / ((oe = 279.02082) - 277.8534),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 276.20995 & soz2021 < 277.8534) {
                X = (59700 - (le = 56660)) / ((oe = 277.8534) - 276.20995),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 275.23803 & soz2021 < 276.20995) {
                X = (61489 - (le = 59700)) / ((oe = 276.20995) - 275.23803),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 272.77854 & soz2021 < 275.23803) {
                X = (66317 - (le = 61489)) / ((oe = 275.23803) - 272.77854),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 269.35874 & soz2021 < 272.77854) {
                X = (73489 - (le = 66317)) / ((oe = 272.77854) - 269.35874),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 268.54306 & soz2021 < 269.35874) {
                X = (75264 - (le = 73489)) / ((oe = 269.35874) - 268.54306),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 266.70229 & soz2021 < 268.54306) {
                X = (79314 - (le = 75264)) / ((oe = 268.54306) - 266.70229),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 264.4083 & soz2021 < 266.70229) {
                X = (84709 - (le = 79314)) / ((oe = 266.70229) - 264.4083),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 262.16412 & soz2021 < 264.4083) {
                X = (90260 - (le = 84709)) / ((oe = 264.4083) - 262.16412),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 260 & soz2021 < 262.16412) {
                X = (96043 - (le = 90260)) / ((oe = 262.16412) - 260),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 258.62593 & soz2021 < 260) {
                X = (99803 - (le = 96043)) / ((oe = 260) - 258.62593),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 255.70026 & soz2021 < 258.62593) {
                X = (107961 - (le = 99803)) / ((oe = 258.62593) - 255.70026),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 246.77843 & soz2021 < 255.70026) {
                X = (136498 - (le = 107961)) / ((oe = 255.70026) - 246.77843),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 245.67667 & soz2021 < 246.77843) {
                X = (140404 - (le = 136498)) / ((oe = 246.77843) - 245.67667),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 243.87507 & soz2021 < 245.67667) {
                X = (146938 - (le = 140404)) / ((oe = 245.67667) - 243.87507),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 241.70344 & soz2021 < 243.87507) {
                X = (155118 - (le = 146938)) / ((oe = 243.87507) - 241.70344),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 240 & soz2021 < 241.70344) {
                X = (161866 - (le = 155118)) / ((oe = 241.70344) - 240),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 238.15862 & soz2021 < 240) {
                X = (169499 - (le = 161866)) / ((oe = 240) - 238.15862),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 235.27368 & soz2021 < 238.15862) {
                X = (181491 - (le = 169499)) / ((oe = 238.15862) - 235.27368),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 233.1774 & soz2021 < 235.27368) {
                X = (190874 - (le = 181491)) / ((oe = 235.27368) - 233.1774),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 229.27355 & soz2021 < 233.1774) {
                X = (209318 - (le = 190874)) / ((oe = 233.1774) - 229.27355),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 225.42754 & soz2021 < 229.27355) {
                X = (228531 - (le = 209318)) / ((oe = 229.27355) - 225.42754),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 223.68998 & soz2021 < 225.42754) {
                X = (237748 - (le = 228531)) / ((oe = 225.42754) - 223.68998),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 221.09763 & soz2021 < 223.68998) {
                X = (251743 - (le = 237748)) / ((oe = 223.68998) - 221.09763),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 219.08784 & soz2021 < 221.09763) {
                X = (263162 - (le = 251743)) / ((oe = 221.09763) - 219.08784),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 218.13758 & soz2021 < 219.08784) {
                X = (268631 - (le = 263162)) / ((oe = 219.08784) - 218.13758),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 214.42889 & soz2021 < 218.13758) {
                X = (291151 - (le = 268631)) / ((oe = 218.13758) - 214.42889),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 213.0724 & soz2021 < 214.42889) {
                X = (299618 - (le = 291151)) / ((oe = 214.42889) - 213.0724),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 209.01712 & soz2021 < 213.0724) {
                X = (326143 - (le = 299618)) / ((oe = 213.0724) - 209.01712),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 207.01768 & soz2021 < 209.01712) {
                X = (339965 - (le = 326143)) / ((oe = 209.01712) - 207.01768),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 203.59794 & soz2021 < 207.01768) {
                X = (364605 - (le = 339965)) / ((oe = 207.01768) - 203.59794),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 200 & soz2021 < 203.59794) {
                X = (391649 - (le = 364605)) / ((oe = 203.59794) - 200),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 198.54332 & soz2021 < 200) {
                X = (402927 - (le = 391649)) / ((oe = 200) - 198.54332),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 195.63965 & soz2021 < 198.54332) {
                X = (426148 - (le = 402927)) / ((oe = 198.54332) - 195.63965),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 194.54882 & soz2021 < 195.63965) {
                X = (435148 - (le = 426148)) / ((oe = 195.63965) - 194.54882),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 191.14202 & soz2021 < 194.54882) {
                X = (463380 - (le = 435148)) / ((oe = 194.54882) - 191.14202),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 187.52212 & soz2021 < 191.14202) {
                X = (495038 - (le = 463380)) / ((oe = 191.14202) - 187.52212),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 183.65269 & soz2021 < 187.52212) {
                X = (529763 - (le = 495038)) / ((oe = 187.52212) - 183.65269),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 180 & soz2021 < 183.65269) {
                X = (563808 - (le = 529763)) / ((oe = 183.65269) - 180),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 176.60938 & soz2021 < 180) {
                X = (611905 - (le = 563808)) / ((oe = 180) - 176.60938),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 176.53884 & soz2021 < 176.60938) {
                X = (612971 - (le = 611905)) / ((oe = 176.60938) - 176.53884),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 174.92163 & soz2021 < 176.53884) {
                X = (636157 - (le = 612971)) / ((oe = 176.53884) - 174.92163),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 170.30258 & soz2021 < 174.92163) {
                X = (702090 - (le = 636157)) / ((oe = 174.92163) - 170.30258),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 168.62928 & soz2021 < 170.30258) {
                X = (725282 - (le = 702090)) / ((oe = 170.30258) - 168.62928),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 163.35973 & soz2021 < 168.62928) {
                X = (792865 - (le = 725282)) / ((oe = 168.62928) - 163.35973),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            } else if (soz2021 >= 150 & soz2021 < 163.35973) {
                X = (907062 - (le = 792865)) / ((oe = 163.35973) - 150),
                W = oe - soz2021,
                sozs2021 = le + X * W,
                sozs2021 = sozs2021.toFixed(0)
            }
            if (tm2021 >= 500)
                eas2021 = 1,
                eas2021 = eas2021.toFixed(0);
            else if (tm2021 >= 480 & tm2021 < 500) {
                X = (11 - (le = 1)) / ((oe = 500) - 480),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 476.68565 & tm2021 < 480) {
                X = (15 - (le = 11)) / ((oe = 480) - 476.68565),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 469.34667 & tm2021 < 476.68565) {
                X = (26 - (le = 15)) / ((oe = 476.68565) - 469.34667),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 460 & tm2021 < 469.34667) {
                X = (41 - (le = 26)) / ((oe = 469.34667) - 460),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 455.47319 & tm2021 < 460) {
                X = (52 - (le = 41)) / ((oe = 460) - 455.47319),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 440 & tm2021 < 455.47319) {
                X = (136 - (le = 52)) / ((oe = 455.47319) - 440),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 422.27239 & tm2021 < 440) {
                X = (342 - (le = 136)) / ((oe = 440) - 422.27239),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 420 & tm2021 < 422.27239) {
                X = (377 - (le = 342)) / ((oe = 422.27239) - 420),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 415.7181 & tm2021 < 420) {
                X = (445 - (le = 377)) / ((oe = 420) - 415.7181),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 408.40869 & tm2021 < 415.7181) {
                X = (605 - (le = 445)) / ((oe = 415.7181) - 408.40869),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 402.10179 & tm2021 < 408.40869) {
                X = (775 - (le = 605)) / ((oe = 408.40869) - 402.10179),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 400 & tm2021 < 402.10179) {
                X = (856 - (le = 775)) / ((oe = 402.10179) - 400),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 396.79181 & tm2021 < 400) {
                X = (959 - (le = 856)) / ((oe = 400) - 396.79181),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 391.71576 & tm2021 < 396.79181) {
                X = (1183 - (le = 959)) / ((oe = 396.79181) - 391.71576),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 389.14487 & tm2021 < 391.71576) {
                X = (1313 - (le = 1183)) / ((oe = 391.71576) - 389.14487),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 381.49784 & tm2021 < 389.14487) {
                X = (1834 - (le = 1313)) / ((oe = 389.14487) - 381.49784),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 380 & tm2021 < 381.49784) {
                X = (1977 - (le = 1834)) / ((oe = 381.49784) - 380),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 378.22114 & tm2021 < 380) {
                X = (2138 - (le = 1977)) / ((oe = 380) - 378.22114),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 369.36283 & tm2021 < 378.22114) {
                X = (3127 - (le = 2138)) / ((oe = 378.22114) - 369.36283),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 366.37796 & tm2021 < 369.36283) {
                X = (3556 - (le = 3127)) / ((oe = 369.36283) - 366.37796),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 363.19327 & tm2021 < 366.37796) {
                X = (4078 - (le = 3556)) / ((oe = 366.37796) - 363.19327),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 360.90713 & tm2021 < 363.19327) {
                X = (4498 - (le = 4078)) / ((oe = 363.19327) - 360.90713),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 360 & tm2021 < 360.90713) {
                X = (4685 - (le = 4498)) / ((oe = 360.90713) - 360),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 355.11746 & tm2021 < 360) {
                X = (5724 - (le = 4685)) / ((oe = 360) - 355.11746),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 352.4414 & tm2021 < 355.11746) {
                X = (6390 - (le = 5724)) / ((oe = 355.11746) - 352.4414),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 348.82157 & tm2021 < 352.4414) {
                X = (7383 - (le = 6390)) / ((oe = 352.4414) - 348.82157),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 347.48315 & tm2021 < 348.82157) {
                X = (7792 - (le = 7383)) / ((oe = 348.82157) - 347.48315),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 343.14263 & tm2021 < 347.48315) {
                X = (9237 - (le = 7792)) / ((oe = 347.48315) - 343.14263),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 341.41612 & tm2021 < 343.14263) {
                X = (9896 - (le = 9237)) / ((oe = 343.14263) - 341.41612),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 340.31134 & tm2021 < 341.41612) {
                X = (10367 - (le = 9896)) / ((oe = 341.41612) - 340.31134),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 339.87272 & tm2021 < 340.31134) {
                X = (10580 - (le = 10367)) / ((oe = 340.31134) - 339.87272),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 337.74413 & tm2021 < 339.87272) {
                X = (11465 - (le = 10580)) / ((oe = 339.87272) - 337.74413),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 335.20314 & tm2021 < 337.74413) {
                X = (12692 - (le = 11465)) / ((oe = 337.74413) - 335.20314),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 333.76892 & tm2021 < 335.20314) {
                X = (13442 - (le = 12692)) / ((oe = 335.20314) - 333.76892),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 327.07974 & tm2021 < 333.76892) {
                X = (17375 - (le = 13442)) / ((oe = 333.76892) - 327.07974),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 324.59395 & tm2021 < 327.07974) {
                X = (19105 - (le = 17375)) / ((oe = 327.07974) - 324.59395),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 323.98051 & tm2021 < 324.59395) {
                X = (19542 - (le = 19105)) / ((oe = 324.59395) - 323.98051),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 321.12935 & tm2021 < 323.98051) {
                X = (21714 - (le = 19542)) / ((oe = 323.98051) - 321.12935),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 320 & tm2021 < 321.12935) {
                X = (22629 - (le = 21714)) / ((oe = 321.12935) - 320),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 316.46628 & tm2021 < 320) {
                X = (25601 - (le = 22629)) / ((oe = 320) - 316.46628),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 315.10688 & tm2021 < 316.46628) {
                X = (26823 - (le = 25601)) / ((oe = 316.46628) - 315.10688),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 314.11805 & tm2021 < 315.10688) {
                X = (27796 - (le = 26823)) / ((oe = 315.10688) - 314.11805),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 312.01035 & tm2021 < 314.11805) {
                X = (29904 - (le = 27796)) / ((oe = 314.11805) - 312.01035),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 311.41433 & tm2021 < 312.01035) {
                X = (30555 - (le = 29904)) / ((oe = 312.01035) - 311.41433),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 310.41997 & tm2021 < 311.41433) {
                X = (31561 - (le = 30555)) / ((oe = 311.41433) - 310.41997),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 310.05397 & tm2021 < 310.41997) {
                X = (31942 - (le = 31561)) / ((oe = 310.41997) - 310.05397),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 308.478 & tm2021 < 310.05397) {
                X = (33671 - (le = 31942)) / ((oe = 310.05397) - 308.478),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 307.8217 & tm2021 < 308.478) {
                X = (34372 - (le = 33671)) / ((oe = 308.478) - 307.8217),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 305.34465 & tm2021 < 307.8217) {
                X = (37318 - (le = 34372)) / ((oe = 307.8217) - 305.34465),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 300 & tm2021 < 305.34465) {
                X = (44113 - (le = 37318)) / ((oe = 305.34465) - 300),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 299.35301 & tm2021 < 300) {
                X = (44981 - (le = 44113)) / ((oe = 300) - 299.35301),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 298.01432 & tm2021 < 299.35301) {
                X = (46808 - (le = 44981)) / ((oe = 299.35301) - 298.01432),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 297.60271 & tm2021 < 298.01432) {
                X = (47401 - (le = 46808)) / ((oe = 298.01432) - 297.60271),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 295.93111 & tm2021 < 297.60271) {
                X = (49788 - (le = 47401)) / ((oe = 297.60271) - 295.93111),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 291.9275 & tm2021 < 295.93111) {
                X = (55885 - (le = 49788)) / ((oe = 295.93111) - 291.9275),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 291.22856 & tm2021 < 291.9275) {
                X = (56896 - (le = 55885)) / ((oe = 291.9275) - 291.22856),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 289.42262 & tm2021 < 291.22856) {
                X = (59844 - (le = 56896)) / ((oe = 291.22856) - 289.42262),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 289.17985 & tm2021 < 289.42262) {
                X = (60238 - (le = 59844)) / ((oe = 289.42262) - 289.17985),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 287.8253 & tm2021 < 289.17985) {
                X = (62489 - (le = 60238)) / ((oe = 289.17985) - 287.8253),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 285.11613 & tm2021 < 287.8253) {
                X = (67062 - (le = 62489)) / ((oe = 287.8253) - 285.11613),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 284.61102 & tm2021 < 285.11613) {
                X = (68006 - (le = 67062)) / ((oe = 285.11613) - 284.61102),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 281.59818 & tm2021 < 284.61102) {
                X = (73579 - (le = 68006)) / ((oe = 284.61102) - 281.59818),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 281.09081 & tm2021 < 281.59818) {
                X = (74584 - (le = 73579)) / ((oe = 281.59818) - 281.09081),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 280 & tm2021 < 281.09081) {
                X = (76636 - (le = 74584)) / ((oe = 281.09081) - 280),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 278.25745 & tm2021 < 280) {
                X = (79978 - (le = 76636)) / ((oe = 280) - 278.25745),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 277.49375 & tm2021 < 278.25745) {
                X = (81535 - (le = 79978)) / ((oe = 278.25745) - 277.49375),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 275.0861 & tm2021 < 277.49375) {
                X = (86470 - (le = 81535)) / ((oe = 277.49375) - 275.0861),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 274.32372 & tm2021 < 275.0861) {
                X = (88071 - (le = 86470)) / ((oe = 275.0861) - 274.32372),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 273.35139 & tm2021 < 274.32372) {
                X = (90164 - (le = 88071)) / ((oe = 274.32372) - 273.35139),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 266.63669 & tm2021 < 273.35139) {
                X = (105359 - (le = 90164)) / ((oe = 273.35139) - 266.63669),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 264.0668 & tm2021 < 266.63669) {
                X = (111680 - (le = 105359)) / ((oe = 266.63669) - 264.0668),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 262.46544 & tm2021 < 264.0668) {
                X = (115629 - (le = 111680)) / ((oe = 264.0668) - 262.46544),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 260 & tm2021 < 262.46544) {
                X = (122026 - (le = 115629)) / ((oe = 262.46544) - 260),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 254.64041 & tm2021 < 260) {
                X = (136872 - (le = 122026)) / ((oe = 260) - 254.64041),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 253.01489 & tm2021 < 254.64041) {
                X = (141614 - (le = 136872)) / ((oe = 254.64041) - 253.01489),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 249.96755 & tm2021 < 253.01489) {
                X = (150833 - (le = 141614)) / ((oe = 253.01489) - 249.96755),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 248.83123 & tm2021 < 249.96755) {
                X = (154404 - (le = 150833)) / ((oe = 249.96755) - 248.83123),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 246.901 & tm2021 < 248.83123) {
                X = (160592 - (le = 154404)) / ((oe = 248.83123) - 246.901),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 240 & tm2021 < 246.901) {
                X = (184970 - (le = 160592)) / ((oe = 246.901) - 240),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 236.88845 & tm2021 < 240) {
                X = (196837 - (le = 184970)) / ((oe = 240) - 236.88845),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 234.28299 & tm2021 < 236.88845) {
                X = (207462 - (le = 196837)) / ((oe = 236.88845) - 234.28299),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 230.33236 & tm2021 < 234.28299) {
                X = (224676 - (le = 207462)) / ((oe = 234.28299) - 230.33236),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 227.1969 & tm2021 < 230.33236) {
                X = (239098 - (le = 224676)) / ((oe = 230.33236) - 227.1969),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 220 & tm2021 < 227.1969) {
                X = (275595 - (le = 239098)) / ((oe = 227.1969) - 220),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 216.73492 & tm2021 < 220) {
                X = (293869 - (le = 275595)) / ((oe = 220) - 216.73492),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 213.36409 & tm2021 < 216.73492) {
                X = (313843 - (le = 293869)) / ((oe = 216.73492) - 213.36409),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 211.6581 & tm2021 < 213.36409) {
                X = (324356 - (le = 313843)) / ((oe = 213.36409) - 211.6581),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 204.57675 & tm2021 < 211.6581) {
                X = (371459 - (le = 324356)) / ((oe = 211.6581) - 204.57675),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 201.44631 & tm2021 < 204.57675) {
                X = (394394 - (le = 371459)) / ((oe = 204.57675) - 201.44631),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 200 & tm2021 < 201.44631) {
                X = (405287 - (le = 394394)) / ((oe = 201.44631) - 200),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 195.43973 & tm2021 < 200) {
                X = (441621 - (le = 405287)) / ((oe = 200) - 195.43973),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 191.35869 & tm2021 < 195.43973) {
                X = (476990 - (le = 441621)) / ((oe = 195.43973) - 191.35869),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 187.33517 & tm2021 < 191.35869) {
                X = (513898 - (le = 476990)) / ((oe = 191.35869) - 187.33517),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 184.70651 & tm2021 < 187.33517) {
                X = (539269 - (le = 513898)) / ((oe = 187.33517) - 184.70651),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 182.87895 & tm2021 < 184.70651) {
                X = (557823 - (le = 539269)) / ((oe = 184.70651) - 182.87895),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 180 & tm2021 < 182.87895) {
                X = (587678 - (le = 557823)) / ((oe = 182.87895) - 180),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 179.06577 & tm2021 < 180) {
                X = (602498 - (le = 587678)) / ((oe = 180) - 179.06577),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 176.83331 & tm2021 < 179.06577) {
                X = (638588 - (le = 602498)) / ((oe = 179.06577) - 176.83331),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 174.67994 & tm2021 < 176.83331) {
                X = (674684 - (le = 638588)) / ((oe = 176.83331) - 174.67994),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 172.74963 & tm2021 < 174.67994) {
                X = (708473 - (le = 674684)) / ((oe = 174.67994) - 172.74963),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 171.39501 & tm2021 < 172.74963) {
                X = (733447 - (le = 708473)) / ((oe = 172.74963) - 171.39501),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 170.18018 & tm2021 < 171.39501) {
                X = (755845 - (le = 733447)) / ((oe = 171.39501) - 170.18018),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 166.04267 & tm2021 < 170.18018) {
                X = (834009 - (le = 755845)) / ((oe = 170.18018) - 166.04267),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 163.26073 & tm2021 < 166.04267) {
                X = (888201 - (le = 834009)) / ((oe = 166.04267) - 163.26073),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 162.72504 & tm2021 < 163.26073) {
                X = (898804 - (le = 888201)) / ((oe = 163.26073) - 162.72504),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 151.7161 & tm2021 < 162.72504) {
                X = (1100077 - (le = 898804)) / ((oe = 162.72504) - 151.7161),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 149.01847 & tm2021 < 151.7161) {
                X = (1137711 - (le = 1100077)) / ((oe = 151.7161) - 149.01847),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            } else if (tm2021 >= 148.75803 & tm2021 < 149.01847) {
                X = (1140981 - (le = 1137711)) / ((oe = 149.01847) - 148.75803),
                W = oe - tm2021,
                eas2021 = le + X * W,
                eas2021 = eas2021.toFixed(0)
            }
            if (dil2021 >= 500)
                dils2021 = 1,
                dils2021 = dils2021.toFixed(0);
            else if (dil2021 >= 494.45951 & dil2021 < 500) {
                X = (12 - (le = 1)) / ((oe = 500) - 494.45951),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 494.39471 & dil2021 < 494.45951) {
                X = (13 - (le = 12)) / ((oe = 494.45951) - 494.39471),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 488.77993 & dil2021 < 494.39471) {
                X = (38 - (le = 13)) / ((oe = 494.39471) - 488.77993),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 488.06165 & dil2021 < 488.77993) {
                X = (45 - (le = 38)) / ((oe = 488.77993) - 488.06165),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 482.9322 & dil2021 < 488.06165) {
                X = (85 - (le = 45)) / ((oe = 488.06165) - 482.9322),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 480 & dil2021 < 482.9322) {
                X = (108 - (le = 85)) / ((oe = 482.9322) - 480),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 469.51828 & dil2021 < 480) {
                X = (249 - (le = 108)) / ((oe = 480) - 469.51828),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 468.5496 & dil2021 < 469.51828) {
                X = (269 - (le = 249)) / ((oe = 469.51828) - 468.5496),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 460 & dil2021 < 468.5496) {
                X = (426 - (le = 269)) / ((oe = 468.5496) - 460),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 444.14231 & dil2021 < 460) {
                X = (848 - (le = 426)) / ((oe = 460) - 444.14231),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 439.62354 & dil2021 < 444.14231) {
                X = (1004 - (le = 848)) / ((oe = 444.14231) - 439.62354),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 434.54371 & dil2021 < 439.62354) {
                X = (1226 - (le = 1004)) / ((oe = 439.62354) - 434.54371),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 429.4472 & dil2021 < 434.54371) {
                X = (1456 - (le = 1226)) / ((oe = 434.54371) - 429.4472),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 427.91804 & dil2021 < 429.4472) {
                X = (1526 - (le = 1456)) / ((oe = 429.4472) - 427.91804),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 423.15153 & dil2021 < 427.91804) {
                X = (1811 - (le = 1526)) / ((oe = 427.91804) - 423.15153),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 420 & dil2021 < 423.15153) {
                X = (1976 - (le = 1811)) / ((oe = 423.15153) - 420),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 416.50842 & dil2021 < 420) {
                X = (2207 - (le = 1976)) / ((oe = 420) - 416.50842),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 400 & dil2021 < 416.50842) {
                X = (3621 - (le = 2207)) / ((oe = 416.50842) - 400),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 398.86315 & dil2021 < 400) {
                X = (3759 - (le = 3621)) / ((oe = 400) - 398.86315),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 391.47257 & dil2021 < 398.86315) {
                X = (4580 - (le = 3759)) / ((oe = 398.86315) - 391.47257),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 387.37431 & dil2021 < 391.47257) {
                X = (5106 - (le = 4580)) / ((oe = 391.47257) - 387.37431),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 381.26652 & dil2021 < 387.37431) {
                X = (5977 - (le = 5106)) / ((oe = 387.37431) - 381.26652),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 380 & dil2021 < 381.26652) {
                X = (6159 - (le = 5977)) / ((oe = 381.26652) - 380),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 371.07618 & dil2021 < 380) {
                X = (7706 - (le = 6159)) / ((oe = 380) - 371.07618),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 367.75508 & dil2021 < 371.07618) {
                X = (8345 - (le = 7706)) / ((oe = 371.07618) - 367.75508),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 360 & dil2021 < 367.75508) {
                X = (10088 - (le = 8345)) / ((oe = 367.75508) - 360),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 357.93319 & dil2021 < 360) {
                X = (10596 - (le = 10088)) / ((oe = 360) - 357.93319),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 357.75905 & dil2021 < 357.93319) {
                X = (10640 - (le = 10596)) / ((oe = 357.93319) - 357.75905),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 348.20436 & dil2021 < 357.75905) {
                X = (13181 - (le = 10640)) / ((oe = 357.75905) - 348.20436),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 340 & dil2021 < 348.20436) {
                X = (15568 - (le = 13181)) / ((oe = 348.20436) - 340),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 339.39865 & dil2021 < 340) {
                X = (15772 - (le = 15568)) / ((oe = 340) - 339.39865),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 322.67637 & dil2021 < 339.39865) {
                X = (21020 - (le = 15772)) / ((oe = 339.39865) - 322.67637),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 320 & dil2021 < 322.67637) {
                X = (21929 - (le = 21020)) / ((oe = 322.67637) - 320),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 310.01144 & dil2021 < 320) {
                X = (25164 - (le = 21929)) / ((oe = 320) - 310.01144),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 306.20494 & dil2021 < 310.01144) {
                X = (26434 - (le = 25164)) / ((oe = 310.01144) - 306.20494),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 301.92348 & dil2021 < 306.20494) {
                X = (27878 - (le = 26434)) / ((oe = 306.20494) - 301.92348),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 300 & dil2021 < 301.92348) {
                X = (28488 - (le = 27878)) / ((oe = 301.92348) - 300),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 298.93432 & dil2021 < 300) {
                X = (28828 - (le = 28488)) / ((oe = 300) - 298.93432),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 291.41284 & dil2021 < 298.93432) {
                X = (31305 - (le = 28828)) / ((oe = 298.93432) - 291.41284),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 280 & dil2021 < 291.41284) {
                X = (35060 - (le = 31305)) / ((oe = 291.41284) - 280),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 270.66846 & dil2021 < 280) {
                X = (38168 - (le = 35060)) / ((oe = 280) - 270.66846),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 260 & dil2021 < 270.66846) {
                X = (41567 - (le = 38168)) / ((oe = 270.66846) - 260),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 240 & dil2021 < 260) {
                X = (48283 - (le = 41567)) / ((oe = 260) - 240),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 237.08607 & dil2021 < 240) {
                X = (49329 - (le = 48283)) / ((oe = 240) - 237.08607),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 228.85474 & dil2021 < 237.08607) {
                X = (52146 - (le = 49329)) / ((oe = 237.08607) - 228.85474),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 220 & dil2021 < 228.85474) {
                X = (55376 - (le = 52146)) / ((oe = 228.85474) - 220),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 212.40097 & dil2021 < 220) {
                X = (58110 - (le = 55376)) / ((oe = 220) - 212.40097),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 200 & dil2021 < 212.40097) {
                X = (62959 - (le = 58110)) / ((oe = 212.40097) - 200),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 188.31225 & dil2021 < 200) {
                X = (67476 - (le = 62959)) / ((oe = 200) - 188.31225),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 180 & dil2021 < 188.31225) {
                X = (70842 - (le = 67476)) / ((oe = 188.31225) - 180),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            } else if (dil2021 >= 150 & dil2021 < 180) {
                X = (84880 - (le = 70842)) / ((oe = 180) - 150),
                W = oe - dil2021,
                dils2021 = le + X * W,
                dils2021 = dils2021.toFixed(0)
            }
            if (tytYer2021 >= 559.82198)
                tytyers2021 = 1,
                tytyers2021 = tytyers2021.toFixed(0);
            else if (tytYer2021 >= 548.36209 & tytYer2021 < 559.82198) {
                X = (25 - (le = 1)) / ((oe = 559.82198) - 548.36209),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 540 & tytYer2021 < 548.36209) {
                X = (58 - (le = 25)) / ((oe = 548.36209) - 540),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 537.5324 & tytYer2021 < 540) {
                X = (70 - (le = 58)) / ((oe = 540) - 537.5324),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 526.71372 & tytYer2021 < 537.5324) {
                X = (204 - (le = 70)) / ((oe = 537.5324) - 526.71372),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 520 & tytYer2021 < 526.71372) {
                X = (364 - (le = 204)) / ((oe = 526.71372) - 520),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 518.02538 & tytYer2021 < 520) {
                X = (419 - (le = 364)) / ((oe = 520) - 518.02538),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 515.46292 & tytYer2021 < 518.02538) {
                X = (515 - (le = 419)) / ((oe = 518.02538) - 515.46292),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 514.78437 & tytYer2021 < 515.46292) {
                X = (544 - (le = 515)) / ((oe = 515.46292) - 514.78437),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 510.27132 & tytYer2021 < 514.78437) {
                X = (756 - (le = 544)) / ((oe = 514.78437) - 510.27132),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 504.3321 & tytYer2021 < 510.27132) {
                X = (1088 - (le = 756)) / ((oe = 510.27132) - 504.3321),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 502.31173 & tytYer2021 < 504.3321) {
                X = (1237 - (le = 1088)) / ((oe = 504.3321) - 502.31173),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 500 & tytYer2021 < 502.31173) {
                X = (1394 - (le = 1237)) / ((oe = 502.31173) - 500),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 495.63446 & tytYer2021 < 500) {
                X = (1770 - (le = 1394)) / ((oe = 500) - 495.63446),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 492.57419 & tytYer2021 < 495.63446) {
                X = (2103 - (le = 1770)) / ((oe = 495.63446) - 492.57419),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 489.9854 & tytYer2021 < 492.57419) {
                X = (2414 - (le = 2103)) / ((oe = 492.57419) - 489.9854),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 483.58619 & tytYer2021 < 489.9854) {
                X = (3330 - (le = 2414)) / ((oe = 489.9854) - 483.58619),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 480 & tytYer2021 < 483.58619) {
                X = (3959 - (le = 3330)) / ((oe = 483.58619) - 480),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 473.981 & tytYer2021 < 480) {
                X = (5327 - (le = 3959)) / ((oe = 480) - 473.981),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 469.34007 & tytYer2021 < 473.981) {
                X = (6561 - (le = 5327)) / ((oe = 473.981) - 469.34007),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 464.58345 & tytYer2021 < 469.34007) {
                X = (8095 - (le = 6561)) / ((oe = 469.34007) - 464.58345),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 463.22724 & tytYer2021 < 464.58345) {
                X = (8573 - (le = 8095)) / ((oe = 464.58345) - 463.22724),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 461.05312 & tytYer2021 < 463.22724) {
                X = (9468 - (le = 8573)) / ((oe = 463.22724) - 461.05312),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 460 & tytYer2021 < 461.05312) {
                X = (9931 - (le = 9468)) / ((oe = 461.05312) - 460),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 459.62964 & tytYer2021 < 460) {
                X = (10072 - (le = 9931)) / ((oe = 460) - 459.62964),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 457.31597 & tytYer2021 < 459.62964) {
                X = (11004 - (le = 10072)) / ((oe = 459.62964) - 457.31597),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 453.2756 & tytYer2021 < 457.31597) {
                X = (12950 - (le = 11004)) / ((oe = 457.31597) - 453.2756),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 449.90946 & tytYer2021 < 453.2756) {
                X = (14728 - (le = 12950)) / ((oe = 453.2756) - 449.90946),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 448.46166 & tytYer2021 < 449.90946) {
                X = (15565 - (le = 14728)) / ((oe = 449.90946) - 448.46166),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 447.76148 & tytYer2021 < 448.46166) {
                X = (15968 - (le = 15565)) / ((oe = 448.46166) - 447.76148),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 443.33367 & tytYer2021 < 447.76148) {
                X = (18754 - (le = 15968)) / ((oe = 447.76148) - 443.33367),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 442.18436 & tytYer2021 < 443.33367) {
                X = (19561 - (le = 18754)) / ((oe = 443.33367) - 442.18436),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 440 & tytYer2021 < 442.18436) {
                X = (21134 - (le = 19561)) / ((oe = 442.18436) - 440),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 438.46101 & tytYer2021 < 440) {
                X = (22327 - (le = 21134)) / ((oe = 440) - 438.46101),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 436.65881 & tytYer2021 < 438.46101) {
                X = (23566 - (le = 22327)) / ((oe = 438.46101) - 436.65881),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 435.87892 & tytYer2021 < 436.65881) {
                X = (24330 - (le = 23566)) / ((oe = 436.65881) - 435.87892),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 435.078 & tytYer2021 < 435.87892) {
                X = (24972 - (le = 24330)) / ((oe = 435.87892) - 435.078),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 431.9124 & tytYer2021 < 435.078) {
                X = (27681 - (le = 24972)) / ((oe = 435.078) - 431.9124),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 430.56937 & tytYer2021 < 431.9124) {
                X = (28858 - (le = 27681)) / ((oe = 431.9124) - 430.56937),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 428.41119 & tytYer2021 < 430.56937) {
                X = (30851 - (le = 28858)) / ((oe = 430.56937) - 428.41119),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 427.26179 & tytYer2021 < 428.41119) {
                X = (31921 - (le = 30851)) / ((oe = 428.41119) - 427.26179),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 426.60904 & tytYer2021 < 427.26179) {
                X = (32502 - (le = 31921)) / ((oe = 427.26179) - 426.60904),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 424.82608 & tytYer2021 < 426.60904) {
                X = (34319 - (le = 32502)) / ((oe = 426.60904) - 424.82608),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 423.2568 & tytYer2021 < 424.82608) {
                X = (35910 - (le = 34319)) / ((oe = 424.82608) - 423.2568),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 421.61011 & tytYer2021 < 423.2568) {
                X = (37636 - (le = 35910)) / ((oe = 423.2568) - 421.61011),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 419.70668 & tytYer2021 < 421.61011) {
                X = (39639 - (le = 37636)) / ((oe = 421.61011) - 419.70668),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 417.09263 & tytYer2021 < 419.70668) {
                X = (42575 - (le = 39639)) / ((oe = 419.70668) - 417.09263),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 416.85727 & tytYer2021 < 417.09263) {
                X = (42883 - (le = 42575)) / ((oe = 417.09263) - 416.85727),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 413.86578 & tytYer2021 < 416.85727) {
                X = (46370 - (le = 42883)) / ((oe = 416.85727) - 413.86578),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 411.87651 & tytYer2021 < 413.86578) {
                X = (48786 - (le = 46370)) / ((oe = 413.86578) - 411.87651),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 411.52583 & tytYer2021 < 411.87651) {
                X = (49229 - (le = 48786)) / ((oe = 411.87651) - 411.52583),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 410.61166 & tytYer2021 < 411.52583) {
                X = (50442 - (le = 49229)) / ((oe = 411.52583) - 410.61166),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 407.09332 & tytYer2021 < 410.61166) {
                X = (55003 - (le = 50442)) / ((oe = 410.61166) - 407.09332),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 402.81505 & tytYer2021 < 407.09332) {
                X = (60797 - (le = 55003)) / ((oe = 407.09332) - 402.81505),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 401.7699 & tytYer2021 < 402.81505) {
                X = (62257 - (le = 60797)) / ((oe = 402.81505) - 401.7699),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 400 & tytYer2021 < 401.7699) {
                X = (64820 - (le = 62257)) / ((oe = 401.7699) - 400),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 398.88848 & tytYer2021 < 400) {
                X = (66424 - (le = 64820)) / ((oe = 400) - 398.88848),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 396.41515 & tytYer2021 < 398.88848) {
                X = (70122 - (le = 66424)) / ((oe = 398.88848) - 396.41515),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 393.65869 & tytYer2021 < 396.41515) {
                X = (74460 - (le = 70122)) / ((oe = 396.41515) - 393.65869),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 391.6032 & tytYer2021 < 393.65869) {
                X = (77840 - (le = 74460)) / ((oe = 393.65869) - 391.6032),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 387.64613 & tytYer2021 < 391.6032) {
                X = (84263 - (le = 77840)) / ((oe = 391.6032) - 387.64613),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 385.44598 & tytYer2021 < 387.64613) {
                X = (88019 - (le = 84263)) / ((oe = 387.64613) - 385.44598),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 380 & tytYer2021 < 385.44598) {
                X = (97628 - (le = 88019)) / ((oe = 385.44598) - 380),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 378.18714 & tytYer2021 < 380) {
                X = (100943 - (le = 97628)) / ((oe = 380) - 378.18714),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 375.27815 & tytYer2021 < 378.18714) {
                X = (106363 - (le = 100943)) / ((oe = 378.18714) - 375.27815),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 372.56482 & tytYer2021 < 375.27815) {
                X = (111775 - (le = 106363)) / ((oe = 375.27815) - 372.56482),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 370.24011 & tytYer2021 < 372.56482) {
                X = (116402 - (le = 111775)) / ((oe = 372.56482) - 370.24011),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 364.36418 & tytYer2021 < 370.24011) {
                X = (128919 - (le = 116402)) / ((oe = 370.24011) - 364.36418),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 361.54713 & tytYer2021 < 364.36418) {
                X = (135122 - (le = 128919)) / ((oe = 364.36418) - 361.54713),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 360 & tytYer2021 < 361.54713) {
                X = (138681 - (le = 135122)) / ((oe = 361.54713) - 360),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 353.7764 & tytYer2021 < 360) {
                X = (153524 - (le = 138681)) / ((oe = 360) - 353.7764),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 350.9824 & tytYer2021 < 353.7764) {
                X = (160840 - (le = 153524)) / ((oe = 353.7764) - 350.9824),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 346.65218 & tytYer2021 < 350.9824) {
                X = (172311 - (le = 160840)) / ((oe = 350.9824) - 346.65218),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 343.00114 & tytYer2021 < 346.65218) {
                X = (182678 - (le = 172311)) / ((oe = 346.65218) - 343.00114),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 340 & tytYer2021 < 343.00114) {
                X = (191627 - (le = 182678)) / ((oe = 343.00114) - 340),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 336.20965 & tytYer2021 < 340) {
                X = (203459 - (le = 191627)) / ((oe = 340) - 336.20965),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 332.4234 & tytYer2021 < 336.20965) {
                X = (216013 - (le = 203459)) / ((oe = 336.20965) - 332.4234),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 330.65367 & tytYer2021 < 332.4234) {
                X = (222125 - (le = 216013)) / ((oe = 332.4234) - 330.65367),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 326.89867 & tytYer2021 < 330.65367) {
                X = (235528 - (le = 222125)) / ((oe = 330.65367) - 326.89867),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 324.19756 & tytYer2021 < 326.89867) {
                X = (245703 - (le = 235528)) / ((oe = 326.89867) - 324.19756),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 320 & tytYer2021 < 324.19756) {
                X = (262266 - (le = 245703)) / ((oe = 324.19756) - 320),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 318.15105 & tytYer2021 < 320) {
                X = (270168 - (le = 262266)) / ((oe = 320) - 318.15105),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 317.06975 & tytYer2021 < 318.15105) {
                X = (274791 - (le = 270168)) / ((oe = 318.15105) - 317.06975),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 316.40993 & tytYer2021 < 317.06975) {
                X = (277746 - (le = 274791)) / ((oe = 317.06975) - 316.40993),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 315.57951 & tytYer2021 < 316.40993) {
                X = (281441 - (le = 277746)) / ((oe = 316.40993) - 315.57951),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 313.38231 & tytYer2021 < 315.57951) {
                X = (291333 - (le = 281441)) / ((oe = 315.57951) - 313.38231),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 308.70264 & tytYer2021 < 313.38231) {
                X = (313336 - (le = 291333)) / ((oe = 313.38231) - 308.70264),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 305.28969 & tytYer2021 < 308.70264) {
                X = (330574 - (le = 313336)) / ((oe = 308.70264) - 305.28969),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 300 & tytYer2021 < 305.28969) {
                X = (359457 - (le = 330574)) / ((oe = 305.28969) - 300),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 297.74893 & tytYer2021 < 300) {
                X = (372549 - (le = 359457)) / ((oe = 300) - 297.74893),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 296.14305 & tytYer2021 < 297.74893) {
                X = (382105 - (le = 372549)) / ((oe = 297.74893) - 296.14305),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 294.83363 & tytYer2021 < 296.14305) {
                X = (390148 - (le = 382105)) / ((oe = 296.14305) - 294.83363),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 289.45993 & tytYer2021 < 294.83363) {
                X = (425305 - (le = 390148)) / ((oe = 294.83363) - 289.45993),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 286.74366 & tytYer2021 < 289.45993) {
                X = (444156 - (le = 425305)) / ((oe = 289.45993) - 286.74366),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 284.78364 & tytYer2021 < 286.74366) {
                X = (458183 - (le = 444156)) / ((oe = 286.74366) - 284.78364),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 282.55158 & tytYer2021 < 284.78364) {
                X = (474912 - (le = 458183)) / ((oe = 284.78364) - 282.55158),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 280 & tytYer2021 < 282.55158) {
                X = (494828 - (le = 474912)) / ((oe = 282.55158) - 280),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 277.88518 & tytYer2021 < 280) {
                X = (511757 - (le = 494828)) / ((oe = 280) - 277.88518),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 275.46964 & tytYer2021 < 277.88518) {
                X = (532058 - (le = 511757)) / ((oe = 277.88518) - 275.46964),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 273.19929 & tytYer2021 < 275.46964) {
                X = (551869 - (le = 532058)) / ((oe = 275.46964) - 273.19929),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 270.8576 & tytYer2021 < 273.19929) {
                X = (572840 - (le = 551869)) / ((oe = 273.19929) - 270.8576),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 267.16937 & tytYer2021 < 270.8576) {
                X = (607394 - (le = 572840)) / ((oe = 270.8576) - 267.16937),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 262.08983 & tytYer2021 < 267.16937) {
                X = (658080 - (le = 607394)) / ((oe = 267.16937) - 262.08983),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 260 & tytYer2021 < 262.08983) {
                X = (680067 - (le = 658080)) / ((oe = 262.08983) - 260),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 256.68558 & tytYer2021 < 260) {
                X = (716258 - (le = 680067)) / ((oe = 260) - 256.68558),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 254.1217 & tytYer2021 < 256.68558) {
                X = (745506 - (le = 716258)) / ((oe = 256.68558) - 254.1217),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 252.34222 & tytYer2021 < 254.1217) {
                X = (766141 - (le = 745506)) / ((oe = 254.1217) - 252.34222),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 251.52293 & tytYer2021 < 252.34222) {
                X = (775806 - (le = 766141)) / ((oe = 252.34222) - 251.52293),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 247.44757 & tytYer2021 < 251.52293) {
                X = (824151 - (le = 775806)) / ((oe = 251.52293) - 247.44757),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 244.45037 & tytYer2021 < 247.44757) {
                X = (859692 - (le = 824151)) / ((oe = 247.44757) - 244.45037),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 240 & tytYer2021 < 244.45037) {
                X = (911706 - (le = 859692)) / ((oe = 244.45037) - 240),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 234.28863 & tytYer2021 < 240) {
                X = (978520 - (le = 911706)) / ((oe = 240) - 234.28863),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 228.57638 & tytYer2021 < 234.28863) {
                X = (1049344 - (le = 978520)) / ((oe = 234.28863) - 228.57638),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 224.68702 & tytYer2021 < 228.57638) {
                X = (1100288 - (le = 1049344)) / ((oe = 228.57638) - 224.68702),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 220.62187 & tytYer2021 < 224.68702) {
                X = (1155105 - (le = 1100288)) / ((oe = 224.68702) - 220.62187),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 220 & tytYer2021 < 220.62187) {
                X = (1163378 - (le = 1155105)) / ((oe = 220.62187) - 220),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 219.51016 & tytYer2021 < 220) {
                X = (1169924 - (le = 1163378)) / ((oe = 220) - 219.51016),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 215.79148 & tytYer2021 < 219.51016) {
                X = (1219517 - (le = 1169924)) / ((oe = 219.51016) - 215.79148),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 209.48401 & tytYer2021 < 215.79148) {
                X = (1308829 - (le = 1219517)) / ((oe = 215.79148) - 209.48401),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 201.61247 & tytYer2021 < 209.48401) {
                X = (1428467 - (le = 1308829)) / ((oe = 209.48401) - 201.61247),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 201.01548 & tytYer2021 < 201.61247) {
                X = (1437669 - (le = 1428467)) / ((oe = 201.61247) - 201.01548),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 200 & tytYer2021 < 201.01548) {
                X = (1453315 - (le = 1437669)) / ((oe = 201.01548) - 200),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 188.50225 & tytYer2021 < 200) {
                X = (1593166 - (le = 1453315)) / ((oe = 200) - 188.50225),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 180 & tytYer2021 < 188.50225) {
                X = (1618040 - (le = 1593166)) / ((oe = 188.50225) - 180),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            } else if (tytYer2021 >= 160 & tytYer2021 < 180) {
                X = (1627539 - (le = 1618040)) / ((oe = 180) - 160),
                W = oe - tytYer2021,
                tytyers2021 = le + X * W,
                tytyers2021 = tytyers2021.toFixed(0)
            }
            if (mfYer2021 >= 559.82198)
                sayyers2021 = 1,
                sayyers2021 = sayyers2021.toFixed(0);
            else if (mfYer2021 >= 543.44279 & mfYer2021 < 559.82198) {
                X = (15 - (le = 1)) / ((oe = 559.82198) - 543.44279),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 540 & mfYer2021 < 543.44279) {
                X = (29 - (le = 15)) / ((oe = 543.44279) - 540),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 535.15325 & mfYer2021 < 540) {
                X = (57 - (le = 29)) / ((oe = 540) - 535.15325),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 532.51706 & mfYer2021 < 535.15325) {
                X = (90 - (le = 57)) / ((oe = 535.15325) - 532.51706),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 521.03074 & mfYer2021 < 532.51706) {
                X = (337 - (le = 90)) / ((oe = 532.51706) - 521.03074),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 520 & mfYer2021 < 521.03074) {
                X = (367 - (le = 337)) / ((oe = 521.03074) - 520),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 516.6894 & mfYer2021 < 520) {
                X = (475 - (le = 367)) / ((oe = 520) - 516.6894),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 503.01028 & mfYer2021 < 516.6894) {
                X = (1202 - (le = 475)) / ((oe = 516.6894) - 503.01028),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 500 & mfYer2021 < 503.01028) {
                X = (1418 - (le = 1202)) / ((oe = 503.01028) - 500),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 497.52145 & mfYer2021 < 500) {
                X = (1621 - (le = 1418)) / ((oe = 500) - 497.52145),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 493.88388 & mfYer2021 < 497.52145) {
                X = (1938 - (le = 1621)) / ((oe = 497.52145) - 493.88388),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 492.13455 & mfYer2021 < 493.88388) {
                X = (2115 - (le = 1938)) / ((oe = 493.88388) - 492.13455),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 488.7308 & mfYer2021 < 492.13455) {
                X = (2530 - (le = 2115)) / ((oe = 492.13455) - 488.7308),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 485.23696 & mfYer2021 < 488.7308) {
                X = (2962 - (le = 2530)) / ((oe = 488.7308) - 485.23696),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 482.94201 & mfYer2021 < 485.23696) {
                X = (3257 - (le = 2962)) / ((oe = 485.23696) - 482.94201),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 479.88061 & mfYer2021 < 482.94201) {
                X = (3713 - (le = 3257)) / ((oe = 482.94201) - 479.88061),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 477.39628 & mfYer2021 < 479.88061) {
                X = (4114 - (le = 3713)) / ((oe = 479.88061) - 477.39628),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 476.17171 & mfYer2021 < 477.39628) {
                X = (4351 - (le = 4114)) / ((oe = 477.39628) - 476.17171),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 473.23095 & mfYer2021 < 476.17171) {
                X = (4934 - (le = 4351)) / ((oe = 476.17171) - 473.23095),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 469.96876 & mfYer2021 < 473.23095) {
                X = (5713 - (le = 4934)) / ((oe = 473.23095) - 469.96876),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 460 & mfYer2021 < 469.96876) {
                X = (8436 - (le = 5713)) / ((oe = 469.96876) - 460),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 457.13386 & mfYer2021 < 460) {
                X = (9340 - (le = 8436)) / ((oe = 460) - 457.13386),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 456.67736 & mfYer2021 < 457.13386) {
                X = (9489 - (le = 9340)) / ((oe = 457.13386) - 456.67736),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 453.3716 & mfYer2021 < 456.67736) {
                X = (10662 - (le = 9489)) / ((oe = 456.67736) - 453.3716),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 451.58283 & mfYer2021 < 453.3716) {
                X = (11330 - (le = 10662)) / ((oe = 453.3716) - 451.58283),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 448.32614 & mfYer2021 < 451.58283) {
                X = (12674 - (le = 11330)) / ((oe = 451.58283) - 448.32614),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 446.67445 & mfYer2021 < 448.32614) {
                X = (13411 - (le = 12674)) / ((oe = 448.32614) - 446.67445),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 446.25532 & mfYer2021 < 446.67445) {
                X = (13602 - (le = 13411)) / ((oe = 446.67445) - 446.25532),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 442.64595 & mfYer2021 < 446.25532) {
                X = (15261 - (le = 13602)) / ((oe = 446.25532) - 442.64595),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 440 & mfYer2021 < 442.64595) {
                X = (16540 - (le = 15261)) / ((oe = 442.64595) - 440),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 435.00523 & mfYer2021 < 440) {
                X = (19152 - (le = 16540)) / ((oe = 440) - 435.00523),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 433.90695 & mfYer2021 < 435.00523) {
                X = (19794 - (le = 19152)) / ((oe = 435.00523) - 433.90695),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 431.38991 & mfYer2021 < 433.90695) {
                X = (21211 - (le = 19794)) / ((oe = 433.90695) - 431.38991),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 422.79417 & mfYer2021 < 431.38991) {
                X = (26598 - (le = 21211)) / ((oe = 431.38991) - 422.79417),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 421.04912 & mfYer2021 < 422.79417) {
                X = (27750 - (le = 26598)) / ((oe = 422.79417) - 421.04912),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 420 & mfYer2021 < 421.04912) {
                X = (28445 - (le = 27750)) / ((oe = 421.04912) - 420),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 418.98306 & mfYer2021 < 420) {
                X = (29128 - (le = 28445)) / ((oe = 420) - 418.98306),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 418.33719 & mfYer2021 < 418.98306) {
                X = (29561 - (le = 29128)) / ((oe = 418.98306) - 418.33719),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 413.47028 & mfYer2021 < 418.33719) {
                X = (32978 - (le = 29561)) / ((oe = 418.33719) - 413.47028),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 412.86154 & mfYer2021 < 413.47028) {
                X = (33413 - (le = 32978)) / ((oe = 413.47028) - 412.86154),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 410.37859 & mfYer2021 < 412.86154) {
                X = (35213 - (le = 33413)) / ((oe = 412.86154) - 410.37859),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 402.3314 & mfYer2021 < 410.37859) {
                X = (41553 - (le = 35213)) / ((oe = 410.37859) - 402.3314),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 400 & mfYer2021 < 402.3314) {
                X = (43527 - (le = 41553)) / ((oe = 402.3314) - 400),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 399.77033 & mfYer2021 < 400) {
                X = (43718 - (le = 43527)) / ((oe = 400) - 399.77033),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 388.9018 & mfYer2021 < 399.77033) {
                X = (52862 - (le = 43718)) / ((oe = 399.77033) - 388.9018),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 384.52339 & mfYer2021 < 388.9018) {
                X = (56762 - (le = 52862)) / ((oe = 388.9018) - 384.52339),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 380 & mfYer2021 < 384.52339) {
                X = (60969 - (le = 56762)) / ((oe = 384.52339) - 380),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 376.47799 & mfYer2021 < 380) {
                X = (61589 - (le = 60969)) / ((oe = 380) - 376.47799),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 374.58283 & mfYer2021 < 376.47799) {
                X = (66101 - (le = 61589)) / ((oe = 376.47799) - 374.58283),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 369.18559 & mfYer2021 < 374.58283) {
                X = (71458 - (le = 66101)) / ((oe = 374.58283) - 369.18559),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 367.5698 & mfYer2021 < 369.18559) {
                X = (73084 - (le = 71458)) / ((oe = 369.18559) - 367.5698),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 363.87105 & mfYer2021 < 367.5698) {
                X = (76877 - (le = 73084)) / ((oe = 367.5698) - 363.87105),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 361.59393 & mfYer2021 < 363.87105) {
                X = (79230 - (le = 76877)) / ((oe = 363.87105) - 361.59393),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 360 & mfYer2021 < 361.59393) {
                X = (80844 - (le = 79230)) / ((oe = 361.59393) - 360),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 353.0597 & mfYer2021 < 360) {
                X = (88499 - (le = 80844)) / ((oe = 360) - 353.0597),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 346.72533 & mfYer2021 < 353.0597) {
                X = (95777 - (le = 88499)) / ((oe = 353.0597) - 346.72533),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 341.89405 & mfYer2021 < 346.72533) {
                X = (101560 - (le = 95777)) / ((oe = 346.72533) - 341.89405),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 340 & mfYer2021 < 341.89405) {
                X = (103825 - (le = 101560)) / ((oe = 341.89405) - 340),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 337.57846 & mfYer2021 < 340) {
                X = (106792 - (le = 103825)) / ((oe = 340) - 337.57846),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 331.38022 & mfYer2021 < 337.57846) {
                X = (114627 - (le = 106792)) / ((oe = 337.57846) - 331.38022),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 328.42778 & mfYer2021 < 331.38022) {
                X = (118616 - (le = 114627)) / ((oe = 331.38022) - 328.42778),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 322.19884 & mfYer2021 < 328.42778) {
                X = (127343 - (le = 118616)) / ((oe = 328.42778) - 322.19884),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 321.64141 & mfYer2021 < 322.19884) {
                X = (128125 - (le = 127343)) / ((oe = 322.19884) - 321.64141),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 320 & mfYer2021 < 321.64141) {
                X = (130568 - (le = 128125)) / ((oe = 321.64141) - 320),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 314.57889 & mfYer2021 < 320) {
                X = (138746 - (le = 130568)) / ((oe = 320) - 314.57889),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 310.27979 & mfYer2021 < 314.57889) {
                X = (145714 - (le = 138746)) / ((oe = 314.57889) - 310.27979),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 309.09176 & mfYer2021 < 310.27979) {
                X = (147626 - (le = 145714)) / ((oe = 310.27979) - 309.09176),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 304.65871 & mfYer2021 < 309.09176) {
                X = (155223 - (le = 147626)) / ((oe = 309.09176) - 304.65871),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 301.81702 & mfYer2021 < 304.65871) {
                X = (160235 - (le = 155223)) / ((oe = 304.65871) - 301.81702),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 300 & mfYer2021 < 301.81702) {
                X = (163528 - (le = 160235)) / ((oe = 301.81702) - 300),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 295.5915 & mfYer2021 < 300) {
                X = (171942 - (le = 163528)) / ((oe = 300) - 295.5915),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 293.33674 & mfYer2021 < 295.5915) {
                X = (176324 - (le = 171942)) / ((oe = 295.5915) - 293.33674),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 290.32812 & mfYer2021 < 293.33674) {
                X = (182367 - (le = 176324)) / ((oe = 293.33674) - 290.32812),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 289.51426 & mfYer2021 < 290.32812) {
                X = (184058 - (le = 182367)) / ((oe = 290.32812) - 289.51426),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 286.53769 & mfYer2021 < 289.51426) {
                X = (190330 - (le = 184058)) / ((oe = 289.51426) - 286.53769),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 282.27379 & mfYer2021 < 286.53769) {
                X = (199904 - (le = 190330)) / ((oe = 286.53769) - 282.27379),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 280 & mfYer2021 < 282.27379) {
                X = (205047 - (le = 199904)) / ((oe = 282.27379) - 280),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 278.78596 & mfYer2021 < 280) {
                X = (208037 - (le = 205047)) / ((oe = 280) - 278.78596),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 275.14454 & mfYer2021 < 278.78596) {
                X = (216933 - (le = 208037)) / ((oe = 278.78596) - 275.14454),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 272.96118 & mfYer2021 < 275.14454) {
                X = (222357 - (le = 216933)) / ((oe = 275.14454) - 272.96118),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 264.73025 & mfYer2021 < 272.96118) {
                X = (244561 - (le = 222357)) / ((oe = 272.96118) - 264.73025),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 260 & mfYer2021 < 264.73025) {
                X = (258755 - (le = 244561)) / ((oe = 264.73025) - 260),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 257.58667 & mfYer2021 < 260) {
                X = (266398 - (le = 258755)) / ((oe = 260) - 257.58667),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 253.06848 & mfYer2021 < 257.58667) {
                X = (281323 - (le = 266398)) / ((oe = 257.58667) - 253.06848),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 248.78094 & mfYer2021 < 253.06848) {
                X = (296597 - (le = 281323)) / ((oe = 253.06848) - 248.78094),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 247.06228 & mfYer2021 < 248.78094) {
                X = (302878 - (le = 296597)) / ((oe = 248.78094) - 247.06228),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 243.06313 & mfYer2021 < 247.06228) {
                X = (318136 - (le = 302878)) / ((oe = 247.06228) - 243.06313),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 240 & mfYer2021 < 243.06313) {
                X = (330595 - (le = 318136)) / ((oe = 243.06313) - 240),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 235.34703 & mfYer2021 < 240) {
                X = (350205 - (le = 330595)) / ((oe = 240) - 235.34703),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 225.97258 & mfYer2021 < 235.34703) {
                X = (378833 - (le = 350205)) / ((oe = 235.34703) - 225.97258),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 220 & mfYer2021 < 225.97258) {
                X = (384317 - (le = 378833)) / ((oe = 225.97258) - 220),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 200 & mfYer2021 < 220) {
                X = (390096 - (le = 384317)) / ((oe = 220) - 200),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            } else if (mfYer2021 >= 180 & mfYer2021 < 200) {
                X = (390132 - (le = 390096)) / ((oe = 200) - 180),
                W = oe - mfYer2021,
                sayyers2021 = le + X * W,
                sayyers2021 = sayyers2021.toFixed(0)
            }
            if (sozYer2021 >= 529.88225)
                sozyers2021 = 1,
                sozyers2021 = sozyers2021.toFixed(0);
            else if (sozYer2021 >= 520 & sozYer2021 < 529.88225) {
                X = (7 - (le = 1)) / ((oe = 529.88225) - 520),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 500 & sozYer2021 < 520) {
                X = (44 - (le = 7)) / ((oe = 520) - 500),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 480 & sozYer2021 < 500) {
                X = (127 - (le = 44)) / ((oe = 500) - 480),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 472.4974 & sozYer2021 < 480) {
                X = (176 - (le = 127)) / ((oe = 480) - 472.4974),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 460 & sozYer2021 < 472.4974) {
                X = (306 - (le = 176)) / ((oe = 472.4974) - 460),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 440 & sozYer2021 < 460) {
                X = (679 - (le = 306)) / ((oe = 460) - 440),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 431.39136 & sozYer2021 < 440) {
                X = (951 - (le = 679)) / ((oe = 440) - 431.39136),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 424.47108 & sozYer2021 < 431.39136) {
                X = (1223 - (le = 951)) / ((oe = 431.39136) - 424.47108),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 420 & sozYer2021 < 424.47108) {
                X = (1440 - (le = 1223)) / ((oe = 424.47108) - 420),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 403.89217 & sozYer2021 < 420) {
                X = (2787 - (le = 1440)) / ((oe = 420) - 403.89217),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 400 & sozYer2021 < 403.89217) {
                X = (3335 - (le = 2787)) / ((oe = 403.89217) - 400),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 395.82388 & sozYer2021 < 400) {
                X = (4030 - (le = 3335)) / ((oe = 400) - 395.82388),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 393.2315 & sozYer2021 < 395.82388) {
                X = (4545 - (le = 4030)) / ((oe = 395.82388) - 393.2315),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 390.43319 & sozYer2021 < 393.2315) {
                X = (5114 - (le = 4545)) / ((oe = 393.2315) - 390.43319),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 381.69128 & sozYer2021 < 390.43319) {
                X = (7501 - (le = 5114)) / ((oe = 390.43319) - 381.69128),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 380 & sozYer2021 < 381.69128) {
                X = (8061 - (le = 7501)) / ((oe = 381.69128) - 380),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 377.42534 & sozYer2021 < 380) {
                X = (8961 - (le = 8061)) / ((oe = 380) - 377.42534),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 376.96054 & sozYer2021 < 377.42534) {
                X = (9146 - (le = 8961)) / ((oe = 377.42534) - 376.96054),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 372.95182 & sozYer2021 < 376.96054) {
                X = (10768 - (le = 9146)) / ((oe = 376.96054) - 372.95182),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 364.20211 & sozYer2021 < 372.95182) {
                X = (15114 - (le = 10768)) / ((oe = 372.95182) - 364.20211),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 362.38171 & sozYer2021 < 364.20211) {
                X = (16223 - (le = 15114)) / ((oe = 364.20211) - 362.38171),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 360 & sozYer2021 < 362.38171) {
                X = (17756 - (le = 16223)) / ((oe = 362.38171) - 360),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 356.17391 & sozYer2021 < 360) {
                X = (20430 - (le = 17756)) / ((oe = 360) - 356.17391),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 355.6889 & sozYer2021 < 356.17391) {
                X = (20795 - (le = 20430)) / ((oe = 356.17391) - 355.6889),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 354.03464 & sozYer2021 < 355.6889) {
                X = (22073 - (le = 20795)) / ((oe = 355.6889) - 354.03464),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 352.68134 & sozYer2021 < 354.03464) {
                X = (23109 - (le = 22073)) / ((oe = 354.03464) - 352.68134),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 351.5701 & sozYer2021 < 352.68134) {
                X = (23993 - (le = 23109)) / ((oe = 352.68134) - 351.5701),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 350.40273 & sozYer2021 < 351.5701) {
                X = (24986 - (le = 23993)) / ((oe = 351.5701) - 350.40273),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 348.67893 & sozYer2021 < 350.40273) {
                X = (26513 - (le = 24986)) / ((oe = 350.40273) - 348.67893),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 347.66172 & sozYer2021 < 348.67893) {
                X = (27441 - (le = 26513)) / ((oe = 348.67893) - 347.66172),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 343.44081 & sozYer2021 < 347.66172) {
                X = (31710 - (le = 27441)) / ((oe = 347.66172) - 343.44081),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 342.0471 & sozYer2021 < 343.44081) {
                X = (33173 - (le = 31710)) / ((oe = 343.44081) - 342.0471),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 341.83239 & sozYer2021 < 342.0471) {
                X = (33423 - (le = 33173)) / ((oe = 342.0471) - 341.83239),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 340 & sozYer2021 < 341.83239) {
                X = (35548 - (le = 33423)) / ((oe = 341.83239) - 340),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 339.4017 & sozYer2021 < 340) {
                X = (36248 - (le = 35548)) / ((oe = 340) - 339.4017),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 337.2996 & sozYer2021 < 339.4017) {
                X = (38789 - (le = 36248)) / ((oe = 339.4017) - 337.2996),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 334.63356 & sozYer2021 < 337.2996) {
                X = (42271 - (le = 38789)) / ((oe = 337.2996) - 334.63356),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 332.32295 & sozYer2021 < 334.63356) {
                X = (45399 - (le = 42271)) / ((oe = 334.63356) - 332.32295),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 328.30119 & sozYer2021 < 332.32295) {
                X = (51392 - (le = 45399)) / ((oe = 332.32295) - 328.30119),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 327.14096 & sozYer2021 < 328.30119) {
                X = (53231 - (le = 51392)) / ((oe = 328.30119) - 327.14096),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 326.74424 & sozYer2021 < 327.14096) {
                X = (53849 - (le = 53231)) / ((oe = 327.14096) - 326.74424),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 326.51724 & sozYer2021 < 326.74424) {
                X = (54225 - (le = 53849)) / ((oe = 326.74424) - 326.51724),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 324.23293 & sozYer2021 < 326.51724) {
                X = (58023 - (le = 54225)) / ((oe = 326.51724) - 324.23293),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 322.38182 & sozYer2021 < 324.23293) {
                X = (61371 - (le = 58023)) / ((oe = 324.23293) - 322.38182),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 320 & sozYer2021 < 322.38182) {
                X = (65784 - (le = 61371)) / ((oe = 322.38182) - 320),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 318.89081 & sozYer2021 < 320) {
                X = (67945 - (le = 65784)) / ((oe = 320) - 318.89081),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 317.9629 & sozYer2021 < 318.89081) {
                X = (71603 - (le = 67945)) / ((oe = 318.89081) - 317.9629),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 314.32562 & sozYer2021 < 317.9629) {
                X = (77494 - (le = 71603)) / ((oe = 317.9629) - 314.32562),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 312.65939 & sozYer2021 < 314.32562) {
                X = (81183 - (le = 77494)) / ((oe = 314.32562) - 312.65939),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 310.23308 & sozYer2021 < 312.65939) {
                X = (86819 - (le = 81183)) / ((oe = 312.65939) - 310.23308),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 305.19964 & sozYer2021 < 310.23308) {
                X = (99334 - (le = 86819)) / ((oe = 310.23308) - 305.19964),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 304.04603 & sozYer2021 < 305.19964) {
                X = (102406 - (le = 99334)) / ((oe = 305.19964) - 304.04603),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 303.49626 & sozYer2021 < 304.04603) {
                X = (103918 - (le = 102406)) / ((oe = 304.04603) - 303.49626),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 302.46954 & sozYer2021 < 303.49626) {
                X = (106791 - (le = 103918)) / ((oe = 303.49626) - 302.46954),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 300 & sozYer2021 < 302.46954) {
                X = (113877 - (le = 106791)) / ((oe = 302.46954) - 300),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 296.4305 & sozYer2021 < 300) {
                X = (124838 - (le = 113877)) / ((oe = 300) - 296.4305),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 292.04536 & sozYer2021 < 296.4305) {
                X = (138914 - (le = 124838)) / ((oe = 296.4305) - 292.04536),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 288.93662 & sozYer2021 < 292.04536) {
                X = (149860 - (le = 138914)) / ((oe = 292.04536) - 288.93662),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 286.95652 & sozYer2021 < 288.93662) {
                X = (157113 - (le = 149860)) / ((oe = 288.93662) - 286.95652),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 282.46376 & sozYer2021 < 286.95652) {
                X = (174611 - (le = 157113)) / ((oe = 286.95652) - 282.46376),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 281.22754 & sozYer2021 < 282.46376) {
                X = (179735 - (le = 174611)) / ((oe = 282.46376) - 281.22754),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 280 & sozYer2021 < 281.22754) {
                X = (184806 - (le = 179735)) / ((oe = 281.22754) - 280),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 275.42432 & sozYer2021 < 280) {
                X = (205025 - (le = 184806)) / ((oe = 280) - 275.42432),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 271.89763 & sozYer2021 < 275.42432) {
                X = (221947 - (le = 205025)) / ((oe = 275.42432) - 271.89763),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 269.26066 & sozYer2021 < 271.89763) {
                X = (235089 - (le = 221947)) / ((oe = 271.89763) - 269.26066),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 266.76268 & sozYer2021 < 269.26066) {
                X = (247981 - (le = 235089)) / ((oe = 269.26066) - 266.76268),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 263.51212 & sozYer2021 < 266.76268) {
                X = (265631 - (le = 247981)) / ((oe = 266.76268) - 263.51212),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 261.90113 & sozYer2021 < 263.51212) {
                X = (274670 - (le = 265631)) / ((oe = 263.51212) - 261.90113),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 260 & sozYer2021 < 261.90113) {
                X = (285609 - (le = 274670)) / ((oe = 261.90113) - 260),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 256.10445 & sozYer2021 < 260) {
                X = (309385 - (le = 285609)) / ((oe = 260) - 256.10445),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 252.76495 & sozYer2021 < 256.10445) {
                X = (330738 - (le = 309385)) / ((oe = 256.10445) - 252.76495),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 249.20634 & sozYer2021 < 252.76495) {
                X = (354668 - (le = 330738)) / ((oe = 252.76495) - 249.20634),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 247.87592 & sozYer2021 < 249.20634) {
                X = (363979 - (le = 354668)) / ((oe = 249.20634) - 247.87592),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 244.43084 & sozYer2021 < 247.87592) {
                X = (388522 - (le = 363979)) / ((oe = 247.87592) - 244.43084),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 243.71394 & sozYer2021 < 244.43084) {
                X = (393803 - (le = 388522)) / ((oe = 244.43084) - 243.71394),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 242.142 & sozYer2021 < 243.71394) {
                X = (405574 - (le = 393803)) / ((oe = 243.71394) - 242.142),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 240 & sozYer2021 < 242.142) {
                X = (421934 - (le = 405574)) / ((oe = 242.142) - 240),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 239.33486 & sozYer2021 < 240) {
                X = (427098 - (le = 421934)) / ((oe = 240) - 239.33486),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 238.66292 & sozYer2021 < 239.33486) {
                X = (432362 - (le = 427098)) / ((oe = 239.33486) - 238.66292),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 238.26965 & sozYer2021 < 238.66292) {
                X = (435375 - (le = 432362)) / ((oe = 238.66292) - 238.26965),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 233.06797 & sozYer2021 < 238.26965) {
                X = (476245 - (le = 435375)) / ((oe = 238.26965) - 233.06797),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 229.79194 & sozYer2021 < 233.06797) {
                X = (499933 - (le = 476245)) / ((oe = 233.06797) - 229.79194),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 223.93942 & sozYer2021 < 229.79194) {
                X = (533126 - (le = 499933)) / ((oe = 229.79194) - 223.93942),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 220 & sozYer2021 < 223.93942) {
                X = (546871 - (le = 533126)) / ((oe = 223.93942) - 220),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 200 & sozYer2021 < 220) {
                X = (563524 - (le = 546871)) / ((oe = 220) - 200),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            } else if (sozYer2021 >= 180 & sozYer2021 < 200) {
                X = (563808 - (le = 563524)) / ((oe = 200) - 180),
                W = oe - sozYer2021,
                sozyers2021 = le + X * W,
                sozyers2021 = sozyers2021.toFixed(0)
            }
            if (tmYer2021 >= 559)
                eayers2021 = 1,
                eayers2021 = eayers2021.toFixed(0);
            else if (tmYer2021 >= 533.79593 & tmYer2021 < 540) {
                X = (16 - (le = 8)) / ((oe = 540) - 533.79593),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 520 & tmYer2021 < 533.79593) {
                X = (30 - (le = 16)) / ((oe = 533.79593) - 520),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 513.17987 & tmYer2021 < 520) {
                X = (45 - (le = 30)) / ((oe = 520) - 513.17987),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 500 & tmYer2021 < 513.17987) {
                X = (100 - (le = 45)) / ((oe = 513.17987) - 500),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 498.79392 & tmYer2021 < 500) {
                X = (111 - (le = 100)) / ((oe = 500) - 498.79392),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 480 & tmYer2021 < 498.79392) {
                X = (281 - (le = 111)) / ((oe = 498.79392) - 480),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 472.38606 & tmYer2021 < 480) {
                X = (396 - (le = 281)) / ((oe = 480) - 472.38606),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 464.83965 & tmYer2021 < 472.38606) {
                X = (526 - (le = 396)) / ((oe = 472.38606) - 464.83965),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 460 & tmYer2021 < 464.83965) {
                X = (665 - (le = 526)) / ((oe = 464.83965) - 460),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 455.93883 & tmYer2021 < 460) {
                X = (777 - (le = 665)) / ((oe = 460) - 455.93883),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 452.15464 & tmYer2021 < 455.93883) {
                X = (910 - (le = 777)) / ((oe = 455.93883) - 452.15464),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 448.94945 & tmYer2021 < 452.15464) {
                X = (1036 - (le = 910)) / ((oe = 452.15464) - 448.94945),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 445.80251 & tmYer2021 < 448.94945) {
                X = (1191 - (le = 1036)) / ((oe = 448.94945) - 445.80251),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 440 & tmYer2021 < 445.80251) {
                X = (1560 - (le = 1191)) / ((oe = 445.80251) - 440),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 437.87878 & tmYer2021 < 440) {
                X = (1703 - (le = 1560)) / ((oe = 440) - 437.87878),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 432.67083 & tmYer2021 < 437.87878) {
                X = (2153 - (le = 1703)) / ((oe = 437.87878) - 432.67083),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 428.74128 & tmYer2021 < 432.67083) {
                X = (2577 - (le = 2153)) / ((oe = 432.67083) - 428.74128),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 423.47318 & tmYer2021 < 428.74128) {
                X = (3212 - (le = 2577)) / ((oe = 428.74128) - 423.47318),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 420 & tmYer2021 < 423.47318) {
                X = (3749 - (le = 3212)) / ((oe = 423.47318) - 420),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 418.82751 & tmYer2021 < 420) {
                X = (3924 - (le = 3749)) / ((oe = 420) - 418.82751),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 417.51619 & tmYer2021 < 418.82751) {
                X = (4162 - (le = 3924)) / ((oe = 418.82751) - 417.51619),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 413.93021 & tmYer2021 < 417.51619) {
                X = (4792 - (le = 4162)) / ((oe = 417.51619) - 413.93021),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 411.48764 & tmYer2021 < 413.93021) {
                X = (5336 - (le = 4792)) / ((oe = 413.93021) - 411.48764),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 408.43757 & tmYer2021 < 411.48764) {
                X = (6023 - (le = 5336)) / ((oe = 411.48764) - 408.43757),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 401.7427 & tmYer2021 < 408.43757) {
                X = (7818 - (le = 6023)) / ((oe = 408.43757) - 401.7427),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 400 & tmYer2021 < 401.7427) {
                X = (8394 - (le = 7818)) / ((oe = 401.7427) - 400),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 398.54788 & tmYer2021 < 400) {
                X = (8887 - (le = 8394)) / ((oe = 400) - 398.54788),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 397.56038 & tmYer2021 < 398.54788) {
                X = (9238 - (le = 8887)) / ((oe = 398.54788) - 397.56038),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 395.30734 & tmYer2021 < 397.56038) {
                X = (10103 - (le = 9238)) / ((oe = 397.56038) - 395.30734),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 394.49704 & tmYer2021 < 395.30734) {
                X = (10424 - (le = 10103)) / ((oe = 395.30734) - 394.49704),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 391.9833 & tmYer2021 < 394.49704) {
                X = (11520 - (le = 10424)) / ((oe = 394.49704) - 391.9833),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 390.00809 & tmYer2021 < 391.9833) {
                X = (12425 - (le = 11520)) / ((oe = 391.9833) - 390.00809),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 385.2007 & tmYer2021 < 390.00809) {
                X = (14957 - (le = 12425)) / ((oe = 390.00809) - 385.2007),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 382.05733 & tmYer2021 < 385.2007) {
                X = (16836 - (le = 14957)) / ((oe = 385.2007) - 382.05733),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 380 & tmYer2021 < 382.05733) {
                X = (18111 - (le = 16836)) / ((oe = 382.05733) - 380),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 379.76514 & tmYer2021 < 380) {
                X = (18255 - (le = 18111)) / ((oe = 380) - 379.76514),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 379.03292 & tmYer2021 < 379.76514) {
                X = (18780 - (le = 18255)) / ((oe = 379.76514) - 379.03292),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 378.41609 & tmYer2021 < 379.03292) {
                X = (19169 - (le = 18780)) / ((oe = 379.03292) - 378.41609),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 375.29417 & tmYer2021 < 378.41609) {
                X = (21418 - (le = 19169)) / ((oe = 378.41609) - 375.29417),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 372.43634 & tmYer2021 < 375.29417) {
                X = (23633 - (le = 21418)) / ((oe = 375.29417) - 372.43634),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 371.3333 & tmYer2021 < 372.43634) {
                X = (24589 - (le = 23633)) / ((oe = 372.43634) - 371.3333),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 370.81805 & tmYer2021 < 371.3333) {
                X = (25045 - (le = 24589)) / ((oe = 371.3333) - 370.81805),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 369.64483 & tmYer2021 < 370.81805) {
                X = (26053 - (le = 25045)) / ((oe = 370.81805) - 369.64483),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 369.05357 & tmYer2021 < 369.64483) {
                X = (26606 - (le = 26053)) / ((oe = 369.64483) - 369.05357),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 365.57895 & tmYer2021 < 369.05357) {
                X = (29847 - (le = 26606)) / ((oe = 369.05357) - 365.57895),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 364.71295 & tmYer2021 < 365.57895) {
                X = (30724 - (le = 29847)) / ((oe = 365.57895) - 364.71295),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 363.89523 & tmYer2021 < 364.71295) {
                X = (31512 - (le = 30724)) / ((oe = 364.71295) - 363.89523),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 361.32424 & tmYer2021 < 363.89523) {
                X = (34226 - (le = 31512)) / ((oe = 363.89523) - 361.32424),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 360 & tmYer2021 < 361.32424) {
                X = (35656 - (le = 34226)) / ((oe = 361.32424) - 360),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 357.35797 & tmYer2021 < 360) {
                X = (38781 - (le = 35656)) / ((oe = 360) - 357.35797),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 355.9656 & tmYer2021 < 357.35797) {
                X = (40465 - (le = 38781)) / ((oe = 357.35797) - 355.9656),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 354.20258 & tmYer2021 < 355.9656) {
                X = (42658 - (le = 40465)) / ((oe = 355.9656) - 354.20258),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 351.9725 & tmYer2021 < 354.20258) {
                X = (45867 - (le = 42658)) / ((oe = 354.20258) - 351.9725),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 350.71849 & tmYer2021 < 351.9725) {
                X = (47172 - (le = 45867)) / ((oe = 351.9725) - 350.71849),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 349.36933 & tmYer2021 < 350.71849) {
                X = (48965 - (le = 47172)) / ((oe = 350.71849) - 349.36933),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 345.40856 & tmYer2021 < 349.36933) {
                X = (54566 - (le = 48965)) / ((oe = 349.36933) - 345.40856),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 342.82556 & tmYer2021 < 345.40856) {
                X = (58352 - (le = 54566)) / ((oe = 345.40856) - 342.82556),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 341.07663 & tmYer2021 < 342.82556) {
                X = (61090 - (le = 58352)) / ((oe = 342.82556) - 341.07663),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 339.89502 & tmYer2021 < 341.07663) {
                X = (62968 - (le = 61090)) / ((oe = 341.07663) - 339.89502),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 337.39818 & tmYer2021 < 339.89502) {
                X = (67009 - (le = 62968)) / ((oe = 339.89502) - 337.39818),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 334.07959 & tmYer2021 < 337.39818) {
                X = (72704 - (le = 67009)) / ((oe = 337.39818) - 334.07959),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 332.29411 & tmYer2021 < 334.07959) {
                X = (75896 - (le = 72704)) / ((oe = 334.07959) - 332.29411),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 328.08935 & tmYer2021 < 332.29411) {
                X = (83905 - (le = 75896)) / ((oe = 332.29411) - 328.08935),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 326.72801 & tmYer2021 < 328.08935) {
                X = (86514 - (le = 83905)) / ((oe = 328.08935) - 326.72801),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 325.96802 & tmYer2021 < 326.72801) {
                X = (88035 - (le = 86514)) / ((oe = 326.72801) - 325.96802),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 324.88417 & tmYer2021 < 325.96802) {
                X = (90249 - (le = 88035)) / ((oe = 325.96802) - 324.88417),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 324.01526 & tmYer2021 < 324.88417) {
                X = (92014 - (le = 90249)) / ((oe = 324.88417) - 324.01526),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 321.86285 & tmYer2021 < 324.01526) {
                X = (96600 - (le = 92014)) / ((oe = 324.01526) - 321.86285),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 320 & tmYer2021 < 321.86285) {
                X = (100619 - (le = 96600)) / ((oe = 321.86285) - 320),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 316.703 & tmYer2021 < 320) {
                X = (107895 - (le = 100619)) / ((oe = 320) - 316.703),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 313.8837 & tmYer2021 < 316.703) {
                X = (114627 - (le = 107895)) / ((oe = 316.703) - 313.8837),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 310.3624 & tmYer2021 < 313.8837) {
                X = (123224 - (le = 114627)) / ((oe = 313.8837) - 310.3624),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 308.19527 & tmYer2021 < 310.3624) {
                X = (128826 - (le = 123224)) / ((oe = 310.3624) - 308.19527),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 302.60759 & tmYer2021 < 308.19527) {
                X = (143842 - (le = 128826)) / ((oe = 308.19527) - 302.60759),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 300 & tmYer2021 < 302.60759) {
                X = (151379 - (le = 143842)) / ((oe = 302.60759) - 300),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 298.88725 & tmYer2021 < 300) {
                X = (154783 - (le = 151379)) / ((oe = 300) - 298.88725),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 297.37788 & tmYer2021 < 298.88725) {
                X = (159322 - (le = 154783)) / ((oe = 298.88725) - 297.37788),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 292.92952 & tmYer2021 < 297.37788) {
                X = (173503 - (le = 159322)) / ((oe = 297.37788) - 292.92952),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 290.80883 & tmYer2021 < 292.92952) {
                X = (180572 - (le = 173503)) / ((oe = 292.92952) - 290.80883),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 284.65339 & tmYer2021 < 290.80883) {
                X = (202944 - (le = 180572)) / ((oe = 290.80883) - 284.65339),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 280 & tmYer2021 < 284.65339) {
                X = (221301 - (le = 202944)) / ((oe = 284.65339) - 280),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 276.82899 & tmYer2021 < 280) {
                X = (234519 - (le = 221301)) / ((oe = 280) - 276.82899),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 275.38974 & tmYer2021 < 276.82899) {
                X = (240732 - (le = 234519)) / ((oe = 276.82899) - 275.38974),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 271.2799 & tmYer2021 < 275.38974) {
                X = (259809 - (le = 240732)) / ((oe = 275.38974) - 271.2799),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 268.60941 & tmYer2021 < 271.2799) {
                X = (272919 - (le = 259809)) / ((oe = 271.2799) - 268.60941),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 265.73227 & tmYer2021 < 268.60941) {
                X = (287557 - (le = 272919)) / ((oe = 268.60941) - 265.73227),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 263.13702 & tmYer2021 < 265.73227) {
                X = (301292 - (le = 287557)) / ((oe = 265.73227) - 263.13702),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 261.6449 & tmYer2021 < 263.13702) {
                X = (309474 - (le = 301292)) / ((oe = 263.13702) - 261.6449),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 260 & tmYer2021 < 261.6449) {
                X = (318811 - (le = 309474)) / ((oe = 261.6449) - 260),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 259.46809 & tmYer2021 < 260) {
                X = (321881 - (le = 318811)) / ((oe = 260) - 259.46809),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 256.55873 & tmYer2021 < 259.46809) {
                X = (339207 - (le = 321881)) / ((oe = 259.46809) - 256.55873),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 250.23438 & tmYer2021 < 256.55873) {
                X = (379608 - (le = 339207)) / ((oe = 256.55873) - 250.23438),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 244.60431 & tmYer2021 < 250.23438) {
                X = (418769 - (le = 379608)) / ((oe = 250.23438) - 244.60431),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 241.32725 & tmYer2021 < 244.60431) {
                X = (443313 - (le = 418769)) / ((oe = 244.60431) - 241.32725),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 240 & tmYer2021 < 241.32725) {
                X = (453618 - (le = 443313)) / ((oe = 241.32725) - 240),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 236.75045 & tmYer2021 < 240) {
                X = (479473 - (le = 453618)) / ((oe = 240) - 236.75045),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 234.22529 & tmYer2021 < 236.75045) {
                X = (499861 - (le = 479473)) / ((oe = 236.75045) - 234.22529),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 232.17587 & tmYer2021 < 234.22529) {
                X = (515533 - (le = 499861)) / ((oe = 234.22529) - 232.17587),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 231.54005 & tmYer2021 < 232.17587) {
                X = (520249 - (le = 515533)) / ((oe = 232.17587) - 231.54005),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 221.69931 & tmYer2021 < 231.54005) {
                X = (568417 - (le = 520249)) / ((oe = 231.54005) - 221.69931),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 220 & tmYer2021 < 221.69931) {
                X = (572035 - (le = 568417)) / ((oe = 221.69931) - 220),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 200 & tmYer2021 < 220) {
                X = (587451 - (le = 572035)) / ((oe = 220) - 200),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            } else if (tmYer2021 >= 180 & tmYer2021 < 200) {
                X = (587678 - (le = 587451)) / ((oe = 200) - 180),
                W = oe - tmYer2021,
                eayers2021 = le + X * W,
                eayers2021 = eayers2021.toFixed(0)
            }
            if (dilYer2021 >= 559)
                dilyers2021 = 1,
                dilyers2021 = dilyers2021.toFixed(0);
            else if (dilYer2021 >= 545.76833 & dilYer2021 < 553.17611) {
                X = (13 - (le = 3)) / ((oe = 553.17611) - 545.76833),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 542.8497 & dilYer2021 < 545.76833) {
                X = (24 - (le = 13)) / ((oe = 545.76833) - 542.8497),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 540 & dilYer2021 < 542.8497) {
                X = (33 - (le = 24)) / ((oe = 542.8497) - 540),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 528.89674 & dilYer2021 < 540) {
                X = (91 - (le = 33)) / ((oe = 540) - 528.89674),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 524.34176 & dilYer2021 < 528.89674) {
                X = (145 - (le = 91)) / ((oe = 528.89674) - 524.34176),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 520 & dilYer2021 < 524.34176) {
                X = (205 - (le = 145)) / ((oe = 524.34176) - 520),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 517.66918 & dilYer2021 < 520) {
                X = (254 - (le = 205)) / ((oe = 520) - 517.66918),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 502.69289 & dilYer2021 < 517.66918) {
                X = (627 - (le = 254)) / ((oe = 517.66918) - 502.69289),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 500 & dilYer2021 < 502.69289) {
                X = (738 - (le = 627)) / ((oe = 502.69289) - 500),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 495.3276 & dilYer2021 < 500) {
                X = (917 - (le = 738)) / ((oe = 500) - 495.3276),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 494.67336 & dilYer2021 < 495.3276) {
                X = (938 - (le = 917)) / ((oe = 495.3276) - 494.67336),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 489.50563 & dilYer2021 < 494.67336) {
                X = (1163 - (le = 938)) / ((oe = 494.67336) - 489.50563),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 488.702 & dilYer2021 < 489.50563) {
                X = (1201 - (le = 1163)) / ((oe = 489.50563) - 488.702),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 485.18564 & dilYer2021 < 488.702) {
                X = (1360 - (le = 1201)) / ((oe = 488.702) - 485.18564),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 480 & dilYer2021 < 485.18564) {
                X = (1643 - (le = 1360)) / ((oe = 485.18564) - 480),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 473.47676 & dilYer2021 < 480) {
                X = (2004 - (le = 1643)) / ((oe = 480) - 473.47676),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 471.50868 & dilYer2021 < 473.47676) {
                X = (2119 - (le = 2004)) / ((oe = 473.47676) - 471.50868),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 460 & dilYer2021 < 471.50868) {
                X = (3020 - (le = 2119)) / ((oe = 471.50868) - 460),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 456.50239 & dilYer2021 < 460) {
                X = (3341 - (le = 3020)) / ((oe = 460) - 456.50239),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 440 & dilYer2021 < 456.50239) {
                X = (5153 - (le = 3341)) / ((oe = 456.50239) - 440),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 439.02215 & dilYer2021 < 440) {
                X = (5281 - (le = 5153)) / ((oe = 440) - 439.02215),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 432.92184 & dilYer2021 < 439.02215) {
                X = (6063 - (le = 5281)) / ((oe = 439.02215) - 432.92184),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 425.18424 & dilYer2021 < 432.92184) {
                X = (7278 - (le = 6063)) / ((oe = 432.92184) - 425.18424),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 422.79831 & dilYer2021 < 425.18424) {
                X = (7687 - (le = 7278)) / ((oe = 425.18424) - 422.79831),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 420 & dilYer2021 < 422.79831) {
                X = (8213 - (le = 7687)) / ((oe = 422.79831) - 420),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 408.35411 & dilYer2021 < 420) {
                X = (10606 - (le = 8213)) / ((oe = 420) - 408.35411),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 400.41919 & dilYer2021 < 408.35411) {
                X = (12445 - (le = 10606)) / ((oe = 408.35411) - 400.41919),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 400 & dilYer2021 < 400.41919) {
                X = (12538 - (le = 12445)) / ((oe = 400.41919) - 400),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 388.84865 & dilYer2021 < 400) {
                X = (15577 - (le = 12538)) / ((oe = 400) - 388.84865),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 380 & dilYer2021 < 388.84865) {
                X = (18121 - (le = 15577)) / ((oe = 388.84865) - 380),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 368.98923 & dilYer2021 < 380) {
                X = (21407 - (le = 18121)) / ((oe = 380) - 368.98923),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 360 & dilYer2021 < 368.98923) {
                X = (24223 - (le = 21407)) / ((oe = 368.98923) - 360),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 359.66558 & dilYer2021 < 360) {
                X = (24332 - (le = 24223)) / ((oe = 360) - 359.66558),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 355.03926 & dilYer2021 < 359.66558) {
                X = (25821 - (le = 24332)) / ((oe = 359.66558) - 355.03926),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 350.30344 & dilYer2021 < 355.03926) {
                X = (27326 - (le = 25821)) / ((oe = 355.03926) - 350.30344),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 347.77012 & dilYer2021 < 350.30344) {
                X = (28148 - (le = 27326)) / ((oe = 350.30344) - 347.77012),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 342.19084 & dilYer2021 < 347.77012) {
                X = (29959 - (le = 28148)) / ((oe = 347.77012) - 342.19084),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 342.0465 & dilYer2021 < 342.19084) {
                X = (30007 - (le = 29959)) / ((oe = 342.19084) - 342.0465),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 340 & dilYer2021 < 342.0465) {
                X = (30633 - (le = 30007)) / ((oe = 342.0465) - 340),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 320 & dilYer2021 < 340) {
                X = (37046 - (le = 30633)) / ((oe = 340) - 320),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 316.18956 & dilYer2021 < 320) {
                X = (38304 - (le = 37046)) / ((oe = 320) - 316.18956),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 310.73607 & dilYer2021 < 316.18956) {
                X = (40024 - (le = 38304)) / ((oe = 316.18956) - 310.73607),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 309.81957 & dilYer2021 < 310.73607) {
                X = (40325 - (le = 40024)) / ((oe = 310.73607) - 309.81957),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 300 & dilYer2021 < 309.81957) {
                X = (43426 - (le = 40325)) / ((oe = 309.81957) - 300),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 296.72749 & dilYer2021 < 300) {
                X = (44511 - (le = 43426)) / ((oe = 300) - 296.72749),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 286.18607 & dilYer2021 < 296.72749) {
                X = (47939 - (le = 44511)) / ((oe = 296.72749) - 286.18607),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 280 & dilYer2021 < 286.18607) {
                X = (49981 - (le = 47939)) / ((oe = 286.18607) - 280),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 272.65396 & dilYer2021 < 280) {
                X = (52584 - (le = 49981)) / ((oe = 280) - 272.65396),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 260 & dilYer2021 < 272.65396) {
                X = (57048 - (le = 52584)) / ((oe = 272.65396) - 260),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 242.16165 & dilYer2021 < 260) {
                X = (63701 - (le = 57048)) / ((oe = 260) - 242.16165),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 240 & dilYer2021 < 242.16165) {
                X = (64533 - (le = 63701)) / ((oe = 242.16165) - 240),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 237.45097 & dilYer2021 < 240) {
                X = (65445 - (le = 64533)) / ((oe = 240) - 237.45097),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 220 & dilYer2021 < 237.45097) {
                X = (70162 - (le = 65445)) / ((oe = 237.45097) - 220),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 200 & dilYer2021 < 220) {
                X = (70836 - (le = 70162)) / ((oe = 220) - 200),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            } else if (dilYer2021 >= 180 & dilYer2021 < 200) {
                X = (70842 - (le = 70836)) / ((oe = 200) - 180),
                W = oe - dilYer2021,
                dilyers2021 = le + X * W,
                dilyers2021 = dilyers2021.toFixed(0)
            }
            if (tytYer2020 > 560.00001 & tytYer2020 < 600)
                se = (se = 1).toFixed(0);
            else if (tytYer2020 > 559.4435 & tytYer2020 < 560.00001) {
                se = (se = (le = 1) + (X = (3 - le) / ((oe = 560.00001) - 559.4435)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 555.57958 & tytYer2020 < 559.4435) {
                se = (se = (le = 3) + (X = (9 - le) / ((oe = 559.4435) - 555.57958)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 546.22185 & tytYer2020 < 555.57958) {
                se = (se = (le = 9) + (X = (99 - le) / ((oe = 555.57958) - 546.22185)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 544.72677 & tytYer2020 < 546.22185) {
                se = (se = (le = 99) + (X = (137 - le) / ((oe = 546.22185) - 544.72677)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 540.82625 & tytYer2020 < 544.72677) {
                se = (se = (le = 137) + (X = (299 - le) / ((oe = 544.72677) - 540.82625)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 537.09087 & tytYer2020 < 540.82625) {
                se = (se = (le = 299) + (X = (499 - le) / ((oe = 540.82625) - 537.09087)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 532.1434 & tytYer2020 < 537.09087) {
                se = (se = (le = 499) + (X = (888 - le) / ((oe = 537.09087) - 532.1434)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 529.48506 & tytYer2020 < 532.1434) {
                se = (se = (le = 888) + (X = (1136 - le) / ((oe = 532.1434) - 529.48506)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 522.79055 & tytYer2020 < 529.48506) {
                se = (se = (le = 1136) + (X = (2081 - le) / ((oe = 529.48506) - 522.79055)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 517.77085 & tytYer2020 < 522.79055) {
                se = (se = (le = 2081) + (X = (3002 - le) / ((oe = 522.79055) - 517.77085)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 512.27065 & tytYer2020 < 517.77085) {
                se = (se = (le = 3002) + (X = (4310 - le) / ((oe = 517.77085) - 512.27065)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 508.31167 & tytYer2020 < 512.27065) {
                se = (se = (le = 4310) + (X = (5439 - le) / ((oe = 512.27065) - 508.31167)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 506.16112 & tytYer2020 < 508.31167) {
                se = (se = (le = 5439) + (X = (6152 - le) / ((oe = 508.31167) - 506.16112)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 499.31464 & tytYer2020 < 506.16112) {
                se = (se = (le = 6152) + (X = (8908 - le) / ((oe = 506.16112) - 499.31464)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 495.15403 & tytYer2020 < 499.31464) {
                se = (se = (le = 8908) + (X = (10852 - le) / ((oe = 499.31464) - 495.15403)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 491.24063 & tytYer2020 < 495.15403) {
                se = (se = (le = 10852) + (X = (12820 - le) / ((oe = 495.15403) - 491.24063)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 487.25234 & tytYer2020 < 491.24063) {
                se = (se = (le = 15025) + (X = (17730 - le) / ((oe = 491.24063) - 487.25234)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 484.17003 & tytYer2020 < 487.25234) {
                se = (se = (le = 12820) + (X = (16862 - le) / ((oe = 487.25234) - 484.17003)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 482.88702 & tytYer2020 < 484.17003) {
                se = (se = (le = 16862) + (X = (17704 - le) / ((oe = 484.17003) - 482.88702)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 478.13478 & tytYer2020 < 482.88702) {
                se = (se = (le = 17704) + (X = (20828 - le) / ((oe = 482.88702) - 478.13478)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 477.21724 & tytYer2020 < 478.13478) {
                se = (se = (le = 20828) + (X = (21512 - le) / ((oe = 478.13478) - 477.21724)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 475.37628 & tytYer2020 < 477.21724) {
                se = (se = (le = 21512) + (X = (22901 - le) / ((oe = 477.21724) - 475.37628)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 473.0428 & tytYer2020 < 475.37628) {
                se = (se = (le = 22901) + (X = (24661 - le) / ((oe = 475.37628) - 473.0428)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 471.84566 & tytYer2020 < 473.0428) {
                se = (se = (le = 24661) + (X = (25535 - le) / ((oe = 473.0428) - 471.84566)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 470.67625 & tytYer2020 < 471.84566) {
                se = (se = (le = 25535) + (X = (26436 - le) / ((oe = 471.84566) - 470.67625)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 468.75129 & tytYer2020 < 470.67625) {
                se = (se = (le = 26436) + (X = (28013 - le) / ((oe = 470.67625) - 468.75129)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 465.10054 & tytYer2020 < 468.75129) {
                se = (se = (le = 28013) + (X = (31177 - le) / ((oe = 468.75129) - 465.10054)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 461.45725 & tytYer2020 < 465.10054) {
                se = (se = (le = 31177) + (X = (34514 - le) / ((oe = 465.10054) - 461.45725)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 450 & tytYer2020 < 461.45725) {
                se = (se = (le = 34514) + (X = (45824 - le) / ((oe = 461.45725) - 450)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 448.14199 & tytYer2020 < 450) {
                se = (se = (le = 45824) + (X = (47766 - le) / ((oe = 450) - 448.14199)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 444.99968 & tytYer2020 < 448.14199) {
                se = (se = (le = 47766) + (X = (51298 - le) / ((oe = 448.14199) - 444.99968)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 440.59778 & tytYer2020 < 444.99968) {
                se = (se = (le = 51298) + (X = (56493 - le) / ((oe = 444.99968) - 440.59778)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 439.25605 & tytYer2020 < 440.59778) {
                se = (se = (le = 56493) + (X = (58066 - le) / ((oe = 440.59778) - 439.25605)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 433.51894 & tytYer2020 < 439.25605) {
                se = (se = (le = 58066) + (X = (65134 - le) / ((oe = 439.25605) - 433.51894)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 430 & tytYer2020 < 433.51894) {
                se = (se = (le = 65134) + (X = (69646 - le) / ((oe = 433.51894) - 430)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 428.13236 & tytYer2020 < 430) {
                se = (se = (le = 69646) + (X = (72072 - le) / ((oe = 430) - 428.13236)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 424.91246 & tytYer2020 < 428.13236) {
                se = (se = (le = 72072) + (X = (76440 - le) / ((oe = 428.13236) - 424.91246)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 420.05641 & tytYer2020 < 424.91246) {
                se = (se = (le = 76440) + (X = (83410 - le) / ((oe = 424.91246) - 420.05641)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 418.36935 & tytYer2020 < 420.05641) {
                se = (se = (le = 83410) + (X = (85916 - le) / ((oe = 420.05641) - 418.36935)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 415.91596 & tytYer2020 < 418.36935) {
                se = (se = (le = 85916) + (X = (89539 - le) / ((oe = 418.36935) - 415.91596)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 414.01248 & tytYer2020 < 415.91596) {
                se = (se = (le = 89539) + (X = (92438 - le) / ((oe = 415.91596) - 414.01248)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 412.45399 & tytYer2020 < 414.01248) {
                se = (se = (le = 92438) + (X = (94883 - le) / ((oe = 414.01248) - 412.45399)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 410 & tytYer2020 < 412.45399) {
                se = (se = (le = 94883) + (X = (98777 - le) / ((oe = 412.45399) - 410)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 398.07789 & tytYer2020 < 410) {
                se = (se = (le = 98777) + (X = (119001 - le) / ((oe = 410) - 398.07789)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 394.42256 & tytYer2020 < 398.07789) {
                se = (se = (le = 119001) + (X = (125847 - le) / ((oe = 398.07789) - 394.42256)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 392.10842 & tytYer2020 < 394.42256) {
                se = (se = (le = 125847) + (X = (130359 - le) / ((oe = 394.42256) - 392.10842)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 390 & tytYer2020 < 392.10842) {
                se = (se = (le = 130359) + (X = (134509 - le) / ((oe = 392.10842) - 390)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 388.99705 & tytYer2020 < 390) {
                se = (se = (le = 134509) + (X = (136483 - le) / ((oe = 390) - 388.99705)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 384.19947 & tytYer2020 < 388.99705) {
                se = (se = (le = 136483) + (X = (146425 - le) / ((oe = 388.99705) - 384.19947)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 380.94567 & tytYer2020 < 384.19947) {
                se = (se = (le = 146425) + (X = (153630 - le) / ((oe = 384.19947) - 380.94567)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 378.2531 & tytYer2020 < 380.94567) {
                se = (se = (le = 153630) + (X = (159645 - le) / ((oe = 380.94567) - 378.2531)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 376.27884 & tytYer2020 < 378.2531) {
                se = (se = (le = 159645) + (X = (164165 - le) / ((oe = 378.2531) - 376.27884)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 374.89077 & tytYer2020 < 376.27884) {
                se = (se = (le = 164165) + (X = (167497 - le) / ((oe = 376.27884) - 374.89077)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 366.98587 & tytYer2020 < 374.89077) {
                se = (se = (le = 167497) + (X = (187493 - le) / ((oe = 374.89077) - 366.98587)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 359.41804 & tytYer2020 < 366.98587) {
                se = (se = (le = 187493) + (X = (208318 - le) / ((oe = 366.98587) - 359.41804)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 350 & tytYer2020 < 359.41804) {
                se = (se = (le = 208318) + (X = (237601 - le) / ((oe = 359.41804) - 350)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 337.33744 & tytYer2020 < 350) {
                se = (se = (le = 237601) + (X = (282957 - le) / ((oe = 350) - 337.33744)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 331.6797 & tytYer2020 < 337.33744) {
                se = (se = (le = 282957) + (X = (305887 - le) / ((oe = 337.33744) - 331.6797)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 330 & tytYer2020 < 331.6797) {
                se = (se = (le = 305887) + (X = (313204 - le) / ((oe = 331.6797) - 330)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 313.33238 & tytYer2020 < 330) {
                se = (se = (le = 313204) + (X = (394673 - le) / ((oe = 330) - 313.33238)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 310 & tytYer2020 < 313.33238) {
                se = (se = (le = 394673) + (X = (413458 - le) / ((oe = 313.33238) - 310)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 297.76512 & tytYer2020 < 310) {
                se = (se = (le = 413458) + (X = (490787 - le) / ((oe = 310) - 297.76512)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 289.04439 & tytYer2020 < 297.76512) {
                se = (se = (le = 490787) + (X = (553971 - le) / ((oe = 297.76512) - 289.04439)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 270 & tytYer2020 < 289.04439) {
                se = (se = (le = 553971) + (X = (716747 - le) / ((oe = 289.04439) - 270)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 250 & tytYer2020 < 270) {
                se = (se = (le = 716747) + (X = (927745 - le) / ((oe = 270) - 250)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 244.0721 & tytYer2020 < 250) {
                se = (se = (le = 927745) + (X = (996714 - le) / ((oe = 250) - 244.0721)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 230 & tytYer2020 < 244.0721) {
                se = (se = (le = 996714) + (X = (1168283 - le) / ((oe = 244.0721) - 230)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 218.11441 & tytYer2020 < 230) {
                se = (se = (le = 1168283) + (X = (1325873 - le) / ((oe = 230) - 218.11441)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 210 & tytYer2020 < 218.11441) {
                se = (se = (le = 1325873) + (X = (1436803 - le) / ((oe = 218.11441) - 210)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 190 & tytYer2020 < 210) {
                se = (se = (le = 1436803) + (X = (1699953 - le) / ((oe = 210) - 190)) * (W = oe - tytYer2020)).toFixed(0)
            } else if (tytYer2020 > 180 & tytYer2020 < 190) {
                se = (se = (le = 1699953) + (X = (1744928 - le) / ((oe = 190) - 180)) * (W = oe - tytYer2020)).toFixed(0)
            }
            if (tytYer2019 > 556.14846 & tytYer2019 < 600)
                te = (te = 1).toFixed(0);
            else if (tytYer2019 > 545.27109 & tytYer2019 < 556.14846) {
                te = (te = (le = 2) + (X = (50 - le) / 20.37080000000003) * (W = (oe = 556.14846) - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 535.30277 & tytYer2019 < 545.27109) {
                te = (te = (le = 50) + (X = (251 - le) / ((oe = 545.27109) - 535.30277)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 522.4861 & tytYer2019 < 535.30277) {
                te = (te = (le = 251) + (X = (1082 - le) / ((oe = 535.30277) - 522.4203)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 511.4203 & tytYer2019 < 522.4861) {
                te = (te = (le = 1082) + (X = (2656 - le) / ((oe = 522.4861) - 511.4203)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 502.16788 & tytYer2019 < 511.4203) {
                te = (te = (le = 2656) + (X = (4539 - le) / ((oe = 511.4203) - 502.16788)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 497.00356 & tytYer2019 < 502.16788) {
                te = (te = (le = 4539) + (X = (5933 - le) / ((oe = 502.16788) - 497.00356)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 494.04998 & tytYer2019 < 497.00356) {
                te = (te = (le = 4539) + (X = (6867 - le) / ((oe = 497.00356) - 494.04998)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 493.63511 & tytYer2019 < 494.04998) {
                te = (te = (le = 6867) + (X = (7007 - le) / ((oe = 494.04998) - 493.63511)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 487.80042 & tytYer2019 < 493.63511) {
                te = (te = (le = 7007) + (X = (9023 - le) / ((oe = 493.63511) - 487.80042)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 478.59704 & tytYer2019 < 487.80042) {
                te = (te = (le = 9023) + (X = (12897 - le) / ((oe = 487.80042) - 478.59704)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 472.77279 & tytYer2019 < 478.59704) {
                te = (te = (le = 12897) + (X = (15822 - le) / ((oe = 478.59704) - 472.77279)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 464.64175 & tytYer2019 < 472.77279) {
                te = (te = (le = 15822) + (X = (20604 - le) / ((oe = 478.59704) - 464.64175)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 460.23432 & tytYer2019 < 464.64175) {
                te = (te = (le = 20604) + (X = (23432 - le) / ((oe = 464.64172) - 460.23432)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 452.89622 & tytYer2019 < 460.23432) {
                te = (te = (le = 23432) + (X = (28904 - le) / ((oe = 460.23432) - 452.89622)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 442.90402 & tytYer2019 < 452.89622) {
                te = (te = (le = 28904) + (X = (37314 - le) / ((oe = 452.89622) - 442.90402)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 438.43587 & tytYer2019 < 442.90402) {
                te = (te = (le = 37314) + (X = (41402 - le) / ((oe = 442.90402) - 438.43587)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 432.47517 & tytYer2019 < 438.43587) {
                te = (te = (le = 41402) + (X = (47517 - le) / ((oe = 438.43587) - 432.47517)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 429.25876 & tytYer2019 < 432.47517) {
                te = (te = (le = 47517) + (X = (50670 - le) / ((oe = 432.47517) - 429.25876)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 420.25944 & tytYer2019 < 429.25876) {
                te = (te = (le = 50670) + (X = (60803 - le) / ((oe = 429.25876) - 420.25944)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 409.8051 & tytYer2019 < 420.25944) {
                te = (te = (le = 60803) + (X = (73772 - le) / ((oe = 429.25944) - 409.8051)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 396.31863 & tytYer2019 < 409.8051) {
                te = (te = (le = 73772) + (X = (93030 - le) / ((oe = 409.8051) - 396.31863)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 393.51847 & tytYer2019 < 396.31863) {
                te = (te = (le = 99264) + (X = (96447 - le) / ((oe = 396.31863) - 393.51847)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 371.03494 & tytYer2019 < 393.51847) {
                te = (te = (le = 99264) + (X = (138855 - le) / ((oe = 393.51847) - 371.03494)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 370.52057 & tytYer2019 < 371.03494) {
                te = (te = (le = 138855) + (X = (139972 - le) / ((oe = 371.03494) - 370.52057)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 367.72826 & tytYer2019 < 370.52057) {
                te = (te = (le = 139972) + (X = (145929 - le) / ((oe = 370.52057) - 367.72826)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 355.16029 & tytYer2019 < 367.72826) {
                te = (te = (le = 145929) + (X = (176282 - le) / ((oe = 367.72826) - 355.16029)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 307.10853 & tytYer2019 < 355.16029) {
                te = (te = (le = 176282) + (X = (366097 - le) / ((oe = 355.16029) - 307.10853)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 301.45172 & tytYer2019 < 307.10853) {
                te = (te = (le = 366097) + (X = (399492 - le) / ((oe = 307.10853) - 301.45172)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 281.86197 & tytYer2019 < 301.45172) {
                te = (te = (le = 399492) + (X = (542443 - le) / ((oe = 301.45172) - 281.86197)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 279.75353 & tytYer2019 < 281.86197) {
                te = (te = (le = 542443) + (X = (593279 - le) / ((oe = 281.86197) - 276.75353)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 259.1274 & tytYer2019 < 279.75353) {
                te = (te = (le = 593279) + (X = (768052 - le) / ((oe = 276.75353) - 259.1274)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 252.96406 & tytYer2019 < 259.1274) {
                te = (te = (le = 768052) + (X = (841899 - le) / ((oe = 259.1274) - 252.96406)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 241.88445 & tytYer2019 < 252.96406) {
                te = (te = (le = 841899) + (X = (982824 - le) / ((oe = 252.96406) - 241.88445)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 239.39141 & tytYer2019 < 241.88445) {
                te = (te = (le = 982824) + (X = (1014555 - le) / ((oe = 241.88445) - 239.141)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 230.38877 & tytYer2019 < 239.39141) {
                te = (te = (le = 1014555) + (X = (1132809 - le) / ((oe = 239.39141) - 230.38877)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 224.2591 & tytYer2019 < 230.38877) {
                te = (te = (le = 1132809) + (X = (1219378 - le) / ((oe = 230.38877) - 224.2591)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 220.529 & tytYer2019 < 224.2591) {
                te = (te = (le = 1219378) + (X = (1272713 - le) / ((oe = 224.2591) - 220.529)) * (W = oe - tytYer2019)).toFixed(0)
            } else if (tytYer2019 > 180 & tytYer2019 < 220.529) {
                te = (te = (le = 1733423) + (X = (1934234 - le) / ((oe = 220.529) - 180)) * (W = oe - tytYer2019)).toFixed(0)
            }
            if (mfYer2020 > 560.00001 & mfYer2020 < 600)
                Z = (Z = 1).toFixed(0);
            else if (mfYer2020 > 556.28553 & mfYer2020 < 560.00001) {
                Z = (Z = (le = 1) + (X = (17 - le) / ((oe = 560.00001) - 556.28553)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 551.51409 & mfYer2020 < 556.28553) {
                Z = (Z = (le = 17) + (X = (99 - le) / ((oe = 556.28553) - 551.51409)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 550 & mfYer2020 < 551.51409) {
                Z = (Z = (le = 99) + (X = (150 - le) / ((oe = 551.51409) - 550)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 548.28377 & mfYer2020 < 550) {
                Z = (Z = (le = 150) + (X = (227 - le) / ((oe = 550) - 548.28377)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 546.06492 & mfYer2020 < 548.28377) {
                Z = (Z = (le = 227) + (X = (357 - le) / ((oe = 548.28377) - 546.06492)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 544.24857 & mfYer2020 < 546.06492) {
                Z = (Z = (le = 357) + (X = (501 - le) / ((oe = 546.06492) - 544.24857)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 541.99728 & mfYer2020 < 544.24857) {
                Z = (Z = (le = 501) + (X = (737 - le) / ((oe = 544.24857) - 541.99728)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 536.77857 & mfYer2020 < 541.99728) {
                Z = (Z = (le = 737) + (X = (1446 - le) / ((oe = 541.99728) - 536.77857)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 530.59518 & mfYer2020 < 536.77857) {
                Z = (Z = (le = 1446) + (X = (2687 - le) / ((oe = 536.77857) - 530.59518)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 528.4139 & mfYer2020 < 530.59518) {
                Z = (Z = (le = 2687) + (X = (3227 - le) / ((oe = 530.59518) - 528.4139)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 527.17738 & mfYer2020 < 528.4139) {
                Z = (Z = (le = 3227) + (X = (3522 - le) / ((oe = 528.4139) - 527.17738)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 525.26638 & mfYer2020 < 527.17738) {
                Z = (Z = (le = 3522) + (X = (4063 - le) / ((oe = 527.17738) - 525.26638)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 519.93905 & mfYer2020 < 525.26638) {
                Z = (Z = (le = 4063) + (X = (5736 - le) / ((oe = 525.26638) - 519.93905)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 517.39014 & mfYer2020 < 519.93905) {
                Z = (Z = (le = 5736) + (X = (6708 - le) / ((oe = 519.93905) - 517.39014)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 513.41574 & mfYer2020 < 517.39014) {
                Z = (Z = (le = 6708) + (X = (8410 - le) / ((oe = 517.39014) - 513.41574)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 512.1575 & mfYer2020 < 513.41574) {
                Z = (Z = (le = 8410) + (X = (8955 - le) / ((oe = 513.41574) - 512.1575)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 509.28517 & mfYer2020 < 512.1575) {
                Z = (Z = (le = 8955) + (X = (10381 - le) / ((oe = 512.1575) - 509.28517)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 503.52418 & mfYer2020 < 509.28517) {
                Z = (Z = (le = 10381) + (X = (13581 - le) / ((oe = 509.28517) - 503.52418)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 499.64851 & mfYer2020 < 503.52418) {
                Z = (Z = (le = 13581) + (X = (15925 - le) / ((oe = 503.52418) - 499.64851)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 497.55199 & mfYer2020 < 499.64851) {
                Z = (Z = (le = 15925) + (X = (17267 - le) / ((oe = 499.64851) - 497.55199)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 494.80404 & mfYer2020 < 497.55199) {
                Z = (Z = (le = 17267) + (X = (19080 - le) / ((oe = 497.55199) - 494.80404)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 492.55333 & mfYer2020 < 494.80404) {
                Z = (Z = (le = 19080) + (X = (20620 - le) / ((oe = 494.80404) - 492.55333)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 490 & mfYer2020 < 492.55333) {
                Z = (Z = (le = 20620) + (X = (22390 - le) / ((oe = 492.55333) - 490)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 486.25883 & mfYer2020 < 490) {
                Z = (Z = (le = 22390) + (X = (25082 - le) / ((oe = 490) - 486.25883)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 483.07543 & mfYer2020 < 486.25883) {
                Z = (Z = (le = 25082) + (X = (27462 - le) / ((oe = 486.25883) - 483.07543)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 476.48002 & mfYer2020 < 483.07543) {
                Z = (Z = (le = 27462) + (X = (32585 - le) / ((oe = 483.07543) - 476.48002)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 475.5996 & mfYer2020 < 476.48002) {
                Z = (Z = (le = 32585) + (X = (33276 - le) / ((oe = 476.48002) - 475.5996)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 473.74328 & mfYer2020 < 475.5996) {
                Z = (Z = (le = 33276) + (X = (34709 - le) / ((oe = 475.5996) - 473.74328)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 470 & mfYer2020 < 473.74328) {
                Z = (Z = (le = 34709) + (X = (37753 - le) / ((oe = 473.74328) - 470)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 467.43555 & mfYer2020 < 470) {
                Z = (Z = (le = 37753) + (X = (39779 - le) / ((oe = 470) - 467.43555)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 466.16794 & mfYer2020 < 467.43555) {
                Z = (Z = (le = 39779) + (X = (40791 - le) / ((oe = 467.43555) - 466.16794)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 461.41811 & mfYer2020 < 466.16794) {
                Z = (Z = (le = 40791) + (X = (44747 - le) / ((oe = 466.16794) - 461.41811)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 459.03619 & mfYer2020 < 461.41811) {
                Z = (Z = (le = 44747) + (X = (46782 - le) / ((oe = 461.41811) - 459.03619)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 457.12459 & mfYer2020 < 459.03619) {
                Z = (Z = (le = 46782) + (X = (48372 - le) / ((oe = 459.03619) - 457.12459)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 454.22482 & mfYer2020 < 457.12459) {
                Z = (Z = (le = 48372) + (X = (50904 - le) / ((oe = 457.12459) - 454.22482)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 450 & mfYer2020 < 454.22482) {
                Z = (Z = (le = 50904) + (X = (54534 - le) / ((oe = 454.22482) - 450)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 446.21132 & mfYer2020 < 450) {
                Z = (Z = (le = 54534) + (X = (57861 - le) / ((oe = 450) - 446.21132)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 444.9478 & mfYer2020 < 446.21132) {
                Z = (Z = (le = 57861) + (X = (58979 - le) / ((oe = 446.21132) - 444.9478)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 438.32331 & mfYer2020 < 444.9478) {
                Z = (Z = (le = 58979) + (X = (64788 - le) / ((oe = 444.9478) - 438.32331)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 434.91132 & mfYer2020 < 438.32331) {
                Z = (Z = (le = 64788) + (X = (67750 - le) / ((oe = 438.32331) - 434.91132)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 430 & mfYer2020 < 434.91132) {
                Z = (Z = (le = 67750) + (X = (72022 - le) / ((oe = 434.91132) - 430)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 423.48177 & mfYer2020 < 430) {
                Z = (Z = (le = 72022) + (X = (77694 - le) / ((oe = 430) - 423.48177)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 416.07297 & mfYer2020 < 423.48177) {
                Z = (Z = (le = 77694) + (X = (84448 - le) / ((oe = 423.48177) - 416.07297)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 410 & mfYer2020 < 416.07297) {
                Z = (Z = (le = 84448) + (X = (90140 - le) / ((oe = 416.07297) - 410)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 402.16133 & mfYer2020 < 410) {
                Z = (Z = (le = 90140) + (X = (97628 - le) / ((oe = 410) - 402.16133)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 398.19806 & mfYer2020 < 402.16133) {
                Z = (Z = (le = 97628) + (X = (101445 - le) / ((oe = 402.16133) - 398.19806)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 393.27306 & mfYer2020 < 398.19806) {
                Z = (Z = (le = 101445) + (X = (106393 - le) / ((oe = 398.19806) - 393.27306)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 390 & mfYer2020 < 393.27306) {
                Z = (Z = (le = 106393) + (X = (109784 - le) / ((oe = 393.27306) - 390)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 388.41724 & mfYer2020 < 390) {
                Z = (Z = (le = 109784) + (X = (111461 - le) / ((oe = 390) - 388.41724)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 380.48362 & mfYer2020 < 388.41724) {
                Z = (Z = (le = 111461) + (X = (120125 - le) / ((oe = 388.41724) - 380.48362)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 376.69348 & mfYer2020 < 380.48362) {
                Z = (Z = (le = 120125) + (X = (124463 - le) / ((oe = 380.48362) - 376.69348)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 370 & mfYer2020 < 376.69348) {
                Z = (Z = (le = 124463) + (X = (132428 - le) / ((oe = 376.69348) - 370)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 363.62934 & mfYer2020 < 370) {
                Z = (Z = (le = 132428) + (X = (140436 - le) / ((oe = 370) - 363.62934)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 359.14914 & mfYer2020 < 363.62934) {
                Z = (Z = (le = 140436) + (X = (146343 - le) / ((oe = 363.62934) - 359.14914)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 357.32949 & mfYer2020 < 359.14914) {
                Z = (Z = (le = 146343) + (X = (148705 - le) / ((oe = 359.14914) - 357.32949)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 353.51785 & mfYer2020 < 357.32949) {
                Z = (Z = (le = 148705) + (X = (153977 - le) / ((oe = 357.32949) - 353.51785)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 352.34087 & mfYer2020 < 353.51785) {
                Z = (Z = (le = 153977) + (X = (155642 - le) / ((oe = 353.51785) - 352.34087)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 350 & mfYer2020 < 352.34087) {
                Z = (Z = (le = 155642) + (X = (158867 - le) / ((oe = 352.34087) - 350)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 346.26755 & mfYer2020 < 350) {
                Z = (Z = (le = 158867) + (X = (164428 - le) / ((oe = 350) - 346.26755)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 344.24256 & mfYer2020 < 346.26755) {
                Z = (Z = (le = 164428) + (X = (167505 - le) / ((oe = 346.26755) - 344.24256)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 340.45629 & mfYer2020 < 344.24256) {
                Z = (Z = (le = 167505) + (X = (173498 - le) / ((oe = 344.24256) - 340.45629)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 338.27685 & mfYer2020 < 340.45629) {
                Z = (Z = (le = 173498) + (X = (176997 - le) / ((oe = 340.45629) - 338.27685)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 332.85232 & mfYer2020 < 338.27685) {
                Z = (Z = (le = 176997) + (X = (186191 - le) / ((oe = 338.27685) - 332.85232)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 330 & mfYer2020 < 332.85232) {
                Z = (Z = (le = 186191) + (X = (191150 - le) / ((oe = 332.85232) - 330)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 310 & mfYer2020 < 330) {
                Z = (Z = (le = 191150) + (X = (230935 - le) / ((oe = 330) - 310)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 303.05476 & mfYer2020 < 310) {
                Z = (Z = (le = 230935) + (X = (246986 - le) / ((oe = 310) - 303.05476)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 297.78909 & mfYer2020 < 303.05476) {
                Z = (Z = (le = 246986) + (X = (260011 - le) / ((oe = 303.05476) - 297.78909)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 294.51586 & mfYer2020 < 297.78909) {
                Z = (Z = (le = 260011) + (X = (268496 - le) / ((oe = 297.78909) - 294.51586)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 290 & mfYer2020 < 294.51586) {
                Z = (Z = (le = 268496) + (X = (280599 - le) / ((oe = 294.51586) - 290)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 285.70125 & mfYer2020 < 290) {
                Z = (Z = (le = 280599) + (X = (292755 - le) / ((oe = 290) - 285.70125)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 283.0376 & mfYer2020 < 285.70125) {
                Z = (Z = (le = 292755) + (X = (300533 - le) / ((oe = 285.70125) - 283.0376)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 280.31527 & mfYer2020 < 283.0376) {
                Z = (Z = (le = 300533) + (X = (308760 - le) / ((oe = 283.0376) - 280.31527)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 270 & mfYer2020 < 280.31527) {
                Z = (Z = (le = 308760) + (X = (342911 - le) / ((oe = 280.31527) - 270)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 258.50343 & mfYer2020 < 270) {
                Z = (Z = (le = 342911) + (X = (387417 - le) / ((oe = 270) - 258.50343)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 250 & mfYer2020 < 258.50343) {
                Z = (Z = (le = 387417) + (X = (425444 - le) / ((oe = 258.50343) - 250)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 239.78654 & mfYer2020 < 250) {
                Z = (Z = (le = 425444) + (X = (478200 - le) / ((oe = 250) - 239.78654)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 230 & mfYer2020 < 239.78654) {
                Z = (Z = (le = 478200) + (X = (538156 - le) / ((oe = 239.78654) - 230)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 223.76001 & mfYer2020 < 230) {
                Z = (Z = (le = 538156) + (X = (586635 - le) / ((oe = 230) - 223.76001)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 218.73076 & mfYer2020 < 223.76001) {
                Z = (Z = (le = 586635) + (X = (628423 - le) / ((oe = 223.76001) - 218.73076)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 210 & mfYer2020 < 218.73076) {
                Z = (Z = (le = 628423) + (X = (674050 - le) / ((oe = 218.73076) - 210)) * (W = oe - mfYer2020)).toFixed(0)
            } else if (mfYer2020 > 200 & mfYer2020 < 210) {
                Z = (Z = (le = 674050) + (X = (685546 - le) / ((oe = 210) - 200)) * (W = oe - mfYer2020)).toFixed(0)
            }
            if (V > 559.934 & V < 600)
                $ = ($ = 1).toFixed(0);
            else if (V > 550.83514 & V < 559.934)
                $ = ($ = 1 + (X = 2.6376930736378124) * (W = 559.934 - V)).toFixed(0);
            else if (V > 547.81278 & V < 550.83514)
                $ = ($ = 25 + (X = 15.219894387167399) * (W = 550.83514 - V)).toFixed(0);
            else if (V > 543.80851 & V < 547.81278)
                $ = ($ = 71 + (X = 31.46640960774358) * (W = 547.81278 - V)).toFixed(0);
            else if (V > 537.70034 & V < 543.80851)
                $ = ($ = 197 + (X = 41.092503974185576) * (W = 543.80851 - V)).toFixed(0);
            else if (V > 530.92905 & V < 537.70034)
                $ = ($ = 514 + (X = 75.4656793609487) * (W = 537.70034 - V)).toFixed(0);
            else if (V > 526.63471 & V < 530.92905)
                $ = ($ = 1025 + (X = 106.88487637215697) * (W = 530.92905 - V)).toFixed(0);
            else if (V > 515.03966 & V < 526.63471)
                $ = ($ = 1484 + (X = 158.86089322598846) * (W = 526.63471 - V)).toFixed(0);
            else if (V > 511.04298 & V < 515.03966)
                $ = ($ = 3326 + (X = 212.92672918522234) * (W = 515.03966 - V)).toFixed(0);
            else if (V > 507.56857 & V < 511.04298)
                $ = ($ = 4177 + (X = 228.8158277232696) * (W = 511.04298 - V)).toFixed(0);
            else if (V > 501.67071 & V < 507.56857) {
                $ = ($ = 4972 + (X = 1542 / ((oe = 507.56857) - 501.67071)) * (W = oe - V)).toFixed(0)
            } else if (V > 500.18324 & V < 501.67071) {
                $ = ($ = 6514 + (X = 405 / ((oe = 501.67071) - 500.18324)) * (W = oe - V)).toFixed(0)
            } else if (V > 492.58308 & V < 500.18324) {
                $ = ($ = 6919 + (X = 2427 / ((oe = 500.18324) - 492.58308)) * (W = oe - V)).toFixed(0)
            } else if (V > 487.92264 & V < 492.58308) {
                $ = ($ = 9346 + (X = 1738 / ((oe = 492.58308) - 487.92264)) * (W = oe - V)).toFixed(0)
            } else if (V > 476.13973 & V < 487.92264) {
                $ = ($ = 11084 + (X = 4997 / ((oe = 487.92264) - 476.13973)) * (W = oe - V)).toFixed(0)
            } else if (V > 467.49158 & V < 476.13973) {
                $ = ($ = 16081 + (X = 4229 / ((oe = 476.13973) - 467.49158)) * (W = oe - V)).toFixed(0)
            } else if (V > 459.96205 & V < 467.49158) {
                $ = ($ = 20320 + (X = 4147 / ((oe = 467.49158) - 459.96205)) * (W = oe - V)).toFixed(0)
            } else if (V > 454.28779 & V < 459.96205) {
                $ = ($ = 24467 + (X = 3228 / ((oe = 459.96205) - 454.28779)) * (W = oe - V)).toFixed(0)
            } else if (V > 444.93672 & V < 454.28779) {
                $ = ($ = 27695 + (X = 5635 / ((oe = 454.28779) - 444.93672)) * (W = oe - V)).toFixed(0)
            } else if (V > 434.20065 & V < 444.93672) {
                $ = ($ = 33300 + (X = 6804 / ((oe = 444.93672) - 434.20065)) * (W = oe - V)).toFixed(0)
            } else if (V > 409.0234 & V < 434.20065) {
                $ = ($ = 40104 + (X = 17758 / ((oe = 434.20065) - 409.0234)) * (W = oe - V)).toFixed(0)
            } else if (V > 404.39954 & V < 409.0234) {
                $ = ($ = 57862 + (X = 3458 / ((oe = 409.0234) - 404.39954)) * (W = oe - V)).toFixed(0)
            } else if (V > 385.15914 & V < 404.39954) {
                $ = ($ = 61320 + (X = 15528 / ((oe = 404.39954) - 385.15914)) * (W = oe - V)).toFixed(0)
            } else if (V > 378.84699 & V < 385.15914) {
                $ = ($ = 76848 + (X = 5806 / ((oe = 385.15914) - 378.84699)) * (W = oe - V)).toFixed(0)
            } else if (V > 359.1592 & V < 378.84699) {
                $ = ($ = 82654 + (X = 18723 / ((oe = 378.84699) - 359.1592)) * (W = oe - V)).toFixed(0)
            } else if (V > 336.29841 & V < 359.1592) {
                $ = ($ = 101377 + (X = 26923 / ((oe = 359.1592) - 336.29841)) * (W = oe - V)).toFixed(0)
            } else if (V > 327.19805 & V < 336.29841) {
                $ = ($ = 128300 + (X = 12715 / ((oe = 336.29841) - 327.19805)) * (W = oe - V)).toFixed(0)
            } else if (V > 323.51022 & V < 327.19805) {
                $ = ($ = 141015 + (X = 5611 / ((oe = 327.19805) - 323.51022)) * (W = oe - V)).toFixed(0)
            } else if (V > 304.83377 & V < 323.51022) {
                $ = ($ = 146626 + (X = 32414 / ((oe = 323.51022) - 304.83377)) * (W = oe - V)).toFixed(0)
            } else if (V > 271.08959 & V < 304.83377) {
                $ = ($ = 179040 + (X = 85040 / ((oe = 304.83377) - 271.08959)) * (W = oe - V)).toFixed(0)
            } else if (V > 257.08959 & V < 271.03584) {
                $ = ($ = 264080 + (X = 49466 / ((oe = 271.03584) - 257.08959)) * (W = oe - V)).toFixed(0)
            } else if (V > 234.01673 & V < 257.08959) {
                $ = ($ = 313546 + (X = 110496 / ((oe = 257.08959) - 234.01673)) * (W = oe - V)).toFixed(0)
            } else if (V > 180 & V < 234.01673) {
                X = 424042 / ((oe = 234.01673) - 180),
                $ = ($ = 424042 + 4300 * (W = oe - V)).toFixed(0)
            }
            if (tmYer2020 > 559.8365 & tmYer2020 < 600)
                re = (re = 1).toFixed(0);
            else if (tmYer2020 > 550 & tmYer2020 < 559.8365) {
                re = (re = (le = 1) + (X = (8 - le) / ((oe = 559.8365) - 550)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 530 & tmYer2020 < 550) {
                re = (re = (le = 8) + (X = (102 - le) / ((oe = 550) - 530)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 522.51773 & tmYer2020 < 530) {
                re = (re = (le = 102) + (X = (205 - le) / ((oe = 530) - 522.51773)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 519.38327 & tmYer2020 < 522.51773) {
                re = (re = (le = 205) + (X = (261 - le) / ((oe = 522.51773) - 519.38327)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 515.59993 & tmYer2020 < 519.38327) {
                re = (re = (le = 261) + (X = (345 - le) / ((oe = 519.38327) - 515.59993)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 512.28193 & tmYer2020 < 515.59993) {
                re = (re = (le = 345) + (X = (434 - le) / ((oe = 515.59993) - 512.28193)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 510 & tmYer2020 < 512.28193) {
                re = (re = (le = 434) + (X = (502 - le) / ((oe = 512.28193) - 510)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 503.95247 & tmYer2020 < 510) {
                re = (re = (le = 502) + (X = (672 - le) / ((oe = 510) - 503.95247)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 501.64402 & tmYer2020 < 503.95247) {
                re = (re = (le = 672) + (X = (748 - le) / ((oe = 503.95247) - 501.64402)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 497.73977 & tmYer2020 < 501.64402) {
                re = (re = (le = 748) + (X = (939 - le) / ((oe = 501.64402) - 497.73977)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 490 & tmYer2020 < 497.73977) {
                re = (re = (le = 939) + (X = (1332 - le) / ((oe = 497.73977) - 490)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 486.24255 & tmYer2020 < 490) {
                re = (re = (le = 1332) + (X = (1575 - le) / ((oe = 490) - 486.24255)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 480.06535 & tmYer2020 < 486.24255) {
                re = (re = (le = 1575) + (X = (2054 - le) / ((oe = 486.24255) - 480.06535)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 475.01757 & tmYer2020 < 480.06535) {
                re = (re = (le = 2054) + (X = (2544 - le) / ((oe = 480.06535) - 475.01757)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 471.3165 & tmYer2020 < 475.01757) {
                re = (re = (le = 2544) + (X = (2969 - le) / ((oe = 475.01757) - 471.3165)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 469.94051 & tmYer2020 < 471.3165) {
                re = (re = (le = 2969) + (X = (3129 - le) / ((oe = 471.3165) - 469.94051)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 461.98458 & tmYer2020 < 469.94051) {
                re = (re = (le = 3129) + (X = (4173 - le) / ((oe = 469.94051) - 461.98458)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 454.69596 & tmYer2020 < 461.98458) {
                re = (re = (le = 4173) + (X = (5401 - le) / ((oe = 461.98458) - 454.69596)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 452.89687 & tmYer2020 < 454.69596) {
                re = (re = (le = 5401) + (X = (5737 - le) / ((oe = 454.69596) - 452.89687)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 450 & tmYer2020 < 452.89687) {
                re = (re = (le = 5737) + (X = (6368 - le) / ((oe = 452.89687) - 450)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 446.07533 & tmYer2020 < 450) {
                re = (re = (le = 6368) + (X = (7284 - le) / ((oe = 450) - 446.07533)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 439.97859 & tmYer2020 < 446.07533) {
                re = (re = (le = 7284) + (X = (8883 - le) / ((oe = 446.07533) - 439.97859)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 430 & tmYer2020 < 439.97859) {
                re = (re = (le = 8883) + (X = (12290 - le) / ((oe = 439.97859) - 430)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 428.77197 & tmYer2020 < 430) {
                re = (re = (le = 12290) + (X = (12804 - le) / ((oe = 430) - 428.77197)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 427.0107 & tmYer2020 < 428.77197) {
                re = (re = (le = 12804) + (X = (13640 - le) / ((oe = 428.77197) - 427.0107)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 425.15756 & tmYer2020 < 427.0107) {
                re = (re = (le = 13640) + (X = (14511 - le) / ((oe = 427.0107) - 425.15756)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 421.66865 & tmYer2020 < 425.15756) {
                re = (re = (le = 14511) + (X = (16373 - le) / ((oe = 425.15756) - 421.66865)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 418.74022 & tmYer2020 < 421.66865) {
                re = (re = (le = 16373) + (X = (18127 - le) / ((oe = 421.66865) - 418.74022)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 417.31481 & tmYer2020 < 418.74022) {
                re = (re = (le = 18127) + (X = (19099 - le) / ((oe = 418.74022) - 417.31481)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 415.23517 & tmYer2020 < 417.31481) {
                re = (re = (le = 19099) + (X = (20645 - le) / ((oe = 417.31481) - 415.23517)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 413.22377 & tmYer2020 < 415.23517) {
                re = (re = (le = 20645) + (X = (22191 - le) / ((oe = 415.23517) - 413.22377)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 412.71027 & tmYer2020 < 413.22377) {
                re = (re = (le = 22191) + (X = (22650 - le) / ((oe = 413.22377) - 412.71027)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 410 & tmYer2020 < 412.71027) {
                re = (re = (le = 22650) + (X = (25140 - le) / ((oe = 412.71027) - 410)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 408.86293 & tmYer2020 < 410) {
                re = (re = (le = 25140) + (X = (26210 - le) / ((oe = 410) - 408.86293)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 407.87632 & tmYer2020 < 408.86293) {
                re = (re = (le = 26210) + (X = (27189 - le) / ((oe = 408.86293) - 407.87632)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 405.74426 & tmYer2020 < 407.87632) {
                re = (re = (le = 27189) + (X = (29407 - le) / ((oe = 407.87632) - 405.74426)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 403.85829 & tmYer2020 < 405.74426) {
                re = (re = (le = 29407) + (X = (31522 - le) / ((oe = 405.74426) - 403.85829)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 402.47507 & tmYer2020 < 403.85829) {
                re = (re = (le = 31522) + (X = (33171 - le) / ((oe = 403.85829) - 402.47507)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 401.33526 & tmYer2020 < 402.47507) {
                re = (re = (le = 33171) + (X = (34601 - le) / ((oe = 402.47507) - 401.33526)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 398.44626 & tmYer2020 < 401.33526) {
                re = (re = (le = 34601) + (X = (38348 - le) / ((oe = 401.33526) - 398.44626)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 394.52986 & tmYer2020 < 398.44626) {
                re = (re = (le = 38348) + (X = (43786 - le) / ((oe = 398.44626) - 394.52986)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 393.27186 & tmYer2020 < 394.52986) {
                re = (re = (le = 43786) + (X = (45676 - le) / ((oe = 394.52986) - 393.27186)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 392.80434 & tmYer2020 < 393.27186) {
                re = (re = (le = 45676) + (X = (46372 - le) / ((oe = 393.27186) - 392.80434)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 390 & tmYer2020 < 392.80434) {
                re = (re = (le = 46372) + (X = (50772 - le) / ((oe = 392.80434) - 390)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 387.65963 & tmYer2020 < 390) {
                re = (re = (le = 50772) + (X = (54620 - le) / ((oe = 390) - 387.65963)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 386.45408 & tmYer2020 < 387.65963) {
                re = (re = (le = 54620) + (X = (56736 - le) / ((oe = 387.65963) - 386.45408)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 386.05682 & tmYer2020 < 386.45408) {
                re = (re = (le = 56736) + (X = (57426 - le) / ((oe = 386.45408) - 386.05682)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 385.81771 & tmYer2020 < 386.05682) {
                re = (re = (le = 57426) + (X = (57865 - le) / ((oe = 386.05682) - 385.81771)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 384.92634 & tmYer2020 < 385.81771) {
                re = (re = (le = 57865) + (X = (59460 - le) / ((oe = 385.81771) - 384.92634)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 383.35734 & tmYer2020 < 384.92634) {
                re = (re = (le = 59460) + (X = (62188 - le) / ((oe = 384.92634) - 383.35734)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 381.72201 & tmYer2020 < 383.35734) {
                re = (re = (le = 62188) + (X = (65137 - le) / ((oe = 383.35734) - 381.72201)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 378.86667 & tmYer2020 < 381.72201) {
                re = (re = (le = 65137) + (X = (70408 - le) / ((oe = 381.72201) - 378.86667)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 377.97814 & tmYer2020 < 378.86667) {
                re = (re = (le = 70408) + (X = (72111 - le) / ((oe = 378.86667) - 377.97814)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 372.5317 & tmYer2020 < 377.97814) {
                re = (re = (le = 72111) + (X = (82841 - le) / ((oe = 377.97814) - 372.5317)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 369.86629 & tmYer2020 < 372.5317) {
                re = (re = (le = 82841) + (X = (88212 - le) / ((oe = 372.5317) - 369.86629)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 367.30476 & tmYer2020 < 369.86629) {
                re = (re = (le = 88212) + (X = (93493 - le) / ((oe = 369.86629) - 367.30476)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 360.97791 & tmYer2020 < 367.30476) {
                re = (re = (le = 93493) + (X = (107149 - le) / ((oe = 367.30476) - 360.97791)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 354.98069 & tmYer2020 < 360.97791) {
                re = (re = (le = 107149) + (X = (120835 - le) / ((oe = 360.97791) - 354.98069)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 353.69748 & tmYer2020 < 354.98069) {
                re = (re = (le = 120835) + (X = (123749 - le) / ((oe = 354.98069) - 353.69748)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 351.84526 & tmYer2020 < 353.69748) {
                re = (re = (le = 123749) + (X = (128142 - le) / ((oe = 353.69748) - 351.84526)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 350 & tmYer2020 < 351.84526) {
                re = (re = (le = 128142) + (X = (132507 - le) / ((oe = 351.84526) - 350)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 341.8064 & tmYer2020 < 350) {
                re = (re = (le = 132507) + (X = (153132 - le) / ((oe = 350) - 341.8064)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 339.80403 & tmYer2020 < 341.8064) {
                re = (re = (le = 153132) + (X = (158386 - le) / ((oe = 341.8064) - 339.80403)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 337.89382 & tmYer2020 < 339.80403) {
                re = (re = (le = 158386) + (X = (163514 - le) / ((oe = 339.80403) - 337.89382)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 335.48867 & tmYer2020 < 337.89382) {
                re = (re = (le = 163514) + (X = (170118 - le) / ((oe = 337.89382) - 335.48867)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 332.69584 & tmYer2020 < 335.48867) {
                re = (re = (le = 170118) + (X = (178068 - le) / ((oe = 335.48867) - 332.69584)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 331.81033 & tmYer2020 < 332.69584) {
                re = (re = (le = 178068) + (X = (180649 - le) / ((oe = 332.69584) - 331.81033)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 330 & tmYer2020 < 331.81033) {
                re = (re = (le = 180649) + (X = (185942 - le) / ((oe = 332.69584) - 330)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 327.31572 & tmYer2020 < 330) {
                re = (re = (le = 185942) + (X = (193996 - le) / ((oe = 330) - 327.31572)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 317.30272 & tmYer2020 < 327.31572) {
                re = (re = (le = 193996) + (X = (226176 - le) / ((oe = 327.31572) - 317.30272)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 314.59871 & tmYer2020 < 317.30272) {
                re = (re = (le = 226176) + (X = (235493 - le) / ((oe = 317.30272) - 314.59871)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 310 & tmYer2020 < 314.59871) {
                re = (re = (le = 235493) + (X = (252245 - le) / ((oe = 314.59871) - 310)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 303.02453 & tmYer2020 < 310) {
                re = (re = (le = 252245) + (X = (279210 - le) / ((oe = 310) - 303.02453)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 298.00767 & tmYer2020 < 303.02453) {
                re = (re = (le = 279210) + (X = (300340 - le) / ((oe = 303.02453) - 298.00767)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 296.51763 & tmYer2020 < 298.00767) {
                re = (re = (le = 300340) + (X = (306829 - le) / ((oe = 298.00767) - 296.51763)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 290 & tmYer2020 < 296.51763) {
                re = (re = (le = 306829) + (X = (336637 - le) / ((oe = 296.51763) - 290)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 274.42736 & tmYer2020 < 290) {
                re = (re = (le = 336637) + (X = (418253 - le) / ((oe = 290) - 274.42736)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 272.47185 & tmYer2020 < 274.42736) {
                re = (re = (le = 418253) + (X = (429774 - le) / ((oe = 274.42736) - 272.47185)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 270 & tmYer2020 < 272.47185) {
                re = (re = (le = 429774) + (X = (444848 - le) / ((oe = 272.47185) - 270)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 262.29282 & tmYer2020 < 270) {
                re = (re = (le = 444848) + (X = (494201 - le) / ((oe = 270) - 262.29282)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 259.23826 & tmYer2020 < 262.29282) {
                re = (re = (le = 494201) + (X = (515148 - le) / ((oe = 262.29282) - 259.23826)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 250 & tmYer2020 < 259.23826) {
                re = (re = (le = 515148) + (X = (583745 - le) / ((oe = 259.23826) - 250)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 246.75726 & tmYer2020 < 250) {
                re = (re = (le = 583745) + (X = (609473 - le) / ((oe = 250) - 246.75726)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 239.48252 & tmYer2020 < 246.75726) {
                re = (re = (le = 609473) + (X = (671491 - le) / ((oe = 246.75726) - 239.48252)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 230 & tmYer2020 < 239.48252) {
                re = (re = (le = 671491) + (X = (761769 - le) / ((oe = 239.48252) - 230)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 228.05527 & tmYer2020 < 230) {
                re = (re = (le = 761769) + (X = (781820 - le) / ((oe = 230) - 228.05527)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 221.13736 & tmYer2020 < 228.05527) {
                re = (re = (le = 781820) + (X = (860695 - le) / ((oe = 228.05527) - 221.13736)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 210 & tmYer2020 < 221.13736) {
                re = (re = (le = 860695) + (X = (965534 - le) / ((oe = 221.13736) - 210)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 206.60235 & tmYer2020 < 210) {
                re = (re = (le = 965534) + (X = (978787 - le) / ((oe = 210) - 206.60235)) * (W = oe - tmYer2020)).toFixed(0)
            } else if (tmYer2020 > 200 & tmYer2020 < 206.60235) {
                re = (re = (le = 978787) + (X = (988437 - le) / ((oe = 210) - 200)) * (W = oe - tmYer2020)).toFixed(0)
            }
            if (U > 551.72701 & U < 600)
                esitsiralama = 1,
                esitsiralama = esitsiralama.toFixed(0);
            else if (U > 501.90718 & U < 551.72701) {
                X = (382 - (le = 2)) / ((oe = 551.72701) - 501.90718),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 495.74223 & U < 501.90718) {
                X = (521 - (le = 382)) / ((oe = 501.90718) - 495.74223),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 460.43904 & U < 495.74223) {
                X = (2330 - (le = 521)) / ((oe = 495.74223) - 460.43904),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 455.07821 & U < 460.43904) {
                X = (2840 - (le = 2330)) / ((oe = 460.43904) - 455.07821),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 449.29607 & U < 455.07821) {
                X = (3458 - (le = 2840)) / ((oe = 455.07821) - 449.29607),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 446.66159 & U < 449.29607) {
                X = (3869 - (le = 3499)) / ((oe = 449.29607) - 446.66159),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 442.49854 & U < 446.66159) {
                X = (4517 - (le = 3869)) / ((oe = 446.66159) - 442.49854),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 436.63399 & U < 442.49854) {
                X = (5772 - (le = 4517)) / ((oe = 442.49854) - 436.63399),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 432.38022 & U < 436.63399) {
                X = (7005 - (le = 5772)) / ((oe = 436.63399) - 432.38022),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 425.67659 & U < 432.38022) {
                X = (9455 - (le = 7005)) / ((oe = 432.38022) - 425.67659),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 423.64998 & U < 425.67659) {
                X = (10346 - (le = 9455)) / ((oe = 425.67659) - 423.64998),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 416.81456 & U < 423.64998) {
                X = (13760 - (le = 10346)) / ((oe = 423.64998) - 416.81456),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 408.44732 & U < 416.81456) {
                X = (18631 - (le = 13760)) / ((oe = 416.81456) - 408.44732),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 404.39294 & U < 408.44732) {
                X = (22072 - (le = 18963)) / ((oe = 408.44732) - 404.39294),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 400.61564 & U < 404.39294) {
                X = (25272 - (le = 22072)) / ((oe = 404.39294) - 400.61564),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 392.69928 & U < 400.61564) {
                X = (32842 - (le = 25272)) / ((oe = 400.61564) - 392.69928),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 389.3422 & U < 392.69928) {
                X = (36385 - (le = 32842)) / ((oe = 392.69928) - 389.3422),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 387.38 & U < 389.3422) {
                X = (38610 - (le = 36385)) / ((oe = 389.3422) - 387.38),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 382.9209 & U < 387.38) {
                X = (44003 - (le = 38610)) / ((oe = 387.38) - 382.9209),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 376.09456 & U < 382.9209) {
                X = (52967 - (le = 44003)) / ((oe = 382.9209) - 376.09456),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 368.97554 & U < 376.09456) {
                X = (63324 - (le = 52967)) / ((oe = 376.09456) - 368.97554),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 361.10417 & U < 368.97554) {
                X = (76040 - (le = 63324)) / ((oe = 368.97554) - 361.10417),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 354.76102 & U < 361.10417) {
                X = (87270 - (le = 76040)) / ((oe = 361.10417) - 354.76102),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 323.69861 & U < 354.76102) {
                X = (157273 - (le = 87270)) / ((oe = 354.76102) - 323.69861),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 316.24056 & U < 323.69861) {
                X = (178934 - (le = 157273)) / ((oe = 323.69861) - 316.24056),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 295.87572 & U < 316.24056) {
                X = (252075 - (le = 178934)) / ((oe = 316.24056) - 295.87572),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 288.07895 & U < 295.87572) {
                X = (286383 - (le = 252075)) / ((oe = 295.87572) - 288.07895),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 272.76834 & U < 288.07895) {
                X = (366869 - (le = 286383)) / ((oe = 288.07895) - 272.76834),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 264.93247 & U < 272.76834) {
                X = (416325 - (le = 366869)) / ((oe = 272.76834) - 264.93247),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 249.47724 & U < 264.93247) {
                X = (533047 - (le = 416325)) / ((oe = 264.93247) - 249.47724),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 240.79354 & U < 249.47724) {
                X = (611428 - (le = 533047)) / ((oe = 249.47724) - 240.79354),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 223.04792 & U < 240.79354) {
                X = (776545 - (le = 611428)) / ((oe = 240.79354) - 223.04792),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U > 221.15691 & U < 223.04792) {
                X = (786819 - (le = 776545)) / ((oe = 223.04792) - 221.15691),
                W = oe - U,
                esitsiralama = le + X * W,
                esitsiralama = esitsiralama.toFixed(0)
            } else if (U >= 180 & U < 221.15691) {
                X = (796819 - (le = 786819)) / ((oe = 221.15691) - 180),
                W = oe - U,
                esitsiralama = 776545 + 5e3 * W,
                esitsiralama = esitsiralama.toFixed(0)
            }
            if (sozYer2020 > 560 & sozYer2020 < 600)
                ie = (ie = 1).toFixed(0);
            else if (sozYer2020 > 550 & sozYer2020 < 560) {
                ie = (ie = (le = 1) + (X = (3 - le) / ((oe = 560) - 550)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 542.80105 & sozYer2020 < 550) {
                ie = (ie = (le = 3) + (X = (7 - le) / ((oe = 550) - 542.80105)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 530 & sozYer2020 < 542.80105) {
                ie = (ie = (le = 7) + (X = (29 - le) / ((oe = 542.80105) - 530)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 520.90431 & sozYer2020 < 530) {
                ie = (ie = (le = 29) + (X = (58 - le) / ((oe = 530) - 520.90431)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 510 & sozYer2020 < 520.90431) {
                ie = (ie = (le = 58) + (X = (129 - le) / ((oe = 520.90431) - 510)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 505.38595 & sozYer2020 < 510) {
                ie = (ie = (le = 129) + (X = (160 - le) / ((oe = 510) - 505.38595)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 501.3214 & sozYer2020 < 505.38595) {
                ie = (ie = (le = 160) + (X = (203 - le) / ((oe = 505.38595) - 501.3214)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 496.0762 & sozYer2020 < 501.3214) {
                ie = (ie = (le = 203) + (X = (265 - le) / ((oe = 501.3214) - 496.0762)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 490 & sozYer2020 < 496.0762) {
                ie = (ie = (le = 265) + (X = (351 - le) / ((oe = 496.0762) - 490)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 480.46656 & sozYer2020 < 490) {
                ie = (ie = (le = 351) + (X = (537 - le) / ((oe = 490) - 480.46656)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 470 & sozYer2020 < 480.46656) {
                ie = (ie = (le = 537) + (X = (836 - le) / ((oe = 480.46656) - 470)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 450 & sozYer2020 < 470) {
                ie = (ie = (le = 836) + (X = (1688 - le) / ((oe = 470) - 450)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 447.62478 & sozYer2020 < 450) {
                ie = (ie = (le = 1688) + (X = (1821 - le) / ((oe = 450) - 447.62478)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 434.69781 & sozYer2020 < 447.62478) {
                ie = (ie = (le = 1821) + (X = (2976 - le) / ((oe = 447.62478) - 434.69781)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 433.68402 & sozYer2020 < 434.69781) {
                ie = (ie = (le = 2976) + (X = (3119 - le) / ((oe = 434.69781) - 433.68402)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 431.87281 & sozYer2020 < 433.68402) {
                ie = (ie = (le = 3119) + (X = (3360 - le) / ((oe = 433.68402) - 431.87281)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 430 & sozYer2020 < 431.87281) {
                ie = (ie = (le = 3360) + (X = (3638 - le) / ((oe = 431.87281) - 430)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 423.40456 & sozYer2020 < 430) {
                ie = (ie = (le = 3638) + (X = (4725 - le) / ((oe = 430) - 423.40456)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 420.86074 & sozYer2020 < 423.40456) {
                ie = (ie = (le = 4725) + (X = (5250 - le) / ((oe = 423.40456) - 420.86074)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 414.7453 & sozYer2020 < 420.86074) {
                ie = (ie = (le = 5250) + (X = (6732 - le) / ((oe = 420.86074) - 414.7453)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 412.43313 & sozYer2020 < 414.7453) {
                ie = (ie = (le = 6732) + (X = (7432 - le) / ((oe = 414.7453) - 412.43313)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 410 & sozYer2020 < 412.43313) {
                ie = (ie = (le = 7432) + (X = (8231 - le) / ((oe = 412.43313) - 410)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 408.90317 & sozYer2020 < 410) {
                ie = (ie = (le = 8231) + (X = (8598 - le) / ((oe = 410) - 408.90317)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 405.05596 & sozYer2020 < 408.90317) {
                ie = (ie = (le = 8598) + (X = (10066 - le) / ((oe = 408.90317) - 405.05596)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 403.91695 & sozYer2020 < 405.05596) {
                ie = (ie = (le = 10066) + (X = (10570 - le) / ((oe = 405.05596) - 403.91695)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 401.81627 & sozYer2020 < 403.91695) {
                ie = (ie = (le = 10570) + (X = (11525 - le) / ((oe = 403.91695) - 401.81627)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 396.81675 & sozYer2020 < 401.81627) {
                ie = (ie = (le = 11525) + (X = (13911 - le) / ((oe = 401.81627) - 396.81675)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 390 & sozYer2020 < 396.81675) {
                ie = (ie = (le = 13911) + (X = (18042 - le) / ((oe = 396.81675) - 390)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 386.7731 & sozYer2020 < 390) {
                ie = (ie = (le = 18042) + (X = (20156 - le) / ((oe = 390) - 386.7731)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 380.6848 & sozYer2020 < 386.7731) {
                ie = (ie = (le = 20156) + (X = (24920 - le) / ((oe = 386.7731) - 380.6848)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 379.78384 & sozYer2020 < 380.6848) {
                ie = (ie = (le = 24920) + (X = (25682 - le) / ((oe = 380.6848) - 379.78384)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 373.84919 & sozYer2020 < 379.78384) {
                ie = (ie = (le = 25682) + (X = (31245 - le) / ((oe = 379.78384) - 373.84919)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 371.58195 & sozYer2020 < 373.84919) {
                ie = (ie = (le = 31245) + (X = (33574 - le) / ((oe = 373.84919) - 371.58195)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 370 & sozYer2020 < 371.58195) {
                ie = (ie = (le = 33574) + (X = (35288 - le) / ((oe = 371.58195) - 370)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 369.07478 & sozYer2020 < 370) {
                ie = (ie = (le = 35288) + (X = (36365 - le) / ((oe = 370) - 369.07478)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 366.58851 & sozYer2020 < 369.07478) {
                ie = (ie = (le = 36365) + (X = (39300 - le) / ((oe = 369.07478) - 366.58851)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 365.96735 & sozYer2020 < 366.58851) {
                ie = (ie = (le = 39300) + (X = (40092 - le) / ((oe = 366.58851) - 365.96735)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 364.8627 & sozYer2020 < 365.96735) {
                ie = (ie = (le = 40092) + (X = (41452 - le) / ((oe = 365.96735) - 364.8627)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 363.81448 & sozYer2020 < 364.8627) {
                ie = (ie = (le = 41452) + (X = (42796 - le) / ((oe = 364.8627) - 363.81448)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 360.92785 & sozYer2020 < 363.81448) {
                ie = (ie = (le = 42796) + (X = (46731 - le) / ((oe = 363.81448) - 360.92785)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 356.04794 & sozYer2020 < 360.92785) {
                ie = (ie = (le = 46731) + (X = (54214 - le) / ((oe = 360.92785) - 356.04794)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 353.41584 & sozYer2020 < 356.04794) {
                ie = (ie = (le = 54214) + (X = (58453 - le) / ((oe = 356.04794) - 353.41584)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 351.38345 & sozYer2020 < 353.41584) {
                ie = (ie = (le = 58453) + (X = (62003 - le) / ((oe = 353.41584) - 351.38345)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 350 & sozYer2020 < 351.38345) {
                ie = (ie = (le = 62003) + (X = (64314 - le) / ((oe = 351.38345) - 350)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 347.0041 & sozYer2020 < 350) {
                ie = (ie = (le = 64314) + (X = (69979 - le) / ((oe = 350) - 347.0041)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 344.99905 & sozYer2020 < 347.0041) {
                ie = (ie = (le = 69979) + (X = (73927 - le) / ((oe = 347.0041) - 344.99905)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 339.98478 & sozYer2020 < 344.99905) {
                ie = (ie = (le = 73927) + (X = (84500 - le) / ((oe = 344.99905) - 339.98478)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 338.12217 & sozYer2020 < 339.98478) {
                ie = (ie = (le = 84500) + (X = (88776 - le) / ((oe = 339.98478) - 338.12217)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 337.26255 & sozYer2020 < 338.12217) {
                ie = (ie = (le = 88776) + (X = (90794 - le) / ((oe = 338.12217) - 337.26255)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 335.6322 & sozYer2020 < 337.26255) {
                ie = (ie = (le = 90794) + (X = (94677 - le) / ((oe = 337.26255) - 335.6322)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 330.44358 & sozYer2020 < 335.6322) {
                ie = (ie = (le = 94677) + (X = (108184 - le) / ((oe = 335.6322) - 330.44358)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 330 & sozYer2020 < 330.44358) {
                ie = (ie = (le = 108184) + (X = (109421 - le) / ((oe = 330.44358) - 330)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 326.81289 & sozYer2020 < 330) {
                ie = (ie = (le = 109421) + (X = (118195 - le) / ((oe = 330) - 326.81289)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 323.90446 & sozYer2020 < 326.81289) {
                ie = (ie = (le = 118195) + (X = (126902 - le) / ((oe = 326.81289) - 323.90446)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 316.62713 & sozYer2020 < 323.90446) {
                ie = (ie = (le = 126902) + (X = (150337 - le) / ((oe = 323.90446) - 316.62713)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 313.55517 & sozYer2020 < 316.62713) {
                ie = (ie = (le = 150337) + (X = (161041 - le) / ((oe = 316.62713) - 313.55517)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 310 & sozYer2020 < 313.55517) {
                ie = (ie = (le = 161041) + (X = (174253 - le) / ((oe = 313.55517) - 310)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 307.9204 & sozYer2020 < 310) {
                ie = (ie = (le = 174253) + (X = (182397 - le) / ((oe = 310) - 307.9204)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 303.11593 & sozYer2020 < 307.9204) {
                ie = (ie = (le = 182397) + (X = (201855 - le) / ((oe = 307.9204) - 303.11593)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 299.83928 & sozYer2020 < 303.11593) {
                ie = (ie = (le = 201855) + (X = (216058 - le) / ((oe = 303.11593) - 299.83928)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 294.13322 & sozYer2020 < 299.83928) {
                ie = (ie = (le = 216058) + (X = (242229 - le) / ((oe = 299.83928) - 294.13322)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 291.6842 & sozYer2020 < 294.13322) {
                ie = (ie = (le = 242229) + (X = (253961 - le) / ((oe = 294.13322) - 291.6842)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 290 & sozYer2020 < 291.6842) {
                ie = (ie = (le = 253961) + (X = (262049 - le) / ((oe = 291.6842) - 290)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 288.32952 & sozYer2020 < 290) {
                ie = (ie = (le = 262049) + (X = (270480 - le) / ((oe = 290) - 288.32952)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 285.14516 & sozYer2020 < 288.32952) {
                ie = (ie = (le = 270480) + (X = (287017 - le) / ((oe = 288.32952) - 285.14516)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 282.81302 & sozYer2020 < 285.14516) {
                ie = (ie = (le = 287017) + (X = (299411 - le) / ((oe = 285.14516) - 282.81302)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 278.84634 & sozYer2020 < 282.81302) {
                ie = (ie = (le = 299411) + (X = (321220 - le) / ((oe = 282.81302) - 278.84634)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 270 & sozYer2020 < 278.84634) {
                ie = (ie = (le = 321220) + (X = (372563 - le) / ((oe = 278.84634) - 270)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 266.06596 & sozYer2020 < 270) {
                ie = (ie = (le = 372563) + (X = (396733 - le) / ((oe = 270) - 266.06596)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 261.99754 & sozYer2020 < 266.06596) {
                ie = (ie = (le = 396733) + (X = (422513 - le) / ((oe = 266.06596) - 261.99754)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 255.45348 & sozYer2020 < 261.99754) {
                ie = (ie = (le = 422513) + (X = (465961 - le) / ((oe = 261.99754) - 255.45348)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 250 & sozYer2020 < 255.45348) {
                ie = (ie = (le = 465961) + (X = (503926 - le) / ((oe = 255.45348) - 250)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 246.1791 & sozYer2020 < 250) {
                ie = (ie = (le = 503926) + (X = (531271 - le) / ((oe = 250) - 246.1791)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 239.61748 & sozYer2020 < 246.1791) {
                ie = (ie = (le = 531271) + (X = (579690 - le) / ((oe = 246.1791) - 239.61748)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 234.54759 & sozYer2020 < 239.61748) {
                ie = (ie = (le = 579690) + (X = (617740 - le) / ((oe = 239.61748) - 234.54759)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 230 & sozYer2020 < 234.54759) {
                ie = (ie = (le = 617740) + (X = (652878 - le) / ((oe = 234.54759) - 230)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 216.18763 & sozYer2020 < 230) {
                ie = (ie = (le = 652878) + (X = (765854 - le) / ((oe = 230) - 216.18763)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 210 & sozYer2020 < 216.18763) {
                ie = (ie = (le = 765854) + (X = (801073 - le) / ((oe = 216.18763) - 210)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 200 & sozYer2020 < 210) {
                ie = (ie = (le = 801073) + (X = (817297 - le) / ((oe = 210) - 200)) * (W = oe - sozYer2020)).toFixed(0)
            } else if (sozYer2020 > 190 & sozYer2020 < 200) {
                ie = (ie = (le = 817297) + (X = (822297 - le) / ((oe = 200) - 190)) * (W = oe - sozYer2020)).toFixed(0)
            }
            if (R > 560 & R < 590)
                sozsiralama = 1,
                sozsiralama = sozsiralama.toFixed(0);
            else if (R > 533.52635 & R < 560) {
                X = (18 - (le = 1)) / ((oe = 560) - 533.52635),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 487.85431 & R < 533.52635) {
                X = (321 - (le = 18)) / ((oe = 533.52635) - 487.85431),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 475.3791 & R < 487.85431) {
                X = (562 - (le = 321)) / ((oe = 487.85431) - 475.3791),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 447.21129 & R < 475.3791) {
                X = (1847 - (le = 562)) / ((oe = 475.3791) - 447.21129),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 438.46785 & R < 447.21129) {
                X = (2768 - (le = 1847)) / ((oe = 447.21129) - 438.46785),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 436.21129 & R < 438.46785) {
                X = (2983 - (le = 2768)) / ((oe = 438.46785) - 436.21129),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 419.61093 & R < 436.21129) {
                X = (6407 - (le = 2983)) / ((oe = 436.21129) - 419.61093),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 398.92408 & R < 419.61093) {
                X = (15565 - (le = 6407)) / ((oe = 419.61093) - 398.92408),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 388.70474 & R < 398.92408) {
                X = (23344 - (le = 15565)) / ((oe = 398.92408) - 388.70474),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 363.61029 & R < 388.70474) {
                X = (55382 - (le = 23344)) / ((oe = 388.70474) - 363.61029),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 342.84563 & R < 363.61029) {
                X = (101232 - (le = 55382)) / ((oe = 363.61029) - 342.84563),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 338.25351 & R < 342.84563) {
                X = (137860 - (le = 101232)) / ((oe = 342.84563) - 338.25351),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 330.35801 & R < 338.25351) {
                X = (137860 - (le = 113125)) / ((oe = 338.25351) - 330.35801),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 324.71672 & R < 330.35801) {
                X = (157873 - (le = 137860)) / ((oe = 324.71672) - 330.35801),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 314.18233 & R < 324.71672) {
                X = (200255 - (le = 157873)) / ((oe = 324.71672) - 314.18233),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 298.76929 & R < 314.18233) {
                X = (275097 - (le = 200255)) / ((oe = 314.18233) - 298.76929),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 295.42758 & R < 298.76929) {
                X = (293536 - (le = 275097)) / ((oe = 298.76929) - 295.42758),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 286.49119 & R < 295.42758) {
                X = (345660 - (le = 293536)) / ((oe = 295.42758) - 286.49119),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 285.89273 & R < 286.49119) {
                X = (349343 - (le = 345660)) / ((oe = 286.49119) - 285.89273),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 276.99303 & R < 285.89273) {
                X = (411968 - (le = 349343)) / ((oe = 285.89273) - 276.99303),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 266.09299 & R < 276.99303) {
                X = (482826 - (le = 411968)) / ((oe = 276.99303) - 266.09299),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 259.09299 & R < 266.09299) {
                X = (531125 - (le = 482826)) / ((oe = 266.09299) - 259.09299),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 235.02744 & R < 259.09299) {
                X = (735181 - (le = 531125)) / ((oe = 259.09299) - 235.02744),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 228.73816 & R < 235.02744) {
                X = (786909 - (le = 735181)) / ((oe = 235.02744) - 228.73816),
                W = oe - R,
                sozsiralama = le + X * W,
                sozsiralama = sozsiralama.toFixed(0)
            } else if (R > 180 & R < 228.73816) {
                X = (1e6 - (le = 786909)) / ((oe = 228.73816) - 180),
                W = oe - R,
                sozsiralama = le + 7300 * W,
                sozsiralama = sozsiralama.toFixed(0)
            }
            if (dilYer2020 > 560 & dilYer2020 < 600)
                ye = (ye = 1).toFixed(0);
            else if (dilYer2020 > 550 & dilYer2020 < 560) {
                ye = (ye = (le = 1) + (X = (21 - le) / ((oe = 560) - 550)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 545.07952 & dilYer2020 < 550) {
                ye = (ye = (le = 21) + (X = (54 - le) / ((oe = 550) - 545.07952)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 540.51837 & dilYer2020 < 545.07952) {
                ye = (ye = (le = 54) + (X = (101 - le) / ((oe = 545.07952) - 540.51837)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 530 & dilYer2020 < 540.51837) {
                ye = (ye = (le = 101) + (X = (304 - le) / ((oe = 540.51837) - 530)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 523.80723 & dilYer2020 < 530) {
                ye = (ye = (le = 304) + (X = (448 - le) / ((oe = 530) - 523.80723)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 514.52014 & dilYer2020 < 523.80723) {
                ye = (ye = (le = 448) + (X = (759 - le) / ((oe = 523.80723) - 514.52014)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 510 & dilYer2020 < 514.52014) {
                ye = (ye = (le = 759) + (X = (963 - le) / ((oe = 514.52014) - 510)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 502.5075 & dilYer2020 < 510) {
                ye = (ye = (le = 963) + (X = (1353 - le) / ((oe = 510) - 502.5075)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 498.45878 & dilYer2020 < 502.5075) {
                ye = (ye = (le = 1353) + (X = (1471 - le) / ((oe = 502.5075) - 498.45878)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 490 & dilYer2020 < 498.45878) {
                ye = (ye = (le = 1471) + (X = (2070 - le) / ((oe = 498.45878) - 490)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 478.86094 & dilYer2020 < 490) {
                ye = (ye = (le = 2070) + (X = (2815 - le) / ((oe = 490) - 478.86094)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 474.20387 & dilYer2020 < 478.86094) {
                ye = (ye = (le = 2815) + (X = (3182 - le) / ((oe = 478.86094) - 474.20387)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 470 & dilYer2020 < 474.20387) {
                ye = (ye = (le = 3182) + (X = (3538 - le) / ((oe = 474.20387) - 470)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 466.78506 & dilYer2020 < 470) {
                ye = (ye = (le = 3538) + (X = (3832 - le) / ((oe = 470) - 466.78506)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 461.98002 & dilYer2020 < 466.78506) {
                ye = (ye = (le = 3832) + (X = (4281 - le) / ((oe = 466.78506) - 461.98002)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 453.83881 & dilYer2020 < 461.98002) {
                ye = (ye = (le = 4281) + (X = (5181 - le) / ((oe = 461.98002) - 453.83881)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 450 & dilYer2020 < 453.83881) {
                ye = (ye = (le = 5181) + (X = (5665 - le) / ((oe = 453.83881) - 450)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 446.99298 & dilYer2020 < 450) {
                ye = (ye = (le = 5665) + (X = (6075 - le) / ((oe = 450) - 446.99298)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 442.37283 & dilYer2020 < 446.99298) {
                ye = (ye = (le = 6075) + (X = (6749 - le) / ((oe = 446.99298) - 442.37283)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 437.17923 & dilYer2020 < 442.37283) {
                ye = (ye = (le = 6749) + (X = (7528 - le) / ((oe = 442.37283) - 437.17923)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 430 & dilYer2020 < 437.17923) {
                ye = (ye = (le = 7528) + (X = (8789 - le) / ((oe = 437.17923) - 430)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 427.62043 & dilYer2020 < 430) {
                ye = (ye = (le = 8789) + (X = (9270 - le) / ((oe = 430) - 427.62043)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 424.06355 & dilYer2020 < 427.62043) {
                ye = (ye = (le = 9270) + (X = (9954 - le) / ((oe = 427.62043) - 424.06355)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 417.39205 & dilYer2020 < 424.06355) {
                ye = (ye = (le = 9954) + (X = (11409 - le) / ((oe = 424.06355) - 417.39205)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 415.6187 & dilYer2020 < 417.39205) {
                ye = (ye = (le = 11409) + (X = (11808 - le) / ((oe = 417.39205) - 415.6187)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 413.81864 & dilYer2020 < 415.6187) {
                ye = (ye = (le = 11808) + (X = (12233 - le) / ((oe = 415.6187) - 413.81864)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 410 & dilYer2020 < 413.81864) {
                ye = (ye = (le = 12233) + (X = (13127 - le) / ((oe = 413.81864) - 410)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 404.58809 & dilYer2020 < 410) {
                ye = (ye = (le = 13127) + (X = (14447 - le) / ((oe = 410) - 404.58809)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 400.00571 & dilYer2020 < 404.58809) {
                ye = (ye = (le = 14447) + (X = (15699 - le) / ((oe = 404.58809) - 400.00571)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 397.56919 & dilYer2020 < 400.00571) {
                ye = (ye = (le = 15699) + (X = (16365 - le) / ((oe = 400.00571) - 397.56919)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 393.68709 & dilYer2020 < 397.56919) {
                ye = (ye = (le = 16365) + (X = (17466 - le) / ((oe = 397.56919) - 393.68709)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 390 & dilYer2020 < 393.68709) {
                ye = (ye = (le = 17466) + (X = (18451 - le) / ((oe = 393.68709) - 390)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 386.11705 & dilYer2020 < 390) {
                ye = (ye = (le = 18451) + (X = (19609 - le) / ((oe = 390) - 386.11705)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 380.24451 & dilYer2020 < 386.11705) {
                ye = (ye = (le = 19609) + (X = (21245 - le) / ((oe = 386.11705) - 380.24451)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 377.17181 & dilYer2020 < 380.24451) {
                ye = (ye = (le = 21245) + (X = (22129 - le) / ((oe = 380.24451) - 377.17181)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 370 & dilYer2020 < 377.17181) {
                ye = (ye = (le = 22129) + (X = (24154 - le) / ((oe = 377.17181) - 370)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 365.2518 & dilYer2020 < 370) {
                ye = (ye = (le = 24154) + (X = (25506 - le) / ((oe = 370) - 365.2518)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 363.42034 & dilYer2020 < 365.2518) {
                ye = (ye = (le = 25506) + (X = (26031 - le) / ((oe = 365.2518) - 363.42034)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 359.45839 & dilYer2020 < 363.42034) {
                ye = (ye = (le = 26031) + (X = (27283 - le) / ((oe = 363.42034) - 359.45839)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 353.88773 & dilYer2020 < 359.45839) {
                ye = (ye = (le = 27283) + (X = (28884 - le) / ((oe = 359.45839) - 353.88773)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 350 & dilYer2020 < 353.88773) {
                ye = (ye = (le = 28884) + (X = (30095 - le) / ((oe = 353.88773) - 350)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 343.48059 & dilYer2020 < 350) {
                ye = (ye = (le = 30095) + (X = (32141 - le) / ((oe = 350) - 343.48059)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 335.368 & dilYer2020 < 343.48059) {
                ye = (ye = (le = 32141) + (X = (34562 - le) / ((oe = 343.48059) - 335.368)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 330 & dilYer2020 < 335.368) {
                ye = (ye = (le = 34562) + (X = (36236 - le) / ((oe = 335.368) - 330)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 310 & dilYer2020 < 330) {
                ye = (ye = (le = 36236) + (X = (42437 - le) / ((oe = 330) - 310)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 290 & dilYer2020 < 310) {
                ye = (ye = (le = 42437) + (X = (49087 - le) / ((oe = 310) - 290)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 270 & dilYer2020 < 290) {
                ye = (ye = (le = 49087) + (X = (55841 - le) / ((oe = 290) - 270)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 250 & dilYer2020 < 270) {
                ye = (ye = (le = 55841) + (X = (63168 - le) / ((oe = 270) - 250)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 230 & dilYer2020 < 250) {
                ye = (ye = (le = 63168) + (X = (70904 - le) / ((oe = 250) - 230)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 210 & dilYer2020 < 230) {
                ye = (ye = (le = 70904) + (X = (77905 - le) / ((oe = 230) - 210)) * (W = oe - dilYer2020)).toFixed(0)
            } else if (dilYer2020 > 200 & dilYer2020 < 210) {
                var oe, le;
                ye = (ye = (le = 77905) + (X = (78623 - le) / ((oe = 210) - 200)) * (W = oe - dilYer2020)).toFixed(0)
            }
            document.getElementById("tyt_ham_puan_2019").value = tyt2019,
            document.getElementById("tyt_ham_puan_2020").value = tyt2020,
            document.getElementById("tyt_ham_puan_2021").value = tyt2021,
            document.getElementById("tyt_ham_siralama_2021").value = ee,
            document.getElementById("tyt_yerlestirme_puan_2019").value = tytYer2019,
            document.getElementById("tyt_yerlestirme_puan_2020").value = tytYer2020,
            document.getElementById("tyt_yerlestirme_puan_2021").value = tytYer2021,
            document.getElementById("tyt_siralama_2019").value = te,
            document.getElementById("tyt_siralama_2020").value = se,
            document.getElementById("tyt_siralama_2021").value = tytyers2021,
            document.getElementById("yks_say_ham_2019").value = mf2019,
            document.getElementById("yks_say_ham_2020").value = mf2020,
            document.getElementById("yks_say_ham_2021").value = mf2021,
            document.getElementById("yks_ham_say_siralama_2021").value = says2021,
            document.getElementById("yks_say_yer_2019").value = V,
            document.getElementById("yks_say_yer_2020").value = mfYer2020,
            document.getElementById("yks_say_yer_2021").value = mfYer2021,
            document.getElementById("yks_say_siralama_2019").value = $,
            document.getElementById("yks_say_siralama_2020").value = Z,
            document.getElementById("yks_say_siralama_2021").value = sayyers2021,
            document.getElementById("yks_soz_ham_2019").value = soz2019,
            document.getElementById("yks_soz_ham_2020").value = soz2020,
            document.getElementById("yks_soz_ham_2021").value = soz2021,
            document.getElementById("yks_ham_soz_siralama_2021").value = sozs2021,
            document.getElementById("yks_soz_yer_2019").value = R,
            document.getElementById("yks_soz_yer_2020").value = sozYer2020,
            document.getElementById("yks_soz_yer_2021").value = sozYer2021,
            document.getElementById("yks_soz_siralama_2019").value = 0,
            document.getElementById("yks_soz_siralama_2020").value = ie,
            document.getElementById("yks_soz_siralama_2021").value = sozyers2021,
            document.getElementById("yks_ea_ham_2019").value = tm2019,
            document.getElementById("yks_ea_ham_2020").value = tm2020,
            document.getElementById("yks_ea_ham_2021").value = tm2021,
            document.getElementById("yks_ham_esit_siralama_2021").value = eas2021,
            document.getElementById("yks_ea_yer_2019").value = U,
            document.getElementById("yks_ea_yer_2020").value = tmYer2020,
            document.getElementById("yks_ea_yer_2021").value = tmYer2021,
            document.getElementById("yks_esit_siralama_2019").value = 0,
            document.getElementById("yks_esit_siralama_2020").value = re,
            document.getElementById("yks_esit_siralama_2021").value = eayers2021,
            document.getElementById("yks_dil_ham_2020").value = dil2020,
            document.getElementById("yks_dil_ham_2021").value = dil2021,
            document.getElementById("yks_ham_dil_siralama_2021").value = dils2021,
            document.getElementById("yks_dil_yer_2020").value = dilYer2020,
            document.getElementById("yks_dil_yer_2021").value = dilYer2021,
            document.getElementById("yks_dil_siralama_2020").value = ye,
            document.getElementById("yks_dil_siralama_2021").value = dilyers2021
        }
    }
}
