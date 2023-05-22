function getData() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let number = document.getElementById("number").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    if (name == "") {
        return alert("Nama Harus Di Isi")
    } else if (email == "") {
        return alert("Email Harus Di Isi")
    } else if (number == "") {
        return alert("No Telpon Harus Di Isi")
    } else if (subject == "") {
        return alert("Subject Harus Dipilih")
    } else if (message == "") {
        return alert("Pesan Harus Di Isi")
    }

    const destination = "arifnixxy@gmail.com"
    let a = document.createElement("a")
    a.href = `mailto:${destination}?subject=${subject}&body= Hallo nama saya ${name} , saya ingin ${message}, bisakah anda menghubungi saya di ${number}`
    a.click()

    let data = {
        nama: name,
        email: email,
        telp: number,
        subject: subject,
        pesan: message,
    }

    console.log(data)
}