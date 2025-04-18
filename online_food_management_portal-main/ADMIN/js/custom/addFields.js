function add_more(){
    var add_more = $("#add_more").val();
    add_more++;
    $("#add_more").val(add_more); 
    var data = '<div class="form-group" style = "padding-top: 40px;" id="box'+add_more+'"><div class="col-md-6"><input type= "text" name = "dish_attribute[]" class="form-control" placeholder="Please enter dish status" required value = ""></div><div class="col-md-4"><input type= "text" name = "price[]" class="form-control" placeholder="Please enter dish status" required value = ""></div><div class="col-md-2"><button  type = "button" class="btn btn-md btn-danger" class="form-control" onclick = add_remove("'+add_more+'")>Remove</button></div></div>';
$("#box_id").append(data);}

function add_remove(id){
$("#box"+id).remove();
}
