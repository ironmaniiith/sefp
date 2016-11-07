var USER = prompt("Enter user name");
var HOST = 'http://localhost:8081';

;(function() {
    var chatHistory = [],
        chatBox = document.getElementById('chat_text_area'),
        chatList = document.getElementById('chat_list'),
        chatArea = document.getElementById('chat_area');

    function detectEnter(event) {
        // Detect if enter key is pressed while writing in the chat box
        if (event.keyCode === 13) {
            var value = chatBox.value;
            addMessage(value);
            chatBox.value = '';
        }
    }
    chatBox.onkeypress = detectEnter;

    function addMessage(message) {
        $.ajax({
            url: HOST + "/api/insert",
            // type: "POST",
            data: { name: USER, message: message },
            success: function(result) {
                console.log(result);
            }
        });
    }

    function updateChatHistory(messages) {
        if (messages.length <= chatHistory.length) {
            return;
        }
        var prevLength = chatHistory.length;
        chatHistory = messages;
        var newChats = Array.prototype.slice.call(chatHistory, prevLength);
        var length = newChats.length;
        for (var i = 0; i < length; i++) {
            appendChat(newChats[i]);
        }
        chatArea.scrollTop = chatArea.scrollHeight;
    }

    function appendChat(chat) {
        var name = chat.name,
            message = chat.message,
            date = chat.date;

        var mainMessage = name + ' | ' + message;
        
        var li = document.createElement('li');
        li.className = 'media';
        var a = document.createElement('a');
        a.className = 'pull-left';
        var img = document.createElement('img');
        img.className = 'media-object img-circle icon';
        img.src = 'assets/img/user.png';
        a.appendChild(img);
        li.appendChild(a);
        var text = document.createElement('h5');
        text.innerHTML = mainMessage;
        li.appendChild(text);
        var small = document.createElement('small');
        small.className = 'text-muted';
        small.innerHTML = date;
        li.appendChild(small);
        chatList.appendChild(li);

        /** Below is the structure that is generated dynamically by the above code
            
            <li class="media">
                <a class="pull-left" href="#">
                    <img class="media-object img-circle" style="max-height:40px;" src="assets/img/user.png">
                </a>
                <h5> User | Message </h5>
                <small class="text-muted">Active From 3 hours</small>
            </li>
        */
    }
    var POLLING_TIME = 500; // 500 ms
    // Continously poll for any new messages
    setInterval(function() {
        $.ajax({
            url: HOST + "/api/getAllMessages",
            success: function(result) {
                if (result) {
                    updateChatHistory(result.data);
                }
            }
        });
    }, POLLING_TIME);
})();


