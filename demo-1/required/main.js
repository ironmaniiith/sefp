(function getAllSubjects() {
	var headings = document.getElementById('headings');
	$.ajax({
		url: 'http://demo.aalekhjain.me/api/getAllSubjects',
		success: function(data) {
			data.forEach(function(val, index) {
				var id = val['id'];
				var name = val['name'];
				var th = document.createElement('th');
				th.id = id;
				th.innerHTML = name;
				headings.appendChild(th);
			});
		}
	})
})();

function insertAllMarks(tr, id) {
	$.ajax({
		url: 'http://demo.aalekhjain.me/api/getAllMarks/' + id,
		success: function(data) {
			var obtained_marks = data['obtained_marks'];
			obtained_marks.forEach(function(obtained_mark, index) {
				var td = document.createElement('td');
				td.innerHTML = obtained_mark;
				tr.appendChild(td);
			});
		}
	})
}

function getAllStudents() {
	var table_body = document.getElementById('table_body');
	$.ajax({
	url: "http://demo.aalekhjain.me/api/getAllStudents",
		success: function(students){
	   		students.forEach(function(id, index) {
	   			var tr = document.createElement('tr');
	   			tr.className = 'entry';
	   			var td = document.createElement('td');
	   			td.className = 'rollnumber';
	   			td.innerHTML = id;
	   			tr.appendChild(td);
	   			table_body.appendChild(tr);
	   			insertAllMarks(tr, id);
	   		});
		}
	});
}

getAllStudents();