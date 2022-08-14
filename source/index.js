function sampleClass() {
  let info = prompt("Do you want to receive more information?")
    .toLowerCase()
    .trim();

  if (info === "yes") {
    let name = prompt("Enter your name:");
    let email = prompt("Enter your email:");
    alert(
      "🙏 Sat Nam, " + name + "! We'll sent you more information to " + email
    );

    let p4 = document.querySelector("p4");
    p4.innerHTML = "💗 Thank you for joining our community, " + name + "!";
  } else {
    alert("Sat Nam, see you next time! 🙏");
  }
}

let sampleClassButton = document.querySelector("button");
sampleClassButton.addEventListener("click", sampleClass);
