let str = '31.12.2025 30.11.2024 29.10.2023';

let match = str.replace(/(\d{1,2})\.(\d{1,2})\.(\d{4})/g, (match0, match1, match2, match3) => {
    return match3+'-'+match2+'-'+match1;
});

console.log(match);