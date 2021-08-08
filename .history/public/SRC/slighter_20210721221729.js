class Slighter {
    constructor(imp) {
        imp.sliderContainer = sliderContainer;
        this.currentSlide = 0;
        imp.sliderContainer.children[this.currentSlide].classList.add("current");
        if (imp.sliderContainer.children.length > 1)
            setInterval(() => this.changeSlide(), imp.interval);
    }

    changeSlide() {
        this.sliderContainer.children[this.previousSlide].classList.remove("previous");
        this.sliderContainer.children[this.currentSlide].classList.replace("current", "previous");
        this.sliderContainer.children[this.nextSlide].classList.add("current");
        this.currentSlide = this.nextSlide;
    }
    get previousSlide() {
        if (this.currentSlide === 0) {
            return this.sliderContainer.children.length - 1;
        }
        return this.currentSlide - 1;
    }
    get nextSlide() {
        if (this.currentSlide < this.sliderContainer.children.length - 1) {
            return this.currentSlide + 1;
        }
        return 0;
    }
}
