let recievedData = [
    { "name": '조민근', "email": 'mongnyang@naver.com', "phone": '010-6755-0817' }
    , { "name": '전우치', "email": 'woochi@naver.com', "phone": '010-6123-4567' }
    , { "name": '임꺽정', "email": 'lim@naver.com', "phone": '010-4445-0827' }
    , { "name": '손오공', "email": 'monkey@naver.com', "phone": '010-4578-9786' }
    , { "name": '사오정', "email": 'deaf@naver.com', "phone": '010-6565-9876' }
];

$(function () {
    // recieve 버튼에 이벤트 설정해서 초기화
    $('#recieve').on('click', init);
    //  전체 선택 체크박스를 체크하면 모두 체크되도록 설정
    $("#checkAll").on('click', function () {
        if ($(this).is(':checked')) {
            $('tbody input[type=checkbox]').prop('checked', true);
        } else {
            $('tbody input[type=checkbox]').prop('checked', false);

        }
    });
    // 삭제버튼을 클릭하면 체크된 모든 고객 명단을 삭제
    $("#deleteMember").on('click', function () {
        let checkItem = $('tbody input[type=checkbox]:checked');
        checkItem.parent().parent().remove(); // tr을 삭제하기 위해 부모의 부모
    });
});

function init() {
    // Clear the tbody before appending new data
    $('tbody').empty();

    // Initialize final as an empty string to store all the rows
    let final = '';

    // Loop through each item in receivedData
    $.each(recievedData, function (index, item) {
        let name = item['name'];
        let email = item['email'];
        let phone = item['phone'];

        // Append each row to the final string
        final +=
            `<tr>
                        <td class="box"><input type="checkbox"></td>
                        <td class="name">${name}</td>
                        <td class="email">${email}</td>
                        <td class="phone">${phone}</td>
                        <td class="btn"><input type="button" class="btn" value="삭제"></td>
                    </tr>`;
    });

    // Set the final string as the HTML content of the tbody
    $('tbody').html(final);
    $('.btn').on('click', deleteItem);
}
function deleteItem() {
    let checkedItem = $('tbody input:checkbox:checked').parent().parent();
    checkedItem.remove();
}