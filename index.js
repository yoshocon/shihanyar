var are_you_shihanyar = (function()
{
    var name = '未命名';
    return
    {
        shihanyar: function(shihanyar_name)
        {
            return (shihanyar_name || name) + ' , 你喜憨爾？';
        }
    };
})();


exports = module.exports = are_you_shihanyar;
