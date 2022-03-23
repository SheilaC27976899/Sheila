<h1>Исследователь объектов</h1>
<p>Объектная модель Internet Explorer-а версии 4 и выше:<UL>
<LI>window - объект, дающий доступ к окну броузера
<LI>frames - объект, дающий доступ к фреймам
<LI>document - объект, содержащий в себе всю страничку
<LI>all - полная коллекция всех тегов документа
<LI>forms - коллекция форм
<LI>anchors - коллекция якорей
<LI>appleеs - коллекция апплетов
<LI>embeds - коллекция внедренных объектов
<LI>filters - коллекция фильтров
<LI>images - коллекция изображений
<LI>links - коллекция ссылок
<LI>plugins - коллекция подключаемых модулей
<LI>scripts - коллекция блоков &lt;script>&lt;/script>
<LI>selection - коллекция выделений
<LI>stylesheets - коллекция объектов с индивидуально заданными стилями
<LI>history - объект, дающий доступ к истории посещенных ссылок
<LI>navigator - объект, дающий доступ к характеристикам броузера
<LI>location - объект, содержащий текущий URL
<LI>event - объект, дающий доступ к событиям
<LI>screen - объект, дающий доступ к характеристикам экрана
</UL>
<SCRIPT type="text/javascript">
<!--
function print(s) {
	if (typeof(s)=="object") {
		var o = s;
		s = "";
		for (var i in o)
/*@cc_on @*/
/*@if (@_jscript_version>4)
try
{@end @*/

			s += i+"="+o[i]+"\n";
/*@if (@_jscript_version>4)
		    }catch (err) {
			s += i+"="+err.description+"\n";

		    }
@end @*/
/*@cc_off @*/
	}
	return s; }
// -->
</SCRIPT>
<FORM NAME="objectform" onsubmit="btn.click();return false;">
Введите имя объекта (например, <B>navigator</B>, <B>window</B>, <B>document</B>, <B>event</B>):
<BR><INPUT TYPE=text NAME="objname" SIZE=40 VALUE="window">
<INPUT NAME="btn" TYPE="button" VALUE=" Look "
onclick="form.reslt.value=print(eval(form.objname.value));" >
<BR><TEXTAREA ROWS=16 COLS=60 NAME="reslt"></TEXTAREA>
</P>
</FORM>
