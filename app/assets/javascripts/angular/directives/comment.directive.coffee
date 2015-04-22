app.directive 'comment', ->
  restrict: 'E'
  template: '''
    <div class="message">
      <span class="name">{{item.name}}</span>
      <img ng-src="{{item.img}}"/>
      <span class="mes">{{item.message}}</span>
    </div>
  '''
