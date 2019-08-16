const inputPage = [
    [
        ["surname", "Прізвище", "InputText"], 
        ["name", "Ім'я", "InputText"], 
        ["patronymic", "По батькові", "InputText"], 
        ["birthday", "Дата народження", "Calendar"], 
        ["gender", "Стать", "Dropdown", [{option: "Не вибрана"}, {option: "Чоловіча"}, {option: "Жіноча"}]]
    ],
    [
        ["passportSeries", "Паспорт серія", "InputText"], 
        ["passportNumber", "Паспорт номер", "InputText"],
        ["passportIssuer", "Ким видаий", "InputText"],
        ["passportDate", "Дата видачі", "Calendar"]
    ],
    [
        [ [ ["ipn", "ІПН", "InputText"], ["noIpn", "Відмовився від IПН", "Checkbox"] ], "ІПН", "inputWithCheck"]
        
    ],
    [
        ["regAddress", "Адреса реєстрації", "InputText"],
        [ [ ["localAddress", "Фактична адреса",  "InputText"], 
            ["isLiveRegAddress", "Проживає за місцем реєстрації", "Checkbox"] ], "Фактича адреса", "inputWithCheck"]
    ]
]

export default inputPage;