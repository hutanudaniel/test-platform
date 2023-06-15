export default function swDev() {
  // console.log(process.env.PUBLIC_URL,")))))))))")
  let swUrl = "";

  if(process.env.NODE_ENV === 'production')
  {
    swUrl = "https://agapealex.github.io/test6/sw.prod.js"
  }
  else{
    swUrl = "http://localhost:3000/sw.dev.js"
  }

  // console.log(navigator,"****")

  //verifica daca are proprietatea serviceworker in navigator 
  navigator.serviceWorker.register(swUrl).then((response) => {
    // console.log("===");
    console.warn("response", response);

    // return response.pushManager.getSubscription().then(function (subscription) {
    //   response.pushManager.subscribe({
    //     userVisibleOnly: true,
    //     // applicationServerKey: determineAppServerKey(),
    //   });
    // });
  });
}
