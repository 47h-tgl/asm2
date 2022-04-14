function tinhlaidon(x){
    var gh_str = sessionStorage.getItem("ssgiohang");
    var giohang = JSON.parse(gh_str);

    var tr = x.parseElement.parseElement;
    var dg = parseInt(tr.children[3].innerHTML);
    var sl = x.value;
    var tt = parseInt(tr.children[5].innerHTML);
    var tongdon = document.getElementById("tongtien").innerText;
    tongdon -= tt;

    var tensp = tr.children[2].innerText;
    if (sl == 0){
        dongy = confirm("so luong 0 se xoa san pham khoi gio hang. OK?");
        if (dongy == true)
            tr.remove();
            for (let i = 0; i < giohang.length; i++){
                if (giohang[i][1] == tensp){
                    giohang.splice(i, 1);
                }
            }
        var countsp = parseInt(sessionStorage.getItem("countsp") - 1);
        sessionStorage.setItem("countsp", countsp);
        showcountsp();
    }else {
        for (let i = 0; i < giohang.length; i++){
            if (giohang[i][1] == tensp){
                giohang[i][3] = sl;
            }
        }
        tt = dg * sl;
        tr.children[5].innerHTML = tt;
        tongdon += tt;
    }
    document.getElementById("tongtien").innerHTML = tongdon;
    sessionStorage.setItem("ssgiohang", JSON.stringify(giohang));
}