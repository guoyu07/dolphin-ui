/*
 *Author: Nicholas Merowsky
 *Date: 09 Apr 2015
 *Ascription:
 */

var element_highlighted;
var element_highlighted_table;
var element_highlighted_value;
var element_highlighted_id;
var element_highlighted_type;
var element_highlighted_onclick;

function editBox(uid, id, type, table, element){
	
	var havePermission = 0;
	
	$.ajax({ type: "GET",
					url: BASE_PATH+"/public/ajax/browse_edit.php",
					data: { p: 'checkPerms', id: id, uid: uid, table: table},
					async: false,
					success : function(r)
					{
						havePermission = r;
					}
				});
	
	if (havePermission == 1) {
		if (element_highlighted != null) {
			element_highlighted.innerHTML = element_highlighted_value;
			element_highlighted.onclick = element_highlighted_onclick;
		}
		element_highlighted = element;
		element_highlighted_value = element.innerHTML;
		element_highlighted_id = id;
		element_highlighted_type = type;
		element_highlighted_table = table;
		element_highlighted_onclick = element.onclick;
		element.innerHTML = '';
		
		console.log(uid);
		
		var textarea = document.createElement('textarea');
		textarea.setAttribute('type', 'text');
		textarea.setAttribute('class', 'form-control');
		textarea.setAttribute('rows', '5');
		textarea.setAttribute('onkeydown', 'submitChanges(this)');
		
		element.setAttribute('value', element_highlighted_value);
		element.appendChild(textarea);
		textarea.innerHTML = element_highlighted_value;
		element.onclick = '';
	}
}

function submitChanges(ele) {
	var successBool = false;
    if(event.keyCode == 13) {
        $.ajax({ type: "GET",
					url: BASE_PATH+"/public/ajax/browse_edit.php",
					data: { p: 'updateDatabase', id: element_highlighted_id, type: element_highlighted_type, table: element_highlighted_table, value: ele.value},
					async: false,
					success : function(r)
					{
						console.log(r);
						if (r == 1) {
							successBool = true;
						}
					}
				});
		if (successBool) {
			element_highlighted.innerHTML = ele.value;
			element_highlighted.onclick = element_highlighted_onclick;
			
			clearElementHighlighted();
		}
    }else if(event.keyCode == 27) {
		element_highlighted.innerHTML = element_highlighted_value;
		element_highlighted.onclick = element_highlighted_onclick;
		
		clearElementHighlighted();
	}
}

function clearElementHighlighted(){
	element_highlighted = null;
	element_highlighted_table = null;
	element_highlighted_value = null;
	element_highlighted_id = null;
	element_highlighted_type = null;
	element_highlighted_onclick = null;
}