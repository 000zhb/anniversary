new TypeIt("#bigtitle", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("张恒 ❤ 武盈盈")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("恋爱满岁 爱意不减 ！")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();