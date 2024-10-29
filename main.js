const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);

function toast({icon="", title = "", message = "", type = "info", duration = 3000 }) {
    const main = $("#toast");
    if (main) {
        const toast = document.createElement("div");
        const delay = (duration / 1000).toFixed(2);

        let setTimeToast =  setTimeout(()=>{
            main.removeChild(toast);
        }, duration)

        toast.onclick = function(e){
           if(e.target.closest(".toast_close")){
                main.removeChild(toast);    
                clearTimeout(setTimeToast);
           }
        }

        toast.classList.add("toast",`toast--${type}`);
        toast.style.animation = `slideToRight linear 0.5s, fadeOut linear ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon ">
                <i class="${icon}"></i> 
            </div>
            <div class="toast_content">
                <h3 class="toast__title">${title}</h3>
                <p class="toast_desc">
                   ${message}
                </p>
            </div>
            <div class="toast_close">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>;
        `;
        main.appendChild(toast); 
    }
}

function showSuccessToast() {
    toast({
        icon: "fa-solid fa-circle-check",
        title: "Susccess",
        message: "không 1 lời nói cứ thế rời anh...phá nát trái tim anh",
        type: "success",
        duration: 4000,
    });
}

function showErrorToast() {
    toast({
        icon: "fa-solid fa-circle-exclamation",
        title: "Error",
        message: "Thuốc đắng thì giã tật còn yêu thật thì bị cắm sừng",
        type: "error",
        duration: 4000,
    });
}

function showWarningToast() {
    toast({
        icon: "fa-solid fa-triangle-exclamation",
        title: "Warning",
        message: "Lạnh lẽo là tại đông nhưng yêu em là tại hạ",
        type: "warning",
        duration: 4000,
    });
}
