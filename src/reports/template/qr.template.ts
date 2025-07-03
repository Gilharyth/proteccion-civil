import { TDocumentDefinitions } from "pdfmake/interfaces";

// Define font files
export let fonts = {
    Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf'
    }
};

export function docDefinition(attendanceUrl: string): TDocumentDefinitions {
    return {
        content: [
            // basic usage
            {
                qr: attendanceUrl, fit: 200, alignment: 'center', 
            },
        ]
    }
}