
    const images=[
        "https://c.ndtvimg.com/2024-10/aqs2smb8_virat-kohli-bcci_625x300_30_October_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
"https://news24online.com/wp-content/uploads/2024/11/Virat-Kohli-likely-to-make-a-comeback-as-captain-of-RCB.jpg",
"https://c.ndtvimg.com/2024-05/p88m66_rcb-bcci_625x300_13_May_24.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605",
"https://c.ndtvimg.com/2025-03/7cqagud_rcb-bcci_625x300_27_March_25.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
    ];

    let currentIndex=0;
//set default image when page load
window.onload=function(){
    document.getElementById("image").src=images[currentIndex]};

    function nextImage(){
        currentIndex=(currentIndex+1)%images.length //
    document.getElementById("image").src=images[currentIndex]
    };

    function prevImage(){
        currentIndex=(currentIndex+1)%images.length //
    document.getElementById("image").src=images[currentIndex]
    };
