@extends('layouts.app')
@section('script')
    {{--    <script src="https://cdn.ckeditor.com/ckeditor5/16.0.0/inline/ckeditor.js"></script>--}}
    {{--    <script src="{{ mix('js/editor.js') }}" defer></script>--}}
@endsection
@section('content')
    <div class="container">
        <div >
            <div class="col-lg-12 col-xl-10">
                <h1>{{ $post->title }}</h1>
                <div>
                    {!! $post->body !!}
                </div>
            </div>

        </div>
    </div>

@endsection
