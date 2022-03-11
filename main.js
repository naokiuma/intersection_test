const boxes = document.querySelectorAll(".box");//対象のアイテム



console.log('test');
const options = {
    root:null,
    rootMargin: "-50% 0px", // ビューポートの中心を判定基準にする
    threshold: 0
};

const observer = new IntersectionObserver(doWhenIntersect, options);

boxes.forEach(box => {
    observer.observe(box);
});



function doWhenIntersect(elements) {
    // 交差検知をしたもののなかで、isIntersectingがtrueのDOMを色を変える関数に渡す
    elements.forEach(element => {
      if (element.isIntersecting) {
       console.log($(element.target));
       if(!$(element.target).hasClass('active')){
            $(element.target).addClass('active')
       }
      }
    });
}

