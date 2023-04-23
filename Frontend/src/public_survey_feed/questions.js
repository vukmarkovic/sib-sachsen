const choiceCase = {
    choiceYesNo: [
        {
            value: 1,
            text: {
                en: 'Yes',
                de: 'Ja',
            },
        },
        {
            value: 2,
            text: {
                en: 'No',
                de: 'Nein',
            },
        },
    ],
    choiceNormal: [
        {
            value: 1,
            text: {
                en: 'Disagree at all',
                de: 'Stimme überhaupt nicht zu',
            },
        },
        {
            value: 2,
            text: {
                en: 'Rather disagree',
                de: 'Stimme eher nicht zu',
            },
        },
        {
            value: 3,
            text: {
                en: 'partly, partly',
                de: 'Teils, teils',
            },
        },
        {
            value: 4,
            text: {
                en: 'I rather agree',
                de: 'Stimme eher zu',
            },
        },
        {
            value: 5,
            text: {
                en: 'Totally agree about',
                de: 'Stimme voll und ganz zu',
            },
        },
        // {
        //     value: 0,
        //     text: {
        //         en: 'No Answer',
        //         de: 'Keine Antwort',
        //     },
        // },
    ],
}

export const jsonData = [
    {
        key: 'question_2',
        type: 'radio',
        group: 'Allgemein',
        question: {
            en: 'How long have you worked at SIB?',
            de: 'Wie lange waren Sie im SIB tätig?',
        },
        choices: [
            {
                value: 1,
                text: {
                    en: 'under 1 year,',
                    de: 'unter 1 Jahr',
                },
            },
            {
                value: 2,
                text: {
                    en: '1 – 2 years',
                    de: '1 – 2 Jahre',
                },
            },
            {
                value: 3,
                text: {
                    en: '3 – 5 years',
                    de: '3 – 5 Jahre',
                },
            },
            {
                value: 4,
                text: {
                    en: 'more than 5 years',
                    de: 'mehr als 5 Jahre',
                },
            },
        ],
    },
    {
        key: 'question_3',
        type: 'radio',
        group: 'Allgemein',
        isRequired: true,
        question: {
            en: 'Why did you leave SIB?',
            de: 'Aus welchem Grund haben Sie den SIB verlassen?',
        },
        choices: [
            {
                value: 1,
                text: {
                    en: 'compensation',
                    de: 'Vergütung',
                },
            },
            {
                value: 2,
                text: {
                    en: 'career opportunities',
                    de: 'Karrieremöglichkeiten',
                },
            },
            {
                value: 3,
                text: {
                    en: 'leadership behavior',
                    de: 'Führungsverhalten',
                },
            },
            {
                value: 4,
                text: {
                    en: 'working conditions',
                    de: 'Arbeitsbedingungen',
                },
            },
            {
                value: 5,
                text: {
                    en: 'Health reasons',
                    de: 'Gesundheitliche Gründe',
                },
            },
            {
                value: 6,
                text: {
                    en: 'retirement',
                    de: 'Renteneintritt',
                },
            },
            {
                value: 7,
                text: {
                    en: 'Personal reasons',
                    de: 'Persönliche Gründe',
                },
            },
        ],
    },
    {
        key: 'question_4',
        type: 'comment',
        group: 'Allgemein',
        question: {
            en: 'Please briefly explain your reason.',
            de: 'Bitte erläutern Sie kurz ihren Grund:',
        },
        choices: [],
    },
    {
        key: 'question_5',
        type: 'comment',
        group: 'Allgemein',
        question: {
            en: 'What could the state-owned company SIB have done to keep you longer?',
            de: 'Was hätte der Staatsbetrieb SIB tun können, um Sie länger zu halten?',
        },
        choices: [],
    },
    {
        key: 'question_6',
        type: 'radio',
        group: 'Vergütung',
        question: {
            en: 'Did you feel you were getting market-rate compensation for your position?',
            de: 'Hatten Sie das Gefühl, eine marktübliche Vergütung für Ihre Position zu erhalten?',
        },
        choices: choiceCase.choiceYesNo,
    },
    {
        key: 'question_6a',
        type: 'radio',
        group: 'Vergütung',
        visibleIf: '{question_3}==6',
        question: {
            en: '',
            de: 'Konnten Sie abschlagsfrei nach 45 Jahren in Rente gehen?',
        },
        choices: choiceCase.choiceYesNo,
    },
    {
        key: 'question_6b',
        type: 'comment',
        group: 'Vergütung',
        visibleIf: '{question_3}==6',
        question: {
            en: '',
            de: 'Was hätte Sie motiviert trotz Renteintritt länger beim SIB zu bleiben?',
        },
        choices: [],
    },
    {
        key: 'question_7',
        type: 'radio',
        group: 'Vergütung',
        visibleIf: '{question_3}!=6',
        question: {
            en: 'I left SIB for better pay.',
            de: 'Ich habe den SIB aufgrund einer besseren Vergütung verlassen.',
        },
        choices: choiceCase.choiceYesNo,
    },
    {
        key: 'question_8',
        type: 'radio',
        group: 'Vergütung',
        visibleIf: '{question_3}!=6',
        question: {
            en: '',
            de: 'Wie viel Prozent verdienen Sie in Ihrem neuen Unternehmen mehr?',
        },
        choices: [
            {
                value: 0,
                text: {
                    en: 'less than before',
                    de: 'weniger als zuvor',
                },
            },
            {
                value: 1,
                text: {
                    en: '0% – earning the same',
                    de: 'gleich viel',
                },
            },
            {
                value: 2,
                text: {
                    en: 'under 5 %,',
                    de: 'unter 5 %',
                },
            },
            {
                value: 3,
                text: {
                    en: '5 - 10 %',
                    de: '5 - 10 %',
                },
            },
            {
                value: 4,
                text: {
                    en: '11 - 25 %',
                    de: '11 - 25 %',
                },
            },
            {
                value: 5,
                text: {
                    en: '26 - 50 %',
                    de: '26 - 50 %',
                },
            },
            {
                value: 6,
                text: {
                    en: 'over 50 %',
                    de: 'über 50 %',
                },
            },
        ],
    },
    {
        key: 'question_9',
        type: 'radio',
        group: 'Vergütung',
        visibleIf: '{question_3}!=6',
        question: {
            en: 'Will you receive employee benefits at your new company?',
            de: 'Erhalten Sie in Ihrem neuen Unternehmen Mitarbeiter-Zusatzleistungen?',
        },
        choices: choiceCase.choiceYesNo,
    },
    {
        key: 'question_10',
        type: 'comment',
        group: 'Vergütung',
        question: {
            en: 'What additional employee benefits make an employer like the Free State of Saxony or the SIB attractive for you?',
            de: 'Welche Mitarbeiter-Zusatzleistungen machen für Sie einen Arbeitgeber wie den Freistaat Sachsen bzw. den SIB attraktiv?',
        },
        relevantQuestion: {
            en: 'Which employee benefits did an employer like the SIB attractive for you?',
            de: 'Welche Mitarbeiter-Zusatzleistungen machten für Sie einen Arbeitgeber wie den Freistatt und den SIB attraktiv?',
        },
        choices: [],
    },
    {
        key: 'question_11',
        type: 'radio',
        group: 'Karrieremöglichkeiten',
        question: {
            en: 'There were opportunities to advance professionally in the SIB.',
            de: 'Die Möglichkeiten fachlich im SIB aufzusteigen waren gegeben.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_12',
        type: 'radio',
        group: 'Karrieremöglichkeiten',
        question: {
            en: 'I was satisfied with the offer of training and further education at the SIB.',
            de: 'Ich war mit dem Angebot für Aus- und Weiterbildung im SIB zufrieden.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_13',
        type: 'radio',
        group: 'Karrieremöglichkeiten',
        question: {
            en: 'SIB has taken my training requests into account.',
            de: 'Meine Schulungswünsche wurden seitens SIB berücksichtig.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_14',
        type: 'radio',
        group: 'Karrieremöglichkeiten',
        visibleIf: '{question_3}!=6',
        question: {
            en: '',
            de: 'Die Chance, eine Führungsrolle als Karriereschritt im SIB zu übernehmen, war mir wichtig.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_15',
        type: 'radio',
        group: 'Karrieremöglichkeiten',
        visibleIf: '{question_3}!=6',
        question: {
            en: 'Pursuing a professional career at SIB made sense to me and was no reason to leave SIB.',
            de: 'Eine fachliche Karriere im SIB einzuschlagen, hat sich mir angeboten und war kein Grund dafür, den SIB zu verlassen.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_16',
        type: 'radio',
        group: 'Karrieremöglichkeiten',
        question: {
            en: 'I missed a personal development plan at SIB.',
            de: 'Mir fehlte im SIB ein persönlicher Entwicklungsplan.',
        },
        choices: choiceCase.choiceYesNo,
    },
    {
        key: 'question_17',
        type: 'radio',
        group: 'Karrieremöglichkeiten',
        question: {
            en: 'In addition to my professional development, the SIB also took care of my personal development.',
            de: 'Neben meiner fachlichen Entwicklung hat der SIB sich auch um meine persönliche Entwicklung gekümmert.',
        },
        choices: choiceCase.choiceYesNo,
    },
    {
        key: 'question_18',
        type: 'radio',
        group: 'Sicherheit',
        question: {
            en: 'Working at the SIB gave me a feeling of security in life.',
            de: 'Die Arbeit im SIB hat mir ein Gefühl von Lebenssicherheit gegeben.',
        },
        relevantQuestion: {
            en: 'Working in the SIB gave me a feeling of security of life.',
            de: 'Die Arbeit im SIB gab mir ein Gefühl von Lebenssicherheit.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_19',
        type: 'radio',
        group: 'Sicherheit',
        question: {
            en: 'It was possible for me to build something up through my work at the SIB.',
            de: 'Mir war es möglich, durch die Arbeit im SIB etwas aufzubauen.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_20',
        type: 'radio',
        group: 'Sicherheit',
        question: {
            en: 'It was possible for me to build something up through my work at the SIB.',
            de: 'Mir ist es wichtig, dass mir meine Arbeit ein grundlegendes Gefühl von Lebenssicherheit gibt.',
        },
        relevantQuestion: {
            en: 'It was important to me that my work gave me a fundamental feeling of life safety.',
            de: 'Mir war es wichtig, dass mir meine Arbeit ein grundlegendes Gefühl von Lebenssicherheit gab.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_21',
        type: 'radio',
        group: 'Sicherheit',
        question: {
            en: 'Job security is not important to me.',
            de: 'Arbeitsplatzsicherheit ist mir nicht wichtig.',
        },
        relevantQuestion: {
            en: 'Job security was not important to me.',
            de: 'Arbeitsplatzsicherheit war mir nicht wichtig.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_22',
        type: 'radio',
        group: 'Sicherheit',
        question: {
            en: 'Job security is not important to me.',
            de: 'Eine Lebensplanung war mir mit der Tätigkeit im SIB möglich.',
        },
        relevantQuestion: {
            en: 'I was able to plan life with the work in the SIB.',
            de: 'Eine Lebensplanung war mir mit der Tätigkeit im SIB möglich.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_23',
        type: 'radio',
        group: 'Sicherheit',
        question: {
            en: 'I prefer professional development potential to professional security.',
            de: 'Ich bevorzuge berufliche Entwicklungspotenziale gegenüber beruflicher Sicherheit.',
        },
        relevantQuestion: {
            en: 'I preferred professional development potential towards professional security.',
            de: 'Ich bevorzugte berufliche Entwicklungspotenziale gegenüber beruflicher Sicherheit.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_24',
        type: 'radio',
        group: 'Führungsverhalten',
        question: {
            en: 'I received extensive training to do my job.',
            de: 'Ich erhielt eine umfangreiche Einarbeitung, um meine Aufgaben zu erledigen.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_25',
        type: 'radio',
        group: 'Führungsverhalten',
        question: {
            en: 'I received sufficient helpful feedback on my work from my manager at SIB.',
            de: 'Ich erhielt von meiner Führungsperson beim SIB ausreichend hilfreiche Rückmeldung zu meiner Arbeit.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_26',
        type: 'radio',
        group: 'Führungsverhalten',
        question: {
            en: 'If there was important news in the SIB, I was sufficiently informed.',
            de: 'Wenn es wichtige Neuigkeiten im SIB gab, wurde ich ausreichend darüber informiert.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_27',
        type: 'radio',
        group: 'Führungsverhalten',
        question: {
            en: 'My manager at SIB knew how to lead the team well.',
            de: 'Meine Führungsperson im SIB wusste das Team gut zu führen.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_28',
        type: 'radio',
        group: 'Führungsverhalten',
        question: {
            en: 'When I did a good job, I was appreciated by my manager at the SIB.',
            de: 'Ich wurde bei guter Arbeit von meiner Führungsperson des SIB gewertschätzt.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_29',
        type: 'radio',
        group: 'Führungsverhalten',
        question: {
            en: 'My manager at the SIB accepted my ideas and suggestions.',
            de: 'Meine Ideen und Vorschläge hat meine Führungsperson des SIB angenommen.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_30',
        type: 'radio',
        group: 'Arbeitsbedingungen',
        question: {
            en: 'My field of activity at SIB corresponded to the tasks in the job description.',
            de: 'Mein Tätigkeitsfeld beim SIB entsprach den Aufgaben in der Stellenbeschreibung.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_31',
        type: 'radio',
        group: 'Arbeitsbedingungen',
        question: {
            en: 'The working atmosphere at SIB was friendly and pleasant.',
            de: 'Das Arbeitsklima im SIB war freundlich und angenehm.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_31a',
        type: 'radio',
        group: 'Arbeitsbedingungen',
        question: {
            en: '',
            de: 'Beim Festlegen meiner Aufgabeninhalte/ Verantwortungsbereiche wurde auf meine Lebensumstände seitens des SIB Rücksicht genommen.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_31b',
        type: 'radio',
        group: 'Arbeitsbedingungen',
        question: {
            en: '',
            de: 'Die Dauer der wöchentlichen Arbeitszeit (Vollzeit/ Teilzeit) konnte ich an meine Lebensumstände flexibel anpassen.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_32',
        type: 'radio',
        group: 'Arbeitsbedingungen',
        question: {
            en: '',
            de: 'Ich konnte die Lage der täglichen Arbeitszeit (Beginn und Ende) beim SIB frei wählen.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_33',
        type: 'radio',
        group: 'Arbeitsbedingungen',
        question: {
            en: 'The cooperation with my work colleagues was excellent.',
            de: 'Die Zusammenarbeit mit meinen Arbeitskolleginnen lief ausgezeichnet.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_34',
        type: 'radio',
        group: 'Arbeitsbedingungen',
        question: {
            en: 'The goals and strategies of the SIB were always openly communicated to me.',
            de: 'Die Ziele und Strategien des SIB wurden an mich stets offen kommuniziert.',
        },
        choices: choiceCase.choiceNormal,
    },
    {
        key: 'question_35',
        type: 'radio',
        group: 'Arbeitsbedingungen',
        question: {
            en: 'It is important to me to adapt my working hours flexibly to my private life situation.',
            de: 'Mir ist es wichtig meine tägliche Arbeitszeit flexibel an meine private Lebenssituation anzupassen.',
        },
        relevantQuestion: {
            en: 'It was important to me to adapt my working hours flexibly to my private life situation.',
            de: 'Mir war es wichtig meine Arbeitszeit flexibel an meine private Lebenssituation anzupassen.',
        },
        choices: choiceCase.choiceYesNo,
    },
    {
        key: 'question_35a',
        type: 'radio',
        group: 'Arbeitsbedingungen',
        question: {
            en: '',
            de: 'Je nach Lebensumständen möchte ich die Möglichkeit haben in Voll- oder Teilzeit zu wechseln.',
        },
        choices: choiceCase.choiceYesNo,
    },
    {
        key: 'question_35b',
        type: 'radio',
        group: 'Arbeitsbedingungen',
        question: {
            en: '',
            de: 'Ein attraktiver Arbeitgeber bietet mir die Chance, Aufgaben an meine Lebenssituation anzupassen.',
        },
        choices: choiceCase.choiceYesNo,
    },
    {
        key: 'question_36',
        type: 'radio',
        group: 'Arbeitsbedingungen',
        visibleIf: '{question_3}!=6',
        question: {
            en: 'I had all the equipment I needed at my workplace at SIB.',
            de: 'Ich hatte alles an Ausstattung an meinem Arbeitsplatz im SIB, was ich benötigte.',
        },
        choices: choiceCase.choiceYesNo,
    },
    {
        key: 'question_37',
        type: 'comment',
        group: 'Arbeitsbedingungen',
        question: {
            en: 'What did you miss?',
            de: 'Was hat Ihnen gefehlt?',
        },
        relevantQuestion: {
            en: 'What did you lack?',
            de: 'Was hatte Ihnen gefehlt?',
        },
        choices: [],
    },
    {
        key: 'question_38',
        type: 'comment',
        group: 'Abschluss',
        visibleIf: '{question_3}!=6',
        question: {
            en: 'What would have had to be the case for you to have stayed at SIB?',
            de: 'Was hätte gegeben sein müssen, dass Sie beim SIB geblieben wären?',
        },
        choices: [],
    },
    {
        key: 'question_39',
        type: 'radio',
        group: 'Abschluss',
        question: {
            en: 'How likely is it that you would recommend the SIB as an employer or operational authority?',
            de: 'Wie wahrscheinlich ist es, dass Sie den SIB als Arbeitgeber bzw. Einsatzbehörde weiterempfehlen?',
        },
        description: {
            en: '0 = unlikely, 10 = extremly likely',
            de: '0 = unwahrscheinlich, 10 = äußerst wahrscheinlich',
        },
        choices: [
            {
                value: 0,
                text: {
                    en: '0',
                    de: '0',
                },
            },
            {
                value: 1,
                text: {
                    en: '1',
                    de: '1',
                },
            },
            {
                value: 2,
                text: {
                    en: '2',
                    de: '2',
                },
            },
            {
                value: 3,
                text: {
                    en: '3',
                    de: '3',
                },
            },
            {
                value: 4,
                text: {
                    en: '4',
                    de: '4',
                },
            },
            {
                value: 5,
                text: {
                    en: '5',
                    de: '5',
                },
            },
            {
                value: 6,
                text: {
                    en: '6',
                    de: '6',
                },
            },
            {
                value: 7,
                text: {
                    en: '7',
                    de: '7',
                },
            },
            {
                value: 8,
                text: {
                    en: '8',
                    de: '8',
                },
            },
            {
                value: 9,
                text: {
                    en: '9',
                    de: '9',
                },
            },
            {
                value: 10,
                text: {
                    en: '10',
                    de: '10',
                },
            },
        ],
    },
    {
        key: 'question_40',
        type: 'comment',
        group: 'Abschluss',
        question: {
            en: 'Finally, if you have anything else you would like to tell us, you can leave us a message here.',
            de: 'Wenn Sie uns abschließend noch etwas mitteilen möchten, können Sie uns hier eine Mitteilung hinterlassen.',
        },
        choices: [],
    },
]

export const surveyLangData = {
    player_name: {
        en: 'What is your name?',
        de: 'Wie heissen Sie?',
    },
    response_required: {
        en: 'This field is required.',
        de: 'Dieses Feld ist erforderlich.',
    },
    intro: {
        en: 'Saxony: state enterprise real estate and construction management | exit questionnaire.',
        de: 'Staatsbetrieb Sächsisches Immobilien- und Baumanagement | Befragung ehemaliger Bediensteter: Arbeitszufriedenheit',
    },
    outro: {
        en: 'Thank you for supporting us in developing further as an employer.',
        de: 'Vielen Dank, dass Sie uns dabei unterstützen uns als Arbeitgeber weiter zu entwickeln.',
    },
}
