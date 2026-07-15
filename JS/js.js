const tl_img = gsap
  .timeline({ ease: "Power1.easeInOut" })
  .to(".men .img_overlay", {
    duration: 1,
    y: "100%",
  })
  .to(
    ".women .img_overlay",
    {
      duration: 1,
      y: "100%",
    },
    "-=.7", // 👈 начинается за 0.7с до конца предыдущего
  )
  .from(".img img", {
    opacity: 0,
    duration: 1,
    scale: 1.2,
    stagger: 0.2,
  })
  .from(".text h1", {
    opacity: 0,
    duration: 1,
    y: 50,
  })
  .from(
    ".text h5",
    {
      opacity: 0,
      duration: 1,
      y: 50,
    },
    "-=.5",
  )
  .to(".content", {
    y: "70px",
  });

const tl_header = gsap
  .timeline({ ease: "Power1.easeInOut" })

  .from("header", {
    delay: 4.5,
    duration: 1,
    y: "-70px",
  })
  .from("header .logo", {
    duration: 1,
    y: "-70px",
  })
  .from(
    "header .menu li",
    {
      duration: 1,
      y: "-70px",
      stagger: 0.1,
    },
    "-=.7",
  );


//    GSAP — БЫСТРЫЙ ОСВЕЖАЮЩИЙ КУРС
// 🎯 ОСНОВНЫЕ МЕТОДЫ
// Метод	Что делает	Пример
// gsap.to()	Анимирует от текущего состояния к указанному	gsap.to(".box", {x:100, duration:1})
// gsap.from()	Анимирует от указанного состояния к текущему	gsap.from(".box", {x:100, duration:1})
// gsap.fromTo()	Анимирует от одного состояния к другому	gsap.fromTo(".box", {x:0}, {x:100})
// gsap.timeline()	Создаёт цепочку анимаций	const tl = gsap.timeline()
// 📦 КАК РАБОТАЕТ TIMELINE
// javascript
// const tl = gsap.timeline()
//   .to(".box", { x: 100, duration: 1 })    // 0-1с
//   .to(".box", { y: 100, duration: 1 })    // 1-2с
//   .to(".box", { rotation: 360, duration: 1 }) // 2-3с
// Идут последовательно: x → y → rotation

// ⏰ ПОЗИЦИОНИРОВАНИЕ В TIMELINE
// javascript
// const tl = gsap.timeline()
//   .to(".box1", { x: 100, duration: 1 })
//   .to(".box2", { x: 100, duration: 1 }, "+=0.5")  // через 0.5с после box1
//   .to(".box3", { x: 100, duration: 1 }, "-=0.5")  // на 0.5с раньше окончания box2
//   .to(".box4", { x: 100, duration: 1 }, "<")      // одновременно с box3
//   .to(".box5", { x: 100, duration: 1 }, 2)        // на 2-й секунде
// 🎨 ОСНОВНЫЕ СВОЙСТВА
// Свойство	Что делает	Пример
// x	Перемещение по X (px)	x: 100
// y	Перемещение по Y (px)	y: -50
// rotation	Вращение (град)	rotation: 360
// scale	Масштаб	scale: 1.5
// opacity	Прозрачность (0-1)	opacity: 0
// duration	Длительность (сек)	duration: 1
// ease	Плавность	ease: "power2.inOut"
// delay	Задержка (сек)	delay: 0.5
// repeat	Повтор (-1 = бесконечно)	repeat: 2
// yoyo	Анимация туда-обратно	yoyo: true
// 🔄 EASING (ПЛАВНОСТЬ)
// javascript
// // Основные
// ease: "power1.in"      // медленно в начале, быстро в конце
// ease: "power1.out"     // быстро в начале, медленно в конце
// ease: "power1.inOut"   // медленно → быстро → медленно

// // Другие варианты
// ease: "back.inOut"     // с перелётом
// ease: "bounce.out"     // как мячик
// ease: "elastic.inOut"  // пружина
// 🎯 STAGGER (ЗАДЕРЖКА МЕЖДУ ЭЛЕМЕНТАМИ)
// javascript
// // Каждый элемент с задержкой 0.2с
// gsap.to(".box", {
//     x: 100,
//     stagger: 0.2,
//     duration: 1
// })

// // Разные варианты
// stagger: 0.2           // простая задержка
// stagger: {
//     amount: 1,         // общая длительность
//     from: "center",    // с какого элемента начинать
//     grid: [3, 3]       // для сетки
// }
// 🎬 ПРИМЕРЫ
// Простая анимация
// javascript
// gsap.to(".box", {
//     x: 200,
//     rotation: 360,
//     scale: 1.5,
//     duration: 2,
//     ease: "power2.inOut"
// })
// Timeline с эффектами
// javascript
// const tl = gsap.timeline({ ease: "power1.inOut" })
//     .from(".title", {
//         opacity: 0,
//         y: -50,
//         duration: 1
//     })
//     .from(".subtitle", {
//         opacity: 0,
//         y: 30,
//         duration: 0.8
//     }, "-=0.5")
//     .to(".button", {
//         scale: 1.1,
//         duration: 0.3,
//         repeat: 2,
//         yoyo: true
//     })
// 📱 ScrollTrigger (для скролла)
// javascript
// // Подключить плагин
// gsap.registerPlugin(ScrollTrigger);

// // Анимация при скролле
// gsap.to(".box", {
//     x: 300,
//     scrollTrigger: {
//         trigger: ".box",
//         start: "top center",
//         end: "bottom top",
//         scrub: 1,  // привязка к скроллу
//         markers: true // для отладки
//     }
// })
// 🔧 УПРАВЛЕНИЕ АНИМАЦИЕЙ
// javascript
// const tl = gsap.timeline()
//     .to(".box", { x: 100, duration: 1 })

// tl.pause()      // пауза
// tl.play()       // воспроизвести
// tl.reverse()    // обратно
// tl.restart()    // с начала
// tl.seek(0.5)    // перейти на 0.5 секунду
// tl.kill()       // остановить и удалить
// ⚡ ПОЛЕЗНЫЕ СОВЕТЫ
// javascript
// // Анимировать несколько элементов
// gsap.to([".box1", ".box2", ".box3"], {
//     x: 100,
//     stagger: 0.2
// })

// // Установить состояние без анимации
// gsap.set(".box", { opacity: 0, y: 50 })

// // Использовать проценты
// gsap.to(".box", { x: "50%", y: "100%" })

// // Анимировать CSS-свойства
// gsap.to(".box", {
//     backgroundColor: "red",
//     borderRadius: "50%",
//     boxShadow: "0 0 20px rgba(0,0,0,0.5)"
// })
// 📚 ПОЛЕЗНЫЕ ССЫЛКИ
// Документация GSAP

// Easing-визуализатор

// ScrollTrigger

// 🎯 ИТОГ
// GSAP — это:

// ✅ Проще, чем CSS-анимации

// ✅ Мощнее, чем jQuery animate

// ✅ Быстрее, чем setInterval

// Главное правило:
// to() = из текущего → в указанное
// from() = из указанного → в текущее
// fromTo() = из указанного → в другое указанное
