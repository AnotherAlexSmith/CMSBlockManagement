/**
* Created by alex on 4/7/14.
*/
result = 0;
Validation.add('validate-identifier','Identifier must be unique!',function(value){
    var baseUrl = 'http://'+window.location.host+location.pathname.match(/(.*)\/index\.php\//)[0];
    if ($('block_block_id'))
    {
        var blockId = $('block_block_id').value
    }
    else
    {
        blockId = '';
    }
    var pars = 'value=' + value + '&block_id=' + blockId;
    new Ajax.Request(baseUrl+'admin/block/validate',
    {
        method: 'post',
        parameters: pars,
        asynchronous: false,
        onSuccess: function(transport)
        {
           result = transport.responseText;
        },
        onFailure: function() { alert('Something went wrong...');}
    });

    return result;
});