



$("#myvia,#playmyinfo").mouseenter(function(){
    $("#playmyinfo").css("display","block");});

$("#myvia,#playmyinfo").mouseleave(function(){
    $("#playmyinfo").css("display","none");});


function hideAndShow(kind){
    if(kind == 1){
        //show the login and hide the regist
        $('#registerModal').modal('hide');
        $('#loginModal').modal('toggle');
    }
    else if(kind == 2){
        $('#loginModal').modal('hide');
        $('#registerModal').modal('toggle');
    }
};

// $(document).ready(function () {
//     $('#login1').click(function () {
//
//
//         {
//
//             $('#logining').css('display','none');
//             $('#logined').css('display','block');
//         }
//     })
// });
// $("#login1").click(function(){
//     $("#my-modal-alert").modal("toggle");
//
//     $(".modal-backdrop").remove();//删除class值为modal-backdrop的标签，可去除阴影
// });
function exit(){
    var ling=document.getElementById('logining');
    var led=document.getElementById('logined');
    ling.style.display='block';
    led.style.display='none';
}
//登录表单验证
$(function () {
    $('#loginForm').bootstrapValidator({
        //验证成功显示的图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        //校验表单元素  用户名 密码
        //校验状态：未校验 NOT_VALIDATED 正在校验 VALIDATING 校验成功 VALID 校验失败 INVALID
        //校验规则：需要去配置
        //fields 字段接下去就是表单内元素
        fields: {
            //指定需要校验的元素 通过设置name去指定
            account: {
                //配置校验规则
                validators: {
                    //配置具体规则
                    notEmpty: {
                        //设置提示信息
                        message: '请输入手机号码'
                    },
                    stringLength: {
                        min: 11,
                        max: 11,
                        message: '请输入正确的手机号码'
                    },
                    //自定义
                    callback: {
                        message: '此手机号尚未注册'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '请输入密码'
                    },
                    stringLength: {
                        min: 6,
                        max: 11,
                        message: '密码为6~11个字符'
                    },
                    callback: {
                        message: "密码错误"
                    }
                }
            }
        } //校验失败时，默认阻止提交，校验成功，默认提交
        //组织默认提交方式，改用ajax提交方式
    })
        .on('success.form.bv', function (e) {
            //阻止浏览器默认行为
            e.preventDefault();
            var $form = $(e.target);
            //发送登录信息
            $.ajax({
                type: 'post',
                url: 'user/userLogin',
                //传递的数据格式  对象  序列化后的数据 key=value的字符串例如[{'account'：'13610118382','password':'123456'}]
                data: $form.serialize(),
                dataType: 'json',
                success: function (data) {
                    //响应成功后的逻辑
                    if (data.success) {
                        location.href = '/index.html';
                    } else {
                        if (data.error == 1000) {
                            //调用校验插件，让该选项为校验失败状态，提示校验失败的信息
                            //updateStatus('那个元素','修改为什么状态','校验规则'
                            //后台验证用户名
                            $form.data('bootstrapValidator').updateStatus('account', 'INVALID', 'callback')
                        } else if (data.error == 1001) {
                            //后台验证密码
                            $form.data('bootstrapValidator').updateStatus('password', 'INVALID', 'callback')
                        }
                    }


                }
            });

        });
});
$(function () {
    $('#registerForm').bootstrapValidator({
        feedbackIcons:{
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields:{
            //验证手机号
            account:{
                validators: {
                    notEmpty:{
                        message:'请输入手机号码'
                    },
                    stringLength:{
                        min:11,
                        max:11,
                        message:'请输入正确的手机号码'
                    },
                    callback:{
                        message:'此号码已被注册'
                    }
                }
            },
            //验证密码
            password:{
                validators:{
                    notEmpty:{
                        message:'请输入密码'
                    },
                    stringLength:{
                        min:6,
                        max:11,
                        message:'密码为6~11个字符'
                    },
                    regexp:{
                        regexp:/^[a-zA-Z0-9_\.]+$/,
                        message:'所输入字符不符合要求，请输入字母，数字或_\.'
                    }
                }
            },
            vpassword:{
                validators:{
                    notEmpty:{
                        message:'请确认密码'
                    },
                    identical:{
                        field:'password',
                        message:'输入的内容不一致'
                    }

                }
            },
            email:{
                validators:{
                    notEmpty:{
                        message:'请输入邮箱'
                    },
                    emailAddress:{
                        message:'不是正确的邮箱地址'
                    }
                }
            }
        }

    }).on('success.form.bv',function(f){
        f.preventDefault();
        var $form=$(f.target);
        $.ajax({
            type:'post',
            url:'user/userRegister',
            data:$form.serialize(),
            dataType:'json',
            success:function (data) {
                if(data.success){
                    location.href='/index.html';
                }else {
                    //后台验证用户名(账号是否已被注册)
                    if(data.error==1003){
                        $form.data('bootstrapValidator').updateStatus('account','INVALID','callback')
                    }//验证邮箱是否已被使用
                    else if(data.error==1004){
                        $form.data('bootstrapValidator').updateStatus('email','INVALID','callback')
                    }

                }

            }
        })
    })


})