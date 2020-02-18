@extends('layouts.app')

@section('topcontent')
    <div >
        <div class="row justify-content-center">
            <div class="row justify-content-center"  style="background-color: lightgray;padding-top: 16px;width: 1000px" >
                <div id="leftside" style="width: 150px"></div>
                <div id="mainplace" style="width: 600px;">  @foreach($posts as $post)
                        <div style="border-radius: 3px;margin-bottom: 15px; ;background-color: white;padding: 3px">
                            <h3><strong> {{$post->title}}</strong></h3>
                            {!! Str::limit($post->body,100,'... | read more') !!}
                        </div>
                    @endforeach</div>
                <div id="rightside" style="width: 230px"></div>

            </div>
        </div>
    </div>
@endsection
