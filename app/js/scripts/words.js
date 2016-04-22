/**
 * Created by user on 25.03.16.
 */
'use strict';
//задание языка
var LN;

LN = navigator.language.substr(0, 2);
if(LN !== "en" && LN !== "ru"){
    LN = "en";
}

var _w = {
    "global":{
        flashscreen:{
            title:{
                en:"Summer Games 2016",
                ru:"Summer Games 2016"
            },
            text:{
                en:"",
                ru:""
            }
        },
        pages_title:{
            en:{
                index:"Trip Words",
                calendar: "Calendar",
                info: "Info",
                settings: "Settings",
                calendar_settings: "Configuration",
                notification: "Notification"
            },
            ru:{
                index:"Trip Words",
                calendar: "Календарь",
                info: "Информация",
                settings: "Настройки",
                calendar_settings: "Конфигурация",
                notification: "Уведомление"
            }
        },
        buttons:{
            back:{
                en:"Back",
                ru:"Назад"
            },
            cancel:{
                en:"Cancel",
                ru:"Отмена"
            }
        }
    },
    "dif_filds":{
        en:{
            name:"Name",
            filter: "Filter",
            search: "Search",
            cancel: "Cancel",
            version: "version 1.0",
            nothing_found: "Nothing found",
            date: "Date",
            done: "Done",
            days:{
                mn:"days",
                ed:"day"
            },
            hours:{
                mn:"hours",
                ed:"hour"
            },
            minutes:{
                mn:"minutes",
                ed:"minute"
            },
            seconds:{
                mn:"seconds",
                ed:"second"
            },
            month:"August"
        },
        ru:{
            name:"Название тренировки",
            filter: "Фильтр",
            search: "Поиск",
            cancel: "Отмена",
            version: "версия 1.0",
            nothing_found: "Ничего не найдено",
            date: "Дата",
            done: "Готово",
            days:{
                mn:"дней",
                ed:"день"
            },
            hours:{
                mn:"часов",
                ed:"час"
            },
            minutes:{
                mn:"минут",
                ed:"минута"
            },
            seconds:{
                mn:"секунд",
                ed:"секунда"
            } ,
            month:"Август"
        }
    },

    "notification": {
        en: {
            title: "Summer Games 2016",
            text: "Summer Games 2016",
            ticker_text: "Summer Games 2016"
        },
        ru: {
            title: "Летние Игры 2016",
            text: "Летние Игры 2016",
            ticker_text: "Летние Игры 2016"
        }
    },
    "settings":{
        en:{
            sounds: "Sounds",
            notifications:"Notifications"
        },
        ru:{
            sounds: "Звуки",
            notifications:"Напоминания"
        }
    },
    "messages":{
        complete:{
            en:"Exercise finished",
            ru:"Упражнение закончено"
        },
        stop:{
            en:{
                title:"Finish exercise",
                content:"Are you sure?"
            },
            ru:{
                title:"Закончить упражнения",
                content:"Вы уверены?"
            }
        },
        select:{
            en:"Please, select at least one exercise!",
            ru:"Пожалуйста, выберите хотя бы одно упражнение!"
        },
        choose:{
            en:"Select planks",
            ru:"Выбор планок"
        },
        delete_statistic:{
            en:{
                title:"Delete all statistics",
                content:"Are you sure?"
            },
            ru:{
                title:"Удалить статистику",
                content:"Вы уверены?"
            }
        },
        default_settings:{
            en:{
                title:"Reset to defaults",
                content:"Are you sure?"
            },
            ru:{
                title:"Сброс настроек",
                content:"Вы уверены?"
            }
        },
        empty:{
            en:"No data",
            ru:"Нет данных"
        },
        delete:{
            en:"Delete",
            ru:"Удалить"
        },
        no_statistics:{
            en:"No Statistics",
            ru:"Нет статистики"
        }


    },
    "games":{
        "en":[
        {
            "name": "Opening ceremony",  //0
        },
        {
            "name": "Closing ceremony"  //1
        },
        {
            "name": "Archery"     //2
        },
        {
            "name": "Athletics"   //3
        },
        {
            "name": "Badminton"  //4
        },
        {
            "name": "Basketball"  //5
        },
        {
            "name": "Boxing"     //6
        },
        {
            "name": "Canoeing slalom"  //7
        },
        {
            "name": "Canoeing sprint"  //8
        },
        {
            "name": "Road cycling"  //9
        },
        {
            "name": "Track cycling"  //10
        },
        {
            "name": "BMX cycling"   //11
        },
        {
            "name": "Mountain biking" //12
        },
        {
            "name": "Diving" //13
        },
        {
            "name": "Equestrian"  //14
        },
        {
            "name": "Fencing" //15
        },
        {
            "name": "Field hockey"  //16
        },
        {
            "name": "Football"  //17
        },
        {
            "name": "Golf"  //18
        },
        {
            "name": "Artistic gymnastics" //19
        },
        {
            "name": "Rhythmic gymnastics"  //20
        },
        {
            "name": "Trampolining" //21
        },
        {
            "name": "Handball" //22
        },
        {
            "name": "Judo"  //23
        },
        {
            "name": "Modern pentathlon"  //24
        },
        {
            "name": "Rowing"  //25
        },
        {
            "name": "Rugby sevens"  //26
        },
        {
            "name": "Sailing"  //27
        },
        {
            "name": "Shooting"  //28
        },
        {
            "name": "Swimming" //29
        },
        {
            "name": "Synchronized swimming" //30
        },
        {
            "name": "Table tennis" //31
        },
        {
            "name": "Taekwondo" //32
        },
        {
            "name": "Tennis"  //33
        },
        {
            "name": "Triathlon" //34
        },
        {
            "name": "Beach volleyball" //35
        },
        {
            "name": "Indoor volleyball" //36
        },
        {
            "name": "Water polo" //37
        },
        {
            "name": "Weightlifting" //38
        },
        {
            "name": "Wrestling"  //39
        }
        ],
        "ru":[
        {
            "name": "Церемония открытия"
        },
        {
            "name": "Церемония закрытия"
        },
        {
            "name": "Стрельба из лука"
        },
        {
            "name": "Легкая атлетика"
        },
        {
            "name": "Бадминтон"
        },
        {
            "name": "Баскетбол"
        },
        {
            "name": "Бокс"
        },
        {
            "name": "Гребной слалом"
        },
        {
            "name": "Гребной спринт"
        },
        {
            "name": "Шоссейные гонки"
        },
        {
            "name": "Трековые гонки"
        },
        {
            "name": "BMX гонки"
        },
        {
            "name": "Маунтинбайк"
        },
        {
            "name": "Прыжки в воду"
        },
        {
            "name": "Конный спорт"
        },
        {
            "name": "Фехтование"
        },
        {
            "name": "Хоккей на траве"
        },
        {
            "name": "Футбол"
        },
        {
            "name": "Гольф"
        },
        {
            "name": "Художественная гимнастика"
        },
        {
            "name": "Спортивная гимнастика"
        },
        {
            "name": "Прыжки на батуте"
        },
        {
            "name": "Гандбол"
        },
        {
            "name": "Дзюдо"
        },
        {
            "name": "Современное пятиборье"
        },
        {
            "name": "Академическая гребля"
        },
        {
            "name": "Регби-7"
        },
        {
            "name": "Парусный спорт"
        },
        {
            "name": "Стрельба"
        },
        {
            "name": "Плаванье"
        },
        {
            "name": "Синхронное плаванье"
        },
        {
            "name": "Настольный теннис"
        },
        {
            "name": "Тхэквондо"
        },
        {
            "name": "Теннис"
        },
        {
            "name": "Триатлон"
        },
        {
            "name": "Пляжный волейбол"
        },
        {
            "name": "Волейбол"
        },
        {
            "name": "Водное поло"
        },
        {
            "name": "Тяжелая атлетика"
        },
        {
            "name": "Борьба",
        }
    ]},
    "attractions":{
        "en":[
            {
                "name": "Christ the Redeemer",
                "content": "Situated atop of the 710 meter (2,330 feet) high peak (Corcovado Peak), the statue of “Cristo Redentor” stands with arms outstretched, gazing over the city. Construction of the statue began in 1922 during the popularity of the Art Deco movement, and the concrete and soapstone statue is considered the largest statue designed in the genre in the entire world. Most visitors take a vertical cog train to reach the base of the summit. From there, visitors can climb hundreds of steps to reach the top. Elevators and escalators offer a shorten trip.",
                "icon": "1"
            },
            {
                "name": "Copacabana",
                "content": "Copacabana is a unique beach, full of active vibes. Rio locals, called “cariocas”, like to play soccer or volleyball all day long, and vendors are always ready to sell their drinks and snacks from the kiosks that line the beach. Fort Copacabana, a military base with a wartime museum that is open to the public. It stands at one end of the beach. On the length of beach fronting the fort, fishermen stand ready with their morning catch for sale. Visitors and cariocas love to stroll along the long 4 km (2.5 mile) beach.",
                "icon": "2"
            },
            {
                "name": "Ipanema",
                "content": "This beach is famous due to the bossa nova song “The Girl from Ipanema” from the 1960s and remains one of Rio’s most popular tourist spots. A long, arcing expanse of soft white sand and rolling waves help Ipanema reaches the top of the “Best Beaches in the World” lists year after year. The beach is bordered by dozens of shops, cafés and restaurants as well as art galleries, theaters and clubs. Located in the South Zone (“Zona Sul”), Ipanema lies between the beaches of Copacabana and Leblon. Posts mark off the beach into sections, and different types of people tend to congregate in each area. Families prefer the section between posts 11 and 12 while the area near post 9 attracts sunbathers and artists",
                "icon": "3"
            },
            {
                "name": "Sugarloaf Mountain",
                "content": "Rising 400 meters (1,300 feet) above the mouth of Guanabara Bay, this attraction called Sugarloaf mountain is a giant monolith of quartz and granite that visitors can visit via a glass-walled cable car known as a “bondinho” or “teleférico”, which goes round the mountain. The cable car departs every 20 minutes from the base of Babilônia hill and climbs to the top of the Morro da Urca hill. From there, visitors can take a second cable car up to the mountain’s summit. A wonderful view on surrounding area awaits everyone who reaches the top.",
                "icon": "4"
            },
            {
                "name": "Jardim Botanico",
                "content": "Located to the west of the Lagoa neighborhood, the Rio de Janeiro Botanical Garden, or Jardim Botanico, is a home to more than 8,000 species of plants. The garden was built in the early 1800s and features many mature plants and trees, including avenues of towering palm trees. Visitors come to the park everyday to view the 600 species of orchids. The garden includes a large number of monuments, fountains, sculptures and features, along with a Japanese garden, a pond filled with water lilies and the new Museu do Meio Ambiente, which displays exhibits that focus on the environment.",
                "icon": "5"
            },
            {
                "name": "Santa Teresa Neighborhood",
                "content": "Situated on a hill overlooking the city’s harbor, the Santa Teresa neighborhood gives visitors a chance to travel back in time and experience the faded elegance of Rio’s 19th-century mansions and cobblestone streets. The region avoided any development until 1896, when an aqueduct was built which linked the neighborhood to the city. The district was a haven for artists, musicians and writers in the 20th century, and although trendy clubs and boutiques have since overtaken the neighborhood, it still retains a friendly artist-colony feeling. The city’s last remaining streetcar, the Santa Teresa Tram, used to be a popular tourist attractions in Rio de Janeiro but was closed after a serious accident on the line.",
                "icon": "6"
            },
            {
                "name": "Lapa Neighborhood",
                "content": "Located in the downtown section of Rio, also known as “Centro”, the Lapa neighborhood was once the city’s red-light district. Today, the area is well known for its vibrant nightlife. Lined with samba and choro bars, the music and dancing spills out into the street on weekend nights. Most of the neighborhood’s architecture dates back to the 1800s, providing a scenic background to all the festivities. It’s the perfect place to meet up with friends and cariocas to taste the local cuisine and to sip caipirinha, the national cocktail made with sugarcane hard liquor and lime. Escadaria Selarón, a set of famous steps connects both the Lapa and Santa Teresa neighborhoods.",
                "icon": "7"
            },
            {
                "name": "Tijuca National Park",
                "content": "One of the largest urban forest in the world, the Tijuca National Park covers a huge area of a mostly mountainous landscape. Visitors can reach Rio’s highest peak, the Pico da Tijuca, to discover the expansive views of Guanabara Bay and the city below. Nearly destroyed in the early 1800s by spreading coffee plantations, much of the forest was replanted by hand in the latter half of the century with as many as nine million trees. Attractions include the Mayrink Chapel, which has murals painted by the famed Brazilian neo-realism painter Cândido Portinari, and the tumbling 100-foot Cascatinha Waterfall.",
                "icon": "8"
            },
            {
                "name": "Maracana Stadium",
                "content": "Football (or soccer) is absolutely the most important sport in Brazil and the Maracanã Stadium is one of Rio’s most important landmarks. Once the world’s highest capacity football venue, it was able to hold nearly 200,000 people when it first opened in 1950. In modern times, the capacity has been reduced because of safety considerations, and to provide seated places for all the fans. It was partially rebuilt in preparation for the 2014 World Cup and is currently able to seat up to 80,000 spectators making it the largest stadium in South America.",
                "icon": "9"
            },
            {
                "name": "Lagoa Neighborhood",
                "content": "The Lagoa area is not only the most exclusive neighborhood in the southern “Zona Sul” district but is also the third-most expensive neighborhood in all of South America. It is also home to a large lagoon known as the Lagoa Rodrigo de Freitas. The four-mile path encircling the lagoon is a favorite spot for joggers and cyclists. Open-air cafés and restaurants along the shore offer stunning views of the lagoon and the beaches beyond. It might not be as accessible as other neighborhoods but it offers a bit different taste of Rio.",
                "icon": "10"
            },
            {
                "name": "Ilha de Paquetá",
                "content": "The island of Paquetá, with an area of a little more than a square kilometer, lies in Guanabara Bay. It became a fashionable resort in the early 1800s, when Portuguese Emperor Dom João VI spent his summers here. Solar del Rey, a palace in which Dom João VI frequently stayed, is among the interesting old buildings, which also include the 1698 chapel of São Roque and the house of José Bonifácio de Andrada e Silva, father of Brazilian independence. No cars disturb the peace of the island, but you can explore it on foot, by rented bicycle, or in a horse-drawn carriage. Palms line the island's beaches, where you'll find colorful food stands grilling fresh fish.",
                "icon": "11"
            },
            {
                "name": "Passeio Público",
                "content": "Stretching along Avenida Beira-Mar, Passeio Público is an attractive park designed in 1779 by a group of artists. Brazil's oldest public park and one of the oldest in the Americas, it is filled with sculptures and pavilions with paintings. The Baroque entrance, a stone staircase, fountains, and statues of figures from mythology provide focal points in this expansive green space. To its east along the bay is Parque do Flamengo and the Marina da Glória, with gardens and Monumento aos Mortos, a memorial to the dead of World War II. At the north end of Flamengo Park is the Museum of Modern Art.",
                "icon": "12"
            },
            {
                "name": "Cinelândia",
                "content": "Adjoining the Passeio Público is the Cinelândia district, one of Rio's political and cultural centers, filled with magnificent public buildings from the first decades of the 20th century, after Rio de Janeiro became capital of Brazil. The Academia Brasileira de Letras (Academy of Letters) occupies a building in Avenida Presidente Wilson. It was donated to the city by the French government in 1923 to house a society established in the late 19th century by a group of writers and poets inspired by the Académie Française. The society's purpose is to safeguard the Brazilian Portuguese language and promote Brazilian literature.",
                "icon": "13"
            },
            {
                "name": "Nossa Senhora do Carmo",
                "content": "The parish church of Nossa Senhora do Carmo was the Capela Real (Royal Chapel) from 1808 to 1889 and the cathedral until the modern one replaced it in 1976. Connected to it by a passage is a second Carmelite church, Monte do Carmo, built in 1755. Highlights are its Baroque façade, stone doorway, and the white and gold carving in the Chapel of the Novitiate. The 1761 former cathedral is richly decorated with carving and has a silver high altar. In a side street is the chapel of Nossa Senhora do Cabo da Boa Esperança (Our Lady of the Cape of Good Hope), the last surviving street oratory in the city.",
                "icon": "14"
            },
            {
                "name": "Quinta da Boa Vista",
                "content": "The gardens, villas, and imperial palaces of São Cristóvão are now public parks and museums, the foremost of which is Quinta da Boa Vista. From 1808 to 1889, the palace was the residence of the royal and the imperial family and was later altered and rebuilt as the Palácio de São Cristóvão. It houses the National Museum, which has the largest zoological, botanical, ethnographic, and archaeology collections in the country, totaling more than a million items. In the expansive park are gardens with lakes, woodlands, and caves, which you can reach via a miniature railway. Inside the park is a zoo with more than 2,000 species of mammals, birds, and reptiles from Brazil and around the world.",
                "icon": "15"
            },
            {
                "name": "Prainha",
                "content": "Known as Brazil's \"little\" beach, this remote paradise is about 20 miles west of Ipanema Beach. Prainha's magnificent shoreline features a backdrop of rolling hills and verdant rainforest. The shore empties out during the weekdays, making Prainha a great alternative to other tourist-laden beaches. Many travelers love the quieter, more local vibe at Prainha, especially in the off-season. While the beach offers plenty of sunbathing spots, visitors recommend bringing your own food and drink as the area lacks nearby restaurants and the options that are available tend to be overpriced. The best way to get there is by car, since the beach is about 13 miles west of downtown Rio.",
                "icon": "16"
            }
        ],
        "ru":[
            {
                "name": "Статуя Христа-Искупителя",
                "content": "Расположенная на высоте 710 метров, на горе Корковаду, статуя “Cristo Redentor” вглядывается в расположенный внизу город. Строительство статуи началось в 1922 под влиянием популярного движения Арт-Деко. Это творение из бетона и талькового камня считается самой большой статуей в мире, выполненной в данном стиле.  Если вы хотите посетить эту достопримечательность, то вы можете воспользоваться подъемниками или самостоятельно преодолеть многочисленные ступени.",
                "icon": "1"
            },
            {
                "name": "Копакабана",
                "content": "Копакабана — это пляж, полный летнего настроения круглый год. Здесь вы застанете местных жителей, “cariocas”, играющих в футбол и хоккей весь день, и многочисленных продавцов, расположенных вдоль пляжа. Вы также можете посетить бывшую военную базу – Форт Копакабана. Рыбаки всегда готовы поделиться с вами утренним уловом (конечно, не бесплатно). Как туристы, так и местные обожают прогулки вдоль линии пляжа (около 4 километров).",
                "icon": "2"
            },
            {
                "name": "Ипанема",
                "content": "Этот пляж известен всем благодаря песне в жанре Босанова “Девушка с Ипанемы”. С ослепляющим песком и лазурными волнами, этот пляж традиционно возглавляет списки лучших пляжей в мире. По мимо воды, пляж окружен многочисленными магазинами, кафе, ресторанами, а также художественными галереями, клубами и т.д. Пляж Ипанема расположен между двумя другими популярными пляжами – Копакабана и Лебнон. Ипанема разделе на зоны, специально для удобства посетителей. В одной из частей пляжа расположились многочисленные семьи, тогда как в другой вы можете найти художников.",
                "icon": "3"
            },
            {
                "name": "Сахарная голова",
                "content": "Возвышающаяся на высоте 400 метров над заливом Гуанабара, эта достопримечательность зовется Сахарной головой и представляет из себя монолит из кварца и гранита. Вы можете взобраться на самую вершину гору благодаря фуникулерам, которые называются “bondinho” и отправляются в сторону горы каждые 20 минут. Добравшись до вершины горы, вам откроется прекрасный вид на залив Гуанабара и на близлежащие окрестности.",
                "icon": "4"
            },
            {
                "name": "Jardim Botanico",
                "content": "Расположенный к западу от района Lagoa, в ботаническом саду Рио-де-Жанейро, или Jardim Botanico, растут 8000 видов растений и деревьев. Сад был построен в начале 19 века и в нем можно найти много старых деревьев, включая многочисленные авеню с пальмами. Посетители могут увидеть более 600 видов орхидей. Помимо статуй и фонтанов, сад известен своим японским садом, прудом с водными лилиями и музеем Museu do Meio Ambiente, который посвящен окружающей среде.",
                "icon": "5"
            },
            {
                "name": "Район Santa Teresa",
                "content": "Район Santa Teresa расположен на холме над главной гаванью города, и является прекрасной возможность перенестись назад во времени и увидеть, каким был Рио в 19 веке — вымощенные улочки и помпезные особняки. Вплоть до 20 века этот район не подвергался застройке, и лишь сейчас его улицы заполонили вездесущие клубы и бутики, при этом не дав Santa Teresa потерять свой неповторимый стиль. Атмосфере старины также способствует старинный трамвай, который, к сожалению, недоступен туристам в последние годы из-за частых несчастных случаев.",
                "icon": "6"
            },
            {
                "name": "Район Lapa",
                "content": "Район Lapa расположен в центре города, зовущимся “Centro”, и некогда был районом красных фонарей. Сейчас этот район полон жизни днем и ночью. Музыка, танцы, коктейли – ими полны как многочисленные бары и клубы, так и сами улицы. Многочисленные здания, построенные в 18 веке, представляют собой живописную сцену для фестивалей. Здесь вы всегда можете встретиться с друзьями и попробовать местную кухню и “caipirinha” - национальный коктель из ликера и лайма. Незабудьте посетить Escadaria Selarón – известные красочные ступени между районами Lapa и  Santa Teresa.",
                "icon": "7"
            },
            {
                "name": "Национальный парк Тижука",
                "content": "Один из самых больших лесопарков в мире - Национальный парк Тижука — покрывает огромную территорию. Посетители могут посетить самую высокую вершину Рио - Pico da Tijuca, где вам откроется вид на залив  Гуанабара. Парк был почти разрушен в начале 19 века из-за многочисленных плантаций кофе, но был восстановлен — почти 9 миллионов деревьев были посажены вручную. В парке можно найти много достопримечательностей, включая водопад  Cascatinha и церковь  Mayrink с фресками в стиле неореализма.",
                "icon": "8"
            },
            {
                "name": "Стадион Маракана",
                "content": "Футбол является неотъемлемой частью Бразилии и стадион Маракана является одной из главных достопримечательностей Рио-де-Жанейро. Открывшись в 1950, стадион был самым большим в мире, вмещая 200 тысяч человек. На данный момент вместимость стадиона уменьшена из соображений безопасности, и чтобы предоставить места для всех желающих. Стадион был частично переделан в 2014 к Чемпионату Мира по Футбола и на данный момент имеет 80 тысяч сидячих мест, делая его самым большим в Южной Америке.",
                "icon": "9"
            },
            {
                "name": "Район Lagoa",
                "content": "Район Lagoa не только наиболее «эксклюзивный» в Южной Зоне Рио-де-Жанейро, но так является третьим самым дорогим районов в Южной Америке. Здесь также находится огромный залив под названием  Lagoa Rodrigo de Freitas. Длинная дорога вдоль лагуны – излюбленное место для бегунов и велосипедистов. А кафе и рестораны вдоль побережья откроют вам завораживающий вид на лагуну. Этот район не такой доступный, как остальные, но даст вам почувствовать Рио с другой стороны.",
                "icon": "10"
            },
            {
                "name": "Ilha de Paquetá",
                "content": "Остров Paquetá размером не превышает всего квадратный километр,  и находится в заливе  Гуанабара. Этот остров был резиденцией короля Жуана VI, который жил там летом. Одним из наиболее интересных зданий является  Solar del Rey, дворец Жуана VI, а также церковь São Roque, датируемая 1698 годом и дом, некогда принадлежащий  José Bonifácio de Andrada e Silva, отцу бразильской революции. На острове вы не найдете машин, но сможете исследовать его пешком, на велосипеде или даже на карете. Остров обрамлен пальмами, вдоль которых расположились цветастые киоски со свежей рыбой.",
                "icon": "11"
            },
            {
                "name": "Passeio Público",
                "content": "Passeio Público – это парк, созданный в 1779 группой художников. Это самый старый публичный парк в Бразлии и один из самых старых в Южной Америке, в нем вы найдете скульптуры и павильоны с картинами. Огромные зеленые пространства парка наполнены фонтанами, статуями в силе Барокко и каменными ступенями. К востоку от парка также нахожятся  Parque do Flamengo и Marina da Glória с мемориалом жертвам Второй Мировой войны. На севере же расположился музей современного искусства.",
                "icon": "12"
            },
            {
                "name": "Cinelândia",
                "content": "Рядом с Passeio Público находится район  Cinelândia, один из главных политических и культурных центров, полный помпезных зданий первой половины 20 века, когда Рио-де-Жанейро стал столицей Бразилии. Там же с 1923 расположена Академия словесности ( Academia Brasileira de Letras) в здании, построенном французскими архитекторами. Она была создана в 19 веке писателями и поэтами для сохранения культурной ценности бразильского языка. Они были вдохновлены академиями в другим европейских страна, в частности французской  Académie Française.",
                "icon": "13"
            },
            {
                "name": "Nossa Senhora do Carmo",
                "content": "Приходская церковь Nossa Senhora do Carmo была королевской церковью (Capela Real) с 1808 по 1889, а затем собором, пока не приобрела свой облик в 1976. Сама церковь соединена с церковью Monte do Carmo, построенной в 1755. Они выполнены в стиле Барокко, с каменными фасадами и золотыми орнаментами, а внутри можно найти серебряный алтарь. На соседней улице находится церковь Nossa Senhora do Cabo da Boa Esperança, последняя конгрегация ораторианцев в городе.",
                "icon": "14"
            },
            {
                "name": "Quinta da Boa Vista",
                "content": "Сады, виллы и королевские дворцы в São Cristóvão сейчас представляют из себя парки и музеи, доступные всем желающим. Дворец  Quinta da Boa Vista был резиденцией короля с 1808 по 1889, и позднее был изменен и перестроен как Palácio de São Cristóvão. В нем находится Национальный Музей, включающий самые большие коллекции животные, растений, археологических находок в стране, насчитывая более миллиона экспонатов. В огромном парке находятся озера, леса и пещеры, которые доступны на миниатюрной железной дороге. Внутри парка проживают 2000 видов животных, птиц и рептилий со всего мира.",
                "icon": "15"
            },
            {
                "name": "Prainha",
                "content": "Также называющийся \"маленький\" пляж Бразилии, этот удаленный рай находится в 30 километрах от Ипанемы. У побережья Prainha расположились крутые холмы и густые тропические леса. Пляж пустует в будние дни, что делает его отличной альтернативой другим популярным пляжам. Многие туристы предпочитают его из-за удаленности и тишины, особенно вне сезона. Хотя пляж и привлекателен, стоит захватить свою еду и напитки, из-за недостатка ресторанов и кафе в округе, а цены немногочисленных заведений завышены. Самый лучший способ добраться до Prainha – взять машину.",
                "icon": "16"
            }
        ]
    }
};
