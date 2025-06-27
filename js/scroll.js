window.scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
};