document.addEventListener('DOMContentLoaded', () => {
  const animItems = document.querySelectorAll('.anim-five');
  const animated = new Set();

  function onScroll() {
    const windowHeight = window.innerHeight;

    animItems.forEach((item, index) => {
      if (animated.has(item)) return;

      const rect = item.getBoundingClientRect();

      if (rect.top < windowHeight && rect.bottom > 0) {
        setTimeout(() => {
          item.classList.add('visible');
          animated.add(item);
        }, index * 200);
      }
    });
  }

  let debounceTimer;
  window.addEventListener('scroll', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(onScroll, 50);
  });
  onScroll();
});



    document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn5 = document.getElementById('toggle-text-5');
  const addText5 = document.querySelector('.add-text-5');

  const whyLearnContent = `
<strong>19 століття</strong> — це фундамент, на якому стоїть сучасний світ. Вивчаючи його, ми розуміємо, як виникли ідеї свободи, права людини, наукові відкриття та культурні тренди, що й досі формують наше життя.<br><br>
Цей період показує, як боротьба і творчість окремих особистостей здатна змінити суспільство.<br><br>
Знання про 19 століття допомагають нам краще зрозуміти історичні процеси, уникати помилок минулого і черпати натхнення для майбутнього.<br><br>
Вивчення цієї епохи — це шлях до глибшого розуміння себе і світу.
`;

  toggleBtn5.addEventListener('click', (e) => {
    e.preventDefault();

    if (addText5.classList.contains('visible')) {
      addText5.classList.remove('visible');
      setTimeout(() => {
        addText5.innerHTML = '';
        addText5.style.paddingTop = '0';
      }, 600);
    } else {
      addText5.innerHTML = whyLearnContent;
      addText5.style.paddingTop = '60px';
      setTimeout(() => {
        addText5.classList.add('visible');
      }, 10);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn4 = document.getElementById('toggle-text-4');
  const addText4 = document.querySelector('.add-text-4');

  const cultureContent = `
1. <strong>Романтизм</strong> — художній та літературний рух, що підкреслював емоції, індивідуалізм і природу, став реакцією на раціоналізм і промислову революцію.<br><br>
2. <strong>Реалізм</strong> — новий стиль у мистецтві та літературі, що прагнув зображати життя таким, яким воно є, без прикрас.<br><br>
3. <strong>Національні театри</strong> — розвиток національної культури через створення театрів, які просували мову і традиції народів.<br><br>
4. <strong>Масова преса</strong> — розповсюдження газет і журналів, що зробило інформацію доступнішою для широких верств населення.<br><br>
5. <strong>Музика</strong> — розквіт класичної музики, появу геніїв як Ліст, Шопен, Бетховен.<br><br>
6. <strong>Жінки в культурі</strong> — зростання ролі жінок як авторок, музиканток, актрис, що поступово змінювало уявлення про їхню роль у суспільстві.
`;

  toggleBtn4.addEventListener('click', (e) => {
    e.preventDefault();

    if (addText4.classList.contains('visible')) {
      addText4.classList.remove('visible');
      setTimeout(() => {
        addText4.innerHTML = '';
        addText4.style.paddingTop = '0';
      }, 600);
    } else {
      addText4.innerHTML = cultureContent;
      addText4.style.paddingTop = '60px';
      setTimeout(() => {
        addText4.classList.add('visible');
      }, 10);
    }
  });
});

    window.onload = () => {
        document.querySelectorAll('.mega-in').forEach(el => {
            el.style.opacity = '1';
        });
    };

    document.addEventListener("DOMContentLoaded", () => {
        const paragraphs = document.querySelectorAll(".second-line p");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, index * 500);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.8
        });

        paragraphs.forEach(p => observer.observe(p));
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const elements = entry.target.querySelectorAll('.three-anim');
                elements.forEach((el, index) => {
                    el.style.animationDelay = `${index * 750}ms`;
                    el.classList.add('visible');
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.25,
    });

    const section = document.querySelector('.three-line');
    if (section) observer.observe(section);

    const fourSection = document.querySelector('.four-line');

    if (fourSection) {
        const observerFour = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const elements = entry.target.querySelectorAll('.four-anim');
                    elements.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('visible');
                        }, index * 450);
                    });
                    observerInstance.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.25,
        });

        observerFour.observe(fourSection);
    }




    const link = document.getElementById('toggle-text');
    const addText = document.querySelector('.add-text');
    const content = `19 століття — це дивовижна епоха великих відкриттів, революцій і культурного буму. Це час, коли світ стрімко змінювався: від появи парових машин і залізниць до формування національних ідентичностей і зародження модерної науки. У 19 столітті народилися ідеї, що перевернули уявлення про свободу, мистецтво, технології та суспільство. Тут творили генії — від Дарвіна, який пояснив еволюцію, до Шевченка, що став голосом народу. Це століття, яке заклало основи нашого сучасного світу і донині надихає мільйони!`;

    link.addEventListener('click', (e) => {
        e.preventDefault();

        if (addText.classList.contains('visible')) {
            addText.classList.remove('visible');
            setTimeout(() => {
                addText.textContent = '';
            }, 600);
        } else {
            addText.textContent = content;

            setTimeout(() => {
                addText.classList.add('visible');
            }, 10);
        }
    });




    const link2 = document.getElementById('toggle-text-2');
