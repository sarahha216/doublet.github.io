/*Hiển thị xem thêm nội dung ở page sản phẩm*/
const Utils = {
  
    addClass: function(element, theClass) {
      element.classList.add(theClass);
    },
    
    removeClass: function(element, theClass) {
      element.classList.remove(theClass);
    },
    
    showMore: function(element, excerpt) {
      element.addEventListener("click", event => {
        const linkText = event.target.textContent.toLowerCase();
        event.preventDefault();
        
        console.log(this);
        if (linkText == "xem thêm nội dung") {
          element.textContent = "Thu gọn nội dung";
          this.removeClass(excerpt, "excerpt-hidden");
          this.addClass(excerpt, "excerpt-visible");
        } else {
          element.textContent = "Xem thêm nội dung";
          this.removeClass(excerpt, "excerpt-visible");
          this.addClass(excerpt, "excerpt-hidden");
        }
      });
    } 
  };
  
  const ExcerptWidget = {
    showMore: function(showMoreLinksTarget, excerptTarget) {
     const showMoreLinks = document.querySelectorAll(showMoreLinksTarget);
      
     showMoreLinks.forEach(function(link) {
       const excerpt = link.previousElementSibling.querySelector(excerptTarget);
       Utils.showMore(link, excerpt);
     });
    }
  };
   
  ExcerptWidget.showMore('.js-show-more', '.js-excerpt');