// Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не оценил использование комментариев в ветке development и попросил их убрать. Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->

const comment = 'VladislavGazuk <!-- 12345 -->';

function checkComment(comment) {
    try {
        let newFile = comment.replace(/<!--(.*?)-->/g, '');
        if (newFile.length === comment.length) throw new Error('Комментариев не найдено');
        return newFile;
    } catch (error) {
        return error.message;
    }
}

console.log(checkComment(comment));