const addText2 = document.querySelector('.add-text-2');

const content2 = `
<p><strong>1. Промислова революція</strong><br>
Революційний перехід від ручної праці до машинного виробництва. З’явилися парові двигуни, фабрики, залізниці, що змінили економіку та суспільство.</p>

<p><strong>2. Національні революції і формування держав</strong><br>
Боротьба за незалежність і національне самовизначення в Європі та світі — Грецька, Італійська, Німецька об’єднання, революції 1848 року.</p>

<p><strong>3. Наукові відкриття</strong><br>
Чарльз Дарвін опублікував «Походження видів» (1859), що заклало основи теорії еволюції. Відкриття електрики, перших ліків та інших технологічних проривів.</p>

<p><strong>4. Соціальні зміни і реформи</strong><br>
Розвиток робітничого руху, початок боротьби за права жінок, скасування рабства в багатьох країнах.</p>

<p><strong>5. Культурний розквіт</strong><br>
Романтизм і реалізм у літературі, мистецтві та музиці. Тарас Шевченко, Віктор Гюго, Федор Достоєвський, Льюїс Керролл і інші творили свої шедеври.</p>

<p><strong>6. Колоніальна експансія</strong><br>
Інтенсивне розширення європейських імперій в Африці, Азії та Океанії — початок нової епохи глобалізації і конфліктів.</p>
`;

link2.addEventListener('click', (e) => {
  e.preventDefault();

  if (addText2.classList.contains('visible')) {
    addText2.classList.remove('visible');
    setTimeout(() => {
      addText2.innerHTML = '';
    }, 600);
  } else {
    addText2.innerHTML = content2;
    setTimeout(() => {
      addText2.classList.add('visible');
    }, 10);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn3 = document.getElementById('toggle-text-3');
  const addText3 = document.querySelector('.add-text-3');
  const content = `
1. <strong>Тарас Шевченко</strong> — український поет, художник і громадський діяч, символ національного відродження України, автор «Кобзаря».<br><br>
2. <strong>Чарльз Дарвін</strong> — англійський натураліст, автор теорії еволюції через природний добір, що змінила уявлення про походження видів.<br><br>
3. <strong>Флоренс Найтінгейл</strong> — засновниця сучасного медсестринства, реформувала систему охорони здоров’я.<br><br>
4. <strong>Віктор Гюго</strong> — французький письменник і поет, автор «Знедолених», один із лідерів романтизму.<br><br>
5. <strong>Федір Достоєвський</strong> — російський письменник, автор психологічних романів, що досліджують людську природу.<br><br>
6. <strong>Мері Шеллі</strong> — авторка «Франкенштейна», одна з перших у жанрі наукової фантастики.<br><br>
7. <strong>Александр Гамільтон</strong> — (трохи раніше, але вплив зберігався) політик і реформатор.<br><br>
8. <strong>Авраам Лінкольн</strong> — 16-й президент США, який очолив країну під час Громадянської війни та скасував рабство.<br><br>
9. <strong>Луї Пастер</strong> — французький вчений, який зробив революцію у мікробіології, розробив вакцини.<br><br>
10. <strong>Ганс Крістіан Андерсен</strong> — датський казкар, автор усесвітньо відомих казок.
`;

  toggleBtn3.addEventListener('click', (e) => {
    e.preventDefault();

    if (addText3.classList.contains('visible')) {
      addText3.classList.remove('visible');
      setTimeout(() => {
        addText3.innerHTML = '';
        addText3.style.paddingTop = '0';
      }, 600);
    } else {
      addText3.innerHTML = content;
      addText3.style.paddingTop = '60px';
      setTimeout(() => {
        addText3.classList.add('visible');
      }, 10);
    }
  });
});

