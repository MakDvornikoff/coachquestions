// Вопросы для каждой категории
const questions = [
    ['Как я пойму, что получил желаемое?', 'Ради чего я готов вставать рано по утрам?', 'Кто меня вдохновляет? Почему?', 'Чем бы я больше всего хотел гордиться (радоваться) в будущем?', 'О чем я даже боюсь мечтать?', 'На сколько баллов из 10 мое желание (цель) принесет мне радость?', 'Что больше всего меня радует в течение дня?', 'Если бы волшебная фея сказала мне, что я достигну любого своего желания, что бы это было?', 'Что могу сделать прямо сейчас, чтобы счастливо улыбнуться?', 'Если бы можно было всю жизнь работать только над 1 делом, что бы это было?', 'Если бы у меня появилось столько денег, что не пришлось бы больше работать, чем бы я занялся?', 'Если бы был способ прожить свою жизнь, сделав все, что я хочу, что это был бы за способ?', 'Каким я себе представляю идеального себя?', 'Что для меня означает идеальный образ жизни? Как? Где? С кем?', 'Что увлекает меня в жизни больше всего?', 'Чего я хочу от жизни? О чем мечтаю?', 'Чем я могу гордиться (радоваться) сегодня?', 'Почему это важно для меня?', 'Как бы я продолжил фразу «Я прожил счастливую жизнь, потому что…»', 'Что станет возможным?', 'Почему у меня получится?', 'Когда все мои текущие цели будут достигнуты, куда я пойду дальше?', 'Как я хотел бы видеть свою жизнь через год? 3 - 5 - 10 - 30 лет', 'Почему именно сейчас?', 'Насколько сейчас я живу жизнью моей мечты?'],

    ["Если представить, что ночью произошло чудо и трудность разрешилась. Какие первые шаги я сделаю?", "Как бы я поступил, если бы был себе лучшим другом?", "Что можно изменить, чтобы стать счастливее?", "В чем я выиграю или проиграю, если так сделаю (поступлю)?", "Если бы я взял(-а) всю ответственность за свое счастье на себя, что тогда?", "Если бы я сейчас встретил более счастливую версию себя, какой бы совет он (она) дал мне?", "Какой урок важно пройти в этой ситуации?", "Предположим, что мне уже 95 лет. Что бы я себе сказал? Что бы изменил?", "Если бы в мире вообще не было осуждения, что бы я сделал?", "Что бы я делал, если бы не страх?", "Кто те 5 человек, с кем я чаще всего общаюсь? Эти люди поддерживают меня или тормозят?", "Что произойдет, если я перестану себя критиковать и обесценивать?", "На сколько баллов из 10 верю, что у меня получится? Что надо, чтобы увеличить на 1 балл? Какой навык внедрить, качество воспитать?", "Что стоит себе разрешить?", "Если бы можно было изменить в себе только 1 вещь, что бы это было?", "Как я хочу себя чувствовать в этой ситуации? Что мешает? Что поможет?", "Если бы так поступил кто-то другой, что бы я почувствовал, подумал?", "Если бы у меня был фонарик, в луче которого видна вся правда, куда бы я посветил внутри себя?", "Какие положительные моменты есть в этой ситуации?", "Каким бы я хотел видеть мой сегодняшний день, начиная с самого утра?", "Чье мнение самое важное в этой ситуации?", "Довольствуюсь ли я в жизни меньшим, чем реально стою? Почему?", "Что нужно сделать, чтобы получить желаемое?", "Что я ДЕЛАЮ для своего счастья?", "Что бы я сделал, если бы проснулся самым уверенным человеком на Земле?"],

    ["Какого ресурса не хватает? Где и как взять? Чем заменить?",
        "Что зависит от меня?",
        "Если бы фея подарила мне 2 качества на выбор, что бы это было? Зачем?",
        "Какое качество я хочу развить в себе, чтобы приблизиться к мечте?",
        "За что я могу себя похвалить?",
        "На что можно переключиться, чтобы взять курс и идти дальше?",
        "Чему нужно научиться для того чтобы продвинуться к желаемому?",
        "Какое мое сильное качество может мне помочь?",
        "Какие важные ресурсы я не использую и не замечаю?",
        "Как уже сегодня я могу стать счастливее? Это даст силы для движения вперед?",
        "Какие мои сильные стороны пока не проявлены? Как проявить?",
        "Если бы у меня были все ресурсы (сильные стороны, умения, знания, опыт, время, финансы, связи) — что бы я тогда делал?",
        "А что, если какой-то моей части дать больше возможностей? Какой?",
        "Какое убеждение нужно встроить, приобрести?",
        "В чем моя внутренняя сила?",
        "Кто, что может помочь?",
        "Если нажать на волшебную кнопку и на экране появится идеальное решение — что там написано?",
        "Какие ресурсы у меня уже есть?",
        "Что нужно сделать сегодня, чтобы уснуть более счастливым?",
        "Какое убеждение о себе у меня есть, которое помогает?"],

    ["Что мне мешает?",
        "Как я поддерживаю устаревший сценарий?",
        "Какую цену я плачу за свои сомнения, неверие в свои силы?",
        "Какая мне выгода оставаться на месте? Что я могу потерять? Что я выбираю?",
        "Чему я придаю слишком большое значение?",
        "С чем я борюсь? Что можно выбрать вместо борьбы?",
        "Какие 3 вещи, которые я делаю постоянно, мне мешают?",
        "За что давно пора себя простить?",
        "В чем я твердо уверен, что никогда не смогу, что это не для меня? А что, если я ошибаюсь?",
        "В чем мои слабые стороны? Как сбалансировать?",
        "Как отпустить то, на что не могу повлиять?",
        "От какого правила стоит отказаться?",
        "Где я теряю энергию? Как это исправить?",
        "Что может пойти не так? Как себя поддержу? На что в себе смогу опереться?",
        "Что может приблизить меня к желаемому, но я себе запрещаю?",
        "Какие из моих убеждений мешают мне в достижении целей? Что будет, если я их отпущу?",
        "Как я себя останавливаю? Как я себя пугаю?",
        "Где я трачу силы и время необдуманно (впустую)?",
        "Чего я боюсь? Какие возможности может дать принятие этого страха?",
        "Чем я рискую? Как снизить риски?"],

    ["Какие мои действия на данный момент могут принести самые большие результаты?",
        "Какое действие я сделаю сегодня, чтобы укрепить веру в себя?",
        "Какие маленькие шаги я могу сделать, чтобы подобраться ближе к своей мечте?",
        "Что я выбираю — подождать или сделать шаг? Если подождать, то сколько?",
        "Какое 1 изменение нужно внести в режим дня, что продвинет меня больше всего?",
        "Что мне поможет начать действовать?",
        "Что я обещаю себе?",
        "Какие шаги я сделаю в ближайшие 2 дня?",
        "Что теперь буду делать по-другому?",
        "На чем важно сейчас сосредоточиться?"]
];
