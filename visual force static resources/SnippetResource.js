function getSnippetsPortal() {
var snippetText = "snippet BorrowerDetailView \n\t \"BorrowerDetailView\"\:\{ \n\t\"category\": \"${1:component}\",\n\t\"type\": \"${2:detail-view}\",\n\t\${3:componentActions\}\n\t}\n\
snippet componentActions \n\t \"componentActions\"\:\{\n\t\"name\":\"${1}\",\n\t\"actionType\":\"${2}\",\n\t\${3:property},\n\t\"confirmation\":\"${4}\",\n\t\${5:popup}\n\t}\n\
snippet property \n\t \"property\"\:\{\n\t\"uploadType\":\"${1}\",\n\t\"staticResourceName\":\"${2}\",\n\t\"uploadMultiple\":\"${3}\",\n\t\"accept\":\"${4}\"\n\t}\n\
snippet messages \n\t \"messages\": {\n\t\"showSavingAnimation\":\"${1}\",\n\t\"showSavingSuccess\":\"${2}\",\n\t\"hideSavingError\":${3}\",\n\t\"showSubmitAnimation\":\"${4}\",\n\t\"showSubmitSuccess\":\"${5}\",\n\t\"hideSubmitError\":\"${6}\"\n\t\"savingAnimationText\":\"${7}\",\n\t\"saveSuccessText\":\"${8}\",\n\t\"saveFailureText\":\"${9}\",\n\t\"submitAnimationText\":\"${10}\",\n\t\"submitSuccessText\":\"${11}\",\n\t\"submitFailureText\":\"${12}\",\n\t\"submitExpirationText\":\"${13}\",\n\t\"uploadFailureText\":\"${14}\",\n\t\"uploadFileTooLargeError\":\"${15}\",\n\t\"uploadInvalidFileType\":\"${16}\"\n\t}\n\
snippet componentActions_save \n\t \"componentActions\"\:\{\n\t\"name\":\"${1}\",\n\t\"actionType\":\"${2:save}\",\n\t\"property\":\"${3}\",\n\t\"confirmation\":\"${4}\",\n\t}\n\
snippet confirmation \n\t \"confirmation\"\:\{\n\t\"type\":\"${1:prompt}\",\n\t\"title\": \"${2:Are you sure?}\",\n\t\"content\": \"<p>No providing financial information will dramatically decrease the possiblity that you will be offered a loan.</p><p>Are you sure that you want to skip the financial informaiton step?</p>\",\n\t\"showConfirmButtons\": ${3:true},\n\t\"confirmText\": \"${4:Yes}\",\n\t\"cancelText\": \"${5:No}\"\n\t}\n\
snippet popup \n\t\"popup\": {\n\t\
\"direction\": \"bottom\",\n\t\
\"anchor\": \"cursor\",\n\t\
\"width\": 200,\n\t\
\"height\": 100,\n\t\
\"margin\": 50,\n\t\
\"borderColor\": \"#48ce94\",\n\t\
\"backgroundColor\": \"#ffffff\",\n\t\
\"content\": \"Lorem ipsum dolor sit amet consectetur.\"\n\t\
}\n\
snippet appearance \n\t \"appearance\": {\n\t\
\"render\":${1},\n\t\
\"enable\":${2},\n\t\
\"label\":\"${3}\",\n\t\
\"style\":\"${4}\",\n\t\
\"tooltip\":\"${5}\",\n\t\
\"position\":\"${6}\",\n\t\
\"belongTo\":[\"${7}\"]\n\t\
}\n\
";
return snippetText;   
}
function getSnippetsIntegration(){
    return "";
}