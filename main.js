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
       //activateIndex(element.target);
       console.log($(element.target));
       if(!$(element.target).hasClass('active')){
            $(element.target).addClass('active')
       }
      }
    });
}

function activateIndex(element) {
    // すでにアクティブになっている目次を選択
    const currentActiveIndex = document.querySelector(".box .active");
    // すでにアクティブになっているものが0個の時（=null）以外は、activeクラスを除去
    if (currentActiveIndex !== null) {
      currentActiveIndex.classList.remove("active");
    }
    // 引数で渡されたDOMが飛び先のaタグを選択し、activeクラスを付与
    const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
    newActiveIndex.classList.add("active");
  }