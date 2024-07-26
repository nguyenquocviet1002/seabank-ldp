function checkScroll() {
    if ($(window).scrollTop() > 0) {
        $('.header').addClass('fixed');
    }
    if ($(window).scrollTop() <= 0) {
        $('.header').removeClass('fixed');
    }
}

function removeModal() {
    $('.modal').remove();
}

$(document).ready(function () {
    // Cache selectors
    var lastId,
        topMenu = $(".header__menu"),
        topMenuHeight = topMenu.outerHeight() + 15,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        $('.header__menu').removeClass('active');
        $('.backdrop').removeClass('show');
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1000);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .removeClass("active")
                .filter("[href='#" + id + "']").addClass("active");
        };
        checkScroll();
    });

    $('.header__icon').click(function () {
        $('.header__menu').addClass('active');
        $('.backdrop').addClass('show');
    });
    $('.backdrop').click(function () {
        $('.header__menu').removeClass('active');
        $('.backdrop').removeClass('show');
    });

    $('.reg-btn').click(function () {
        var html = '';
        var idModal = $(this).attr("data-modal");
        switch (idModal) {
            case 'modal-1':
                html = `
                <div class="modal">
                    <div class="modal__bg" onclick="removeModal()"></div>
                    <div class="modal__box">
                        <div class="modal__close" onclick="removeModal()">×</div>
                        <div class="modal__body">
                            <div class="modal__title">
                                <img src="images/title-p1.jpg" alt="">
                            </div>
                            <div class="modal__form">
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Họ và tên">
                                </div>
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Địa chỉ">
                                </div>
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Số điện thoại">
                                </div>
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Vay kinh doanh">
                                </div>
                                <div class="modal__submit">
                                    <input class="button-1" type="button" value="Đăng ký">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                break;
            case 'modal-2':
                html = `
                <div class="modal">
                    <div class="modal__bg" onclick="removeModal()"></div>
                    <div class="modal__box">
                        <div class="modal__close" onclick="removeModal()">×</div>
                        <div class="modal__body">
                            <div class="modal__title">
                                <img src="images/title-p2.jpg" alt="">
                            </div>
                            <div class="modal__form">
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Họ và tên">
                                </div>
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Địa chỉ">
                                </div>
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Số điện thoại">
                                </div>
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Vay kinh doanh">
                                </div>
                                <div class="modal__submit">
                                    <input class="button-1" type="button" value="Đăng ký">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                break;
            case 'modal-3':
                html = `
                <div class="modal">
                    <div class="modal__bg" onclick="removeModal()"></div>
                    <div class="modal__box">
                        <div class="modal__close" onclick="removeModal()">×</div>
                        <div class="modal__body">
                            <div class="modal__title">
                                <img src="images/title-p3.jpg" alt="">
                            </div>
                            <div class="modal__form">
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Họ và tên">
                                </div>
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Địa chỉ">
                                </div>
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Số điện thoại">
                                </div>
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Vay kinh doanh">
                                </div>
                                <div class="modal__submit">
                                    <input class="button-1" type="button" value="Đăng ký">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                break;
            case 'modal-4':
                html = `
                <div class="modal">
                    <div class="modal__bg" onclick="removeModal()"></div>
                    <div class="modal__box">
                        <div class="modal__close" onclick="removeModal()">×</div>
                        <div class="modal__body">
                            <div class="modal__title">
                                <img src="images/title-p4.jpg" alt="">
                            </div>
                            <div class="modal__form">
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Họ và tên">
                                </div>
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Địa chỉ">
                                </div>
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Số điện thoại">
                                </div>
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <input class="modal__input" type="text" placeholder="Vay kinh doanh">
                                </div>
                                <div class="modal__submit">
                                    <input class="button-1" type="button" value="Đăng ký">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                break;
            default:
                html = '';
        };
        $(html).appendTo('body');

    })

    checkScroll();

    $('.next__screen4').click(function() {
        $('.screen4 .container4').css('display', 'none');
        $('.screen4__slide').css('display', 'block');
    });

    var swiper4 = new Swiper(".mySwiper4", {});
    var swiper5 = new Swiper(".mySwiper5", {});
})
